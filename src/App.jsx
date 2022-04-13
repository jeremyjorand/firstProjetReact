import SGlobal from './Style';
import Header from './components/Header';
import Form from './components/Form';
import PierreFeilleCiseaux from './components/PierreFeuilleCiseaux';
import Ring from './components/Ring';
import Fight from './components/Fight';
import PictureChoice from './components/PictureChoice';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <SGlobal>
      <Header />
      <Routes>
        <Route path='/Form' element={<Form />} />
        <Route path='/PierreFeilleCiseaux' element={<PierreFeilleCiseaux />} />
        <Route path='/Ring' element={<Ring />} />
        <Route path='/Fight' element={<Fight />} />
        <Route path='/PictureChoice' element={<PictureChoice />} />
      </Routes>
    </SGlobal>
  );
}

export default App;
