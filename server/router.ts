import * as trpc from '@trpc/server';
import { z } from 'zod';

const posts = [
  { name: 'First Post' },
  { name: 'Second Post' },
  { name: 'Third Post' }
];

export const appRouter = trpc.router().query("hello", {
  resolve() {
    return "world";
  },
}).query("post.get", {
  resolve() {
    return posts;
  },
}).mutation("post.create", {
  input: z.object({
    name: z.string(),
  }),
  resolve({ input }) {
    posts.push(input);
    return input;
  },
});


export type AppRouter = typeof appRouter