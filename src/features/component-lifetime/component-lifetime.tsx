import { ComponentLifetimeDescription } from "@/features/component-lifetime/component-lifetime-description";
import { ComponentLifetimeHeader } from "@/features/component-lifetime/component-lifetime-header";
import { ComponentLifetimeRender } from "@/features/component-lifetime/component-lifetime-render";
import { DescriptionId } from "@/features/component-lifetime/types";
import type { DescriptionLookup } from "@/features/component-lifetime/types";
import { Tooltip } from "@/components";
import { tooltips } from "@/features/component-lifetime/consts";
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
          <section>COL 2</section>
          <div className="h-full bg-zinc-400" />
          <section>COL 3</section>
        </section>
      </section>

      {descriptionId ? <ComponentLifetimeDescription id={descriptionId} /> : null}

      {tooltips.map(tooltip => (
        <Tooltip
          key={tooltip.descriptionId}
          anchorSelect={`#${tooltip.descriptionId}`}
          place={tooltip.descriptionId === DescriptionId.componentLifetime ? "bottom" : "top"}
          onActionButtonClick={() => handleReadMoreClick(tooltip.descriptionId)}
        >
          {tooltip.summary}
        </Tooltip>
      ))}
    </section>
  );
};
