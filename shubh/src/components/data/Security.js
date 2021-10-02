import { BsToggleOn } from "react-icons/bs";
import { BiToggleLeft } from "react-icons/bi";
const security = [
  {
    id: new Date().getTime(),
    name: "Identity",
    subName: "Disable",
    icon: <BsToggleOn />,
    iconColor: "green",
  },
  {
    id: new Date().getTime(),
    name: "Phone",
    subName: "Enable",
    icon: <BiToggleLeft />,
    color: "black",
  },
  {
    id: new Date().getTime(),
    name: "Identity",
    subName: "Disable",
    icon: <BiToggleLeft />,
    color: "grey",
  },
  {
    id: new Date().getTime(),
    name: "Phone",
    subName: "Enable",
    icon: <BsToggleOn />,
    iconColor: "green",
  },
];
export default security;
