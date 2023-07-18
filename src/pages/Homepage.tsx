import WelcomeBox from '../components/macro/WelcomeBox';
import { Chat } from '../components/macro/Chat';
import LiveDropSidebar from '../components/micro/LiveDropSidebar';
import Scrollbars from 'react-custom-scrollbars-2';
import Games from '../components/macro/Games';
import PaymentMethod from '../components/micro/PaymentMethod';
import HomepageFooter from '../components/macro/HomepageFooter';
import LootboxGame from '../components/micro/LootboxGame';

const Homepage = () => {
  return (
    <div className=" flex w-screen flex-row items-center justify-center xs:h-[calc(100vh-80px-64px-32px)] 2xl:h-[calc(100vh-120px)]">
      <LiveDropSidebar />
      <Scrollbars autoHide autoHideTimeout={1000} autoHideDuration={200} style={{ paddingRight: 0, paddingBottom: 0 }}>
        <div className="flex w-full flex-shrink-0 flex-col xs:p-4 xs:pt-8 2xl:mt-[70px] 2xl:p-14">
          <WelcomeBox />
          <div className="w-full xs:mt-8 2xl:mt-14">
            <LootboxGame />
          </div>
          <div className="xs:mt-8">{/* <PaymentMethod /> */}</div>
        </div>
        <div className="xs:mt-8 2xl:mt-[52px]">{/* <HomepageFooter /> */}</div>
      </Scrollbars>

      <Chat />
    </div>
  );
};

export default Homepage;
