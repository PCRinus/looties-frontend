import ApeIcon from "../assets/CardIcons/ApeIcon.svg";
import BoyIcon from "../assets/CardIcons/BoyIcon.svg";
import GreenCube from "../assets/CardIcons/GreenCube.svg";
import Zombie from "../assets/CardIcons/ZombieIcon.svg";

export interface INftProps {
  cardTitle: string;
  icon: string;
  coins: number | string;
  rarity: "red" | "purple" | "blue" | "green";
}

export const nftData: INftProps[] = [
  {
    cardTitle: "Card Title 1",
    icon: Zombie,
    coins: 123,
    rarity: "red",
  },
  {
    cardTitle: "Card Title 2",
    icon: BoyIcon,
    coins: 333,
    rarity: "purple",
  },
  {
    cardTitle: "Card Title 3",
    icon: GreenCube,
    coins: 456,
    rarity: "blue",
  },
  // adding 10 more objects...
  {
    cardTitle: "Card Title 4",
    icon: ApeIcon,
    coins: 789,
    rarity: "green",
  },
  {
    cardTitle: "Card Title 5",
    icon: Zombie,
    coins: 159,
    rarity: "red",
  },
  {
    cardTitle: "Card Title 6",
    icon: BoyIcon,
    coins: 753,
    rarity: "purple",
  },
  {
    cardTitle: "Card Title 7",
    icon: GreenCube,
    coins: 951,
    rarity: "blue",
  },
  {
    cardTitle: "Card Title 8",
    icon: ApeIcon,
    coins: 357,
    rarity: "green",
  },
  {
    cardTitle: "Card Title 9",
    icon: Zombie,
    coins: 456,
    rarity: "red",
  },
  {
    cardTitle: "Card Title 10",
    icon: BoyIcon,
    coins: 258,
    rarity: "purple",
  },
  {
    cardTitle: "Card Title 11",
    icon: GreenCube,
    coins: 852,
    rarity: "blue",
  },
  {
    cardTitle: "Card Title 12",
    icon: ApeIcon,
    coins: 951,
    rarity: "green",
  },
  {
    cardTitle: "Card Title 13",
    icon: Zombie,
    coins: 753,
    rarity: "red",
  },
];
