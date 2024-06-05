import logo from '../assets/reshot-icon-fork-and-spoon-4NDE5BCQHA.svg';
import { LinkType } from "../types/global";
import { Link } from 'react-router-dom';

type Props = {
  links: LinkType[];
};
const Navigation = ({ links }: Props) => {
  return (
    <nav className="nav">
      <Link className='nav__logo' to={"/"}>
      <img  src={logo} alt="Logo Icon" />
      </Link>
      {links.map((link) => {
        return (
          <a key={link.href} className="nav__item" href={link.href}>
            {link.label}
          </a>
        );
      })}
    </nav>
  );
};
export default Navigation;
