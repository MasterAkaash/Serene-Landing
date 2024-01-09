import React from "react";

const sizeClasses = {
  txtMontserratRomanSemiBold24Black90001: "font-montserrat font-semibold",
  txtMontserratRomanSemiBold24Gray900: "font-montserrat font-semibold",
  txtInterSemiBold14: "font-inter font-semibold",
  txtMontserratRomanSemiBold16WhiteA700: "font-montserrat font-semibold",
  txtMontserratRomanRegular16Pink300: "font-montserrat font-normal",
  txtMontserratRomanSemiBold36: "font-montserrat font-semibold",
  txtMontserratRomanRegular16: "font-montserrat font-normal",
  txtMontserratRomanSemiBold24: "font-montserrat font-semibold",
  txtResPublica64: "font-normal font-respublica",
  txtMontserratRomanSemiBold16Pink300: "font-montserrat font-semibold",
  txtMontserratRomanRegular16Gray600: "font-montserrat font-normal",
  txtMontserratRomanSemiBold16Gray900: "font-montserrat font-semibold",
  txtMontserratRomanSemiBold16: "font-montserrat font-semibold",
  txtInterRegular1488: "font-inter font-normal",
} as const;

export type TextProps = Partial<{
  className: string;
  size: keyof typeof sizeClasses;
  as: any;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  size,
  as,
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
