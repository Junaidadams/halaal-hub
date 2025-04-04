import { contactInformation } from "../../constants";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    email: "",
    message: "",
    certificate: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "certificate") {
      setFormData({ ...formData, certificate: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", formData);
    // Here, you'd usually send the form data to your backend or email service
  };

  return (
    <div className="min-h-screen -mt-[56px] bg-eggshell flex">
      <div className="mx-auto my-20 min-h-screen w-[95%] xl:w-2/3">
        <h1 className="text-4xl font-black text-prussianBlue text-center py-6">
          Contact Us
        </h1>

        {/* Contact Info Section */}
        <div className="flex flex-wrap justify-center gap-8 my-10">
          {contactInformation.map(({ key, name, address, icon: Icon }) => (
            <div
              key={key}
              className="flex items-center gap-4 bg-white shadow-md p-4 rounded-xl text-paynesGrey"
            >
              <Icon className="text-2xl text-prussianBlue" />
              <div>
                <p className="font-semibold">{name}</p>
                <p className="text-sm">{address}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-xl shadow-lg space-y-6"
        >
          <div>
            <label className="block text-paynesGrey font-medium mb-1">
              Establishment Name
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
            <label className="block text-paynesGrey font-medium mb-1">
              Location
            </label>
            <input
              type="text"
              name="location"
              required
              value={formData.location}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label className="block text-paynesGrey font-medium mb-1">
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
            <label className="block text-paynesGrey font-medium mb-1">
              Upload Halaal Certificate
            </label>
            <input
              type="file"
              name="certificate"
              accept="image/*,application/pdf"
              required
              onChange={handleChange}
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-paynesGrey font-medium mb-1">
              Message (Optional)
            </label>
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <button
            type="submit"
            className="bg-prussianBlue text-white py-2 px-6 rounded-md hover:bg-paynesGrey transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
