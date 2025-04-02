const Home = () => {
  return (
    <div className="min-h-screen -mt-[56px] bg-eggshell flex">
      <div className="m-auto flex flex-col space-y-4">
        <h1 className="m-auto text-center text-richBlack tracking-widest text-6xl font-black">
          Welcome to
          <br /> Halaal Hub
        </h1>
        <p className="tracking-[0.3em] text-xl font-light mx-auto w-fit">
          The Halaal food directory.
        </p>
        <a
          href="/get-started"
          className="bg-prussianBlue text-white px-4 py-2 rounded-md m-auto w-fit"
        >
          <button className="">Get Started!</button>
        </a>
      </div>
    </div>
  );
};

export default Home;
