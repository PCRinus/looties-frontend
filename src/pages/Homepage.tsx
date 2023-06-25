import WelcomeBox from "../components/macro/WelcomeBox";
import { Chat } from "../components/macro/Chat";
import LiveDropSidebar from "../components/micro/LiveDropSidebar";
import Scrollbars from "react-custom-scrollbars-2";
import Games from "../components/macro/Games";
import PaymentMethod from "../components/micro/PaymentMethod";
import HomepageFooter from "../components/macro/HomepageFooter";

const Homepage = () => {
  return (
    <div className="flex w-screen flex-row items-center  justify-center xs:h-[calc(100vh-80px-64px-32px)] 2xl:h-[calc(100vh-120px)]">
      <LiveDropSidebar />
      <Scrollbars autoHide autoHideTimeout={1000} autoHideDuration={200}>
        <div className="flex flex-col xs:p-4 xs:pt-8 2xl:mt-[70px] 2xl:p-14">
          <WelcomeBox />
          <div className="xs:mt-8 2xl:mt-14">
            <Games />
          </div>
          <div className="xs:mt-8">
            <PaymentMethod />
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

export default Homepage;
