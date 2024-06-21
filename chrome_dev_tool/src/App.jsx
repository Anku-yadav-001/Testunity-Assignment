import NetworkPanel from "./components/NetworkPanel"
import { FetchData } from "./components/FetchData"
import useNetworkMonitor from "./hooks/useNetworkMonitor"

function App() {
  useNetworkMonitor()
  return (
    <>
      <NetworkPanel/>
      <FetchData/>
    </>
  )
}

export default App
