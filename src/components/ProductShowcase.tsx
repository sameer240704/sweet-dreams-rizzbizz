import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  ShoppingCart,
  Info,
} from "lucide-react";

const products = [
  {
    id: 1,
    name: "Cute Green Frog Funny Eye Mask",
    description:
      "Cute Green Frog Funny Eye Masks for Adults Kids Funny Blindfold with Eyes Open Sleep Mask Sleep Mask for Sleeping",
    price: 225,
    image: "https://m.media-amazon.com/images/I/51PxwngDG5L._AC_SX679_.jpg",
    color: "Frog",
    rating: 4.6,
    stock: 15,
  },
  {
    id: 2,
    name: "Cartoon Animal Funny Sleep Mask",
    description:
      "Cartoon Animal Funny Sleep Mask with Eyes Pink Bunny Rabbit Sleeping Eye Mask Plush Rabbit Eye Mask Sleeping Mask Blindfold",
    price: 225,
    image: "https://m.media-amazon.com/images/I/61HOZW5C4tL._AC_SX679_.jpg",
    color: "Bunny Pink",
    rating: 4.6,
    stock: 8,
  },
  {
    id: 3,
    name: "Cute Cartoon Animal Novelty Eye Mask",
    description:
      "Cute Cartoon Animal Novelty Eye Mask Pink Fuzzy Pink Bunny Eye Masks for Kids Sleeping Mask for Girls Night",
    price: 225,
    image: "https://m.media-amazon.com/images/I/517RrO2RgdL._AC_SX679_.jpg",
    color: "Bunny Wow Pink",
    rating: 4.7,
    stock: 12,
  },
  {
    id: 4,
    name: "Cute Cartoon Novelty Animal Sad Green Frog Sleep Mask",
    description:
      "Cute Cartoon Novelty Animal Sad Green Frog Sleep Mask Sleeping Mask Eye Mask for Sleeping with Big Eyes Short Plush Blindfold Eye Cover Eye Cover for Women Men Kids Adult Girls Boys",
    price: 225,
    image: "https://m.media-amazon.com/images/I/61dEJL-DBvL._AC_SX679_.jpg",
    color: "Frog Sad",
    rating: 4.6,
    stock: 5,
  },
  {
    id: 5,
    name: "Fxaelian Cute Cartoon Animal Pink Eye Mask",
    description:
      "Fxaelian Cute Cartoon Animal Pink Eye Mask for Sleeping Sleep Mask Smooth Soft Plush Comfortable Sleeping Mask with Adjustable Strap Blindfold Eye Cover for Women Kids Adult Girls Boys Pink7",
    price: 225,
    image: "https://m.media-amazon.com/images/I/619w9daUevL._AC_SX679_.jpg",
    color: "Pink Animal",
    rating: 4.5,
    stock: 9,
  },
  {
    id: 6,
    name: "Fxaelian Cute Cartoon Rainbow Unicorn Eye Mask",
    description:
      "Fxaelian Cute Cartoon Rainbow Unicorn Eye Mask for Sleeping Plush Sleep Mask Sleeping Mask Unicorn Gift Blindfold Eye Cover for Women Kids Adult Girls Boys Unicorn Big Eyes",
    price: 225,
    image: "https://m.media-amazon.com/images/I/61esiIecyYS._AC_SX679_.jpg",
    color: "Unicorn Big Eyes",
    rating: 4.6,
    stock: 7,
  },
];

const ProductShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isAnimating) {
        nextSlide();
      }
    }, 8000);

    return () => clearInterval(timer);
  }, [isAnimating]);

  const nextSlide = () => {
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    setIsAnimating(true);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + products.length) % products.length
    );
    setTimeout(() => setIsAnimating(false), 500);
  };

  const currentProduct = products[currentIndex];

  const incrementQuantity = () => {
    if (quantity < currentProduct.stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  useEffect(() => {
    setQuantity(1);
  }, [currentIndex]);

  return (
    <section
      id="products"
      className="py-20 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 relative inline-block">
            Our Premium Collection
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-500 transform -translate-y-2" />
          </h2>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our range of luxurious eye masks designed for ultimate
            comfort and better sleep.
          </p>
        </div>

        <div className="relative">
          <div className="flex items-center justify-between">
            <button
              onClick={prevSlide}
              disabled={isAnimating}
              className="absolute left-0 z-10 p-3 rounded-full bg-white shadow-lg text-gray-800 hover:bg-gray-100 hover:text-blue-600 focus:outline-none transition-all duration-300 transform -translate-x-3 md:translate-x-0"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <div className="w-full overflow-hidden">
              <div
                className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center transition-opacity duration-500 ${
                  isAnimating ? "opacity-70" : "opacity-100"
                }`}
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-xl transform transition-transform duration-500 hover:scale-105 p-4">
                  <div className="relative">
                    <span className="absolute top-2 right-2 bg-blue-600 text-white text-sm font-medium px-3 py-1 rounded-full">
                      {currentProduct.stock > 10
                        ? "In Stock"
                        : currentProduct.stock <= 3
                        ? "Almost Gone!"
                        : "Limited Stock"}
                    </span>
                    <img
                      src={currentProduct.image}
                      alt={currentProduct.name}
                      className="w-full h-64 md:h-96 object-cover rounded-xl"
                    />
                  </div>
                </div>

                <div className="text-left p-6 bg-white rounded-2xl shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5"
                          fill={
                            i < Math.floor(currentProduct.rating)
                              ? "currentColor"
                              : i < currentProduct.rating
                              ? "currentColor"
                              : "none"
                          }
                          strokeWidth={
                            i < currentProduct.rating &&
                            i >= Math.floor(currentProduct.rating)
                              ? 0
                              : 2
                          }
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-gray-600">
                      {currentProduct.rating}/5
                    </span>
                    <span className="ml-2 text-sm text-gray-500">
                      ({Math.floor(currentProduct.rating * 21)} reviews)
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900">
                    {currentProduct.name}
                  </h3>
                  <p className="mt-2 text-sm text-blue-600 font-medium">
                    Color: {currentProduct.color}
                  </p>
                  <p className="mt-4 text-gray-600 leading-relaxed">
                    {currentProduct.description}
                  </p>

                  <div className="mt-6 flex items-center">
                    <span className="text-3xl font-bold text-gray-900">
                      ₹{currentProduct.price.toFixed(2)}
                    </span>
                    <span className="ml-3 text-sm text-gray-500 line-through">
                      ₹{(currentProduct.price * 1.2).toFixed(2)}
                    </span>
                    <span className="ml-2 bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">
                      SAVE 20%
                    </span>
                  </div>

                  <div className="mt-6 flex items-center">
                    <span className="text-gray-700 mr-3">Quantity:</span>
                    <div className="flex items-center border border-gray-300 rounded-lg">
                      <button
                        onClick={decrementQuantity}
                        className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                        disabled={quantity <= 1}
                      >
                        -
                      </button>
                      <span className="px-4 py-1 text-gray-800 font-medium">
                        {quantity}
                      </span>
                      <button
                        onClick={incrementQuantity}
                        className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                        disabled={quantity >= currentProduct.stock}
                      >
                        +
                      </button>
                    </div>
                    <span className="ml-4 text-sm text-gray-500">
                      {currentProduct.stock} available
                    </span>
                  </div>

                  <div className="mt-8 flex flex-col sm:flex-row gap-4">
                    <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
                      <ShoppingCart className="h-5 w-5 mr-2" />
                      Add to Cart
                    </button>
                    <button className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center">
                      <Info className="h-5 w-5 mr-2" />
                      More Details
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={nextSlide}
              disabled={isAnimating}
              className="absolute right-0 z-10 p-3 rounded-full bg-white shadow-lg text-gray-800 hover:bg-gray-100 hover:text-blue-600 focus:outline-none transition-all duration-300 transform translate-x-3 md:translate-x-0"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          <div className="flex justify-center mt-10 space-x-3">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => !isAnimating && setCurrentIndex(index)}
                disabled={isAnimating}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-blue-600 w-6"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
