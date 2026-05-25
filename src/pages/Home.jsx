import React from "react";
import InstagramPage from "./Instagram";
import Banner from "../components/Banner/Banner";
import Features from "../components/Features";
import PromoBanners from "../components/PromoBanner";
import NewArrivals from "./NewArrivals";

export default function Home() {
  return (
    <>
      <Banner />
      <NewArrivals/>
      <PromoBanners/>
      <Features/>
      <InstagramPage />
    </>
  );
}
