import { getStartedOptions } from "../../constants";
import { Link } from "react-router-dom";

const GetStarted = () => {
  return (
    <div className="min-h-screen -mt-[56px] bg-eggshell flex">
      <div className="mx-auto my-20 grid gap-6 w-[95%] sm:grid-cols-2 md:grid-cols-3 font-poppins">
        {getStartedOptions.map(
          ({ key, name, link, description, icon: Icon }) => (
            <Link
              key={key}
              to={link}
              className="flex flex-col items-center bg-white shadow-lg p-6 rounded-xl hover:bg-lakeBlue transition duration-300 group"
            >
              <div className="text-prussianBlue text-4xl mb-4 group-hover:text-white">
                <Icon /> {/* Render the icon correctly */}
              </div>
              <h2 className="text-richBlack font-semibold sm:font-bold md:font-black tracking-wider  text-lg group-hover:text-white">
                {name}
              </h2>
              <p className="text-paynesGrey text-sm text-center group-hover:text-white">
                {description}
              </p>
            </Link>
          )
        )}
      </div>
    </div>
  );
};

export default GetStarted;
