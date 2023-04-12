import type { HTMLAttributes, ReactNode } from "react";
import classNames from "classnames";

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  children?: ReactNode;
  className?: HTMLAttributes<undefined>["className"];
  level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const getHeadingFontSize = (level: HeadingProps["level"]): string => {
  switch (level) {
    case "h6":
      return "text-lg";
    case "h5":
      return "text-xl";
    case "h4":
      return "text-2xl";
    case "h3":
      return "text-3xl";
    case "h2":
      return "text-4xl";
    default:
      return "text-5xl";
  }
};

export const Heading = ({ level = "h1", className, children }: HeadingProps): JSX.Element => {
  const HeadingTag = level;

  return (
    <HeadingTag className={classNames(`${getHeadingFontSize(level)} my-4 font-bold text-zinc-100`, className)}>
      {children}
    </HeadingTag>
  );
};
