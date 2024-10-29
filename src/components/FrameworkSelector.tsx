import React from 'react';
import { FileCode, ArrowRight } from 'lucide-react';

export default function FrameworkSelector() {
  const frameworks = [
    {
      title: 'Business Model Canvas',
      description: 'Strategic management template for developing new or documenting existing business models',
      icon: FileCode
    },
    {
      title: 'Value Proposition Canvas',
      description: 'Tool to ensure product or service is positioned around customer values and needs',
      icon: FileCode
    }
  ];

  return (
    <div className="space-y-6">
      <div className="grid gap-4">
        {frameworks.map((framework, index) => (
          <div
            key={index}
            className="p-6 bg-gray-50 rounded-xl hover:bg-blue-50 cursor-pointer transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <framework.icon className="w-6 h-6 text-blue-600" />
                <div>
                  <h3 className="font-medium text-gray-900">{framework.title}</h3>
                  <p className="text-sm text-gray-600">{framework.description}</p>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}