const Home = () => {
  return (
    <div className="min-h-screen bg-eggshell flex">
      <div className="m-auto space-y-6">
        <h1 className="m-auto text-richBlack text-6xl font-black">
          Welcome to Halaal Hub
        </h1>
        <p className="tracking-[0.3em] text-xl font-light mx-auto w-fit">
          The Halaal food directory.
        </p>
        <a
          href="/get-started"
          className="bg-prussianBlue text-white px-4 py-2 rounded-md mx-auto w-fit"
        >
          <button>Get Started!</button>
        </a>
      </div>
    </div>
  );
};

export default Home;
