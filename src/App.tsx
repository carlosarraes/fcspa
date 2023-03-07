import CheckHealth from './components/CheckHealth'
import Footer from './components/Footer'
import GetCoins from './components/GetCoins'
import Header from './components/Header'
import UpvoteCoin from './components/UpvoteCoin'

function App() {
  return (
    <main className="flex flex-col mx-auto justify-center items-center w-full bg-gray-800 text-white">
      <Header />
      <section className="flex flex-row sm:flex-col flex-wrap justify-center items-center">
        <GetCoins />
        <CheckHealth />
        <UpvoteCoin />
      </section>
      <Footer />
    </main>
  )
}

export default App
