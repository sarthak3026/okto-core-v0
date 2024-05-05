import './App.css';
import React  from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Enquire from './pages/Enquire';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact component={Enquire}/> 
        </Routes>
      </Router>
    </div>
  )
}

export default App;
