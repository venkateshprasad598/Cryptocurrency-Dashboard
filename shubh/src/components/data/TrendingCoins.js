import { CgArrowTopLeft, CgArrowBottomRight } from "react-icons/cg";
const TrendingCoins = [
  {
    id: new Date().getTime(),
    name: "BTC/USD",
    price: "$18 928.15",
    backgroundColor: "rgb(243, 198, 247)",
    icon: <CgArrowTopLeft />,
  },
  {
    id: new Date().getTime(),
    name: "ETH/USD",
    price: "$591.8874",
    backgroundColor: "rgb(198, 244, 247)",
    icon: <CgArrowTopLeft />,
  },
  {
    id: new Date().getTime(),
    name: "XRP/USD",
    price: "$0.61688",
    backgroundColor: "rgb(230, 223, 247)",
    icon: <CgArrowTopLeft />,
  },
  {
    id: new Date().getTime(),
    name: "Litecoin/USD",
    price: "$87.9917",
    backgroundColor: "rgb(247, 234, 198)",
    icon: <CgArrowBottomRight />,
  },
];
export default TrendingCoins;
