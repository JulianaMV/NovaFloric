import React, { useState} from 'react'
import 'regenerator-runtime/runtime'
import { useDispatch} from 'react-redux'
import flowersActions from '../redux/actions/flowersActions'



export default function Details(){
    const [title, setTitle] = useState();
    const [price, setPrice] = useState();
    const dispatch = useDispatch();

    async function handleFlower (e) {
        e.preventDefault();
        try{
            await dispatch(flowersActions.atualize({title,price}))
            setTitle()
            setPrice()
        }catch (error){
            console.error(error);
        }
    }
    async function handleDelete (e) {
        e.preventDefault();
        try{
            await dispatch(flowersActions.delete())
        }catch (error){
            console.error(error);
        }
    }
    return(
        <div className='contdet'>
            <h1 className='title'> Detalhe Flor</h1>
            <div className='cardsDiv'>
            <div className="formdiv">
            <form className='formm'>
                    <input 
                    required
                     type="text" 
                     name="title"
                     id="title"
                     className="form-control"
                     placeholder="Flor" 
                     onChange={e=> setTitle(e.target.value)}
                    />
                    <input
                    required
                     type="number" 
                     name="price"
                     id="price"
                     className="form-control"
                     placeholder="Preço" 
                     onChange={e=> setPrice(e.target.value)}
                    />
                    <button type="submit" 
                    onClick={handleFlower}>Atualizar flor</button>
                     <button type="submit" 
                    onClick={handleDelete}>Deletar flor</button>
                </form>
                </div>
            </div>
        </div>
    )
}
