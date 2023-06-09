import ComponentLifetime from "./component-lifetime.mdx";
import { DescriptionId } from "@/features/component-lifetime/types";
import Mount from "./mount.mdx";
import RenderMount from "./render-mount.mdx";
import RenderMountReactCallsComponent from "./render-mount-react-calls-component.mdx";

export const descriptionLookup = {
  [DescriptionId.componentLifetime]: <ComponentLifetime />,
  [DescriptionId.mount]: <Mount />,
  [DescriptionId.update]: null,
  [DescriptionId.unmount]: null,
  [DescriptionId.renderMount]: <RenderMount />,
  [DescriptionId.renderMountReactCallsComponent]: <RenderMountReactCallsComponent />,
};
