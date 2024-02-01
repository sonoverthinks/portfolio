import Codeblock from "./Codeblock";

function Code({ children }) {
  return (
    <code className="px-1 sm:text-[15px] sm:leading-[28px] md:text-[16px] md:leading-[30px] lg:text-[17px] lg:leading-[32px] text-neutral-bistre dark:text-neutral-whisper bg-slate-200 dark:bg-dark-zodiac-blue rounded-md">
      {children}
    </code>
  );
}
const components = {};

components.pre = (props) => <Codeblock {...props} />;
components.code = (props) => <Code {...props} />;

export default components;
