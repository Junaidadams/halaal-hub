import { useParams } from "react-router-dom";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { SiGooglemaps } from "react-icons/si";
import Stars from "../components/Stars";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { MdOutlineCategory } from "react-icons/md";
import { FaStar } from "react-icons/fa6";
import ShareButton from "../components/ShareButton";
import Wrapper from "../components/util/Wrapper";
import BackButton from "../components/util/BackButton";
import { getListingStatus } from "../../lib/utilFunctions/utils";
import { fetchListingById } from "../../lib/queries/listings";

const fetchListings = async () => {
  const res = await axios.get("/data/listings.json");
  return res.data;
};

const capitalizeWord = (str) =>
  str
    ? str.toLowerCase().charAt(0).toUpperCase() + str.toLowerCase().slice(1)
    : "";

const DetailedListingView = () => {
  const { id } = useParams();

  const {
    data: listing,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["listing", id],
    queryFn: () => fetchListingById(id),
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
  });

  if (isLoading) return <div className="p-6">Loading listing...</div>;
  if (error) return <div className="p-6">Error loading listing.</div>;
  if (!listing) return <div className="p-6">Listing not found</div>;

  const { status, label } = getListingStatus(listing.openingHours);
  console.log(listing.openingHours);

  return (
    <Wrapper>
      <div className="mx-auto my-20 min-h-screen w-[95%] sm:w-2/3 xl:w-1/2 flex flex-col font-poppins sm:p-5 dark:text-slate-50">
        <BackButton />
        <h1 className="text-2xl font-bold capitalize mb-2">
          {listing.name} - ({listing.category})
        </h1>
        <div className="relative">
          <img
            src={listing.imageUrl}
            alt={listing.name}
            className="w-full mt-4 dark:p-1 dark:bg-slate-200 rounded shadow"
          />{" "}
          <div className="absolute bottom-2 right-2 bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded capitalize">
            <ShareButton url={window.location.href} title={listing.name} />
          </div>
        </div>
        <h1 className="text-2xl dark:text-slate-50 font-bold  mt-8">
          <span className="capitalize">{listing.category}</span> at{" "}
          {listing.address}
        </h1>
        <div className="font-semibold flex flex-col p-1 mt-2">
          <div className="flex">
            <span className="mr-2 my-auto text-[#333] dark:text-slate-200">
              Reviews
            </span>
            <span className="my-auto flex text-xs space-x-1">
              <Stars starsNumber={listing.stars} className="my-auto " />{" "}
              <p>({listing.stars})</p>
            </span>
          </div>
          <p className="font-normal underline text-sm">Leave a review</p>
        </div>
        <div className="flex flex-col px-1 py-4">
          <p className=" text-base text-richBlack dark:text-slate-200 ">
            {listing.description}
          </p>
        </div>
        <div className="flex justify-evenly my-4">
          <div className="w-[30%] text-center text-sm lg:text-base border-r">
            <AiOutlineSafetyCertificate
              size={30}
              className="mx-auto mb-2 lg:w-11 lg:h-11"
            />
            <h1 className="font-bold">Certification</h1>
            <p className="">{listing.certifiedBy}</p>
          </div>
          <div className="w-[30%] text-center text-sm lg:text-base border-r">
            <MdOutlineCategory
              size={30}
              className="mx-auto mb-2 lg:w-11 lg:h-11"
            />
            <h1 className="font-bold">Category</h1>
            <p className="capitalize">{listing.category}</p>
          </div>
          <div className="w-[30%] text-center text-sm lg:text-base ">
            {" "}
            <FaStar size={30} className="mx-auto mb-2 lg:w-11 lg:h-11" />
            <h1 className="font-bold">Rating</h1>
            <p className="capitalize">{listing.stars}</p>
          </div>
        </div>
        <div className=" p-4">
          <p className="mb-2 text-base font-pop text-richBlack dark:text-slate-200">
            {listing.detailedDescription}
          </p>
        </div>
        <div className=" p-4">
          <h3 className="font-poppins font-semibold text-lg py-2 tracking-widest">
            Operating Hours
          </h3>
          <ul>
            {listing.openingHours.map((day) => (
              <li key={day.id}>
                <span className=""> {capitalizeWord(day.day)}</span> -{" "}
                {day.opensAt != null ? (
                  <span>
                    {day.opensAt}-{day.closesAt}
                  </span>
                ) : (
                  "Closed"
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className=" p-4">
          <h3 className="font-poppins font-semibold text-lg py-2 tracking-widest">
            Contact Information
          </h3>
          {listing.phone ? (
            <p className="mb-2 text-sm sm:text-base text-richBlack dark:text-slate-200">
              Phone - {listing.phone}
            </p>
          ) : (
            ""
          )}
          {listing.email ? (
            <p className="mb-2 text-sm sm:text-base text-richBlack dark:text-slate-200">
              Email - {listing.email}
            </p>
          ) : (
            ""
          )}
          {listing.website ? (
            <a href={listing.website} className="mb-2 text-sm sm:text-base">
              Website - {listing.website}
            </a>
          ) : (
            ""
          )}
          <div>
            {" "}
            <div className="justify-between flex">
              <a
                href={`https://www.google.com/maps?q=${encodeURIComponent(
                  listing.address
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-xs mt-4 inline-block bg-prussianBlue p-2 "
              >
                <button className="flex flex-row">
                  <SiGooglemaps className="my-auto mr-1" />
                  <span className="m-auto">Google maps</span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default DetailedListingView;
