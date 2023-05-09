import { Figure } from "./image";
import Blockquote from "./blockquote";
import { useMDXComponent } from "next-contentlayer/hooks";

const components = {
  Figure,
  blockquote: Blockquote as React.ComponentType,
};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return <Component components={components} />;
}
