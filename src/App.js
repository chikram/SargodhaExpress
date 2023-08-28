import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";

const App = () => {
  const pageSize = 15;
  const apiKey = process.env.REACT_APP_NEWS_API
  return (
    <div>
      <Router>
        <NavBar />

        <Routes>
          <Route path="/" element={<News pageSize={pageSize} country="in" apiKey={apiKey} category="general" />} />
          <Route path="/business" element={<News pageSize={pageSize} country="in" apiKey={apiKey} category="business" />} />
          <Route path="/entertainment" element={<News pageSize={pageSize} country="in" apiKey={apiKey} category="entertainment" />} />
          <Route path="/health" element={<News pageSize={pageSize} country="in" apiKey={apiKey} category="health" />} />
          <Route path="/science" element={<News pageSize={pageSize} country="in" apiKey={apiKey} category="science" />} />
          <Route path="/sports" element={<News pageSize={pageSize} country="in" apiKey={apiKey} category="sports" />} />
          <Route path="/technology" element={<News pageSize={pageSize} country="in" apiKey={apiKey} category="technology" />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
