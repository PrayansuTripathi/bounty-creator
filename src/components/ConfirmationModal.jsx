import React from "react";
import { AlertCircle } from "lucide-react";

const ConfirmationModal = ({ isOpen, isLoading, onConfirm, onCancel }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-lg max-w-md w-full p-6 md:p-8 animate-fade-in">
        <div className="flex items-center justify-center mb-6">
          <div className="bg-blue-100 rounded-full p-3">
            <AlertCircle className="w-6 h-6 text-blue-600" />
          </div>
        </div>

        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 text-center">
          Confirm Bounty Creation
        </h2>

        <p className="text-gray-600 text-center mb-8">
          Are you sure you want to publish this bounty? Once confirmed, it will
          be live on Impact Miner.
        </p>

        <div className="flex gap-3 flex-col-reverse md:flex-row">
          <button
            onClick={onCancel}
            disabled={isLoading}
            className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            No, Go Back
          </button>
          <button
            onClick={onConfirm}
            disabled={isLoading}
            className="flex-1 px-4 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                Publishing...
              </>
            ) : (
              "Yes, Publish"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
