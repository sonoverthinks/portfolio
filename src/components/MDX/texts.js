function Typography({ className, children }) {
  return <p className={className}>{children}</p>;
}

function LinkTypography({ href, children }) {
  return (
    <a
      href={href}
      className="text-base text-blue-500 underline dark:text-blue-300"
    >
      {children}
    </a>
  );
}
let components = {};

const headings = ["h1", "h2", "h3", "h4", "h5", "h6"];

headings.forEach((tag, index) => {
  const size = 6 - index;
  let className = `text-${size !== 1 ? size : ""}xl dark:text-white font-bold`;
  components[tag] = (props) => <Typography className={className} {...props} />;
});

components.p = (props) => (
  <Typography {...props} className={"text-base dark:text-white"} />
);

components.a = (props) => {
  console.log(props);
  return <LinkTypography {...props} />;
};
// components.a = (props) => (
//   <Typography className="inline text-base text-blue-500" {...props} />
// );

export default components;
