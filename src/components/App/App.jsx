import { useEffect, useRef, useState } from 'react';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import Footer from '../Footer/Footer';

import './App.scss';
import { AppWidth } from 'src/context/context';

function App() {

  const appComponent = useRef(null);
  const [appWidth, setAppWidth] = useState(0);

  useEffect(() => {
    setAppWidth(appComponent.current.offsetWidth);
  }, [appWidth]);

  return (
    <AppWidth.Provider value={{ appWidth }}>
      <div className="App" ref={appComponent}>
        <Header/>
        <Banner/>
        <Menu/>
        <Footer/>
      </div>
    </AppWidth.Provider>

  );
}

export default App;
