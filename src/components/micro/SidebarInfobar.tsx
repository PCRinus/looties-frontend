import { FC } from "react";

export const SidebarInfobar: FC = () => {
  return (
    <div className="flex w-3/4 flex-col items-end justify-start gap-3 font-sans font-medium text-grey_font_color">
      <a href="#">Affiliates</a>
      <a href="#">Fairness</a>
      <a href="#">FAQ</a>
      <a href="#">Game responsibly</a>
    </div>
  );
};
