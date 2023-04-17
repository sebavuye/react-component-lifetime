import type { ReactNode } from "react";

export interface CollapseProps {
  children?: ReactNode;
  title: ReactNode;
}

export const Collapse = ({ children, title }: CollapseProps): JSX.Element => (
  <details>
    <summary className="my-2 w-auto cursor-pointer text-violet-300">{title}</summary>
    {children}
  </details>
);
