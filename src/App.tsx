import CheckHealth from './components/CheckHealth'
import GetCoins from './components/GetCoins'
import Header from './components/Header'
import UpvoteCoin from './components/UpvoteCoin'

function App() {
  return (
    <main className="flex flex-col mx-auto justify-center items-center w-full p-2 bg-gray-800 text-white">
      <Header />
      <GetCoins />
      <CheckHealth />
      <UpvoteCoin />
    </main>
  )
}

export default App
