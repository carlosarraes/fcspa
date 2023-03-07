import CheckHealth from './components/CheckHealth'
import Footer from './components/Footer'
import GetCoins from './components/GetCoins'
import Header from './components/Header'
import UpvoteCoin from './components/UpvoteCoin'

function App() {
  return (
    <main className="flex flex-col mx-auto justify-center items-center w-full bg-gray-800 text-white">
      <Header />
      <GetCoins />
      <CheckHealth />
      <UpvoteCoin />
      <Footer />
    </main>
  )
}

export default App
