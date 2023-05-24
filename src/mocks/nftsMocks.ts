import userIcon from "../assets/UserIcon.svg";

interface NFTCard {
  cardTitle: string;
  itemsCount: string | number;
  label: string;
  cost: string | number;
  icon: string;
}

export const NFC_CARDS_DATA: NFTCard[] = [
  {
    cardTitle: "Title 1",
    itemsCount: "1",
    label: "Official",
    cost: "1000",
    icon: userIcon,
  },
  {
    cardTitle: "Title 2",
    itemsCount: "2",
    label: "Creator",
    cost: "2000",
    icon: userIcon,
  },
  {
    cardTitle: "Title 3",
    itemsCount: "3",
    label: "Creator",
    cost: "3000",
    icon: userIcon,
  },
  {
    cardTitle: "Title 4",
    itemsCount: "4",
    label: "Creator",
    cost: "4000",
    icon: userIcon,
  },
  {
    cardTitle: "Title 5",
    itemsCount: "5",
    label: "Official",
    cost: "5000",
    icon: userIcon,
  },
  {
    cardTitle: "Title 6",
    itemsCount: "6",
    label: "Official",
    cost: "6000",
    icon: userIcon,
  },
  {
    cardTitle: "Title 7",
    itemsCount: "7",
    label: "Creator",
    cost: "7000",
    icon: userIcon,
  },
  {
    cardTitle: "Title 8",
    itemsCount: "8",
    label: "Official",
    cost: "8000",
    icon: userIcon,
  },
];
