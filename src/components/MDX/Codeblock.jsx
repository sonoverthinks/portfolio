import React from "react";
import { Highlight, themes } from "prism-react-renderer";

const Codeblock = ({ children }) => {
  if (!children) return null;
  const {
    props: { className, children: code = "" },
  } = children;

  const language = className ? className.replace(/language-/, "") : "";

  return (
    <Highlight
      theme={themes.shadesOfPurple}
      code={code.trim()}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <div className="w-auto text-sm">
          <pre className="overflow-auto" style={style}>
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
