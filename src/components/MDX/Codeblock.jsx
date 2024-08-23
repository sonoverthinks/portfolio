import { Highlight, themes } from "prism-react-renderer";
import { useState } from "react";
import copy from "copy-text-to-clipboard";

const Codeblock = ({ children }) => {
  const [copyText, setCopyText] = useState("Copy");
  if (!children) return null;
  const {
    props: { className, children: code = "" },
  } = children;

  const language = className ? className.replace(/language-/, "") : "";

  return (
    <Highlight theme={themes.palenight} code={code.trim()} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <div
          onClick={() => {}}
          className="w-full my-5 sm:text-[15px] sm:leading-[20px] md:text-[16px] md:leading-[22px] lg:text-[17px] lg:leading-[24px]"
        >
          <pre
            className="relative p-3 overflow-x-auto rounded-lg group"
            style={style}
          >
            <button
              onClick={() => {
                copy(code.trim());
                setCopyText("Copied!");
                setTimeout(() => {
                  setCopyText("Copy");
                }, 1000);
              }}
              className="absolute hidden px-1 py-1 rounded-lg opacity-70 right-3 group-hover:block bg-light-teal-blue hover:bg-light-blue"
            >
              {copyText}
            </button>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                {/* <span>{i + 1}</span> */}
                {line.map((token, key) => (
                  <span
                    className="break-all"
                    key={key}
                    {...getTokenProps({ token })}
                  />
                ))}
              </div>
            ))}
          </pre>
        </div>
      )}
    </Highlight>
  );
};

export default Codeblock;
