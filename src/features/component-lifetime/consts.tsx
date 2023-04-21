import { DescriptionId } from "@/features/component-lifetime/types";
import type { ReactNode } from "react";

interface Tooltip {
  descriptionId: DescriptionId;
  showActionButton?: boolean;
  summary: ReactNode;
}

export const tooltips: Array<Tooltip> = [
  { descriptionId: DescriptionId.componentLifetime, summary: "Phases of Reacts component lifetime." },
  { descriptionId: DescriptionId.mount, summary: "Mounting is the first step of the React component lifecycle." },
  { descriptionId: DescriptionId.update, summary: "Update" },
  { descriptionId: DescriptionId.unmount, summary: "Unmount" },
  {
    descriptionId: DescriptionId.renderMount,
    summary: "Rendering is the moment a function component is called by React.",
  },
];
