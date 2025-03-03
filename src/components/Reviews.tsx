import React from "react";
import {
  Star,
  Quote,
  ThumbsUp,
  Award,
  ShoppingBag,
  CheckCircle,
} from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Mica Harvey",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
    rating: 5,
    text: "Ita super soft and actual fits over my face well as an adult. The strap in the pack tightens quite a bit so its well fitted. The seam in the middle of the inside of the bast doesn't bother me. Design was as shown in the post, and the construction of the piece was good quality. There is a little gap on the bridge of my nose but for the most part blocks out the light.. because there is a slit in the middle so you could probably pit in a sock or something to make the light blocking more affective. I would recommend c:",
    date: "2 years ago",
    verified: true,
    helpful: 42,
    productVariant: "Frog Design",
  },
  {
    id: 2,
    name: "Jyl CJ Barlow",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
    rating: 5,
    text: "Did I buy these for the sole purpose of annoying my husband? Yes. Has it worked out better than planned? My god, yes. At first, I only strolled into his office wearing my Froggles, but now I keep them at the ready at all times. If he leaves the table at a restaurant, falls asleep on a plane, if I summon him to a different aisle in Lowe’s… well, he’s now leery. I’ve also printed so, so many pictures (see example) and posted them in various places. Right now, I’m waiting for him to check in on his favorite cat - yes, he has a camera set up for his beloved cat… and while he’s on a business trip, I’ve added a special surprise to Pickles Cam.",
    date: "2 months ago",
    verified: true,
    helpful: 21,
    productVariant: "Bunny Pink",
  },
];

const stats = [
  { label: "Happy Customers", value: "10,000+" },
  { label: "5-Star Reviews", value: "75%" },
  { label: "Return Rate", value: "<1%" },
  { label: "Sleep Improvement", value: "78%" },
];

const Reviews = () => {
  return (
    <section
      id="reviews"
      className="py-20 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-2"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 relative inline-block">
            What Our Customers Say
            <span className="absolute -bottom-3 left-0 w-full h-1 bg-primary-500 transform -translate-y-2" />
          </h2>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what people who use Sweet
            Dreams eye masks have to say about their experience.
          </p>

          <div className="flex justify-center items-center mt-8">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-7 w-7" fill="currentColor" />
              ))}
            </div>
            <span className="ml-3 text-2xl font-bold text-gray-900">4.8</span>
            <span className="mx-2 text-gray-600 font-medium">out of 5</span>
            <span className="text-gray-500 text-sm">
              based on 1,248 verified reviews
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center"
            >
              <p className="text-3xl font-bold text-primary-600">
                {stat.value}
              </p>
              <p className="text-gray-600 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
            <Award className="h-5 w-5 text-primary-500 mr-2" />
            Featured Customer Reviews
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-start">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-primary-100"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h4 className="font-semibold text-gray-900">
                      {review.name}
                    </h4>
                    <span className="inline-flex items-center text-sm text-gray-500">
                      {review.date}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center mt-1 space-y-1 sm:space-y-0">
                    <div className="flex text-yellow-400 mr-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4"
                          fill={i < review.rating ? "currentColor" : "none"}
                          strokeWidth={2}
                        />
                      ))}
                    </div>

                    {review.verified && (
                      <span className="inline-flex items-center px-2 py-0.5 bg-green-100 text-green-800 text-xs rounded-full mr-2">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Verified
                      </span>
                    )}

                    <span className="inline-flex items-center px-2 py-0.5 bg-primary-50 text-primary-700 text-xs rounded-full">
                      <ShoppingBag className="h-3 w-3 mr-1" />
                      {review.productVariant}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-4 relative">
                <Quote className="absolute -top-2 -left-2 h-6 w-6 text-primary-200" />
                <p className="text-gray-600 pl-4 pt-2 italic">{review.text}</p>
              </div>

              <div className="mt-4 pt-3 border-t border-gray-100 flex justify-between items-center">
                <button className="inline-flex items-center text-sm text-gray-500 hover:text-primary-600">
                  <ThumbsUp className="h-4 w-4 mr-1" />
                  Helpful ({review.helpful})
                </button>
                <button className="text-sm text-gray-500 hover:text-primary-600">
                  Report
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col md:flex-row items-center justify-between">
          <div className="flex space-x-2 mb-4 md:mb-0">
            <button className="w-10 h-10 rounded-md bg-primary-600 text-white flex items-center justify-center">
              1
            </button>
            <button className="w-10 h-10 rounded-md bg-white border border-gray-300 text-gray-700 flex items-center justify-center hover:bg-gray-50">
              2
            </button>
            <button className="w-10 h-10 rounded-md bg-white border border-gray-300 text-gray-700 flex items-center justify-center hover:bg-gray-50">
              3
            </button>
            <button className="w-10 h-10 rounded-md bg-white border border-gray-300 text-gray-700 flex items-center justify-center hover:bg-gray-50">
              ...
            </button>
          </div>

          <button className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors flex items-center">
            Read All Reviews
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        <div className="mt-16 bg-primary-600 rounded-xl p-8 shadow-lg text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Share Your Experience With Sweet Dreams
          </h3>
          <p className="text-primary-100 mb-6 max-w-3xl mx-auto">
            Your feedback helps us improve and helps others find the perfect
            sleep solution. Tell us about your experience with our eye masks.
          </p>
          <button className="px-8 py-3 bg-white text-primary-600 font-medium rounded-lg hover:bg-primary-50 transition-colors">
            Write a Review
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
