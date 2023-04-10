import type { ReactNode } from "react";

interface HeadingProps {
  children: ReactNode;
}

export const Heading = ({ children }: HeadingProps): JSX.Element => (
  <h1 className="text-center text-4xl font-bold text-zinc-100">{children}</h1>
);
