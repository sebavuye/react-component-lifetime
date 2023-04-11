import { ComponentLifetimeDescription } from "@/features/component-lifetime/component-lifetime-description";
import { ComponentLifetimeHeader } from "@/features/component-lifetime/component-lifetime-header";
import { ComponentLifetimeRender } from "@/features/component-lifetime/component-lifetime-render";
import type { DescriptionLookup } from "@/features/component-lifetime/types";
import { useState } from "react";

export const ComponentLifetime = (): JSX.Element => {
  const [descriptionId, setDescriptionId] = useState<keyof DescriptionLookup | undefined>();

  const handleReadMoreClick = (id: keyof DescriptionLookup): void => {
    setDescriptionId(id);
  };

  return (
    <section className="grid grid-cols-[auto_1fr] gap-4">
      <section className="grid grid-rows-[auto_1fr] gap-4">
        <ComponentLifetimeHeader />
        <section className="grid grid-cols-[1fr_4px_1fr_4px_1fr] gap-2">
          <section>
            <ComponentLifetimeRender />
          </section>
          <div className="h-full bg-zinc-400" />
          <section onClick={() => handleReadMoreClick("test2")}>COL 2</section>
          <div className="h-full bg-zinc-400" />
          <section>COL 3</section>
        </section>
      </section>

      {descriptionId ? <ComponentLifetimeDescription id={descriptionId} /> : null}
    </section>
  );
};
