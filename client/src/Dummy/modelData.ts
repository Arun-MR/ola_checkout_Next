// Dummy data


interface Variant {
  name: string;
  certified_range_km: number;
  top_speed_kmh: number;
  acceleration_0_40_kmh_sec: number;
  delivery_date: string;
  warranty: string;
  color_options: string[];
  scooter_color_img: {
    [color: string]: string[]; // Dynamic keys for color options with arrays of strings (URLs)
  };
  price: string;
}

interface Model {
  title: string;
  title_img: string;
  name: string;
  variants: Variant[];
}

interface VehicleData {
  vehicles: {
    models: Model[];
  };
}

export const modelData: VehicleData = {
  vehicles: {
    models: [
      {
        title: "S1 Pro",
        title_img: "https://cdn.builder.io/api/v1/image/assets/TEMP/b0233698207702652e301588a56560cc8529960e374f17dccd954a015ec0bea9?apiKey=971b6410d97242e7b97afd5891e4e40f&",
        name: "S1 Pro 2nd Generation",
        variants: [
          {
            name: "Standard",
            certified_range_km: 195,
            top_speed_kmh: 120,
            acceleration_0_40_kmh_sec: 2.6,
            delivery_date: "2024-07-10",
            warranty: "8 Year",
            color_options: ["Green", "Red", "Teal", "Lime"],
            scooter_color_img: {
              "green": [
                "https://assets.olaelectric.com/olaelectric-videos/configs-static/assets/ola_air_images/ola_air_neo/StellarBlue_00001.jpg",
                "https://assets.olaelectric.com/olaelectric-videos/configs-static/assets/ola_air_images/ola_air_neo/StellarBlue_00002.jpg",
                "https://assets.olaelectric.com/olaelectric-videos/configs-static/assets/ola_air_images/ola_air_neo/StellarBlue_00004.jpg"
              ],
              "red": [
                "https://dummyimage.com/600x400/ff0000/fff&text=Red+Scooter+1",
                "https://dummyimage.com/600x400/ff0000/fff&text=Red+Scooter+2",
                "https://dummyimage.com/600x400/ff0000/fff&text=Red+Scooter+3"
              ],
              "teal": [
                "https://dummyimage.com/600x400/0000ff/fff&text=Blue+Scooter+1",
                "https://dummyimage.com/600x400/0000ff/fff&text=Blue+Scooter+2",
                "https://dummyimage.com/600x400/0000ff/fff&text=Blue+Scooter+3"
              ],
              "lime": [
                "https://dummyimage.com/600x400/ffff00/000&text=Yellow+Scooter+1",
                "https://dummyimage.com/600x400/ffff00/000&text=Yellow+Scooter+2",
                "https://dummyimage.com/600x400/ffff00/000&text=Yellow+Scooter+3"
              ],
              "pink": [
                "https://dummyimage.com/600x400/ff69b4/fff&text=Pink+Scooter+1",
                "https://dummyimage.com/600x400/ff69b4/fff&text=Pink+Scooter+2",
                "https://dummyimage.com/600x400/ff69b4/fff&text=Pink+Scooter+3"
              ],
              "gold": [
                "https://dummyimage.com/600x400/ffd700/000&text=Gold+Scooter+1",
                "https://dummyimage.com/600x400/ffd700/000&text=Gold+Scooter+2",
                "https://dummyimage.com/600x400/ffd700/000&text=Gold+Scooter+3"
              ],
              "silver": [
                "https://dummyimage.com/600x400/c0c0c0/000&text=Silver+Scooter+1",
                "https://dummyimage.com/600x400/c0c0c0/000&text=Silver+Scooter+2",
                "https://dummyimage.com/600x400/c0c0c0/000&text=Silver+Scooter+3"
              ],
              "grey": [
                "https://dummyimage.com/600x400/808080/fff&text=Grey+Scooter+1",
                "https://dummyimage.com/600x400/808080/fff&text=Grey+Scooter+2",
                "https://dummyimage.com/600x400/808080/fff&text=Grey+Scooter+3"
              ]
            },
            price: "1,31,499"
          },
        ]
      },
      {
        title: "S1 Air",
        title_img: "https://assets.olaelectric.com/olaelectric-videos/configs-static/assets/rightSide/ola-s1-air-icon.svg",
        name: "S1 Air",
        variants: [
          {
            name: "Basic",
            certified_range_km: 150,
            top_speed_kmh: 100,
            acceleration_0_40_kmh_sec: 3.0,
            delivery_date: "2024-07-20",
            warranty: "6 Year",
            color_options: ["Silver", "Gray"],
            scooter_color_img: {
              "white": [
                "https://assets.olaelectric.com/olaelectric-videos/configs-static/assets/ola_air_images/ola_air_neo/StellarBlue_00001.jpg",
                "https://assets.olaelectric.com/olaelectric-videos/configs-static/assets/ola_air_images/ola_air_neo/StellarBlue_00002.jpg",
                "https://assets.olaelectric.com/olaelectric-videos/configs-static/assets/ola_air_images/ola_air_neo/StellarBlue_00004.jpg"
              ],
              "red": [
                "https://dummyimage.com/600x400/ff0000/fff&text=Red+Scooter+1",
                "https://dummyimage.com/600x400/ff0000/fff&text=Red+Scooter+2",
                "https://dummyimage.com/600x400/ff0000/fff&text=Red+Scooter+3"
              ],
              "blue": [
                "https://dummyimage.com/600x400/0000ff/fff&text=Blue+Scooter+1",
                "https://dummyimage.com/600x400/0000ff/fff&text=Blue+Scooter+2",
                "https://dummyimage.com/600x400/0000ff/fff&text=Blue+Scooter+3"
              ],
              "yellow": [
                "https://dummyimage.com/600x400/ffff00/000&text=Yellow+Scooter+1",
                "https://dummyimage.com/600x400/ffff00/000&text=Yellow+Scooter+2",
                "https://dummyimage.com/600x400/ffff00/000&text=Yellow+Scooter+3"
              ],
              "pink": [
                "https://dummyimage.com/600x400/ff69b4/fff&text=Pink+Scooter+1",
                "https://dummyimage.com/600x400/ff69b4/fff&text=Pink+Scooter+2",
                "https://dummyimage.com/600x400/ff69b4/fff&text=Pink+Scooter+3"
              ],
              "gold": [
                "https://dummyimage.com/600x400/ffd700/000&text=Gold+Scooter+1",
                "https://dummyimage.com/600x400/ffd700/000&text=Gold+Scooter+2",
                "https://dummyimage.com/600x400/ffd700/000&text=Gold+Scooter+3"
              ],
              "silver": [
                "https://dummyimage.com/600x400/c0c0c0/000&text=Silver+Scooter+1",
                "https://dummyimage.com/600x400/c0c0c0/000&text=Silver+Scooter+2",
                "https://dummyimage.com/600x400/c0c0c0/000&text=Silver+Scooter+3"
              ],
              "grey": [
                "https://dummyimage.com/600x400/808080/fff&text=Grey+Scooter+1",
                "https://dummyimage.com/600x400/808080/fff&text=Grey+Scooter+2",
                "https://dummyimage.com/600x400/808080/fff&text=Grey+Scooter+3"
              ]
            },
            price: "1,05,499"
          },
        ]
      },
      {
        title: "S1 Lite",
        title_img: "https://assets.olaelectric.com/olaelectric-videos/configs-static/assets/rightSide/s1X_img.svg",
        name: "S1 Lite",
        variants: [
          {
            name: "Eco",
            certified_range_km: 120,
            top_speed_kmh: 85,
            acceleration_0_40_kmh_sec: 3.5,
            delivery_date: "2024-07-30",
            warranty: "5 Year",
            color_options: ["Green", "Yellow"],
            scooter_color_img: {
              "white": [
                "https://assets.olaelectric.com/olaelectric-videos/configs-static/assets/ola_air_images/ola_air_neo/StellarBlue_00001.jpg",
                "https://assets.olaelectric.com/olaelectric-videos/configs-static/assets/ola_air_images/ola_air_neo/StellarBlue_00002.jpg",
                "https://assets.olaelectric.com/olaelectric-videos/configs-static/assets/ola_air_images/ola_air_neo/StellarBlue_00004.jpg"
              ],
              "red": [
                "https://dummyimage.com/600x400/ff0000/fff&text=Red+Scooter+1",
                "https://dummyimage.com/600x400/ff0000/fff&text=Red+Scooter+2",
                "https://dummyimage.com/600x400/ff0000/fff&text=Red+Scooter+3"
              ],
              "blue": [
                "https://dummyimage.com/600x400/0000ff/fff&text=Blue+Scooter+1",
                "https://dummyimage.com/600x400/0000ff/fff&text=Blue+Scooter+2",
                "https://dummyimage.com/600x400/0000ff/fff&text=Blue+Scooter+3"
              ],
              "yellow": [
                "https://dummyimage.com/600x400/ffff00/000&text=Yellow+Scooter+1",
                "https://dummyimage.com/600x400/ffff00/000&text=Yellow+Scooter+2",
                "https://dummyimage.com/600x400/ffff00/000&text=Yellow+Scooter+3"
              ],
              "pink": [
                "https://dummyimage.com/600x400/ff69b4/fff&text=Pink+Scooter+1",
                "https://dummyimage.com/600x400/ff69b4/fff&text=Pink+Scooter+2",
                "https://dummyimage.com/600x400/ff69b4/fff&text=Pink+Scooter+3"
              ],
              "gold": [
                "https://dummyimage.com/600x400/ffd700/000&text=Gold+Scooter+1",
                "https://dummyimage.com/600x400/ffd700/000&text=Gold+Scooter+2",
                "https://dummyimage.com/600x400/ffd700/000&text=Gold+Scooter+3"
              ],
              "silver": [
                "https://dummyimage.com/600x400/c0c0c0/000&text=Silver+Scooter+1",
                "https://dummyimage.com/600x400/c0c0c0/000&text=Silver+Scooter+2",
                "https://dummyimage.com/600x400/c0c0c0/000&text=Silver+Scooter+3"
              ],
              "grey": [
                "https://dummyimage.com/600x400/808080/fff&text=Grey+Scooter+1",
                "https://dummyimage.com/600x400/808080/fff&text=Grey+Scooter+2",
                "https://dummyimage.com/600x400/808080/fff&text=Grey+Scooter+3"
              ]
            },
            price: "1,31,499"
          },
        ]
      }
    ],
    
  }
};




// actions: [
//   {
//     name: "CHOOSE MODEL AND VARIANT"
//   },
//   {
//     name: "DELIVERING TO",
//     action: "Select location"
//   },
//   {
//     name: "COMPARE MODELS",
//     action: "View full spec sheet"
//   },
//   {
//     name: "Explore finance",
//     action: "Explore finance as low as 6.99%* with 0% processing fee!"
//   },
//   {
//     name: "Explore accessories",
//     action: "Explore accessories"
//   }
// ],
// accessories: [
//   {
//     name: "Scooter Cover",
//     price: 999,
//     shipping_date: "2024-07-19",
//     description: "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
//   },
//   {
//     name: "Scooter Cover",
//     price: 999,
//     shipping_date: "2024-07-19",
//     description: "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch."
//   }
// ]
