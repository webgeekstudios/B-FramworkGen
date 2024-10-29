import React, { useState } from 'react';
import { Wand2 } from 'lucide-react';

export default function PromptGenerator({ onGenerate }) {
  const [prompt, setPrompt] = useState('');
  const [style, setStyle] = useState('professional');
  
  const styles = [
    'professional', 'creative', 'minimal', 'bold', 'elegant', 'modern'
  ];

  const handleGenerate = () => {
    // Simulate AI generation
    onGenerate({ prompt, style });
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Describe your content
        </label>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="w-full h-32 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Enter your content description..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Visual Style
        </label>
        <div className="flex flex-wrap gap-2">
          {styles.map(s => (
            <button
              key={s}
              onClick={() => setStyle(s)}
              className={`px-4 py-2 rounded-full text-sm ${
                style === s
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {s.charAt(0).toUpperCase() + s.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <button
        onClick={handleGenerate}
        className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center justify-center space-x-2"
      >
        <Wand2 className="w-5 h-5" />
        <span>Generate Content</span>
      </button>
    </div>
  );
}