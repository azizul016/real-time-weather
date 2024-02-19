import { useContext, useState } from "react";
import searchIcon from "./../../assets/search.svg";
import { getLocationByName } from "../../data/location-data";
import { LocationContext } from "../../context";
import { useDebounce } from "../../hooks";

export default function Search() {
  //use without debounce search
  // const [searchTerm, setSearchTerm] = useState();
  const { setSelectedLocation } = useContext(LocationContext);

  //use without debounce search
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // console.log(searchTerm, "searchTerm");
  //   const feachedLocation = getLocationByName(searchTerm);
  //   // console.log(feachedLocation, "feachedLoaction");
  //   setSelectedLocation({ ...feachedLocation });
  // };

  //for de bounce search
  const doSearch = useDebounce((term) => {
    const feachedLoaction = getLocationByName(term);
    setSelectedLocation({ ...feachedLoaction });
  }, 500);

  //for de bounce search
  const handleChange = (e) => {
    const value = e.target.value;
    doSearch(value);
  };
  return (
    <>
      <form
        action="#"
        // use without debounce search
        // onSubmit={handleSubmit}
      >
        <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
          <input
            className="bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
            type="search"
            placeholder="Search Location"
            required
            // value={searchTerm}
            onChange={handleChange}
            // use without debounce search
            // onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit">
            <img src={searchIcon} alt="Search" />
          </button>
        </div>
      </form>
    </>
  );
}
