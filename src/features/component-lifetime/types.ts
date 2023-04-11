import type { descriptionLookup } from "@/features/component-lifetime/data";

export interface ColumnHeader {
  contentId?: string;
  title: string;
  tooltipContent?: string;
}

export type DescriptionLookup = { [key in keyof typeof descriptionLookup]: JSX.Element };
