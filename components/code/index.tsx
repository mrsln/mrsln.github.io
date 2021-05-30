import { useEffect, useRef } from "react";
import Highlight, { defaultProps } from "prism-react-renderer";

const ARTICLE_DESKTOP_WIDTH = 655;

export default function Code({ children, className }) {
  const preRef = useRef(null);

  useEffect(() => {
    function fitPre() {
      if (document.body.clientWidth < ARTICLE_DESKTOP_WIDTH) {
        preRef.current.style.width = `${document.body.clientWidth - 30}px`;
      } else {
        preRef.current.style.width = "auto";
      }
    }

    fitPre();
    window.addEventListener("resize", fitPre, true);
    return () => window.removeEventListener("resize", fitPre, true);
  }, []);

  const language = className.replace(/language-/, "");
  return (
    <Highlight {...defaultProps} code={children} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style} ref={preRef}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
}
