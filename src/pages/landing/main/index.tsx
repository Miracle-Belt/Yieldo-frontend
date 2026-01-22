import { useState } from "react";

import ellipse from "../../../assets/images/landing/ellipse.png";
import rectangle from "../../../assets/images/landing/rectangle.png";
import editIcon from "../../../assets/images/icons/rulerpen.png";
import twitterIcon from "../../../assets/images/icons/twitter.png";
import telegramIcon from "../../../assets/images/icons/telegram.png";
import avatar from "../../../assets/images/landing/avatar.png";
import closeIcon from "../../../assets/images/icons/close.png";
import modalBackGround from "../../../assets/images/landing/modal-bg.png";
import Modal from "../../../components/modal/Modal";

import "./style.css";

const Main = () => {
  const [openModals, setOpenModals] = useState<boolean[]>([false, false]);

  const openModal = (index: number) => {
    const newOpenModals = [...openModals];
    newOpenModals[index] = true;
    setOpenModals(newOpenModals);
  };

  const closeModal = (index: number) => {
    const newOpenModals = [...openModals];
    newOpenModals[index] = false;
    setOpenModals(newOpenModals);
  };

  const modalContents = [
    {
      icons: `${twitterIcon}`,
    },
    { icons: `${telegramIcon}` },
  ];

  return (
    <div
      className="gradient w-full flex justify-center flex-wrap px-6 md:px-12 lg:px-16 xl:px-24 2xl:px-32 py-20 md:py-24 "
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full max-w-[1400px] flex flex-col lg:flex-row gap-8 lg:gap-8 relative">
        <div className="w-full relative lg:w-[260px] h-[400px]  flex-shrink-0 ">
          <div
            className="w-[80%] h-full rounded-xl  overflow-hidden"
            style={{
              backgroundImage: `url(${rectangle})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute top-3 right-0 w-[110px] h-[110px]">
              <img
                src={ellipse}
                alt="Profile"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-between ">
          <div className=" top-3 left-3 flex gap-2 z-10">
            <span className="px-2 py-1 rounded text-xs font-medium bg-[#4596f21a] border border-[#4596f2] text-[#4596f2] w-fit">
              PRO
            </span>
            <span className="px-2 py-1 rounded text-xs font-medium bg-[#f2de451a] border border-[#f2de45] text-[#f2de45] w-fit">
              Lorem ipsum tag
            </span>
          </div>
          <div className="flex flex-col gap-6 mt-2">
            <div className="flex flex-col">
              <h1 className="leading-tight">
                <span className="text-white text-4xl md:text-5xl lg:text-[64px] xl:text-7.2xl">
                  @CRYPTOSENSEI`
                </span>
                <span className="text-gray-400 text-2xl md:text-3xl lg:text-4xl xl:text-[34px] font-normal">
                  S TOP YEILD PICKS
                </span>
              </h1>
            </div>

            <div className="flex flex-col gap-1">
              <p className="text-white text-xl md:text-[34px] font-normal">
                Crypto Sensei Research
              </p>
              <p className="text-white md:text-[22px] mt-4">
                DeFi expert & yield strategist
              </p>
            </div>

            <div className="flex items-center gap-2 mt-2">
              <button
                onClick={() => openModal(0)}
                className="w-[40px] h-[40px] px-2 py-2 rounded border border-[rgba(69,199,242,0.2)] text-sm font-medium text-white cursor-pointer bg-black/80 [box-shadow:0px_0px_17px_0px_rgba(69,199,242,0.15)] transition-all duration-300 hover:border-[rgba(69,199,242,0.4)] hover:[box-shadow:0px_0px_25px_0px_rgba(69,199,242,0.25)] flex items-center gap-2"
              >
                <span
                  className="w-[20px] h-[20px]"
                  style={{
                    backgroundImage: `url(${twitterIcon})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></span>
              </button>
              <button className="w-[40px] h-[40px] px-2 py-2 rounded border border-[rgba(69,199,242,0.2)] text-sm font-medium text-white cursor-pointer bg-black/80 [box-shadow:0px_0px_17px_0px_rgba(69,199,242,0.15)] transition-all duration-300 hover:border-[rgba(69,199,242,0.4)] hover:[box-shadow:0px_0px_25px_0px_rgba(69,199,242,0.25)] flex items-center justify-center gap-2">
                <span
                  onClick={() => openModal(1)}
                  className="w-[20px] h-[20px]"
                  style={{
                    backgroundImage: `url(${telegramIcon})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></span>
              </button>
            </div>
          </div>

          <div className="absolute top-0 right-0">
            <button className="px-4 py-2 rounded border border-[rgba(69,199,242,0.2)] text-sm font-medium text-white cursor-pointer bg-black/80 [box-shadow:0px_0px_17px_0px_rgba(69,199,242,0.15)] transition-all duration-300 hover:border-[rgba(69,199,242,0.4)] hover:[box-shadow:0px_0px_25px_0px_rgba(69,199,242,0.25)] flex items-center gap-2">
              <span
                className="w-[24px] h-[24px]"
                style={{
                  backgroundImage: `url(${editIcon})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></span>
              <span className="text-[16px] font-medium">Edit</span>
            </button>
          </div>

          <div className="mt-auto pt-8">
            <p className="text-gray-400 text-xs md:text-[12px]">
              Curated with Yieldo's intelligence | Powered by Yieldo
            </p>
          </div>
        </div>
      </div>
      {openModals.map((isOpen, index) => {
        return (
          <div key={index}>
            <Modal isOpen={isOpen} onClose={() => closeModal(index)}>
              <div className="modal xl:w-[700px] lg:w-[550px] md:w-[400px] sm:w-[300px] relative ">
                <span
                  className="w-[24px] h-[24px] block absolute top-[5px] right-[5px]"
                  style={{
                    backgroundImage: `url(${closeIcon})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  onClick={() => closeModal(index)}
                />
                <div className="relative">
                  <span
                    className="w-[612px] xl:w-[612px] lg:w-[460px] md:w-[310px] sm:w-[210px] h-[181px] block"
                    style={{
                      backgroundImage: `url(${modalBackGround})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                  <span
                    className="w-[80px] h-[80px] block rounded-full absolute top-[135px] left-[10px]"
                    style={{
                      backgroundImage: `url(${avatar})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                </div>
                <div className="flex justify-between pt-[40px]">
                  <div>
                    <p className="font-medium text-[34px]">
                      Lorem ipsum sit dolor
                    </p>
                    <p className="font-medium text-[24px] text-[#FFFFFF66]">
                      @cryptosensei
                    </p>
                  </div>
                  <span
                    className="w-[55.5px] h-[50px]"
                    style={{
                      backgroundImage: `url(${modalContents[index].icons})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                </div>
                <p className="font-medium text-[22px] pt-[20px]">
                  Fusce volutpat lectus et nisl consectetur finibus. In vitae
                  scelerisque augue, in varius eros. Nunc sapien diam, euismod
                  et pretium id, volutpat et tortor. In vulputate lorem quis dui
                  vestibulum, vitae imperdiet diam bibendum.
                </p>
                <button
                  onClick={() => closeModal(index)}
                  className="size-sm h-[43px] rounded-[6px] mt-[30px] py-[8px] px-[12px] gap-[8px] hover:bg-[#3bb0d9] transition-colors myBtn flex items-center justify-center
                        cursor-pointer bg-black [box-shadow:0px_0px_17px_0px_rgba(69,199,242,0.15)] transition-all duration-300 
                        hover:border-[rgba(69,199,242,0.4)] hover:[box-shadow:0px_0px_25px_0px_rgba(69,199,242,0.25)] w-full"
                >
                  <span className="text-black text-[16px] font-medium">
                    Read More
                  </span>
                </button>
              </div>
            </Modal>
          </div>
        );
      })}
    </div>
  );
};

export default Main;
