import React, { useState } from 'react'
import LoadingLogic from './components/LoadingLogic'
import LoadingUi from './components/LoadingUi'

const LoadingLogicUi = LoadingLogic(LoadingUi)
const App = () => {

  const [isLoading,setIsLoading] = useState(true)

  setTimeout(() => {
    setIsLoading(false)
  },2000)

  const users = ["Mastur","Poojan","Pawan sir"]
  return (
    <div>
<LoadingLogicUi isLoading={isLoading} users={users}/>
    </div>
  )
}

export default App