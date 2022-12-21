import {
  BeautyServicePhoto,
  Benefit1,
  CreativeServicePhoto,
  DigitalImageServicePhoto,
  LookbookServicePhoto,
  PlainServicePhoto,
  ProductThreeServicePhoto,
  ProductWhiteServicePhoto,
  VideoCatServicePhoto,
  ModelConny,
  ModelDio,
  ModelEdward,
  ModelJennifer,
  ModelJessica,
  ModelJordan,
  ModelJose,
  ModelKevin,
  ModelNada,
  ModelSteven,
  ModelWardah,
  ModelNathan,
  ClientTemporaryVideo,
} from "../assets/assets";
import {
  Connie1,
  Connie2,
  Connie3,
  Connie4,
  Dio1,
  Dio2,
  Dio3,
  Dio4,
  Edward1,
  Edward2,
  Edward3,
  Edward4,
  Jennifer1,
  Jennifer2,
  Jennifer3,
  Jennifer4,
  Jessica1,
  Jessica2,
  Jessica3,
  Jessica4,
  Jordan1,
  Jordan2,
  Jordan3,
  Jordan4,
  Jose1,
  Jose2,
  Jose3,
  Jose4,
  Kevin1,
  Kevin2,
  Kevin3,
  Kevin4,
  Nada1,
  Nada2,
  Nada3,
  Nada4,
  Nathan1,
  Nathan2,
  Nathan3,
  Nathan4,
  Steven1,
  Steven2,
  Steven3,
  Steven4,
  Wardah1,
  Wardah2,
  Wardah3,
  Wardah4,
} from "../assets/models/models";
import {
  PlaceBeauty,
  PlaceCreative,
  PlaceDigital,
  PlaceLookbook,
  PlacePlain,
  PlaceThree,
  PlaceVideo,
  PlaceWhite,
  PlaceConny,
  PlaceDio,
  PlaceEdward,
  PlaceJennifer,
  PlaceJessica,
  PlaceJordan,
  PlaceJose,
  PlaceKevin,
  PlaceNada,
  PlaceSteven,
  PlaceWardah,
  PlaceNathan,
} from "../assets/placeholder/placeholder";

export const DataService = [
  {
    foto: PlainServicePhoto,
    placeholder: PlacePlain,
    text: "Plain Catalogue",
    rating: 5,
    price: "Rp.50.000 / pcs",
    desc: "lorem ipsum dolor si amet.",
    terms: ["lorem", "ipsum", "dolor"],
    portoFoto: [],
  },
  {
    foto: LookbookServicePhoto,
    placeholder: PlaceLookbook,
    text: "LookBook",
    rating: 4,
    price: "Rp.50.000 / pcs",
    desc: "lorem ipsum dolor si amet.",
    terms: ["lorem", "ipsum", "dolor"],
    portoFoto: [],
  },
  {
    foto: BeautyServicePhoto,
    placeholder: PlaceBeauty,
    text: "Beauty Shoot",
    rating: 4,
    price: "Rp.50.000 / pcs",
    desc: "lorem ipsum dolor si amet.",
    terms: ["lorem", "ipsum", "dolor"],
    portoFoto: [],
  },
  {
    foto: CreativeServicePhoto,
    placeholder: PlaceCreative,
    text: "Creative Shoot",
    rating: 4,
    price: "Rp.50.000 / pcs",
    desc: "lorem ipsum dolor si amet.",
    terms: ["lorem", "ipsum", "dolor"],
    portoFoto: [],
  },
  {
    foto: ProductWhiteServicePhoto,
    placeholder: PlaceWhite,
    text: "Product On White",
    rating: 4,
    price: "Rp.50.000 / pcs",
    desc: "lorem ipsum dolor si amet.",
    terms: ["lorem", "ipsum", "dolor"],
    portoFoto: [],
  },
  {
    foto: DigitalImageServicePhoto,
    placeholder: PlaceDigital,
    text: "Digital Imaging",
    rating: 4,
    price: "Rp.50.000 / pcs",
    desc: "lorem ipsum dolor si amet.",
    terms: ["lorem", "ipsum", "dolor"],
    portoFoto: [],
  },
  {
    foto: ProductThreeServicePhoto,
    placeholder: PlaceThree,
    text: "Product 3D",
    rating: 4,
    price: "Rp.50.000 / pcs",
    desc: "lorem ipsum dolor si amet.",
    terms: ["lorem", "ipsum", "dolor"],
    portoFoto: [],
  },
  {
    foto: VideoCatServicePhoto,
    placeholder: PlaceVideo,
    text: "Video Catalogue",
    rating: 4,
    price: "Rp.50.000 / pcs",
    desc: "lorem ipsum dolor si amet.",
    terms: ["lorem", "ipsum", "dolor"],
    portoFoto: [],
  },
];

export const ListBenefit = [
  {
    image: Benefit1,
    context: "Insightfull Sales Creative",
  },
  {
    image: Benefit1,
    context: "Fast, Cheap & Hight Quality",
  },
];

