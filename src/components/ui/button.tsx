import * as React from "react";
import "./Button.css";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary" | "outline" | "ghost";
  size?: "sm" | "default" | "lg" | "icon";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className = "",
      variant = "default",
      size = "default",
      asChild = false,
      children,
      ...props
    },
    ref
  ) => {
    const baseClasses = "btn";
    const variantClass = `btn-${variant}`;
    const sizeClass = size === "default" ? "btn-default-size" : `btn-${size}`;
    const classes =
      `${baseClasses} ${variantClass} ${sizeClass} ${className}`.trim();

    if (asChild && React.isValidElement(children)) {
      // When asChild is true, we expect children to be a single React element
      return React.cloneElement(children as React.ReactElement, {
        className: `${children.props.className || ""} ${classes}`.trim(),
        ref,
        ...props,
      });
    }

    return (
      <button className={classes} ref={ref} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
