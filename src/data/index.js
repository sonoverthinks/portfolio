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
    topic: "closure",
    content:
      "the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function.",
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
];

export { navItems, triviaData };
