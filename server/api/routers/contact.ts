import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";
import axios from "axios";

export const contactRouter = createTRPCRouter({
    createContact: publicProcedure
        .input(
            z.object({
                name: z.string().min(2).max(50),
                email: z.string().email().min(5).max(50),
                message: z.string().min(10).max(500),
                reCAPTCHA: z.string().min(50),
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

            ctx.prisma.contact.create({
                data: {
                    name,
                    email,
                    message,
                },
            });

            return {
                success: true,
            };
        }),
    clearContacts: publicProcedure
        .input(z.object({}))
        .mutation(async ({ ctx }) => {
            ctx.prisma.contact.deleteMany({});
            return true;
        }),
});
