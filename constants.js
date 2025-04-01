import {
  BsFacebook,
  BsLinkedin,
  BsInstagram,
  BsTwitterX,
} from "react-icons/bs";

export const websiteInformation = [
  {
    name: "website",
    copywright: "Blah blah blah, copyright blah blah.",
    year: 2024,
    developer: "Junaid Adams",
    socials: [
      { key: 1, name: "Linked In", link: "/", logo: BsLinkedin },
      { key: 2, name: "Facebook", link: "/", logo: BsFacebook },
      { key: 3, name: "Instagram", link: "/", logo: BsInstagram },
      { key: 4, name: "Twitter", link: "/", logo: BsTwitterX },
    ],
  },
];

export const navigationLinks = [
  {
    key: 1,
    name: "home",
    link: "/",
  },
  {
    key: 2,
    name: "about",
    link: "/about",
  },
  {
    key: 3,
    name: "services",
    link: "/services",
  },
  {
    key: 4,
    name: "FAQ",
    link: "/faq",
  },
  {
    key: 5,
    name: "contact",
    link: "/contact",
  },
];
