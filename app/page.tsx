import { Apple, Truck, Shield, Clock, Star } from 'lucide-react';
import Image from "next/image";

export default function Home() {
  const products = [
    {
      id: 1,
      name: "Alphonso Mango",
      price: 24.99,
      image: "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?w=500&h=500&fit=crop",
      category: "Premium",
      rating: 4.9
    },
    {
      id: 2,
      name: "Kent Mango",
      price: 19.99,
      image: "https://images.unsplash.com/photo-1605527104909-b04d3b4e34e8?w=500&h=500&fit=crop",
      category: "Sweet",
      rating: 4.8
    },
    {
      id: 3,
      name: "Tommy Atkins",
      price: 15.99,
      image: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=500&h=500&fit=crop",
      category: "Classic",
      rating: 4.7
    },
    {
      id: 4,
      name: "Keitt Mango",
      price: 21.99,
      image: "https://images.unsplash.com/photo-1591206369811-4eeb2f18b6b6?w=500&h=500&fit=crop",
      category: "Exotic",
      rating: 4.9
    }
  ];

  const categories = [
    { name: "Premium", count: "15+ Varieties" },
    { name: "Organic", count: "20+ Varieties" },
    { name: "Exotic", count: "12+ Varieties" },
    { name: "Fresh Cut", count: "8+ Options" }
  ];

  const features = [
    {
      icon: Truck,
      title: "Fresh Delivery",
      description: "Farm to door in 24 hours"
    },
    {
      icon: Shield,
      title: "Quality Guarantee",
      description: "100% fresh or money back"
    },
    {
      icon: Clock,
      title: "Peak Ripeness",
      description: "Perfectly timed delivery"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Apple className="w-8 h-8 text-orange-500" />
              <span className="text-2xl font-bold text-orange-600">MangoMarket</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#" className="text-gray-700 hover:text-orange-600 transition">Fresh</a>
              <a href="#" className="text-gray-700 hover:text-orange-600 transition">Organic</a>
              <a href="#" className="text-gray-700 hover:text-orange-600 transition">Dried</a>
              <a href="#" className="text-gray-700 hover:text-orange-600 transition">Deals</a>
            </div>
            <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition">
              Shop Now
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 to-yellow-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Taste the Sweetness of Paradise
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Premium mangoes delivered fresh from tropical farms. Experience the finest quality fruit, handpicked at peak ripeness.
              </p>
              <div className="flex gap-4">
                <button className="bg-orange-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-600 transition">
                  Shop Collection
                </button>
                <button className="border-2 border-orange-500 text-orange-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-500 hover:text-white transition">
                  View Deals
                </button>
              </div>
            </div>
            <div className="relative h-[400px] md:h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-3xl transform rotate-3"></div>
              <div className="absolute inset-0 bg-white rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1553279768-865429fa0078?w=800&h=800&fit=crop"
                  alt="Fresh premium mangoes"
                  width={800}
                  height={800}
                  className="object-cover w-full h-full"
                  loading="eager"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 border-b bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="bg-orange-500 text-white p-3 rounded-full">
                  <feature.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-orange-100 to-yellow-100 rounded-2xl p-8 text-center hover:from-orange-200 hover:to-yellow-200 cursor-pointer transition group"
              >
                <h3 className="text-2xl font-bold mb-2 group-hover:scale-110 transition text-orange-700">{category.name}</h3>
                <p className="text-gray-600">{category.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Featured Mangoes</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <article key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition group">
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-orange-100 to-yellow-100">
                  <Image
                    src={product.image}
                    alt={`${product.name} - ${product.category} mango variety`}
                    width={500}
                    height={500}
                    className="object-cover w-full h-full group-hover:scale-110 transition duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-1 mb-2">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-semibold">{product.rating}</span>
                    <span className="text-sm text-gray-500 ml-1">({Math.floor(Math.random() * 500 + 100)} reviews)</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">{product.category}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-orange-600">${product.price}</span>
                    <button className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="bg-orange-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-600 transition">
              View All Products
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-yellow-500 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Join Our Mango Lovers Club</h2>
          <p className="text-xl text-orange-50 mb-8">
            Get exclusive access to rare varieties, seasonal offers, and tropical recipes.
          </p>
          <form className="flex gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full text-black"
              aria-label="Email address"
            />
            <button className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold hover:bg-orange-50 transition">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-orange-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Apple className="w-6 h-6 text-orange-500" />
                <span className="text-xl font-bold text-orange-600">MangoMarket</span>
              </div>
              <p className="text-gray-600">Premium tropical mangoes delivered fresh.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Shop</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-orange-600 transition">Fresh Mangoes</a></li>
                <li><a href="#" className="hover:text-orange-600 transition">Organic Mangoes</a></li>
                <li><a href="#" className="hover:text-orange-600 transition">Dried Mangoes</a></li>
                <li><a href="#" className="hover:text-orange-600 transition">Special Deals</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-orange-600 transition">Contact Us</a></li>
                <li><a href="#" className="hover:text-orange-600 transition">Shipping Info</a></li>
                <li><a href="#" className="hover:text-orange-600 transition">Returns</a></li>
                <li><a href="#" className="hover:text-orange-600 transition">Ripeness Guide</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-orange-600 transition">About Us</a></li>
                <li><a href="#" className="hover:text-orange-600 transition">Our Farms</a></li>
                <li><a href="#" className="hover:text-orange-600 transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-orange-600 transition">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-gray-600">
            <p>&copy; 2024 MangoMarket. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
