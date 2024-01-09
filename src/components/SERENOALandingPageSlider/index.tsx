import React from "react";

import { Img } from "components";

type SERENOALandingPageSliderProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const SERENOALandingPageSlider: React.FC<SERENOALandingPageSliderProps> = (
  props,
) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-8 items-center justify-start w-[65%] md:w-full">
          <Img
            className="h-20 md:h-auto object-cover rounded-bl-[40px] rounded-br-[40px] w-full"
            src="images/img_rectangle10.png"
            alt="rectangleTen"
          />
          <Img
            className="h-20 md:h-auto object-cover rounded-tl-[40px] rounded-tr-[40px] w-full"
            src="images/img_rectangle9.png"
            alt="rectangleNine"
          />
        </div>
        <Img
          className="h-[285px] md:h-auto object-cover rounded-tl-[16px] rounded-tr-[16px] w-[285px]"
          src="images/img_rectangle7.png"
          alt="rectangleSeven"
        />
      </div>
    </>
  );
};

SERENOALandingPageSlider.defaultProps = {};

export default SERENOALandingPageSlider;
