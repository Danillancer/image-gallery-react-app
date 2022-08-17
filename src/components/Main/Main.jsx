import './Main.css';
const Main = ({img, handlerClick}) => {

  return (
    <div className='main'>
   {img? img.map(e=>(
      <div key={e.id} className='main__img-card' onClick={()=>handlerClick(e.id)}>
      <img src={e.url} alt="img" className="" />
      <p>id:{e.id}</p>
      </div>
   )):<></>}
    </div>
  )
}

export default Main