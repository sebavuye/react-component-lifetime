import { ComponentLifetimeDiagramItem } from "@/features/component-lifetime/component-lifetime-diagram-item";
import { DescriptionId } from "@/features/component-lifetime/types";

export const ComponentLifetimeRender = (): JSX.Element => (
  <ComponentLifetimeDiagramItem isBlock className="bg-gradient-to-r from-sky-600 to-cyan-700 text-zinc-100">
    <div>
      <span className="mb-2 inline-block font-bold" id={DescriptionId.renderMount}>
        Render
      </span>
    </div>
    <div className="border-b-2 border-b-amber-400 text-right text-xs text-zinc-700">
      <span className="inline-block bg-amber-400 p-1">React calls the component</span>
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
