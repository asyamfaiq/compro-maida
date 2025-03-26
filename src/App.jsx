import { PrimeReactProvider } from 'primereact/api';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AOS from 'aos';
import 'primereact/resources/themes/viva-light/theme.css';
import 'primereact/resources/primereact.css';
import "aos/dist/aos.css";
import { useEffect } from 'react';
import HomePages from './pages/Home';

function App() {
  useEffect(() => {
    AOS.init({
      offset: 0,
      duration: 800,
      easing: 'ease-in-out',
      delay: 100,
    });
    AOS.refresh();
  });

  return (
    <>
      <PrimeReactProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePages />}/>
          </Routes>
        </BrowserRouter>
      </PrimeReactProvider>
    </>
  )
}

export default App
