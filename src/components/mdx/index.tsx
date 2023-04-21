import { Heading } from "@/components";
import type { HeadingProps } from "@/components";
import type { ReactNode } from "react";

export const mdxComponents = {
  blockquote: (props: { children?: ReactNode }) => (
    <blockquote className="border-l-8 border-l-zinc-300 bg-zinc-700 p-2 text-sm italic leading-6" {...props} />
  ),
  code: (props: { children?: ReactNode }) => <code className="hljs" {...props} />,
  em: (props: { children?: ReactNode }) => <span className="italic" {...props} />,
  h1: (props: HeadingProps) => <Heading level="h1" {...props} />,
  h2: (props: HeadingProps) => <Heading level="h2" {...props} />,
  h3: (props: HeadingProps) => <Heading level="h3" {...props} />,
  h4: (props: HeadingProps) => <Heading level="h4" {...props} />,
  h5: (props: HeadingProps) => <Heading level="h5" {...props} />,
  h6: (props: HeadingProps) => <Heading level="h6" {...props} />,
  li: (props: { children?: ReactNode }) => <li className="pl-4" {...props} />,
  ol: (props: { children?: ReactNode }) => <ol className="list-inside list-decimal" {...props} />,
  strong: (props: { children?: ReactNode }) => <span className="font-bold" {...props} />,
  ul: (props: { children?: ReactNode }) => <ul className="list-inside list-disc" {...props} />,
};
