import { useEffect, useState } from 'react'
import { BsTrash } from 'react-icons/bs'
import Close from '../Close/Close'
import './DogFavorites.scss'

const DogFavorites = ({ switchToList }) => {
  const [imageList, setImageList] = useState([])

  const displayFavorites = () => {
    setImageList(Object.values({ ...sessionStorage }))
  }
  const clearSavedImages = () => {
    setImageList([])
    sessionStorage.clear()
  }

  useEffect(() => {
    displayFavorites()
  }, [])

  return (
    <div
      className="dog-favorites"
      style={{ height: sessionStorage.length === 0 ? '20%' : '80%' }}
    >
      <Close switchToList={switchToList} />
      {sessionStorage.length > 0 ? (
        <>
          <BsTrash className="delete-all" onClick={clearSavedImages} />
          <h3>Your saved pup pictures!</h3>
        </>
      ) : (
        <h3>You don't have any favorites saved yet!</h3>
      )}
      <div className="dog-pic-container">
        {imageList.map((img) => (
          <a href={`${sessionStorage.getItem(img)}`} rel="noreferrer" target="_blank" key={img}>
            <img
              src={img}
              alt="Saved Favorites"
              key={Math.random()}
              width="250px"
              height="250px"
              className="saved-favs"
            />
          </a>
        ))}
      </div>
    </div>
  )
}

export default DogFavorites