export const DataClient = [
  {
    id:1,
    rating: 5,
    src:ClientTemporaryVideo
  },
  {
    id:2,
    rating: 3,
    src:ClientTemporaryVideo
  },
  {
    id:3,
    rating: 4,
    src:ClientTemporaryVideo
  },
];

export const DataModel = [
  {
    foto: ModelNathan,
    placeholder: PlaceNathan,
    text: "Nathan",
    bigPhoto: [Nathan1, Nathan2, Nathan3, Nathan4],
    bio:{
      tinggi:175,
      umur:22,
      ukuran:{
        sepatu:40,
        baju:'L'
      },
      lebar:{
        pinggang:32,
        dada:32
      }
    }
  },
  {
    foto: ModelDio,
    placeholder: PlaceDio,
    text: "Dio",
    bigPhoto: [Dio1, Dio2, Dio3, Dio4],
    bio:{
      tinggi:175,
      umur:22,
      ukuran:{
        sepatu:40,
        baju:'L'
      },
      lebar:{
        pinggang:32,
        dada:32
      }
    }
  },
  {
    foto: ModelJose,
    placeholder: PlaceJose,
    text: "Jose",
    bigPhoto: [Jose1, Jose2, Jose3, Jose4],
    bio:{
      tinggi:175,
      umur:22,
      ukuran:{
        sepatu:40,
        baju:'L'
      },
      lebar:{
        pinggang:32,
        dada:32
      }
    }
  },
  {
    foto: ModelJessica,
    placeholder: PlaceJessica,
    text: "Jessica",
    bigPhoto: [Jessica1, Jessica2, Jessica3, Jessica4],
    bio:{
      tinggi:175,
      umur:22,
      ukuran:{
        sepatu:40,
        baju:'L'
      },
      lebar:{
        pinggang:32,
        dada:32
      }
    }
  },
  {
    foto: ModelEdward,
    placeholder: PlaceEdward,
    text: "Edward",
    bigPhoto: [Edward1, Edward2, Edward4, Edward3],
    bio:{
      tinggi:175,
      umur:22,
      ukuran:{
        sepatu:40,
        baju:'L'
      },
      lebar:{
        pinggang:32,
        dada:32
      }
    }
  },
  {
    foto: ModelConny,
    placeholder: PlaceConny,
    text: "Conny",
    bigPhoto: [Connie1, Connie4, Connie3, Connie2],
    bio:{
      tinggi:175,
      umur:22,
      ukuran:{
        sepatu:40,
        baju:'L'
      },
      lebar:{
        pinggang:32,
        dada:32
      }
    }
  },
  {
    foto: ModelJennifer,
    placeholder: PlaceJennifer,
    text: "Jennifer",
    bigPhoto: [Jennifer1, Jennifer2, Jennifer3, Jennifer4],
    bio:{
      tinggi:175,
      umur:22,
      ukuran:{
        sepatu:40,
        baju:'L'
      },
      lebar:{
        pinggang:32,
        dada:32
      }
    }
  },
  {
    foto: ModelJordan,
    placeholder: PlaceJordan,
    text: "Jordan",
    bigPhoto: [Jordan1,Jordan2,Jordan3,Jordan4],
    bio:{
      tinggi:175,
      umur:22,
      ukuran:{
        sepatu:40,
        baju:'L'
      },
      lebar:{
        pinggang:32,
        dada:32
      }
    }
  },
  {
    foto: ModelKevin,
    placeholder: PlaceKevin,
    text: "Kevin",
    bigPhoto: [Kevin1,Kevin2,Kevin3,Kevin4],
    bio:{
      tinggi:175,
      umur:22,
      ukuran:{
        sepatu:40,
        baju:'L'
      },
      lebar:{
        pinggang:32,
        dada:32
      }
    }
  },
  {
    foto: ModelNada,
    placeholder: PlaceNada,
    text: "Nada",
    bigPhoto: [Nada1,Nada2,Nada3,Nada4],
    bio:{
      tinggi:175,
      umur:22,
      ukuran:{
        sepatu:40,
        baju:'L'
      },
      lebar:{
        pinggang:32,
        dada:32
      }
    }
  },
  {
    foto: ModelSteven,
    placeholder: PlaceSteven,
    text: "Steven",
    bigPhoto:[Steven1,Steven2,Steven3,Steven4],
    bio:{
      tinggi:175,
      umur:22,
      ukuran:{
        sepatu:40,
        baju:'L'
      },
      lebar:{
        pinggang:32,
        dada:32
      }
    }
  },
  {
    foto: ModelWardah,
    placeholder: PlaceWardah,
    text: "Wardah",
    bigPhoto:[Wardah1,Wardah2,Wardah3,Wardah4],
    bio:{
      tinggi:175,
      umur:22,
      ukuran:{
        sepatu:40,
        baju:'L'
      },
      lebar:{
        pinggang:32,
        dada:32
      }
    }
  },
];
