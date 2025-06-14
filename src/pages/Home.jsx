const Home = () => {
  return (
    <div className="min-h-screen -mt-[56px] bg-eggshell dark:bg-richBlack flex">
      <div className="m-auto w-[95%] flex flex-col space-y-4 font-poppins">
        <h1 className="m-auto text-center text-richBlack dark:text-eggshell tracking-widest text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black">
          Welcome to
          <br /> Halaal Hub
        </h1>
        <p className="tracking-wider sm:tracking-widest md:tracking-[0.3em] sm:text-lg lg:text-xl text-center font-light mx-auto w-fit dark:text-white">
          The Halaal food directory.
        </p>
        <a
          href="/get-started"
          className="bg-richBlack dark:bg-eggshell dark:text-black text-white hover:bg-prussianBlue px-4 py-2 rounded-sm m-auto w-fit "
        >
          <button className="">Get Started!</button>
        </a>
      </div>
    </div>
  );
};

export default Home;
