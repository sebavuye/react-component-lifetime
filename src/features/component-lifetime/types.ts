import type { descriptionLookup } from "@/features/component-lifetime/data";

export enum DescriptionId {
  componentLifetime = "componentLifetime",
  mount = "mount",
  update = "update",
  unmount = "unmount",
  renderMount = "renderMount",
}

export interface ColumnHeader {
  descriptionId: DescriptionId;
  title: string;
}

export type DescriptionLookup = { [key in keyof typeof descriptionLookup]: JSX.Element };
