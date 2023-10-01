import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const contactRouter = createTRPCRouter({
    createContact: publicProcedure
        .input(
            z.object({
                name: z.string(),
                email: z.string().email(),
                message: z.string(),
            })
        )
        .mutation(async ({ ctx, input }) => {
            const { name, email, message } = input;

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
