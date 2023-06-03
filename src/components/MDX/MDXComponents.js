import texts from "./texts";

function Typography({ className, children }) {
  return <p className={className}>{children}</p>;
}
export function List({ children }) {
  return <ul className="divide-y divide-slate-100">{children}</ul>;
}

const components = {
  p: (props) => <Typography className="underline dark:text-white" {...props} />,
  h1: (props) => (
    <Typography className="text-[32px] dark:text-white" {...props} />
  ),
  h2: (props) => (
    <Typography className="text-[28.8px] dark:text-white" {...props} />
  ),
  h3: (props) => (
    <Typography className="text-[25.6px] dark:text-white" {...props} />
  ),
  h4: (props) => (
    <Typography className="text-[22.4px] dark:text-white" {...props} />
  ),
  h5: (props) => (
    <Typography className="text-[19.2px] dark:text-white" {...props} />
  ),
  h6: (props) => (
    <Typography className="text-[16px] dark:text-white" {...props} />
  ),
};

export default components;
