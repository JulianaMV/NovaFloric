import React from 'react'
import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import buquesThunks from '../redux/thunks/buquesThunks'
import { useHistory } from 'react-router-dom';




export default function Buques(){

const dispatch = useDispatch();
const history = useHistory();  
const detailsBuq = (id) => {
  history.push(`/detailsBuq/${id}`);
};


const buques = useSelector((state)=> state.buques);

useEffect(()=>{
    dispatch(buquesThunks.load())
},[dispatch])

    return(
      <div className='content'>
        <h1 className='title'> Buques</h1>
        <div className='cardsDiv'>
        {buques.map(item =>(
          <div key={item._id} className='card'>
            <p className="simb">
            {item.isOffline ? <i className="fas fa-circle-notch"></i> : <i className="far fa-circle"></i> }
            </p>
            <p className="titleBuq">{item.title}</p>
            <button onClick={() => detailsBuq(item._id)}>
              detalhes
            </button>   

          </div>
        ))}
        </div>
      </div>
    )
}

// {item.flowers.map(flower => {
//   return (
//     <div key={flower._id}>
//       <p>{flower.title}</p>
//     </div>          
//   )
// })}