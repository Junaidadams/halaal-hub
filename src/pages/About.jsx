import AboutText from "../components/AboutText";

const About = () => {
  return (
    <div className="min-h-screen -mt-[56px] bg-eggshell flex">
      <div className="mx-auto my-20 min-h-screen w-[95%]">
        <h1 className="text-4xl font-black text-prussianBlue w-fit mx-auto py-6">
          About Us
        </h1>{" "}
        <div className="flex m-auto sm:w-2/3 xl:w-1/2">
          <AboutText
            text="Food brings people of all cultures together. This is especially true in the Cape Malay community, where sharing a meal is more than just eating—it’s about heritage, connection, and tradition. From the aroma of freshly baked koesisters on a Sunday morning to the warmth of a hearty akhni shared with family, Halaal food is at the heart of Cape Town’s vibrant culture."
            imgUrl="food.jpg"
            reversed={false}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
