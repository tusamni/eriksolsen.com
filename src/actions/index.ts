import { defineAction, z, ActionError } from "astro:actions";
import { siteConfig } from "@/config";
import { Supabase } from "@/db";
import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";

export const server = {
    // on contact form submit
    contact: defineAction({
        accept: "form",
        input: z.object({
            name: z.string(),
            email: z.string().email(),
            zip: z.string().optional(),
            phone: z.string().optional(),
            message: z.string().optional(),
            url: z.string(),
        }),
        handler: async ({ name, email, zip, phone, message, url }, context) => {
            // new instance of mailersend
            const mailerSend = new MailerSend({
                apiKey: import.meta.env.MAILERSEND_TOKEN,
            });

            honeypot
            if (zip) {
                throw new ActionError({
                    code: "BAD_REQUEST",
                    message: "There was an issue with submitting the form."
                })
            }

            // if there is cookie data for sources
            const sourceData = []
            if (context.cookies.get("sourceData")) {
                sourceData.push(JSON.parse(context.cookies.get("sourceData").value));
            }

            const sentFrom = new Sender(siteConfig.email.base, siteConfig.name);

            // build and send the lead email        
            const leadSubject = `New Lead from eriksolsen.com - ${name}`;
            const leadRecipients = [new Recipient(siteConfig.email.base, siteConfig.name)];
            const leadReplyTo = new Sender(email, name);
            const leadPersonalization = [
                {
                    email: siteConfig.email.base,
                    data: {
                        name: name,
                        email: email,
                        phone: phone,
                        message: message,
                        path: url,
                    },
                },
            ];
            const leadParams = new EmailParams().setFrom(sentFrom).setTo(leadRecipients).setReplyTo(leadReplyTo).setSubject(leadSubject).setPersonalization(leadPersonalization).setTemplateId("3z0vklo0r3el7qrx");
            try {
                await mailerSend.email.send(leadParams);
            } catch (error) {
                console.error(error);
            }

            // build and send the thank you email
            const thanksSubject = `Thanks ${name}, I've Received Your Message!`;
            const thanksRecipients = [new Recipient(email, name)];
            const thanksReplyTo = new Sender(siteConfig.email.base, siteConfig.name);
            const thanksPersonalization = [
                {
                    email: email,
                    data: {
                        name: name
                    }
                }
            ]
            const thanksParams = new EmailParams().setFrom(sentFrom).setTo(thanksRecipients).setReplyTo(thanksReplyTo).setSubject(thanksSubject).setPersonalization(thanksPersonalization).setTemplateId("v69oxl51n6x4785k");
            try {
                await mailerSend.email.send(thanksParams);
            } catch (error) {
                console.error(error);
            }

            return { success: true };
        },
    })
};