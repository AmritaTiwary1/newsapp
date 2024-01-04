import './App.css';
import React from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
 <Router>
          <NavBar></NavBar>
          <Routes>
            <Route
              exact
              path="/"
              element={<News key="General"country="in" category='General'></News>}
            ></Route>
            <Route
              exact
              path="/Sports"
              element={<News key="Sports"country="in" category='Sports'></News>}
            ></Route>
            <Route
              exact
              path="/Entertainment"
              element={<News key="Entertainment"country="in" category='Entertainment'></News>}
            ></Route>
            <Route
              exact
              path="/Science"
              element={<News key="Science"country="in" category='Science'></News>}
            ></Route>
            <Route
              exact
              path="/Business"
              element={<News key="Business"country="in" category='Business'></News>}
            ></Route>
            <Route
              exact
              path="/Technology"
              element={<News key="Technology"country="in" category='Technology'></News>}
            ></Route>
          </Routes>
        </Router>
      </>
  )
}



