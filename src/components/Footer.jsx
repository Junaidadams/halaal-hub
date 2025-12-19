import { navigationLinks, websiteInformation } from "../../constants";
import Logo from "./Logo";

const { socials } = websiteInformation[0];

const fullNavLinks = navigationLinks.main;
const footerLinks = navigationLinks.footer;

const Footer = () => {
  return (
    <div
      className="bg-mainLight dark:bg-mainDark text-richBlack
     dark:text-slate-200 capitalize flex flex-col"
    >
      <div className="flex flex-col lg:flex-row my-16 mx-auto  space-y-6 lg:space-x-12 lg:space-y-0">
        <Logo className="mx" margin="mx-auto" />
        <div className="flex flex-col sm:flex-row items-center sm:items-start text-center space-y-1 sm:space-y-0 sm:space-x-12">
          <ul className="">
            {fullNavLinks.map((link) => (
              <li key={link.key}>
                <a href={link.link}>{link.name}</a>
              </li>
            ))}
          </ul>
          <ul className="">
            {footerLinks.map((link) => (
              <li key={link.key}>
                <a href={link.link}>{link.name}</a>
              </li>
            ))}
          </ul>
          {/* <ul className="">
            {socials.map(({ key, name, link, logo: Logo }) => (
              <li key={key}>
                <a href={link} className="flex space-x-2 ">
                  <Logo />
                  <p>{name}</p>
                </a>
              </li>
            ))}
          </ul> */}
        </div>
      </div>
      <p className="mx-auto text-slate-300 text-sm font-light pb-4">
        Copyright 2025
      </p>
    </div>
  );
};

export default Footer;
