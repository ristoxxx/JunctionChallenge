import { Bell, Mic, MapPin, ChevronDown, Search } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import woltAppImage from "figma:asset/fa5599e8cad1a119abc5598c6ae9b5097f66e4c3.png";

interface WoltLandingPageProps {
  onAIAssistantClick: () => void;
}

export function WoltLandingPage({ onAIAssistantClick }: WoltLandingPageProps) {
  const categories = [
    { name: "Ravintolat", emoji: "🍽️", color: "bg-yellow-100" },
    { name: "Päivittäis-\nvarat", emoji: "🍌", color: "bg-green-100" },
    { name: "Wolt Market", emoji: "🛒", color: "bg-green-100" },
    { name: "Apteekki", emoji: "💊", color: "bg-red-100" },
    { name: "Lemmikit", emoji: "🐾", color: "bg-orange-100" },
  ];

  const restaurants = [
    {
      id: 1,
      name: "Taco Bell Finoo",
      description: "Meksikolainen pikaruoka...",
      tag: "Ilmainen toimitus",
      tagColor: "bg-blue-500",
      price: "0.00 €",
      time: "35-45 min",
      rating: "8.8",
      image: "🌮",
    },
    {
      id: 2,
      name: "Elias Döner Kebab",
      description: "Elias Döner kebab",
      tag: "W+ -25% valtit",
      tagColor: "bg-purple-500",
      price: "0.00 €",
      time: "20-30 min",
      rating: "9.2",
      image: "🥙",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Mobile Status Bar */}
      <div className="bg-white px-4 pt-3 pb-2">
        <div className="flex items-center justify-between mb-4">
          <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs">
            14.20
          </div>
          <div className="flex items-center gap-2 text-xs">
            <span>5G</span>
            <span>••••</span>
            <div className="w-6 h-3 border-2 border-gray-800 rounded-sm relative">
              <div className="absolute right-0 top-0 bottom-0 w-4 bg-gray-800"></div>
            </div>
          </div>
        </div>

        {/* Header with Location and Icons */}
        <div className="flex items-center justify-between mb-4">
          <button className="flex items-center gap-2 bg-gray-100 px-4 py-3 rounded-full flex-1 mr-3">
            <MapPin className="w-5 h-5" />
            <span className="text-sm">Nykyinen sijainti</span>
            <ChevronDown className="w-4 h-4 ml-auto" />
          </button>
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-gray-100 h-12 w-12"
            >
              <Bell className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 h-12 w-12 hover:from-blue-600 hover:to-indigo-700 transition-all hover:scale-105"
              onClick={onAIAssistantClick}
            >
              <Mic className="w-5 h-5 text-white" />
            </Button>
          </div>
        </div>
      </div>

      {/* Category Carousel */}
      <div className="px-4 py-4 bg-white mb-4">
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((category, index) => (
            <button
              key={index}
              className="flex flex-col items-center gap-2 flex-shrink-0"
            >
              <div className={`${category.color} w-20 h-20 rounded-2xl flex items-center justify-center text-3xl`}>
                {category.emoji}
              </div>
              <span className="text-xs text-center whitespace-pre-line leading-tight">
                {category.name}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Promotional Banner */}
      <div className="px-4 mb-6">
        <Card className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 rounded-3xl overflow-hidden relative">
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-white rounded-xl px-4 py-2">
                <span className="text-orange-600">BURGER KING</span>
              </div>
              <div className="bg-white rounded-full p-2">
                <span className="text-xs">🌱 Kasvispohjainen</span>
              </div>
            </div>
            <h3 className="text-white mb-2">Iso ateria isoon nälkään</h3>
            <p className="text-white text-sm opacity-90">
              WHOPPER® -iso ateria (myös Plant-based) -25 %. Hyödynnä etu ja nauti!
            </p>
          </div>
          <div className="absolute -right-4 -bottom-4 text-8xl opacity-20">🍔</div>
        </Card>

        {/* Carousel Dots */}
        <div className="flex justify-center gap-2 mt-3">
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full ${
                i === 0 ? "bg-gray-800" : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>
      </div>

      {/* Section Header */}
      <div className="px-4 mb-4 flex items-center justify-between">
        <h3 className="text-gray-900">Wolt+–ravintolat ja -kaupat</h3>
        <Button variant="link" className="text-blue-500 p-0">
          Kaikki
        </Button>
      </div>

      {/* Restaurant Cards */}
      <div className="px-4 space-y-4 mb-6">
        {restaurants.map((restaurant) => (
          <Card key={restaurant.id} className="overflow-hidden bg-white">
            <div className="relative">
              <div className="h-40 bg-gradient-to-br from-orange-100 to-yellow-100 flex items-center justify-center text-6xl">
                {restaurant.image}
              </div>
              <div className={`absolute top-3 left-3 ${restaurant.tagColor} text-white px-3 py-1 rounded-full text-xs flex items-center gap-1`}>
                {restaurant.tag.includes("Ilmainen") && (
                  <span>🚚</span>
                )}
                {restaurant.tag}
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-start justify-between mb-1">
                <h4 className="text-gray-900">{restaurant.name}</h4>
                <span className="bg-gray-100 px-2 py-1 rounded text-xs">
                  W+
                </span>
              </div>
              <p className="text-gray-500 text-sm mb-3">{restaurant.description} • Sponsoroitu</p>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <span className="text-blue-500">🚲</span>
                  <span>{restaurant.price}</span>
                </div>
                <div className="flex items-center gap-1">
                  <span>•</span>
                  <span>{restaurant.time}</span>
                </div>
                <div className="flex items-center gap-1">
                  <span>•</span>
                  <span>😊 {restaurant.rating}</span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2">
        <div className="flex justify-around max-w-md mx-auto">
          <button className="flex flex-col items-center gap-1 py-2">
            <div className="text-blue-500">🏠</div>
            <span className="text-xs text-blue-500">Esittelyssä</span>
          </button>
          <button className="flex flex-col items-center gap-1 py-2">
            <div className="text-gray-400">🍽️</div>
            <span className="text-xs text-gray-400">Ravintolat</span>
          </button>
          <button className="flex flex-col items-center gap-1 py-2">
            <div className="text-gray-400">🛒</div>
            <span className="text-xs text-gray-400">Kaupat</span>
          </button>
          <button className="flex flex-col items-center gap-1 py-2">
            <div className="text-gray-400">🔍</div>
            <span className="text-xs text-gray-400">Haku</span>
          </button>
          <button className="flex flex-col items-center gap-1 py-2">
            <div className="text-gray-400">👤</div>
            <span className="text-xs text-gray-400">Profiili</span>
          </button>
        </div>
      </div>

      {/* Reference Image (Hidden, for design reference only) */}
      <img src={woltAppImage} alt="Wolt Design Reference" className="hidden" />
    </div>
  );
}
