import type { APIRoute } from "astro";
import { siteConfig } from "@/config";
import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";
import { supabaseService } from "@/library/supabase";

export const POST: APIRoute = async ({ request, params, redirect, cookies }) => {
    // load form data
    const data = await request.formData();

    // if honeypot exists, end request
    // else process contact email
    if (data.get("zip")) {
        return redirect("/", 307);
    }

    // form variables
    const contactName = data.get("name");
    const contactEmail = data.get("email");
    const contactPhone = data.get("phone");
    const contactMessage = data.get("message");
    const contactPath = data.get("url");

    const { error } = await supabaseService
        .from("leads")
        .insert({ name: contactName, email: contactEmail, phone: contactPhone, content: contactMessage, path: contactPath })
    if (error)
        console.log("Error inserting lead into database")

    // new instance of mailersend
    const mailerSend = new MailerSend({
        apiKey: import.meta.env.MAILERSEND_TOKEN,
    });
    const sentFrom = new Sender(siteConfig.email.base, siteConfig.name);

    // set personalization variables
    const leadSubject = `New Lead from eriksolsen.com - ${contactName}`;
    const leadRecipients = [new Recipient(siteConfig.email.base, siteConfig.name)];
    const leadReplyTo = new Sender(contactEmail, contactName);
    const leadPersonalization = [
        {
            email: siteConfig.email.base,
            data: {
                name: contactName,
                email: contactEmail,
                phone: contactPhone,
                message: contactMessage,
                path: contactPath
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

    const thanksSubject = `Thanks ${contactName}, I've Received Your Message!`;
    const thanksRecipients = [new Recipient(contactEmail, contactName)];
    const thanksReplyTo = new Sender(siteConfig.email.base, siteConfig.name);
    const thanksPersonalization = [
        {
            email: contactEmail,
            data: {
                name: contactName
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

    return redirect("/contact/success/", 307);
};