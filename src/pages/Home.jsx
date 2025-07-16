import Wrapper from "../components/util/Wrapper";

const Home = () => {
  return (
    <Wrapper>
      {" "}
      <div className="m-auto w-[95%] font-poppins">
        <div className="w-fit m-auto flex flex-col bg-richBlack dark:bg-ghost rounded-t-full pt-20 xl:pt-28 xl:pb-16 pb-10 xl:px-10 px-6 shadow-sm">
          <div className="mb-6 mt-2">
            <h1 className="m-auto text-center text-ghost dark:text-richBlack  tracking-widest text-3xl font-black">
              Welcome to
              <br /> Halaal Hub
            </h1>
            <p className="tracking-wider sm:tracking-widest text-sm  text-center font-light mx-auto w-fit dark:text-richBlack text-ghost">
              The Halaal food directory.
            </p>
          </div>
          <a
            href="/get-started"
            className="dark:bg-richBlack bg-ghost dark:hover:bg-opacity-80  dark:text-white text-richBlack hover:bg-prussianBlue px-4 py-2 rounded-sm m-auto w-fit "
          >
            <button className="">Get Started!</button>
          </a>
        </div>
      </div>
    </Wrapper>
  );
};

export default Home;
