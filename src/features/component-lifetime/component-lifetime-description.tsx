import type { DescriptionLookup } from "@/features/component-lifetime/types";
import classNames from "classnames";
import { descriptionLookup } from "@/features/component-lifetime/data";

interface ReactComponentLifetimeDescriptionProps {
  id: keyof DescriptionLookup;
  isExpanded: boolean;
  onExpand: () => void;
}

export const ComponentLifetimeDescription = ({
  id,
  isExpanded,
  onExpand,
}: ReactComponentLifetimeDescriptionProps): JSX.Element | null => (
  <section className="grid min-h-0 grid-cols-[2rem_minmax(0,_1fr)] gap-2 bg-zinc-900 leading-loose text-zinc-100">
    <div className="flex items-center justify-center">
      <button
        className="flex min-h-0 items-center justify-center overflow-auto bg-zinc-700 p-2"
        type="button"
        onClick={onExpand}
      >
        <span
          className={classNames(
            "block h-0 w-0 border-y-[6px] border-y-transparent border-r-violet-300 border-l-violet-300",
            {
              "border-l-[8px]": isExpanded,
              "border-r-[8px]": !isExpanded,
            }
          )}
        />
      </button>
    </div>
    <section className="min-h-0 overflow-auto p-4">{descriptionLookup[id]}</section>
  </section>
);
