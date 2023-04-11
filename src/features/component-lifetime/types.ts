import type { descriptionLookup } from "@/features/component-lifetime/data";

export interface ColumnHeader {
  contentId?: string;
  title: string;
  tooltipContent?: string;
}

// eslint-disable-next-line no-shadow
export enum DescriptionId {
  componentLifetime = "componentLifetime",
}

export type DescriptionLookup = { [key in keyof typeof descriptionLookup]: JSX.Element };
