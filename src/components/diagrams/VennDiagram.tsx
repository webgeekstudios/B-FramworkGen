import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';

export default function VennDiagram() {
  const [circles, setCircles] = useState([
    { id: 1, label: 'Circle 1', color: 'bg-blue-200', items: ['Item 1', 'Item 2'] },
    { id: 2, label: 'Circle 2', color: 'bg-green-200', items: ['Item 3', 'Item 4'] },
  ]);

  const addItem = (circleId: number, item: string) => {
    setCircles(circles.map(circle => 
      circle.id === circleId 
        ? { ...circle, items: [...circle.items, item] }
        : circle
    ));
  };

  const removeItem = (circleId: number, itemIndex: number) => {
    setCircles(circles.map(circle =>
      circle.id === circleId
        ? { ...circle, items: circle.items.filter((_, i) => i !== itemIndex) }
        : circle
    ));
  };

  return (
    <div className="space-y-6">
      <div className="relative h-80">
        <div className="absolute inset-0 flex items-center justify-center">
          {circles.map((circle, index) => (
            <div
              key={circle.id}
              className={`absolute w-48 h-48 rounded-full ${circle.color} bg-opacity-50 flex items-center justify-center transform ${
                index === 0 ? '-translate-x-12' : 'translate-x-12'
              }`}
            >
              <div className="text-center">
                <h3 className="font-medium mb-2">{circle.label}</h3>
                {circle.items.map((item, i) => (
                  <div key={i} className="flex items-center justify-center space-x-2">
                    <span>{item}</span>
                    <button
                      onClick={() => removeItem(circle.id, i)}
                      className="text-gray-500 hover:text-red-500"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {circles.map(circle => (
          <div key={circle.id} className="space-y-2">
            <h4 className="font-medium">{circle.label}</h4>
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Add item"
                className="flex-1 px-3 py-2 border rounded-lg"
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    addItem(circle.id, e.currentTarget.value);
                    e.currentTarget.value = '';
                  }
                }}
              />
              <button
                className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                <Plus className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}