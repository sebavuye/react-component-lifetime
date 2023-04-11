import type { DescriptionLookup } from "@/features/component-lifetime/types";
import { descriptionLookup } from "@/features/component-lifetime/data";

interface ReactComponentLifetimeDescriptionProps {
  id: keyof DescriptionLookup;
}

export const ComponentLifetimeDescription = ({ id }: ReactComponentLifetimeDescriptionProps): JSX.Element | null => (
  <section className="py-4 text-zinc-100">{descriptionLookup[id]}</section>
);
