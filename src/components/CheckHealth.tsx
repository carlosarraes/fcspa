import { useState } from 'react'

const CheckHealth = () => {
  const [coins, setCoins] = useState('')
  const [pattern, setPattern] = useState('Running! :)')

  const fetchCoins = async () => {
    const data = await fetch('https://gofa-4wgfen3n5q-rj.a.run.app/')

    return data
  }

  const handleClick = async () => {
    const data = await fetchCoins()

    if (data.status === 200) {
      setCoins('Running! :)')
      return
    }
    setCoins('Not running! :(')
  }

  const handleShow = (e: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {
    const { innerText } = e.currentTarget
    if (innerText === '200') {
      setPattern('Running! :)')
    } else {
      setPattern('Method not allowed')
    }
  }

  return (
    <section className="flex flex-col sm:flex-row w-full sm:w-8/12 justify-center items-center gap-2 p-1 mt-8 shadow-2xl">
      <div className="flex flex-col w-full sm:w-1/2 gap-2 p-2 text-left">
        <div className="flex gap-4 text-left">
          <h2 className="text-xl p-2 bg-gray-700 text-green-300 rounded-lg">GET</h2>
          <p className="text-sm self-center">https://gofa-4wgfen3n5q-rj.a.run.app/</p>
        </div>
        <button
          type="button"
          className="py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          onClick={handleClick}
        >
          Run
        </button>
        <p>Checks if the API is running!</p>
        <hr />
        <p>Pattern(click to change):</p>
        <div className="flex gap-4 text-left my-1">
          <span className="self-center">Status: </span>
          <p
            className="text-white px-2 py-1 bg-green-600 font-bold rounded-sm cursor-pointer"
            onClick={handleShow}
          >
            200
          </p>
          <p
            className="text-white px-2 py-1 bg-red-400 font-bold rounded-sm cursor-pointer"
            onClick={handleShow}
          >
            405
          </p>
        </div>
        <p>Response - Text:</p>
        <pre className="text-left">{JSON.stringify(pattern, null, 2)}</pre>
      </div>
      <pre className="bg-gray-900 text-white p-2 rounded-lg w-full sm:w-1/2 h-80 max-h-80 overflow-y-auto shadow-lg">
        {coins.length !== 0 ? JSON.stringify(coins, null, 2) : 'Click the button :)'}
      </pre>
    </section>
  )
}

export default CheckHealth
