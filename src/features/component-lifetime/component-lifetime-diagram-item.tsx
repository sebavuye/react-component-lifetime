import type { HTMLAttributes, ReactNode } from "react";
import classNames from "classnames";

interface ComponentLifetimeDiagramItemProps {
  children: ReactNode;
  className: HTMLAttributes<undefined>["className"];
  isBlock?: boolean;
}

export const ComponentLifetimeDiagramItem = ({
  className,
  children,
  isBlock = false,
}: ComponentLifetimeDiagramItemProps): JSX.Element => (
  <div
    className={classNames(className, { "p-0 flex items-start justify-center": !isBlock, "py-2 pl-2 pr-3": isBlock })}
  >
    {children}
  </div>
);
