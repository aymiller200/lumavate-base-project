import { useState } from 'react'
import DogList from './components/DogList/DogList'
import Nav from './components/Nav/Nav'
import './App.scss'

function App() {
  const [modal, setModal] = useState(false)
  const [favModal, setFavModal] = useState(false)

  const openFavModal = () => {
    setFavModal(true)
  }

  const switchToModal = (bool) => {
    setModal(bool)
  }

  const switchToList = () => {
    if (modal || favModal) {
      setModal(false)
      setFavModal(false)
    }
  }

  return (
    <div className={modal || favModal ? `backdrop` : null}>
      <Nav openFavModal={openFavModal} modal={modal} favModal={favModal} />
      <div className="App">
        <DogList
          modal={modal}
          switchToModal={switchToModal}
          favModal={favModal}
          switchToList={switchToList}
        />
      </div>
    </div>
  )
}

export default App
