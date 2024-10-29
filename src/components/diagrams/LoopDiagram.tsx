import React, { useState } from 'react';
import { RotateCw, Plus, X } from 'lucide-react';

export default function LoopDiagram() {
  const [steps, setSteps] = useState([
    { id: 1, label: 'Plan' },
    { id: 2, label: 'Do' },
    { id: 3, label: 'Check' },
    { id: 4, label: 'Act' }
  ]);

  const addStep = (label: string) => {
    setSteps([...steps, { id: steps.length + 1, label }]);
  };

  return (
    <div className="space-y-6">
      <div className="relative h-80">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-64 h-64">
            {steps.map((step, index) => {
              const angle = (index * 360) / steps.length;
              const radius = 120;
              const x = Math.cos((angle * Math.PI) / 180) * radius;
              const y = Math.sin((angle * Math.PI) / 180) * radius;

              return (
                <div
                  key={step.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2"
                  style={{
                    left: `${x + 128}px`,
                    top: `${y + 128}px`
                  }}
                >
                  <div className="bg-blue-100 p-4 rounded-lg shadow-md">
                    <h3 className="font-medium text-center">{step.label}</h3>
                  </div>
                  <div
                    className="absolute w-32 h-0.5 bg-blue-300 origin-left"
                    style={{
                      transform: `rotate(${angle + 90}deg)`,
                      left: '50%',
                      top: '50%'
                    }}
                  />
                </div>
              );
            })}
            <RotateCw className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-blue-500" />
          </div>
        </div>
      </div>

      <div className="flex space-x-4">
        <input
          type="text"
          placeholder="Add step"
          className="flex-1 px-4 py-2 border rounded-lg"
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              addStep(e.currentTarget.value);
              e.currentTarget.value = '';
            }
          }}
        />
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Add Step
        </button>
      </div>
    </div>
  );
}