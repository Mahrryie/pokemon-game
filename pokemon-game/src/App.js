import Header from './components/Header/Header';
import Layout from './components/Layout/Layout';
import Footer from './components/Footer/Footer';
import './index';


function App() {
  return (
    <>
      <Header title='Ого!' descr='Ну как, норм?'/>
      <Layout urlBg='assets/bg1.jpg'/>
      <Layout urlBg='assets/bg1.jpg'/>
      <Layout colorBg='red'/>
      <Footer/>
    </>
  );
}

export default App;
