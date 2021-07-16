import Header from "../../components/header/header-component";
import Footer from "../../components/footer/footer-component";
import Banner from "../../components/banner/banner-component";
import Trending from "../../components/trending-section/trending-component";
import Category from "../../components/category/category-component";
import CollectionPreview from "../../components/collectionPreview/collection-preview";

import livingRoom from "../../assets/living-room.jpg";
import {
  PromoCard,
  Container,
} from "../../components/styled-reusable/styled-reusable";

import "./home-styles.scss";

const NewsLetterCard = () => (
  <div className='newsletter' style={{ width: "100%" }}>
    <div className='px-4 py-5 my-5 text-center'>
      <h1 className='fw-bold'>Subscribe to news letter</h1>
      <p className='text-muted mb-4'>
        Subscribe to our new letter to get latest updates
      </p>
      <div className='form'>
        <div className='row'>
          <div className='col-sm-8'>
            <input
              type='email'
              className='form-control'
              placeholder='Email'
              aria-label='email'
            />
          </div>
          <div className='col-sm-4'>
            <button type='submit' className='btn btn-primary'>
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

function HomePage() {
  return (
    <div className='home'>
      <Header />
      <Container>
        <Banner />
        <Trending />
        <Category />
        <PromoCard
          image={livingRoom}
          title='Villa'
          text='Find a place near you'
          subText='Best Villa'
          btnText='Get Now'
        />
        <CollectionPreview
          title='Houses'
          subTitle='Explore houses'
          viewNum={6}
          limit={8}
        />
        <NewsLetterCard />
      </Container>
      <Footer />
    </div>
  );
}

export default HomePage;
