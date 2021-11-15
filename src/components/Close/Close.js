import { AiOutlineClose } from 'react-icons/ai'
import './Close.scss'


const Close = ({switchToList}) => {
    return(
     <AiOutlineClose className="close" onClick={switchToList} />
    )
}

export default Close