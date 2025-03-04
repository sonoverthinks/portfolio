import { Highlight, themes } from "prism-react-renderer";
import copy from "copy-text-to-clipboard";
import { useState } from "react";

const Codeblock = ({ children }) => {
  const [showCopyText, setShowCopyText] = useState(false);

  if (!children) return null;
  const {
    props: { className, children: code = "" },
  } = children;

  const language = className ? className.replace(/language-/, "") : "";

  return (
    <Highlight theme={themes.palenight} code={code.trim()} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <div className="w-full my-5 sm:text-[15px] sm:leading-[20px] md:text-[16px] md:leading-[22px] lg:text-[17px] lg:leading-[24px]">
          <pre
            className="relative p-3 overflow-x-auto rounded-lg group"
            style={style}
            onMouseEnter={() => setShowCopyText(true)} // Show Copy text on hover
            onMouseLeave={() => setShowCopyText(false)} // Hide Copy text when hover ends
            onClick={() => {
              // Copy the entire code block to clipboard
              copy(code.trim());
            }}
          >
            {/* Copy text shown on hover */}
            {showCopyText && (
              <div className="absolute px-2 py-1 text-sm text-white bg-gray-800 rounded-md top-3 right-3 opacity-80">
                Copy
              </div>
            )}
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
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
