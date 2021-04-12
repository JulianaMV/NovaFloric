import 'regenerator-runtime/runtime'
import CreateBuque from '../components/CreateBuque'
import Buque from '../components/buque'
import Header from '../components/header/header'

const BuquePag = () => {
    
    return(
        <>
        <Header/>
        <div>
            <CreateBuque/>
            <Buque/>
        </div>
        </>

    )
   
}
export default BuquePag;