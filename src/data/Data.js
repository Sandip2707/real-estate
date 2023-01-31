export const nav = {
  logo: "/public/images/logo.png",
  links: {
    leftLinks: [
      {
        name: "Buy",
        path: "/buy",
        dropItems: [
          { name: "Homes for Sale", path: "/homes-for-sale" },
          { name: "Open Houses", path: "/open-houses" },
          { name: "New Houses", path: "/new-homes" },
          { name: "Recently Sold", path: "/recently-sold" },
        ],
      },
      {
        name: "Rent",
        path: "/rent",
        dropItems: [
          { name: "All Rentals", path: "/rent/all" },
          { name: "Apartments For Rent", path: "/rent/apartments" },
          { name: "Houses For Rent", path: "/rent/houses" },
          { name: "Post A Rental Listing", path: "/post" },
        ],
      },
      {
        name: "Mortgage",
        path: "mortgage",
        dropItems: [
          { name: "Mortgage overview", path: "/mortgage/overview" },
          { name: "Get Pre-Qualified", path: "/mortgage/prequalified" },
          { name: "Mortgage Rates", path: "/mortgage/rates" },
          { name: "Refinance Rates", path: "/mortgage/refinance/rates" },
          { name: "Mortgage Calculator", path: "/mortgage/calculator" },
          {
            name: "Affordibility Calculator",
            path: "/mortgage/affordibility/calculator",
          },
          {
            name: "Refinance Calculator",
            path: "/mortgage/refinance/calculator",
          },
        ],
      },
    ],
    rightLinks: [
      { name: "Saved Homes", path: "/homes/saved" },
      { name: "Saved Searches", path: "/searches/saved" },
      { name: "Sign up or Log in", path: "/loginsignup" },
    ],
    sideBarLinks: [
      {
        name: "Sign Up or Login",
        path: "/loginsignup",
      },
      {
        name: "About",
        path: "/about",
      },
      {
        name: "Blogs",
        path: "/blogs",
      },
      {
        name: "Agencies",
        path: "/agencies",
      },
      {
        name: "Buy",
        path: "/buy",
        dropItems: [
          { name: "Homes for Sale", path: "/homes-for-sale" },
          { name: "Open Houses", path: "/open-houses" },
          { name: "New Houses", path: "/new-homes" },
          { name: "Recently Sold", path: "/recently-sold" },
        ],
      },
      {
        name: "Rent",
        path: "/rent",
        dropItems: [
          { name: "All Rentals", path: "/rent/all" },
          { name: "Apartments For Rent", path: "/rent/apartments" },
          { name: "Houses For Rent", path: "/rent/houses" },
          { name: "Post A Rental Listing", path: "/post" },
        ],
      },
      {
        name: "Mortgage",
        path: "mortgage",
        dropItems: [
          { name: "Mortgage overview", path: "/mortgage/overview" },
          { name: "Get Pre-Qualified", path: "/mortgage/prequalified" },
          { name: "Mortgage Rates", path: "/mortgage/rates" },
          { name: "Refinance Rates", path: "/mortgage/refinance/rates" },
          { name: "Mortgage Calculator", path: "/mortgage/calculator" },
          {
            name: "Affordibility Calculator",
            path: "/mortgage/affordibility/calculator",
          },
          {
            name: "Refinance Calculator",
            path: "/mortgage/refinance/calculator",
          },
        ],
      },
      {
        name: "Local Info",
        path: "/local-info",
        dropItems: [
          {
            name: "All Neighbourhood Guides",
            path: "/neighbourhood/guides",
          },
        ],
      },
      {
        name: "Additional Resources",
        path: "/additional-resources",
        dropItems: [
          {
            name: "Our Blogs",
            path: "/blogs",
          },
          {
            name: "Help Center",
            path: "/help",
          },
        ],
      },
      {
        name: "Contact",
        path: "/contact",
      },
    ],
  },
};
export const locationData = {
  provinces: [
    {
      label: "Province1",
      value: "province1",
    },
    {
      label: "Province2",
      value: "province2",
    },
    {
      label: "Province3",
      value: "province3",
    },
    {
      label: "Province4",
      value: "province4",
    },
    {
      label: "Province5",
      value: "province5",
    },
    {
      label: "Province6",
      value: "province6",
    },
    {
      label: "Province7",
      value: "province7",
    },
  ],
  districts: [
    {
      label: "district1",
      value: "district1",
    },
    {
      label: "district2",
      value: "district2",
    },
    {
      label: "district3",
      value: "district3",
    },
    {
      label: "district4",
      value: "district4",
    },
    {
      label: "district5",
      value: "district5",
    },
    {
      label: "district7",
      value: "district7",
    },
    {
      label: "district7",
      value: "district7",
    },
    {
      label: "district8",
      value: "district8",
    },
  ],
  localLevels: [
    { label: "localLevel1", value: "localLevel1" },
    { label: "localLevel2", value: "localLevel2" },
    { label: "localLevel3", value: "localLevel3" },
    { label: "localLevel4", value: "localLevel4" },
    { label: "localLevel5", value: "localLevel5" },
    { label: "localLevel6", value: "localLevel6" },
    { label: "localLevel8", value: "localLevel8" },
    { label: "localLevel9", value: "localLevel9" },
  ],
};

