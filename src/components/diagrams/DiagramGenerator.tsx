import React, { useState } from 'react';
import VennDiagram from './VennDiagram';
import SystemArchitecture from './SystemArchitecture';
import MatrixDiagram from './MatrixDiagram';
import IcebergDiagram from './IcebergDiagram';
import LoopDiagram from './LoopDiagram';

const diagramTypes = [
  { id: 'venn', label: 'Venn Diagram' },
  { id: 'system', label: 'System Architecture' },
  { id: 'matrix', label: 'Matrix' },
  { id: 'iceberg', label: 'Iceberg' },
  { id: 'loop', label: 'Loop' }
];

export default function DiagramGenerator() {
  const [selectedDiagram, setSelectedDiagram] = useState('venn');
  const [diagramData, setDiagramData] = useState({});

  return (
    <div className="space-y-8">
      <div className="flex space-x-4 overflow-x-auto pb-4">
        {diagramTypes.map(type => (
          <button
            key={type.id}
            onClick={() => setSelectedDiagram(type.id)}
            className={`px-6 py-3 rounded-lg whitespace-nowrap ${
              selectedDiagram === type.id
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {type.label}
          </button>
        ))}
      </div>

      <div className="bg-gray-50 rounded-xl p-6">
        {selectedDiagram === 'venn' && <VennDiagram />}
        {selectedDiagram === 'system' && <SystemArchitecture />}
        {selectedDiagram === 'matrix' && <MatrixDiagram />}
        {selectedDiagram === 'iceberg' && <IcebergDiagram />}
        {selectedDiagram === 'loop' && <LoopDiagram />}
      </div>
    </div>
  );
}