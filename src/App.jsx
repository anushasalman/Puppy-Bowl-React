import { useState } from 'react'
import './App.css'
import AddPuppy from "./components/AddPuppy";
import PuppyList from "./components/PuppyList";
import Home from "./components/Home";
import { Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar";
import SelectedPup from "./components/SelectedPup"

const COHORT_NAME = `2402-FTB-ET-WEB-FT`;
const BASE_API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${COHORT_NAME}`;

function App() {
  const [updatePage, setUpdatePage] = useState(true);

  return (
    <>
      <NavBar />
      <h2>Puppy Bowl React</h2>
      <Routes>
        <Route path='/' element={<Home />} />
        {/*<Route path='/players' element={<PuppyList />} />*/}
        <Route path='/puppy/:id' element={<SelectedPup />} />
      </Routes>

      <AddPuppy baseUrl={BASE_API_URL} setUpdatePage={setUpdatePage} />
      <PuppyList baseUrl={BASE_API_URL} setUpdatePage={setUpdatePage} updatePage={updatePage} />
    </>
  )
}

export default App
