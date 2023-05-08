import { Figure } from "./image";
import Blockquote from "./blockquote";
import { useMDXComponent } from "next-contentlayer/hooks";
import Link from "next/link";

const components = {
  Figure,
  blockquote: Blockquote as React.ComponentType,
  a: ({ href, children }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <Link href={href as string}>{children}</Link>
  ),
};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return <Component components={components} />;
}
