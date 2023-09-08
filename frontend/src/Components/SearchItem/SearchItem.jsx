import { Link } from "react-router-dom";
import "./searchitem.scss";

const SearchItem = ({ item }) => {
  return (
    <>
      <div className="searchItem">
        <img src={item.photos[0]} alt="" className="siImg" />
        <div className="siDesc">
          <h1 className="siTitle">{item.name}</h1>
          <span className="siDistance">
            {item.distance}m - cách trung tâm thành phố
          </span>
          <span className="siTaxiOp">Miễn phí wifi và di chuyển</span>
          <span className="siSubtitle">{item.title}</span>
          <span className="siFeatures">{item.desc}</span>
          <span className="siCancelOpSubtitle">
            Khách sạn với giá tốt nhất trong khu vực!
          </span>
        </div>
        <div className="siDetails">
          {item.rating && (
            <div className="siRating">
              <span>Excellent</span>
              <button>{item.rating}</button>
            </div>
          )}
          <div className="siDetailTexts">
            <span className="siPrice">{item.cheapestPrice}$</span>
            <span className="siTaxOp">Đã bao gồm vận chuyển</span>
            <Link to={`/hotels/${item._id}`}>
              <button className="siCheckButton">Xem thêm</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchItem;
