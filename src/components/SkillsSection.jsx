import React from 'react';
import { Zap } from 'lucide-react';

const SkillsSection = ({ skills, onSkillClick, selectedSkill }) => {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 border-2 border-green-200">
        <h2 className="text-2xl font-bold text-green-800 mb-4 flex items-center">
          <Zap className="mr-2" />
          Habilidades "Profesionales"
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <div
              key={skill.id}
              onClick={() => onSkillClick(skill)}
              className={`p-3 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                selectedSkill?.id === skill.id
                  ? 'border-yellow-400 bg-yellow-50'
                  : 'border-gray-200 hover:border-yellow-300 hover:bg-yellow-25'
              }`}
            >
              <div className="text-center">
                <h4 className="font-medium text-gray-800 mb-2">{skill.name}</h4>
                <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                  <div
                    className="bg-gradient-to-r from-yellow-400 to-orange-500 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <span className="text-sm text-gray-600 font-semibold">{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>
  
        {/* Renderizado condicional: mostrar detalles de habilidad seleccionada */}
        {selectedSkill && (
          <div className="mt-6 p-4 bg-yellow-50 rounded-lg border-2 border-yellow-300">
            <h3 className="font-semibold text-yellow-800 mb-2 text-lg">{selectedSkill.name}</h3>
            <p className="text-yellow-700 mb-2">{selectedSkill.description}</p>
            <div className="flex justify-between items-center">
              <p className="text-sm text-yellow-600">
                <strong>Años de "experiencia":</strong> {selectedSkill.years}
              </p>
              <p className="text-xs text-yellow-600 italic">
                {selectedSkill.funQuote}
              </p>
            </div>
          </div>
        )}
      </div>
    );
  };
  export default SkillsSection;