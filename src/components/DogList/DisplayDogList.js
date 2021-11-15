import './DogList.scss'

const DisplayDogList = ({ dogList, displayImage, modal, favModal }) => {
  
  return (
    <>
      {dogList.map((dog, i) => (
        <div
          className={modal || favModal ? "breed-container__modal" : "breed-container"}
          key={i}
          onClick={() => displayImage(dog)}
        >
          <h3 className="breed">{dog[0].toUpperCase() + dog.slice(1)}</h3>
        </div>
      ))}
    </>
  )
}

export default DisplayDogList
