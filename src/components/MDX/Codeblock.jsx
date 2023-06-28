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
        <div className="w-full my-5 text-sm md:text-base xl:text-lg">
          <pre className="p-3 overflow-auto rounded-lg" style={style}>
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
