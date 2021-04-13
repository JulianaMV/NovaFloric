import React, { useState} from 'react'
import 'regenerator-runtime/runtime'
import { useDispatch} from 'react-redux'
import buqueActions from '../redux/actions/buquesActions'



export default function Details(){
    const [title, setTitle] = useState();
    const [flowers, setFlowers] = useState();
    const dispatch = useDispatch();

    async function handleBuque (e) {
        e.preventDefault();
        try{
            await dispatch(buqueActions.atualize({title,flowers}))
            setTitle()
            setFlowers()
        }catch (error){
            console.error(error);
        }
    }
    async function handleDelete (e) {
        e.preventDefault();
        try{
            await dispatch(buqueActions.delete())
        }catch (error){
            console.error(error);
        }
    }
    return(
        <div className='contdet'>
            <h1 className='title'> Detalhe Buque</h1>
            <div className='cardsDiv'>
            <div className="formdiv">
            <form className='formm'>
                    <input 
                    required
                     type="text" 
                     name="title"
                     id="title"
                     className="form-control"
                     placeholder="Titulo" 
                     onChange={e=> setTitle(e.target.value)}
                    />
                    <input
                    required
                     type="number" 
                     name="price"
                     id="price"
                     className="form-control"
                     placeholder="Flowers" 
                     onChange={e=> setFlowers(e.target.value)}
                    />
                    <button type="submit" 
                    onClick={handleBuque}>Atualizar buque</button>
                     <button type="submit" 
                    onClick={handleDelete}>Deletar buque</button>
                </form>
                </div>
            </div>
        </div>
    )
}
