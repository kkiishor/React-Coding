import { v4 as uuid } from "uuid";

import { image8, image2, image3, image4 } from "assets/images/index";

export const categories = [
  {
    _id: uuid(),
    image: image3,
    categoryName: "fiction",
  },
  {
    _id: uuid(),
    image: image8,
    categoryName: "motivational",
  },
  {
    _id: uuid(),
    image: image2,
    categoryName: "humor",
  },
  {
    _id: uuid(),
    image: image4,
    categoryName: "thriller",
  },
];
