import { navigationLinks, websiteInformation } from "../../constants";

// Destructure the first item from websiteInformation
const { socials } = websiteInformation[0];

const Footer = () => {
  return (
    <div className="bg-richBlack text-slate-200 capitalize flex flex-col">
      <div className="flex flex-row my-16 mx-auto space-x-10">
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
      <p className="mx-auto text-slate-300 text-sm font-light pb-4">
        Copyright 2025
      </p>
    </div>
  );
};

export default Footer;
