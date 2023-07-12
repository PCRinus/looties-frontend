import React, { useEffect, useState } from "react";
import ProfileOptionsHeader from "../micro/ProfileOptionsHeader";
import PlusIcon from "../../assets/plusIcon.svg";
import Scrollbars from "react-custom-scrollbars-2";
import RedPlus from "../../assets/red_cross.svg";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import toast from "react-hot-toast";
import { LootBoxCard } from "../micro/LootBoxCard";
import { Link } from "react-router-dom";


const MyLootboxesPage: React.FC = () => {
  const [numColumns, setNumColumns] = useState(1);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

  const handleResizeMobile = () => {
    const windowWidth = window.innerWidth;
    let numCols = 1;

    const intervals = [
      { min: 400, max: 570, cols: 2 },
      { min: 570, max: 740, cols: 3 },
      { min: 740, max: 920, cols: 4 },
      { min: 920, max: 1100, cols: 5 },
      { min: 1100, max: 1280, cols: 6 },
      { min: 1280, max: 1450, cols: 7 },
      { min: 1450, max: 1536, cols: 8 },
    ];

    for (let i = 0; i < intervals.length; i++) {
      if (windowWidth > intervals[i].min && windowWidth <= intervals[i].max) {
        numCols = intervals[i].cols;
        break;
      }
    }

    setNumColumns(numCols);
  };


  const user = useSelector((state: any) => state.user);
  const auth = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();

  interface NFT {
    id: string;
    name: string;
    price: number;
    nftImage: string;
  }

  const [list, setList] = useState<NFT[]>([]);
  useEffect(() => {
    const fetchAvailableNFTs = async () => {
      if (user.id) {
        try {
          const response = await axios.get(
              `${process.env.REACT_APP_API_URL}/lootbox/${user.id}?page=1`,
              {
                headers: {
                  Authorization: `Bearer ${auth.jwt}`,
                },
              },
          );
          const availableNfts = response?.data;
          setList(availableNfts);
          console.log(list);
          // console.log(response.data);
        } catch (error) {
          console.log("Error while fetching your NFTs:", error);
          toast.error("Failed to fetch your NFTs");
        }
      }
    };

    fetchAvailableNFTs();
  }, [user.id]);


  const handleResizeDesktop = () => {
    const windowWidth = window.innerWidth;
    let numCols = 1;

    const intervals = [
      { min: 1536, max: 1675, cols: 2 },
      { min: 1675, max: 1900, cols: 3 },
      { min: 1900, max: 2125, cols: 4 },
      { min: 2125, max: 2345, cols: 5 },
      { min: 2345, max: 2575, cols: 6 },
      { min: 2575, max: 2800, cols: 7 },
      { min: 2800, max: 3000, cols: 8 },
      { min: 3000, max: 3250, cols: 9 },
      { min: 3250, max: 3420, cols: 10 },
      { min: 3420, max: 3650, cols: 11 },
      { min: 4800, max: 5101, cols: 11 },
    ];

    for (let i = 0; i < intervals.length; i++) {
      if (windowWidth > intervals[i].min && windowWidth <= intervals[i].max) {
        numCols = intervals[i].cols;
        break;
      }
    }

    setNumColumns(numCols);
  };

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      const currentIsMobile = windowWidth < 1536;

      if (currentIsMobile !== isMobile) {
        setIsMobile(currentIsMobile);
      }

      if (currentIsMobile) {
        handleResizeMobile();
      } else {
        handleResizeDesktop();
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [isMobile]);

  const items = new Array(30).fill(null);
  return (
    <div className="2xl:autoheight bottom-fade flex-auto rounded-xl bg-custom_black_2 xs:h-auto xs:min-h-full 2xl:h-[856px] 2xl:w-full">
      <ProfileOptionsHeader title={"My lootboxes"} />
      <div id="content" className="  h-full w-full xs:p-6  2xl:p-7">
        {items.length > 0 ? (
          <div className="h-full w-full">
            <Scrollbars
              // This will activate auto hide
              autoHide
              // Hide delay in ms
              autoHideTimeout={1000}
              // Duration for hide animation in ms.
              autoHideDuration={200}
              autoHeight
              autoHeightMin={0}
              autoHeightMax={800} // Specify maximum height here
              thumbMinSize={30}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: `repeat(${numColumns}, 1fr)`,
                }}
                className={`auto-rows-max place-content-start gap-4 xs:gap-4 2xl:gap-[14px]`}
              >
                {list.map((item, index) =>
                  index === 0 ? (
                      <div className="flex flex-row justify-center items-center gap-4">
                      <Link to="/create-lootbox">
                    <button
                      key={index}
                      className="rounded-xl border-[1px] border-custom_gray_1 xs:h-[236px] xs:w-[158px] 2xl:h-[297px] 2xl:w-[209px]"

                    >
                      <img src={RedPlus} alt="svg" className="inline" />
                      <h2 className="font-sans font-bold text-custom_red_1 xs:text-base 2xl:text-xl">
                        Create a new <br /> lootbox
                      </h2>
                    </button>
                      </Link>
                        <LootBoxCard
                            key={index}
                            cardTitle={item.name}
                            cost={item.price}
                            label={"Created"}
                            itemsCount={"3"}
                            icon={item.nftImage}
                        />
                    </div>

                  ) : (
                      <LootBoxCard
                          key={index}
                          cardTitle={item.name}
                          cost={item.price}
                          label={"Created"}
                          itemsCount={"3"}
                          icon={item.nftImage}
                      />
                  )
                )}
              </div>
            </Scrollbars>
          </div>
        ) : (
          <div className="flex w-full items-center justify-center  xs:px-6 xs:py-[58px]  2xl:min-h-[664px] 2xl:p-0">
            <div className="flex flex-col items-center justify-center gap-4 font-sans ">
              <h2 className="text-center font-bold text-custom_red_1 xs:text-xl  2xl:text-2xl">
                Create your first lootbox.
              </h2>
              <p className="text-center text-base font-semibold text-custom_gray_2 ">
                Press the button below and you can start making your first <br />
                lootbox.
              </p>
              <button className=" flex w-full flex-row items-center justify-center gap-1 rounded-xl bg-gradient-to-t from-[#F03033] to-[#E5383B] text-base font-semibold text-white xs:h-[44.5px] 2xl:h-12 2xl:w-[233px]">
                <img src={PlusIcon} alt="svg" className="inline" /> Create your lootbox
              </button>
            </div>
          </div>
        )}
      </div>

      <div className=" h-10 w-full bg-custom_black_2"></div>
    </div>
  );
};

export default MyLootboxesPage;
