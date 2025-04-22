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
  FaHouseUser,
  FaRegUser,
} from "react-icons/fa";
import { MdBakeryDining, MdRestaurant } from "react-icons/md";
import { IoMdCafe } from "react-icons/io";
import { RiTakeawayFill } from "react-icons/ri";

import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";

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
    name: "hub",
    link: "/hub",
  },
  {
    key: 3,
    name: "about",
    link: "/about",
  },
  {
    key: 5,
    name: "FAQ",
    link: "/faq",
  },
  {
    key: 6,
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
    link: "/hub",
    description: "Browse Halaal restaurants, cafés, and food spots near you.",
    icon: FaUtensils,
  },
];

export const contactInformation = [
  {
    key: 1,
    name: "E-mail",
    address: "hello@nooks.co.za",
    icon: AiOutlineMail,
  },
  { key: 2, name: "Call", address: "0826756350", icon: AiOutlinePhone },
];

export const faqData = [
  {
    question: "What is Halaal Hub?",
    answer:
      "Halaal Hub is a directory website dedicated to showcasing Halaal-certified eateries and food vendors in Cape Town. We help locals and visitors find delicious Halaal meals easily.",
  },
  {
    question: "Is every establishment verified?",
    answer:
      "Yes. All listed establishments are required to submit their Halaal certification before being approved and published on our platform.",
  },
  {
    question: "How do I get my business listed?",
    answer:
      "You can fill out our establishment submission form with your business details and upload your Halaal certificate. Once verified, your listing will go live.",
  },
  {
    question: "Is it free to use?",
    answer:
      "Yes! Browsing listings and using Halaal Hub is completely free. Businesses can also list for free, subject to verification.",
  },
  {
    question: "Can I suggest a business?",
    answer:
      "Absolutely. If you know of a Halaal place that isn’t listed, use the contact form to suggest it and we’ll reach out to verify and add them.",
  },
];

export const categories = [
  { label: "Cafe", value: "cafe", icon: IoMdCafe },
  { label: "Restaurant", value: "restaurant", icon: MdRestaurant },
  { label: "Bakery", value: "bakery", icon: MdBakeryDining },
  { label: "Takeaway", value: "takeaway", icon: RiTakeawayFill },
];
export const accountTypes = [
  { label: "User", value: "user", icon: FaRegUser },
  { label: "Establishment", value: "establishment", icon: FaHouseUser },
];
