import { getStartedOptions } from "../../constants";
import { Link } from "react-router-dom";

const GetStarted = () => {
  return (
    <div className="min-h-screen bg-eggshell flex">
      <div className="m-auto grid gap-6 p-6 md:grid-cols-2 lg:grid-cols-3">
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
              <h2 className="text-richBlack font-semibold text-lg group-hover:text-white">
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
