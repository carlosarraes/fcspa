import { useState } from 'react'

const UpvoteCoin = () => {
  const [coins, setCoins] = useState({
    message: '',
  })
  const [symbol, setSymbol] = useState('')

  const pattern = {
    message: 'string',
  }

  const fetchCoins = async () => {
    const data = await fetch(`https://gohst-4wgfen3n5q-rj.a.run.app/upvote/${symbol}`, {
      method: 'PATCH',
    })
    const response = await data.json()

    return response
  }

  const handleClick = async () => {
    const data = await fetchCoins()

    setCoins(data)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSymbol(e.target.value)
  }

  return (
    <section className="flex flex-col sm:flex-row w-full sm:w-8/12 p-1 justify-center items-center gap-2 mt-8 shadow-2xl mb-8">
      <div className="flex flex-col gap-2 p-2 w-full sm:w-1/2 text-left">
        <div className="flex gap-4 text-left">
          <h2 className="text-xl p-2 bg-gray-700 text-yellow-300 self-center rounded-lg">PATCH</h2>
          <p className="text-sm self-center">
            https://gohst-4wgfen3n5q-rj.a.run.app/upvote/:symbol
          </p>
        </div>
        <div>
          <input
            type="text"
            className="p-2 w-3/4 rounded-lg text-black"
            placeholder="Symbol"
            onChange={handleChange}
          />
          <button
            type="button"
            className="py-2 bg-blue-500 text-white w-1/4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            onClick={handleClick}
          >
            Run
          </button>
        </div>
        <p>
          Updates on the database, increments the upvotes by one. You can use the previous command
          to check that it went through :)
        </p>
        <hr />
        <p>Possible to upvote: KLV, BTC, ETH, ENJ, BNB, LTC, APE, LINK, DOGE, TRX.</p>
        <p>Pattern(Same pattern, only the status code changes.):</p>
        <div className="flex gap-4 text-left my-1">
          <span className="self-center">Status: </span>
          <p className="text-white px-2 py-1 bg-green-600 font-bold rounded-sm cursor-pointer">
            200
          </p>
          <p className="text-white px-2 py-1 bg-red-400 font-bold rounded-sm cursor-pointer">404</p>
          <p className="text-white px-2 py-1 bg-red-400 font-bold rounded-sm cursor-pointer">405</p>
        </div>
        <p>Response - JSON:</p>
        <pre className="text-left">{JSON.stringify(pattern, null, 2)}</pre>
      </div>
      <div className="flex flex-col gap-2 w-full sm:w-1/2">
        <pre className="bg-gray-900 text-white p-2 rounded-lg w-full h-80 max-h-80 overflow-y-auto shadow-lg">
          {coins.message === '' ? 'Click the button :)' : JSON.stringify(coins, null, 2)}
        </pre>
      </div>
    </section>
  )
}

export default UpvoteCoin
