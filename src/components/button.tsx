// button.tsx
import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

// ⚠️ Disclaimer: Use of Tailwind CSS is optional
const button = cva(["font-semibold", "border", "rounded"], {
  variants: {
    intent: {
      primary: [
        "bg-blue-500",
        "text-white",
        "border-transparent",
        "hover:bg-blue-600",
      ],
      // **or**
      // primary: "bg-blue-500 text-white border-transparent hover:bg-blue-600",
      secondary: [
        "bg-white",
        "text-gray-800",
        "border-gray-400",
        "hover:bg-gray-100",
      ],
      danger: [
        "bg-red-500",
        "text-white",
        "border-red-700",
        "hover:bg-red-600",
      ],
    },
    size: {
      small: ["text-sm", "py-1", "px-2"],
      medium: ["text-base", "py-2", "px-4"],
    },
    uppercase: {
      true: "uppercase",
    },
  },
  compoundVariants: [
    // {
    //   intent: "primary",
    //   size: "medium",
    //   class: "uppercase",
    //   // **or** if you're a React.js user, `className` may feel more consistent:
    //   // className: "uppercase"
    // },
  ],
  defaultVariants: {
    intent: "primary",
    size: "medium",
    uppercase: false,
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

export const Button: React.FC<ButtonProps> = ({
  className,
  intent,
  size,
  uppercase,
  ...props
}) => (
  <button
    className={button({ intent, size, uppercase, className })}
    {...props}
  />
);
