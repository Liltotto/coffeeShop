import { useEffect, useRef, useState } from 'react';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import Footer from '../Footer/Footer';

import './App.scss';
import { AppWidth } from 'src/context/context';
import FormAuth from '@components/FormAuth/FormAuth';
import ModalBase from '@components/ModalBase/ModalBase';
import AuthModal from '@components/AuthModal/AuthModal';

function App() {

  const appComponent = useRef(null);
  const [appWidth, setAppWidth] = useState(0);

  const [visibleModal, setVisibleModal] = useState(false);

  useEffect(() => {
    setAppWidth(appComponent.current.offsetWidth);
  }, [appWidth]);

  return (
    <AppWidth.Provider value={{ appWidth }}>
      <div className="App" ref={appComponent}>
        <Header setVisibleModal={setVisibleModal}/>
        <ModalBase visible={visibleModal} setVisible={setVisibleModal}>
          <AuthModal/>
        </ModalBase>
        <Banner/>
        {/* <FormAuth/> */}
        <Menu/>
        <Footer/>
      </div>
    </AppWidth.Provider>

  );
}

export default App;
