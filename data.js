const data = [
  {
    id: 1,
    title: "1BHK Apartment",
    category: "Apartments",
    price: 9000,
    location: "Madhapur",
    rating: 4.5,
    available: true,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
    description: "Spacious 1BHK ideal for bachelors or small families."
  },
  {
    id: 2,
    title: "2BHK Flat",
    category: "Apartments",
    price: 14000,
    location: "Gachibowli",
    rating: 4.6,
    available: true,
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
    description: "Spacious flat with balcony."
  },
  {
    id: 3,
    title: "Studio Room",
    category: "Apartments",
    price: 6500,
    location: "Kondapur",
    rating: 4.3,
    available: false,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    description: "Compact studio near IT park."
  },
  {
    id: 4,
    title: "PG for Boys",
    category: "Apartments",
    price: 4500,
    location: "Kukatpally",
    rating: 4.2,
    available: true,
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
    description: "Fully furnished PG with food."
  },
  {
    id: 5,
    title: "PG for Girls",
    category: "Apartments",
    price: 5000,
    location: "Ameerpet",
    rating: 4.7,
    available: true,
    image: "https://images.unsplash.com/photo-1554995207-c18c203602cb",
    description: "Safe and secure PG for girls."
  },
  {
    id: 6,
    title: "Office Space",
    category: "Apartments",
    price: 18000,
    location: "Hitech City",
    rating: 4.4,
    available: true,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    description: "Commercial office for startups."
  },
  {
    id: 7,
    title: "2BHK Luxury Apartment",
    category: "Apartments",
    price: 16000,
    location: "Jubilee Hills",
    rating: 4.9,
    available: true,
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
    description: "Modern 2BHK apartment with modular kitchen and parking."
  },
 

  // vehicles
  {
    id: 101,
    title: "Scooter",
    category: "Vehicles",
    price: 300,
    location: "Secunderabad",
    rating: 4.2,
    available: true,
    image: "https://images.hindustantimes.com/auto/img/2023/10/29/1600x900/Honda_SC_e_concept_1698617170361_1698617175494.jfif",
    description: "Gearless scooter suitable for city travel."
  },
  {
    id: 102,
    title: "Motor Bike",
    category: "Vehicles",
    price: 500,
    location: "Kompally",
    rating: 4.6,
    available: true,
    image: "https://static1.topspeedimages.com/wordpress/wp-content/uploads/2023/09/damon-hypersport-premier-9.jpg",
    description: "Powerful bike for daily commute and travel."
  },
  {
    id: 103,
    title: "Hatchback Car",
    category: "Vehicles",
    price: 1200,
    location: "Uppal",
    rating: 4.4,
    available: true,
    image: "https://www.kbb.com/wp-content/uploads/2019/12/02-2019-Toyota-Corolla-Hatchback-Exterior-KBB-e1664837712936.jpg",
    description: "Compact car ideal for small families."
  },
  {
    id: 104,
    title: "Sedan Car",
    category: "Vehicles",
    price: 1600,
    location: "Shamshabad",
    rating: 4.7,
    available: true,
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
    description: "Comfortable sedan for long-distance travel."
  },
  {
    id: 105,
    title: "SUV",
    category: "Vehicles",
    price: 2200,
    location: "Mehdipatnam",
    rating: 4.8,
    available: true,
    image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c",
    description: "Spacious SUV for family and off-road trips."
  },
  {
    id: 106,
    title: "Electric Bike",
    category: "Vehicles",
    price: 400,
    location: "Attapur",
    rating: 4.3,
    available: true,
    image: "https://images.unsplash.com/photo-1621993202323-f438eec934ff",
    description: "Eco-friendly electric bike for city use."
  },

  // furniture
  {
    id: 201,
    title: "Queen Size Bed",
    category: "Furniture",
    price: 900,
    location: "Tolichowki",
    rating: 4.6,
    available: true,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
    description: "Comfortable wooden bed with sturdy frame."
  },
  {
    id: 202,
    title: "3-Seater Sofa",
    category: "Furniture",
    price: 1200,
    location: "Sainikpuri",
    rating: 4.7,
    available: true,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc",
    description: "Soft cushioned sofa for living room."
  },
  {
    id: 203,
    title: "Dining Table (4 Seater)",
    category: "Furniture",
    price: 1000,
    location: "Alwal",
    rating: 4.5,
    available: true,
    image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
    description: "Wooden dining table with 4 chairs."
  },
  {
    id: 204,
    title: "Wooden Wardrobe",
    category: "Furniture",
    price: 800,
    location: "Malkajgiri",
    rating: 4.4,
    available: true,
    image: "https://images.unsplash.com/photo-1598300056393-4aac492f4344",
    description: "Spacious wardrobe with multiple shelves."
  },
  {
    id: 205,
    title: "Study Table",
    category: "Furniture",
    price: 450,
    location: "Nagole",
    rating: 4.3,
    available: true,
    image: "https://images.unsplash.com/photo-1592078615290-033ee584e267",
    description: "Compact study table for work and study."
  },
  {
    id: 206,
    title: "Office Chair",
    category: "Furniture",
    price: 350,
    location: "Kapra",
    rating: 4.2,
    available: true,
    image: "https://images.unsplash.com/photo-1578898887932-dce23a595ad4",
    description: "Ergonomic chair with adjustable height."
  },
  {
    id: 207,
    title: "Coffee Table",
    category: "Furniture",
    price: 300,
    location: "Vanasthalipuram",
    rating: 4.1,
    available: true,
    image: "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4",
    description: "Modern coffee table for living room."
  },

  // tools
  {
    id: 301,
    title: "Drill Machine",
    category: "Tools",
    price: 350,
    location: "Nacharam",
    rating: 4.5,
    available: true,
    image: "https://tse2.mm.bing.net/th/id/OIP.73cF-y_OSNSHjcecPekbFQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "Electric drill machine for home and repair work."
  },
  {
    id: 302,
    title: "Tool Kit",
    category: "Tools",
    price: 200,
    location: "Boduppal",
    rating: 4.4,
    available: true,
    image: "https://tse2.mm.bing.net/th/id/OIP.rcUoTXBD0edh4SausWh_FgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "Complete toolkit with spanners, screwdrivers and pliers."
  },
  {
    id: 303,
    title: "Hammer",
    category: "Tools",
    price: 80,
    location: "Hayathnagar",
    rating: 4.1,
    available: true,
    image: "https://tse3.mm.bing.net/th/id/OIP.EUo_XimOC61dCinDoKB7owHaE6?rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "Heavy-duty hammer for construction use."
  },
  {
    id: 304,
    title: "Electric Cutter",
    category: "Tools",
    price: 400,
    location: "Ghatkesar",
    rating: 4.6,
    available: true,
    image: "https://th.bing.com/th/id/R.9288701c19e39cad2b95534ea00d39ec?rik=9yK%2fw02kvt08WQ&riu=http%3a%2f%2fc.shld.net%2frpx%2fi%2fs%2fi%2fspin%2fimage%2fspin_prod_881031312%3fwid%3d800%26hei%3d800%26op_sharpen%3d1&ehk=FWI8W6LqvQ88cvRWvzPsPpjiR%2f5qsIsPbjrDedl4pOI%3d&risl=&pid=ImgRaw&r=0",
    description: "Electric cutting machine for metal and wood."
  },
  {
    id: 305,
    title: "Measuring Tape",
    category: "Tools",
    price: 50,
    location: "Peerzadiguda",
    rating: 4.0,
    available: true,
    image: "https://c.shld.net/rpx/i/s/i/spin/image/spin_prod_953067512??hei=64&wid=64&qlt=50",
    description: "Flexible measuring tape for accurate measurements."
  },
  {
    id: 306,
    title: "Aluminium Ladder",
    category: "Tools",
    price: 300,
    location: "Bowenpally",
    rating: 4.5,
    available: true,
    image: "https://www.alutech.co.id/wp-content/uploads/2023/08/plantex-secura-aluminium-folding-6-step-ladder-for-home-with-safe-hand-rail-6-wide-step-ladder-orange-and-silver-product-images-orvasuahhzw-p596833793-0-202212311850.jpg",
    description: "Foldable ladder for household and maintenance work."
  },
  {
    id: 307,
    title: "Welding Machine",
    category: "Tools",
    price: 600,
    location: "Balanagar",
    rating: 4.7,
    available: true,
    image: "https://m.media-amazon.com/images/I/71J23-5GOpL._AC_SL1500_.jpg",
    description: "Portable welding machine for metal works."
  },
  {
    id: 308,
    title: "Paint Spray Gun",
    category: "Tools",
    price: 250,
    location: "Patancheru",
    rating: 4.3,
    available: true,
    image: "https://m.media-amazon.com/images/I/71UK04923UL.jpg",
    description: "Spray gun for smooth and even paint finish."
  },
  {
    id: 309,
    title: "Angle Grinder",
    category: "Tools",
    price: 300,
    location: "Medchal",
    rating: 4.6,
    available: true,
    image: "https://m.media-amazon.com/images/I/61UUkcXoDsL._AC_SL1440_.jpg",
    description: "Angle grinder for cutting and polishing."
  },

  // study tools
  {
    id: 401,
    title: "Laptop",
    category: "StudyTools",
    price: 1200,
    location: "Hitech City",
    rating: 4.8,
    available: true,
    image: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f",
    description: "Laptop suitable for coding and online classes."
  },
  {
    id: 402,
    title: "Study Table",
    category: "StudyTools",
    price: 450,
    location: "Madhapur",
    rating: 4.5,
    available: true,
    image: "https://images.unsplash.com/photo-1519682337058-a94d519337bc",
    description: "Wooden study table with spacious surface."
  },
  {
    id: 403,
    title: "Study Chair",
    category: "StudyTools",
    price: 300,
    location: "Gachibowli",
    rating: 4.4,
    available: true,
    image: "https://images.unsplash.com/photo-1588072432836-e10032774350",
    description: "Comfortable chair for long study hours."
  },
  {
    id: 404,
    title: "Reference Books Set",
    category: "StudyTools",
    price: 250,
    location: "Ameerpet",
    rating: 4.3,
    available: true,
    image: "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6",
    description: "Academic and competitive exam reference books."
  },
  {
    id: 405,
    title: "Study Lamp",
    category: "StudyTools",
    price: 150,
    location: "Kukatpally",
    rating: 4.2,
    available: true,
    image: "https://images.unsplash.com/photo-1581090700227-1e37b190418e",
    description: "LED desk lamp for night study."
  },
  {
    id: 406,
    title: "Whiteboard",
    category: "StudyTools",
    price: 200,
    location: "Kondapur",
    rating: 4.4,
    available: true,
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    description: "Whiteboard for notes and practice."
  },
  {
    id: 407,
    title: "Notebook Set",
    category: "StudyTools",
    price: 100,
    location: "Miyapur",
    rating: 4.1,
    available: true,
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
    description: "Ruled notebooks for daily study."
  },
  {
    id: 408,
    title: "Headphones",
    category: "StudyTools",
    price: 300,
    location: "Manikonda",
    rating: 4.6,
    available: true,
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2",
    description: "Noise-isolating headphones for focus."
  },
  {
    id: 409,
    title: "Stationery Kit",
    category: "StudyTools",
    price: 120,
    location: "Jubilee Hills",
    rating: 4.0,
    available: true,
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    description: "Pens, pencils, markers and essentials."
  },

  // appliances
  {
    id: 501,
    title: "Washing Machine",
    category: "Appliances",
    price: 600,
    location: "Banjara Hills",
    rating: 4.6,
    available: true,
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952",
    description: "Fully automatic washing machine for daily use."
  },
  {
    id: 502,
    title: "Refrigerator",
    category: "Appliances",
    price: 800,
    location: "Begumpet",
    rating: 4.7,
    available: true,
    image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db",
    description: "Double-door fridge with energy saving mode."
  },
  {
    id: 503,
    title: "Smart LED TV",
    category: "Appliances",
    price: 700,
    location: "Secunderabad",
    rating: 4.5,
    available: true,
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1",
    description: "43-inch smart TV with OTT apps support."
  },
  {
    id: 504,
    title: "Air Conditioner",
    category: "Appliances",
    price: 1500,
    location: "Kokapet",
    rating: 4.8,
    available: true,
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
    description: "1.5 Ton split AC with fast cooling."
  },
  {
    id: 505,
    title: "Microwave Oven",
    category: "Appliances",
    price: 400,
    location: "Nanakramguda",
    rating: 4.4,
    available: true,
    image: "https://rukminim2.flixcart.com/image/2462/2462/xif0q/microwave-new/o/k/g/-original-imahcrhkpz8szcfw.jpeg?q=90",
    description: "Convection microwave for quick cooking."
  },
  {
    id: 506,
    title: "Water Purifier",
    category: "Appliances",
    price: 350,
    location: "Uppal",
    rating: 4.3,
    available: true,
    image: "https://images.unsplash.com/photo-1621768216002-5ac171876625",
    description: "RO + UV purifier for safe drinking water."
  },
  {
    id: 507,
    title: "Ceiling Fan",
    category: "Appliances",
    price: 250,
    location: "LB Nagar",
    rating: 4.2,
    available: true,
    image: "https://images.unsplash.com/photo-1586208958839-06c17cacdf08",
    description: "High-speed ceiling fan with low power usage."
  },
  {
    id: 508,
    title: "Water Geyser",
    category: "Appliances",
    price: 450,
    location: "Dilsukhnagar",
    rating: 4.5,
    available: true,
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95",
    description: "Instant hot water geyser for bathrooms."
  }
];

