import React from 'react';
import { Upload, RefreshCw } from 'lucide-react';

export default function ImagePreview({ type }) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-6">
        <div className="aspect-square rounded-xl bg-gray-100 flex flex-col items-center justify-center border-2 border-dashed border-gray-300 hover:border-blue-500 cursor-pointer transition-colors">
          <Upload className="w-8 h-8 text-gray-400 mb-2" />
          <span className="text-sm text-gray-600">Upload your photo</span>
        </div>
        
        <div className="aspect-square rounded-xl bg-gray-100 flex items-center justify-center">
          <img
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a"
            alt="Professional headshot example"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </div>

      <div className="flex justify-between items-center">
        <button className="px-4 py-2 text-gray-600 hover:text-gray-900 flex items-center space-x-2">
          <RefreshCw className="w-4 h-4" />
          <span>Generate More</span>
        </button>
        
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Download
        </button>
      </div>
    </div>
  );
}