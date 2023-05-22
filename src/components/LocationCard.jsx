import React from "react";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

// import styles from './LocationCard.module.scss'
const LocationCard = ({
  useLocations,
  setModal,
  modal,
  setDataLoc,
  setCurrentPage,
}) => {
  const [dataSource, setDataSource] = useState(useLocations.results);
  const [hasMore, setHasMore] = useState(true);
  const fetchMoreData = () => {
    setCurrentPage((prev) => prev + 1);
    if (dataSource.length < 120) {
      setDataSource([...dataSource, ...useLocations.results]);
    } else {
      setHasMore(false);
    }
  };

  return (
    <InfiniteScroll
      className="row"
      dataLength={dataSource.length}
      next={fetchMoreData}
      hasMore={hasMore}
      loader={<p>Loading...</p>}
      endMessage={
        <h2 className="jumbotron text-center lead text-warning bg-dark">
          You reached the bottom
        </h2>
      }
    >
      {dataSource.map((item, index) => {
        return (
          <div
            className="border border-success rounded col-xl-3 col-lg-4  col-sm-6 col-xs-8 col-12 "
            onClick={() => (setDataLoc(item), setModal(!modal))}
            key={index}
          >
            <div>
              <h1>{item.name}</h1>
            </div>
            <div>
              <img
                className={`img-fluid`}
                src="planet.png"
                id="imagLoc"
                alt={item.name}
                style={{
                  zIndex: -1,
                  filter: `hue-rotate(${Math.random() * index}90deg)`,
                  filter: `invert(${Math.random() * index}40%)`,
                }}
              ></img>
            </div>

            <div>
              <h2 className="border rounded-bottom border-danger">
                {item.type}
              </h2>
            </div>
          </div>
        );
      })}
    </InfiniteScroll>
  );
};

export default LocationCard;
