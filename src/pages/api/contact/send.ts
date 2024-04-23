import type { APIRoute } from "astro";
import { siteConfig } from "@/config";
import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";

export const POST: APIRoute = async ({ request, params, redirect }) => {
    // load form data
    const data = await request.formData();

    // if honeypot exists, end request
    // else process contact email
    if (data.get("zip")) {
        return redirect("/", 307);
    } else {
        // form variables
        const contactName = data.get("name");
        const contactEmail = data.get("email");
        const contactPhone = data.get("phone");
        const contactMessage = data.get("message");
        const contactPath = data.get("url");
        const contactSource = data.get("paid_source");
        const contactClickId = data.get("paid_clickid");

        const subjectLine = `New Lead from eriksolsen.com - ${contactName}`;

        const personalization = [
            {
                email: siteConfig.email.base,
                data: {
                    name: contactName,
                    email: contactEmail,
                    phone: contactPhone,
                    message: contactMessage,
                    path: contactPath,
                    source: contactSource,
                    clickid: contactClickId,
                },
            },
        ];

        const mailerSend = new MailerSend({
            apiKey: import.meta.env.MAILERSEND_TOKEN,
        });

        const sentFrom = new Sender(siteConfig.email.send, siteConfig.name);
        const recipients = [new Recipient(siteConfig.email.base, siteConfig.name)];
        const replyTo = new Sender(contactEmail, contactName);

        const emailParams = new EmailParams().setFrom(sentFrom).setTo(recipients).setReplyTo(replyTo).setSubject(subjectLine).setPersonalization(personalization).setTemplateId("3z0vklo0r3el7qrx");

        await mailerSend.email.send(emailParams);

        return redirect("/contact/success/", 307);
    }
};
