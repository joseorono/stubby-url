import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const urlRouter = createTRPCRouter({

    create: protectedProcedure
    .input(z.object({ name: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
        // simulate a slow db call

        return ctx.db.shortenedUrl.create({
        data: {
            name: input.name,
            createdBy: { connect: { id: ctx.session.user.id } },
        },
        });
    }),

    getLatest: protectedProcedure.query(({ ctx }) => {
        return ctx.db.shortenedUrl.findFirst({
            orderBy: { createdAt: "desc" },
            where: { 
            createdBy: { id: ctx.session.user.id } 
            },
        });
    }),

    addNewVisit: publicProcedure.query(() => {
        return "Hello World";
    }),

    getLinkClickCount: publicProcedure.query(() => {
        return "Hello World";
    }),

    getLink: publicProcedure.query(() => {
        return "Hello World";
    }),



});
