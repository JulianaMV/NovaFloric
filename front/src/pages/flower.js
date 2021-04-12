import 'regenerator-runtime/runtime'
import CreateFlowers from '../components/CreateFlowers'
import Flowers from '../components/flowers'
// import '../index.scss';
import Header from '../components/header/header'

const FlowerPag = () => {
    
    return(
        <>
        <Header/>
        <div>
            <CreateFlowers/>
            <Flowers/>
        </div>
        </>

    )
   
}
export default FlowerPag;