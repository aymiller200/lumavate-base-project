import { useEffect, useState } from 'react'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import Close from '../Close/Close'
import './DogImage.scss'

const DogImage = ({ dogBreed, switchToList }) => {
  const [dogImage, setDogImage] = useState('')
  const [selected, setSelected] = useState(false)

  const fetchDogImage = async () => {
    try {
      const res = await fetch(
        `https://dog.ceo/api/breed/${dogBreed}/images/random`,
        {
          method: 'GET',
        },
      )
      const json = await res.json()
      setDogImage(json.message)
    } catch (error) {
      console.log(error)
    }
  }

  const saveDogImage = () => {
    if (sessionStorage.length < 6) {
      sessionStorage.setItem(`${dogImage}`, dogImage)
      setSelected(true)
    }
  }

  useEffect(() => {
    fetchDogImage()
  }, [dogBreed])

  return (
    <div className="dog-image-container">
      <Close switchToList={switchToList}/>
      <h3 className="dog-name">
        {dogBreed[0].toUpperCase() + dogBreed.slice(1)}
      </h3>
      <img src={dogImage} alt={dogBreed} className="dog-image" />
      {sessionStorage.length >= 6 ? <p className="error">Ope! You have reached your cute dog limit. Make some room in your favorites!</p> : null}
      {!selected ? (
        <AiOutlineHeart className="dog-fav" onClick={saveDogImage} />
        ) : (
          <AiFillHeart className="dog-fav"/>
      )}
    </div>
  )
}

export default DogImage
