import { navigationLinks } from "../../constants";
const Navbar = () => {
  return (
    <div className="flex">
      <ul className="space-x-8 capitalize flex flex-row ml-auto">
        {navigationLinks.map((link) => (
          <li key={link.key}>
            <a href={link.link}>{link.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
