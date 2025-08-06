import { useSelector } from "react-redux";
import Homeitem from "../components/Homeitem";

const Home = () => {
  const items = useSelector((store) => store.item.items);

  if (!Array.isArray(items)) {
    return <div>Loading items...</div>;
  }

  let items1 = [
    {
      id: "002",
      image:
        "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=600&fit=crop",
      company: "TrendWave",
      item_name: "Premium Silk Evening Dress",
      original_price: 3299,
      current_price: 1899,
      discount_percentage: 42,
      return_period: 14,
      delivery_date: "15 Dec 2024",
      rating: { stars: 4.6, count: 156 },
    },
    {
      id: "001",
      image:
        "data:image/jpeg;base64,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",
      company: "LuxeStyle",
      item_name: "Diamond-Cut Crystal Earrings",
      original_price: 1245,
      current_price: 722,
      discount_percentage: 42,
      return_period: 14,
      delivery_date: "15 Dec 2024",
      rating: { stars: 4.8, count: 892 },
    },
    {
      id: "003",
      image:
        "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop",
      company: "UrbanChic",
      item_name: "Floral Print Midi Skirt Collection",
      original_price: 1899,
      current_price: 589,
      discount_percentage: 69,
      return_period: 14,
      delivery_date: "15 Dec 2024",
      rating: { stars: 4.3, count: 324 },
    },
    {
      id: "004",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=600&fit=crop",
      company: "SportElite",
      item_name: "Professional Athletic Jersey",
      original_price: 1199,
      current_price: 1199,
      discount_percentage: 0,
      return_period: 14,
      delivery_date: "15 Dec 2024",
      rating: { stars: 4.9, count: 67 },
    },
    {
      id: "005",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=600&fit=crop",
      company: "ComfortZone",
      item_name: "Organic Cotton Premium Tee",
      original_price: 1699,
      current_price: 595,
      discount_percentage: 65,
      return_period: 14,
      delivery_date: "15 Dec 2024",
      rating: { stars: 4.5, count: 2890 },
    },
    {
      id: "006",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=600&fit=crop",
      company: "RunTech",
      item_name: "Ultra Boost Performance Sneakers",
      original_price: 16995,
      current_price: 16995,
      discount_percentage: 0,
      return_period: 14,
      delivery_date: "15 Dec 2024",
      rating: { stars: 4.7, count: 234 },
    },
    {
      id: "007",
      image:
        "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&h=600&fit=crop",
      company: "StyleCraft",
      item_name: "Designer Casual Shorts",
      original_price: 1899,
      current_price: 759,
      discount_percentage: 60,
      return_period: 14,
      delivery_date: "15 Dec 2024",
      rating: { stars: 4.4, count: 567 },
    },
    {
      id: "008",
      image:
        "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=600&fit=crop",
      company: "FreshScent",
      item_name: "Luxury Fragrance Collection 150ml",
      original_price: 385,
      current_price: 192,
      discount_percentage: 50,
      return_period: 14,
      delivery_date: "15 Dec 2024",
      rating: { stars: 4.6, count: 4200 },
    },
  ];
  if (items.length === 0) {
    // Display a loading message or spinner while fetching data
    return (
      <>
        <div className="items-container">
          {items1.map((item) => (
            <Homeitem key={item.id} item={item} />
          ))}
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="items-container">
          {items.map((item) => (
            <Homeitem key={item.id} item={item} />
          ))}
        </div>
      </>
    );
  }
};

export default Home;
