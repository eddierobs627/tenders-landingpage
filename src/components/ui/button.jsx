import React from "react";

export const Button = React.forwardRef(
  (
    {
      asChild = false,
      children,
      className = "",
      type = "button",
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? "span" : "button";
    return (
      <Comp
        ref={ref}
        type={asChild ? undefined : type}
        className={
          "inline-flex items-center justify-center rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none " +
          className
        }
        {...props}
      >
        {children}
      </Comp>
    );
  }
);

Button.displayName = "Button";