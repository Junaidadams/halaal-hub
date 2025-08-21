import Wrapper from "../components/util/Wrapper";

const Home = () => {
  return (
    <Wrapper>
      <div className="relative m-auto w-full font-poppins flex items-center justify-center overflow-hidden h-screen">
        {/* Video Background */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0 brightness-90 dark:brightness-75"
          src="/herovid.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Content */}
        <div className="z-10 flex flex-col bg-richBlack bg-opacity-80 dark:bg-ghost dark:bg-opacity-80 p-5 sm:p-6 md:p-7 shadow-sm items-center justify-center">
          <h1 className="m-auto text-center text-ghost dark:text-richBlack  tracking-widest text-3xl font-bold sm:font-black">
            Welcome to
            <br /> Halaal Hub
          </h1>
          <p className="tracking-wider sm:tracking-widest text-sm  text-center font-light mx-auto w-fit dark:text-richBlack text-ghost">
            The Halaal food directory.
          </p>
          <a
            href="/get-started"
            className="dark:bg-richBlack bg-ghost dark:hover:bg-opacity-80  dark:text-white text-richBlack hover:bg-prussianBlue px-4 py-2 rounded-sm mt-4 w-fit"
          >
            <button className="">Get Started!</button>
          </a>
        </div>
      </div>
    </Wrapper>
  );
};

export default Home;
