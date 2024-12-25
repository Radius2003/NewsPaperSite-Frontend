import { useEffect } from "react"
import "./App.css"

import MainPage from "./pages/MainPage.tsx"
import { requestPost } from "./redux/actions/postAction.ts"
import { useAppDispatch } from "./hooks/typedHooks.ts"

function App() {
  const dispatch = useAppDispatch()
  useEffect(()=>{
    dispatch(requestPost())
  }, [])
  return (
    <div className='App'>
     <MainPage/>
    </div>
  )
}

export default App
