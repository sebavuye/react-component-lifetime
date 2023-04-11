import type { ColumnHeader } from "@/features/component-lifetime/types";
import { DescriptionId } from "@/features/component-lifetime/types";
import { Fragment } from "react";

export const columns: Array<ColumnHeader> = [
  { descriptionId: DescriptionId.mount, title: "Mount" },
  { descriptionId: DescriptionId.update, title: "Update" },
  { descriptionId: DescriptionId.unmount, title: "Unmount" },
];

export const ComponentLifetimeHeader = (): JSX.Element => (
  <header
    className="grid gap-5 border-2 border-zinc-900 py-4 hover:border-2 hover:border-violet-500 hover:bg-violet-500/10"
    id={DescriptionId.componentLifetime}
    style={{ gridTemplateColumns: `repeat(${columns.length}, minmax(0, 1fr))` }}
  >
    {columns.map(column => (
      <Fragment key={column.title}>
        <h2 className="row-start-1 text-center text-2xl text-zinc-100">
          <span id={column.descriptionId}>{column.title}</span>
        </h2>
      </Fragment>
    ))}
  </header>
);
