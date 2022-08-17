import React, { useRef } from 'react'
import { useState } from 'react';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';
import './Modal.css'
import axios from 'axios';

const Modal = ({modalImg,closeModal,setModalOpen,setModalImg}) => {

  const [valueTextArea, setValueTextArea]= useState('')
   const ref = useRef();
   useOnClickOutside(ref, () => {
      setModalOpen(false)
      setModalImg([])
   });

 const handleSubmite = (e)=>{
  e.preventDefault()

  axios.post(`https://boiling-refuge-66454.herokuapp.com/images/${modalImg.id}/comments`,{
    name: "admin",
    comment: valueTextArea
  })
  setValueTextArea('')
 }

  return (
    <div  className='modal'>
    <div ref={ref} className='modal__container'>
    <button onClick={closeModal} className='modal__close'>&#10006;</button>
    <div className='modal__img'>
      <img src={modalImg.url} alt="" />
      </div>
      <form className='modal__form' onSubmit={e=>handleSubmite(e)}>
      <p className='modal__text-1'>Comment</p>
      <textarea value={valueTextArea} name="" className='modal__textarea' onChange={(e)=>setValueTextArea(e.target.value)}></textarea>
      <p className='modal__text-2'>Write a few sentences about the photo.</p>
      <div className='modal__btn'>
      <button>Save</button>
      </div>
      </form>
   </div>
    </div>
  )
}

export default Modal