import React from "react";
import {
  BeautyServicePhoto,
  CreativeServicePhoto,
  DigitalImageServicePhoto,
  LookbookServicePhoto,
  PlainServicePhoto,
  ProductThreeServicePhoto,
  ProductWhiteServicePhoto,
  VideoCatServicePhoto,
} from "../../../assets/assets";
import { PlaceBeauty, PlaceCreative, PlaceDigital, PlaceLookbook, PlacePlain, PlaceThree, PlaceVideo, PlaceWhite } from "../../../assets/placeholder/placeholder";
import CardService from "../../../components/Card/CardService";

function Services() {
  const DataService = [
    {
      foto: PlainServicePhoto,
      placeholder:PlacePlain,
      text: "Plain Catalogue",
    },
    {
      foto: LookbookServicePhoto,
      placeholder:PlaceLookbook,
      text: "LookBook",
    },
    {
      foto: BeautyServicePhoto,
      placeholder: PlaceBeauty,
      text: "Beauty Shoot",
    },
    {
      foto: CreativeServicePhoto,
      placeholder: PlaceCreative,
      text: 'Creative Shoot'
    },{
      foto: ProductWhiteServicePhoto,
      placeholder: PlaceWhite,
      text: "Product On White"
    },
    {
      foto: DigitalImageServicePhoto,
      placeholder: PlaceDigital,
      text: "Digital Imaging"
    },
    {
      foto: ProductThreeServicePhoto,
      placeholder: PlaceThree,
      text: 'Product 3D'
    },
    {
      foto: VideoCatServicePhoto,
      placeholder: PlaceVideo,
      text: 'Video Catalogue'
    }
  ];

  return (
    <section className="relative bg-[#1c1c1c] py-5 px-5 z-10">
      <h1 className="font-bold text-3xl text-white">Our Services</h1>
      <div className="overflow-x-scroll">
        <div className="flex flex-nowrap py-6 gap-4 w-fit">
          {DataService.map((v, i) => {
            return <CardService foto={v.foto} text={v.text} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
