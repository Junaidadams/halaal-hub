import {
  BsFacebook,
  BsLinkedin,
  BsInstagram,
  BsTwitterX,
} from "react-icons/bs";
import {
  FaUserPlus,
  FaSignInAlt,
  FaInfoCircle,
  FaEnvelope,
  FaUtensils,
} from "react-icons/fa";

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

export const getStartedOptions = [
  {
    key: 1,
    name: "Sign Up",
    link: "/sign-up",
    description:
      "Create an account to list your Halaal business on the directory.",
    icon: FaUserPlus,
  },
  {
    key: 2,
    name: "Sign In",
    link: "/sign-in",
    description: "Log into your account to manage your listings and reviews.",
    icon: FaSignInAlt,
  },
  {
    key: 3,
    name: "Learn More",
    link: "/about",
    description:
      "Discover how Halaal Hub helps you find the best Halaal food spots.",
    icon: FaInfoCircle,
  },
  {
    key: 4,
    name: "Contact Us",
    link: "/contact",
    description: "Have questions? Get in touch with our team for assistance.",
    icon: FaEnvelope,
  },
  {
    key: 5,
    name: "Explore Listings",
    link: "/listings",
    description: "Browse Halaal restaurants, cafés, and food spots near you.",
    icon: FaUtensils,
  },
];
