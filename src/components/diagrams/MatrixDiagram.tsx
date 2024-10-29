import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';

export default function MatrixDiagram() {
  const [matrix, setMatrix] = useState({
    rows: ['High Impact', 'Low Impact'],
    cols: ['High Effort', 'Low Effort'],
    items: {
      'High Impact-High Effort': ['Item 1'],
      'High Impact-Low Effort': ['Item 2'],
      'Low Impact-High Effort': ['Item 3'],
      'Low Impact-Low Effort': ['Item 4'],
    }
  });

  const addItem = (row: string, col: string, item: string) => {
    const key = `${row}-${col}`;
    setMatrix({
      ...matrix,
      items: {
        ...matrix.items,
        [key]: [...(matrix.items[key] || []), item]
      }
    });
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        {matrix.rows.map(row => (
          matrix.cols.map(col => {
            const key = `${row}-${col}`;
            return (
              <div
                key={key}
                className="p-4 bg-white rounded-lg shadow-md"
              >
                <h3 className="font-medium mb-2">{`${row} / ${col}`}</h3>
                <div className="space-y-2">
                  {matrix.items[key]?.map((item, index) => (
                    <div key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded">
                      <span>{item}</span>
                      <button
                        onClick={() => {
                          const newItems = [...matrix.items[key]];
                          newItems.splice(index, 1);
                          setMatrix({
                            ...matrix,
                            items: { ...matrix.items, [key]: newItems }
                          });
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
                      placeholder="Add item"
                      className="flex-1 px-3 py-2 border rounded"
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                          addItem(row, col, e.currentTarget.value);
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
            );
          })
        ))}
      </div>
    </div>
  );
}