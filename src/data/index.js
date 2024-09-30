const navItems = [
  { title: "Blog", href: "/" },
  { title: "Project", href: "/portfolio" },
  { title: "About", href: "/about" },
];

const triviaData = [
  {
    customID: "e53b9731-ca47-4710-9820-1484bef6240b",
    topic: "pure function",
    content:
      "a pure function produces the same output for the same input and has no side effects.",
  },
  {
    customID: "c125e130-2e66-42b5-a4fa-70613f9d6869",
    topic: "RESTful API",
    content:
      "RESTful API follows a specific set of design principles to enable communication and data exchange between applications over the internet.",
  },
  {
    customID: "65960cae-5cac-4b6a-9b7e-de938aadd3e9",
    topic: "closure",
    content:
      "Closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).",
  },
  {
    customID: "1b7a1180-7651-45c5-894d-ada6bdd06685",
    topic: "temporal dead zone",
    content:
      "temporal dead zone is a specific period in JavaScript code where variables declared with let and const exist but cannot be accessed or assigned any value.",
  },
  {
    customID: "8965ddff-9be0-41fe-a399-6525aeff112a",
    topic: "URIs",
    content: "URIs (Uniform Resource Identifier) are supersets of URLs.",
  },
  {
    customID: "4a797b5b-909d-4d25-901c-8054110749e0",
    topic: "ReferenceError",
    content:
      "accessing or using the variable during temporal dead zone will result in a ReferenceError",
  },
  {
    customID: "e67afa81-ad4e-44a7-99a2-d79b2f938cd9",
    content:
      "A traditional single-page application (SPA) in React ships an empty div element with a large bundle of JavaScript.",
  },
  {
    customID: "b20d1407-b759-4aaf-963d-40f68745d462",
    content:
      "SSG occurs at build time, while in SSR, the routes are rendered at request time.",
  },
  {
    customID: "ca247d59-f703-48b5-aeed-be065ab0e262",
    content:
      "Both SSR and SSG fetch the content for your route or webpage on the server and generate the resulting HTML. The UI is later made interactive on client-side, this is called hydration.",
  },
  {
    customID: "c63424a6-cc81-4992-8cbf-fcf7003e50d2",
    content:
      "With RSCs, server rendering can now happen at the component level.",
  },
  {
    customID: "5b103b16-6ade-472c-b868-2aaf01cbc8a5",
    content:
      "In Server Components, component logic such as data fetching and database mutations is executed exclusively on the server.",
  },
  {
    customID: "2def4534-f6d7-4577-a356-52a908c93685",
    content:
      "Server components don't re-render due to data mutations. Data updates trigger revalidation on the server, not re-rendering. A new HTML is generated and sent to the client if data changes.",
  },
  {
    customID: "b2b34add-668f-44ca-b671-5420c6a50491",
    content:
      "Client Components can import Server Components - but with a caveat - by making use of the children prop.",
  },
  {
    customID: "bf26420c-be51-4889-af5f-b3ce0ffed09f",
    content:
      "a nested Server Component within a Client Component is converted to Client Component.",
  },
  {
    customID: "e83821e1-591a-4dd1-9df8-5869d832fa75",
    content:
      "Logging anything to the console from a Server Component returns the output in a server environment.",
  },
  {
    customID: "2ba1c2b6-d87d-44f0-bf07-606645d4075c",
    content:
      "React Suspense pauses a component's rendering within the React tree and display a placeholder while content is being fetched.",
  },
  {
    customID: "25d272f2-4b07-4f92-b196-fe2bf330cf63",
    content:
      "Next.js integrates Suspense directly into the App Router with a special loading.js file. This file will automatically wrap the page.js file with Suspense and render the custom UI in loading.js",
  },
  {
    customID: "804db787-b258-49e4-93b6-931134f7de78",
    content:
      "Specifying dependencies in useEffect executes the function after the initial render and subsequent re-renders where those dependencies change.",
  },
  {
    customID: "53f736f3-5a89-4205-a817-d820035e465d",
    content:
      "A useEffect with empty dependency array will only run after the initial render.",
  },
  {
    customID: "5d624c76-cae4-4dfd-b623-afa33b5b0a93",
    content:
      "A useEffect with no dependency array at all runs after every single render (and re-render) of your component.",
  },
  {
    customID: "d9f133e1-caed-4f98-a98e-a7751634e25c",
    content:
      "The Object.is() is a static method that determines whether two values are the same value. React uses this method to compare dependency in the useEffect hook.",
  },
];

export { navItems, triviaData };
