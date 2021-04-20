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
            document.getElementById('titlee').value=''; 
            document.getElementById('pricee').value=''; 
            // setImage()
            
        }catch (error){
            console.error(error);
        }

    }

    return(
        <div className='con'>

            <h1 className="title">Adicionar Flores</h1>
            <div className="cont" >
            <form className='formm'>
                    <input 
                    required
                     type="text" 
                     name="title"
                     id="titlee"
                     className="form-control"
                     placeholder="Flor" 
                     onChange={e=> setTitle(e.target.value)}
                    />
                    <input
                    required
                     type="number" 
                     name="price"
                     id="pricee"
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
                </form>
                <button className='butPrin' type="submit" 
                    onClick={handleFlower}>Criar flor</button>
            </div>
        </div>
    )
}

export default CreateFlowers;
