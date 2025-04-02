import { navigationLinks, websiteInformation } from "../../constants";

// Destructure the first item from websiteInformation
const { socials } = websiteInformation[0];

const Footer = () => {
  return (
    <div className="bg-richBlack text-slate-200 capitalize flex">
      <div className="flex flex-row my-10 mx-auto space-x-10">
        <ul className="">
          {navigationLinks.map((link) => (
            <li key={link.key}>
              <a href={link.link}>{link.name}</a>
            </li>
          ))}
        </ul>
        <ul className="">
          {socials.map(({ key, name, link, logo: Logo }) => (
            <li key={key}>
              <a href={link} className="flex space-x-2 ">
                <Logo />
                <p>{name}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
