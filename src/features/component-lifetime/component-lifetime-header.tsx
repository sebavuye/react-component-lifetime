import type { ColumnHeader, DescriptionLookup } from "@/features/component-lifetime/types";
import { DescriptionId } from "@/features/component-lifetime/types";
import { Fragment } from "react";
import { Tooltip } from "react-tooltip";

export const columns: Array<ColumnHeader> = [
  {
    contentId: "mount",
    title: "Mount",
    tooltipContent: "Mounting is the first step of the React component lifecycle.",
  },
  { title: "Update" },
  { title: "Unmount" },
];

interface ComponentLifetimeHeaderProps {
  onReadMore: (id: keyof DescriptionLookup) => void;
}

export const ComponentLifetimeHeader = ({ onReadMore }: ComponentLifetimeHeaderProps): JSX.Element => (
  <header
    className="grid gap-5 border-2 border-zinc-900 py-4 hover:border-2 hover:border-violet-500 hover:bg-violet-500/10"
    id={DescriptionId.componentLifetime}
    style={{ gridTemplateColumns: `repeat(${columns.length}, minmax(0, 1fr))` }}
  >
    {columns.map(column => (
      <Fragment key={column.title}>
        <h2 className="row-start-1 text-center text-2xl text-zinc-100">
          <span id={column.title}>{column.title}</span>
        </h2>
      </Fragment>
    ))}

    <Tooltip clickable anchorSelect={`#${DescriptionId.componentLifetime}`} place="bottom">
      <div className="flex flex-col items-end">
        <span className="mb-2 text-zinc-100">Phases of Reacts component lifetime.</span>
        <button
          className="text-xs text-violet-300"
          type="button"
          onClick={() => onReadMore(DescriptionId.componentLifetime)}
        >
          Read more
        </button>
      </div>
    </Tooltip>
  </header>
);
