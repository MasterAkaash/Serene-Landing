import React from "react";

import { Text } from "components";

type SERENOALandingPageColumnProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "texth"
  | "textr"
  | "texti"
  | "texts"
  | "textu"
  | "textrOne"
  | "textn"
  | "texto"
  | "texte"
  | "textv"
  | "texteOne"
  | "textnOne"
  | "textt"
  | "textsOne"
  | "texttOne"
  | "textrTwo"
  | "texteTwo"
  | "textnTwo"
  | "textg"
  | "texttTwo"
  | "texthOne"
  | "texteThree"
  | "textnThree"
  | "textp"
> &
  Partial<{
    texth: string;
    textr: string;
    texti: string;
    texts: string;
    textu: string;
    textrOne: string;
    textn: string;
    texto: string;
    texte: string;
    textv: string;
    texteOne: string;
    textnOne: string;
    textt: string;
    textsOne: string;
    texttOne: string;
    textrTwo: string;
    texteTwo: string;
    textnTwo: string;
    textg: string;
    texttTwo: string;
    texthOne: string;
    texteThree: string;
    textnThree: string;
    textp: string;
  }>;

const SERENOALandingPageColumn: React.FC<SERENOALandingPageColumnProps> = (
  props,
) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col h-[120px] items-center justify-start w-[120px]">
          <div className="h-[120px] relative w-[96%]">
            <div className="md:h-11 h-[60px] mb-[-2.24px] mx-auto w-[99%] z-[1]">
              <div className="absolute md:h-[19px] h-[51px] left-[0] top-[0] w-[44%]">
                <div className="absolute bottom-[0] md:h-[19px] h-[47px] left-[0] w-[78%]">
                  <div className="absolute bottom-[0] md:h-[19px] h-[39px] left-[0] w-[74%]">
                    <div className="absolute bottom-[0] md:h-[19px] h-[30px] left-[0] w-[72%]">
                      <Text
                        className="absolute bottom-[0] left-[0] rotate-[69deg] text-[14.88px] text-center text-pink-300"
                        size="txtInterRegular1488"
                      >
                        {props?.textsOne}
                      </Text>
                      <Text
                        className="absolute right-[0] rotate-[55deg] text-[14.88px] text-center text-pink-300 top-[0]"
                        size="txtInterRegular1488"
                      >
                        {props?.texttOne}
                      </Text>
                    </div>
                    <Text
                      className="absolute right-[0] rotate-[42deg] text-[14.88px] text-center text-pink-300 top-[0]"
                      size="txtInterRegular1488"
                    >
                      {props?.textrTwo}
                    </Text>
                  </div>
                  <Text
                    className="absolute right-[0] rotate-[28deg] text-[14.88px] text-center text-pink-300 top-[0]"
                    size="txtInterRegular1488"
                  >
                    {props?.texteTwo}
                  </Text>
                </div>
                <Text
                  className="absolute right-[0] rotate-[14deg] text-[14.88px] text-center text-pink-300 top-[0]"
                  size="txtInterRegular1488"
                >
                  {props?.textnTwo}
                </Text>
              </div>
              <Text
                className="absolute inset-x-[0] mx-auto text-[14.88px] text-center text-pink-300 top-[0] w-max"
                size="txtInterRegular1488"
              >
                {props?.textg}
              </Text>
              <div className="absolute bottom-[0] flex flex-col justify-start right-[0]">
                <Text
                  className="rotate-[-14deg] text-[14.88px] text-center text-pink-300"
                  size="txtInterRegular1488"
                >
                  {props?.texttTwo}
                </Text>
                <Text
                  className="ml-3 md:ml-[0] rotate-[-28deg] text-[14.88px] text-center text-pink-300"
                  size="txtInterRegular1488"
                >
                  {props?.texthOne}
                </Text>
                <Text
                  className="md:ml-[0] ml-[22px] rotate-[-42deg] text-[14.88px] text-center text-pink-300"
                  size="txtInterRegular1488"
                >
                  {props?.texteThree}
                </Text>
                <Text
                  className="md:ml-[0] ml-[29px] mr-[7px] rotate-[-55deg] text-[14.88px] text-center text-pink-300"
                  size="txtInterRegular1488"
                >
                  {props?.textnThree}
                </Text>
                <Text
                  className="md:ml-[0] ml-[39px] mt-[3px] rotate-[-83deg] text-[14.88px] text-center text-pink-300"
                  size="txtInterRegular1488"
                >
                  {props?.textp}
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start mt-auto mx-auto w-full">
              <div className="flex flex-row items-start justify-evenly w-full">
                <div className="flex flex-col items-start justify-start w-[34%]">
                  <Text
                    className="rotate-[97deg] text-[14.88px] text-center text-pink-300"
                    size="txtInterRegular1488"
                  >
                    {props?.texth}
                  </Text>
                  <div className="md:h-[11px] h-[29px] ml-0.5 md:ml-[0] relative w-[29px]">
                    <div className="absolute bottom-[0] h-[18px] md:h-[9px] right-[0] w-[73%]">
                      <Text
                        className="absolute bottom-[0] right-[0] rotate-[138deg] text-[14.88px] text-center text-pink-300"
                        size="txtInterRegular1488"
                      >
                        {props?.textr}
                      </Text>
                      <Text
                        className="absolute left-[0] rotate-[125deg] text-[14.88px] text-center text-pink-300 top-[0]"
                        size="txtInterRegular1488"
                      >
                        {props?.texti}
                      </Text>
                    </div>
                    <Text
                      className="absolute left-[0] rotate-[111deg] text-[14.88px] text-center text-pink-300 top-[0]"
                      size="txtInterRegular1488"
                    >
                      {props?.texts}
                    </Text>
                  </div>
                  <Text
                    className="h-3 md:ml-[0] ml-[27px] rotate-[152deg] text-[14.88px] text-center text-pink-300"
                    size="txtInterRegular1488"
                  >
                    {props?.textu}
                  </Text>
                </div>
                <div className="md:h-[53px] h-[61px] mt-0.5 relative w-[66%]">
                  <div className="md:h-[51px] h-[61px] m-auto w-full">
                    <div className="md:h-[51px] h-[61px] m-auto w-full">
                      <div className="md:h-[51px] h-[61px] m-auto w-full">
                        <div className="md:h-[51px] h-[61px] m-auto w-full">
                          <div className="flex flex-col gap-[26px] h-full justify-start m-auto w-full">
                            <Text
                              className="md:ml-[0] ml-[62px] rotate-[-97deg] text-[14.88px] text-center text-pink-300"
                              size="txtInterRegular1488"
                            >
                              {props?.textrOne}
                            </Text>
                            <div className="md:h-2.5 h-5 mr-[51px] relative w-[32%]">
                              <Text
                                className="absolute bottom-[0] right-[0] rotate-[180deg] text-[14.88px] text-center text-pink-300"
                                size="txtInterRegular1488"
                              >
                                {props?.textn}
                              </Text>
                              <Text
                                className="absolute left-[0] rotate-[166deg] text-[14.88px] text-center text-pink-300 top-[0]"
                                size="txtInterRegular1488"
                              >
                                {props?.texto}
                              </Text>
                            </div>
                          </div>
                          <Text
                            className="absolute right-[3%] rotate-[-111deg] text-[14.88px] text-center text-pink-300 top-[15%]"
                            size="txtInterRegular1488"
                          >
                            {props?.texte}
                          </Text>
                        </div>
                        <Text
                          className="absolute h-max inset-y-[0] my-auto right-[9%] rotate-[-125deg] text-[14.88px] text-center text-pink-300"
                          size="txtInterRegular1488"
                        >
                          {props?.textv}
                        </Text>
                      </div>
                      <Text
                        className="absolute bottom-[20%] right-[21%] rotate-[-138deg] text-[14.88px] text-center text-pink-300"
                        size="txtInterRegular1488"
                      >
                        {props?.texteOne}
                      </Text>
                    </div>
                    <Text
                      className="absolute bottom-[10%] right-[35%] rotate-[-152deg] text-[14.88px] text-center text-pink-300"
                      size="txtInterRegular1488"
                    >
                      {props?.textnOne}
                    </Text>
                  </div>
                  <Text
                    className="absolute bottom-[0] left-[32%] rotate-[-166deg] text-[14.88px] text-center text-pink-300"
                    size="txtInterRegular1488"
                  >
                    {props?.textt}
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

SERENOALandingPageColumn.defaultProps = {
  texth: "H",
  textr: "R",
  texti: "I",
  texts: "S",
  textu: "U",
  textrOne: "R",
  textn: "N",
  texto: "O",
  texte: "E",
  textv: "V",
  texteOne: "E",
  textnOne: "N",
  textt: "T",
  textsOne: "S",
  texttOne: "T",
  textrTwo: "R",
  texteTwo: "E",
  textnTwo: "N",
  textg: "G",
  texttTwo: "T",
  texthOne: "H",
  texteThree: "E",
  textnThree: "N",
  textp: "P",
};

export default SERENOALandingPageColumn;
