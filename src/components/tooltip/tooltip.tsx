import type { ITooltip } from "react-tooltip";
import type { ReactNode } from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";

interface TooltipProps extends ITooltip {
  children: ReactNode;
  onActionButtonClick: () => void;
  showActionButton?: boolean;
}

export const Tooltip = ({
  children,
  showActionButton = true,
  onActionButtonClick,
  ...props
}: TooltipProps): JSX.Element => (
  <ReactTooltip
    clickable
    anchorSelect={props.anchorSelect}
    className="z-50 !bg-zinc-700 !bg-opacity-100 !opacity-100"
    place="bottom"
    {...props}
  >
    <div className="flex flex-col items-end">
      <span className="mb-2 text-zinc-100">{children}</span>
      {showActionButton ? (
        <button className="text-xs text-violet-300" type="button" onClick={onActionButtonClick}>
          Read more
        </button>
      ) : null}
    </div>
  </ReactTooltip>
);
