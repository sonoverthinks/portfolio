---
title: Data Fetching Done Right in Next
customID: 57e7c155-ca58-4102-8023-a8a884e7c987
tags: ["nextjs"]
---

How many ways can we fetch the [Pokemon API](https://pokeapi.co/) with either Server or Client components? Personally, I know at least three ways: fetching data from the server with the fetch API, fetching data from the client with the fetch API, and fetching data from the client with a third-party library like `useSWR`. In this blog, we'll demonstrate how to fetch data based on a single user input using all three methods mentioned above.

##### Getting Started

Create a Next.js project. In an earlier [blog](https://www.sonoverthinks.com/blog/implementing_search_with_url_search_params), I implemented a `Search` component utilizing URL search params. We will use this component to get input from the user. The user - you - will type in a number so that we can construct a string containing the URL to the Pokemon API like this: `https://pokeapi.co/api/v2/pokemon/${input}`. Let's create a `page.tsx` file in the `app/pokemon` directory, along with three components (`ServerFetch`, `ClientFetch`, and `ClientSWR`) in the `components` folder. We'll implement a unique data fetching method in each component.

```tsx
// src/app/pokemon/page.tsx

import Search from "../components/Search";
import ServerFetch from "../components/ServerFetch";
import ClientFetch from "../components/ClientFetch";
import ClientSWR from "../components/ClientSWR";

const page = () => {
  return (
    <div>
      <Search />
      <ServerFetch />
      <ClientFetch />
      <ClientSWR />
    </div>
  );
};

export default page;
```

Modify `page.tsx` and each of the three components so that we can pass the search query down to the components.

```tsx
// src/app/ServerFetch.tsx
// ...
type PageProps = {
  searchParams: {
    query?: string;
  };
};

const Page = ({ searchParams }: PageProps) => {
  const id = searchParams.query || "1";
  return (
    <div>
      <Search />
      <ServerFetch id={id} />
      <ClientFetch id={id} />
      <ClientSWR id={id} />
    </div>
  );
};

export default Page;
```

```tsx
// src/app/components/ServerFetch.tsx

type ServerFetchProps = {
  id: string;
};

const ServerFetch = ({ id }: ServerFetchProps) => {
  return <div>{id}</div>;
};

export default ServerFetch;
```

##### Fetching data from the server with fetch API

Here's the gist of fetching data on the server with fetch API:

- Create an async server component function.
- Use `await fetch()` inside the component to make the API call.
- Process the response (usually with `await response.json()`).
- Return JSX that uses the fetched data.

This approach allows you to fetch and use data directly within server components, simplifying the process compared to older Next.js data fetching methods. Here's the code in action:

```tsx
// src/app/components/ServerFetch.tsx

type ServerFetchProps = {
  id: string;
};

const ServerFetch = async ({ id }: ServerFetchProps) => {
  const fetchPokemon = async (id: string) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = res.json();
    return data;
  };
  const pokemon = await fetchPokemon(id);
  return <div>{pokemon.name}</div>;
};

export default ServerFetch;
```

##### Fetching data on the client with fetch API

We fetch data with the Fetch API on a client component using `useState` and `useEffect`:

- Create a state to store the fetched data.
- Use useEffect to trigger the fetch when the component mounts.
- Inside useEffect, create an async function to fetch data.
- Use fetch to make the API call, then update the state with the result.

This is the basic implementation:

```tsx
"use client";
import { useEffect, useState } from "react";

type ClientFetchProps = {
  id: string;
};
interface Pokemon {
  name: string;
}

const ClientFetch = ({ id }: ClientFetchProps) => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  useEffect(() => {
    const fetchPokemon = async (id: string) => {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await res.json();
      setPokemon(data);
    };
    fetchPokemon(id);
  }, [id]);
  return <div>{pokemon?.name}</div>;
};

export default ClientFetch;
```

Remember to use `"use client"` directive to create a client component in Next.js.

##### Fetching data on the client with third party library

We use `useSWR` to demonstrate fetching data with a third party library. Here's the gist of it:

- First, import `useSWR`from the `swr` package
- Then, define a fetcher function
- Use the `useSWR` hook in your component
- Finally, handle the returned data, error, and loading states

```tsx
"use client";

import React from "react";
import useSWR from "swr";

type ClientSWRProps = {
  id: string;
};

interface Pokemon {
  name: string;
}

const fetcher = async (url: string): Promise<Pokemon> => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

const ClientSWR = ({ id }: ClientSWRProps) => {
  const {
    data: pokemon,
    error,
    isLoading,
  } = useSWR(`https://pokeapi.co/api/v2/pokemon/${id}`, fetcher);

  if (error) return <div>Error</div>;
  if (isLoading) return <div>Loading...</div>;
  return <div>{pokemon?.name}</div>;
};

export default ClientSWR;
```

##### Summary

Ultimately, the best approach for fetching data in your application depends on your specific requirements, SEO, and the complexity of your data fetching needs. By understanding the strengths and weaknesses of each method, you can make informed decisions about how to fetch data in your projects.
