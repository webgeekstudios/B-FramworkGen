import React, { useState } from 'react';
import { Palette, Type, Image, FileText, Grid } from 'lucide-react';
import ColorPalette from './ColorPalette';
import Typography from './Typography';
import LogoGenerator from './LogoGenerator';
import BrandGuidelines from './BrandGuidelines';
import BrandPersonality from './BrandPersonality';

export default function BrandingGenerator() {
  const [activeSection, setActiveSection] = useState('personality');
  const [brandData, setBrandData] = useState({
    personality: {
      vision: '',
      mission: '',
      values: [],
      voice: '',
      archetype: ''
    },
    colors: {
      primary: '#2563eb',
      secondary: '#4f46e5',
      accent: '#ec4899',
      neutral: '#64748b'
    },
    typography: {
      headingFont: 'Inter',
      bodyFont: 'Inter',
      scale: 'modern'
    },
    logo: {
      style: 'minimal',
      symbol: 'abstract',
      layout: 'horizontal'
    }
  });

  const sections = [
    { id: 'personality', label: 'Brand Personality', icon: Grid },
    { id: 'colors', label: 'Color Palette', icon: Palette },
    { id: 'typography', label: 'Typography', icon: Type },
    { id: 'logo', label: 'Logo Creator', icon: Image },
    { id: 'guidelines', label: 'Guidelines', icon: FileText }
  ];

  return (
    <div className="space-y-8">
      <div className="flex space-x-4 overflow-x-auto pb-4">
        {sections.map(section => (
          <button
            key={section.id}
            onClick={() => setActiveSection(section.id)}
            className={`px-6 py-3 rounded-lg flex items-center space-x-2 whitespace-nowrap ${
              activeSection === section.id
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <section.icon className="w-5 h-5" />
            <span>{section.label}</span>
          </button>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">
        {activeSection === 'personality' && (
          <BrandPersonality
            data={brandData.personality}
            onChange={personality => setBrandData({ ...brandData, personality })}
          />
        )}
        {activeSection === 'colors' && (
          <ColorPalette
            colors={brandData.colors}
            onChange={colors => setBrandData({ ...brandData, colors })}
          />
        )}
        {activeSection === 'typography' && (
          <Typography
            typography={brandData.typography}
            onChange={typography => setBrandData({ ...brandData, typography })}
          />
        )}
        {activeSection === 'logo' && (
          <LogoGenerator
            logo={brandData.logo}
            colors={brandData.colors}
            onChange={logo => setBrandData({ ...brandData, logo })}
          />
        )}
        {activeSection === 'guidelines' && (
          <BrandGuidelines brandData={brandData} />
        )}
      </div>
    </div>
  );
}