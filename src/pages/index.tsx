import { Heading, mdxComponents } from "@/components";
import { ComponentLifetime } from "@/features";
import { MDXProvider } from "@mdx-js/react";

export default function Home(): JSX.Element {
  return (
    <MDXProvider components={mdxComponents}>
      <main className="grid h-full grid-rows-[auto_1fr] gap-4 p-4">
        <Heading>React Component Lifetime</Heading>
        <ComponentLifetime />
      </main>
    </MDXProvider>
  );
}
