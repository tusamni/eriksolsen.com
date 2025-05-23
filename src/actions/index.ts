import { defineAction, ActionError } from 'astro:actions';
import { z } from 'astro:schema';
import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";
import { siteConfig } from "@/config";
import { cosmic } from "@/library/cosmic"
import { cosmicDate } from "@/functions/DateTime";

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

			// insert record to db
			await cosmic.objects.insertOne({
				type: "leads",
				title: input.name,
				metadata: {
					date: cosmicDate(),
					email: input.email,
					phone: input.phone,
					message: input.message,
					marketing: {
						path: input.path,
						query: input.marketing
					},
				},
			});

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
			await mailerSend.email.send(leadParams);

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
			await mailerSend.email.send(thanksParams);
		}
	}),
	// updateLead: defineAction({
	// 	accept: "form",
	// 	input: z.object({
	// 		uid: z.string(),
	// 		status: z.string(),
	// 		date: z.string().optional(),
	// 		value: z.number().optional(),
	// 	}),
	// 	handler: async (input) => {
	// 		try {
	// 			await cosmic.objects.updateOne(input.uid, {
	// 				metadata: {
	// 					status: input.status,
	// 					value: input.value,
	// 					sold_date: input.status === "Sold" ? input.date : ""
	// 				}
	// 			});
	// 		} catch (error) {
	// 			console.log(error)
	// 		}
	// 	}
	// }),
	// deleteLead: defineAction({
	// 	input: z.string(),
	// 	handler: async (input) => {
	// 		try {
	// 			await cosmic.objects.updateOne(input, {
	// 				status: `draft`,
	// 			});
	// 		} catch (error) {
	// 			console.log(error)
	// 		}
	// 	}
	// })
}