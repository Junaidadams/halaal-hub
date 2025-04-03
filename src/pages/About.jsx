import AboutText from "../components/AboutText";

const About = () => {
  return (
    <div className="min-h-screen -mt-[56px] bg-eggshell flex">
      <div className="mx-auto my-20 min-h-screen w-[95%]">
        {/* <h1 className="text-4xl font-black text-prussianBlue w-fit mx-auto py-6">
          About Us
        </h1> */}
        <div className="flex mx-auto my-20 sm:w-2/3 xl:w-1/2">
          <AboutText
            text="Food brings people of all cultures together. This is especially true in the Cape Malay community, where sharing a meal is more than just eating—it’s about heritage, connection, and tradition. From the aroma of freshly baked koesisters on a Sunday morning to the warmth of a hearty akhni shared with family, Halaal food is at the heart of Cape Town’s vibrant culture."
            imgUrl="food.jpg"
            reversed={false}
            heading="About us"
          />
        </div>
        <div className="flex mx-auto my-20 sm:w-2/3 xl:w-1/2">
          <AboutText
            text="At Halaal Hub, we celebrate this rich tradition by making it easier for locals and visitors alike to discover the best Halaal eateries in Cape Town. Whether you're craving a classic Gatsby, a comforting plate of biryani, or a modern take on traditional flavors, our directory connects you to restaurants, cafés, and food vendors that serve delicious, fully Halaal meals."
            imgUrl="family.jpg"
            reversed={true}
            heading="Our goal"
          />
        </div>
        <div className="flex mx-auto my-20 sm:w-2/3 xl:w-1/2">
          <AboutText
            text="We take authenticity seriously. Every establishment listed on Halaal Hub is required to submit valid Halaal certification before being approved. This ensures that all businesses on our platform adhere to strict Halaal standards, giving our users confidence in every meal they enjoy. Whether you're a local or a visitor, you can trust that the food you find here is 100% Halaal."
            imgUrl="certification.jpg"
            reversed={false}
            heading="Halaal Certification"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
