import React from "react";

// Simple className joining function to replace cn from shadcn
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const ShimmerButton = React.forwardRef(
  (
    {
      shimmerDuration = "3s",
      borderRadius = "100px",
      background = "#ffffff",
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        style={{
          borderRadius: borderRadius,
          background: background,
          position: "relative",
          overflow: "hidden",
          padding: "0.75rem 1.5rem",
          zIndex: 1,
          color: "#000000",
        }}
        className={classNames(
          "group relative flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap",
          "transform-gpu transition-transform duration-300 ease-in-out active:translate-y-px",
          className
        )}
        ref={ref}
        {...props}
      >
        {/* Outer container for the animation */}
        <div
          style={{
            position: "absolute",
            inset: "-1px", // Thin border area
            borderRadius: `calc(${borderRadius} + 1px)`,
            overflow: "hidden",
            zIndex: -1,
          }}
        >
          {/* Sharp, thin black moving animation */}
          <div
            style={{
              position: "absolute",
              top: "-100%",
              left: "-100%",
              width: "300%",
              height: "300%",
              background: `conic-gradient(
                from 90deg at 50% 50%, 
                transparent 0deg, 
                #000000 42deg, 
                #000000 48deg, 
                transparent 50deg
              )`,
              animation: `spin ${shimmerDuration} linear infinite`,
              opacity: 1, // Full opacity for clarity
            }}
          />
        </div>

        {/* Content container */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
          }}
        >
          {children}
        </div>

        {/* Backdrop for text visibility - slightly smaller to show the border */}
        <div
          style={{
            position: "absolute",
            inset: "1px", // Thin 1px gap to show the border
            background: background,
            borderRadius: `calc(${borderRadius} - 1px)`,
            zIndex: 0,
          }}
        />

        {/* Highlight effect */}
        <div
          className={classNames(
            "absolute shadow-[inset_0_-8px_10px_#0000000f]",
            "transform-gpu transition-all duration-300 ease-in-out",
            "group-hover:shadow-[inset_0_-6px_10px_#00000015]",
            "group-active:shadow-[inset_0_-10px_10px_#00000020]"
          )}
          style={{
            borderRadius: `calc(${borderRadius} - 1px)`,
            inset: "1px",
            zIndex: 1,
          }}
        />
      </button>
    );
  }
);

ShimmerButton.displayName = "ShimmerButton";
