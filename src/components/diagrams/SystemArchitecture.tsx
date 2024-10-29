import React, { useState } from 'react';
import { ArrowRight, Plus, X } from 'lucide-react';

export default function SystemArchitecture() {
  const [components, setComponents] = useState([
    { id: 1, label: 'Frontend', connections: [2] },
    { id: 2, label: 'API Gateway', connections: [3] },
    { id: 3, label: 'Database', connections: [] }
  ]);

  const addComponent = (label: string) => {
    setComponents([...components, {
      id: components.length + 1,
      label,
      connections: []
    }]);
  };

  const toggleConnection = (fromId: number, toId: number) => {
    setComponents(components.map(comp => {
      if (comp.id === fromId) {
        return {
          ...comp,
          connections: comp.connections.includes(toId)
            ? comp.connections.filter(id => id !== toId)
            : [...comp.connections, toId]
        };
      }
      return comp;
    }));
  };

  return (
    <div className="space-y-6">
      <div className="min-h-[400px] bg-white rounded-lg p-6 relative">
        {components.map((component, index) => (
          <div
            key={component.id}
            className="absolute p-4 bg-blue-100 rounded-lg shadow-md"
            style={{
              left: `${(index * 200) + 50}px`,
              top: '50%',
              transform: 'translateY(-50%)'
            }}
          >
            <h3 className="font-medium text-center mb-2">{component.label}</h3>
            {component.connections.map(targetId => {
              const target = components.find(c => c.id === targetId);
              if (!target) return null;
              return (
                <div
                  key={`${component.id}-${targetId}`}
                  className="absolute w-32 h-0.5 bg-gray-300"
                  style={{
                    left: '100%',
                    top: '50%',
                    transform: 'translateY(-50%)'
                  }}
                >
                  <ArrowRight className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 text-gray-500" />
                </div>
              );
            })}
          </div>
        ))}
      </div>

      <div className="flex space-x-4">
        <input
          type="text"
          placeholder="Add component"
          className="flex-1 px-4 py-2 border rounded-lg"
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              addComponent(e.currentTarget.value);
              e.currentTarget.value = '';
            }
          }}
        />
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Add Component
        </button>
      </div>
    </div>
  );
}