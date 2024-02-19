import { useContext } from "react";
import searchIcon from "./../../assets/search.svg";
import { getLocationByName } from "../../data/location-data";
import { LocationContext } from "../../context";
import useDebounce from "../../hooks/useDebounce";

export default function Search() {
  const { setSelectedLocation } = useContext(LocationContext);

  //use de bounce for search take some delay time for searching.
  const doSearch = useDebounce((term) => {
    const fetchedLocation = getLocationByName(term);
    setSelectedLocation({ ...fetchedLocation });
  }, 500);

  function handleChange(e) {
    const value = e.target.value;
    doSearch(value);
  }
  return (
    <>
      <form>
        <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
          <input
            className="bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
            type="search"
            placeholder="Search Location"
            required
            // value={searchTerm}
            onChange={handleChange}
          />
          <button type="submit">
            <img src={searchIcon} alt="Search" />
          </button>
        </div>
      </form>
    </>
  );
}
