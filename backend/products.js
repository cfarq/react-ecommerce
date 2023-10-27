const products = [
  {
    id: 1,
    name: "Philips hue bulb",
    brand: "Philips",
    price: "500",
    available: true,
    weight: 0.2,
    options: [
      {
        id: 1,
        color: "white",
        power: 6.5,
        quantity: 1,
      },
      {
        id: 2,
        color: "white",
        power: 9.5,
        quantity: 2,
      },
      {
        id: 3,
        color: "red",
        power: 6.5,
        quantity: 3,
      },
      {
        id: 4,
        color: "red",
        power: 9.5,
        quantity: 4,
      },
    ],
  },
  {
    id: 2,
    name: "Trådfria Lampor",
    brand: "IKEA",
    price: "300",
    available: true,
    weight: 0.2,
    options: [
      {
        id: 1,
        color: "white",
        power: 6.5,
        quantity: 1,
      },
      {
        id: 2,
        color: "white",
        power: 9.5,
        quantity: 2,
      },
      {
        id: 3,
        color: "red",
        power: 6.5,
        quantity: 1,
      },
      {
        id: 4,
        color: "red",
        power: 9.5,
        quantity: 6,
      },
      {
        id: 5,
        color: "green",
        power: 6.5,
        quantity: 0,
      },
    ],
  },
  {
    id: 3,
    name: "Playstation 4",
    brand: "Sony",
    price: "5000",
    available: true,
    weight: 2.1,
    options: [
      {
        id: 1,
        color: "black",
        storage: "250",
        quantity: 5,
      },
      {
        id: 2,
        color: "black",
        storage: "500",
        quantity: 1,
      },
      {
        id: 3,
        color: "black",
        storage: "1000",
        quantity: 4,
      },
      {
        id: 4,
        color: "white",
        storage: "250",
        quantity: 3,
      },
      {
        id: 5,
        color: "white",
        storage: "500",
        quantity: 0,
      },
    ],
  },
  {
    id: 4,
    name: "Nintendo switch",
    brand: "Nintendo",
    price: "4500",
    available: true,
    weight: 1.6,
    options: [
      {
        id: 1,
        color: "black",
        storage: "250",
        quantity: 0,
      },
      {
        id: 2,
        color: "black",
        storage: "500",
        quantity: 0,
      },
      {
        id: 3,
        color: "white",
        storage: "250",
        quantity: 7,
      },
      {
        id: 4,
        color: "white",
        storage: "500",
        quantity: 5,
      },
      {
        id: 5,
        color: "red",
        storage: "500",
        quantity: 5,
      },
    ],
  },
  {
    id: 5,
    name: "Bluetooth speaker",
    brand: "JBL",
    price: "800",
    available: false,
    weight: 0.5,
    options: [
      {
        id: 1,
        color: "black",
        quantity: 15,
      },
      {
        id: 2,
        color: "white",
        quantity: 0,
      },
      {
        id: 3,
        color: "red",
        quantity: 1,
      },
    ],
  },
  {
    id: 6,
    name: "Bluetooth speaker",
    brand: "Marshall",
    price: "950",
    available: true,
    weight: 0.5,
    options: [
      {
        id: 1,
        color: "black",
        quantity: 1,
      },
      {
        id: 2,
        color: "white",
        quantity: 11,
      },
      {
        id: 3,
        color: "orange",
        quantity: 2,
      },
    ],
  },
  {
    id: 7,
    name: "Electrical toothbrush",
    brand: "BRAUN",
    price: "950",
    available: false,
    weight: 0.4,
    options: [
      {
        id: 1,
        color: "green",
        quantity: 0,
      },
      {
        id: 2,
        color: "white",
        quantity: 0,
      },
    ],
  },
  {
    id: 8,
    name: "Samsung 40 UHD Smart TV",
    brand: "SAMSUNG",
    price: "3200",
    available: true,
    weight: 8.2,
    options: [
      {
        id: 1,
        color: "black",
        quantity: 19,
      },
    ],
  },
  {
    id: 9,
    name: "BenQ GW2765HE Eye-Care",
    brand: "BenQ",
    price: "2700",
    available: false,
    weight: 3.9,
    options: [
      {
        id: 1,
        color: "black",
        quantity: 3,
      },
    ],
  },
  {
    id: 10,
    name: "Corsair HS60 gaming headset",
    brand: "Corsair",
    price: "1200",
    available: true,
    weight: 0.8,
    options: [
      {
        id: 1,
        color: "black",
        quantity: 3,
      },
      {
        id: 2,
        color: "red",
        quantity: 9,
      },
    ],
  },
];

module.exports = products;
