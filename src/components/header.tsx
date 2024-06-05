import { navigationData } from "../data/nav";
import Navigation from "./navigation";

const Header = () => {
  return (
    <header className="header">
      <Navigation links={navigationData} />
    </header>
  );
};
export default Header;
