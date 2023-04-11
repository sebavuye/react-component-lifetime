import type { ColumnHeader } from "@/features/component-lifetime/types";
import { Fragment } from "react";

export const columns: Array<ColumnHeader> = [
  {
    contentId: "mount",
    title: "Mount",
    tooltipContent: "Mounting is the first step of the React component lifecycle.",
  },
  { title: "Update" },
  { title: "Unmount" },
];

export const ComponentLifetimeHeader = (): JSX.Element => (
  <header
    className="grid gap-5 border-2 border-zinc-900 py-4 hover:border-2 hover:border-violet-500 hover:bg-violet-500/10"
    id="componentLifetime"
    style={{ gridTemplateColumns: `repeat(${columns.length}, minmax(0, 1fr))` }}
  >
    {columns.map(column => (
      <Fragment key={column.title}>
        <h2 className="row-start-1 text-center text-2xl text-zinc-100">
          <span id={column.title}>{column.title}</span>
        </h2>
      </Fragment>
    ))}
  </header>
);
