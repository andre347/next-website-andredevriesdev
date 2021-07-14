import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/cjs/styles/prism";

export default function CodeBlock(props) {
  const { language, value } = props;
  return (
    <SyntaxHighlighter language={language} style={okaidia}>
      {value ? value : ""}
    </SyntaxHighlighter>
  );
}
