import SGlobal from './Style';
import Header from './components/Header';
import Form from './components/Form';
import PierreFeilleCiseaux from './components/PierreFeuilleCiseaux';
import Gallery from './components/Gallery';
import Fight from './components/Fight';
import PictureChoice from './components/PictureChoice';
import { Route, Routes } from 'react-router-dom';
import Ring from './components/Ring';
import Burger from './components/Burger';

function App() {
  return (
    <SGlobal>
      <Header />
      <Routes>
        <Route path='/Form' element={<Form />} />
        <Route path='/PierreFeilleCiseaux' element={<PierreFeilleCiseaux />} />
        <Route path='/Gallery' element={<Gallery />} />
        <Route path='/Fight' element={<Fight />} />
        <Route path='/PictureChoice' element={<PictureChoice />} />
        <Route path='/Ring' element={<Ring />} />
        <Route path='/Burger' element={<Burger />} />
      </Routes>
    </SGlobal>
  );
}

export default App;
