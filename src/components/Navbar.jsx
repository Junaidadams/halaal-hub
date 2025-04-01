import { navigationLinks } from "../../constants";
const Navbar = () => {
  return (
    <div className="flex bg-eggshell">
      <ul className="space-x-8 capitalize flex flex-row ml-auto text-prussianBlue font-semibold text-lg">
        {navigationLinks.map((link) => (
          <li key={link.key} className="p-2">
            <a href={link.link}>{link.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
