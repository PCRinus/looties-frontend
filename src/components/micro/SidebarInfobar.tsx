import { FC } from "react";
import { Link } from "react-router-dom";

export const SidebarInfobar: FC = () => {
  return (
    <div className="flex w-3/4 flex-col items-end justify-start gap-3 font-sans font-medium text-grey_font_color">
      <Link to="/">Affiliates</Link>
      <Link to="/">Fairness</Link>
      <Link to="/">FAQ</Link>
      <Link to="/game-responsibly">Game responsibly</Link>
    </div>
  );
};
