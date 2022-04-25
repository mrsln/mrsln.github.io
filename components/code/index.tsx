import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";

const Code = ({ children = "", className }) => {
  const language = className.replace(/language-/, "");
  return (
    <Highlight
      {...defaultProps}
      theme={theme}
      code={children.trim()}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={`${className} text-left mx-4 my-0 p-2 overflow-scroll`}
          style={style}
        >
          {tokens.map((line, i) => {
            const lineProps = getLineProps({ line, key: i });
            const styledLineProps = {
              ...lineProps,
              className: `${lineProps.className} table-row`,
            };
            return (
              <div key={i} {...styledLineProps}>
                <span className="table-cell text-right pr-4 select-none opacity-50 mr-4">
                  {i + 1}
                </span>
                <span className="table-cell">
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </span>
              </div>
            );
          })}
        </pre>
      )}
    </Highlight>
  );
};
export default Code;
