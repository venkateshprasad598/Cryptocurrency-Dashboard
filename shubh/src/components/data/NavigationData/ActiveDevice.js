import { BiDotsVerticalRounded } from "react-icons/bi";
import { FcPhoneAndroid } from "react-icons/fc";
import { BsDot, BsLaptop } from "react-icons/bs";

const device = [
  {
    id: 1,
    name: "Iphone 6s Plus",
    subName: "Active",
    iconOne: <FcPhoneAndroid />,
    dot: <BsDot />,
    iconTwo: <BiDotsVerticalRounded />,
    color: "green",
  },

  {
    id: 2,
    name: "Macbook 2017",
    subName: "Active",
    iconOne: <BsLaptop />,
    dot: <BsDot />,
    iconTwo: <BiDotsVerticalRounded />,
    color: "green",
  },
];

export default device;
