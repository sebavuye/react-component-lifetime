import { Heading } from "@/components";
import { ReactComponentLifetime } from "@/features";

export default function Home(): JSX.Element {
  return (
    <main className="grid h-full grid-rows-[auto_1fr] gap-4 p-4">
      <Heading>React Component Lifetime</Heading>
      <ReactComponentLifetime />
    </main>
  );
}
