const baseProducts = [
  {
    "name": "Lemon Each" + " (Sample)",
    "category": "Fruits & Vegetables",
    "price": 1.19,
    "image": "/images/products/lemon-each.png"
  },
  {
    "name": "Red Seedless Grapes Loose" + " (Sample)",
    "category": "Fruits & Vegetables",
    "price": 2.25,
    "image": "/images/products/Red Seedless Grapes Loose.png"
  },
  {
    "name": "Strawberries 250g" + " (Sample)",
    "category": "Fruits & Vegetables",
    "price": 4.69,
    "image": "/images/products/Strawberries 250g.png"
  },
  {
    "name": "Garlic Loose"+ " (Sample)",
    "category": "Fruits & Vegetables",
    "price": 1.8,
    "image": "/images/products/Garlic Loose.png"
  },
  {
    "name": "Ginger Loose"+ " (Sample)",
    "category": "Fruits & Vegetables",
    "price": 3.0,
    "image": "/images/products/Ginger Loose.png"
  },
  {
    "name": "Gold Kiwifruit Loose"+ " (Sample)",
    "category": "Fruits & Vegetables",
    "price": 1.35,
    "image": "/images/products/Gold Kiwifruit Loose.png"
  },
  {
    "name": "Gold Sweet Potatoes Loose"+ " (Sample)",
    "category": "Fruits & Vegetables",
    "price": 1.57,
    "image": "/images/products/Gold Sweet Potatoes Loose.png"
  },
  {
    "name": "Gourmet Tomatoes 500g"+ " (Sample)",
    "category": "Fruits & Vegetables",
    "price": 4.49,
    "image": "/images/products/Gourmet Tomatoes 500g.png"
  },
  {
    "name": "Gourmet Tomatoes Loose"+ " (Sample)",
    "category": "Fruits & Vegetables",
    "price": 0.91,
    "image": "/images/products/Gourmet Tomatoes Loose.png"
  },
  {
    "name": "Granny Smith Apples 1kg"+ " (Sample)",
    "category": "Fruits & Vegetables",
    "price": 4.99,
    "image": "/images/products/Granny Smith Apples 1kg.png"
  },
  {
    "name": "Granny Smith Apples Loose"+ " (Sample)",
    "category": "Fruits & Vegetables",
    "price": 0.85,
    "image": "/images/products/Granny Smith Apples Loose.png"
  },
  {
    "name": "Green Capsicum Loose"+ " (Sample)",
    "category": "Fruits & Vegetables",
    "price": 1.75,
    "image": "/images/products/Green Capsicum Loose.png"
  },
  {
    "name": "Green Kiwifruit 8 Pack"+ " (Sample)",
    "category": "Fruits & Vegetables",
    "price": 5.49,
    "image": "/images/products/Green Kiwifruit 8 Pack.png"
  },
  {
    "name": "Hass Avocado Each"+ " (Sample)",
    "category": "Fruits & Vegetables",
    "price": 2.99,
    "image": "/images/products/Hass Avocado Each.png"
  },
  {
    "name": "Iceberg Bagged Lettuce Each"+ " (Sample)",
    "category": "Fruits & Vegetables",
    "price": 4.49
  },
  {
    "name": "Imperial Mandarins Loose"+ " (Sample)",
    "category": "Fruits & Vegetables",
    "price": 0.36
  },
  {
    "name": "Jalapeno Chillies 80g"+ " (Sample)",
    "category": "Fruits & Vegetables",
    "price": 2.99
  },
  {
    "name": "Kale Bunch"+ " (Sample)",
    "category": "Fruits & Vegetables",
    "price": 2.49
  },
  {
    "name": "Kanzi Apples 800g"+ " (Sample)",
    "category": "Fruits & Vegetables",
    "price": 4.49
  },
  {
    "name": "Kent Pumpkins Loose"+ " (Sample)",
    "category": "Fruits & Vegetables",
    "price": 9.96
  },
  {
    "name": "Lebanese Cucumbers Loose"+ " (Sample)",
    "category": "Fruits & Vegetables",
    "price": 1.68
  },
  {
    "name": "Leek Each"+ " (Sample)",
    "category": "Fruits & Vegetables",
    "price": 2.69
  },
  {
    "name": "Lemons 5 Pack"+ " (Sample)",
    "category": "Fruits & Vegetables",
    "price": 3.79
  },
  {
    "name": "Lime Each"+ " (Sample)",
    "category": "Fruits & Vegetables",
    "price": 0.99
  },
  {
    "name": "Mandarins 1kg"+ " (Sample)",
    "category": "Fruits & Vegetables",
    "price": 4.49
  },
  {
    "name": "Mexican Style Salad Kit 400g",
    "category": "Fruits & Vegetables",
    "price": 4.99
  },
  {
    "name": "Microwave Potatoes 500g",
    "category": "Fruits & Vegetables",
    "price": 2.49
  },
  {
    "name": "Mini Capsicums 175g",
    "category": "Fruits & Vegetables",
    "price": 4.49
  },
  {
    "name": "Mini Roma Tomatoes 250g",
    "category": "Fruits & Vegetables",
    "price": 3.29
  },
  {
    "name": "Mint Bunch",
    "category": "Fruits & Vegetables",
    "price": 2.99
  },
  {
    "name": "Navel Oranges 5 Pack",
    "category": "Fruits & Vegetables",
    "price": 6.99
  },
  {
    "name": "Navel Oranges Loose",
    "category": "Fruits & Vegetables",
    "price": 0.9
  },
  {
    "name": "Pak Choy Each",
    "category": "Fruits & Vegetables",
    "price": 2.49
  },
  {
    "name": "Passionfruit 6 Pack",
    "category": "Fruits & Vegetables",
    "price": 6.99
  },
  {
    "name": "Afourer Mandarins 750g",
    "category": "Fruits & Vegetables",
    "price": 4.99
  },
  {
    "name": "Asian Style Salad Bowl 230g",
    "category": "Fruits & Vegetables",
    "price": 4.99
  },
  {
    "name": "Asian Style Salad Kit 350g",
    "category": "Fruits & Vegetables",
    "price": 4.99
  },
  {
    "name": "Asparagus Bunch",
    "category": "Fruits & Vegetables",
    "price": 3.49
  },
  {
    "name": "Baby Carrots 500g",
    "category": "Fruits & Vegetables",
    "price": 1.49
  },
  {
    "name": "Baby Cos Lettuce 2 Pack",
    "category": "Fruits & Vegetables",
    "price": 2.69
  },
  {
    "name": "Baby Leaf Blend 300g",
    "category": "Fruits & Vegetables",
    "price": 3.99
  },
  {
    "name": "Baby Red Potatoes 1kg",
    "category": "Fruits & Vegetables",
    "price": 3.99
  },
  {
    "name": "Baby Spinach & Rocket Blend 120g",
    "category": "Fruits & Vegetables",
    "price": 1.99
  },
  {
    "name": "Baby Spinach 120g",
    "category": "Fruits & Vegetables",
    "price": 1.99
  },
  {
    "name": "Baby White Potatoes 1kg",
    "category": "Fruits & Vegetables",
    "price": 3.99
  },
  {
    "name": "Basil Bunch",
    "category": "Fruits & Vegetables",
    "price": 2.99
  },
  {
    "name": "White Flat Mushrooms 375g",
    "category": "Fruits & Vegetables",
    "price": 5.99
  },
  {
    "name": "Bellino Tomatoes 200g",
    "category": "Fruits & Vegetables",
    "price": 2.99
  },
  {
    "name": "Birdseye Chillies 20g",
    "category": "Fruits & Vegetables",
    "price": 2.99
  },
  {
    "name": "Black Seedless Grapes Loose",
    "category": "Fruits & Vegetables",
    "price": 2.25
  },
  {
    "name": "Blackberries 125g",
    "category": "Fruits & Vegetables",
    "price": 5.69
  },
  {
    "name": "Blueberries 125g",
    "category": "Fruits & Vegetables",
    "price": 6.99
  },
  {
    "name": "Broccoli Loose",
    "category": "Fruits & Vegetables",
    "price": 2.04
  },
  {
    "name": "Broccolini Bunch",
    "category": "Fruits & Vegetables",
    "price": 2.99
  },
  {
    "name": "Brown Onions 1kg",
    "category": "Fruits & Vegetables",
    "price": 2.99
  },
  {
    "name": "Brown Onions Loose",
    "category": "Fruits & Vegetables",
    "price": 0.63
  },
  {
    "name": "Brushed Potatoes 3kg",
    "category": "Fruits & Vegetables",
    "price": 5.99
  },
  {
    "name": "Brushed Potatoes Loose",
    "category": "Fruits & Vegetables",
    "price": 0.74
  },
  {
    "name": "Brussels Sprouts 500g",
    "category": "Fruits & Vegetables",
    "price": 4.99
  },
  {
    "name": "Butternut Pumpkins Loose",
    "category": "Fruits & Vegetables",
    "price": 4.98
  },
  {
    "name": "Cabbage Half",
    "category": "Fruits & Vegetables",
    "price": 3.49
  },
  {
    "name": "Capsicums 750g",
    "category": "Fruits & Vegetables",
    "price": 5.99
  },
  {
    "name": "Carrots 1kg",
    "category": "Fruits & Vegetables",
    "price": 1.99
  },
  {
    "name": "Cauliflower Each",
    "category": "Fruits & Vegetables",
    "price": 4.49
  },
  {
    "name": "Cavendish Bananas Loose",
    "category": "Fruits & Vegetables",
    "price": 0.81
  },
  {
    "name": "Cayenne Chillies 50g",
    "category": "Fruits & Vegetables",
    "price": 2.99
  },
  {
    "name": "Celery Bunch",
    "category": "Fruits & Vegetables",
    "price": 3.49
  },
  {
    "name": "Cherry Tomatoes 250g",
    "category": "Fruits & Vegetables",
    "price": 2.79
  },
  {
    "name": "Cherry Truss Tomatoes 200g",
    "category": "Fruits & Vegetables",
    "price": 2.99
  },
  {
    "name": "Chilli Lime Crunch Salad Kit 350g",
    "category": "Fruits & Vegetables",
    "price": 4.99
  },
  {
    "name": "Cobbettes Corn 400g",
    "category": "Fruits & Vegetables",
    "price": 4.49
  },
  {
    "name": "Cocktail Truss Tomatoes 250g",
    "category": "Fruits & Vegetables",
    "price": 3.99
  },
  {
    "name": "Coleslaw 250g",
    "category": "Fruits & Vegetables",
    "price": 1.99
  },
  {
    "name": "Continental Cucumber Each",
    "category": "Fruits & Vegetables",
    "price": 1.49
  },
  {
    "name": "Continental Parsley Bunch",
    "category": "Fruits & Vegetables",
    "price": 2.99
  },
  {
    "name": "Coriander Bunch",
    "category": "Fruits & Vegetables",
    "price": 2.99
  },
  {
    "name": "Crunchy Salad Kit 450g",
    "category": "Fruits & Vegetables",
    "price": 3.49
  },
  {
    "name": "Cut Butternut Pumpkins Loose",
    "category": "Fruits & Vegetables",
    "price": 2.09
  },
  {
    "name": "Cut Kent Pumpkins Loose",
    "category": "Fruits & Vegetables",
    "price": 2.09
  },
  {
    "name": "Dragon Fruit Each",
    "category": "Fruits & Vegetables",
    "price": 4.99
  },
  {
    "name": "Duo Capsicums 375g",
    "category": "Fruits & Vegetables",
    "price": 4.99
  },
  {
    "name": "Eggplant Loose",
    "category": "Fruits & Vegetables",
    "price": 4.0
  },
  {
    "name": "Figs 300g",
    "category": "Fruits & Vegetables",
    "price": 4.49
  },
  {
    "name": "Pears 1kg",
    "category": "Fruits & Vegetables",
    "price": 3.49
  },
  {
    "name": "Persimmon Each",
    "category": "Fruits & Vegetables",
    "price": 2.49
  },
  {
    "name": "Pineapple Each",
    "category": "Fruits & Vegetables",
    "price": 4.99
  },
  {
    "name": "Pink Lady Apples 1kg",
    "category": "Fruits & Vegetables",
    "price": 5.49
  },
  {
    "name": "Pink Lady Apples Loose",
    "category": "Fruits & Vegetables",
    "price": 1.1
  },
  {
    "name": "Plums 1kg",
    "category": "Fruits & Vegetables",
    "price": 2.99
  },
  {
    "name": "Plums Loose",
    "category": "Fruits & Vegetables",
    "price": 0.39
  },
  {
    "name": "Pomegranate Each",
    "category": "Fruits & Vegetables",
    "price": 4.49
  },
  {
    "name": "Prepacked Beetroot 250g",
    "category": "Fruits & Vegetables",
    "price": 2.49
  },
  {
    "name": "Raspberries 125g",
    "category": "Fruits & Vegetables",
    "price": 4.49
  },
  {
    "name": "Red Apples 1kg",
    "category": "Fruits & Vegetables",
    "price": 3.99
  },
  {
    "name": "Red Capsicum Loose",
    "category": "Fruits & Vegetables",
    "price": 2.12
  },
  {
    "name": "Red Onions Loose",
    "category": "Fruits & Vegetables",
    "price": 1.0
  },
  {
    "name": "Red Papaya Each",
    "category": "Fruits & Vegetables",
    "price": 4.49
  },
  {
    "name": "Rocket Bagged 120g",
    "category": "Fruits & Vegetables",
    "price": 1.99
  },
  {
    "name": "Rockit Apples 1kg",
    "category": "Fruits & Vegetables",
    "price": 5.99
  },
  {
    "name": "Rockmelon Each",
    "category": "Fruits & Vegetables",
    "price": 4.99
  },
  {
    "name": "Roma Tomatoes 480g",
    "category": "Fruits & Vegetables",
    "price": 5.49
  },
  {
    "name": "Rosemary 10g",
    "category": "Fruits & Vegetables",
    "price": 2.99
  },
  {
    "name": "Royal Gala Apples 1kg",
    "category": "Fruits & Vegetables",
    "price": 2.99
  },
  {
    "name": "Royal Gala Apples Loose",
    "category": "Fruits & Vegetables",
    "price": 0.48
  },
  {
    "name": "Salad Leaf Mix 300g",
    "category": "Fruits & Vegetables",
    "price": 3.99
  },
  {
    "name": "Salad Mix 120g",
    "category": "Fruits & Vegetables",
    "price": 1.99
  },
  {
    "name": "Shredded Iceberg Lettuce 200g",
    "category": "Fruits & Vegetables",
    "price": 1.99
  },
  {
    "name": "White Sliced Mushrooms 200g",
    "category": "Fruits & Vegetables",
    "price": 3.49
  },
  {
    "name": "White Sliced Mushrooms 500g",
    "category": "Fruits & Vegetables",
    "price": 6.49
  },
  {
    "name": "Snow Peas 250g",
    "category": "Fruits & Vegetables",
    "price": 5.99
  },
  {
    "name": "Spring Onion Bunch",
    "category": "Fruits & Vegetables",
    "price": 1.99
  },
  {
    "name": "Spudlite Potatoes 1.5kg",
    "category": "Fruits & Vegetables",
    "price": 4.99
  },
  {
    "name": "Strawberries 500g",
    "category": "Fruits & Vegetables",
    "price": 6.99
  },
  {
    "name": "Tiny Toms Tomatoes 125g",
    "category": "Fruits & Vegetables",
    "price": 3.69
  },

  {
    "name": "Truss Tomatoes 500g",
    "category": "Fruits & Vegetables",
    "price": 4.99
  },
  {
    "name": "Truss Tomatoes Loose",
    "category": "Fruits & Vegetables",
    "price": 1.12
  },
  {
    "name": "Washed Potatoes Loose",
    "category": "Fruits & Vegetables",
    "price": 0.56
  },
  {
    "name": "Washed Red Potatoes 2kg",
    "category": "Fruits & Vegetables",
    "price": 6.99
  },
  {
    "name": "Washed White Potatoes 2kg",
    "category": "Fruits & Vegetables",
    "price": 6.99
  },
  {
    "name": "Watermelon Loose",
    "category": "Fruits & Vegetables",
    "price": 26.32
  },
  {
    "name": "White Seedless Grapes Loose",
    "category": "Fruits & Vegetables",
    "price": 2.25
  },
  {
    "name": "William Pears Loose",
    "category": "Fruits & Vegetables",
    "price": 0.8
  },
  {
    "name": "Zucchini 500g",
    "category": "Fruits & Vegetables",
    "price": 3.49
  },
  {
    "name": "Gold Kiwifruit 5Pack",
    "category": "Fruits & Vegetables",
    "price": 6.99
  },
  {
    "name": "Fresh & Fast Stir Fry 400g",
    "category": "Fruits & Vegetables",
    "price": 2.99
  },
  {
    "name": "Bean Sprouts 250g",
    "category": "Fruits & Vegetables",
    "price": 2.29
  },
  {
    "name": "Beans 375g",
    "category": "Fruits & Vegetables",
    "price": 3.99
  },
  {
    "name": "Mashed Potato 400g",
    "category": "Fruits & Vegetables",
    "price": 4.49
  },
  {
    "name": "Cut Watermelon Loose",
    "category": "Fruits & Vegetables",
    "price": 5.92
  },
  {
    "name": "Red Onions 1kg",
    "category": "Fruits & Vegetables",
    "price": 4.49
  },
  {
    "name": "Green Goddess Salad Mini Kit 150g",
    "category": "Fruits & Vegetables",
    "price": 2.99
  },
  {
    "name": "Living Herbs Chives",
    "category": "Fruits & Vegetables",
    "price": 2.99
  },
  {
    "name": "Living Herbs Dill",
    "category": "Fruits & Vegetables",
    "price": 2.99
  },
  {
    "name": "Triple Cream Brie Cheese 200g"+ " (Sample)",
    "category": "Eggs,Milk & Dairy",
    "price": 4.99,
    "image": "/images/products/Triple Cream Brie Cheese 200g.png"
  },
  {
    "name": "Double Cream Camembert 200g"+ " (Sample)",
    "category": "Eggs,Milk & Dairy",
    "price": 4.99,
    "image": "/images/products/Double Cream Camembert 200g.png"
  },
  {
    "name": "Smooth Blue Vein Cheese 200g"+ " (Sample)",
    "category": "Eggs,Milk & Dairy",
    "price": 5.49,
    "image": "/images/products/Smooth Blue Vein Cheese 200g.png"
  },
  {
    "name": "Smoked Cheese 200g"+ " (Sample)",
    "category": "Eggs,Milk & Dairy",
    "price": 4.69,
    "image": "/images/products/Smoked Cheese 200g.png"
  },
  {
    "name": "Goat's Cheese Barrel Spreadable 150g"+ " (Sample)",
    "category": "Eggs,Milk & Dairy",
    "price": 3.99,
    "image": "/images/products/Goat's Cheese Barrel Spreadable 150g.png"
  },
  {
    "name": "Goats Milk Cheese Slices 150g"+ " (Sample)",
    "category": "Eggs,Milk & Dairy",
    "price": 4.49,
    "image": "/images/products/Goats Milk Cheese Slices 150g.png"
  },
  {
    "name": "Swiss Cheese Slices 200g"+ " (Sample)",
    "category": "Eggs,Milk & Dairy",
    "price": 4.49
  },
  {
    "name": "Gouda Slices 200g"+ " (Sample)",
    "category": "Eggs,Milk & Dairy",
    "price": 4.49
  },
  {
    "name": "Sliced Maasdam Cheese 200g"+ " (Sample)",
    "category": "Eggs,Milk & Dairy",
    "price": 4.49
  },
  {
    "name": "Goat Cheese Original 110g"+ " (Sample)",
    "category": "Eggs,Milk & Dairy",
    "price": 3.99
  },
  {
    "name": "Maasdam Portion 260g"+ " (Sample)",
    "category": "Eggs,Milk & Dairy",
    "price": 4.99
  },
  {
    "name": "Gorgonzola Dolce Cheese 200g"+ " (Sample)",
    "category": "Eggs,Milk & Dairy",
    "price": 5.49
  },
  {
    "name": "Grana Padano Flaked 125g"+ " (Sample)",
    "category": "Eggs,Milk & Dairy",
    "price": 4.49
  },
  {
    "name": "Grana Padano Grated Cheese 150g"+ " (Sample)",
    "category": "Eggs,Milk & Dairy",
    "price": 4.49
  },
  {
    "name": "Grana Padano Wedge 250g"+ " (Sample)",
    "category": "Eggs,Milk & Dairy",
    "price": 8.29
  },
  {
    "name": "Creamed Rice Vanilla Flavoured 430g"+ " (Sample)",
    "category": "Eggs,Milk & Dairy",
    "price": 1.69
  },
  {
    "name": "Vanilla Yoghurt 700g"+ " (Sample)",
    "category": "Eggs,Milk & Dairy",
    "price": 7.49
  },
  {
    "name": "Manchego 150g"+ " (Sample)",
    "category": "Eggs,Milk & Dairy",
    "price": 6.29
  },
  {
    "name": "Club Cheddar Cheese Original 235g"+ " (Sample)",
    "category": "Eggs,Milk & Dairy",
    "price": 4.99
  },
  {
    "name": "Protein Yogurt Vanilla 160g"+ " (Sample)",
    "category": "Eggs,Milk & Dairy",
    "price": 1.99
  },
  {
    "name": "UK Vintage Cheddar Cheese 200g"+ " (Sample)",
    "category": "Eggs,Milk & Dairy",
    "price": 4.49
  },
  {
    "name": "UK Red Leicester 200g",
    "category": "Eggs,Milk & Dairy",
    "price": 4.49
  },
  {
    "name": "Full Cream Milk 2L",
    "category": "Eggs,Milk & Dairy",
    "price": 2.99
  },
  {
    "name": "Light Milk 2L",
    "category": "Eggs,Milk & Dairy",
    "price": 2.99
  },
  {
    "name": "Whipped Cream 250g",
    "category": "Eggs,Milk & Dairy",
    "price": 5.29
  },
  {
    "name": "Chocolate Stampede 12 Pack",
    "category": "Eggs,Milk & Dairy",
    "price": 5.39
  },
  {
    "name": "Full Cream Milk 3L",
    "category": "Eggs,Milk & Dairy",
    "price": 4.35
  },
  {
    "name": "Light Thickened Cream 300ml",
    "category": "Eggs,Milk & Dairy",
    "price": 2.79
  },
  {
    "name": "Vanilla Yogurt 1kg",
    "category": "Eggs,Milk & Dairy",
    "price": 3.89
  },
  {
    "name": "Vanilla Custard 1kg",
    "category": "Eggs,Milk & Dairy",
    "price": 2.49
  },
  {
    "name": "Cultured Buttermilk 600ml",
    "category": "Eggs,Milk & Dairy",
    "price": 2.39
  },
  {
    "name": "A2 Light Milk 2L",
    "category": "Eggs,Milk & Dairy",
    "price": 6.89
  },
  {
    "name": "A2 Full Cream Milk 2L",
    "category": "Eggs,Milk & Dairy",
    "price": 6.89
  },
  {
    "name": "Full Cream Lactose Free Light Long Life Milk 1L",
    "category": "Eggs,Milk & Dairy",
    "price": 1.89
  },
  {
    "name": "String Cheese Streamers 8 Pack 160g",
    "category": "Eggs,Milk & Dairy",
    "price": 4.29
  },
  {
    "name": "Organic Natural Yogurt 1kg",
    "category": "Eggs,Milk & Dairy",
    "price": 5.99
  },
  {
    "name": "Iced Coffee Flavoured Milk 2L",
    "category": "Eggs,Milk & Dairy",
    "price": 4.49
  },
  {
    "name": "Unsalted Butter 500g",
    "category": "Eggs,Milk & Dairy",
    "price": 6.99
  },
  {
    "name": "Salted Butter 500g",
    "category": "Eggs,Milk & Dairy",
    "price": 6.99
  },
  {
    "name": "Smooth Ricotta 375g",
    "category": "Eggs,Milk & Dairy",
    "price": 3.29
  },
  {
    "name": "Oat Milk 1L",
    "category": "Eggs,Milk & Dairy",
    "price": 1.95
  },
  {
    "name": "Greek Style Pot Set Yogurt 1kg",
    "category": "Eggs,Milk & Dairy",
    "price": 5.99
  },
  {
    "name": "Marinated Fetta 350g",
    "category": "Eggs,Milk & Dairy",
    "price": 6.49
  },
  {
    "name": "Cage Eggs 600g",
    "category": "Eggs,Milk & Dairy",
    "price": 5.29
  },
  {
    "name": "Full Cream Milk 1L",
    "category": "Eggs,Milk & Dairy",
    "price": 1.55
  },
  {
    "name": "Light Milk 1L",
    "category": "Eggs,Milk & Dairy",
    "price": 1.55
  },
  {
    "name": "Spreadable Dairy Blend 500g",
    "category": "Eggs,Milk & Dairy",
    "price": 4.99
  },
  {
    "name": "Nuttelex Original Spread 375g",
    "category": "Eggs,Milk & Dairy",
    "price": 3.49
  },
  {
    "name": "Aged Cheddar Cheese 36 Months 200g",
    "category": "Eggs,Milk & Dairy",
    "price": 4.49
  },
  {
    "name": "Lactose Free Milk 1L",
    "category": "Eggs,Milk & Dairy",
    "price": 2.89
  },
  {
    "name": "Soy Milk 1L",
    "category": "Eggs,Milk & Dairy",
    "price": 4.49
  },
  {
    "name": "Salted Butter 250g",
    "category": "Eggs,Milk & Dairy",
    "price": 3.69
  },
  {
    "name": "Cream Cheese Block 250g",
    "category": "Eggs,Milk & Dairy",
    "price": 2.99
  },
  {
    "name": "Chicken Pesto Penne 1.1kg",
    "category": "Eggs,Milk & Dairy",
    "price": 10.99
  },
  {
    "name": "Spreadable Cream Cheese 250g",
    "category": "Eggs,Milk & Dairy",
    "price": 2.59
  },
  {
    "name": "Iced Coffee Double Espresso 750ml",
    "category": "Eggs,Milk & Dairy",
    "price": 4.19
  },
  {
    "name": "Brie 500g",
    "category": "Eggs,Milk & Dairy",
    "price": 10.99
  },
  {
    "name": "Lactose Free Full Cream Milk 2L",
    "category": "Eggs,Milk & Dairy",
    "price": 5.49
  },
  {
    "name": "Passionfruit Yogurt 170g",
    "category": "Eggs,Milk & Dairy",
    "price": 1.99
  },
  {
    "name": "Real Fruit Yogurt 12 Pack 95g",
    "category": "Eggs,Milk & Dairy",
    "price": 4.99
  },
  {
    "name": "Colby Cheese and Rice Crackers 4 Pack 100g",
    "category": "Eggs,Milk & Dairy",
    "price": 3.99
  },
  {
    "name": "Cheesy String Sticks 8 Pack 168g",
    "category": "Eggs,Milk & Dairy",
    "price": 3.79
  },
  {
    "name": "Organic Full Cream Milk 2L",
    "category": "Eggs,Milk & Dairy",
    "price": 4.49
  },
  {
    "name": "French Vanilla Yoghurt 900g",
    "category": "Eggs,Milk & Dairy",
    "price": 5.49
  },
  {
    "name": "Rice Pudding Vanilla Bean 2 Pack 170g",
    "category": "Eggs,Milk & Dairy",
    "price": 3.39
  },
  {
    "name": "Organic Soy Milk 1L",
    "category": "Eggs,Milk & Dairy",
    "price": 1.95
  },
  {
    "name": "Kids Vanilla Yoghurt 140g",
    "category": "Eggs,Milk & Dairy",
    "price": 1.99
  },
  {
    "name": "Kids Strawberry Yoghurt 140g",
    "category": "Eggs,Milk & Dairy",
    "price": 1.99
  },
  {
    "name": "Butter Chicken 350g",
    "category": "Eggs,Milk & Dairy",
    "price": 6.99
  },
  {
    "name": "Protein Yogurt Strawberry 160g",
    "category": "Eggs,Milk & Dairy",
    "price": 1.99
  },
  {
    "name": "No Added Sugar Passionfruit Yogurt 700g",
    "category": "Eggs,Milk & Dairy",
    "price": 3.99
  },
  {
    "name": "Traditional Ricotta in Basket 500g",
    "category": "Eggs,Milk & Dairy",
    "price": 5.29
  },
  {
    "name": "Butter Chicken 350g",
    "category": "Eggs,Milk & Dairy",
    "price": 11.49
  },
  {
    "name": "Heart Active Milk 1L",
    "category": "Eggs,Milk & Dairy",
    "price": 3.89
  },
  {
    "name": "Greek Style Natural Yoghurt 930g",
    "category": "Eggs,Milk & Dairy",
    "price": 5.99
  },
  {
    "name": "Apricot & Almond Cream Cheese 200g",
    "category": "Eggs,Milk & Dairy",
    "price": 3.89
  },
  {
    "name": "Sweet Chilli Cream Cheese 200g",
    "category": "Eggs,Milk & Dairy",
    "price": 3.89
  },
  {
    "name": "Long Life Skim Milk 1L",
    "category": "Eggs,Milk & Dairy",
    "price": 1.59
  },
  {
    "name": "Long Life Light Milk 1L",
    "category": "Eggs,Milk & Dairy",
    "price": 1.59
  },
  {
    "name": "Long Life Full Cream Milk 1L",
    "category": "Eggs,Milk & Dairy",
    "price": 1.59
  },
  {
    "name": "Mini Dutch Pancakes 250g",
    "category": "Eggs,Milk & Dairy",
    "price": 4.49
  },
  {
    "name": "Probiotic Milk Drink 5 Pack 65ml",
    "category": "Eggs,Milk & Dairy",
    "price": 3.19
  },
  {
    "name": "Brie 125g",
    "category": "Eggs,Milk & Dairy",
    "price": 2.69
  },
  {
    "name": "Camembert Cheese 125g",
    "category": "Eggs,Milk & Dairy",
    "price": 2.69
  },
  {
    "name": "Tasty Cheese Block 250g",
    "category": "Eggs,Milk & Dairy",
    "price": 5.29
  },
  {
    "name": "Protein Yogurt Salted Caramel 160g",
    "category": "Eggs,Milk & Dairy",
    "price": 1.99
  },
  {
    "name": "Greek Style Yogurt Natural Pot Set 2kg",
    "category": "Eggs,Milk & Dairy",
    "price": 10.99
  },
  {
    "name": "Sliced Butterkase Cheese 200g",
    "category": "Eggs,Milk & Dairy",
    "price": 4.49
  },
  {
    "name": "Farmhouse Gold Full Cream Milk 1.5L",
    "category": "Eggs,Milk & Dairy",
    "price": 4.39
  },
  {
    "name": "Parmesan Cheese Block 200g",
    "category": "Eggs,Milk & Dairy",
    "price": 6.29
  },
  {
    "name": "Spaghetti Bolognese 350g",
    "category": "Eggs,Milk & Dairy",
    "price": 6.29
  },
  {
    "name": "Stampede Chocolate Dairy Dessert 140g",
    "category": "Eggs,Milk & Dairy",
    "price": 1.99
  },
  {
    "name": "Vanilla Custard Pouch 70g",
    "category": "Eggs,Milk & Dairy",
    "price": 1.49
  },
  {
    "name": "Milo Pouch 150g",
    "category": "Eggs,Milk & Dairy",
    "price": 1.89
  },
  {
    "name": "Vanilla Bean Greek Style Yogurt 4 x 115g",
    "category": "Eggs,Milk & Dairy",
    "price": 3.99
  },
  {
    "name": "Dark Cherry Greek Style Yogurt 4 x 115g",
    "category": "Eggs,Milk & Dairy",
    "price": 3.99
  },
  {
    "name": "Chipotle Chicken Burrito Bowl 450g",
    "category": "Eggs,Milk & Dairy",
    "price": 7.99
  },
  {
    "name": "Creamy Vanilla Yogurt 990g",
    "category": "Eggs,Milk & Dairy",
    "price": 5.99
  },
  {
    "name": "Blissful Berry Yogurt 990g",
    "category": "Eggs,Milk & Dairy",
    "price": 5.99
  },
  {
    "name": "Vintage Cheese Block 500g",
    "category": "Eggs,Milk & Dairy",
    "price": 6.99
  },
  {
    "name": "Shredded Tasty Cheese 500g",
    "category": "Eggs,Milk & Dairy",
    "price": 7.49
  },
  {
    "name": "Pizza Shredded Cheese 500g",
    "category": "Eggs,Milk & Dairy",
    "price": 6.79
  },
  {
    "name": "Tasty Cheese Slices 500g",
    "category": "Eggs,Milk & Dairy",
    "price": 6.99
  },
  {
    "name": "Vintage Cheese Slices 250g",
    "category": "Eggs,Milk & Dairy",
    "price": 5.49
  },
  {
    "name": "Light Tasty Cheese Block 500g",
    "category": "Eggs,Milk & Dairy",
    "price": 6.99
  },
  {
    "name": "Colby Cheese Block 500g",
    "category": "Eggs,Milk & Dairy",
    "price": 6.99
  },
  {
    "name": "Light Tasty Shredded Cheese 500g",
    "category": "Eggs,Milk & Dairy",
    "price": 6.49
  },
  {
    "name": "Light Tasty Cheese Slices 500g",
    "category": "Eggs,Milk & Dairy",
    "price": 7.49
  },
  {
    "name": "Colby Cheese Slices 500g",
    "category": "Eggs,Milk & Dairy",
    "price": 7.49
  },
  {
    "name": "Mozzarella Shredded Cheese 500g",
    "category": "Eggs,Milk & Dairy",
    "price": 6.79
  },
  {
    "name": "Light Sandwich Slices 432g",
    "category": "Eggs,Milk & Dairy",
    "price": 3.79
  },
  {
    "name": "Original Sandwich Slices 432g",
    "category": "Eggs,Milk & Dairy",
    "price": 3.79
  },
  {
    "name": "Special Fried Rice 600g",
    "category": "Eggs,Milk & Dairy",
    "price": 6.99
  },
  {
    "name": "Tasty Shredded Cheese 250g",
    "category": "Eggs,Milk & Dairy",
    "price": 4.99
  },
  {
    "name": "Tasty Cheese Slices 250g",
    "category": "Eggs,Milk & Dairy",
    "price": 5.49
  },
  {
    "name": "Salt Reduced Butter Spread 375g",
    "category": "Eggs,Milk & Dairy",
    "price": 7.49
  },
  {
    "name": "Fresh Lasagne Sheets 7 Pack 375g",
    "category": "Eggs,Milk & Dairy",
    "price": 3.69
  },
  {
    "name": "Barista Oat Milk 1L",
    "category": "Eggs,Milk & Dairy",
    "price": 2.99
  },
  {
    "name": "Marinated Goat Cheese 350g",
    "category": "Eggs,Milk & Dairy",
    "price": 10.99
  },
  {
    "name": "Shredded Parmesan Cheese 250g",
    "category": "Eggs,Milk & Dairy",
    "price": 5.49
  },
  {
    "name": "High Protein Chocolate Pudding 170g",
    "category": "Eggs,Milk & Dairy",
    "price": 2.49
  },
  {
    "name": "Organic Salted Butter 250g",
    "category": "Eggs,Milk & Dairy",
    "price": 4.79
  },
  {
    "name": "Light Sour Cream 300g",
    "category": "Eggs,Milk & Dairy",
    "price": 3.19
  },
  {
    "name": "Sweet Crepes 8 Pack 480g",
    "category": "Eggs,Milk & Dairy",
    "price": 4.99
  },
  {
    "name": "Pulled Beef With Penne 1.1kg",
    "category": "Eggs,Milk & Dairy",
    "price": 10.99
  },
  {
    "name": "Pot Set Greek Style Yogurt 170g",
    "category": "Eggs,Milk & Dairy",
    "price": 1.69
  },
  {
    "name": "Bocconcini 220g",
    "category": "Eggs,Milk & Dairy",
    "price": 4.49
  },
  {
    "name": "Tasty Cheese & Crackers 50g",
    "category": "Eggs,Milk & Dairy",
    "price": 1.79
  },
  {
    "name": "Chicken & Bacon Macaroni Cheese 1.1kg",
    "category": "Eggs,Milk & Dairy",
    "price": 10.99
  },
  {
    "name": "Fruit Swirl Blueberry Yogurt 700g",
    "category": "Eggs,Milk & Dairy",
    "price": 4.89
  },
  {
    "name": "Ash Brie 125g",
    "category": "Eggs,Milk & Dairy",
    "price": 3.19
  },
  {
    "name": "Slightly Salted Spreadable 375g",
    "category": "Eggs,Milk & Dairy",
    "price": 7.69
  },
  {
    "name": "Halloumi Cheese 225g",
    "category": "Eggs,Milk & Dairy",
    "price": 4.99
  },
  {
    "name": "Fruit Swirl Mango & Blood Orange Yogurt 700g",
    "category": "Eggs,Milk & Dairy",
    "price": 4.89
  },
  {
    "name": "Lactose Free Thickened Cream 300ml",
    "category": "Eggs,Milk & Dairy",
    "price": 4.09
  },
  {
    "name": "Skim Milk 2L",
    "category": "Eggs,Milk & Dairy",
    "price": 2.99
  },
  {
    "name": "Vanilla Protein Yogurt Pouch 150g",
    "category": "Eggs,Milk & Dairy",
    "price": 2.19
  },
  {
    "name": "Mixed Berries Protein Yogurt Pouch 150g",
    "category": "Eggs,Milk & Dairy",
    "price": 2.19
  },
  {
    "name": "Beef Lasagne 1.2kg",
    "category": "Eggs,Milk & Dairy",
    "price": 7.99
  },
  {
    "name": "Pork & Beef Spaghetti Meatballs 1.1kg",
    "category": "Eggs,Milk & Dairy",
    "price": 10.99
  },
  {
    "name": "Stone Baked BBQ Chicken & Bacon Pizza 490g",
    "category": "Eggs,Milk & Dairy",
    "price": 5.99
  },
  {
    "name": "Pasture Raised Free Range Eggs 700g",
    "category": "Eggs,Milk & Dairy",
    "price": 8.29
  },
  {
    "name": "Salted Butter 375g",
    "category": "Eggs,Milk & Dairy",
    "price": 6.69
  },  
  {
    "name": "Smoked Salmon 200g"+ " (Sample)",
    "category": "Meat & Poultry",
    "price": 9.99,
    "image": "/images/products/Smoked Salmon 200g.png"
  },
  {
    "name": "Wagyu Beef Burgers 400g"+ " (Sample)",
    "category": "Meat & Poultry",
    "price": 7.99,
    "image": "/images/products/Wagyu Beef Burgers 400g.png"
  },
  {
    "name": "Pork, Pepper and Oregano Gourmet Sausages 500g"+ " (Sample)",
    "category": "Meat & Poultry",
    "price": 7.99,
    "image": "/images/products/Pork, Pepper and Oregano Gourmet Sausages 500g.png"
  },
  {
    "name": "Chicken, Fetta & Parsley Sausages 500g"+ " (Sample)",
    "category": "Meat & Poultry",
    "price": 7.99,
    "image": "/images/products/Chicken, Fetta & Parsley Sausages 500g.png"
  },
  {
    "name": "5 Star Beef Mince 500g"+ " (Sample)",
    "category": "Meat & Poultry",
    "price": 8.99,
    "image": "/images/products/5 Star Beef Mince 500g.png"
  },
  {
    "name": "Pork Mince 500g"+ " (Sample)",
    "category": "Meat & Poultry",
    "price": 4.69,
    "image": "/images/products/Pork Mince 500g.png"
  },
  {
    "name": "RSPCA Approved Chicken Thigh Bulk"+ " (Sample)",
    "category": "Meat & Poultry",
    "price": 15.03,
    "image": "/images/products/RSPCA Approved Chicken Thigh Bulk.png"
  },
  {
    "name": "Marinated Chicken Roasting Pieces"+ " (Sample)",
    "category": "Meat & Poultry",
    "price": 12.58,
    "image": "/images/products/Marinated Chicken Roasting Pieces.png"
  },
  {
    "name": "Chicken Drumsticks Bulk Pack 2kg"+ " (Sample)",
    "category": "Meat & Poultry",
    "price": 7.39
  },
  {
    "name": "3 Star Beef Mince 500g"+ " (Sample)",
    "category": "Meat & Poultry",
    "price": 5.99
  },
  {
    "name": "Boneless Chicken Kiev Creamy Garlic 700g"+ " (Sample)",
    "category": "Meat & Poultry",
    "price": 7.99
  },
  {
    "name": "Hot Dog Frankfurts 500g"+ " (Sample)",
    "category": "Meat & Poultry",
    "price": 2.99
  },
  {
    "name": "Cocktail Frankfurts 500g"+ " (Sample)",
    "category": "Meat & Poultry",
    "price": 2.99
  },
  {
    "name": "RSPCA Approved Chicken Wings Bulk 2kg"+ " (Sample)",
    "category": "Meat & Poultry",
    "price": 8.79
  },
  {
    "name": "Beef Porterhouse Steak"+ " (Sample)",
    "category": "Meat & Poultry",
    "price": 20.49
  },
  {
    "name": "RSPCA Approved Marinated Whole Chicken with BBQ Seasoning"+ " (Sample)",
    "category": "Meat & Poultry",
    "price": 12.01
  },
  {
    "name": "Free Range Fresh Whole Chicken"+ " (Sample)",
    "category": "Meat & Poultry",
    "price": 10.18
  },
  {
    "name": "Free Range Marinated Chicken Breast Fillets"+ " (Sample)",
    "category": "Meat & Poultry",
    "price": 9.5
  },
  {
    "name": "BBQ Pork Scotch Fillet Steak Honey & Pepper 400g"+ " (Sample)",
    "category": "Meat & Poultry",
    "price": 7.99
  },
  {
    "name": "Pork and Beef Meatballs 420g"+ " (Sample)",
    "category": "Meat & Poultry",
    "price": 5.49
  },
  {
    "name": "Short Cut Bacon Rindless 175g"+ " (Sample)",
    "category": "Meat & Poultry",
    "price": 3.49
  },
  {
    "name": "Corned Beef Silverside"+ " (Sample)",
    "category": "Meat & Poultry",
    "price": 14.22
  },
  {
    "name": "RSPCA Approved Chicken Breast Fillets Bulk Pack"+ " (Sample)",
    "category": "Meat & Poultry",
    "price": 15.17
  },
  {
    "name": "Boneless Pork Leg Roast"+ " (Sample)",
    "category": "Meat & Poultry",
    "price": 15.98
  },
  {
    "name": "2 Star Beef Mince 500g"+ " (Sample)",
    "category": "Meat & Poultry",
    "price": 5.79
  },
  {
    "name": "Pork Fillet"+ " (Sample)",
    "category": "Meat & Poultry",
    "price": 7.98
  },
  {
    "name": "Pork Loin Chops"+ " (Sample)",
    "category": "Meat & Poultry",
    "price": 6.88
  },
  {
    "name": "Streaky Bacon 200g"+ " (Sample)",
    "category": "Meat & Poultry",
    "price": 4.99
  },
  {
    "name": "Chorizo Twin Pack 220g"+ " (Sample)",
    "category": "Meat & Poultry",
    "price": 4.49
  },
  {
    "name": "Lamb Leg Rolled Boneless"+ " (Sample)",
    "category": "Meat & Poultry",
    "price": 31.57
  },
  {
    "name": "3 Star Beef Mince"+ " (Sample)",
    "category": "Meat & Poultry",
    "price": 19.93
  },
  {
    "name": "Middle Bacon Rindless 500g"+ " (Sample)",
    "category": "Meat & Poultry",
    "price": 7.99
  },
  {
    "name": "Beef Sizzle Steak"+ " (Sample)",
    "category": "Meat & Poultry",
    "price": 10.8
  },
  {
    "name": "Pork Belly"+ " (Sample)",
    "category": "Meat & Poultry",
    "price": 16.62
  },
  {
    "name": "Lamb BBQ Chops"+ " (Sample)",
    "category": "Meat & Poultry",
    "price": 15.99
  },
  {
    "name": "Lamb Loin Chops"+ " (Sample)",
    "category": "Meat & Poultry",
    "price": 13.63
  },
  {
    "name": "Rosemary & Mint Lamb Leg Steaks"+ " (Sample)",
    "category": "Meat & Poultry",
    "price": 13.68
  },
  {
    "name": "Triple Smoked Pan Size Bacon 200g"+ " (Sample)",
    "category": "Meat & Poultry",
    "price": 4.99
  },
  {
    "name": "RSPCA Approved Chicken Enchilada 500g"+ " (Sample)",
    "category": "Meat & Poultry",
    "price": 7.99
  },
  {
    "name": "Beef Blade Steak"+ " (Sample)",
    "category": "Meat & Poultry",
    "price": 16.31
  },
  {
    "name": "Herb & Lemon Butterflied Pork 1kg"+ " (Sample)",
    "category": "Meat & Poultry",
    "price": 11.24
  },
  {
    "name": "Beef Scotch Fillet Steak"+ " (Sample)",
    "category": "Meat & Poultry",
    "price": 27.22
  },
  {
    "name": "RSPCA Approved Chicken Breast Diced"+ " (Sample)",
    "category": "Meat & Poultry",
    "price": 9.59
  },
  {
    "name": "Pork Ribs"+ " (Sample)",
    "category": "Meat & Poultry",
    "price": 15.19
  },
  {
    "name": "Beef Porterhouse Steak 200g"+ " (Sample)",
    "category": "Meat & Poultry",
    "price": 8.0
  },
  {
    "name": "Lightly Infused Pork Loin Steak"+ " (Sample)",
    "category": "Meat & Poultry",
    "price": 7.95
  },
  {
    "name": "Beef Eye Fillet"+ " (Sample)",
    "category": "Meat & Poultry",
    "price": 28.69
  },
  {
    "name": "Beef Scotch Fillet Steak 170g"+ " (Sample)",
    "category": "Meat & Poultry",
    "price": 8.0
  },
  {
    "name": "Honey & Rosemary Butterflied Lamb Leg"+ " (Sample)",
    "category": "Meat & Poultry",
    "price": 22.54
  },
  {
    "name": "Chicken Breast Schnitzels 2 Pack 200g"+ " (Sample)",
    "category": "Meat & Poultry",
    "price": 3.99
  },
  {
    "name": "Beef T-Bone Steak"+ " (Sample)",
    "category": "Meat & Poultry",
    "price": 9.62
  },
  {
    "name": "Half Lamb Leg Bone In"+ " (Sample)",
    "category": "Meat & Poultry",
    "price": 17.99
  },
  {
    "name": "Grass Fed Angus Beef Sausages 500g",
    "category": "Meat & Poultry",
    "price": 7.99
  },
  {
    "name": "Real Diced Bacon 200g",
    "category": "Meat & Poultry",
    "price": 4.49
  },
  {
    "name": "RSPCA Approved Marinated Honey Soy Chicken Drumsticks 1.5kg",
    "category": "Meat & Poultry",
    "price": 8.99
  },
  {
    "name": "Plain Kransky 300g",
    "category": "Meat & Poultry",
    "price": 4.49
  },
  {
    "name": "Cheese Kransky 300g",
    "category": "Meat & Poultry",
    "price": 4.49
  },
  {
    "name": "Pork Loin with Greek Style Seasoning Per Kg",
    "category": "Meat & Poultry",
    "price": 15.43
  },
  {
    "name": "Melt in the Middle Fish Cakes Salmon & Hollandaise 2 Pack 290g",
    "category": "Meat & Poultry",
    "price": 5.49
  },
  {
    "name": "Cooked Prawn Cutlets with Cocktail Sauce 230g",
    "category": "Meat & Poultry",
    "price": 8.99
  },
  {
    "name": "Short Cut Bacon 500g",
    "category": "Meat & Poultry",
    "price": 7.99
  },
  {
    "name": "Free Range Chicken Breast Fillets Bulk Pack",
    "category": "Meat & Poultry",
    "price": 17.86
  },
  {
    "name": "Wagyu Beef Sausages 500g",
    "category": "Meat & Poultry",
    "price": 7.99
  },
  {
    "name": "Free Range Chicken Tenderloins",
    "category": "Meat & Poultry",
    "price": 10.44
  },
  {
    "name": "Fresh Tasmanian Salmon Fillets Skin Off 2 Pack 260g",
    "category": "Meat & Poultry",
    "price": 12.99
  },
  {
    "name": "Beef Eye Fillet Steak Aged 21 Days",
    "category": "Meat & Poultry",
    "price": 14.7
  },
  {
    "name": "Beef Scotch Fillet Aged 21 Days",
    "category": "Meat & Poultry",
    "price": 16.4
  },
  {
    "name": "Free Range Chicken Thigh Fillets Bulk Pack",
    "category": "Meat & Poultry",
    "price": 17.66
  },
  {
    "name": "Skinless Hot Dogs 375g",
    "category": "Meat & Poultry",
    "price": 4.49
  },
  {
    "name": "RSPCA Approved Chicken Mince 500g",
    "category": "Meat & Poultry",
    "price": 5.99
  },
  {
    "name": "Free Range Chicken Breast Fillets",
    "category": "Meat & Poultry",
    "price": 9.34
  },
  {
    "name": "Free Range Chicken Thigh Fillets",
    "category": "Meat & Poultry",
    "price": 10.52
  },
  {
    "name": "RSPCA Approved Chicken Thigh Fillets",
    "category": "Meat & Poultry",
    "price": 9.59
  },
  {
    "name": "RSPCA Approved Chicken Breast Fillets",
    "category": "Meat & Poultry",
    "price": 7.79
  },
  {
    "name": "RSPCA Approved Chicken Tenderloin",
    "category": "Meat & Poultry",
    "price": 8.24
  },
  {
    "name": "Basa Fillets Skin Off 400g",
    "category": "Meat & Poultry",
    "price": 7.49
  },
  {
    "name": "RSPCA Approved Chicken Thigh Cutlets Skinless and Bone In",
    "category": "Meat & Poultry",
    "price": 5.19
  },
  {
    "name": "Herb & Garlic Rissoles 540g",
    "category": "Meat & Poultry",
    "price": 6.49
  },
  {
    "name": "Wagyu Meatballs 420g",
    "category": "Meat & Poultry",
    "price": 7.49
  },
  {
    "name": "Beef Rump Steak 250g",
    "category": "Meat & Poultry",
    "price": 7.0
  },
  {
    "name": "Australian Short Cut Bacon 200g",
    "category": "Meat & Poultry",
    "price": 4.99
  },
  {
    "name": "Boneless Pork Loin Roast",
    "category": "Meat & Poultry",
    "price": 21.74
  },
  {
    "name": "Fresh Tasmanian Salmon Fillets Skin Off 4 Pack 460g",
    "category": "Meat & Poultry",
    "price": 17.99
  },
  {
    "name": "Pork And Beef Mince 500g",
    "category": "Meat & Poultry",
    "price": 5.99
  },
  {
    "name": "Pork Fillet Wrapped in Prosciutto",
    "category": "Meat & Poultry",
    "price": 14.39
  },
  {
    "name": "RSPCA Approved Prosciutto Wrapped Chicken Breast Parmigiana 2 Pack 500g",
    "category": "Meat & Poultry",
    "price": 9.99
  },
  {
    "name": "RSPCA Approved Chicken Bites With Sriracha Mayonnaise 500g",
    "category": "Meat & Poultry",
    "price": 9.49
  },
  {
    "name": "Fresh Tasmanian Salmon Lemon & Herb Crumb 4 Pack 500g",
    "category": "Meat & Poultry",
    "price": 17.99
  },
  {
    "name": "RSPCA Approved Chicken Breast Fillet Stir Fry",
    "category": "Meat & Poultry",
    "price": 6.75
  },
  {
    "name": "RSPCA Approved Chicken Necks 1kg",
    "category": "Meat & Poultry",
    "price": 5.99
  },
  {
    "name": "Free Range Boneless Butterflied Chicken",
    "category": "Meat & Poultry",
    "price": 15.2
  },
  {
    "name": "Free Range Chicken Breast Schnitzel 4 Pack 420g",
    "category": "Meat & Poultry",
    "price": 6.99
  },
  {
    "name": "Middle Bacon 1kg",
    "category": "Meat & Poultry",
    "price": 11.69
  },
  {
    "name": "Knackwurst 300g",
    "category": "Meat & Poultry",
    "price": 4.49
  },
  {
    "name": "RSPCA Approved Fresh Whole Chicken",
    "category": "Meat & Poultry",
    "price": 8.43
  },
  {
    "name": "Beef Burgers 500g",
    "category": "Meat & Poultry",
    "price": 6.99
  },
  {
    "name": "Fresh Tasmanian Salmon Fillets Skin On 4 Pack 460g",
    "category": "Meat & Poultry",
    "price": 16.99
  },
  {
    "name": "RSPCA Approved Chicken Breast Fillet 1 Pack 300g",
    "category": "Meat & Poultry",
    "price": 4.99
  },
  {
    "name": "Turkey Mince 500g",
    "category": "Meat & Poultry",
    "price": 5.99
  },
  {
    "name": "Diced Bacon Pieces 2 x 150g",
    "category": "Meat & Poultry",
    "price": 3.99
  },
  {
    "name": "Cooking Bacon 750g",
    "category": "Meat & Poultry",
    "price": 7.39
  },
  {
    "name": "Pork Scotch Fillet Steak Per Kg",
    "category": "Meat & Poultry",
    "price": 4.84
  },
  {
    "name": "Garlic Prawns 280g",
    "category": "Meat & Poultry",
    "price": 9.99
  },
  {
    "name": "100 Day Grain Fed Scotch Fillet 1kg",
    "category": "Meat & Poultry",
    "price": 18.0
  },
  {
    "name": "4 Star Grass Fed Beef Mince 500g",
    "category": "Meat & Poultry",
    "price": 8.49
  },
  {
    "name": "Beef Scotch Fillet 2 Pack",
    "category": "Meat & Poultry",
    "price": 14.8
  },
  {
    "name": "RSPCA Approved Chicken Maryland Fillets",
    "category": "Meat & Poultry",
    "price": 14.94
  },
  {
    "name": "Free Range Marinated Chicken Wings 1.5kg",
    "category": "Meat & Poultry",
    "price": 13.29
  },
  {
    "name": "Beef Rump Bulk",
    "category": "Meat & Poultry",
    "price": 16.99
  },
  {
    "name": "RSPCA Approved Marinated Chicken Breast Steaks",
    "category": "Meat & Poultry",
    "price": 8.75
  },
  {
    "name": "Beef Porterhouse Steak with Garlic and Herb Butter 400g",
    "category": "Meat & Poultry",
    "price": 14.49
  },
  {
    "name": "Lamb Mince 500g",
    "category": "Meat & Poultry",
    "price": 7.49
  },
  {
    "name": "Boneless Pork Shoulder Roast",
    "category": "Meat & Poultry",
    "price": 18.98
  },
  {
    "name": "Beef Rump Steak",
    "category": "Meat & Poultry",
    "price": 12.5
  },
  {
    "name": "RSPCA Approved Chicken and Cheese Schnitzel 1kg",
    "category": "Meat & Poultry",
    "price": 9.49
  },
  {
    "name": "RSPCA Approved Chicken Burger Bulk Pack 1.2kg",
    "category": "Meat & Poultry",
    "price": 9.99
  },
  {
    "name": "Fresh Australian Barramundi Fillets 2 Pack 260g",
    "category": "Meat & Poultry",
    "price": 10.99
  },
  {
    "name": "RSPCA Approved Southern Style Chicken Thigh Fillet Burger 350g",
    "category": "Meat & Poultry",
    "price": 7.29
  },
  {
    "name": "Honey Beef Sausages 500g",
    "category": "Meat & Poultry",
    "price": 4.29
  },
  {
    "name": "Thin Sausages 500g",
    "category": "Meat & Poultry",
    "price": 3.99
  },
  {
    "name": "Thin Sausages 24 Pack 1.8kg",
    "category": "Meat & Poultry",
    "price": 10.49
  },
  {
    "name": "Pork Sausages 500g",
    "category": "Meat & Poultry",
    "price": 4.29
  },
  {
    "name": "Herb & Garlic Beef Sausages 500g",
    "category": "Meat & Poultry",
    "price": 4.49
  },
  {
    "name": "Lamb Shoulder Lemon Myrtle Thyme & Mint",
    "category": "Meat & Poultry",
    "price": 25.34
  },
  {
    "name": "Pork Forequarter Cutlet",
    "category": "Meat & Poultry",
    "price": 11.47
  },
  {
    "name": "Pork Cordon Bleu 480g",
    "category": "Meat & Poultry",
    "price": 9.99
  },
  {
    "name": "Free Range Chicken Wing Nibbles",
    "category": "Meat & Poultry",
    "price": 7.99
  },
  {
    "name": "Natural Hot Smoked Salmon 150g",
    "category": "Meat & Poultry",
    "price": 7.99
  },
  {
    "name": "Cracked Pepper Hot Smoked Salmon 150g",
    "category": "Meat & Poultry",
    "price": 7.99
  },
  {
    "name": "Fresh Marinated Chicken Wings Honey Soy 1kg",
    "category": "Meat & Poultry",
    "price": 8.99
  },
  {
    "name": "Fresh Marinated Chicken Wings Buffalo Style 1kg",
    "category": "Meat & Poultry",
    "price": 8.99
  },
  {
    "name": "Crumbed Chicken Tenders Buffalo Style 400g",
    "category": "Meat & Poultry",
    "price": 7.39
  },
  {
    "name": "Crumbed Chicken Tenders 400g",
    "category": "Meat & Poultry",
    "price": 7.39
  },
  {
    "name": "Chicken Breast Schnitzel Crunchy Homestyle 4 Pack 600g",
    "category": "Meat & Poultry",
    "price": 8.99
  },
  {
    "name": "Chicken Breast Schnitzel Parmigiana 4 Pack 600g",
    "category": "Meat & Poultry",
    "price": 8.99
  },
  {
    "name": "Boneless Butterflied Chicken Greek Style",
    "category": "Meat & Poultry",
    "price": 12.09
  },
  {
    "name": "Boneless Butterflied Chicken Spiced Mango",
    "category": "Meat & Poultry",
    "price": 12.09
  },
  {
    "name": "RSPCA Approved California BBQ Marinated Split Chicken",
    "category": "Meat & Poultry",
    "price": 9.34
  },
  {
    "name": "Portuguese Peri Peri Marinated Split Chicken",
    "category": "Meat & Poultry",
    "price": 9.34
  },
  {
    "name": "RSPCA Approved BBQ Chicken Kebabs 800g",
    "category": "Meat & Poultry",
    "price": 11.49
  },
  {
    "name": "RSPCA Approved Honey Soy Chicken Kebabs 800g",
    "category": "Meat & Poultry",
    "price": 11.49
  }
];


const products = baseProducts.map((product, index) => {
  const isEven = index % 2 === 0;
  return {
    ...product,
    grocer: isEven ? "Fresh Farm Market" : "Local Organics",
    suburb: isEven ? "Richmond" : "Carlton"
  };
});



export default products;