import React from "react";

//INTERNAL IMPORT
import Style from "./page.module.css";
import { AudioLive, BigNFTSilder, Brand, Category, Collection, Filter, FollowerTab, HeroSection, NFTCard, Slider, Subscribe, Title, Video } from "./components/componentIndex";
import {Service} from "./components/componentIndex";

const Home = () => {
  return (
    <div className={Style.homePage}>
      <HeroSection />
      <Service />
      <BigNFTSilder />
      <Title 
        heading="Latest Audio Collection"
        paragraph="Discover the most outstanding NFTs in all topics of life"
      />
      <AudioLive />
      <Title 
        heading="Filter By Collection"
        paragraph="Discover the most outstanding NFTs in all topics of life"
      />
      <FollowerTab />
      <Slider />
      <Collection />
      <Subscribe />
      <Title 
        heading="Featured NFT"
        paragraph="Discover the most outstanding NFTs in all topics of life"
      />
      <Filter />
      <NFTCard />
      <Title 
        heading="Browse by category"
        paragraph="Explore the NFT's in the most featured categories."
      />
      <Category />
      <Brand />
      <Video />
    </div>
  );
};

export default Home;
