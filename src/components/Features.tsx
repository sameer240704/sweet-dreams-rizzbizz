import React from "react";
import {
  Moon,
  CloudMoon,
  Sparkles,
  Ruler,
  HeartHandshake,
  SmilePlus,
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <CloudMoon className="h-10 w-10 text-blue-600" />,
      title: "Soft & High-Quality Materials",
      description:
        "Plush, polyester, and silk materials combine to create an ultra-comfortable experience that feels luxurious against your skin.",
      highlight: "Ultra-Comfy",
    },
    {
      icon: <Moon className="h-10 w-10 text-blue-600" />,
      title: "Perfect Light Blockage",
      description:
        "Contoured edges perfectly fit your cheekbones and nose to create a complete blackout effect, even in bright environments.",
      highlight: "100% Blackout",
    },
    {
      icon: <Ruler className="h-10 w-10 text-blue-600" />,
      title: "One Size Fits All",
      description:
        "Our carefully designed adjustable elastic strap ensures a perfect fit for both kids and adults without any discomfort.",
      highlight: "Universal Fit",
    },
    {
      icon: <HeartHandshake className="h-10 w-10 text-blue-600" />,
      title: "No More Hair Pulling",
      description:
        "Unlike Velcro straps that tangle and pull your hair, our gentle elastic band secures comfortably without causing any damage.",
      highlight: "Hair-Friendly",
    },
    {
      icon: <SmilePlus className="h-10 w-10 text-blue-600" />,
      title: "Hilarious & Fun",
      description:
        "Our cute frog design brings smiles while promoting relaxation. A perfect blend of function and playfulness for all ages.",
      highlight: "Fun Design",
    },
    {
      icon: <Sparkles className="h-10 w-10 text-blue-600" />,
      title: "Hypoallergenic",
      description:
        "Made with hypoallergenic materials that are gentle on sensitive skin and eyes, preventing irritation and ensuring comfort.",
      highlight: "Skin-Friendly",
    },
  ];

  return (
    <section
      id="features"
      className="py-20 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 relative inline-block">
            Premium Features & Benefits
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-500 transform -translate-y-2"></span>
          </h2>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Our eye masks are crafted with attention to detail, combining
            comfort, functionality, and fun design elements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 flex flex-col h-full"
            >
              <div className="bg-blue-50 p-4 rounded-lg inline-flex self-start mb-4">
                {feature.icon}
              </div>
              <div className="flex items-center mb-3">
                <h3 className="text-xl font-bold text-gray-900">
                  {feature.title}
                </h3>
                <span className="ml-2 text-xs font-medium bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                  {feature.highlight}
                </span>
              </div>
              <p className="text-gray-600 flex-grow">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
