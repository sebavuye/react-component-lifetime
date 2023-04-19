import { ComponentLifetimeDiagramItem } from "@/features/component-lifetime/component-lifetime-diagram-item";
import { DescriptionId } from "@/features/component-lifetime/types";
import type { DescriptionLookup } from "@/features/component-lifetime/types";

interface ComponentLifetimeRenderProps {
  onClick: (id: keyof DescriptionLookup) => void;
}

export const ComponentLifetimeRender = ({ onClick }: ComponentLifetimeRenderProps): JSX.Element => (
  <ComponentLifetimeDiagramItem isBlock className="bg-gradient-to-r from-sky-600 to-cyan-700 text-zinc-100">
    <button type="button">
      <span
        className="inline-block cursor-pointer font-bold"
        id={DescriptionId.renderMount}
        onClick={() => onClick(DescriptionId.renderMount)}
      >
        Render
      </span>
    </button>
    <div className="mt-2 border-b-2 border-b-amber-400 text-right text-xs text-zinc-700">
      <span
        className="inline-block cursor-pointer bg-amber-400 p-1"
        onClick={() => onClick(DescriptionId.renderMountReactCallsComponent)}
      >
        React calls the root component
      </span>
    </div>
    <div className="grid bg-zinc-900">
      <div className="m-2 flex items-center justify-center bg-zinc-400 bg-gradient-to-r from-zinc-400 to-slate-400 p-4 text-center text-sm text-zinc-900">
        Evaluate local variables
      </div>
      <div className="mx-2 mb-2 mt-0 flex items-center justify-center bg-zinc-400 bg-gradient-to-r from-zinc-400 to-slate-400 p-4 text-center text-sm text-zinc-900">
        Schedule effects
      </div>
      <div className="mx-2 mb-2 mt-0 flex items-center justify-center bg-zinc-400 bg-gradient-to-r from-zinc-400 to-slate-400 p-4 text-center text-sm text-zinc-900">
        Initialize hooks
      </div>
    </div>
    <div className="border-t-2 border-t-amber-400 text-right text-xs text-zinc-700">
      <span className="inline-block bg-amber-400 p-1">React returns React elements</span>
    </div>
  </ComponentLifetimeDiagramItem>
);
