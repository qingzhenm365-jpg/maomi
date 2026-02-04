import React, { useState } from 'react';
import HomeView from './components/HomeView';
import QuizView from './components/QuizView';
import GuideView from './components/GuideView';
import BreedListView from './components/BreedListView';
import CalculatorView from './components/CalculatorView';
import BreedDetailView from './components/BreedDetailView';
import Navigation from './components/Navigation';
import { ViewState } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('home');

  const renderView = () => {
    switch (currentView) {
      case 'home': return <HomeView />;
      case 'quiz': return <QuizView />;
      case 'guide': return <GuideView />;
      case 'list': return <BreedListView />;
      case 'calculator': return <CalculatorView />;
      case 'detail': return <BreedDetailView />;
      default: return <HomeView />;
    }
  };

  return (
    <div className="relative w-full h-full">
      {renderView()}
      <Navigation currentView={currentView} setView={setCurrentView} />
    </div>
  );
};

export default App;
