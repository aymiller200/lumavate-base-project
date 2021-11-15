import {AiFillHeart} from 'react-icons/ai'
import './Nav.scss'

const Nav = ({openFavModal, modal, favModal}) => {
  return(
    <>
    <h2 className="title"><u>Click Breed Name!</u></h2>
    <div className={modal || favModal ? "nav__modal" : "nav"}>
      <AiFillHeart className="favorites" onClick={openFavModal}/>
    </div>
    </>
  )
}

export default Nav