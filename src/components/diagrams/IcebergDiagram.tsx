import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';

export default function IcebergDiagram() {
  const [levels, setLevels] = useState([
    { id: 1, label: 'Visible', items: ['Surface Level 1', 'Surface Level 2'] },
    { id: 2, label: 'Hidden', items: ['Hidden Level 1', 'Hidden Level 2'] },
    { id: 3, label: 'Deep', items: ['Deep Level 1', 'Deep Level 2'] }
  ]);

  const addItem = (levelId: number, item: string) => {
    setLevels(levels.map(level =>
      level.id === levelId
        ? { ...level, items: [...level.items, item] }
        : level
    ));
  };

  return (
    <div className="space-y-6">
      <div className="relative min-h-[500px] bg-gradient-to-b from-sky-200 to-blue-900">
        {levels.map((level, index) => (
          <div
            key={level.id}
            className="absolute w-full p-4"
            style={{
              top: `${index * 33}%`,
              backgroundColor: `rgba(255, 255, 255, ${0.8 - index * 0.2})`
            }}
          >
            <h3 className="font-medium mb-2 text-center">{level.label}</h3>
            <div className="space-y-2">
              {level.items.map((item, i) => (
                <div key={i} className="flex items-center justify-between bg-white bg-opacity-50 p-2 rounded">
                  <span>{item}</span>
                  <button
                    onClick={() => {
                      setLevels(levels.map(l =>
                        l.id === level.id
                          ? { ...l, items: l.items.filter((_, index) => index !== i) }
                          : l
                      ));
                    }}
                    className="text-gray-500 hover:text-red-500"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder={`Add to ${level.label}`}
                  className="flex-1 px-3 py-2 border rounded"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      addItem(level.id, e.currentTarget.value);
                      e.currentTarget.value = '';
                    }
                  }}
                />
                <button className="p-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}