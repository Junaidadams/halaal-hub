import {
  BsFacebook,
  BsLinkedin,
  BsInstagram,
  BsTwitterX,
  BsBuildingAdd,
} from "react-icons/bs";
import {
  FaUserPlus,
  FaSignInAlt,
  FaInfoCircle,
  FaEnvelope,
  FaUtensils,
  FaHouseUser,
  FaRegUser,
  FaHeadphones,
} from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import {
  MdBakeryDining,
  MdErrorOutline,
  MdOutlineFeaturedPlayList,
  MdOutlineMessage,
  MdRestaurant,
} from "react-icons/md";
import { IoMdCafe } from "react-icons/io";
import { RiTakeawayFill } from "react-icons/ri";
import { PiCookingPotFill } from "react-icons/pi";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";

export const websiteInformation = [
  {
    name: "Eat Halal",
    copyright: "Blah blah blah, copyright blah blah.",
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

export const navigationLinks = {
  main: [
    { key: 1, name: "Home", link: "/" },
    { key: 2, name: "Hub", link: "/hub" },
    { key: 3, name: "About", link: "/about" },
  ],
  signedIn: [
    { key: 4, name: "Profile", link: "/my-profile" },
    { key: 5, name: "Logout", link: "/logout" },
    { key: 6, name: "Create Listing", link: "/create-listing" },
  ],
  notSignedIn: [
    { key: 7, name: "Get Started", link: "/get-started" },
    { key: 8, name: "Login", link: "/login" },
    { key: 9, name: "Sign Up", link: "/register" },
  ],
  footer: [
    { key: 10, name: "Privacy Policy", link: "/privacy-policy" },
    { key: 11, name: "Terms of Service", link: "/terms-of-service" },
    { key: 13, name: "FAQ", link: "/faq" },
    { key: 14, name: "Contact", link: "/contact" },
  ],
};

export const contactPages = [
  {
    key: 1,
    name: "Customer Support",
    link: "/customer-support",
    description:
      "Get help with any issues or questions you have about our services.",
    icon: FaHeadphones,
  },
  {
    key: 2,
    name: "Report a Tech Issue",
    link: "/report-issue",
    description: "Report any issues or bugs you encounter on the site.",
    icon: MdErrorOutline,
  },
  {
    key: 3,
    name: "General Contact",
    link: "/general-contact",
    description: "Reach out to us for any general inquiries or support.",
    icon: MdOutlineMessage,
  },
  {
    key: 4,
    name: "Suggest a Business",
    link: "/suggest-business",
    description:
      "Get in touch with us and suggest a Halal business for listing, our team will do the rest.",
    icon: BsBuildingAdd,
  },
  {
    key: 5,
    name: "Suggest a Feature",
    link: "/suggest-feature",
    description: "Have an idea for a new feature? Let us know!",
    icon: MdOutlineFeaturedPlayList,
  },
];

export const getStartedOptions = {
  notSignedIn: [
    {
      key: 4,
      name: "Sign Up",
      link: "/register",
      description:
        "Create an account to list your Halaal business on the directory.",
      icon: FaUserPlus,
    },
    {
      key: 5,
      name: "Login",
      link: "/login",
      description: "Log into your account to manage your listings and reviews.",
      icon: FaSignInAlt,
    },
  ],

  main: [
    {
      key: 1,
      name: "Learn More",
      link: "/about",
      description:
        "Discover how Halaal Hub helps you find the best Halaal food spots.",
      icon: FaInfoCircle,
    },
    {
      key: 2,
      name: "Contact Us",
      link: "/contact",
      description: "Have questions? Get in touch with our team for assistance.",
      icon: FaEnvelope,
    },
    {
      key: 3,
      name: "Explore Listings",
      link: "/hub",
      description: "Browse Halaal restaurants, cafés, and food spots near you.",
      icon: FaUtensils,
    },
  ],
  signedInLinks: [
    {
      key: 6,
      name: "Profile",
      link: "/my-profile",
      description: "Change preferences and view account settings.",
      icon: CgProfile,
    },
    {
      key: 7,
      name: "Logout",
      link: "/logout",
      description: "Log out of your account for now.",
      icon: CiLogout,
    },
  ],
};

export const contactInformation = [
  {
    key: 1,
    name: "E-mail",
    address: "hello@nooks.co.za",
    icon: AiOutlineMail,
  },
  { key: 2, name: "Call", address: "0826756350", icon: AiOutlinePhone },
];

export const termsOfService = [
  {
    id: 1,
    heading: "Accuracy of Information",
    text: "All listings must provide accurate and truthful information about the business.",
    lastUpdated: "2025-01-01",
  },
  {
    id: 2,
    heading: "Halaal Certification Requirement",
    text: "Businesses must submit clear, legible images of their Halaal certification, issued by a recognized and valid certifying body.",
    lastUpdated: "2025-01-01",
  },
  {
    id: 3,
    heading: "Valid Certification",
    text: "Uploaded documents, including certification, must be current and not expired.",
    lastUpdated: "2025-01-01",
  },
  {
    id: 4,
    heading: "Responsibility to Update",
    text: "Businesses are responsible for updating their listing if certification status or business details change.",
    lastUpdated: "2025-01-01",
  },
  {
    id: 5,
    heading: "No Misrepresentation",
    text: "Any falsified or misleading information may result in the listing being removed without notice.",
    lastUpdated: "2025-01-01",
  },
  {
    id: 6,
    heading: "Content Review",
    text: "Businesses agree that all submitted content (text, images, documents) may be reviewed by our moderation team before being published.",
    lastUpdated: "2025-01-01",
  },
  {
    id: 7,
    heading: "Right to Reject",
    text: "We reserve the right to reject or remove any listing that does not comply with our standards or Terms of Service.",
    lastUpdated: "2025-01-01",
  },
  {
    id: 8,
    heading: "Approval Not Guaranteed",
    text: "Submitting a listing does not guarantee approval — all listings are subject to review and verification.",
    lastUpdated: "2025-01-01",
  },
  {
    id: 9,
    heading: "Contact Information",
    text: "Businesses must ensure that contact details provided (email, phone, address) are correct and accessible.",
    lastUpdated: "2025-01-01",
  },
  {
    id: 10,
    heading: "Liability Disclaimer",
    text: "The platform is not liable for any disputes between customers and listed businesses.",
    lastUpdated: "2025-01-01",
  },
  {
    id: 11,
    heading: "Violations",
    text: "Repeated violations of these Terms may result in permanent suspension from the platform.",
    lastUpdated: "2025-01-01",
  },
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
  {
    question:
      "How does Halaal Hub operate around establishments on boycott lists.",
    answer:
      "We currently do not have the man-power to review which establishments listed on Halaal Hub form part of the most current rendition of each boycott list. We do urge users to do their own research on this as to which companies to support/boycott and will revisit this matter at a later time.",
  },
];

export const categories = [
  { label: "Cafe", value: "cafe", icon: IoMdCafe },
  { label: "Restaurant", value: "restaurant", icon: MdRestaurant },
  { label: "Bakery", value: "bakery", icon: MdBakeryDining },
  { label: "Takeaway", value: "takeaway", icon: RiTakeawayFill },
  { label: "Caterer", value: "caterer", icon: PiCookingPotFill },
];

export const certification = [
  {
    key: 1,
    shortName: "MJC",
    name: "MJC Halaal Trust (Muslim Judicial Council)",
    url: "https://www.mjc.org.za",
  },
  {
    key: 2,
    shortName: "SANHA",
    name: "South African National Halaal Authority",
    url: "https://www.sanha.org.za",
  },
  {
    key: 3,
    shortName: "NIHT",
    name: "National Independent Halaal Trust",
    url: "https://www.niht.co.za",
  },
  {
    key: 4,
    shortName: "ICSA",
    name: "Islamic Council of South Africa",
    url: "http://www.icsa.co.za",
  },
  {
    key: 5,
    shortName: "HFSA",
    name: "Halaal Foundation of South Africa",
    url: "https://hfsa.co.za",
  },
  {
    key: 6,
    shortName: "HAOSA",
    name: "Halaal Authority of South Africa",
    url: "https://www.haosa.org.za",
  },
  {
    key: 7,
    shortName: "SAIH",
    name: "South African Islamic Halaal Authority",
    url: "https://saih.co.za",
  },
  {
    key: 8,
    shortName: "MAC",
    name: "Muslim Assembly Cape",
    url: "https://www.muslimassembly.co.za",
  },
  {
    key: 9,
    shortName: "IHA",
    name: "Islamic Halaal Authority",
    url: "https://www.ihahalal.co.za",
  },
  {
    key: 10,
    shortName: "JUSA",
    name: "Jamiatul Ulama South Africa",
    url: "https://www.jus.org.za",
  },
];

export const accountTypes = [
  { label: "User", value: "user", icon: FaRegUser },
  { label: "Business", value: "business", icon: FaHouseUser },
];
