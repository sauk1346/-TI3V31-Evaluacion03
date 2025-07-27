import React from 'react';
import { Briefcase } from 'lucide-react';
import JobCard from "./JobCard";

const JobsList = ({ jobs, filter, onFilterChange }) => {
    // Filtrar trabajos según el estado seleccionado
    const filteredJobs = filter === 'Todos' 
      ? jobs 
      : jobs.filter(job => job.status === filter);
  
    return (
      <div className="bg-white rounded-lg shadow-md p-6 mb-6 border-2 border-blue-200">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-blue-800 flex items-center">
            <Briefcase className="mr-2" />
            Experiencia Laboral ({filteredJobs.length})
          </h2>
          
          {/* Filtros */}
          <select
            value={filter}
            onChange={(e) => onFilterChange(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          >
            <option value="Todos">Todos los trabajos</option>
            <option value="Exitoso">Exitosos</option>
            <option value="En curso">En curso</option>
            <option value="Despedido">Despedido</option>
            <option value="Abandonado">Abandonados</option>
          </select>
        </div>
  
        {/* Renderizado condicional: mostrar mensaje si no hay trabajos */}
        {filteredJobs.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <Briefcase size={48} className="mx-auto mb-4 opacity-50" />
            <p>No hay trabajos que coincidan con el filtro seleccionado.</p>
            <p className="text-sm mt-2">¡Homero probablemente está inventando uno nuevo!</p>
          </div>
        ) : (
          /* Renderizado de lista de trabajos */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredJobs.map((job) => (
              <JobCard
                key={job.id}
                job={job}
                isHighlighted={job.rating >= 4.0}
              />
            ))}
          </div>
        )}
      </div>
    );
  };
  export default JobsList;