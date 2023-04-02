import { Property } from "./types/property";
import { PropertyStatus } from "./types/property-status";
import { PropertyType } from "./types/property-type";

export const PROPERTIES_DATA: Property[] = [
  {
    id: 1,
    title: "Villa With Pool For Sale",
    size: 980,
    price: 500000,
    beds: 4,
    baths: 4,
    address: "9046 Edgefield Ave. Palmetto, FL 34221",
    type: PropertyType.HOUSE,
    status: PropertyStatus.FOR_SALE,
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80",
  },
  {
    id: 2,
    title: "Modern Temporary House for rent",
    size: 560,
    price: 320000,
    beds: 2,
    baths: 2,
    address: "9974 Wayne Street Zion, IL 60099",
    type: PropertyType.HOUSE,
    status: PropertyStatus.FOR_RENT,
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
  },
  {
    id: 3,
    title: "Modern apartment in center",
    size: 450,
    price: 9400000,
    beds: 3,
    baths: 2,
    address: "9306 Myers Drive Cocoa, FL 32927",
    type: PropertyType.APARTMENT,
    status: PropertyStatus.RESERVED,
    image:
      "https://images.unsplash.com/photo-1512916194211-3f2b7f5f7de3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  },
  {
    id: 4,
    title: "Bright apartment in NY",
    size: 780,
    price: 204000,
    beds: 4,
    baths: 2,
    address: "81 El Dorado Street Plattsburgh, NY 12901",
    type: PropertyType.APARTMENT,
    status: PropertyStatus.FOR_SALE,
    image:
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  },
  {
    id: 5,
    title: "Cozy apartment Arlington",
    size: 520,
    price: 760000,
    beds: 2,
    baths: 2,
    address: "84 San Juan Street Arlington Heights, IL 60004",
    type: PropertyType.APARTMENT,
    status: PropertyStatus.FOR_RENT,
    image:
      "https://images.unsplash.com/photo-1489171078254-c3365d6e359f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2089&q=80",
  },
  {
    id: 6,
    title: "3 Bed Apartment",
    size: 480,
    price: 560000,
    beds: 3,
    baths: 1,
    address: "7408 Grand Dr. Twin Falls, ID 83301",
    type: PropertyType.APARTMENT,
    status: PropertyStatus.FOR_SALE,
    image:
      "https://images.unsplash.com/photo-1560448204-444f743ef6e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  },
  {
    id: 7,
    title: "4 Bed Appartment Cactus Avenue",
    size: 670,
    price: 495000,
    beds: 4,
    baths: 3,
    address: "9148 Cactus Avenue Asheville, NC 28803",
    type: PropertyType.APARTMENT,
    status: PropertyStatus.FOR_SALE,
    image:
      "https://images.unsplash.com/photo-1560448205-97abe7378152?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  },
  {
    id: 8,
    title: "Mansion in Beverly Hills",
    size: 1560,
    price: 1100000,
    beds: 6,
    baths: 4,
    address: "270 S Rexford Dr, Beverly Hills, CA 90212",
    type: PropertyType.HOUSE,
    status: PropertyStatus.FOR_SALE,
    image:
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-1.2.1&auto=format&fit=crop&w=2089&q=80",
  },
  {
    id: 9,
    title: "3 Bedroom Apartment",
    size: 450,
    price: 578000,
    beds: 3,
    baths: 2,
    address: "83 Bay Road Erie, PA 16506",
    type: PropertyType.APARTMENT,
    status: PropertyStatus.FOR_RENT,
    image:
      "https://images.unsplash.com/photo-1560185127-bc36ce01f6e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  },
  {
    id: 10,
    title: "Small House in Miami",
    size: 350,
    price: 542000,
    beds: 2,
    baths: 1,
    address: "405 Addison Ave. Miami, FL 33135",
    type: PropertyType.HOUSE,
    status: PropertyStatus.FOR_SALE,
    image:
      "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  },
  {
    id: 11,
    title: "Perfect house for family",
    size: 560,
    price: 670000,
    beds: 2,
    baths: 3,
    address: "7102 Summerhouse St. Fontana, CA 92335",
    type: PropertyType.HOUSE,
    status: PropertyStatus.FOR_SALE,
    image:
      "https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  },
  {
    id: 12,
    title: "Bright house Oceanside",
    size: 450,
    price: 320000,
    beds: 3,
    baths: 2,
    address: "7090 Glendale Drive Oceanside, CA 92056",
    type: PropertyType.HOUSE,
    status: PropertyStatus.FOR_SALE,
    image:
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80",
  },
  {
    id: 13,
    title: "Cozy apartment Arlington",
    size: 180,
    price: 360000,
    beds: 4,
    baths: 2,
    address: "30 Riverside Ave. Port Richey, FL 34668",
    type: PropertyType.HOUSE,
    status: PropertyStatus.FOR_RENT,
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  },
  {
    id: 14,
    title: "2 Bed House in San Francisco",
    size: 860,
    price: 950000,
    beds: 2,
    baths: 1,
    address: "6 Ocean St. San Francisco, CA 94110",
    type: PropertyType.HOUSE,
    status: PropertyStatus.FOR_SALE,
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-1.2.1&auto=format&fit=crop&w=1953&q=80",
  },
  {
    id: 15,
    title: "1 bed 1 bath apartment",
    size: 250,
    price: 620000,
    beds: 1,
    baths: 1,
    address: "215 Nut Swamp St. San Jose, CA 95111",
    type: PropertyType.HOUSE,
    status: PropertyStatus.RESERVED,
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
  },
  {
    id: 16,
    title: "Perfect apartment in CA",
    size: 190,
    price: 399000,
    beds: 1,
    baths: 1,
    address: "98 Griffin Street Palmdale, CA 93550",
    type: PropertyType.APARTMENT,
    status: PropertyStatus.RESERVED,
    image:
      "https://images.unsplash.com/photo-1527030280862-64139fba04ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2106&q=80",
  },
  {
    id: 17,
    title: "4 Bedroom House (reserved)",
    size: 560,
    price: 467000,
    beds: 4,
    baths: 4,
    address: "279 S Rexford Dr, Beverly Hills, CA 90212",
    type: PropertyType.HOUSE,
    status: PropertyStatus.RESERVED,
    image:
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
  },
  {
    id: 18,
    title: "Perfect apartment in Freemont",
    size: 450,
    price: 890000,
    beds: 3,
    baths: 3,
    address: "66 Westport Ave. Suite 23 Fremont, CA 94538",
    type: PropertyType.APARTMENT,
    status: PropertyStatus.FOR_SALE,
    image:
      "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  },
  {
    id: 19,
    title: "Perfect house 4beds",
    size: 750,
    price: 750000,
    beds: 4,
    baths: 2,
    address: "466 Shadow Brook Lane Duluth, GA 30096",
    type: PropertyType.HOUSE,
    status: PropertyStatus.FOR_SALE,
    image:
      "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80",
  },
  {
    id: 20,
    title: "House with Pool",
    size: 560,
    price: 760000,
    beds: 3,
    baths: 2,
    address: "745 Mammoth Street Suitland, MD 20746",
    type: PropertyType.HOUSE,
    status: PropertyStatus.FOR_SALE,
    image:
      "https://images.unsplash.com/photo-1576941089067-2de3c901e126?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2043&q=80",
  },
  {
    id: 21,
    title: "Cozy house in Beverly Hills",
    size: 380,
    price: 560000,
    beds: 2,
    baths: 2,
    address: "283 S Rexford Dr, Beverly Hills, CA 90212",
    type: PropertyType.HOUSE,
    status: PropertyStatus.FOR_SALE,
    image:
      "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
  },
  {
    id: 22,
    title: "2 Bed Apartment",
    size: 320,
    price: 495000,
    beds: 2,
    baths: 1,
    address: "3 Charles Ave. Bear, DE 19701",
    type: PropertyType.APARTMENT,
    status: PropertyStatus.FOR_SALE,
    image:
      "https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1947&q=80",
  },
];
