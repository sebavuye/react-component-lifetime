import { Heading } from "@/components";
import type { HeadingProps } from "@/components";
import type { ReactNode } from "react";

export const mdxComponents = {
  code: (props: { children?: ReactNode }) => <code className="hljs" {...props} />,
  em: (props: { children?: ReactNode }) => <span className="italic" {...props} />,
  h1: (props: HeadingProps) => <Heading level="h1" {...props} />,
  h2: (props: HeadingProps) => <Heading level="h2" {...props} />,
  h3: (props: HeadingProps) => <Heading level="h3" {...props} />,
  h4: (props: HeadingProps) => <Heading level="h4" {...props} />,
  h5: (props: HeadingProps) => <Heading level="h5" {...props} />,
  h6: (props: HeadingProps) => <Heading level="h6" {...props} />,
  strong: (props: { children?: ReactNode }) => <span className="font-bold" {...props} />,
};
