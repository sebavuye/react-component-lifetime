import { ReactComponentLifetimeHeader } from "@/features/react-component-lifetime/react-component-lifetime-header";
import { useState } from "react";

export const ReactComponentLifetime = (): JSX.Element => {
  const [description, setDescription] = useState("");

  return (
    <section className="grid grid-cols-[auto_1fr] gap-4">
      <section className="grid grid-rows-[auto_1fr] gap-4">
        <ReactComponentLifetimeHeader />
        <section className="grid grid-cols-[1fr_4px_1fr_4px_1fr] gap-2">
          <section>COL 1</section>
          <div className="h-full bg-zinc-400" />
          <section>COL 2</section>
          <div className="h-full bg-zinc-400" />
          <section>COL 3</section>
        </section>
      </section>

      {description ? (
        <section className="grid grid-rows-[auto_1fr] gap-4 py-4 text-zinc-100">
          <h3 className="text-2xl">Title</h3>
          <div>
            <p className="leading-loose">Description</p>
          </div>
        </section>
      ) : null}
    </section>
  );
};
