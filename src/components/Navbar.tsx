import React from 'react';
import { Brain } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Brain className="w-8 h-8 text-blue-600" />
            <span className="font-bold text-xl text-gray-900">ThoughtLeader AI</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 text-gray-600 hover:text-gray-900">Dashboard</button>
            <button className="px-4 py-2 text-gray-600 hover:text-gray-900">Templates</button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              New Project
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}