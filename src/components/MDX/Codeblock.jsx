import React from "react";
import { Highlight, themes } from "prism-react-renderer";

const Codeblock = ({ children }) => {
  if (!children) return null;
  const {
    props: { className, children: code = "" },
  } = children;

  const language = className ? className.replace(/language-/, "") : "";

  return (
    <Highlight theme={themes.palenight} code={code.trim()} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <div className="font-space-mono w-full my-5 sm:text-[15px] sm:leading-[20px] md:text-[16px] md:leading-[22px] lg:text-[17px] lg:leading-[24px]">
          <pre className="p-3 overflow-x-auto rounded-lg" style={style}>
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
