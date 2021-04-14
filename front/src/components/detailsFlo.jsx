import React, { useState, useEffect} from 'react'
import 'regenerator-runtime/runtime'
import { useDispatch, useSelector} from 'react-redux'
import flowersActions from '../redux/actions/flowersActions'
import { useParams } from "react-router-dom";
import flowersThunks from '../redux/thunks/flowersThunks'




export default function Details(){
    const [title, setTitle] = useState();
    const [price, setPrice] = useState();
    const dispatch = useDispatch();
    const {id} = useParams();
    console.log(id)

    useEffect(()=>{
        dispatch(flowersThunks.loadOne(id))
    },[dispatch, id])


    const state = useSelector((state) => state.flowers.find((value)=>{
        return value._id = id;
    }),[id]);

    console.log(state)
      

    async function handleFlower (e) {
        e.preventDefault();
        try{
            await dispatch(flowersActions.atualize({_id: id, title, price}))
            setTitle()
            setPrice()
        }catch (error){
            console.error(error);
        }
    }
    async function handleDelete (e) {
        e.preventDefault();
        try{
            await dispatch(flowersActions.delete({_id:id}))
        }catch (error){
            console.error(error);
        }
    }


    return(
        <div className='contdet'>
            <h1 className='title'> Detalhe Flor {state?.title}
            <button className ='trash' type="submit" 
                    onClick={handleDelete}>
                        <i className="fas fa-trash-alt"></i>
                </button>
            </h1>
            <div className='cont'>
            <form className='formm'>
                    <input 
                    required
                     type="text" 
                     name="title"
                     id="title"
                     className="form-control"
                     placeholder={state?.title}
                     onChange={e=> setTitle(e.target.value)}
                    />
                    <input
                    required
                     type="number" 
                     name="price"
                     id="price"
                     className="form-control"
                     placeholder= {state?.price}
                     onChange={e=> setPrice(e.target.value)}
                    />
                </form>
                <button className='butPrin' type="submit" 
                    onClick={handleFlower}>Atualizar flor</button>
                </div>
        </div>
    )
}
