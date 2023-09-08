import React, { useContext, useState } from "react";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";
import { MdOutlineTour } from "react-icons/md";
import { SlSocialFacebook, SlSocialInstagram } from "react-icons/sl";
import { TbApps } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/searchContext";
import { AuthContext } from "../../context/authContext";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";
const SearchBar = ({ type }) => {
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };
  const { dispatch } = useContext(SearchContext);
  const handleSearch = () => {
    dispatch({ type: "NEW_SEARCH", payload: { destination, dates, options } });
    navigate("/hotels", { state: { destination, dates, options } });
  };
  return (
    <>
      <div className="cardDiv grid" data-aos="fade-up">
        <div className="destinationInput">
          <label htmlFor="city">Tìm kiếm điểm đến của bạn:</label>
          <div className="input flex">
            <input
              type="text"
              placeholder="Tìm kiếm tỉnh hoặc thành phố bạn muốn đến"
              onChange={(e) => setDestination(e.target.value)}
            />
            <GrLocation className="icon" />
          </div>
        </div>
        <div className="dateInput">
          <label htmlFor="date">Tìm kiếm ngày/tháng</label>
          <div className="input flex">
            <div className="inputDate">
              <span
                onClick={() => setOpenDate(!openDate)}
                className="headerSearchText"
              >{`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(
                dates[0].endDate,
                "MM/dd/yyyy"
              )}`}</span>
              {openDate && (
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDates([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={dates}
                  className="date"
                  minDate={new Date()}
                />
              )}
            </div>
          </div>
        </div>
        <div className="priceInput">
          <div className="label_total flex">
            <label htmlFor="price">Max People:</label>
            <h3 className="total">10</h3>
          </div>
          <div className="input flex">
            <input type="number" placeholder="Number of people, ..." />
          </div>
        </div>
        <div className="searchOptions flex">
          <button className="btn" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
      <div className="homeFooterIcons flex" data-aos="fade-up">
        <div className="rightIcons">
          <SlSocialFacebook className="icon" />
          <SlSocialInstagram className="icon" />
          <MdOutlineTour className="icon" />
        </div>
        <div className="leftIcons">
          <AiOutlineUnorderedList className="icon" />
          <TbApps className="icon" />
        </div>
      </div>
    </>
  );
};

export default SearchBar;
