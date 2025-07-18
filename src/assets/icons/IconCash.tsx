import ICommonIconProps from "../../interfaces/ICommonIconProps";
import BaseIcon from "./BaseIcon";

function IconCash(props: ICommonIconProps) {
  return (
    <BaseIcon {...props} withOutline>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M7 15h-3a1 1 0 0 1 -1 -1v-8a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v3" />
      <path d="M7 9m0 1a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z" />
      <path d="M12 14a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
    </BaseIcon>
  );
}

export default IconCash;
