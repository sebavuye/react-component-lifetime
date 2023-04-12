import { Heading } from "@/components";
import type { HeadingProps } from "@/components";

export const mdxComponents = {
  h1: (props: HeadingProps) => <Heading level="h1" {...props} />,
  h2: (props: HeadingProps) => <Heading level="h2" {...props} />,
  h3: (props: HeadingProps) => <Heading level="h3" {...props} />,
  h4: (props: HeadingProps) => <Heading level="h4" {...props} />,
  h5: (props: HeadingProps) => <Heading level="h5" {...props} />,
  h6: (props: HeadingProps) => <Heading level="h6" {...props} />,
};
