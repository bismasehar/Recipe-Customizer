import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import Customize from './Pages/Customize';
import About from './Pages/About';
import RecipeResult from './Pages/RecipeResult';
import SavedRecipeView from './Pages/SavedRecipeView'; // 👈 Make sure this path is correct

import './App.css'; // optional styling

const App = () => {
  return (
    <div>
      <Navbar />
      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/customize" element={<Customize />} />
          <Route path="/about" element={<About />} />
          <Route path="/recipe" element={<RecipeResult />} />
          <Route path="/saved-recipe" element={<SavedRecipeView />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
