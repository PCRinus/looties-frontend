export interface ICardData {
  cardInfo: "Open" | "Coins";
  cardPercentage: string;
}

export const cardData: ICardData[] = [
  {
    cardInfo: "Coins",
    cardPercentage: "80,42%",
  },
  {
    cardInfo: "Open",
    cardPercentage: "80,42%",
  },
  {
    cardInfo: "Coins",
    cardPercentage: "80,42%",
  },
];
