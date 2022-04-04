import Layout from 'D:/28_GitHub/ReactPortfolio/react-portfolio/src/components/Layout'
import 'D:/28_GitHub/ReactPortfolio/react-portfolio/src/App.scss'
import { Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
    </>
  )
}

export default App
