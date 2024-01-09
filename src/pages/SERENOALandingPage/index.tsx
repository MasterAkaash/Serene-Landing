import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import SERENOALandingPageCalendar from "components/SERENOALandingPageCalendar";
import SERENOALandingPageColumn from "components/SERENOALandingPageColumn";
import SERENOALandingPageSlider from "components/SERENOALandingPageSlider";

const SERENOALandingPagePage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-montserrat items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="bg-black-900 flex flex-col items-center justify-start p-2 w-full">
            <div className="flex flex-row gap-2 items-center justify-start md:px-5 w-auto">
              <Text
                className="text-base text-gray-300 w-auto"
                size="txtMontserratRomanSemiBold16"
              >
                Trusted by hair professionals worldwide
              </Text>
              <Img
                className="h-6 w-6"
                src="images/img_earthsvgrepocom.svg"
                alt="earthsvgrepocom"
              />
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start max-w-[1320px] mt-6 mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col items-center justify-start py-2.5 w-[15%] md:w-full">
              <Img
                className="h-[29px] md:h-auto object-cover w-full"
                src="images/img_logoblack1.png"
                alt="logoblackOne"
              />
            </div>
            <div className="h-12 sm:h-[328px] md:ml-[0] ml-[134px] relative w-[51%] md:w-full">
              <div className="absolute flex sm:flex-col flex-row gap-8 h-max inset-[0] items-center justify-between m-auto w-auto">
                <div className="flex flex-col h-10 md:h-auto items-center justify-center px-5 py-2.5 w-auto">
                  <Text
                    className="text-base text-gray-900 w-auto"
                    size="txtMontserratRomanRegular16"
                  >
                    Home
                  </Text>
                </div>
                <div className="flex flex-col h-10 md:h-auto items-center justify-center px-5 py-2.5 w-auto">
                  <Text
                    className="text-base text-gray-900 w-auto"
                    size="txtMontserratRomanRegular16"
                  >
                    Shop
                  </Text>
                </div>
                <div className="flex flex-col h-10 md:h-auto items-center justify-center px-5 py-2.5 w-auto">
                  <Text
                    className="text-base text-gray-900 w-auto"
                    size="txtMontserratRomanRegular16"
                  >
                    Results
                  </Text>
                </div>
                <div className="flex flex-col h-10 md:h-auto items-center justify-center px-5 py-2.5 w-auto">
                  <Text
                    className="text-base text-gray-900 w-auto"
                    size="txtMontserratRomanRegular16"
                  >
                    Become a Stockist
                  </Text>
                </div>
                <div className="flex flex-col h-10 md:h-auto items-center justify-center px-5 py-2.5 w-auto">
                  <Text
                    className="text-base text-gray-900 w-auto"
                    size="txtMontserratRomanRegular16"
                  >
                    FAQ
                  </Text>
                </div>
              </div>
              <Img
                className="absolute h-12 inset-y-[0] left-[0] my-auto"
                src="images/img_circle1.svg"
                alt="circleOne"
              />
            </div>
            <Img
              className="h-6 md:ml-[0] ml-[129px] w-6"
              src="images/img_bag4svgrepocom.svg"
              alt="bag4svgrepocom"
            />
            <Button
              className="cursor-pointer flex items-center justify-center min-w-[143px] ml-8 md:ml-[0] rounded-[25px]"
              leftIcon={
                <Img
                  className="h-6 mr-2"
                  src="images/img_usersvgrepocom_1.svg"
                  alt="user-svgrepo-com 1"
                />
              }
              color="gray_900"
              size="sm"
              variant="fill"
            >
              <div className="leading-[normal] text-base text-left">Log In</div>
            </Button>
          </div>
          <Line className="bg-gray-300 h-px max-w-[1320px] mt-6 mx-auto w-full" />
          <div className="font-inter h-[696px] sm:h-[749px] md:h-[917px] mt-[53px] md:px-5 relative w-full">
            <div className="absolute h-[696px] md:h-[864px] inset-[0] justify-center m-auto w-full">
              <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[511px] items-end justify-start md:mt-0 mt-[185px] p-5"
                    style={{ backgroundImage: "url('images/img_group4.png')" }}
                  >
                    <SERENOALandingPageColumn className="flex flex-col h-[120px] items-center justify-start mb-[304px] mt-[45px] w-[120px]" />
                  </div>
                  <Img
                    className="h-[372px] md:h-auto object-cover"
                    src="images/img_vector.png"
                    alt="vector"
                  />
                </div>
              </div>
              <div className="absolute flex flex-col h-[285px] items-center justify-start left-[4%] top-[4%] w-[285px]">
                <Img
                  className="h-[285px] md:h-auto object-cover rounded-bl-[16px] rounded-br-[16px] w-[285px]"
                  src="images/img_rectangle6.png"
                  alt="rectangleSix"
                />
              </div>
            </div>
            <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[20%] w-[55%]">
              <Text
                className="md:text-5xl text-[64px] text-center text-gray-900"
                size="txtResPublica64"
              >
                <>
                  Embrace the Radiance
                  <br />
                  of Resilient Health
                </>
              </Text>
              <Text
                className="mt-10 text-base text-center text-gray-600 w-3/4 sm:w-full"
                size="txtMontserratRomanRegular16Gray600"
              >
                Designed to revitalize your hair, restore hormonal balance for
                those with PCOS, and promote optimal urinary tract health.
              </Text>
              <div className="flex sm:flex-col flex-row font-montserrat gap-8 items-center justify-start mt-[31px] w-auto sm:w-full">
                <div className="bg-gradient  flex flex-row gap-3 h-16 md:h-auto items-center justify-center sm:pl-5 pl-8 pr-2 rounded-[32px] shadow-bs2 w-auto">
                  <Text
                    className="text-base text-white-A700 w-auto"
                    size="txtMontserratRomanSemiBold16WhiteA700"
                  >
                    See our Products
                  </Text>
                  <div className="bg-white-A700 flex flex-col h-12 items-center justify-start p-[15px] rotate-[-180deg] rounded-[50%] w-12">
                    <Img
                      className="h-[13px] my-0.5"
                      src="images/img_arrowleft.svg"
                      alt="arrowleft"
                    />
                  </div>
                </div>
                <div className="flex flex-row gap-3 items-center justify-start w-auto">
                  <Img
                    className="h-8 w-8"
                    src="images/img_overflowmenu.svg"
                    alt="overflowmenu"
                  />
                  <Text
                    className="text-base text-gray-900 underline w-auto"
                    size="txtMontserratRomanSemiBold16Gray900"
                  >
                    Watch Story
                  </Text>
                </div>
              </div>
            </div>
            <div className="absolute flex sm:flex-col flex-row font-montserrat md:gap-10 items-end justify-between right-[4%] top-[8%] w-[85%]">
              <div className="flex flex-col gap-6 h-[110px] md:h-auto items-start justify-start sm:mt-0 mt-[431px] w-auto">
                <Text
                  className="text-2xl md:text-[22px] text-pink-300 sm:text-xl w-auto"
                  size="txtMontserratRomanSemiBold24"
                >
                  SERENOA
                </Text>
                <div className="flex flex-row gap-4 items-start justify-start w-auto">
                  <Line className="bg-pink-300 h-[65px] w-1" />
                  <div className="flex flex-col gap-4 items-start justify-start w-auto">
                    <Text
                      className="text-base text-pink-300 w-auto"
                      size="txtMontserratRomanRegular16Pink300"
                    >
                      Prevent Hair Loss
                    </Text>
                    <Text
                      className="text-base text-pink-300 w-auto"
                      size="txtMontserratRomanRegular16Pink300"
                    >
                      Balance Hormones with PCOS
                    </Text>
                    <Text
                      className="text-base text-pink-300 w-auto"
                      size="txtMontserratRomanRegular16Pink300"
                    >
                      Relief Irritable Bowel Syndrome
                    </Text>
                  </div>
                </div>
              </div>
              <SERENOALandingPageSlider className="flex flex-col md:gap-10 gap-16 items-center justify-start w-[24%] sm:w-full" />
            </div>
          </div>
          <div className="flex md:flex-col flex-row font-montserrat md:gap-10 items-center justify-between max-w-[1200px] mt-[27px] mx-auto md:px-5 w-full">
            <div className="flex flex-col gap-[17px] items-start justify-start">
              <Text
                className="text-base text-center text-pink-300"
                size="txtMontserratRomanSemiBold16Pink300"
              >
                Our Product Benefits
              </Text>
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-center text-gray-900"
                size="txtMontserratRomanSemiBold36"
              >
                Choose What Needs to be Resolved
              </Text>
            </div>
            <Img
              className="h-12 w-[120px]"
              src="images/img_frame142.svg"
              alt="frame142"
            />
          </div>
          <div className="font-montserrat h-[1204px] md:h-[1271px] sm:h-[908px] mt-[31px] overflow-auto md:px-5 relative w-full">
            <Img
              className="absolute h-[375px] inset-x-[0] mx-auto top-[19%]"
              src="images/img_vector_pink_300_01.svg"
              alt="vector_One"
            />
            <div className="absolute bg-gray-50 bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto p-[74px] md:px-10 sm:px-5 w-full">
              <div className="flex flex-col md:gap-10 gap-16 items-center justify-start mb-1 w-[93%] md:w-full">
                <div className="flex flex-col gap-6 items-center justify-start w-auto md:w-full">
                  <Text
                    className="text-base text-center text-pink-300 w-auto"
                    size="txtMontserratRomanSemiBold16Pink300"
                  >
                    How it Works
                  </Text>
                  <Text
                    className="text-4xl sm:text-[32px] md:text-[34px] text-center text-gray-900 w-auto"
                    size="txtMontserratRomanSemiBold36"
                  >
                    The Science Behind Saw Palmetto
                  </Text>
                  <Img
                    className="h-4 w-[120px]"
                    src="images/img_line6.svg"
                    alt="lineSix"
                  />
                </div>
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                  <div className="flex flex-col md:gap-10 gap-[61px] items-start justify-start">
                    <div className="flex flex-col gap-8 items-start justify-start w-auto sm:w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-auto"
                        size="txtMontserratRomanSemiBold24Gray900"
                      >
                        What is Saw Palmetto?
                      </Text>
                      <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                        <Text
                          className="max-w-[530px] md:max-w-full text-base text-gray-900"
                          size="txtMontserratRomanRegular16"
                        >
                          <>
                            Saw Palmetto works by inhibiting the action of an
                            enzyme known as 5-alpha-reductase, which is involved
                            in the conversion of testosterone to
                            dihydrotestosterone (DHT). By reducing DHT levels,
                            Saw Palmetto may contribute to the maintenance of a
                            healthy prostate and potentially aid in managing
                            symptoms of conditions such as benign prostatic
                            hyperplasia (BPH). Additionally, it is believed to
                            have anti-inflammatory properties that could
                            positively impact urinary tract health. While
                            further research is needed to fully understand its
                            mechanisms, Saw Palmetto&#39;s potential benefits
                            extend to hair care, hormonal balance, and overall
                            well-being.
                          </>
                        </Text>
                      </div>
                    </div>
                    <div className="flex sm:flex-col flex-row gap-8 items-start justify-start w-auto sm:w-full">
                      <Button
                        className="cursor-pointer font-semibold h-16 leading-[normal] min-w-[190px] text-base text-center"
                        shape="round"
                        size="md"
                        variant="gradient"
                        color="pink_100_gray_600_01"
                      >
                        Learn More
                      </Button>
                      <Button
                        className="cursor-pointer font-semibold h-16 leading-[normal] min-w-[181px] text-base text-center"
                        shape="round"
                        color="white_A700"
                        size="md"
                        variant="fill"
                      >
                        Shop Now
                      </Button>
                    </div>
                  </div>
                  <Img
                    className="h-[500px] md:h-auto object-cover rounded-[20px]"
                    src="images/img_rectangle15.png"
                    alt="rectangleFifteen"
                  />
                </div>
              </div>
            </div>
            <List
              className="absolute sm:flex-col flex-row gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 right-[0] top-[0] w-[97%]"
              orientation="horizontal"
            >
              <div
                className="bg-cover bg-gradient1  bg-no-repeat flex flex-col md:gap-10 gap-[165px] h-[280px] justify-end sm:ml-[0] p-5 rounded-[12px] shadow-bs3 w-full"
                style={{ backgroundImage: "url('images/img_frame133.png')" }}
              >
                <Text
                  className="ml-5 md:ml-[0] mr-[174px] mt-3 text-2xl md:text-[22px] text-pink-300 sm:text-xl"
                  size="txtMontserratRomanSemiBold24"
                >
                  Prevent Hair Loss
                </Text>
                <div className="bg-white-A700 flex flex-col items-center justify-start md:ml-[0] ml-[362px] p-1 rounded-[16px] w-[12%] md:w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_arrowright_pink_300.svg"
                    alt="arrowright"
                  />
                </div>
              </div>
              <div
                className="bg-cover bg-gradient2  bg-no-repeat flex flex-col md:gap-10 gap-[142px] h-[280px] justify-end sm:ml-[0] p-5 rounded-[12px] shadow-bs3 w-full"
                style={{ backgroundImage: "url('images/img_frame133.png')" }}
              >
                <Text
                  className="md:ml-[0] mt-5 mx-5 text-2xl md:text-[22px] text-pink-300 sm:text-xl"
                  size="txtMontserratRomanSemiBold24"
                >
                  <>
                    Balance Hormones with
                    <br />
                    PCOS
                  </>
                </Text>
                <div className="bg-white-A700 flex flex-col items-center justify-start md:ml-[0] ml-[362px] p-1 rounded-[16px] w-[12%] md:w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_arrowright_pink_300.svg"
                    alt="arrowright"
                  />
                </div>
              </div>
              <div
                className="bg-cover bg-gradient3  bg-no-repeat flex flex-col md:gap-10 gap-[142px] h-[280px] justify-end sm:ml-[0] p-5 rounded-[12px] shadow-bs3 w-full"
                style={{ backgroundImage: "url('images/img_frame133.png')" }}
              >
                <Text
                  className="ml-5 md:ml-[0] mr-[132px] mt-5 text-2xl md:text-[22px] text-pink-300 sm:text-xl"
                  size="txtMontserratRomanSemiBold24"
                >
                  <>
                    Relief Irritable Bowel
                    <br />
                    Syndrome
                  </>
                </Text>
                <div className="bg-white-A700 flex flex-col items-center justify-start md:ml-[0] ml-[362px] p-1 rounded-[16px] w-[12%] md:w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_arrowright_pink_300.svg"
                    alt="arrowright"
                  />
                </div>
              </div>
            </List>
          </div>
          <div className="flex flex-col font-montserrat gap-8 items-start justify-start mt-[66px] md:px-5 w-auto md:w-full">
            <Text
              className="text-base text-pink-300 w-auto"
              size="txtMontserratRomanSemiBold16Pink300"
            >
              What Makes Us Different
            </Text>
            <Text
              className="text-4xl sm:text-[32px] md:text-[34px] text-gray-900 w-auto"
              size="txtMontserratRomanSemiBold36"
            >
              Unique Solutions, Extraordinary Results
            </Text>
          </div>
          <div className="flex flex-col font-montserrat items-center justify-start max-w-[1200px] mt-7 mx-auto md:px-5 w-full">
            <div className="flex flex-col gap-5 items-center justify-start w-full">
              <div className="flex md:flex-col flex-row gap-5 items-center justify-between w-full">
                <div className="bg-gray-50_01 flex md:flex-1 flex-col items-start justify-end pt-[35px] sm:px-5 px-[35px] rounded-[16px] w-[38%] md:w-full">
                  <Text
                    className="ml-1 md:ml-[0] text-2xl md:text-[22px] text-pink-300 sm:text-xl"
                    size="txtMontserratRomanSemiBold24"
                  >
                    UK-Licensed Experts
                  </Text>
                  <Text
                    className="ml-1 md:ml-[0] mt-[15px] text-base text-pink-300 w-[98%] sm:w-full"
                    size="txtMontserratRomanRegular16Pink300"
                  >
                    Experience precision and quality care delivered by certified
                    experts committed to your well-being.
                  </Text>
                  <Img
                    className="h-[193px] md:h-auto md:ml-[0] ml-[173px] mt-[26px] object-cover w-[53%] sm:w-full"
                    src="images/img_pngwing1.png"
                    alt="pngwingOne"
                  />
                </div>
                <div className="bg-gray-50_01 flex md:flex-1 flex-col items-start justify-end p-1.5 rounded-[16px] w-[61%] md:w-full">
                  <Text
                    className="md:ml-[0] ml-[34px] mt-[29px] text-2xl md:text-[22px] text-pink-300 sm:text-xl"
                    size="txtMontserratRomanSemiBold24"
                  >
                    Free Fast Delivery
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[34px] mt-[15px] text-base text-pink-300 w-[91%] sm:w-full"
                    size="txtMontserratRomanRegular16Pink300"
                  >
                    Swift and complimentary delivery – because getting what you
                    need should be both quick and hassle-free.
                  </Text>
                  <div className="h-[200px] md:h-[233px] md:ml-[0] ml-[178px] mt-[33px] relative w-[51%]">
                    <Img
                      className="h-[200px] m-auto object-cover w-full"
                      src="images/img_vecteezymaquet.png"
                      alt="vecteezymaquet"
                    />
                    <div className="absolute backdrop-opacity-[0.5] bg-blue_gray-100 blur-[4.00px] bottom-[3%] h-[9px] inset-x-[0] mx-auto rounded-[156px] w-[87%]"></div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col flex-row gap-5 items-center justify-between w-full">
                <div className="bg-gray-50_01 md:h-[342px] h-[360px] pt-[17px] px-[17px] relative rounded-[16px] w-[61%] md:w-full">
                  <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[9%] w-[90%]">
                    <div className="flex flex-col gap-[17px] items-start justify-start w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-pink-300 sm:text-xl"
                        size="txtMontserratRomanSemiBold24"
                      >
                        Guaranteed Results
                      </Text>
                      <Text
                        className="text-base text-pink-300 w-full"
                        size="txtMontserratRomanRegular16Pink300"
                      >
                        Our commitment to you includes guaranteed results,
                        ensuring your satisfaction and success.
                      </Text>
                    </div>
                  </div>
                  <Img
                    className="absolute bottom-[0] h-[342px] inset-x-[0] mx-auto object-cover w-[56%]"
                    src="images/img_pngwing2.png"
                    alt="pngwingTwo"
                  />
                </div>
                <div className="bg-gray-50_01 flex md:flex-1 flex-col gap-[15px] items-start justify-end pt-[35px] sm:px-5 px-[35px] rounded-[16px] w-[38%] md:w-full">
                  <Text
                    className="ml-1 md:ml-[0] text-2xl md:text-[22px] text-pink-300 sm:text-xl"
                    size="txtMontserratRomanSemiBold24"
                  >
                    Active Chat Support
                  </Text>
                  <Text
                    className="ml-1 md:ml-[0] text-base text-pink-300 w-[98%] sm:w-full"
                    size="txtMontserratRomanRegular16Pink300"
                  >
                    Our active chat support, ensuring real-time solutions and
                    personalized help whenever you need it.
                  </Text>
                  <Img
                    className="h-[204px] md:h-auto md:ml-[0] ml-[60px] object-cover w-[68%] sm:w-full"
                    src="images/img_pngwing3.png"
                    alt="pngwingThree"
                  />
                </div>
              </div>
            </div>
          </div>
          <Line className="bg-gray-300 h-px max-w-[1200px] mt-20 mx-auto w-full" />
          <div className="flex md:flex-col flex-row font-montserrat md:gap-10 items-start justify-between max-w-[1200px] mt-[75px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col gap-8 items-start justify-start w-auto md:w-full">
              <Text
                className="text-base text-pink-300 w-auto"
                size="txtMontserratRomanSemiBold16Pink300"
              >
                Who We Are
              </Text>
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-gray-900 w-auto"
                size="txtMontserratRomanSemiBold36"
              >
                Our Team of Healthcare Professionals
              </Text>
            </div>
            <Img
              className="h-12 md:mt-0 mt-6 w-[120px]"
              src="images/img_frame142.svg"
              alt="frame150"
            />
          </div>
          <div className="flex flex-col font-montserrat items-end justify-start mt-[31px] overflow-auto md:px-5 w-[92%] md:w-full">
            <div className="overflow-x-auto w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <div className="gap-5 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 items-center justify-start w-[93%] md:w-full">
                  <div className="bg-gradient1  flex flex-col h-[285px] items-center justify-end pt-10 rounded-[12px] w-[285px]">
                    <Img
                      className="h-[245px] md:h-auto object-cover rounded-tl-[12px] rounded-tr-[12px] w-full"
                      src="images/img_pngwing4.png"
                      alt="pngwingFour"
                    />
                  </div>
                  <div className="bg-gradient2  flex flex-col h-[285px] items-center justify-end pt-[9px] px-[9px] rounded-[12px] w-[285px]">
                    <Img
                      className="h-[255px] md:h-auto mt-[21px] object-cover w-full"
                      src="images/img_pngwing5.png"
                      alt="pngwingFive"
                    />
                  </div>
                  <div className="bg-gradient3  flex flex-col h-[285px] items-end justify-end pt-5 px-5 rounded-[12px] w-[285px]">
                    <Img
                      className="h-[251px] md:h-auto mt-[13px] object-cover w-[91%]"
                      src="images/img_pngwing7.png"
                      alt="pngwingSeven"
                    />
                  </div>
                  <div className="bg-gradient1  flex flex-col h-[285px] items-center justify-end pt-5 px-5 rounded-[12px] w-[285px]">
                    <Img
                      className="h-[265px] md:h-auto object-cover w-[92%]"
                      src="images/img_pngwing6.png"
                      alt="pngwingSix"
                    />
                  </div>
                  <div className="bg-gradient2  flex flex-col h-[285px] items-center justify-end pt-8 sm:px-5 px-8 rounded-[12px] w-[285px]">
                    <Img
                      className="h-[253px] md:h-auto object-cover w-full"
                      src="images/img_pngwing8.png"
                      alt="pngwingEight"
                    />
                  </div>
                </div>
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[26px] w-[93%] md:w-full">
                  <Text
                    className="text-base text-gray-900"
                    size="txtMontserratRomanSemiBold16Gray900"
                  >
                    Caitlyn King
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[204px] text-base text-gray-900"
                    size="txtMontserratRomanSemiBold16Gray900"
                  >
                    Sienna Hewitt
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[188px] text-base text-gray-900"
                    size="txtMontserratRomanSemiBold16Gray900"
                  >
                    kyla Clay
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[232px] text-base text-gray-900"
                    size="txtMontserratRomanSemiBold16Gray900"
                  >
                    Lulu Meyers
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[205px] text-base text-gray-900"
                    size="txtMontserratRomanSemiBold16Gray900"
                  >
                    Jane Pemberton
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start mt-[21px] w-full">
                  <Text
                    className="text-base text-gray-600"
                    size="txtMontserratRomanRegular16Gray600"
                  >
                    Medical Director
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[172px] text-base text-gray-600"
                    size="txtMontserratRomanRegular16Gray600"
                  >
                    Pharmacist, Ind. Prescriber
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[92px] text-base text-gray-600"
                    size="txtMontserratRomanRegular16Gray600"
                  >
                    Pharmacist, Ind. Prescriber
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[92px] text-base text-gray-600"
                    size="txtMontserratRomanRegular16Gray600"
                  >
                    TRT Medical Expert
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[151px] text-base text-gray-600"
                    size="txtMontserratRomanRegular16Gray600"
                  >
                    Pharmacist, Ind. Prescriber
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <Line className="bg-gray-300 h-px max-w-[1200px] mt-[74px] mx-auto w-full" />
          <div className="flex flex-col font-montserrat items-center justify-start max-w-[1200px] mt-[75px] mx-auto md:px-5 w-full">
            <div className="flex flex-col gap-[59px] items-center justify-start w-full">
              <div className="flex flex-col gap-6 items-center justify-start w-auto md:w-full">
                <Text
                  className="text-base text-center text-pink-300 w-auto"
                  size="txtMontserratRomanSemiBold16Pink300"
                >
                  Book a Call
                </Text>
                <Text
                  className="text-4xl sm:text-[32px] md:text-[34px] text-center text-gray-900 w-auto"
                  size="txtMontserratRomanSemiBold36"
                >
                  Book Your Call For Personalized Product Guidance
                </Text>
                <Img
                  className="h-4 w-[120px]"
                  src="images/img_line6.svg"
                  alt="lineSix_One"
                />
              </div>
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                <div className="flex md:flex-1 flex-col items-center justify-start w-1/2 md:w-full">
                  <div className="flex flex-col gap-5 items-start justify-start w-auto md:w-full">
                    <Text
                      className="text-base text-gray-900 w-auto"
                      size="txtMontserratRomanSemiBold16Gray900"
                    >
                      Full Name
                    </Text>
                    <Input
                      name="frameSeventyFive"
                      placeholder="Enter your full name"
                      className="leading-[normal] md:h-auto p-0 placeholder:text-gray-600 sm:h-auto text-base text-left w-full"
                      wrapClassName="w-full"
                      type="text"
                    ></Input>
                  </div>
                  <div className="flex flex-col gap-5 items-start justify-start mt-[35px] w-auto md:w-full">
                    <Text
                      className="text-base text-gray-900 w-auto"
                      size="txtMontserratRomanSemiBold16Gray900"
                    >
                      Contact Number
                    </Text>
                    <Input
                      name="frameSeventyFive_One"
                      placeholder="Enter your contact number"
                      className="leading-[normal] md:h-auto p-0 placeholder:text-gray-600 sm:h-auto text-base text-left w-full"
                      wrapClassName="w-full"
                      type="number"
                    ></Input>
                  </div>
                  <div className="flex flex-col gap-5 items-start justify-start mt-[34px] w-auto md:w-full">
                    <Text
                      className="text-base text-gray-900 w-auto"
                      size="txtMontserratRomanSemiBold16Gray900"
                    >
                      Email-Address
                    </Text>
                    <Input
                      name="frameSeventyFive_Two"
                      placeholder="Enter your email-address"
                      className="leading-[normal] md:h-auto p-0 placeholder:text-gray-600 sm:h-auto text-base text-left w-full"
                      wrapClassName="w-full"
                      type="email"
                    ></Input>
                  </div>
                  <div className="flex flex-col gap-5 items-start justify-start mt-[34px] w-auto md:w-full">
                    <Text
                      className="text-base text-gray-900 w-auto"
                      size="txtMontserratRomanSemiBold16Gray900"
                    >
                      Preferred Call Time
                    </Text>
                    <Input
                      name="frameSeventyFive_Three"
                      placeholder="Select your preferred call time"
                      className="leading-[normal] p-0 placeholder:text-gray-600 text-base text-left w-full"
                      wrapClassName="flex md:h-auto w-[598px] md:w-full"
                      suffix={
                        <Img
                          className="h-6 ml-[35px]"
                          src="images/img_checkmark.svg"
                          alt="checkmark"
                        />
                      }
                      size="xs"
                    ></Input>
                  </div>
                  <Text
                    className="mt-[39px] text-base text-gray-600 w-full"
                    size="txtMontserratRomanRegular16Gray600"
                  >
                    <span className="text-gray-600 font-montserrat text-left font-normal">
                      By providing your information you agree to our{" "}
                    </span>
                    <span className="text-pink-300 font-montserrat text-left font-semibold">
                      privacy policy
                    </span>
                    <span className="text-gray-600 font-montserrat text-left font-normal">
                      {" "}
                      and agree to receive timely news and marketing offers.
                    </span>
                  </Text>
                  <Button
                    className="cursor-pointer font-semibold h-16 leading-[normal] min-w-[253px] mt-[55px] text-base text-center"
                    shape="round"
                    size="md"
                    variant="gradient"
                    color="pink_100_gray_600_01"
                  >
                    Book a Call
                  </Button>
                </div>
                <div className="flex sm:flex-1 flex-col gap-5 items-start justify-start w-auto sm:w-full">
                  <Text
                    className="text-base text-gray-900 w-auto"
                    size="txtMontserratRomanSemiBold16Gray900"
                  >
                    Pick a Date
                  </Text>
                  <SERENOALandingPageCalendar className="bg-white-A700 flex flex-col gap-3 items-start justify-start p-[30px] sm:px-5 rounded-[16px] shadow-bs3 w-auto sm:w-full" />
                </div>
              </div>
            </div>
          </div>
          <footer className="flex font-montserrat items-center justify-center mt-[100px] md:px-5 w-full">
            <div className="flex flex-col items-center justify-center w-full">
              <div className="bg-gray-50_01 flex flex-col md:gap-10 gap-16 items-center justify-start p-[76px] md:px-10 sm:px-5 w-full">
                <ul className="flex flex-col items-center justify-start md:px-10 sm:px-5 px-[101px] w-[68%] md:w-full common-column-list">
                  <li>
                    <a
                      href="javascript:"
                      className="text-base text-center text-pink-300"
                    >
                      <Text size="txtMontserratRomanSemiBold16Pink300">
                        Frequently Asked Questions
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="mt-[19px] text-4xl sm:text-[32px] md:text-[34px] text-center text-gray-900"
                    >
                      <Text size="txtMontserratRomanSemiBold36">
                        Read the FAQ from Our Community
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:">
                      <Img
                        className="h-4 mt-1"
                        src="images/img_line6.svg"
                        alt="lineSix_Two"
                      />
                    </a>
                  </li>
                </ul>
                <div className="flex flex-col gap-5 items-center justify-start mb-[43px] w-[78%] md:w-full">
                  <div className="h-[200px] sm:h-[250px] relative w-full">
                    <div className="absolute bg-white-A700 flex flex-col h-full inset-[0] items-start justify-center m-auto p-[34px] sm:px-5 rounded-[16px] shadow-bs4 w-full">
                      <div className="flex flex-col gap-[21px] justify-start mb-[19px] md:ml-[0] ml-[15px] w-[92%] md:w-full">
                        <div className="flex sm:flex-col flex-row gap-8 items-center justify-start w-[59%] md:w-full">
                          <Img
                            className="h-8 md:h-auto object-cover w-8"
                            src="images/img_minuscirclesvgrepocom.png"
                            alt="minuscirclesvgr"
                          />
                          <Text
                            className="text-base text-gray-900"
                            size="txtMontserratRomanSemiBold16Gray900"
                          >
                            What is Serenoa and how does it work for hair care?
                          </Text>
                        </div>
                        <Text
                          className="ml-16 md:ml-[0] text-base text-gray-600 w-[93%] sm:w-full"
                          size="txtMontserratRomanRegular16Gray600"
                        >
                          Serenoa is a premium hair care product formulated to
                          address hair loss concerns. It combines natural
                          ingredients that nourish the scalp and promote
                          healthier hair growth. Its unique formula helps
                          strengthen hair follicles and reduce hair thinning.
                        </Text>
                      </div>
                    </div>
                    <div className="absolute bg-pink-300 h-[200px] inset-y-[0] left-[0] my-auto rounded-bl-[16px] rounded-tl-[16px] shadow-bs4 w-[2%]"></div>
                  </div>
                  <ul className="flex flex-col gap-5 items-start justify-start w-auto md:w-full common-column-list">
                    <li>
                      <a href="javascript:">
                        <div className="bg-white-A700 flex sm:flex-col flex-row sm:gap-5 items-center justify-start md:pr-10 sm:pr-5 pr-[616px] rounded-[16px] shadow-bs4">
                          <div className="bg-pink-300 h-[100px] rounded-bl-[16px] rounded-tl-[16px] shadow-bs4 w-[5%]"></div>
                          <Img
                            className="h-8 md:h-auto sm:ml-[0] ml-[34px] object-cover w-8"
                            src="images/img_addcirclesvgrepocom.png"
                            alt="addcirclesvgrep"
                          />
                          <Text
                            className="ml-8 sm:ml-[0] text-base text-gray-900"
                            size="txtMontserratRomanSemiBold16Gray900"
                          >
                            How often should I use Serenoa?
                          </Text>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:">
                        <div className="bg-white-A700 flex sm:flex-col flex-row sm:gap-5 items-center justify-start md:pr-10 sm:pr-5 pr-[511px] rounded-[16px] shadow-bs4">
                          <div className="bg-pink-300 h-[100px] rounded-bl-[16px] rounded-tl-[16px] shadow-bs4 w-[4%]"></div>
                          <Img
                            className="h-8 md:h-auto sm:ml-[0] ml-[34px] object-cover w-8"
                            src="images/img_addcirclesvgrepocom.png"
                            alt="addcirclesvgrep_One"
                          />
                          <Text
                            className="ml-8 sm:ml-[0] text-base text-gray-900"
                            size="txtMontserratRomanSemiBold16Gray900"
                          >
                            Is Serenoa suitable for all women with PCOS?
                          </Text>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:">
                        <div className="bg-white-A700 flex sm:flex-col flex-row sm:gap-5 items-center justify-start md:pr-10 sm:pr-5 pr-[411px] rounded-[16px] shadow-bs4">
                          <div className="bg-pink-300 h-[100px] rounded-bl-[16px] rounded-tl-[16px] shadow-bs4 w-[3%]"></div>
                          <Img
                            className="h-8 md:h-auto sm:ml-[0] ml-[34px] object-cover w-8"
                            src="images/img_addcirclesvgrepocom.png"
                            alt="addcirclesvgrep_Two"
                          />
                          <Text
                            className="sm:ml-[0] ml-[31px] text-base text-gray-900"
                            size="txtMontserratRomanSemiBold16Gray900"
                          >
                            Are there any side effects associated with using
                            Serenoa?
                          </Text>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:">
                        <div className="bg-white-A700 flex sm:flex-col flex-row sm:gap-5 items-center justify-start md:pr-10 sm:pr-5 pr-[583px] rounded-[16px] shadow-bs4">
                          <div className="bg-pink-300 h-[100px] rounded-bl-[16px] rounded-tl-[16px] shadow-bs4 w-[4%]"></div>
                          <Img
                            className="h-8 md:h-auto sm:ml-[0] ml-[34px] object-cover w-8"
                            src="images/img_addcirclesvgrepocom.png"
                            alt="addcirclesvgrep_Three"
                          />
                          <Text
                            className="ml-8 sm:ml-[0] text-base text-gray-900"
                            size="txtMontserratRomanSemiBold16Gray900"
                          >
                            How long does it take to see results?
                          </Text>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col items-center justify-end p-[34px] sm:px-5 w-full">
                <div className="flex flex-col items-center justify-start mt-10 w-[97%] md:w-full">
                  <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1200px] w-full">
                    <div className="flex md:flex-1 flex-col gap-7 items-start justify-start w-[34%] md:w-full">
                      <div className="flex flex-col items-center justify-start py-2.5 w-[48%] md:w-full">
                        <Img
                          className="h-[29px] md:h-auto object-cover w-full"
                          src="images/img_logoblack1.png"
                          alt="logoblackOne_One"
                        />
                      </div>
                      <div className="flex flex-col gap-[18px] items-start justify-start w-full">
                        <Text
                          className="text-base text-gray-900"
                          size="txtMontserratRomanRegular16"
                        >
                          Keep up to date with us via our mailing list
                        </Text>
                        <div className="bg-white-A700 flex flex-row gap-2.5 items-center justify-between pl-4 pr-2.5 py-2.5 rounded-[16px] shadow-bs4 w-[400px] sm:w-full">
                          <Text
                            className="text-base text-gray-600 w-auto"
                            size="txtMontserratRomanRegular16Gray600"
                          >
                            Enter your email
                          </Text>
                          <Button
                            className="cursor-pointer font-semibold h-10 leading-[normal] min-w-[146px] rounded-lg text-base text-center"
                            size="xs"
                            variant="gradient"
                            color="pink_100_gray_600_01"
                          >
                            Subscribe
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-8 items-start justify-start w-auto">
                      <Text
                        className="text-base text-gray-900 w-auto"
                        size="txtMontserratRomanSemiBold16Gray900"
                      >
                        Our Links
                      </Text>
                      <ul className="flex flex-col items-start justify-start w-full common-column-list">
                        <li>
                          <a
                            href="javascript:"
                            className="text-base text-gray-600"
                          >
                            <Text size="txtMontserratRomanRegular16Gray600">
                              Home
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="mt-6 text-base text-gray-600"
                          >
                            <Text size="txtMontserratRomanRegular16Gray600">
                              Shop
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="mt-[21px] text-base text-gray-600"
                          >
                            <Text size="txtMontserratRomanRegular16Gray600">
                              Results
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="mt-[23px] text-base text-gray-600"
                          >
                            <Text size="txtMontserratRomanRegular16Gray600">
                              Become a Stockist
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="mt-6 text-base text-gray-600"
                          >
                            <Text size="txtMontserratRomanRegular16Gray600">
                              FAQ
                            </Text>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col gap-8 items-start justify-start w-auto">
                      <Text
                        className="text-base text-gray-900 w-auto"
                        size="txtMontserratRomanSemiBold16Gray900"
                      >
                        Company
                      </Text>
                      <ul className="flex flex-col items-start justify-start w-full common-column-list">
                        <li>
                          <a
                            href="javascript:"
                            className="text-base text-gray-600"
                          >
                            <Text size="txtMontserratRomanRegular16Gray600">
                              Our Team
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="mt-[22px] text-base text-gray-600"
                          >
                            <Text size="txtMontserratRomanRegular16Gray600">
                              Partner with Us
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="mt-6 text-base text-gray-600"
                          >
                            <Text size="txtMontserratRomanRegular16Gray600">
                              Blogs
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="mt-[21px] text-base text-gray-600"
                          >
                            <Text size="txtMontserratRomanRegular16Gray600">
                              Articles
                            </Text>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col gap-8 items-start justify-start w-auto">
                      <a
                        href="javascript:"
                        className="text-base text-gray-900 w-auto"
                      >
                        <Text size="txtMontserratRomanSemiBold16Gray900">
                          Contact Us
                        </Text>
                      </a>
                      <ul className="flex flex-col gap-[23px] items-start justify-start w-full common-column-list">
                        <li>
                          <a
                            href="javascript:"
                            className="text-base text-gray-600"
                          >
                            <Text size="txtMontserratRomanRegular16Gray600">
                              Schedule: Mon to Fri (9AM - 5PM)
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="text-base text-gray-600"
                          >
                            <Text size="txtMontserratRomanRegular16Gray600">
                              Email: hello@serenoa.com
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="text-base text-gray-600"
                          >
                            <Text size="txtMontserratRomanRegular16Gray600">
                              Address: abc, United Kingdom
                            </Text>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <Line className="bg-gray-300 h-px mt-[74px] w-full" />
                  <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mt-[35px] w-[91%] md:w-full">
                    <Text
                      className="text-base text-gray-900"
                      size="txtMontserratRomanRegular16"
                    >
                      ©2023 SERENOA Health. All rights reserved.
                    </Text>
                    <div className="flex flex-row gap-8 items-start justify-start w-auto">
                      <a
                        href="javascript:"
                        className="text-base text-gray-900 w-auto"
                      >
                        <Text size="txtMontserratRomanRegular16">
                          Privacy Policy
                        </Text>
                      </a>
                      <a
                        href="javascript:"
                        className="text-base text-gray-900 w-auto"
                      >
                        <Text size="txtMontserratRomanRegular16">
                          Terms of Service
                        </Text>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default SERENOALandingPagePage;
