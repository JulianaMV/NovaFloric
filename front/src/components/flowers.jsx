import React from 'react'
import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import flowersThunks from '../redux/thunks/flowersThunks'
import { useHistory } from 'react-router-dom';



export default function Flowers(){

const dispatch = useDispatch();
const history = useHistory(); 

const flowers = useSelector((state)=> state.flowers);

useEffect(()=>{
    dispatch(flowersThunks.load())
},[dispatch])

const detailsFlo = (id) => {
    history.push(`/detailsFlo/${id}`);
  };
  

    return(
        <div className='content'>
            <h1 className='title'> Flores</h1>
            <div className='cardsDiv'>
            {flowers.map(item =>(
                <div key={item._id} className='card'>
                    <p className="simb">
                    {item.isOffline ? <i className="fas fa-circle-notch"></i> : <i className="far fa-circle"></i> }
                    </p>
                    <p className="titleflower">{item.title}</p>
                    <p>R$ {item.price},00</p>
                    <button onClick={() => detailsFlo(item._id)}>
                        detalhes
                    </button>   
                </div>
            ))}
            </div>
        </div>
    )
}
