export type City = {
  /** URL slug used in `/virtual-office-in-${slug}` */
  slug: string;
  /** Display name used across UI */
  name: string;
  /** Optional alternate names that should resolve to this city */
  aliases?: string[];
  state: string;
  locationsCount: number;
  imageUrl: string;
};

export const CITIES: City[] = [
  {
    slug: "gurgaon",
    name: "Gurgaon",
    aliases: ["gurugram"],
    state: "Haryana",
    locationsCount: 12,
    imageUrl:
      "https://img.cofynd.com/images/latest_images_2024/0f418830f9b2b71f4d500acc7ebbcbfc0dd73e18.webp",
  },
  {
    slug: "delhi",
    name: "Delhi",
    state: "Delhi NCR",
    locationsCount: 18,
    imageUrl:
      "https://img.cofynd.com/images/latest_images_2024/84cf21159ba4e6a2a8ef87831bebf7efee6e74e9.webp",
  },
  {
    slug: "bangalore",
    name: "Bangalore",
    state: "Karnataka",
    locationsCount: 15,
    imageUrl:
      "https://img.cofynd.com/images/latest_images_2024/d85cd31c74d7d32d5321a1c89b88014c1f88c648.webp",
  },
  {
    slug: "hyderabad",
    name: "Hyderabad",
    state: "Telangana",
    locationsCount: 10,
    imageUrl:
      "https://img.cofynd.com/images/latest_images_2024/17b5af5e4e45a4dd09efc53ceee1f3f1a4a5cc09.webp",
  },
  {
    slug: "mumbai",
    name: "Mumbai",
    state: "Maharashtra",
    locationsCount: 20,
    imageUrl:
      "https://img.cofynd.com/images/latest_images_2024/e182162b472bf72729057cc78babd17a74b48572.webp",
  },
  {
    slug: "noida",
    name: "Noida",
    state: "Uttar Pradesh",
    locationsCount: 8,
    imageUrl:
      "https://img.cofynd.com/images/latest_images_2024/066c525dad00ee86a27e53272d55d299f7afaaec.webp",
  },
  {
    slug: "pune",
    name: "Pune",
    state: "Maharashtra",
    locationsCount: 9,
    imageUrl:
      "https://img.cofynd.com/images/latest_images_2024/99e8dfd6fb1f6220fbd2297de44ae1ea2601d8a9.webp",
  },
  {
    slug: "chennai",
    name: "Chennai",
    state: "Tamil Nadu",
    locationsCount: 7,
    imageUrl:
      "https://img.cofynd.com/images/latest_images_2024/813132be51f29e91167307f84532f03e9f4b23a0.webp",
  },
  {
    slug: "jaipur",
    name: "Jaipur",
    state: "Rajasthan",
    locationsCount: 4,
    imageUrl:
      "https://img.cofynd.com/images/latest_images_2024/34540edac3e9e158c30bb61d6672d4d1a6ee9675.webp",
  },
  {
    slug: "ahmedabad",
    name: "Ahmedabad",
    state: "Gujarat",
    locationsCount: 5,
    imageUrl:
      "https://img.cofynd.com/images/latest_images_2024/62b28553fde2a39b015af363ca0d27bf49983053.webp",
  },
  {
    slug: "kolkata",
    name: "Kolkata",
    state: "West Bengal",
    locationsCount: 6,
    imageUrl:
      "https://img.cofynd.com/images/latest_images_2024/83122fbececc97ed792d4918fbbec4be8717a1ab.webp",
  },
  {
    slug: "chandigarh",
    name: "Chandigarh",
    state: "Punjab",
    locationsCount: 3,
    imageUrl:
      "https://img.cofynd.com/images/original/d5ad55f917d61eaad80c95409cb794a490d2d542.jpg",
  },
];
export const AVAILABLE_CITY_VIRTUAL_OFFICE = [
  {
    name: 'gurugram',
    id: '5e3eb83c18c88277e81427d9',
    icon: 'assets/images/city-icons/Gurugram.svg',
    featureImage:
      'https://img.cofynd.com/small/images/original/8aa2d894804cdf95434822ec292ff3c1c704015f.webp',
    image: 'https://img.cofynd.com/small/images/original/7f11c58e38c7fe343f6dfb301f36c8a428fb954b.webp',
    price: '1,199/* monthly',
    slug: '/virtual-office/gurugram',
    for_coWorking: true,
    for_office: false,
    for_coLiving: true,
    for_virtualOffice: true,
    locations: [
      {
        bgImg: "https://img.cofynd.com/small/images/original/686a85e71e4857e642dca838fbd2f3792b5f7caa.webp",
        locality: "Golf Course Road",
        starting_price: "Starting ₹ 999/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/36d6348c36990a3e4bd2f7b72510548142e0b7fc.webp",
        locality: "MG Road Gurgaon",
        starting_price: "Starting ₹ 849/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/c7a90b341485bffe4983b772576ab26f4634e1e6.webp",
        locality: "Sector 44 Gurgaon",
        starting_price: "Starting ₹ 699/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/df930eebbbf6be356d00f5ebb251375542e5e856.webp",
        locality: "Huda City Centre",
        starting_price: "Starting ₹ 999/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/57d32252bd5afeb55357eaa254d0059f164df501.webp",
        locality: "Udyog Vihar",
        starting_price: "Starting ₹ 799/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/29dcde8d1a5249901f6a564b5ceb8ec4e08d7af3.webp",
        locality: "Cyber Hub",
        starting_price: "Starting ₹ 999/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/56d65fe71462de7ff3a50dec1fcfb66324c8eb20.webp",
        locality: "Unitech Cyber Park",
        starting_price: "Starting ₹ 849/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/aeea176108292fec50e013b85efed4aec7304230.webp",
        locality: "Sohna Road",
        starting_price: "Starting ₹ 749/month"
      }
    ],
  },
  {
    id: '5f2a4210ecdb5a5d67f0bbbc',
    name: 'bangalore',
    icon: 'assets/images/city-icons/Bangalore.svg',
    featureImage:
      'https://img.cofynd.com/small/images/original/e3c809cff5a5c533f4b004498a2a7ff0632776cc.webp',
    image: 'https://img.cofynd.com/small/images/original/117ec383b617f0622db6c54679da80c0105487f7.webp',
    price: '1,199/* monthly',
    slug: '/virtual-office/bangalore',
    for_coWorking: true,
    for_office: false,
    for_coLiving: true,
    for_virtualOffice: true,
    locations: [
      {
        bgImg: "https://img.cofynd.com/small/images/original/686a85e71e4857e642dca838fbd2f3792b5f7caa.webp",
        locality: "HSR Layout",
        starting_price: "Starting ₹ 999/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/36d6348c36990a3e4bd2f7b72510548142e0b7fc.webp",
        locality: "Koramangala",
        starting_price: "Starting ₹ 749/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/c7a90b341485bffe4983b772576ab26f4634e1e6.webp",
        locality: "Indiranagar",
        starting_price: "Starting ₹ 749/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/df930eebbbf6be356d00f5ebb251375542e5e856.webp",
        locality: "Whitefield",
        starting_price: "Starting ₹ 999/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/57d32252bd5afeb55357eaa254d0059f164df501.webp",
        locality: "Electronic City",
        starting_price: "Starting ₹ 749/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/29dcde8d1a5249901f6a564b5ceb8ec4e08d7af3.webp",
        locality: "Marathahalli",
         starting_price: "Starting ₹ 849/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/56d65fe71462de7ff3a50dec1fcfb66324c8eb20.webp",
        locality: "Bellandur",
         starting_price: "Starting ₹ 849/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/aeea176108292fec50e013b85efed4aec7304230.webp",
        locality: "MG Road Bangalore",
         starting_price: "Starting ₹ 749/month"
      }
    ],
  },
  {
    id: '5f5b1f728bbbb85328976417',
    name: 'mumbai',
    icon: 'assets/images/city-icons/Mumbai.svg',
    featureImage:
      'https://img.cofynd.com/small/images/original/9ceb1e7c1fe97821bd638eb4b1ff66e72763e114.webp',
    image: 'https://img.cofynd.com/small/images/original/6e515577a1d506a17c07be4299105476c88a7287.webp',
    price: '2,099/* monthly',
    slug: '/virtual-office/mumbai',
    for_coWorking: true,
    for_office: false,
    for_coLiving: true,
    for_virtualOffice: true,
    locations: [
      {
        bgImg: "https://img.cofynd.com/small/images/original/686a85e71e4857e642dca838fbd2f3792b5f7caa.webp",
        locality: "Andheri East",
        starting_price: "Starting ₹ 699/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/36d6348c36990a3e4bd2f7b72510548142e0b7fc.webp",
        locality: "Bandra",
        starting_price: "Starting ₹ 999/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/c7a90b341485bffe4983b772576ab26f4634e1e6.webp",
        locality: "BKC",
        starting_price: "Starting ₹ 999/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/df930eebbbf6be356d00f5ebb251375542e5e856.webp",
        locality: "Churchgate",
        starting_price: "Starting ₹ 799/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/57d32252bd5afeb55357eaa254d0059f164df501.webp",
        locality: "Dadar",
        starting_price: "Starting ₹ 849/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/29dcde8d1a5249901f6a564b5ceb8ec4e08d7af3.webp",
        locality: "Vashi",
        starting_price: "Starting ₹ 699/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/56d65fe71462de7ff3a50dec1fcfb66324c8eb20.webp",
        locality: "Malad",
        starting_price: "Starting ₹ 999/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/aeea176108292fec50e013b85efed4aec7304230.webp",
        locality: "Vikhroli",
        starting_price: "Starting ₹ 849/month"
      }
    ],
  },
  {
    id: '5f338a5f59d5584617676837',
    name: 'hyderabad',
    icon: 'assets/images/city-icons/Hyderabad.svg',
    featureImage:
      'https://img.cofynd.com/small/images/original/ed268798e752c93a96f2e3778dc446b66ef597bc.webp',
    image: 'https://img.cofynd.com/small/images/original/eb4aa50652a34bb24ba16368fff7f37ead469994.webp',
    price: '1,199/* monthly',
    slug: '/virtual-office/hyderabad',
    for_coWorking: true,
    for_office: false,
    for_coLiving: true,
    for_virtualOffice: true,
    locations: [
      {
        bgImg: "https://img.cofynd.com/small/images/original/686a85e71e4857e642dca838fbd2f3792b5f7caa.webp",
        locality: "Hitech City",
        starting_price: "Starting ₹ 829/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/36d6348c36990a3e4bd2f7b72510548142e0b7fc.webp",
        locality: "Gachibowli",
        starting_price: "Starting ₹ 729/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/c7a90b341485bffe4983b772576ab26f4634e1e6.webp",
        locality: "Secunderabad",
        starting_price: "Starting ₹ 699/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/df930eebbbf6be356d00f5ebb251375542e5e856.webp",
        locality: "Banjara Hills",
        starting_price: "Starting ₹ 829/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/57d32252bd5afeb55357eaa254d0059f164df501.webp",
        locality: "Jubilee Hills",
        starting_price: "Starting ₹ 999/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/29dcde8d1a5249901f6a564b5ceb8ec4e08d7af3.webp",
        locality: "Madhapur",
        starting_price: "Starting ₹ 729/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/56d65fe71462de7ff3a50dec1fcfb66324c8eb20.webp",
        locality: "Begumpet",
        starting_price: "Starting ₹ 699/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/aeea176108292fec50e013b85efed4aec7304230.webp",
        locality: "Kukatpally",
        starting_price: "Starting ₹ 849/month"
      }
    ],
  },
  {
    id: '5e3eb83c18c88277e8142795',
    name: 'pune',
    icon: 'assets/images/city-icons/Pune.svg',
    featureImage:
      'https://img.cofynd.com/small/images/original/b1cd61c7b868917956cbc07b33549ae652c2a3f6.webp',
    image: 'https://img.cofynd.com/small/images/original/1c8435872fdbb6376c7005be8a01983980c1d709.webp',
    price: '1,499/* monthly',
    slug: '/virtual-office/pune',
    for_coWorking: true,
    for_office: false,
    for_coLiving: true,
    for_virtualOffice: true,
    locations: [
      {
        bgImg: "https://img.cofynd.com/small/images/original/686a85e71e4857e642dca838fbd2f3792b5f7caa.webp",
        locality: "Baner",
        starting_price: "Starting ₹ 999/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/36d6348c36990a3e4bd2f7b72510548142e0b7fc.webp",
        locality: "Aundh",
        starting_price: "Starting ₹ 799/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/c7a90b341485bffe4983b772576ab26f4634e1e6.webp",
        locality: "Kothrud",
        starting_price: "Starting ₹ 699/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/df930eebbbf6be356d00f5ebb251375542e5e856.webp",
        locality: "Viman Nagar",
        starting_price: "Starting ₹ 829/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/57d32252bd5afeb55357eaa254d0059f164df501.webp",
        locality: "Koregaon Park",
        starting_price: "Starting ₹ 999/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/29dcde8d1a5249901f6a564b5ceb8ec4e08d7af3.webp",
        locality: "Kharadi",
        starting_price: "Starting ₹ 999/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/56d65fe71462de7ff3a50dec1fcfb66324c8eb20.webp",
        locality: "Wakad",
        starting_price: "Starting ₹ 829/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/aeea176108292fec50e013b85efed4aec7304230.webp",
        locality: "Kukatpally",
        starting_price: "Starting ₹ 799/month"
      }
    ],
  },
  {
    id: '5e3e77c6936bc06de1f9a2d9',
    name: 'delhi',
    icon: 'assets/images/city-icons/Delhi.svg',
    featureImage:
      'https://img.cofynd.com/small/images/original/bc86eeae77eab6a5407bea9371a58809aa8b9d3c.webp',
    image: 'https://img.cofynd.com/small/images/original/b6d83bfaedd8d50af65d5e4c6289e0000d9d7fc7.webp',
    price: '1,249/* monthly',
    slug: '/virtual-office/delhi',
    for_coWorking: true,
    for_office: true,
    for_coLiving: true,
    for_virtualOffice: true,
    locations: [
      {
        bgImg: "https://img.cofynd.com/small/images/original/686a85e71e4857e642dca838fbd2f3792b5f7caa.webp",
        locality: "South Delhi",
        starting_price: "Starting ₹ 749/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/36d6348c36990a3e4bd2f7b72510548142e0b7fc.webp",
        locality: "Nehru Place",
        starting_price: "Starting ₹ 829/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/c7a90b341485bffe4983b772576ab26f4634e1e6.webp",
        locality: "East Delhi",
        starting_price: "Starting ₹ 749/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/df930eebbbf6be356d00f5ebb251375542e5e856.webp",
        locality: "Rohini",
        starting_price: "Starting ₹ 699/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/57d32252bd5afeb55357eaa254d0059f164df501.webp",
        locality: "Connaught Place",
        starting_price: "Starting ₹ 729/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/29dcde8d1a5249901f6a564b5ceb8ec4e08d7af3.webp",
        locality: "Dwarka",
        starting_price: "Starting ₹ 699/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/56d65fe71462de7ff3a50dec1fcfb66324c8eb20.webp",
        locality: "Janakpuri",
        starting_price: "Starting ₹ 729/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/aeea176108292fec50e013b85efed4aec7304230.webp",
        locality: "Saket",
        starting_price: "Starting ₹ 829/month"
      }
    ],
  },
  {
    id: '5e3e77de936bc06de1f9a5e2',
    name: 'noida',
    icon: 'assets/images/city-icons/Noida.svg',
    featureImage:
      'https://img.cofynd.com/small/images/original/b4385542c0fe2b70f17e1aa859aafcc1048edfa4.webp',
    image: 'https://img.cofynd.com/small/images/original/c5d0e008c819dcbcae8319835f7e57bdd5de8ea9.webp',
    price: '1,299/* monthly',
    slug: '/virtual-office/noida',
    for_coWorking: true,
    for_office: true,
    for_coLiving: true,
    for_virtualOffice: true,
    locations: [
      {
        bgImg: "https://img.cofynd.com/small/images/original/686a85e71e4857e642dca838fbd2f3792b5f7caa.webp",
        locality: "Sector 62",
        starting_price: "Starting ₹ 749/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/36d6348c36990a3e4bd2f7b72510548142e0b7fc.webp",
        locality: "Sector 63",
        starting_price: "Starting ₹ 899/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/c7a90b341485bffe4983b772576ab26f4634e1e6.webp",
        locality: "Greater Noida",
        starting_price: "Starting ₹ 729/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/df930eebbbf6be356d00f5ebb251375542e5e856.webp",
        locality: "Noida Expressway",
        starting_price: "Starting ₹ 749/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/57d32252bd5afeb55357eaa254d0059f164df501.webp",
        locality: "Sector 16",
        starting_price: "Starting ₹ 899/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/29dcde8d1a5249901f6a564b5ceb8ec4e08d7af3.webp",
        locality: "Sector 18",
        starting_price: "Starting ₹ 749/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/56d65fe71462de7ff3a50dec1fcfb66324c8eb20.webp",
        locality: "Sector 2",
        starting_price: "Starting ₹ 699/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/aeea176108292fec50e013b85efed4aec7304230.webp",
        locality: "Sector 125",
        starting_price: "Starting ₹ 699/month"
      }
    ],
  },
  {
    name: 'ahmedabad',
    id: '5f7af1c48c4e6961990e620e',
    icon: 'assets/images/city-icons/Ahemdabad.svg',
    featureImage:
      'https://img.cofynd.com/small/images/original/e104202b84c2e70d46e52cc1eba72cbf4a06442e.webp',
    image: 'https://img.cofynd.com/small/images/original/dc5ce0f99f9d9f60dbd918cb8fcbbbf55c751802.webp',
    price: '1,699/* monthly',
    slug: '/virtual-office/ahmedabad',
    for_coWorking: true,
    for_office: false,
    for_coLiving: true,
    for_virtualOffice: true,
    locations: [
      {
        bgImg: "https://img.cofynd.com/small/images/original/686a85e71e4857e642dca838fbd2f3792b5f7caa.webp",
        locality: "Vijay Cross Road",
        starting_price: "Starting ₹ 799/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/36d6348c36990a3e4bd2f7b72510548142e0b7fc.webp",
        locality: "Makarba",
        starting_price: "Starting ₹ 699/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/c7a90b341485bffe4983b772576ab26f4634e1e6.webp",
        locality: "Vastrapur",
        starting_price: "Starting ₹ 729/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/df930eebbbf6be356d00f5ebb251375542e5e856.webp",
        locality: "Bodakdev",
        starting_price: "Starting ₹ 549/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/57d32252bd5afeb55357eaa254d0059f164df501.webp",
        locality: "Ellisbridge",
        starting_price: "Starting ₹ 699/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/29dcde8d1a5249901f6a564b5ceb8ec4e08d7af3.webp",
        locality: "Navrangpura",
        starting_price: "Starting ₹ 799/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/56d65fe71462de7ff3a50dec1fcfb66324c8eb20.webp",
        locality: "CG Road",
        starting_price: "Starting ₹ 729/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/aeea176108292fec50e013b85efed4aec7304230.webp",
        locality: "Prahlad Nagar",
        starting_price: "Starting ₹ 549/month"
      }
    ],
  },
  {
    name: 'indore',
    id: '5f60926926e9e64d7b61b41b',
    icon: 'assets/images/city-icons/Indore.svg',
    featureImage:
      'https://img.cofynd.com/small/images/original/e3535be480db4c0c4dc89131e5e255fb419bf6dd.webp',
    image: 'https://img.cofynd.com/small/images/original/dc5ce0f99f9d9f60dbd918cb8fcbbbf55c751802.webp',
    price: '1,499/* monthly',
    slug: '/virtual-office/indore',
    for_coWorking: true,
    for_office: false,
    for_coLiving: true,
    for_virtualOffice: true,
    locations: [
      {
        bgImg: "https://img.cofynd.com/small/images/original/686a85e71e4857e642dca838fbd2f3792b5f7caa.webp",
        locality: "AB Road",
        starting_price: "Starting ₹ 999/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/36d6348c36990a3e4bd2f7b72510548142e0b7fc.webp",
        locality: "LIC Colony",
        starting_price: "Starting ₹ 849/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/c7a90b341485bffe4983b772576ab26f4634e1e6.webp",
        locality: "Ratna Lok Colony",
        starting_price: "Starting ₹ 699/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/df930eebbbf6be356d00f5ebb251375542e5e856.webp",
        locality: "Ravindra Nagar",
        starting_price: "Starting ₹ 699/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/57d32252bd5afeb55357eaa254d0059f164df501.webp",
        locality: "Vijay Nagar",
        starting_price: "Starting ₹ 999/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/29dcde8d1a5249901f6a564b5ceb8ec4e08d7af3.webp",
        locality: "MG Road Indore",
        starting_price: "Starting ₹ 849/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/56d65fe71462de7ff3a50dec1fcfb66324c8eb20.webp",
        locality: "South Tukoganj",
        starting_price: "Starting ₹ 699/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/aeea176108292fec50e013b85efed4aec7304230.webp",
        locality: "Jawahar Marg",
        starting_price: "Starting ₹ 999/month"
      }
    ],
  },
  {
    name: 'chennai',
    id: '5f7410348c4e6961990e5a21',
    icon: 'assets/images/city-icons/Chennai.svg',
    featureImage:
      'https://img.cofynd.com/small/images/original/f0b047dd1147434d9853965dabb07bc33245f69d.webp',
    image: 'https://img.cofynd.com/small/images/original/18f6b59cb5f91d0ae4eb3598de16f9ecdc44b996.webp',
    price: '1,499/* monthly',
    slug: '/virtual-office/chennai',
    for_coWorking: true,
    for_office: false,
    for_coLiving: true,
    for_virtualOffice: true,
    locations: [
      {
        bgImg: "https://img.cofynd.com/small/images/original/686a85e71e4857e642dca838fbd2f3792b5f7caa.webp",
        locality: "Guindy",
        starting_price: "Starting ₹ 829/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/36d6348c36990a3e4bd2f7b72510548142e0b7fc.webp",
        locality: "Anna Nagar",
        starting_price: "Starting ₹ 749/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/c7a90b341485bffe4983b772576ab26f4634e1e6.webp",
        locality: "OMR Chennai",
        starting_price: "Starting ₹ 999/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/df930eebbbf6be356d00f5ebb251375542e5e856.webp",
        locality: "Nungambakkam",
        starting_price: "Starting ₹ 699/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/57d32252bd5afeb55357eaa254d0059f164df501.webp",
        locality: "Adyar",
        starting_price: "Starting ₹ 799/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/29dcde8d1a5249901f6a564b5ceb8ec4e08d7af3.webp",
        locality: "Velachery",
        starting_price: "Starting ₹ 829/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/56d65fe71462de7ff3a50dec1fcfb66324c8eb20.webp",
        locality: "Thoraipakkam",
        starting_price: "Starting ₹ 799/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/aeea176108292fec50e013b85efed4aec7304230.webp",
        locality: "Perumbakkam",
        starting_price: "Starting ₹ 829/month" 
      }
    ],
  },
  {
    name: 'kochi',
    id: '5f8d31a7c2502350f24fee9b',
    icon: 'assets/images/city-icons/Kochi.svg',
    featureImage:
      'https://img.cofynd.com/small/images/original/cf617e04bb2f64faa527e53434d5281331945a53.webp',
    image: 'https://img.cofynd.com/small/images/original/823b4ae8fa08975d961138f1a86a3232034b3a27.webp',
    price: '1,299/* monthly',
    slug: '/virtual-office/kochi',
    for_coWorking: true,
    for_office: false,
    for_coLiving: true,
    for_virtualOffice: true,
    locations: [
      {
        bgImg: "https://img.cofynd.com/small/images/original/686a85e71e4857e642dca838fbd2f3792b5f7caa.webp",
        locality: "Civil Lines Kochi",
        starting_price: "Starting ₹ 699/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/36d6348c36990a3e4bd2f7b72510548142e0b7fc.webp",
        locality: "Ernakulam",
        starting_price: "Starting ₹ 899/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/c7a90b341485bffe4983b772576ab26f4634e1e6.webp",
        locality: "Kadavanthara",
        starting_price: "Starting ₹ 599/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/df930eebbbf6be356d00f5ebb251375542e5e856.webp",
        locality: "MG Road Kochi",
        starting_price: "Starting ₹ 799/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/57d32252bd5afeb55357eaa254d0059f164df501.webp",
        locality: "VIP Road",
        starting_price: "Starting ₹ 599/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/29dcde8d1a5249901f6a564b5ceb8ec4e08d7af3.webp",
        locality: "Gandhi Nagar",
        starting_price: "Starting ₹ 899/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/56d65fe71462de7ff3a50dec1fcfb66324c8eb20.webp",
        locality: "Kaloor",
        starting_price: "Starting ₹ 599/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/aeea176108292fec50e013b85efed4aec7304230.webp",
        locality: "Edapally",
        starting_price: "Starting ₹ 699/month"
      }
    ],
  },
  {
    name: 'jaipur',
    id: '5f8d319fc2502350f24fee9a',
    icon: 'assets/images/city-icons/Jaipur.svg',
    featureImage:
      'https://img.cofynd.com/small/images/original/17eb5402447f7b42bb2cbe76457c106103c0b305.webp',
    image: 'https://img.cofynd.com/small/images/original/1423d6214eb380a2fece810b96d7a85bb5a763c9.webp',
    price: '1,299/* monthly',
    slug: '/virtual-office/jaipur',
    for_coWorking: true,
    for_office: false,
    for_coLiving: false,
    for_virtualOffice: true,
    locations: [
      {
        bgImg: "https://img.cofynd.com/small/images/original/686a85e71e4857e642dca838fbd2f3792b5f7caa.webp",
        locality: "Vaishali Nagar",
        starting_price: "Starting ₹ 799/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/36d6348c36990a3e4bd2f7b72510548142e0b7fc.webp",
        locality: "Indrapuri",
        starting_price: "Starting ₹ 829/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/c7a90b341485bffe4983b772576ab26f4634e1e6.webp",
        locality: "Mansarovar",
        starting_price: "Starting ₹ 999/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/df930eebbbf6be356d00f5ebb251375542e5e856.webp",
        locality: "Ganpati Nagar",
        starting_price: "Starting ₹ 799/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/57d32252bd5afeb55357eaa254d0059f164df501.webp",
        locality: "Lalkothi",
        starting_price: "Starting ₹ 699/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/29dcde8d1a5249901f6a564b5ceb8ec4e08d7af3.webp",
        locality: "Nirman Nagar",
        starting_price: "Starting ₹ 699/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/56d65fe71462de7ff3a50dec1fcfb66324c8eb20.webp",
        locality: "Subhash Nagar",
        starting_price: "Starting ₹ 829/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/aeea176108292fec50e013b85efed4aec7304230.webp",
        locality: "Shyam Nagar",
        starting_price: "Starting ₹ 799/month"
      }
    ],
  },
  {
    name: 'bhubaneswar',
    id: '5ff4367926f5cd67c919a112',
    icon: 'assets/images/city-icons/Bhubaneswar.svg',
    featureImage:
      'https://img.cofynd.com/small/images/original/94cec762a4254f033dab229559e779cc489d4021.webp',
    image: 'https://img.cofynd.com/small/images/original/25aed12998db6e7ff53ed44f09c03a8f283d65be.webp',
    price: '1,399/* monthly',
    slug: '/virtual-office/bhubaneswar',
    for_virtualOffice: true,
    for_coWorking: true,
    for_office: false,
    for_coLiving: false,
    locations: [
      {
        bgImg: "https://img.cofynd.com/small/images/original/686a85e71e4857e642dca838fbd2f3792b5f7caa.webp",
        locality: "Sastri Nagar",
        starting_price: "Starting ₹ 799/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/36d6348c36990a3e4bd2f7b72510548142e0b7fc.webp",
        locality: "Nayapalli",
        starting_price: "Starting ₹ 699/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/c7a90b341485bffe4983b772576ab26f4634e1e6.webp",
        locality: "Cuttack Road",
        starting_price: "Starting ₹ 799/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/df930eebbbf6be356d00f5ebb251375542e5e856.webp",
        locality: "Jaydev Vihar",
        starting_price: "Starting ₹ 549/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/57d32252bd5afeb55357eaa254d0059f164df501.webp",
        locality: "Delta Square",
        starting_price: "Starting ₹ 699/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/29dcde8d1a5249901f6a564b5ceb8ec4e08d7af3.webp",
        locality: "Rasulgarh",
        starting_price: "Starting ₹ 549/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/56d65fe71462de7ff3a50dec1fcfb66324c8eb20.webp",
        locality: "Saheed Nagar",
        starting_price: "Starting ₹ 799/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/aeea176108292fec50e013b85efed4aec7304230.webp",
        locality: "Khorda",
        starting_price: "Starting ₹ 599/month"
      }
    ],
  },
  {
    name: 'coimbatore',
    id: '5f9bf559c2502350f2500152',
    icon: 'assets/images/city-icons/Coimbatore.svg',
    featureImage:
      'https://img.cofynd.com/small/images/original/475b4b5ecc2f03baf8973403555fb8167ca0c4fb.webp',
    image: 'https://img.cofynd.com/small/images/original/5dcfd32bcbb2dd4ce29dc84e4fdc1f59cc8dc5df.webp',
    price: '1,499/* monthly',
    slug: '/virtual-office/coimbatore',
    for_coWorking: true,
    for_office: false,
    for_coLiving: false,
    for_virtualOffice: true,
    locations: [
      {
        bgImg: "https://img.cofynd.com/small/images/original/686a85e71e4857e642dca838fbd2f3792b5f7caa.webp",
        locality: "Balaji Avenue",
        starting_price: "Starting ₹ 799/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/36d6348c36990a3e4bd2f7b72510548142e0b7fc.webp",
        locality: "JJ Nagar",
        starting_price: "Starting ₹ 699/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/c7a90b341485bffe4983b772576ab26f4634e1e6.webp",
        locality: "KR Puram Coimbatore",
        starting_price: "Starting ₹ 799/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/df930eebbbf6be356d00f5ebb251375542e5e856.webp",
        locality: "Laxmi Nagar Coimbatore",
        starting_price: "Starting ₹ 549/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/57d32252bd5afeb55357eaa254d0059f164df501.webp",
        locality: "Nehru Nagar Coimbatore",
        starting_price: "Starting ₹ 699/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/29dcde8d1a5249901f6a564b5ceb8ec4e08d7af3.webp",
        locality: "RS Puram",
        starting_price: "Starting ₹ 549/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/56d65fe71462de7ff3a50dec1fcfb66324c8eb20.webp",
        locality: "Sai Nagar",
        starting_price: "Starting ₹ 799/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/aeea176108292fec50e013b85efed4aec7304230.webp",
        locality: "Avinashi Road",
        starting_price: "Starting ₹ 599/month"
      }
    ],
  },
  {
    name: 'chandigarh',
    id: '5f8d31c0c2502350f24fee9d',
    icon: 'assets/images/city-icons/Chandigarh.svg',
    featureImage:
      'https://img.cofynd.com/small/images/original/38b50ae2995a2bc481314a5a0c6061d3686b7ea9.webp',
    image: 'https://img.cofynd.com/small/images/original/f4fbd9878117f3063ff8ce62faf3875dcae9ca9c.webp',
    price: '1,399/* monthly',
    slug: '/virtual-office/chandigarh',
    for_coWorking: true,
    for_office: false,
    for_coLiving: true,
    for_virtualOffice: true,
    locations: [
      {
        bgImg: "https://img.cofynd.com/small/images/original/686a85e71e4857e642dca838fbd2f3792b5f7caa.webp",
        locality: "Mohali",
        starting_price: "Starting ₹ 799/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/36d6348c36990a3e4bd2f7b72510548142e0b7fc.webp",
        locality: "Phase 7 Chandigarh",
        starting_price: "Starting ₹ 699/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/c7a90b341485bffe4983b772576ab26f4634e1e6.webp",
        locality: "Madhya Marg Chandigarh",
        starting_price: "Starting ₹ 799/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/df930eebbbf6be356d00f5ebb251375542e5e856.webp",
        locality: "Sector 17c Chandigarh",
        starting_price: "Starting ₹ 549/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/57d32252bd5afeb55357eaa254d0059f164df501.webp",
        locality: "Sector 26 Chandigarh",
        starting_price: "Starting ₹ 699/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/29dcde8d1a5249901f6a564b5ceb8ec4e08d7af3.webp",
        locality: "Sector 34a Chandigarh",
        starting_price: "Starting ₹ 549/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/56d65fe71462de7ff3a50dec1fcfb66324c8eb20.webp",
        locality: "Industrial Area Phase 1",
        starting_price: "Starting ₹ 799/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/aeea176108292fec50e013b85efed4aec7304230.webp",
        locality: "Zirakpur",
        starting_price: "Starting ₹ 599/month"
      }
    ],
  },
  {
    name: 'goa',
    id: '5f9a6a18c2502350f24ffc9e',
    icon: 'assets/images/city-icons/Goa.svg',
    featureImage:
      'https://img.cofynd.com/small/images/original/96b3777e0ca0bc0eb9de06564782e1d9bc4294c6.webp',
    image: 'https://img.cofynd.com/small/images/original/5f851f16763a594095a265280834524c03d5d00e.webp',
    price: '1,299/* monthly',
    slug: '/virtual-office/goa',
    for_coWorking: true,
    for_office: false,
    for_coLiving: false,
    for_virtualOffice: true,
    locations: [
      {
        bgImg: "https://img.cofynd.com/small/images/original/686a85e71e4857e642dca838fbd2f3792b5f7caa.webp",
        locality: "Panaji",
        starting_price: "Starting ₹ 799/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/36d6348c36990a3e4bd2f7b72510548142e0b7fc.webp",
        locality: "Anjuna",
        starting_price: "Starting ₹ 699/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/c7a90b341485bffe4983b772576ab26f4634e1e6.webp",
        locality: "Santa Inez",
        starting_price: "Starting ₹ 799/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/df930eebbbf6be356d00f5ebb251375542e5e856.webp",
        locality: "Verna",
        starting_price: "Starting ₹ 549/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/57d32252bd5afeb55357eaa254d0059f164df501.webp",
        locality: "Margao",
        starting_price: "Starting ₹ 699/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/29dcde8d1a5249901f6a564b5ceb8ec4e08d7af3.webp",
        locality: "Vasco Da Gama",
        starting_price: "Starting ₹ 549/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/56d65fe71462de7ff3a50dec1fcfb66324c8eb20.webp",
        locality: "Mormugao",
        starting_price: "Starting ₹ 799/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/aeea176108292fec50e013b85efed4aec7304230.webp",
        locality: "Pernem",
        starting_price: "Starting ₹ 599/month"
      }
    ],
  },
  {
    name: 'kolkata',
    id: '5f8d3541c2502350f24feeb6',
    icon: 'assets/images/city-icons/Kolkata.svg',
    featureImage:
      'https://img.cofynd.com/small/images/original/6819f21ddcdcea7093a60817a23f4e0b90fc8ffc.webp',
    image: 'https://img.cofynd.com/small/images/original/9a5bec0d33318db752ab1310fc81869a8d8312a9.webp',
    price: '1,499/* monthly',
    slug: '/virtual-office/kolkata',
    for_coWorking: true,
    for_office: false,
    for_coLiving: false,
    for_virtualOffice: true,
    locations: [
      {
        bgImg: "https://img.cofynd.com/small/images/original/686a85e71e4857e642dca838fbd2f3792b5f7caa.webp",
        locality: "AJC Bose Road",
        starting_price: "Starting ₹ 799/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/36d6348c36990a3e4bd2f7b72510548142e0b7fc.webp",
        locality: "Bhowanipore",
        starting_price: "Starting ₹ 699/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/c7a90b341485bffe4983b772576ab26f4634e1e6.webp",
        locality: "JL Nehru Road",
        starting_price: "Starting ₹ 799/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/df930eebbbf6be356d00f5ebb251375542e5e856.webp",
        locality: "East Kolkata",
        starting_price: "Starting ₹ 549/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/57d32252bd5afeb55357eaa254d0059f164df501.webp",
        locality: "Minto Park",
        starting_price: "Starting ₹ 699/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/29dcde8d1a5249901f6a564b5ceb8ec4e08d7af3.webp",
        locality: "Park Street Kolkata",
        starting_price: "Starting ₹ 549/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/56d65fe71462de7ff3a50dec1fcfb66324c8eb20.webp",
        locality: "Kona Expressway",
        starting_price: "Starting ₹ 799/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/aeea176108292fec50e013b85efed4aec7304230.webp",
        locality: "Kalighat",
        starting_price: "Starting ₹ 599/month"
      }
    ],
  },
  {
    name: 'lucknow',
    id: '5f8d31b0c2502350f24fee9c',
    icon: 'assets/images/city-icons/Lucknow.svg',
    featureImage:
      'https://img.cofynd.com/small/images/original/19403628284170b5a9f124fefb88bf71ba4b8438.webp',
    image: 'https://img.cofynd.com/small/images/original/f6584af3ba7c349e0f3508b34d20df8d6293e373.webp',
    price: '1,299/* monthly',
    slug: '/virtual-office/lucknow',
    for_coWorking: true,
    for_office: false,
    for_coLiving: true,
    for_virtualOffice: true,
    locations: [
      {
        bgImg: "https://img.cofynd.com/small/images/original/686a85e71e4857e642dca838fbd2f3792b5f7caa.webp",
        locality: "Gomti Nagar",
        starting_price: "Starting ₹ 799/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/36d6348c36990a3e4bd2f7b72510548142e0b7fc.webp",
        locality: "Indira Nagar",
        starting_price: "Starting ₹ 699/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/c7a90b341485bffe4983b772576ab26f4634e1e6.webp",
        locality: "Vibhuti Khand",
        starting_price: "Starting ₹ 799/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/df930eebbbf6be356d00f5ebb251375542e5e856.webp",
        locality: "Aliganj",
        starting_price: "Starting ₹ 549/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/57d32252bd5afeb55357eaa254d0059f164df501.webp",
        locality: "Alambagh",
        starting_price: "Starting ₹ 699/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/29dcde8d1a5249901f6a564b5ceb8ec4e08d7af3.webp",
        locality: "Alamnagar",
        starting_price: "Starting ₹ 549/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/56d65fe71462de7ff3a50dec1fcfb66324c8eb20.webp",
        locality: "Aashiana",
        starting_price: "Starting ₹ 799/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/aeea176108292fec50e013b85efed4aec7304230.webp",
        locality: "Aishbagh",
        starting_price: "Starting ₹ 599/month"
      }
    ],
  },
  {
    name: 'guwahati',
    id: '6374c213be649f47f61efba4',
    icon: 'assets/images/city-icons/Guwahati.svg',
    image: 'https://img.cofynd.com/small/images/original/2835d2b7b2145731571046b51bb428d581d02227.webp',
    price: '1,599/* monthly',
    slug: '/virtual-office/guwahati',
    for_coWorking: true,
    for_office: false,
    for_coLiving: true,
    for_virtualOffice: true,
    locations: [
      {
        bgImg: "https://img.cofynd.com/small/images/original/686a85e71e4857e642dca838fbd2f3792b5f7caa.webp",
        locality: "Beltola Tiniali",
        starting_price: "Starting ₹ 799/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/36d6348c36990a3e4bd2f7b72510548142e0b7fc.webp",
        locality: "Birubari",
        starting_price: "Starting ₹ 699/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/c7a90b341485bffe4983b772576ab26f4634e1e6.webp",
        locality: "Dispur",
        starting_price: "Starting ₹ 799/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/df930eebbbf6be356d00f5ebb251375542e5e856.webp",
        locality: "Ganeshguri",
        starting_price: "Starting ₹ 549/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/57d32252bd5afeb55357eaa254d0059f164df501.webp",
        locality: "Lachit Nagar",
        starting_price: "Starting ₹ 699/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/29dcde8d1a5249901f6a564b5ceb8ec4e08d7af3.webp",
        locality: "Lal Ganesh",
        starting_price: "Starting ₹ 549/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/56d65fe71462de7ff3a50dec1fcfb66324c8eb20.webp",
        locality: "Uzan Bazar",
        starting_price: "Starting ₹ 799/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/aeea176108292fec50e013b85efed4aec7304230.webp",
        locality: "Rehabari",
        starting_price: "Starting ₹ 599/month"
      }
    ],
  },
  {
    name: 'dehradun',
    id: '5ff3fbd1a3304537cef8378a',
    icon: 'assets/images/city-icons/Dheradhun.svg',
    image: 'https://img.cofynd.com/small/images/original/721b4821a8354b0d2975ee1eaa23083eca55b454.webp',
    price: '1,299/* monthly',
    slug: '/virtual-office/dehradun',
    for_coWorking: true,
    for_office: false,
    for_coLiving: true,
    for_virtualOffice: true,
    locations: [
      {
        bgImg: "https://img.cofynd.com/small/images/original/686a85e71e4857e642dca838fbd2f3792b5f7caa.webp",
        locality: "Naugaon",
        starting_price: "Starting ₹ 799/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/36d6348c36990a3e4bd2f7b72510548142e0b7fc.webp",
        locality: "Dalanwala",
        starting_price: "Starting ₹ 699/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/c7a90b341485bffe4983b772576ab26f4634e1e6.webp",
        locality: "Doiwala",
        starting_price: "Starting ₹ 799/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/df930eebbbf6be356d00f5ebb251375542e5e856.webp",
        locality: "Vasant Vihar",
        starting_price: "Starting ₹ 549/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/57d32252bd5afeb55357eaa254d0059f164df501.webp",
        locality: "Doon IT Park",
        starting_price: "Starting ₹ 699/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/29dcde8d1a5249901f6a564b5ceb8ec4e08d7af3.webp",
        locality: "GMS Road",
        starting_price: "Starting ₹ 549/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/56d65fe71462de7ff3a50dec1fcfb66324c8eb20.webp",
        locality: "Ajabpur Kalan",
        starting_price: "Starting ₹ 799/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/aeea176108292fec50e013b85efed4aec7304230.webp",
        locality: "Kasturi Nagar",
        starting_price: "Starting ₹ 599/month"
      }
    ],
  },
  {
    name: 'calicut',
    id: '637ddc26ce0e0e1ae047e4c9',
    icon: 'assets/images/city-icons/Calicut.svg',
    image: 'https://img.cofynd.com/small/images/original/e99f27a6a435e083c2ba22924d75b01d7f3f36c9.webp',
    price: '1,399/* monthly',
    slug: '/virtual-office/calicut',
    for_coWorking: true,
    for_office: false,
    for_coLiving: true,
    for_virtualOffice: true,
    locations: [
      {
        bgImg: "https://img.cofynd.com/small/images/original/686a85e71e4857e642dca838fbd2f3792b5f7caa.webp",
        locality: "Kozhikode",
        starting_price: "Starting ₹ 799/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/36d6348c36990a3e4bd2f7b72510548142e0b7fc.webp",
        locality: "Manjeri",
        starting_price: "Starting ₹ 699/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/c7a90b341485bffe4983b772576ab26f4634e1e6.webp",
        locality: "Poovangal",
        starting_price: "Starting ₹ 799/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/df930eebbbf6be356d00f5ebb251375542e5e856.webp",
        locality: "West Hill",
        starting_price: "Starting ₹ 549/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/57d32252bd5afeb55357eaa254d0059f164df501.webp",
        locality: "Nadakkave",
        starting_price: "Starting ₹ 699/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/29dcde8d1a5249901f6a564b5ceb8ec4e08d7af3.webp",
        locality: "Vandipetta",
        starting_price: "Starting ₹ 549/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/56d65fe71462de7ff3a50dec1fcfb66324c8eb20.webp",
        locality: "Kuttichira",
        starting_price: "Starting ₹ 799/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/aeea176108292fec50e013b85efed4aec7304230.webp",
        locality: "Cda Colony Rd",
        starting_price: "Starting ₹ 599/month"
      }
    ],
  },
  {
    name: 'mohali',
    id: '637df6d1ce0e0e1ae047e632',
    icon: 'assets/images/city-icons/Mohali.svg',
    image: 'https://img.cofynd.com/small/images/original/e6f4a41117e094756e5b0caf2f699daa55117502.webp',
    price: '1,599/* monthly',
    slug: '/virtual-office/mohali',
    for_coWorking: true,
    for_office: false,
    for_coLiving: true,
    for_virtualOffice: true,
    locations: [
      {
        bgImg: "https://img.cofynd.com/small/images/original/686a85e71e4857e642dca838fbd2f3792b5f7caa.webp",
        locality: "Gillco Valley",
        starting_price: "Starting ₹ 799/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/36d6348c36990a3e4bd2f7b72510548142e0b7fc.webp",
        locality: "Mullanpur",
        starting_price: "Starting ₹ 699/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/c7a90b341485bffe4983b772576ab26f4634e1e6.webp",
        locality: "Sector 112",
        starting_price: "Starting ₹ 799/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/df930eebbbf6be356d00f5ebb251375542e5e856.webp",
        locality: "Sector 121",
        starting_price: "Starting ₹ 549/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/57d32252bd5afeb55357eaa254d0059f164df501.webp",
        locality: "Abhipur",
        starting_price: "Starting ₹ 699/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/29dcde8d1a5249901f6a564b5ceb8ec4e08d7af3.webp",
        locality: "Sector 127",
        starting_price: "Starting ₹ 549/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/56d65fe71462de7ff3a50dec1fcfb66324c8eb20.webp",
        locality: "Sector 74",
        starting_price: "Starting ₹ 799/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/aeea176108292fec50e013b85efed4aec7304230.webp",
        locality: "Sahibzada Ajit Singh Nagar",
        starting_price: "Starting ₹ 599/month"
      }
    ],
  },
  {
    name: 'visakhapatnam',
    id: '637f43b593d00c335537eab1',
    icon: 'https://img.cofynd.com/images/original/1090a760325acce3688aab64093263599a5f4c31.png',
    image: 'https://img.cofynd.com/small/images/original/b1f742b0f30c92c23c459a37f80c79e6340e5a01.webp',
    price: '1,499/* monthly',
    slug: '/virtual-office/visakhapatnam',
    for_coWorking: true,
    for_office: false,
    for_coLiving: true,
    for_virtualOffice: true,
    locations: [
      {
        bgImg: "https://img.cofynd.com/small/images/original/686a85e71e4857e642dca838fbd2f3792b5f7caa.webp",
        locality: "Dwaraka Nagar",
        starting_price: "Starting ₹ 799/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/36d6348c36990a3e4bd2f7b72510548142e0b7fc.webp",
        locality: "Siripuram",
        starting_price: "Starting ₹ 699/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/c7a90b341485bffe4983b772576ab26f4634e1e6.webp",
        locality: "Balaji Nagar",
        starting_price: "Starting ₹ 799/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/df930eebbbf6be356d00f5ebb251375542e5e856.webp",
        locality: "Duvvada",
        starting_price: "Starting ₹ 549/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/57d32252bd5afeb55357eaa254d0059f164df501.webp",
        locality: "Achutapuram",
        starting_price: "Starting ₹ 699/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/29dcde8d1a5249901f6a564b5ceb8ec4e08d7af3.webp",
        locality: "Anandapuram",
        starting_price: "Starting ₹ 549/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/56d65fe71462de7ff3a50dec1fcfb66324c8eb20.webp",
        locality: "Madhurawada",
        starting_price: "Starting ₹ 799/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/aeea176108292fec50e013b85efed4aec7304230.webp",
        locality: "Tarulvada",
        starting_price: "Starting ₹ 599/month"
      }
    ],
  },
  {
    id: '5fd088bb1be4d8562d3bc9be',
    name: 'faridabad',
    icon: 'assets/images/city-icons/Faridabad.svg',
    image: 'https://img.cofynd.com/small/images/original/1a6c21398d5607bf20aa8a5da5f7850283ea9b69.webp',
    price: '1,499/* monthly',
    slug: '/virtual-office/faridabad',
    for_virtualOffice: true,
    for_coWorking: true,
    for_office: false,
    for_coLiving: false,
    locations: [
      {
        bgImg: "https://img.cofynd.com/small/images/original/686a85e71e4857e642dca838fbd2f3792b5f7caa.webp",
        locality: "Sector 20a",
        starting_price: "Starting ₹ 799/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/36d6348c36990a3e4bd2f7b72510548142e0b7fc.webp",
        locality: "Mathura Road",
        starting_price: "Starting ₹ 699/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/c7a90b341485bffe4983b772576ab26f4634e1e6.webp",
        locality: "Ajit Nagar",
        starting_price: "Starting ₹ 799/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/df930eebbbf6be356d00f5ebb251375542e5e856.webp",
        locality: "Badhkal",
        starting_price: "Starting ₹ 549/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/57d32252bd5afeb55357eaa254d0059f164df501.webp",
        locality: "Ankhir",
        starting_price: "Starting ₹ 699/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/29dcde8d1a5249901f6a564b5ceb8ec4e08d7af3.webp",
        locality: "Katan Pahari",
        starting_price: "Starting ₹ 549/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/56d65fe71462de7ff3a50dec1fcfb66324c8eb20.webp",
        locality: "Dabuwa",
        starting_price: "Starting ₹ 799/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/aeea176108292fec50e013b85efed4aec7304230.webp",
        locality: "Green Fields",
        starting_price: "Starting ₹ 599/month"
      }
    ],
  },
  {
    name: 'bhopal',
    id: '6374b9a7be649f47f61efb53',
    icon: 'assets/images/city-icons/Bhopal.svg',
    image: 'https://img.cofynd.com/small/images/original/1eb0ab7baa3aa7cb31ed072e0c146a0f8daa5d76.webp',
    price: '1,499/* monthly',
    slug: '/virtual-office/bhopal',
    for_coWorking: true,
    for_office: false,
    for_coLiving: true,
    for_virtualOffice: true,
    locations: [
      {
        bgImg: "https://img.cofynd.com/small/images/original/686a85e71e4857e642dca838fbd2f3792b5f7caa.webp",
        locality: "Baghmugalia",
        starting_price: "Starting ₹ 799/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/36d6348c36990a3e4bd2f7b72510548142e0b7fc.webp",
        locality: "Bypass Road",
        starting_price: "Starting ₹ 699/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/c7a90b341485bffe4983b772576ab26f4634e1e6.webp",
        locality: "J K Road",
        starting_price: "Starting ₹ 799/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/df930eebbbf6be356d00f5ebb251375542e5e856.webp",
        locality: "Nehru Nagar",
        starting_price: "Starting ₹ 549/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/57d32252bd5afeb55357eaa254d0059f164df501.webp",
        locality: "Gulmohar Colony",
        starting_price: "Starting ₹ 699/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/29dcde8d1a5249901f6a564b5ceb8ec4e08d7af3.webp",
        locality: "Hoshangabad Road",
        starting_price: "Starting ₹ 549/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/56d65fe71462de7ff3a50dec1fcfb66324c8eb20.webp",
        locality: "Janki Nagar",
        starting_price: "Starting ₹ 799/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/aeea176108292fec50e013b85efed4aec7304230.webp",
        locality: "MP Nagar",
        starting_price: "Starting ₹ 599/month"
      }
    ],
  },
  {
    name: 'ernakulam',
    id: '637f120645b9002e72c98511',
    icon: 'assets/images/city-icons/Ernakulam.svg',
    image: 'https://img.cofynd.com/small/images/original/5162c8783f18195f28faca2affb1a85a01938dff.webp',
    price: '1,499/* monthly',
    slug: '/virtual-office/ernakulam',
    for_coWorking: true,
    for_office: false,
    for_coLiving: true,
    for_virtualOffice: true,
    locations: [
      {
        bgImg: "https://img.cofynd.com/small/images/original/686a85e71e4857e642dca838fbd2f3792b5f7caa.webp",
        locality: "Palarivattom",
        starting_price: "Starting ₹ 799/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/36d6348c36990a3e4bd2f7b72510548142e0b7fc.webp",
        locality: "Iyyattil Junction",
        starting_price: "Starting ₹ 699/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/c7a90b341485bffe4983b772576ab26f4634e1e6.webp",
        locality: "Edappally",
        starting_price: "Starting ₹ 799/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/df930eebbbf6be356d00f5ebb251375542e5e856.webp",
        locality: "Padamughal",
        starting_price: "Starting ₹ 549/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/57d32252bd5afeb55357eaa254d0059f164df501.webp",
        locality: "Kakkanad",
        starting_price: "Starting ₹ 699/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/29dcde8d1a5249901f6a564b5ceb8ec4e08d7af3.webp",
        locality: "Thrikkakara",
        starting_price: "Starting ₹ 549/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/56d65fe71462de7ff3a50dec1fcfb66324c8eb20.webp",
        locality: "Kalamassery",
        starting_price: "Starting ₹ 799/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/aeea176108292fec50e013b85efed4aec7304230.webp",
        locality: "Panampilly Nagar",
        starting_price: "Starting ₹ 599/month"
      }
    ],
  },
  {
    name: 'ludhiana',
    id: '5ff41871a3304537cef83811',
    icon: 'assets/images/city-icons/Ludhiana.svg',
    image: 'https://img.cofynd.com/small/images/original/ff4fd932f64b08dd6bb23171c5ffee026dfba945.webp',
    price: '1,599/* monthly',
    slug: '/virtual-office/ludhiana',
    for_coWorking: true,
    for_office: false,
    for_coLiving: true,
    for_virtualOffice: true,
    locations: [
      {
        bgImg: "https://img.cofynd.com/small/images/original/686a85e71e4857e642dca838fbd2f3792b5f7caa.webp",
        locality: "Pakhowal",
        starting_price: "Starting ₹ 799/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/36d6348c36990a3e4bd2f7b72510548142e0b7fc.webp",
        locality: "Jandiali",
        starting_price: "Starting ₹ 699/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/c7a90b341485bffe4983b772576ab26f4634e1e6.webp",
        locality: "Sahnewal",
        starting_price: "Starting ₹ 799/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/df930eebbbf6be356d00f5ebb251375542e5e856.webp",
        locality: "Basant City",
        starting_price: "Starting ₹ 549/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/57d32252bd5afeb55357eaa254d0059f164df501.webp",
        locality: "Manna Singh Nagar",
        starting_price: "Starting ₹ 699/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/29dcde8d1a5249901f6a564b5ceb8ec4e08d7af3.webp",
        locality: "Shastri Nagar",
        starting_price: "Starting ₹ 549/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/56d65fe71462de7ff3a50dec1fcfb66324c8eb20.webp",
        locality: "Gurdev Nagar",
        starting_price: "Starting ₹ 799/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/aeea176108292fec50e013b85efed4aec7304230.webp",
        locality: "Ferozpur road",
        starting_price: "Starting ₹ 599/month"
      }
    ],
  },
  {
    name: 'nagpur',
    id: '629b1be55428711bb84e1ef6',
    icon: 'assets/images/city-icons/Nagpur.svg',
    image: 'https://img.cofynd.com/small/images/original/780d0c285edae13efe78e5d9b6c7c44406b4fada.webp',
    price: '1,499/* monthly',
    slug: '/virtual-office/nagpur',
    for_coWorking: true,
    for_office: false,
    for_coLiving: true,
    for_virtualOffice: true,
    locations: [
      {
        bgImg: "https://img.cofynd.com/small/images/original/686a85e71e4857e642dca838fbd2f3792b5f7caa.webp",
        locality: "Tilak Nagar",
        starting_price: "Starting ₹ 799/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/36d6348c36990a3e4bd2f7b72510548142e0b7fc.webp",
        locality: "Ganesh Peth",
        starting_price: "Starting ₹ 699/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/c7a90b341485bffe4983b772576ab26f4634e1e6.webp",
        locality: "Pratap Nagar",
        starting_price: "Starting ₹ 799/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/df930eebbbf6be356d00f5ebb251375542e5e856.webp",
        locality: "Dharampeth",
        starting_price: "Starting ₹ 549/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/57d32252bd5afeb55357eaa254d0059f164df501.webp",
        locality: "Kt Nagar",
        starting_price: "Starting ₹ 699/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/29dcde8d1a5249901f6a564b5ceb8ec4e08d7af3.webp",
        locality: "Wardha Road",
        starting_price: "Starting ₹ 549/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/56d65fe71462de7ff3a50dec1fcfb66324c8eb20.webp",
        locality: "Chatrapati Nagar",
        starting_price: "Starting ₹ 799/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/aeea176108292fec50e013b85efed4aec7304230.webp",
        locality: "Shraddhanand Peth",
        starting_price: "Starting ₹ 599/month"
      }
    ],
  },
  {
    name: 'patna',
    id: '5ff41a6da3304537cef83840',
    icon: 'assets/images/city-icons/Patna.svg',
    image: 'https://img.cofynd.com/small/images/original/2979bbe58f7f280390798cf78a0d44b2635bb428.webp',
    price: '1,599/* monthly',
    slug: '/virtual-office/patna',
    for_coWorking: true,
    for_office: false,
    for_coLiving: true,
    for_virtualOffice: true,
    locations: [
      {
        bgImg: "https://img.cofynd.com/small/images/original/686a85e71e4857e642dca838fbd2f3792b5f7caa.webp",
        locality: "Nageshwar",
        starting_price: "Starting ₹ 799/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/36d6348c36990a3e4bd2f7b72510548142e0b7fc.webp",
        locality: "Bailey Road",
        starting_price: "Starting ₹ 699/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/c7a90b341485bffe4983b772576ab26f4634e1e6.webp",
        locality: "Kankarbagh",
        starting_price: "Starting ₹ 799/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/df930eebbbf6be356d00f5ebb251375542e5e856.webp",
        locality: "Boring Road",
        starting_price: "Starting ₹ 549/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/57d32252bd5afeb55357eaa254d0059f164df501.webp",
        locality: "Lohia Nagar",
        starting_price: "Starting ₹ 699/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/29dcde8d1a5249901f6a564b5ceb8ec4e08d7af3.webp",
        locality: "Rajendra Nagar",
        starting_price: "Starting ₹ 549/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/56d65fe71462de7ff3a50dec1fcfb66324c8eb20.webp",
        locality: "Gardanibagh",
        starting_price: "Starting ₹ 799/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/aeea176108292fec50e013b85efed4aec7304230.webp",
        locality: "Patna Junction",
        starting_price: "Starting ₹ 599/month"
      }
    ],
  },
  {
    name: 'raipur',
    id: '62ac2b80f1bba357d76e396e',
    icon: 'assets/images/city-icons/Raipur.svg',
    image: 'https://img.cofynd.com/small/images/original/eeaca2fbd8e29ad37b12f8c3f555a2e750c0c257.webp',
    price: '1,699/* monthly',
    slug: '/virtual-office/raipur',
    for_coWorking: true,
    for_office: false,
    for_coLiving: true,
    for_virtualOffice: true,
    locations: [
      {
        bgImg: "https://img.cofynd.com/small/images/original/686a85e71e4857e642dca838fbd2f3792b5f7caa.webp",
        locality: "Baronda Saddu",
        starting_price: "Starting ₹ 799/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/36d6348c36990a3e4bd2f7b72510548142e0b7fc.webp",
        locality: "Mowa",
        starting_price: "Starting ₹ 699/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/c7a90b341485bffe4983b772576ab26f4634e1e6.webp",
        locality: "VIP Road",
        starting_price: "Starting ₹ 799/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/df930eebbbf6be356d00f5ebb251375542e5e856.webp",
        locality: "Ring Road",
        starting_price: "Starting ₹ 549/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/57d32252bd5afeb55357eaa254d0059f164df501.webp",
        locality: "Govind Nagar",
        starting_price: "Starting ₹ 699/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/29dcde8d1a5249901f6a564b5ceb8ec4e08d7af3.webp",
        locality: "Near Vallabh Nagar",
        starting_price: "Starting ₹ 549/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/56d65fe71462de7ff3a50dec1fcfb66324c8eb20.webp",
        locality: "Indravati Colony",
        starting_price: "Starting ₹ 799/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/aeea176108292fec50e013b85efed4aec7304230.webp",
        locality: "Canal Link Road",
        starting_price: "Starting ₹ 599/month"
      }
    ],
  },
  {
    name: 'surat',
    id: '627514264f8c5a13e2207870',
    icon: 'assets/images/city-icons/Surat.svg',
    image: 'https://img.cofynd.com/small/images/original/db3c3cccefb08686ed122ac25774da855403f44a.webp',
    price: '2,999/* monthly',
    slug: '/virtual-office/surat',
    for_coWorking: true,
    for_office: false,
    for_coLiving: true,
    for_virtualOffice: true,
    locations: [
      {
        bgImg: "https://img.cofynd.com/small/images/original/686a85e71e4857e642dca838fbd2f3792b5f7caa.webp",
        locality: "Piplod",
        starting_price: "Starting ₹ 799/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/36d6348c36990a3e4bd2f7b72510548142e0b7fc.webp",
        locality: "Athwalines",
        starting_price: "Starting ₹ 699/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/c7a90b341485bffe4983b772576ab26f4634e1e6.webp",
        locality: "Ghod Dod Road",
        starting_price: "Starting ₹ 799/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/df930eebbbf6be356d00f5ebb251375542e5e856.webp",
        locality: "Surat Dumas Road",
        starting_price: "Starting ₹ 549/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/57d32252bd5afeb55357eaa254d0059f164df501.webp",
        locality: "City Light",
        starting_price: "Starting ₹ 699/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/29dcde8d1a5249901f6a564b5ceb8ec4e08d7af3.webp",
        locality: "Katargam",
        starting_price: "Starting ₹ 549/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/56d65fe71462de7ff3a50dec1fcfb66324c8eb20.webp",
        locality: "Majurgate",
        starting_price: "Starting ₹ 799/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/aeea176108292fec50e013b85efed4aec7304230.webp",
        locality: "Adajan",
        starting_price: "Starting ₹ 599/month"
      }
    ],
  },
  {
    name: 'trivandrum',
    id: '5ff41f6fa3304537cef838ae',
    icon: 'assets/images/city-icons/Trivandrum.svg',
    image: 'https://img.cofynd.com/small/images/original/c39c5074f4801f358a866452d238d7d5e58d5243.webp',
    price: '1,299/* monthly',
    slug: '/virtual-office/trivandrum',
    for_coWorking: true,
    for_office: false,
    for_coLiving: true,
    for_virtualOffice: true,
    locations: [
      {
        bgImg: "https://img.cofynd.com/small/images/original/686a85e71e4857e642dca838fbd2f3792b5f7caa.webp",
        locality: "Nettayam",
        starting_price: "Starting ₹ 799/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/36d6348c36990a3e4bd2f7b72510548142e0b7fc.webp",
        locality: "Peyad",
        starting_price: "Starting ₹ 699/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/c7a90b341485bffe4983b772576ab26f4634e1e6.webp",
        locality: "Pothencode",
        starting_price: "Starting ₹ 799/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/df930eebbbf6be356d00f5ebb251375542e5e856.webp",
        locality: "Vattiyoorkavu",
        starting_price: "Starting ₹ 549/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/57d32252bd5afeb55357eaa254d0059f164df501.webp",
        locality: "Kazahakkoottam",
        starting_price: "Starting ₹ 699/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/29dcde8d1a5249901f6a564b5ceb8ec4e08d7af3.webp",
        locality: "Balaramapuram",
        starting_price: "Starting ₹ 549/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/56d65fe71462de7ff3a50dec1fcfb66324c8eb20.webp",
        locality: "Kowdiar",
        starting_price: "Starting ₹ 799/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/aeea176108292fec50e013b85efed4aec7304230.webp",
        locality: "Nalachira",
        starting_price: "Starting ₹ 599/month"
      }
    ],
  },
  {
    name: 'vadodara',
    id: '6303634467182f4d76d4c756',
    icon: 'assets/images/city-icons/Vadodara.svg',
    image: 'https://img.cofynd.com/small/images/original/3b872109e7da1d47edde7534394d757456417cfa.webp',
    price: '2,499/* monthly',
    slug: '/virtual-office/vadodara',
    for_coWorking: true,
    for_office: false,
    for_coLiving: true,
    for_virtualOffice: true,
    locations: [
      {
        bgImg: "https://img.cofynd.com/small/images/original/686a85e71e4857e642dca838fbd2f3792b5f7caa.webp",
        locality: "Akshar Chowk",
        starting_price: "Starting ₹ 799/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/36d6348c36990a3e4bd2f7b72510548142e0b7fc.webp",
        locality: "Alkapuri",
        starting_price: "Starting ₹ 699/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/c7a90b341485bffe4983b772576ab26f4634e1e6.webp",
        locality: "Ampad",
        starting_price: "Starting ₹ 799/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/df930eebbbf6be356d00f5ebb251375542e5e856.webp",
        locality: "Bhayli",
        starting_price: "Starting ₹ 549/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/57d32252bd5afeb55357eaa254d0059f164df501.webp",
        locality: "Makarpura",
        starting_price: "Starting ₹ 699/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/29dcde8d1a5249901f6a564b5ceb8ec4e08d7af3.webp",
        locality: "Nizampura",
        starting_price: "Starting ₹ 549/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/56d65fe71462de7ff3a50dec1fcfb66324c8eb20.webp",
        locality: "Gotri Road",
        starting_price: "Starting ₹ 799/month"
      },
      {
        bgImg: "https://img.cofynd.com/small/images/original/aeea176108292fec50e013b85efed4aec7304230.webp",
        locality: "Soma Talav",
        starting_price: "Starting ₹ 599/month"
      }
    ],
  }
];

export function cityUrl(slug: string) {
  return `/virtual-office-in-${slug}`;
}

export function findCityBySlug(slug: string) {
  const normalized = slug.trim().toLowerCase();
  const city =
    (
    CITIES.find((c) => c.slug === normalized) ||
    CITIES.find((c) => c.aliases?.some((a) => a.toLowerCase() === normalized))
  );

  return city;
}

