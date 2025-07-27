import React from 'react';
import { Star } from 'lucide-react';

const JobCard = ({ job, isHighlighted }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Exitoso': return 'text-green-600';
      case 'Despedido': return 'text-red-600';
      case 'Abandonado': return 'text-orange-600';
      case 'En curso': return 'text-blue-600';
      default: return 'text-gray-600';
    }
  };

  const getStatusBg = (status) => {
    switch (status) {
      case 'Exitoso': return 'bg-green-100';
      case 'Despedido': return 'bg-red-100';
      case 'Abandonado': return 'bg-orange-100';
      case 'En curso': return 'bg-blue-100';
      default: return 'bg-gray-100';
    }
  };

  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 border-l-4 ${
      isHighlighted ? 'border-l-yellow-400 ring-2 ring-yellow-300 transform scale-105' : 'border-l-blue-400'
    }`}>
      
      {/* Nueva sección de imagen */}
      {job.image && (
        <div className="h-48 overflow-hidden">
          <img 
            src={job.image} 
            alt={job.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              e.target.style.display = 'none'; // Oculta si la imagen no carga
            }}
          />
        </div>
      )}

      <div className="p-4">
        <div className="flex items-start justify-between mb-3">
          <h4 className="text-lg font-semibold text-gray-800">{job.title}</h4>
          <div className="flex items-center text-yellow-500">
            <Star size={16} className="mr-1" />
            <span className="text-sm">{job.rating}</span>
          </div>
        </div>
        
        <p className="text-gray-600 mb-3 italic">"{job.description}"</p>
        
        <div className="flex flex-wrap gap-2 mb-3">
          {job.skills.map((skill, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-md border border-yellow-300"
            >
              {skill}
            </span>
          ))}
        </div>
        
        <div className="flex items-center justify-between text-sm">
          <span className="flex items-center">
            Estado:
            <span className={`font-medium ml-1 px-2 py-1 rounded-md text-xs ${getStatusBg(job.status)} ${getStatusColor(job.status)}`}>
              {job.status}
            </span>
          </span>
          <span className="text-gray-500">{job.season}</span>
        </div>

        {job.funFact && (
          <div className="mt-3 p-2 bg-blue-50 rounded-md border-l-2 border-blue-300">
            <p className="text-xs text-blue-700">
              <strong>Dato curioso:</strong> {job.funFact}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobCard;