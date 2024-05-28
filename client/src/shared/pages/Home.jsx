import React from "react";
// components
import CarouselBanner from "../../features/Home/CarouselBanner";
import SpecialStory from "../../features/Home/SpecialStory";
import StoryList from "../../features/Home/StoryList";
import NewsHome from "../../features/Home/news/NewsHome";

export default function Home() {
  return (
    <>
      <CarouselBanner />
      <StoryList />
      <SpecialStory />
      <NewsHome />
    </>
  );
}
