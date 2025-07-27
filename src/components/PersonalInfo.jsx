import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Briefcase, Star, Calendar, Eye, EyeOff, Zap, Trophy } from 'lucide-react';

// Componente para mostrar información personal
const PersonalInfo = ({ homer, isVisible, onToggleVisibility }) => {
  return (
    <div className="bg-yellow-50 rounded-lg shadow-md p-6 mb-6 border-2 border-yellow-300">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-blue-800 flex items-center">
          <User className="mr-2" />
          Información Personal
        </h2>
        <button
          onClick={onToggleVisibility}
          className="flex items-center px-3 py-1 bg-blue-100 text-blue-600 rounded-md hover:bg-blue-200 transition-colors"
        >
          {isVisible ? <EyeOff size={16} /> : <Eye size={16} />}
          <span className="ml-1">{isVisible ? 'Ocultar' : 'Mostrar'}</span>
        </button>
      </div>
      
      {/* Renderizado condicional basado en isVisible */}
      {isVisible && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center">
            <img
              src={homer.avatar}
              alt={homer.name}
              className="w-40 h-40 rounded-full mr-4 border-4 border-yellow-400"
            />
            <div>
              <h3 className="text-xl font-semibold text-blue-800">{homer.name}</h3>
              <p className="text-gray-700 font-medium">{homer.title}</p>
              <p className="text-sm text-gray-600 italic">"{homer.motto}"</p>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center text-gray-700">
              <Mail size={16} className="mr-2 text-blue-600" />
              {homer.email}
            </div>
            <div className="flex items-center text-gray-700">
              <Phone size={16} className="mr-2 text-blue-600" />
              {homer.phone}
            </div>
            <div className="flex items-center text-gray-700">
              <MapPin size={16} className="mr-2 text-blue-600" />
              {homer.location}
            </div>
            <div className="flex items-center text-gray-700">
              <Calendar size={16} className="mr-2 text-blue-600" />
              {homer.experience} años de "experiencia" laboral
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default PersonalInfo;