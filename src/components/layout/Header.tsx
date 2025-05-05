import MonteluxeLogo from "../logo/MonteluxeLogo";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="flex items-center justify-around p-3">
      {/* logo */}
      <div className="">
        <MonteluxeLogo />
      </div>
      <div className="">
        <Navbar />
      </div>
      <div className=""></div>
    </div>
  );
};

export default Header;
