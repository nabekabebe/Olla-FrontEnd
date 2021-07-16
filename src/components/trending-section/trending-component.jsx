/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { onTrendingFetchStart } from "../../redux/house/houseAction.creators";
/**
 * Styles import
 */
import { HeaderTitle, Param } from "../styled-reusable/styled-reusable";
import CardItem from "../card/card-component";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper/core";
import "swiper/swiper-bundle.css";

SwiperCore.use(Navigation);

const TrendingComponent = () => {
  const isFetching = useSelector((state) => state.house.trendingFetching);
  const trendingHouses = useSelector((state) => state.house.trending);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(onTrendingFetchStart());
  }, []);

  return (
    <section>
      <div className='trending-header d-flex align-items-center justify-content-between'>
        <div className='trending-title'>
          <small className='text-muted'>Best Places</small>
          <HeaderTitle className='display-6' widthWrap={30}>
            Trending Places at Budget
          </HeaderTitle>
        </div>
      </div>
      <div>
        <Swiper {...Param} navigation>
          {trendingHouses.map((el) => (
            <SwiperSlide
              key={el._id}
              style={{
                paddingBottom: "2rem",
              }}>
              <CardItem item={el} isLoading={isFetching} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TrendingComponent;
