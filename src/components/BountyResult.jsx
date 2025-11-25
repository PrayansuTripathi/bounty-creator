import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { Copy, Check } from "lucide-react";
import confirmationImg from "../assets/confirmation.webp";

const BountyResult = ({ finalPayload }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(JSON.stringify(finalPayload, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex font-sans">
      <Sidebar currentStep={4} completedSteps={[1, 2, 3]} goToStep={() => {}} />

      <main className="flex-1 md:ml-64 p-4 md:p-8 flex items-center justify-center min-h-screen">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 max-w-3xl w-full overflow-hidden animate-fade-in">
          <div className="p-10 flex flex-col items-center border-b border-gray-100">
            <div className="flex items-center justify-center gap-2 mb-6">
              <img src={confirmationImg} />
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">
              Bounty Published Successfully!
            </h2>

            <p className="text-gray-500 text-center max-w-md">
              Your bounty is now live on Impact Miner. Below is the JSON payload
              generated for the backend.
            </p>
          </div>

          <div className="bg-gray-900 p-6 overflow-x-auto relative group">
            <button
              onClick={copyToClipboard}
              className="absolute top-4 right-4 text-gray-400 hover:text-white bg-gray-800 p-2 rounded-lg transition-colors flex items-center gap-2 text-xs font-medium"
            >
              {copied ? (
                <Check className="w-4 h-4 text-green-400" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
              {copied ? "Copied" : "Copy JSON"}
            </button>

            <pre className="text-green-400 font-mono text-sm leading-relaxed whitespace-pre-wrap break-words">
              {JSON.stringify(finalPayload, null, 2)}
            </pre>
          </div>

          <div className="p-6 bg-gray-50 flex justify-center">
            <button
              onClick={() => window.location.reload()}
              className="text-primary-600 font-medium hover:text-primary-700 hover:underline"
            >
              Create Another Bounty
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BountyResult;