export const propertyMeta = {
  purposes: [
    { label: "Buy", value: "buy" },
    { label: "Rent", value: "rent" },
  ],
  types: [
    { label: "House", value: "house" },
    { label: "Land", value: "land" },
    { label: "Flat", value: "Flat" },
    { label: "officeSpace", value: "officeSpace" },
    { label: "Shop Space", value: "shopSpace" },
    { label: "Apartment", value: "apartment" },
  ],
  budget: [
    { label: "Up to 50k", value: "0to50k" },
    { label: "50k to 5 Lakhs", value: "50kto5lakhs" },
    { label: "5 Lakhs to 50 Lakhs", value: "o5lakhsto50lakhs" },
    { label: " 50 Lakhs to 5 crores", value: "50lakhsto5crores" },
    { label: "Above 3 Crores", value: "above3Crores" },
  ],
};

export const featured = [
  {
    cover: "../images/hero/h1.png",
    name: "Family House",
    total: "122 Property",
  },
  {
    cover: "../images/hero/h2.png",
    name: "House & Villa",
    total: "155 Property",
  },
  {
    cover: "../images/hero/h3.png",
    name: "Apartment",
    total: "300 Property",
  },
  {
    cover: "../images/hero/h4.png",
    name: "Office & Studio",
    total: "80 Property",
  },
  {
    cover: "../images/hero/h6.png",
    name: "Villa & Condo",
    total: "80 Property",
  },
];
export const list = [
  {
    id: 1,
    cover: "../images/list/p-1.png",
    name: "Red Carpet Real Estate",
    location: "210 Zirak Road, Canada",
    category: "For Rent",
    price: "$3,700",
    type: "Apartment",
  },
  {
    id: 2,
    cover: "../images/list/p-2.png",
    name: "Fairmount Properties",
    location: "5698 Zirak Road, NewYork",
    category: "For Sale",
    price: "$9,750",
    type: "Condos",
  },
  {
    id: 3,
    cover: "../images/list/p-7.png",
    name: "The Real Estate Corner",
    location: "5624 Mooker Market, USA",
    category: "For Rent",
    price: "$5,860",
    type: "Offices",
  },
  {
    id: 4,
    cover: "../images/list/p-4.png",
    name: "Herringbone Realty",
    location: "5621 Liverpool, London",
    category: "For Sale",
    price: "$7,540",
    type: "Homes & Villas",
  },
  {
    id: 5,
    cover: "../images/list/p-5.png",
    name: "Brick Lane Realty",
    location: "210 Montreal Road, Canada",
    category: "For Rent",
    price: "$4,850",
    type: "Commercial",
  },
  {
    id: 6,
    cover: "../images/list/p-6.png",
    name: "Banyon Tree Realty",
    location: "210 Zirak Road, Canada",
    category: "For Sale",
    price: "$2,742",
    type: "Apartment",
  },
];
export const agencies = [
  {
    cover: "./images/hero/h2.png",
    name: "Nepal Bhoomi Real Estate Agency",
    total: "96",
  },
  {
    cover: "./images/hero/h1.png",
    name: "Nepal Home Search",
    total: "225",
  },
  {
    cover: "./images/hero/h1.png",
    name: "Smart D Estate",
    total: "165",
  },
  {
    cover: "./images/hero/h3.png",
    name: "Property 247",
    total: "20",
  },
  {
    cover: "./images/hero/h4.png",
    name: "Property 360 Nepal",
    total: "82",
  },
];
export const awards = [
  {
    icon: <i class="fa-solid fa-trophy"></i>,
    num: "32 M	",
    name: "Blue Burmin Award",
  },
  {
    icon: <i class="fa-solid fa-briefcase"></i>,
    num: "43 M",
    name: "Mimo X11 Award",
  },
  {
    icon: <i class="fa-solid fa-lightbulb"></i>,
    num: "51 M",
    name: "Australian UGC Award",
  },
  {
    icon: <i class="fa-solid fa-heart"></i>,
    num: "42 M",
    name: "IITCA Green Award",
  },
];
export const location = [
  {
    id: 1,
    name: "New Orleans, Louisiana",
    Villas: "12 Villas",
    Apartments: "10 Apartments",
    Offices: "07 Offices",
    cover: "./images/location/city-1.png",
  },
  {
    id: 2,
    name: "Jerrsy, United State",
    Villas: "12 Villas",
    Apartments: "10 Apartments",
    Offices: "07 Offices",
    cover: "./images/location/city-2.png",
  },
  {
    id: 3,
    name: "Liverpool, London",
    Villas: "12 Villas",
    Apartments: " 10 Apartments",
    Offices: "07 Offices",
    cover: "./images/location/city-3.png",
  },
  {
    id: 4,
    name: "NewYork, United States",
    Villas: "12 Villas",
    Apartments: " 10 Apartments",
    Offices: "07 Offices",
    cover: "./images/location/city-4.png",
  },
  {
    id: 5,
    name: "Montreal, Canada",
    Villas: "12 Villas",
    Apartments: " 10 Apartments",
    Offices: "07 Offices",
    cover: "./images/location/city-5.png",
  },
  {
    id: 6,
    name: "California, USA",
    Villas: "12 Villas",
    Apartments: " 10 Apartments",
    Offices: "07 Offices",
    cover: "./images/location/city-6.png",
  },
];
export const team = [
  {
    list: "50",
    cover: "../images/customer/team-1.jpg",
    address: "Liverpool, Canada",
    name: "Sargam S. Singh",
    icon: [
      <i class="fa-brands fa-facebook-f"></i>,
      <i class="fa-brands fa-linkedin"></i>,
      <i class="fa-brands fa-twitter"></i>,
      <i class="fa-brands fa-instagram"></i>,
    ],
  },
  {
    list: "70",
    cover: "../images/customer/team-2.jpg",
    address: "Montreal, Canada",
    name: "Harijeet M. Siller",
    icon: [
      <i class="fa-brands fa-facebook-f"></i>,
      <i class="fa-brands fa-linkedin"></i>,
      <i class="fa-brands fa-twitter"></i>,
      <i class="fa-brands fa-instagram"></i>,
    ],
  },
  {
    list: "80",
    cover: "../images/customer/team-3.jpg",
    address: "Denever, USA",
    name: "Anna K. Young",
    icon: [
      <i class="fa-brands fa-facebook-f"></i>,
      <i class="fa-brands fa-linkedin"></i>,
      <i class="fa-brands fa-twitter"></i>,
      <i class="fa-brands fa-instagram"></i>,
    ],
  },
  {
    list: "51",
    cover: "../images/customer/team-4.jpg",
    address: "2272 Briarwood Drive",
    name: "Michael P. Grimaldo",
    icon: [
      <i class="fa-brands fa-facebook-f"></i>,
      <i class="fa-brands fa-linkedin"></i>,
      <i class="fa-brands fa-twitter"></i>,
      <i class="fa-brands fa-instagram"></i>,
    ],
  },
  {
    list: "42",
    cover: "../images/customer/team-5.jpg",
    address: "2272 Briarwood Drive",
    name: "Michael P. Grimaldo",
    icon: [
      <i class="fa-brands fa-facebook-f"></i>,
      <i class="fa-brands fa-linkedin"></i>,
      <i class="fa-brands fa-twitter"></i>,
      <i class="fa-brands fa-instagram"></i>,
    ],
  },
  {
    list: "38",
    cover: "../images/customer/team-5.jpg",
    address: "Montreal, USA",
    name: "Adam K. Jollio",
    icon: [
      <i class="fa-brands fa-facebook-f"></i>,
      <i class="fa-brands fa-linkedin"></i>,
      <i class="fa-brands fa-twitter"></i>,
      <i class="fa-brands fa-instagram"></i>,
    ],
  },
];
export const price = [
  {
    plan: "Basic",
    price: "29",
    ptext: "per user, per month",
    list: [
      {
        icon: <i class="fa-solid fa-check"></i>,
        text: "99.5% Uptime Guarantee",
      },
      {
        icon: <i class="fa-solid fa-check"></i>,
        text: "120GB CDN Bandwidth",
      },
      {
        icon: <i class="fa-solid fa-check"></i>,
        text: "5GB Cloud Storage",
      },
      {
        change: "color",
        icon: <i class="fa-solid fa-x"></i>,
        text: "Personal Help Support",
      },
      {
        change: "color",
        icon: <i class="fa-solid fa-x"></i>,
        text: "Enterprise SLA",
      },
    ],
  },
  {
    best: "Best Value",
    plan: "Standard",
    price: "49",
    ptext: "per user, per month",
    list: [
      {
        icon: <i class="fa-solid fa-check"></i>,
        text: "99.5% Uptime Guarantee",
      },
      {
        icon: <i class="fa-solid fa-check"></i>,
        text: "150GB CDN Bandwidth",
      },
      {
        icon: <i class="fa-solid fa-check"></i>,
        text: "10GB Cloud Storage",
      },
      {
        icon: <i class="fa-solid fa-check"></i>,
        text: "Personal Help Support",
      },
      {
        change: "color",
        icon: <i class="fa-solid fa-x"></i>,
        text: "Enterprise SLA",
      },
    ],
  },
  {
    plan: "Platinum",
    price: "79",
    ptext: "2 user, per month",
    list: [
      {
        icon: <i class="fa-solid fa-check"></i>,
        text: "100% Uptime Guarantee",
      },
      {
        icon: <i class="fa-solid fa-check"></i>,
        text: "200GB CDN Bandwidth",
      },
      {
        icon: <i class="fa-solid fa-check"></i>,
        text: "20GB Cloud Storage",
      },
      {
        icon: <i class="fa-solid fa-check"></i>,
        text: "Personal Help Support",
      },
      {
        icon: <i class="fa-solid fa-check"></i>,
        text: "Enterprise SLA",
      },
    ],
  },
];
export const footer = [
  {
    title: "LAYOUTS",
    text: [
      { list: "Home Page" },
      { list: "About Page" },
      { list: "Service Page" },
      { list: "Property Page" },
      { list: "Contact Page" },
      { list: "Single Blog" },
    ],
  },
  {
    title: "ALL SECTIONS",
    text: [
      { list: "Headers" },
      { list: "Features" },
      { list: "Attractive" },
      { list: "Testimonials" },
      { list: "Videos" },
      { list: "Footers" },
    ],
  },
  {
    title: "COMPANY",
    text: [
      { list: "About" },
      { list: "Blog" },
      { list: "Pricing" },
      { list: "Affiliate" },
      { list: "Login" },
      { list: "Changelog" },
    ],
  },
];
