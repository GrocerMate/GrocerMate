export function getCategoryLabelStyle(category) {
  switch (category) {
    case "Fruits & Vegetables":
      return "bg-green-100 text-green-700";
    case "Milk & Dairy":
      return "bg-blue-100 text-blue-700";
    case "Meat & Poultry":
      return "bg-red-100 text-red-700";
    case "Bakery":
      return "bg-yellow-100 text-yellow-700";
    case "Frozen Food":
      return "bg-cyan-100 text-cyan-700";
    case "Snacks & Confectionery":
      return "bg-pink-100 text-pink-700";
    case "Beverages":
      return "bg-purple-100 text-purple-700";
    case "Pantry Staples":
      return "bg-orange-100 text-orange-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
}

export function getCategoryIcon(category) {
  switch (category) {
    case "Fruits & Vegetables":
      return "🥦";
    case "Milk & Dairy":
      return "🥛";
    case "Meat & Poultry":
      return "🍗";
    case "Bakery":
      return "🍞";
    case "Frozen Food":
      return "🧊";
    case "Snacks & Confectionery":
      return "🍫";
    case "Beverages":
      return "🥤";
    case "Pantry Staples":
      return "🧂";
    default:
      return "🛒";
  }
}
