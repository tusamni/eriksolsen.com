import { defineAction, z } from "astro:actions";

export const server = {
    contact: defineAction({
        accept: "form",
        input: z.object({
            name: z.string().required(),
            email: z.string().email().required(),
            phone: z.string().optional(),
            message: z.string().optional(),
            path: z.string().required(),
            params: z.array().optional()
        }),
        handler: async ({ name, email, phone, message, path, params }) => {
            // subjects
            const leadSubject = `New Lead from eriksolsen.com - ${contactName}`;
            const thanksSubject = `Thanks ${contactName}, I've Received Your Message!`;

            

            return { success: true };
        },
    }),
};