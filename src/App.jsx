import React, { useState } from 'react'
import JobsList from './components/JobsList';
import PersonalInfo from './components/PersonalInfo';
import SkillsSection from './components/SkillsSection';
import homer from './data/homer';
import jobs from './data/jobs';
import skills from './data/skills';
import './App.css'

function App() {
  // Estados para manejar la visibilidad y filtros
  const [showPersonalInfo, setShowPersonalInfo] = useState(true);
  const [jobFilter, setJobFilter] = useState('Todos');
  const [selectedSkill, setSelectedSkill] = useState(null);

  // Función para cambiar la visibilidad de información personal
  const togglePersonalInfo = () => {
    setShowPersonalInfo(!showPersonalInfo);
  };

  // Función para cambiar el filtro de trabajos
  const handleFilterChange = (filter) => {
    setJobFilter(filter);
  };

  // Función para seleccionar una habilidad
  const handleSkillClick = (skill) => {
    setSelectedSkill(selectedSkill?.id === skill.id ? null : skill);
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-blue-50 to-green-100 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <header className="text-center mb-8 bg-white rounded-lg shadow-lg p-6 border-4 border-yellow-400">
          <h1 className="text-5xl font-bold text-blue-800 mb-2">
            🍩 Portafolio Profesional 🍺
          </h1>
          <h2 className="text-3xl font-semibold text-yellow-600 mb-2">
            Homero J. Simpson
          </h2>
          <p className="text-lg text-gray-600">
            "Experto en Todo, Maestro en Nada... ¡Pero Con Entusiasmo!"
          </p>
          <div className="mt-4 flex justify-center space-x-4 text-2xl">
            <span>🏭</span><span>🚀</span><span>🎵</span><span>🥊</span><span>🍔</span>
          </div>
        </header>

        {/* Pasando datos y funciones como props a componentes hijos */}
        <PersonalInfo
          homer={homer}
          isVisible={showPersonalInfo}
          onToggleVisibility={togglePersonalInfo}
        />

        <JobsList
          jobs={jobs}
          filter={jobFilter}
          onFilterChange={handleFilterChange}
        />

        <SkillsSection
          skills={skills}
          onSkillClick={handleSkillClick}
          selectedSkill={selectedSkill}
        />

        <footer className="mt-8 text-center text-gray-600 bg-white rounded-lg p-4 border-2 border-gray-200">
          <p className="italic">"Marge, estoy confundido... ¿es esto un CV o una confesión?"</p>
          <p className="text-sm mt-2">- Homero J. Simpson, CEO de la vida</p>
        </footer>
      </div>
    </div>
  );
};
export default App;
