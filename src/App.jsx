import './App.css'
import { Home } from './components/home'
import Page2 from './pages/page2';
import Page3 from './pages/page3';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {

  return (
    <>
      <div className='App'>
        <Router>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='page2' element={<Page2/>}/>
            <Route path='page2/page3' element={<Page3/>}/>
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
