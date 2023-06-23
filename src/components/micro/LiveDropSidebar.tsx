import React, { useEffect, useState } from "react";
import LiveDropHeader from "./LiveDropHeader";
import Scrollbars from "react-custom-scrollbars-2";
import { io } from "socket.io-client";
import "../../styles/micro/LiveDropSidebar.scss";
import { LiveDrop } from "./LiveDrop";
import { useSelector } from "react-redux";

const LiveDropSidebar: React.FC = () => {
  const auth = useSelector((state: any) => state.auth);
  const [itemsDropped, setItemsDropped] = useState<any>([]);
  const [itemsOrder, setItemsOrder] = useState<string>("top");

  const handleItemsOrder = (orderBy: string) => {
    setItemsOrder(orderBy);
  };
  const sortByPriceFn = (a: any, b: any) => {
    if (a.price > b.price) {
      return -1;
    } else if (a.price < b.price) {
      return 1;
    }
    return 0;
  };
  const sortByDateFn = (a: any, b: any) => {
    const dateA = new Date(a.createdAt);
    const dateB = new Date(b.createdAt);
    if (dateA > dateB) {
      return -1;
    } else if (dateA < dateB) {
      return 1;
    }
    return 0;
  };

  useEffect(() => {
    const socket = io(`${process.env.REACT_APP_API_URL}/live-drops`, {
      extraHeaders: {
        Authorization: `Bearer ${auth.jwt}`,
      },
    });
    socket.on("connected", (itemsDropped) => {
      if (itemsDropped && itemsDropped.length > 0) {
        setItemsDropped(itemsDropped);
      }
    });
    socket.on("itemDropped", (item) => {
      setItemsDropped((prevItemsDropped: any) => [...prevItemsDropped, item]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div
      id="live-drop-sidebar"
      className="h-full w-80 flex-shrink-0 overflow-y-hidden bg-custom_black_2 xs:hidden 2xl:block"
    >
      <LiveDropHeader itemsOrder={itemsOrder} handleItemsOrder={handleItemsOrder} />
      <Scrollbars
        // This will activate auto hide
        autoHide
        // Hide delay in ms
        autoHideTimeout={1000}
        // Duration for hide animation in ms.
        autoHideDuration={200}
        style={{ height: "calc(100% - 60px)" }}
      >
        <div className="fade flex flex-col items-center justify-center gap-4 overflow-y-scroll py-4">
          {itemsDropped.sort(itemsOrder === "top" ? sortByPriceFn : sortByDateFn).map((item: any, index: number) => {
            let color: string;
            const dropChance = parseFloat(item.dropChance);
            if (dropChance < 1) {
              color = "#F03033";
            } else if (dropChance < 5) {
              color = "#614FD0";
            } else if (dropChance < 20) {
              color = "#614FD0";
            } else if (dropChance < 40) {
              color = "#00FFF0";
            } else if (dropChance < 60) {
              color = "#8EC831";
            } else if (dropChance < 80) {
              color = "#E3CB4C";
            } else {
              color = "#888888";
            }
            return (
              <LiveDrop key={index} name={item.name} price={item.price} color={color} lootboxId={item.lootboxId} />
            );
          })}
        </div>
      </Scrollbars>
    </div>
  );
};

export default LiveDropSidebar;
