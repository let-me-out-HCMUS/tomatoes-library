import React from "react";
// components
import CarouselBanner from "./CarouselBanner";
import SpecialStory from "./SpecialStory";
import StoryList from "./StoryList";
import NewsHome from "./news/NewsHome";

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
