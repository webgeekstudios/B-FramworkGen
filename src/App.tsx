import React, { useState } from 'react';
import { Brain, Image, Palette, FileCode, Youtube, Layout, Upload, GitGraph } from 'lucide-react';
import Navbar from './components/Navbar';
import PromptGenerator from './components/PromptGenerator';
import ImagePreview from './components/ImagePreview';
import FrameworkSelector from './components/FrameworkSelector';
import DiagramGenerator from './components/diagrams/DiagramGenerator';

function App() {
  const [selectedTool, setSelectedTool] = useState('prompt');
  const [generatedContent, setGeneratedContent] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-50">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">AI Content Studio</h1>
          <p className="text-lg text-gray-600 mb-8">Transform your ideas into professional content with AI-powered generation</p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
            {[
              { id: 'prompt', icon: Brain, label: 'Prompt Generator' },
              { id: 'profile', icon: Image, label: 'Profile Pictures' },
              { id: 'branding', icon: Palette, label: 'Brand Kit' },
              { id: 'frameworks', icon: FileCode, label: 'Frameworks' },
              { id: 'diagrams', icon: GitGraph, label: 'Diagrams' },
              { id: 'thumbnails', icon: Youtube, label: 'Thumbnails' },
              { id: 'templates', icon: Layout, label: 'Templates' }
            ].map(tool => (
              <button
                key={tool.id}
                onClick={() => setSelectedTool(tool.id)}
                className={`p-6 rounded-xl transition-all ${
                  selectedTool === tool.id
                    ? 'bg-blue-600 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-blue-50 shadow-md'
                }`}
              >
                <tool.icon className="w-8 h-8 mb-2 mx-auto" />
                <span className="block text-sm font-medium">{tool.label}</span>
              </button>
            ))}
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            {selectedTool === 'prompt' && (
              <PromptGenerator onGenerate={setGeneratedContent} />
            )}
            {selectedTool === 'profile' && (
              <ImagePreview type="profile" />
            )}
            {selectedTool === 'frameworks' && (
              <FrameworkSelector />
            )}
            {selectedTool === 'diagrams' && (
              <DiagramGenerator />
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;