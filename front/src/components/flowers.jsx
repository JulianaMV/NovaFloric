import React from 'react'
import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import flowersThunks from '../redux/thunks/flowersThunks'



export default function Flowers(){

const dispatch = useDispatch();

const flowers = useSelector((state)=> state.flowers);

useEffect(()=>{
    dispatch(flowersThunks.load())
},[dispatch])

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
                    <p>R$ {item.price.toFixed(2)}</p>
                </div>
            ))}
            </div>
        </div>
    )
}
