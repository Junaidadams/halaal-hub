import { useState } from "react";
import { contactInformation } from "../../constants.js";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted general contact:", formData);
    // Add form submission logic here (EmailJS, API, etc.)
  };

  return (
    <div className="min-h-screen -mt-[56px] bg-eggshell flex">
      <div className="mx-auto my-20 min-h-screen w-[95%]">
        <h1 className="text-4xl font-black text-prussianBlue text-center py-6">
          Contact Us
        </h1>

        {/* Contact Info Cards */}
        <div className="flex flex-wrap justify-center gap-8 my-10 font-poppins">
          {contactInformation.map(({ key, name, address, icon: Icon }) => (
            <div
              key={key}
              className="flex items-center gap-4 bg-white shadow-md p-4 rounded-xl text-paynesGrey"
            >
              <Icon className="text-2xl text-prussianBlue" />
              <div className="tracking-wider">
                <p className="font-semibold">{name}</p>
                <p className="text-sm">{address}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="flex mx-auto md:my-10 lg:my-14 xl:my-20 sm:w-2/3 xl:w-1/2">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-xl shadow-lg w-full space-y-6"
          >
            <div>
              <label className="block text-paynesGrey font-medium tracking-wider mb-1">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label className="block text-paynesGrey font-medium tracking-wider mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label className="block text-paynesGrey font-medium tracking-wider mb-1">
                Message
              </label>
              <textarea
                name="message"
                rows="4"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <button
              type="submit"
              className="bg-prussianBlue text-white py-2 px-6 rounded-md hover:bg-paynesGrey transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
