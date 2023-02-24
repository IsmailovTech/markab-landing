import Footers from './components/Footer/Footers'
import FormInfos from './components/FormInfo/FormInfos'
import MobileFilters from './components/MobileFilter/MobileFilters'
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <MobileFilters />  */}
      <FormInfos />
      <Footers />
    </div>
  )
}

export default App
