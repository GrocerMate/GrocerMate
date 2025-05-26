const grocers = [
  {
    id: "fresh-farm",
    name: "Fresh Farm Market (Sample)",
    suburb: "Richmond",
    description: "Locally sourced fruits and vegetables. Serving Richmond for 10+ years.",
    contact: "0412 345 678",
    image: "/images/grocers/fresh-farm-banner.png",
    logo: "/images/fresh-farm-market.png",
    products: [
      {
        "name": "Lemon Each",
        "category": "Fruits & Vegetables",
        "price": 1.19,
        "image": "/images/products/lemon-each.png"
      },
      {
        "name": "Red Seedless Grapes Loose",
        "category": "Fruits & Vegetables",
        "price": 2.25,
        "image": "/images/products/Red Seedless Grapes Loose.png"
      },
      {
        "name": "Strawberries 250g",
        "category": "Fruits & Vegetables",
        "price": 4.69,
        "image": "/images/products/Strawberries 250g.png"
      },
      {
        "name": "Triple Cream Brie Cheese 200g",
        "category": "Eggs,Milk & Dairy",
        "price": 4.99,
        "image": "/images/products/Triple Cream Brie Cheese 200g.png"
      },
      {
        "name": "Double Cream Camembert 200g",
        "category": "Eggs,Milk & Dairy",
        "price": 4.99,
        "image": "/images/products/Double Cream Camembert 200g.png"
      },
      {
        "name": "Smooth Blue Vein Cheese 200g",
        "category": "Eggs,Milk & Dairy",
        "price": 5.49,
        "image": "/images/products/Smooth Blue Vein Cheese 200g.png"
      },
      {
        "name": "Smoked Salmon 200g",
        "category": "Meat & Poultry",
        "price": 9.99,
        "image": "/images/products/Smoked Salmon 200g.png"
      },
      {
        "name": "Wagyu Beef Burgers 400g",
        "category": "Meat & Poultry",
        "price": 7.99,
        "image": "/images/products/Wagyu Beef Burgers 400g.png"
      },
      {
        "name": "Pork, Pepper and Oregano Gourmet Sausages 500g",
        "category": "Meat & Poultry",
        "price": 7.99,
        "image": "/images/products/Pork, Pepper and Oregano Gourmet Sausages 500g.png"
      }
    ]
  },
  {
    id: "local-organics",
    name: "Local Organics (Sample)",
    suburb: "Carlton",
    description: "Your neighborhood organic shop. All products are chemical-free and handpicked.",
    contact: "0433 876 543",
    image: "/images/grocers/local-organics-banner.png",
    logo: "/images/local-organics.png",
    products: [
      {
        "name": "Garlic Loose",
        "category": "Fruits & Vegetables",
        "price": 1.8,
        "image": "/images/products/Garlic Loose.png"
      },
      {
        "name": "Ginger Loose",
        "category": "Fruits & Vegetables",
        "price": 3.0,
        "image": "/images/products/Ginger Loose.png"
      },
      {
        "name": "Gold Kiwifruit Loose",
        "category": "Fruits & Vegetables",
        "price": 1.35,
        "image": "/images/products/Gold Kiwifruit Loose.png"
      },
      {
        "name": "Smoked Cheese 200g",
        "category": "Eggs,Milk & Dairy",
        "price": 4.69,
        "image": "/images/products/Smoked Cheese 200g.png"
      },
      {
        "name": "Goat's Cheese Barrel Spreadable 150g",
        "category": "Eggs,Milk & Dairy",
        "price": 3.99,
        "image": "/images/products/Goat's Cheese Barrel Spreadable 150g.png"
      },
      {
        "name": "Goats Milk Cheese Slices 150g",
        "category": "Eggs,Milk & Dairy",
        "price": 4.49,
        "image": "/images/products/Goats Milk Cheese Slices 150g.png"
      },
      {
        "name": "Chicken, Fetta & Parsley Sausages 500g",
        "category": "Meat & Poultry",
        "price": 7.99,
        "image": "/images/products/Chicken, Fetta & Parsley Sausages 500g.png"
      },
      {
        "name": "5 Star Beef Mince 500g",
        "category": "Meat & Poultry",
        "price": 8.99,
        "image": "/images/products/5 Star Beef Mince 500g.png"
      },
      {
        "name": "Pork Mince 500g",
        "category": "Meat & Poultry",
        "price": 4.69,
        "image": "/images/products/Pork Mince 500g.png"
      }
    ]
  },
  {
  id: "fruiterers-wife",
  name: "The Fruiterer's Wife",
  suburb: "Port Melbourne",
  contact: "0402 623 707",
  logo: "/images/the-fruiterers-wife-logo.png", // save the logo as this path
  banner: "/images/grocers/fruiterers-wife-banner.png", // optional custom banner
  description: "Your one-stop destination for fresh fruit, deli, cheese, juice bar, and quality Australian produce. Run by a passionate husband and wife team.",
  address: "37-53 Crockford Street, Port Melbourne, VIC 3207",
  openingHours: [
    "Monday – Sunday: 7:00 AM – 7:00 PM"
  ],
  products: [
    {
        "name": "Garlic Loose",
        "category": "Fruits & Vegetables",
        "price": 1.8,
        "image": "/images/products/Garlic Loose.png"
      },
      {
        "name": "Ginger Loose",
        "category": "Fruits & Vegetables",
        "price": 3.0,
        "image": "/images/products/Ginger Loose.png"
      },
      {
        "name": "Gold Kiwifruit Loose",
        "category": "Fruits & Vegetables",
        "price": 1.35,
        "image": "/images/products/Gold Kiwifruit Loose.png"
      },
      {
        "name": "Smoked Cheese 200g",
        "category": "Eggs,Milk & Dairy",
        "price": 4.69,
        "image": "/images/products/Smoked Cheese 200g.png"
      },
      {
        "name": "Goat's Cheese Barrel Spreadable 150g",
        "category": "Eggs,Milk & Dairy",
        "price": 3.99,
        "image": "/images/products/Goat's Cheese Barrel Spreadable 150g.png"
      },
      {
        "name": "Goats Milk Cheese Slices 150g",
        "category": "Eggs,Milk & Dairy",
        "price": 4.49,
        "image": "/images/products/Goats Milk Cheese Slices 150g.png"
      },
      {
        "name": "Chicken, Fetta & Parsley Sausages 500g",
        "category": "Meat & Poultry",
        "price": 7.99,
        "image": "/images/products/Chicken, Fetta & Parsley Sausages 500g.png"
      },
      {
        "name": "5 Star Beef Mince 500g",
        "category": "Meat & Poultry",
        "price": 8.99,
        "image": "/images/products/5 Star Beef Mince 500g.png"
      },
      {
        "name": "Pork Mince 500g",
        "category": "Meat & Poultry",
        "price": 4.69,
        "image": "/images/products/Pork Mince 500g.png"
      }
  ]
}

  
];

export default grocers;
