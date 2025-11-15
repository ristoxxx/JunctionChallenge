import { useState } from "react";
import { WoltLandingPage } from "./components/WoltLandingPage";
import { VoiceAssistantDemo } from "./components/VoiceAssistantDemo";

export default function App() {
  const [showAIAssistant, setShowAIAssistant] = useState(false);

  if (showAIAssistant) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
        <VoiceAssistantDemo onBack={() => setShowAIAssistant(false)} />
      </div>
    );
  }

  return <WoltLandingPage onAIAssistantClick={() => setShowAIAssistant(true)} />;
}
