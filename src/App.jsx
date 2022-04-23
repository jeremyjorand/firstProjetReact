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
import UniversUseParams from './components/UnivesUseParams';
import Test from './components/Test';

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
        <Route path='/univers' element={<UniversUseParams />} />
        <Route path='/univers/:univers' element={<Test />} />
      </Routes>
    </SGlobal>
  );
}

export default App;
