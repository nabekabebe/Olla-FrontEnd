import React from "react";
import { Link } from "react-router-dom";
import "./banner-styles.scss";
import livingRoom from "../../assets/living-room.jpg";

import {
  HeaderTitle,
  CustomButtonOutlined,
} from "../styled-reusable/styled-reusable";

export default function BannerComponent() {
  return (
    <section>
      <div className='my-5 banner-container'>
        <div className='d-flex flex-column'>
          <HeaderTitle className='display-3 header-title-1'>
            Buy/Rent Dream
          </HeaderTitle>
          <HeaderTitle className='display-3 header-title-2'>Place</HeaderTitle>
          <h4
            className='text-wrap text-uppercase py-2 header-title-3'
            style={{ width: "20rem" }}>
            Finding residence has never been easier
          </h4>
          <div className='mt-5'>
            <Link className='nav-link' to='/houses/category'>
              <CustomButtonOutlined>Explore Now</CustomButtonOutlined>
            </Link>
          </div>
        </div>
        <div className='banner-bg'>
          <img className='banner-img-f object' src={livingRoom} alt='banner' />
          <div className='banner-img-b'></div>
        </div>
      </div>
    </section>
  );
}
