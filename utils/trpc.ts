import { createTRPCReact } from '@trpc/react';
import type { AppRouter } from '../server/router';

export const trpc = createTRPCReact<AppRouter>();
