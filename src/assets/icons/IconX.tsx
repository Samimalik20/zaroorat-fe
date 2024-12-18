import ICommonIconProps from "../../interfaces/ICommonIconProps";
import BaseIcon from "./BaseIcon";

const IconX = (props: ICommonIconProps) => {
  return (
    <BaseIcon {...props} withOutline >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </BaseIcon>
  );
};

export default IconX;
