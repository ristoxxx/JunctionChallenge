import { useState } from "react";
import { Mic, Clock, CheckCircle2, Star, Users, ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "motion/react";
import woltAssistantIcon from "figma:asset/c3dff4f5ce93485c0450e3a06dfae3802625d81f.png";
import yuhoIcon from "figma:asset/2d4a0a356470fa73108e79ee68eaf3153489815c.png";

interface VoiceAssistantDemoProps {
  onBack?: () => void;
}

export function VoiceAssistantDemo({ onBack }: VoiceAssistantDemoProps) {
  const [showInstantRecs, setShowInstantRecs] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const instantRecommendations = [
    {
      id: 1,
      restaurant: "Green Bowl Cafe",
      type: "Buddha Bowl Duo",
      description: "2 quinoa bowls with roasted veggies, chickpeas, tahini",
      rating: 4.9,
      reviews: 428,
      deliveryTime: "15-25 min",
      price: 24,
      servings: "2 people",
      image: "🥗"
    },
    {
      id: 2,
      restaurant: "Plant Power Kitchen",
      type: "Vegan Wrap Combo",
      description: "2 falafel wraps with hummus, fresh salad, sweet potato fries",
      rating: 4.8,
      reviews: 356,
      deliveryTime: "20-30 min",
      price: 22,
      servings: "2 people",
      image: "🌯"
    },
    {
      id: 3,
      restaurant: "Zen Garden Bistro",
      type: "Tofu Stir-Fry for Two",
      description: "Crispy tofu, mixed vegetables, brown rice, soy-ginger sauce",
      rating: 4.7,
      reviews: 294,
      deliveryTime: "20-30 min",
      price: 26,
      servings: "2 people",
      image: "🍜"
    }
  ];

  const selectOption = (id: number) => {
    setSelectedOption(id);
  };

  const resetInstantDemo = () => {
    setShowInstantRecs(false);
    setSelectedOption(null);
    setOrderConfirmed(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Phone Header */}
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-4 rounded-t-3xl">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              {onBack && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/20 rounded-full h-8 w-8"
                  onClick={onBack}
                >
                  <ArrowLeft className="w-5 h-5" />
                </Button>
              )}
              <p className="text-white font-bold"> Yuho AI </p>
            </div>
            <img 
              src={yuhoIcon} 
              alt="Yuho Icon"
              className="w-10 h-10"
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white p-6 rounded-b-3xl shadow-lg">
          <div className="relative">
            {/* Voice Input Screen */}
            {!showInstantRecs && !orderConfirmed && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="min-h-[600px] flex flex-col items-center justify-center py-12 space-y-8"
              >
                <motion.button
                  onClick={() => setShowInstantRecs(true)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-32 h-32 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all"
                >
                  <Mic className="w-16 h-16 text-white" />
                </motion.button>

                <div className="text-center space-y-2 max-w-xs">
                  <h4 className="text-gray-900">Tap to speak</h4>
                  <p className="text-gray-600 text-sm">
                    Try saying something like:
                  </p>
                  <div className="space-y-2 mt-4">
                    <div className="bg-gray-50 px-4 py-2 rounded-full text-sm text-gray-700 font-normal">
                      "I crave some cheap pizza"
                    </div>
                    <div className="bg-gray-50 px-4 py-2 rounded-full text-sm text-gray-700">
                      "I'm hosting 10 people tonight"
                    </div>
                    <div className="bg-gray-50 px-4 py-2 rounded-full text-sm text-gray-700">
                      "Quick vegan lunch for 2 people"
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Instant Recommendations */}
            {showInstantRecs && !orderConfirmed && (
              <div className="space-y-4 min-h-[600px]">
                {/* User Input */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex justify-end mb-4">
                    <div className="bg-blue-500 text-white p-4 rounded-2xl rounded-tr-sm max-w-[80%]">
                      <p className="text-sm">Quick vegan lunch for 2 people</p>
                    </div>
                  </div>
                </motion.div>

                {/* AI Response Header */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex justify-start items-start gap-2 mb-2"
                >
                  <img 
                    src={woltAssistantIcon} 
                    alt="Wolt AI Assistant"
                    className="w-16 h-16 flex-shrink-0"
                  />
                  <div className="bg-gray-100 p-4 rounded-2xl rounded-tl-sm">
                    <p className="text-sm text-gray-800">
                      I found 3 quick vegan lunch options for 2 people. Choose one:
                    </p>
                  </div>
                </motion.div>

                {/* Product Cards */}
                <div className="space-y-3">
                  {instantRecommendations.map((rec, index) => (
                    <motion.div
                      key={rec.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.15 }}
                    >
                      <button
                        onClick={() => selectOption(rec.id)}
                        className={`w-full text-left border-2 rounded-2xl p-4 transition-all ${
                          selectedOption === rec.id
                            ? "border-blue-500 bg-blue-50"
                            : "border-gray-200 bg-white hover:border-gray-300"
                        }`}
                      >
                        <div className="flex gap-4">
                          <div className="text-4xl flex-shrink-0">{rec.image}</div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-2 mb-2">
                              <div>
                                <h4 className="text-gray-900 text-sm">{rec.restaurant}</h4>
                                <p className="text-gray-600 text-xs">{rec.type}</p>
                              </div>
                              {selectedOption === rec.id && (
                                <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" />
                              )}
                            </div>
                            <p className="text-gray-500 text-xs mb-3 line-clamp-2">
                              {rec.description}
                            </p>
                            <div className="grid grid-cols-2 gap-2 text-xs">
                              <div className="flex items-center gap-1 text-gray-600">
                                <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                                <span>{rec.rating} ({rec.reviews})</span>
                              </div>
                              <div className="flex items-center gap-1 text-gray-600">
                                <Clock className="w-3 h-3" />
                                <span>{rec.deliveryTime}</span>
                              </div>
                              <div className="flex items-center gap-1 text-gray-600">
                                <Users className="w-3 h-3" />
                                <span>{rec.servings}</span>
                              </div>
                              <div className="flex items-center gap-1 text-gray-900">
                                <span>€{rec.price}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </button>
                    </motion.div>
                  ))}
                </div>

                {/* Action Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  className="pt-4 flex gap-3"
                >
                  <Button
                    className="flex-1 bg-gradient-to-r from-blue-500 to-indigo-600 text-white disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={() => setOrderConfirmed(true)}
                    disabled={selectedOption === null}
                  >
                    <CheckCircle2 className="w-5 h-5 mr-2" />
                    {selectedOption !== null
                      ? `Confirm Order - €${instantRecommendations.find((r) => r.id === selectedOption)?.price}`
                      : "Confirm Order"}
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-shrink-0"
                    onClick={resetInstantDemo}
                  >
                    <Mic className="w-4 h-4 mr-2" />
                    Ask AI Again
                  </Button>
                </motion.div>
              </div>
            )}

            {/* Order Confirmed Screen */}
            {orderConfirmed && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="space-y-6 min-h-[600px] flex flex-col items-center justify-center py-12"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center"
                >
                  <CheckCircle2 className="w-16 h-16 text-green-600" />
                </motion.div>

                <div className="text-center space-y-2">
                  <h3 className="text-gray-900">Order Confirmed!</h3>
                  <p className="text-gray-600 text-sm">
                    Your order from{" "}
                    {instantRecommendations.find((r) => r.id === selectedOption)?.restaurant} is on its way
                  </p>
                </div>

                <div className="w-full bg-gray-50 rounded-2xl p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 text-sm">Order Total</span>
                    <span className="text-gray-900">
                      €{instantRecommendations.find((r) => r.id === selectedOption)?.price}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 text-sm">Estimated Delivery</span>
                    <span className="text-gray-900">
                      {instantRecommendations.find((r) => r.id === selectedOption)?.deliveryTime}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 text-sm">Serves</span>
                    <span className="text-gray-900">
                      {instantRecommendations.find((r) => r.id === selectedOption)?.servings}
                    </span>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}