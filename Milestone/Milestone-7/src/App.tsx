import { Search, ShoppingCart, User, X } from "lucide-react";
import bgImage from "/bg.svg";

function App() {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
    >
      {/* Top fixed offer bar */}
      <div className="fixed top-0 left-0 w-full bg-black text-white text-sm text-center py-2 z-50">
        Sign up and get 20% off on your first order.{" "}
        <a href="#" className="underline ml-1">
          Sign Up Now
        </a>
      </div>

      {/* Sticky navigation bar */}
      <div className="sticky top-8 z-40 bg-white bg-opacity-90 px-6 py-4 flex justify-between items-center border-b">
        <div className="text-2xl font-extrabold">FAKESTORE</div>
        <div className="flex gap-6 text-sm font-medium">
          <a href="#">Shop</a>
          <a href="#">On Sale</a>
          <a href="#">New Arrivals</a>
          <a href="#">Brands</a>
        </div>
        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Search for products..."
            className="border rounded px-3 py-1 text-sm"
          />
          <button>🛒</button>
          <button>👤</button>
        </div>
      </div>

      <div  className="bg-cover bg-center" style={{ backgroundImage: `url(${bgImage})` }}>
        {/* Content over the background */}
        <div className="pt-40 pb-20 px-10 text-black">
          <div className="max-w-xl">
            <h1 className="text-5xl md:text-6xl font-black leading-tight">
              FIND CLOTHES
              <br />
              THAT MATCH YOUR
              <br />
              STYLE PERFECTLY
            </h1>
            <p className="text-gray-700 mt-4">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
            <button className="mt-6 px-6 py-3 bg-black text-white rounded-full font-semibold">
              Shop Now
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-white bg-opacity-90 py-10 flex flex-col md:flex-row justify-around items-center text-center text-black">
          <div className="mb-6 md:mb-0">
            <p className="text-2xl font-bold">200+</p>
            <p className="text-gray-700">International Brands</p>
          </div>
          <div className="mb-6 md:mb-0">
            <p className="text-2xl font-bold">2,000+</p>
            <p className="text-gray-700">High-Quality Products</p>
          </div>
          <div>
            <p className="text-2xl font-bold">30,000+</p>
            <p className="text-gray-700">Happy Customers</p>
          </div>
        </div>
      </div> bg-black text-white
      {/* Brand Logos */}
      <div className="bg-black py-6 flex justify-around text-white text-xl font-light">
        <span>VERSACE</span>
        <span>ZARA</span>
        <span>GUCCI</span>
        <span>PRADA</span>
        <span>Calvin Klein</span>
      </div>
    </div>
  );
}

export default App;
