import { AiFillHome, AiFillWallet } from "react-icons/ai";
import { BiStats, BiNews } from "react-icons/bi";
import { GrTransaction } from "react-icons/gr";
import { FaStackExchange } from "react-icons/fa";

const slide = [
  {
    id: 1,
    name: "Dashboard",
    icon: <AiFillHome />,
  },
  {
    id: 2,
    name: "Wallet",
    icon: <AiFillWallet />,
  },
  {
    id: 3,
    name: "Statistics",
    icon: <BiStats />,
  },
  {
    id: 4,
    name: "Transactions",
    icon: <GrTransaction />,
  },
  {
    id: 5,
    name: "Exchange",
    icon: <FaStackExchange />,
  },
  {
    id: 6,
    name: "News",
    icon: <BiNews />,
  },
];
export default slide;
