import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import Test from "./pages/Test/Test"
import TimesUpPage from "./pages/TimesUpPage/TimesUpPage"
import Results from "./pages/Results/Results"


function App() {

  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="test" element={<Test />} />
        <Route path="results" element={<Results />} />
        <Route path="timesUp" element={<TimesUpPage />} />
    </Routes>
  )
}

export default App
