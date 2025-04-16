import { useState, useRef, useEffect } from "react";
import {
  FacebookShareButton,
  WhatsappShareButton,
  TwitterShareButton,
  EmailShareButton,
  FacebookIcon,
  WhatsappIcon,
  TwitterIcon,
  EmailIcon,
} from "react-share";
import { RiShare2Line } from "react-icons/ri";
import clsx from "clsx";
import PropTypes from "prop-types";

const ShareButton = ({ url, title }) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative ml-auto" ref={menuRef}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className=" rounded-full p-1 shadow hover:text-blue-600 flex items-center gap-1"
        aria-label="Share"
      >
        <RiShare2Line size={20} />
      </button>

      <div
        className={clsx(
          "absolute right-0 mt-2 bg-white border rounded shadow-md p-2 flex gap-2 transition-all duration-200",
          open
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
        )}
      >
        <FacebookShareButton url={url} quote={title}>
          <FacebookIcon size={32} round />
        </FacebookShareButton>

        <WhatsappShareButton url={url} title={title}>
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>

        <TwitterShareButton url={url} title={title}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>

        <EmailShareButton url={url} subject={title}>
          <EmailIcon size={32} round />
        </EmailShareButton>
      </div>
    </div>
  );
};

ShareButton.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ShareButton;
