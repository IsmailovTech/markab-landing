import FormInfos from './components/FormInfo/FormInfos'
import MobileFilters from './components/MobileFilter/MobileFilters'
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <div className="App mb-24">
      <Navbar />
       {/* <MobileFilters />  */}
      <FormInfos />
    </div>
  )
}

export default App
