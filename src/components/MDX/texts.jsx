function Typography({ className, children }) {
  return <p className={className}>{children}</p>;
}

function LinkTypography({ href, children }) {
  return (
    <a href={href} className="text-xl text-blue-500 dark:text-blue-400">
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
  }xl font-bold text-midnight dark:text-whisper my-4`;
  components[tag] = (props) => <Typography className={className} {...props} />;
});

components.p = (props) => (
  <Typography
    {...props}
    className={
      "text-[18px] leading-[29px] md:text-[20px] md:leading-[32px] lg:text-[22px] lg:leading-[34px] text-typo-bistre dark:text-neutral-lavenderGray"
    }
  />
);

components.a = (props) => {
  return <LinkTypography {...props} />;
};

export default components;
