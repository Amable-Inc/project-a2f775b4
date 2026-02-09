import { ShoppingBag, Truck, Shield, Clock, Star } from 'lucide-react';
import Image from "next/image";

export default function Home() {
  const products = [
    {
      id: 1,
      name: "Air Runner Pro",
      price: 129.99,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop",
      category: "Running",
      rating: 4.8
    },
    {
      id: 2,
      name: "Classic Leather",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&h=500&fit=crop",
      category: "Casual",
      rating: 4.9
    },
    {
      id: 3,
      name: "Urban Sneaker",
      price: 99.99,
      image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&h=500&fit=crop",
      category: "Lifestyle",
      rating: 4.7
    },
    {
      id: 4,
      name: "Sport Elite",
      price: 149.99,
      image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500&h=500&fit=crop",
      category: "Athletic",
      rating: 4.9
    }
  ];

  const categories = [
    { name: "Running", count: "120+ Styles" },
    { name: "Casual", count: "200+ Styles" },
    { name: "Athletic", count: "85+ Styles" },
    { name: "Boots", count: "60+ Styles" }
  ];

  const features = [
    {
      icon: Truck,
      title: "Free Shipping",
      description: "On orders over $50"
    },
    {
      icon: Shield,
      title: "Secure Payment",
      description: "100% secure transactions"
    },
    {
      icon: Clock,
      title: "30-Day Returns",
      description: "Easy return policy"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-8 h-8" />
              <span className="text-2xl font-bold">StepStyle</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#" className="text-gray-700 hover:text-black transition">Men</a>
              <a href="#" className="text-gray-700 hover:text-black transition">Women</a>
              <a href="#" className="text-gray-700 hover:text-black transition">Kids</a>
              <a href="#" className="text-gray-700 hover:text-black transition">Sale</a>
            </div>
            <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition">
              Shop Now
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Step Into Style & Comfort
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Discover premium footwear designed for every adventure. From running to casual wear, find your perfect pair.
              </p>
              <div className="flex gap-4">
                <button className="bg-black text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition">
                  Shop Collection
                </button>
                <button className="border-2 border-black text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-black hover:text-white transition">
                  View Sale
                </button>
              </div>
            </div>
            <div className="relative h-[400px] md:h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl transform rotate-3"></div>
              <div className="absolute inset-0 bg-white rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800&h=800&fit=crop"
                  alt="Premium shoes collection"
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
      <section className="py-12 border-b bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="bg-black text-white p-3 rounded-full">
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
                className="bg-gray-100 rounded-2xl p-8 text-center hover:bg-gray-200 cursor-pointer transition group"
              >
                <h3 className="text-2xl font-bold mb-2 group-hover:scale-110 transition">{category.name}</h3>
                <p className="text-gray-600">{category.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Featured Products</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <article key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition group">
                <div className="relative h-64 overflow-hidden bg-gray-100">
                  <Image
                    src={product.image}
                    alt={`${product.name} - ${product.category} shoes`}
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
                    <span className="text-2xl font-bold">${product.price}</span>
                    <button className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="bg-black text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition">
              View All Products
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Join Our Community</h2>
          <p className="text-xl text-gray-300 mb-8">
            Get exclusive access to new releases, special offers, and style tips.
          </p>
          <form className="flex gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full text-black"
              aria-label="Email address"
            />
            <button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-200 transition">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <ShoppingBag className="w-6 h-6" />
                <span className="text-xl font-bold">StepStyle</span>
              </div>
              <p className="text-gray-600">Premium footwear for every lifestyle.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Shop</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-black transition">Men's Shoes</a></li>
                <li><a href="#" className="hover:text-black transition">Women's Shoes</a></li>
                <li><a href="#" className="hover:text-black transition">Kids' Shoes</a></li>
                <li><a href="#" className="hover:text-black transition">Sale</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-black transition">Contact Us</a></li>
                <li><a href="#" className="hover:text-black transition">Shipping Info</a></li>
                <li><a href="#" className="hover:text-black transition">Returns</a></li>
                <li><a href="#" className="hover:text-black transition">Size Guide</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-black transition">About Us</a></li>
                <li><a href="#" className="hover:text-black transition">Careers</a></li>
                <li><a href="#" className="hover:text-black transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-black transition">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-gray-600">
            <p>&copy; 2024 StepStyle. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
