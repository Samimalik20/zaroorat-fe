import ICommonIconProps from "../../interfaces/ICommonIconProps";
import BaseIcon from "./BaseIcon";

function IconUsersPlus(props: ICommonIconProps) {
  return (
    <BaseIcon {...props}>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
      <path d="M3 21v-2a4 4 0 0 1 4 -4h4c.96 0 1.84 .338 2.53 .901" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      <path d="M16 19h6" />
      <path d="M19 16v6" />
    </BaseIcon>
  );
}

export default IconUsersPlus;
