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
import CardService from "../../../components/Card/CardService";

function Services() {
  const DataService = [
    {
      foto: PlainServicePhoto,
      text: "Plain Catalogue",
    },
    {
      foto: LookbookServicePhoto,
      text: "LookBook",
    },
    {
      foto: BeautyServicePhoto,
      text: "Beauty Shoot",
    },
    {
      foto: CreativeServicePhoto,
      text: 'Creative Shoot'
    },{
      foto: ProductWhiteServicePhoto,
      text: "Product On White"
    },
    {
      foto: DigitalImageServicePhoto,
      text: "Digital Imaging"
    },
    {
      foto: ProductThreeServicePhoto,
      text: 'Product 3D'
    },
    {
      foto: VideoCatServicePhoto,
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
