import { FC } from "react";

export interface IButtonProps {
  text: string;
}

export const Button: FC<IButtonProps> = ({ text }) => {
  return (
    <div className="bg-treatBtnBg rounded-md py-1">
      <p className="title_btn_medium text-center">{text}</p>
    </div>
  );
};
