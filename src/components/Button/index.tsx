import React from "react";

const shapes = { round: "rounded-[32px]", square: "rounded-none" } as const;
const variants = {
  fill: {
    gray_900: "bg-gray-900 shadow-bs text-white-A700",
    white_A700: "bg-white-A700 shadow-bs1 text-pink-300",
    pink_300: "bg-pink-300",
    gray_100: "bg-gray-100",
  },
  gradient: { pink_100_gray_600_01: "bg-gradient  shadow-bs2 text-white-A700" },
  outline: { gray_300: "border border-gray-300 border-solid" },
} as const;
const sizes = { xs: "p-2.5", sm: "p-[13px]", md: "p-[23px] sm:px-5" } as const;

export type ButtonProps = Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  "onClick"
> &
  Partial<{
    className: string;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
  }>;

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };
