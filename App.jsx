
import Header from './components/header'
import Balance from './components/Balance'
import IncomeExp from './components/IncomeExp'
import History from './components/History'
import NewTransaction from './components/NewTransaction'
import Table from './components/Table'
import { GlobalContext,GlobalProvider} from './context/GlobalState'

function App() {
  return(
    <>
    <GlobalProvider>
  <Header/>
  <Balance/>
  <IncomeExp/>
  <History/>
  <NewTransaction/>
  <Table/>
  </GlobalProvider>






























































































  </>
  )
}


export default App
