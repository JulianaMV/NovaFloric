import React, { useState, useEffect } from 'react'
import 'regenerator-runtime/runtime'
import { useDispatch, useSelector} from 'react-redux'
import { useParams } from "react-router-dom";
import buqueActions from '../redux/actions/buquesActions'
import buquesThunks from '../redux/thunks/buquesThunks'




export default function Details(){
    const [title, setTitle] = useState();
    const dispatch = useDispatch();
    const {id} = useParams();
    console.log(id)

    useEffect(()=>{
        dispatch(buquesThunks.loadOne(id))
    },[dispatch, id]);


    const state = useSelector((state) => state?.buques.find((value)=>{
        return value._id === id;
    }),[id]);
    

    
    async function handleBuque (e) {
        e.preventDefault();
        try{
            await dispatch(buqueActions.atualize({_id: id, title: title, flowers: state.flowers}))
        }catch (error){
            console.error(error);
        }
    }


    async function handleDelete (e) {
        e.preventDefault();
        try{
            await dispatch(buqueActions.delete({_id:id}))
        }catch (error){
            console.error(error);
        }
    }
    return(
        <div className='contdet'>
            <h1 className='title'> 
            Detalhes {state?.title}
            <button className= 'trash' type="submit" 
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
                <div className='space'>
                    <p>
                        
                    </p>
                </div>
                <table className='table'>
                    <tbody>
                    {state.flowers?.map((item)=>(
                        <tr key={item._id}>
                            <td>{item.title}</td>
                            <td> R$ {(item.price * item.qtd).toFixed(2)}</td>
                            <td> 
                                <button onClick={()=> dispatch(buqueActions.remflo(item))}>-</button> 
                                {item.qtd}
                                <button onClick={()=> dispatch(buqueActions.addflo(item))}>+</button> 
                            </td>
                         </tr>
                     ))}
                    </tbody>
                </table>
                <button onClick={()=> dispatch(buqueActions.clear())}>
                 REMOVER FLORES
                </button>
                </form>
                <button className='butPrin' type="submit" 
                    onClick={handleBuque}>Atualizar buque</button>
            </div>
        </div>
    )
}
