
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Modal from './components/Modal/Modal';


function App() {
  
  const [img, setImg] = useState([])
  const [modalOpen, setModalOpen]= useState(false)
  const [modalImg, setModalImg]= useState([])
 

  
  useEffect(()=>{
   axios.get('https://boiling-refuge-66454.herokuapp.com/images ').then(res=> setImg(res.data))
  }, []) 
 
  const handlerClick = (id)=>{
    setModalOpen(true)
   axios.get(`https://boiling-refuge-66454.herokuapp.com/images/${id}`).then(res=>setModalImg(res.data))
  }
  const closeModal= ()=>{
    setModalOpen(false)
    setModalImg([])
  }
  return (
    <div className="App">
     <Header/>
     <Main img={img} handlerClick={handlerClick}/>
     {modalOpen? <Modal modalImg={modalImg} closeModal={closeModal} setModalOpen={setModalOpen} setModalImg={setModalImg}/>:''}
     
    </div>
  );
}

export default App;
