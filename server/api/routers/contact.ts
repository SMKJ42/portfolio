import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";
import axios from "axios";

export const contactRouter = createTRPCRouter({
    createContact: publicProcedure
        .input(
            z.object({
                name: z.string(),
                email: z.string().email(),
                message: z.string(),
                reCAPTCHA: z.string(),
            })
        )
        .mutation(async ({ ctx, input }) => {
            const { name, email, message } = input;
            const VERIFY_URL = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.PRIVATE_RECAPTCHA_KEY_V2}&response=${input.reCAPTCHA}`;

            const validate = await fetch(VERIFY_URL, {
                method: `POST`,
                headers: {
                    "Content-Type": "application/json",
                },
            })
                .then((response) => response.json())
                .then((data) => {
                    return data;
                });

            if (!validate.success) {
                throw new TRPCError({
                    code: "BAD_REQUEST",
                    message: "Unsuccessful reCAPTCHA verification.",
                });
            }

            return ctx.prisma.contact.create({
                data: {
                    name,
                    email,
                    message,
                },
            });
        }),
    clearContacts: publicProcedure
        .input(z.object({}))
        .mutation(async ({ ctx }) => {
            ctx.prisma.contact.deleteMany({});
            return true;
        }),
});
