function Typography({ className, children }) {
  return <p className={className}>{children}</p>;
}

function LinkTypography({ href, children }) {
  return (
    <a href={href} className="text-base text-blue-500 dark:text-blue-400">
      {children}
    </a>
  );
}
let components = {};

const headings = ["h1", "h2", "h3", "h4", "h5", "h6"];

headings.forEach((tag, index) => {
  const size = 6 - index;
  let className = `text-${
    size !== 1 ? size : ""
  }xl dark:text-offWhite font-bold text-midnight dark:text-whisper my-2`;
  components[tag] = (props) => <Typography className={className} {...props} />;
});

components.p = (props) => (
  <Typography
    {...props}
    className={"text-base text-midnight dark:text-whisper"}
  />
);

components.a = (props) => {
  return <LinkTypography {...props} />;
};
// components.a = (props) => (
//   <Typography className="inline text-base text-blue-500" {...props} />
// );

export default components;
