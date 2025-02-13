import { defineAction, ActionError } from 'astro:actions';
import { z } from 'astro:schema';
import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";
import { siteConfig } from "@/config";
import { cosmic } from "@/library/cosmic"
import * as path from "path";
import { readFile } from "fs/promises";

export const server = {
	contact: defineAction({
		accept: "form",
		input: z.object({
			name: z.string(),
			email: z.string().email(),
			phone: z.string().optional(),
			zip: z.string().optional(),
			message: z.string().optional(),
			path: z.string(),
			marketing: z.string().optional()
		}),
		handler: async (input) => {
			if (input.zip) {
				throw new ActionError({
					code: "SPAM_ERROR",
					message: "There's been an error. Please try again later.",
				});
			}

			// get todays date
			let date = new Date();
			const dateOffset = date.getTimezoneOffset();
			date = new Date(date.getTime() - dateOffset * 60 * 1000);
			const dateFormat = date.toISOString().split("T")[0];

			// insert record to db
			try {
				await cosmic.objects.insertOne({
					type: "leads",
					title: input.name,
					metadata: {
						date: dateFormat,
						email: input.email,
						phone: input.phone,
						message: input.message,
						marketing: {
							path: input.path,
							query: input.marketing
						},
					},
				});
			} catch (error) {
				console.error(error);
			}

			// new instance of mailersend
			const mailerSend = new MailerSend({
				apiKey: import.meta.env.MAILERSEND_TOKEN,
			});
			const sentFrom = new Sender(siteConfig.email.base, siteConfig.name);

			// set personalization variables
			const leadSubject = `New Lead from eriksolsen.com - ${input.name}`;
			const leadRecipients = [new Recipient(siteConfig.email.base, siteConfig.name)];
			const leadReplyTo = new Sender(input.email, input.name);
			const leadPersonalization = [
				{
					email: siteConfig.email.base,
					data: {
						name: input.name,
						email: input.email,
						phone: input.phone,
						message: input.message,
						path: input.path,
						marketing: input.marketing
					},
				},
			];
			const leadParams = new EmailParams().setFrom(sentFrom).setTo(leadRecipients).setReplyTo(leadReplyTo).setSubject(leadSubject).setPersonalization(leadPersonalization).setTemplateId("3z0vklo0r3el7qrx");

			// send the contact email
			try {
				await mailerSend.email.send(leadParams);
			} catch (error) {
				console.error(error);
			}

			const thanksSubject = `Thanks ${input.name}, I've Received Your Message!`;
			const thanksRecipients = [new Recipient(input.email, input.name)];
			const thanksReplyTo = new Sender(siteConfig.email.base, siteConfig.name);
			const thanksPersonalization = [
				{
					email: input.email,
					data: {
						name: input.name
					}
				}
			]
			const thanksParams = new EmailParams().setFrom(sentFrom).setTo(thanksRecipients).setReplyTo(thanksReplyTo).setSubject(thanksSubject).setPersonalization(thanksPersonalization).setTemplateId("v69oxl51n6x4785k");

			// send the thanks email
			try {
				await mailerSend.email.send(thanksParams);
			} catch (error) {
				console.error(error);
			}
		}
	}),
	metadata: defineAction({
		accept: "form",
		input: z.object({
			folder: z.string(),
			files: z.any()
		}),
		handler: async (input) => {
			const folder = input.folder;

			console.log(input)

			try {
				const { media: files } = await cosmic.media.find({
					folder: input.folder,
				});
			} catch (error) {
				console.error(error);
			}

			for (const file of input.files) {
				console.log(file);

				// let base = path.basename(file.original_name, path.extname(file.original_name));
				// let data = JSON.parse(await readFile(`./src/files/${base}.json`, "utf8"));

				// const alt = data.alt;
				// delete data.alt;

				// await cosmic.media.updateOne(file.id, {
				// 	alt_text: alt,
				// 	metadata: data,
				// });
			}
		}
	})
}