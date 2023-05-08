import type { FC, ReactNode } from "react";

const Blockquote: FC<{ children: ReactNode }> = ({ children }) => (
  <blockquote className="ring-1 bg-zinc-100/25 dark:bg-zinc-800/25 dark:ring-zinc-700/50 ring-zinc-400/50">
    {children}
  </blockquote>
);

export default Blockquote;
