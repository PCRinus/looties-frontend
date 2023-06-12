// mockData.ts
import ApeIcon from "../assets/CardIcons/ApeIcon.svg";
import BoyIcon from "../assets/CardIcons/BoyIcon.svg";
import GreenCube from "../assets/CardIcons/GreenCube.svg";
import Zombie from "../assets/CardIcons/ZombieIcon.svg";

export interface ICardData {
  priceLeft: string;
  price: string;
  priceRight: string;
  cardName: string;
  icon: string;
  cardTitle: string;
  cardInfo: string;
}

export const cardData: ICardData[] = [
  {
    priceLeft: "500k",
    price: "$600k",
    priceRight: "700k",
    cardName: "Card 1",
    icon: ApeIcon,
    cardTitle: "NFT",
    cardInfo: "0.01%",
  },
  {
    priceLeft: "600k",
    price: "$700k",
    priceRight: "800k",
    cardName: "Card 2",
    icon: BoyIcon,
    cardTitle: "NFT",
    cardInfo: "0.01%",
  },
  {
    priceLeft: "700k",
    price: "$800k",
    priceRight: "900k",
    cardName: "Card 3",
    icon: Zombie,
    cardTitle: "NFT",
    cardInfo: "0.01%",
  },
  {
    priceLeft: "800k",
    price: "$900k",
    priceRight: "1M",
    cardName: "Card 4",
    icon: GreenCube,
    cardTitle: "NFT",
    cardInfo: "0.01%",
  },
  {
    priceLeft: "500k",
    price: "$600k",
    priceRight: "700k",
    cardName: "Card 1",
    icon: ApeIcon,
    cardTitle: "NFT",
    cardInfo: "0.01%",
  },
  {
    priceLeft: "600k",
    price: "$700k",
    priceRight: "800k",
    cardName: "Card 2",
    icon: BoyIcon,
    cardTitle: "NFT",
    cardInfo: "0.01%",
  },
  {
    priceLeft: "700k",
    price: "$800k",
    priceRight: "900k",
    cardName: "Card 3",
    icon: Zombie,
    cardTitle: "NFT",
    cardInfo: "0.01%",
  },
  {
    priceLeft: "800k",
    price: "$900k",
    priceRight: "1M",
    cardName: "Card 4",
    icon: GreenCube,
    cardTitle: "NFT",
    cardInfo: "0.01%",
  },
];
