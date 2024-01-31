const navItems = [
  { title: "Blog", href: "/" },
  // { title: "Blog", href: "/blogs" },
  { title: "Portfolio", href: "/portfolio" },
  // { title: "Note", href: "/notes" },
  { title: "About", href: "/about" },
];

const triviaData = [
  {
    topic: "pure function",
    content:
      "a function that produces the same output for the same input and has no side effects.",
  },
  {
    topic: "RESTful API",
    content:
      "a web service that follows a specific set of design principles to enable communication and data exchange between applications over the internet.",
  },
  {
    topic: "closure",
    content:
      "the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).",
  },
  {
    topic: "temporal dead zone",
    content:
      "a specific period in the execution of JavaScript code where variables declared with let and const exist but cannot be accessed or assigned any value.",
  },
  {
    topic: "URIs",
    content: "URIs (Uniform Resource Identifier) are supersets of URLs.",
  },
  {
    topic: "ReferenceError",
    content:
      "accessing or using the variable during temporal dead zone will result in a ReferenceError",
  },
];

export { navItems, triviaData };
