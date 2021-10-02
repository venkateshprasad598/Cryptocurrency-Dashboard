import { BsToggleOn } from "react-icons/bs";
import { BiToggleLeft } from "react-icons/bi";
const security = [
  {
    id: 1,
    name: "Identity",
    subName: "Disable",
    icon: <BsToggleOn />,
    iconColor: "green",
  },
  {
    id: 2,
    name: "Phone",
    subName: "Enable",
    icon: <BiToggleLeft />,
    color: "black",
  },
  {
    id: 3,
    name: "Identity",
    subName: "Disable",
    icon: <BiToggleLeft />,
    color: "grey",
  },
  {
    id: 4,
    name: "Phone",
    subName: "Enable",
    icon: <BsToggleOn />,
    iconColor: "green",
  },
];
export default security;
