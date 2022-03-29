import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import logo from './logo.svg';
import './App.scss';
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import Form1 from './components/form1/formI';
import Form2 from './components/form2/form2';
import LandingPage from './components/LandingPage';
import Form3 from './components/form3/form3';
import Form4 from './components/form4/form4';
import Form5 from './components/form5/form5';
import Form6 from './components/form6/form6';
import Form7 from './components/form7/form7';
import Form8 from './components/form8/form8';
import Form9 from './components/form9/form9';
import Form10 from './components/form10/form10';
function App() {
  return (<div className='mainFile'><Header/>
    <BrowserRouter>
      <Routes>
        <Route path='/myComponentOne' element={<Form1 />} />
        <Route path="/mla" element={<Form2 />} />
        <Route path="/LandingPage" element={<LandingPage />} />
        <Route path="/formThree" element={<Form3 />} />
        <Route path="/formFour" element={<Form4 />} />
        <Route path="/formFive" element={<Form5 />} />
        <Route path="/formSix" element={<Form6 />} />
        <Route path='/formSeven' element={<Form7 />} />
        <Route path='/formEight' element={<Form8 />} />
        <Route path='/formNine' element={<Form9 />} />
        <Route path='/formTen' element={<Form10 />} />
      </Routes>
    </BrowserRouter>
    <Footer/></div>
  );
}

export default App;
