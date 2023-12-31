import React, { useEffect, useState } from 'react';
import TotalGameIcon from '../../assets/TotalGameIcon.svg';
import GamesWon from '../../assets/GamesWon.svg';
import GameLostIcon from '../../assets/GamesLostIcon.svg';
import Trophy from '../../assets/Trophy.svg';
import DolarFrame from '../../assets/DolarFrame.svg';
import ReferralsIcon from '../../assets/ReferralsIcon.svg';
import RedDropBoxIcon from '../../assets/DropboxIconRed.svg';
import ProfileOptionsHeader from '../micro/ProfileOptionsHeader';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import toast from 'react-hot-toast';
import { ReduxEvents } from '../../reducers/events';
import Settings from '../macro/Settings';
import SettingsSaveChanges from '../micro/SettingsSaveChanges';

interface IUserData {
  totalGameData?: number;
  gamesWonData?: number;
  gamesLostData?: number;
  winRatioData?: number;
  lootboxesOpenData?: number;
  referralsData?: number;
  totalWageredData?: number;
  netProfitData?: number;
}

interface IAppState {
  user: { id: string };
  auth: { jwt: string };
}

const ProfilePage: React.FC = () => {
  const profile = useSelector((state: any) => state.user.profile);
  const dispatch = useDispatch();

  const [userData, setUserData] = useState<IUserData>({});
  const user = useSelector((state: IAppState) => state.user);
  const auth = useSelector((state: IAppState) => state.auth);

  useEffect(() => {
    const fetchUserData = async () => {
      if (user.id) {
        try {
          const response = await axios.get(`${process.env.REACT_APP_API_URL}/profile/${user.id}`, {
            headers: {
              Authorization: `Bearer ${auth.jwt}`,
            },
          });
          const referralResponse = await axios.get(`${process.env.REACT_APP_API_URL}/affiliates/${user.id}/stats`);
          const { redeemedCount: referralsData } = referralResponse?.data;

          const {
            gamesPlayed: totalGameData,
            gamesWon: gamesWonData,
            gamesLost: gamesLostData,
            winRatio: winRatioData,
            lootboxesOpened: lootboxesOpenData,
            totalWagered: totalWageredData,
            netProfit: netProfitData,
          } = response?.data;

          setUserData({
            totalGameData,
            gamesWonData,
            gamesLostData,
            winRatioData,
            lootboxesOpenData,
            referralsData,
            totalWageredData,
            netProfitData,
          });
          dispatch({ type: ReduxEvents.SetProfileData, payload: response.data });
        } catch (error) {
          console.log('Error while fetching user data:', error);
          toast.error('Failed to fetch user data');
        }
      }
    };
    fetchUserData();
  }, [user.id, auth.jwt, dispatch]);

  return (
    <>
      <div className="2xl:autoheight bottom-fade flex-auto rounded-xl bg-custom_black_2 xs:h-auto xs:min-h-full 2xl:min-h-0 2xl:w-full">
        <ProfileOptionsHeader title={'My Profile'} />
        <div id="content" className="  h-full w-full xs:p-6  2xl:p-8">
          <Settings />
          {/* <div id='referral-box' className=''>

          </div> */}

          <div className="h-full w-full xs:mt-6 2xl:mt-8">
            <span className="font-sans font-bold text-custom_white_1 xs:text-base 2xl:text-xl">Statistics</span>
            <div className="grid grid-cols-2 grid-rows-4 gap-4 xs:mb-4 xs:mt-4 2xl:mb-8 2xl:mt-6">
              <div className="w-full items-center justify-start rounded-xl border-[1px] border-solid border-[#2C3034] xs:h-20 xs:py-6 xs:pl-4 2xl:h-28 2xl:p-8">
                <div className=" flex h-full w-full justify-start xs:gap-2 2xl:gap-5">
                  <img src={TotalGameIcon} alt="svg" className="xs:h-7 xs:w-7 2xl:h-12 2xl:w-12"></img>
                  <div className="flex flex-col">
                    <span className="font-sans font-semibold text-custom_gray_2 xs:text-xs 2xl:text-base">
                      Total Game
                    </span>
                    <span className="font-sans font-semibold text-custom_white_1 xs:text-xs 2xl:text-base">
                      {userData.totalGameData}
                    </span>
                  </div>
                </div>
              </div>

              <div className="w-full items-center justify-start rounded-xl border-[1px] border-solid border-[#2C3034] xs:h-20 xs:py-6 xs:pl-4 2xl:h-28 2xl:p-8">
                <div className=" flex h-full w-full justify-start xs:gap-2 2xl:gap-5">
                  <img src={GamesWon} alt="svg" className="xs:h-7 xs:w-7 2xl:h-12 2xl:w-12"></img>
                  <div className="flex flex-col">
                    <span className="font-sans font-semibold text-custom_gray_2 xs:text-xs 2xl:text-base">
                      Games Won
                    </span>
                    <span className="font-sans font-semibold text-custom_white_1 xs:text-xs 2xl:text-base">
                      {userData.gamesWonData}
                    </span>
                  </div>
                </div>
              </div>

              <div className="w-full items-center justify-start rounded-xl border-[1px] border-solid border-[#2C3034] xs:h-20 xs:py-6 xs:pl-4 2xl:h-28 2xl:p-8">
                <div className=" flex h-full w-full justify-start xs:gap-2 2xl:gap-5">
                  <img src={GameLostIcon} alt="svg" className="xs:h-7 xs:w-7 2xl:h-12 2xl:w-12"></img>
                  <div className="flex flex-col">
                    <span className="font-sans font-semibold text-custom_gray_2 xs:text-xs 2xl:text-base">
                      Games Lost
                    </span>
                    <span className="font-sans font-semibold text-custom_white_1 xs:text-xs 2xl:text-base">
                      {userData.gamesLostData}
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-full items-center justify-start rounded-xl border-[1px] border-solid border-[#2C3034] xs:h-20 xs:py-6 xs:pl-4 2xl:h-28 2xl:p-8">
                <div className=" flex h-full w-full justify-start xs:gap-2 2xl:gap-5">
                  <img src={Trophy} alt="svg" className="xs:h-7 xs:w-7 2xl:h-12 2xl:w-12"></img>
                  <div className="flex flex-col">
                    <span className="font-sans font-semibold text-custom_gray_2 xs:text-xs 2xl:text-base">
                      Win Ratio
                    </span>
                    <span className="font-sans font-semibold text-custom_white_1 xs:text-xs 2xl:text-base">
                      {userData.winRatioData?.toLocaleString('en-US', { minimumFractionDigits: 2 })} %
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-full items-center justify-start rounded-xl border-[1px] border-solid border-[#2C3034] xs:h-20 xs:py-6 xs:pl-4 2xl:h-28 2xl:p-8">
                <div className=" flex h-full w-full justify-start xs:gap-2 2xl:gap-5">
                  <img src={RedDropBoxIcon} alt="svg" className="xs:h-7 xs:w-7 2xl:h-12 2xl:w-12"></img>
                  <div className="flex flex-col">
                    <span className="font-sans font-semibold text-custom_gray_2 xs:text-xs 2xl:text-base">
                      Lootboxes Open
                    </span>
                    <span className="font-sans font-semibold text-custom_white_1 xs:text-xs 2xl:text-base">
                      {userData.lootboxesOpenData}
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-full items-center justify-start rounded-xl border-[1px] border-solid border-[#2C3034] xs:h-20 xs:py-6 xs:pl-4 2xl:h-28 2xl:p-8">
                <div className=" flex h-full w-full justify-start xs:gap-2 2xl:gap-5">
                  <img src={ReferralsIcon} alt="svg" className="xs:h-7 xs:w-7 2xl:h-12 2xl:w-12"></img>
                  <div className="flex flex-col">
                    <span className="font-sans font-semibold text-custom_gray_2 xs:text-xs 2xl:text-base">
                      Referrals
                    </span>
                    <span className="font-sans font-semibold text-custom_white_1 xs:text-xs 2xl:text-base">
                      {userData.referralsData}
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-full items-center justify-start rounded-xl border-[1px] border-solid border-[#2C3034] xs:h-20 xs:px-2 xs:py-6 2xl:h-28 2xl:p-8">
                <div className=" flex h-full w-full justify-start xs:gap-2 2xl:gap-5">
                  <img src={DolarFrame} alt="svg" className="xs:h-7 xs:w-7 2xl:h-12 2xl:w-12"></img>
                  <div className="flex flex-col">
                    <span className="font-sans font-semibold text-custom_gray_2 xs:text-xs 2xl:text-base">
                      Total Wagered
                    </span>
                    <span className="font-sans font-semibold text-custom_white_1 xs:text-xs 2xl:text-base">
                      {userData.totalWageredData?.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-full items-center justify-start rounded-xl border-[1px] border-solid border-[#2C3034] xs:h-20 xs:py-6 xs:pl-4 2xl:h-28 2xl:p-8">
                <div className=" flex h-full w-full justify-start xs:gap-2 2xl:gap-5">
                  <img src={DolarFrame} alt="svg" className="xs:h-7 xs:w-7 2xl:h-12 2xl:w-12"></img>
                  <div className="flex flex-col">
                    <span className="font-sans font-semibold text-custom_gray_2 xs:text-xs 2xl:text-base">Profit</span>
                    <span className="font-sans font-semibold text-custom_white_1 xs:text-xs 2xl:text-base">
                      + {userData.netProfitData?.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* <span className="font-sans font-bold text-custom_white_1 xs:mt-4 xs:text-base 2xl:mt-8 2xl:text-xl">
            Links
          </span>
          <div className="flex xs:mt-4 xs:gap-4 2xl:mt-6 2xl:gap-6">
            <a href={profile.twitterLink ?? "#"} target="_blank" rel="noopener noreferrer">
              <img src={Twiter} alt="Twitter"></img>
            </a>
            <a href={profile.discordLink ?? "#"} target="_blank" rel="noopener noreferrer">
              <img src={DiscordIcon} alt="Discord"></img>
            </a>
          </div> */}
          </div>
        </div>
      </div>
      <SettingsSaveChanges />
    </>
  );
};

export default ProfilePage;
