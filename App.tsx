import { trpc } from "./utils/trpc"
import { QueryClient, QueryClientProvider } from 'react-query';
import { useState } from "react";

export const App = () => {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      url: 'http://localhost:5000',
    }),
  );
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <Component />
      </QueryClientProvider>
    </trpc.Provider>
  );
}

export const Component = () => {
  const posts = trpc.useQuery(['post.get'])

  return (
    <div>
      <h1>Posts</h1>
      {posts.data ?
        (
          <ul>
            {posts.data.map((post) => <li>{post.name}</li>) }
          </ul>
        )
        : <div>Loading...</div>
      }
    </div>
  )
}
