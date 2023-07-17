import { Chat } from '../components/macro/Chat';
import LiveDropSidebar from '../components/micro/LiveDropSidebar';
import React from 'react';
import SupportChat from '../assets/SupportChat.svg';
import Scrollbars from 'react-custom-scrollbars-2';
import HomepageFooter from '../components/macro/HomepageFooter';
import { Link } from 'react-router-dom';

export const FairnessPage = () => {
  return (
    <div className="flex w-screen flex-row items-center justify-center xs:h-[calc(100vh-80px-64px)] 2xl:h-[calc(100vh-120px)]">
      <LiveDropSidebar />
      <Scrollbars autoHide autoHideTimeout={1000} autoHideDuration={200}>
        <div className="flex flex-col">
          <div className="flex h-full max-h-full w-full flex-col gap-10 overflow-y-scroll bg-[#151719] px-6 pt-6 2xl:px-[52px] 2xl:pt-[52px]">
            <div className="flex h-full max-h-full w-full flex-col gap-10 bg-[#151719]">
              <div className="w-full rounded-xl bg-gradient-to-b from-red-700 to-[#151719] pl-1 pr-1 pt-1 text-white">
                <div className="autoheight w-full">
                  <div className="footer flex flex-row items-center justify-between gap-5 rounded-t-[12px] border-b-[1px] border-[#2C3034] bg-[#1A1D20] px-8 py-4">
                    <div className="mx-auto flex items-center gap-2 pl-[30px]">
                      <span className="text-2xl font-bold text-[#DFDFDF]">Fairness</span>
                    </div>
                  </div>
                  <div
                    className={`relative flex flex-col rounded-b-[12px] p-[24px] text-[14px] font-semibold leading-5 text-[#848B8D] sm:text-[16px] md:p-[32px]`}
                    style={{ background: 'linear-gradient(360deg, #272727 0%, rgba(21, 23, 25, 0.00) 100%), #191D20' }}
                  >
                    <div className="mb-6 text-xl font-bold text-white md:mb-8">Last update: 06/14/2023</div>
                    <div className="flex w-full flex-col gap-4">
                      <div>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining essentially unchanged. It was
                        popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including versions of
                        Lorem Ipsum.
                      </div>
                    </div>
                    <div className="my-[24px] text-xl font-bold text-white md:my-8">1. Case verifier</div>
                    <div className="flex w-full flex-col gap-4">
                      <div>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        but also the leap into electronic.
                      </div>
                      <div>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        but also the leap into electronic.
                      </div>
                    </div>
                    <div className="my-[24px] text-xl font-bold text-white md:my-8">2. Classic verifier</div>
                    <div className="flex w-full flex-col gap-4">
                      <div>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        but also the leap into electronic.
                      </div>
                      <div>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        but also the leap into electronic.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full rounded-xl pl-1 pr-1 pt-1 text-white">
                <div className="autoheight w-full">
                  <div className="footer flex flex-col items-center justify-between gap-5 rounded-[12px] bg-[#1A1D20] px-8 py-4 md:flex-row">
                    <div className="flex items-center gap-2">
                      <span className="text-center text-xl font-bold text-[#DFDFDF]">
                        Questions, concerns or suggestions ?
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Link
                        to="/support"
                        className="flex h-[44.57px] min-w-[204px] basis-[50%] items-center justify-center gap-2 rounded-lg bg-gradient-to-t from-red-700 to-red-500 px-[10px] font-sans font-semibold leading-4 text-white"
                      >
                        <img src={SupportChat} alt="Support Chat" />
                        <span>Contact support</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="xs:mt-8 2xl:mt-[52px]">
          <HomepageFooter />
        </div>
      </Scrollbars>
      <Chat />
    </div>
  );
};
