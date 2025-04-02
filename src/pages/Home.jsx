const Home = () => {
  return (
    <div className="min-h-screen -mt-[56px] bg-eggshell flex">
      <div className="m-auto w-[95%] flex flex-col space-y-4 font-poppins">
        <h1 className="m-auto text-center text-richBlack tracking-widest text-3xl sm:text-4xl font-black">
          Welcome to
          <br /> Halaal Hub
        </h1>
        <p className="tracking-wider sm:tracking-widest md:tracking-[0.3em] sm:text-lg text-center font-light mx-auto w-fit">
          The Halaal food directory.
        </p>
        <a
          href="/get-started"
          className="bg-prussianBlue text-white px-4 py-2 rounded-full m-auto w-fit "
        >
          <button className="">Get Started!</button>
        </a>
      </div>
    </div>
  );
};

export default Home;
