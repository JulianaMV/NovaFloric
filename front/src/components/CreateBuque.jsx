import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import buquesActions from '../redux/actions/buquesActions'
import Flowersline from './flowersline'
import localActions from '../redux/actions/localActions'




 const Buque = () => {
    const [buqueName, setBuqueName]= useState();

    const dispatch = useDispatch();
    const buque = useSelector(state=> state?.local);

    let qtdTot = 0; 
    buque.forEach((flower) => {
        qtdTot += flower.qtd;
    })
    
    const ValueTot = useSelector((state) =>
        state.local.reduce((acc, cur)=>
        acc+cur.price*cur.qtd
    ,0));
    

    const buqueCreate = () =>{
        
        const newBuque = {
            title: buqueName,
            flowers: buque.map(flower=> {
                return {flower: flower._id, title: flower.title, price: flower.price, qtd: flower.qtd}
            })

        } 
        console.log(newBuque)
        try{
            dispatch(buquesActions.add(newBuque))
            document.getElementById('tit').value=''; 
            dispatch(localActions.clear());
            
            
        }catch(error){
            console.error(error);
        }
        
    }

    return(
        <>
        <div className='buq'>
            <h1 className='title'>Criar Buque</h1>
            <Flowersline/>
            <table id='oi' className='table'>
                <tbody>
                    {buque.map((item)=>(
                        <tr key={item._id}>
                            <td>{item.title}</td>
                            <td> R$ {(item.price * item.qtd).toFixed(2)}</td>
                            <td> 
                                <button onClick={()=> dispatch(localActions.remove(item))}>-</button> 
                                {item.qtd}
                                <button onClick={()=> dispatch(localActions.add(item))}>+</button> 
                            </td>
                         </tr>
                     ))}
                 </tbody>
            </table>

            <h4 className='h4'> Qtd total: {qtdTot}

            <button onClick={()=> dispatch(localActions.clear())}>
                LIMPAR
            </button>
            </h4>
            <h3> valor total: R$ {ValueTot.toFixed(2)}</h3>
            <div className='butDiv'>
            <input placeholder="Nome"
                     required 
                     id="tit"
                     name="buque"
                     className="form-control"
                     onChange={e=> setBuqueName(e.target.value)}
            ></input>
            <button className='butPrin' onClick={buqueCreate}>
                Salvar Novo Buque
            </button>
            </div>
        </div>
        </>
    )
}

export default  Buque;