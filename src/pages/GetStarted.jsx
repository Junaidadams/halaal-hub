import { getStartedOptions } from "../../constants";
import { Link } from "react-router-dom";

const GetStarted = () => {
  return (
    <div className="min-h-screen -mt-[56px] bg-eggshell flex">
      <div className="mx-auto my-20  w-[95%]  font-poppins">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-4 xl:gap-6 mx-auto md:my-10 lg:my-14 xl:my-20 sm:w-2/3 xl:w-1/2 border-b border-black border-dashed pb-20 p-4">
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
    </div>
  );
};

export default GetStarted;
