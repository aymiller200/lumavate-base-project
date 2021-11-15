import { useEffect, useState } from 'react'
import DisplayDogList from './DisplayDogList'
import DogImage from '../DogImage/DogImage'
import DogFavorites from '../Favorites/DogFavorites'

const DogList = ({modal, switchToModal, favModal, switchToList}) => {
  const [dogList, setDogList] = useState([])
  const [dogBreed, setDogBreed] = useState('')

  const displayImage = (breed) => {
    switchToModal(true)
    setDogBreed(breed)
  }

  const fetchDogList = async () => {
    try {
      const res = await fetch('https://dog.ceo/api/breeds/list/all', {
        method: 'GET',
      })
      const json = await res.json()
      setDogList(Object.keys(json.message))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchDogList()
  }, [dogBreed])

  return (
    <>
      {modal ? <DogImage dogBreed={dogBreed} switchToList={switchToList}/> : null}
      {favModal ? <DogFavorites switchToList={switchToList} dogBreed={dogBreed}/> : null}
      <DisplayDogList dogList={dogList} displayImage={displayImage} modal={modal} favModal={favModal}/>

    </>
  )
}

export default DogList
