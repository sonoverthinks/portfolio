const navItems = [
  { title: "Blog", href: "/" },
  // { title: "Blog", href: "/blogs" },
  { title: "Portfolio", href: "/portfolio" },
  // { title: "Note", href: "/notes" },
  { title: "About", href: "/about" },
];

const triviaData = [
  {
    customID: "1",
    topic: "pure function",
    content:
      "a function that produces the same output for the same input and has no side effects.",
  },
  {
    customID: "2",
    topic: "RESTful API",
    content:
      "a web service that follows a specific set of design principles to enable communication and data exchange between applications over the internet. it is characterized by several important principles like statelessness, and uniform interface.",
  },
  {
    customID: "3",
    topic: "closure",
    content:
      "the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function.",
  },
  {
    customID: "4",
    topic: "temporal dead zone",
    content:
      " a specific period in the execution of JavaScript code where variables declared with let and const exist but cannot be accessed or assigned any value. During this phase, accessing or using the variable will result in a ReferenceError.",
  },
  {
    customID: "5",
    topic: "temporal dead zone",
    content:
      "a specific period in the execution of JavaScript code where variables declared with let and const exist but cannot be accessed or assigned any value. During this phase, accessing or using the variable will result in a ReferenceError.",
  },
  {
    customID: "6",
    topic: "URL",
    content:
      "a specific type of URI. While all URLs are URIs, not all URIs are URLs. A URL provides information on how to access a resource, including the protocol, domain, and path, whereas a URI is a more general term that encompasses both URLs and URNs..",
  },
];

export { navItems, triviaData };
