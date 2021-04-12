import React from 'react'
import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux'

import flowersThunks from '../redux/thunks/flowersThunks'
import localActions from '../redux/actions/localActions'


export default function Flowersline(){

const dispatch = useDispatch();
const flowers = useSelector((state)=> state.flowers);


useEffect(()=>{
    dispatch(flowersThunks.load())
},[dispatch])

    return(
        <div className='contentline'>
            <div className='options'>
            {flowers.map(item =>(
                <div key={item._id} className='itens'>
                    <p>{item.title}
                    {'   '}
                     R$ {item.price.toFixed(2)}
                     <button className='buttonitem'
                    onClick={()=> dispatch(localActions.add(item))}
                    >Add</button>
                     </p>

                </div>
            ))}
            </div>
        </div>
    )
}
