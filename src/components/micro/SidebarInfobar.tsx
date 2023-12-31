import { FC } from "react";
import { Link } from "react-router-dom";

export const SidebarInfobar: FC = () => {
  return (
    <div className="flex w-3/4 flex-col items-end justify-start  gap-1 font-sans font-medium text-grey_font_color">
      <Link to="/profile/affiliates">Affiliates</Link>
      <Link to="/fairness">Fairness</Link>
      <Link to="/">FAQ</Link>
      <Link to="/game-responsibly">Game responsibly</Link>
    </div>
  );
};
