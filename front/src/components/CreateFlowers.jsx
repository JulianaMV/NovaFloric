import React, { useState} from "react";
import 'regenerator-runtime/runtime'
import { useDispatch} from 'react-redux'
import flowersActions from '../redux/actions/flowersActions'


const CreateFlowers = () => {
    
    const [title, setTitle] = useState();
    const [price, setPrice] = useState();
    // const [image, setImage] = useState();
    const dispatch = useDispatch();

    async function handleFlower (e) {
        e.preventDefault();
        try{
            await dispatch(flowersActions.add({title,price})) //imagen
            setTitle()
            setPrice()
            // setImage()
            
        }catch (error){
            console.error(error);
        }

    }

    return(
        <div className='con'>

            <h1 className="title">Adicionar Flores</h1>
            <div className="cont" >
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
                    {/* <input
                     required
                     type="file" 
                     name="image"
                     id="image"
                     className="form-control-file"
                     placeholder="Img"
                     onChange={e=> setImage(e.target.value)}
                      
                    /> */}
                    <button type="submit" 
                    onClick={handleFlower}>Criar flor</button>
                </form>
                </div>
            </div>
        </div>
    )
}

export default CreateFlowers;