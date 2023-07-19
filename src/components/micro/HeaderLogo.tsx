import React from 'react';
import LootiesLogo from '../../assets/Looties_wordmark 1.svg';

const HeaderLogo: React.FC = () => {
  return (
    <div className="flex h-full items-center">
      <img
        className="mx-auto xs:h-[26px] xs:w-[120px] 2xl:h-[52px] 2xl:w-[200px]"
        src={LootiesLogo}
        alt="Looties logo"
      />
    </div>
  );
};

export default HeaderLogo;
