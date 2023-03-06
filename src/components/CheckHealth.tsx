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
    if (innerText === 'Status 200') {
      setPattern('Running! :)')
    } else {
      setPattern('Method not allowed')
    }
  }

  return (
    <section className="flex p-2 justify-center items-center h-96 gap-2 w-8/12 mt-8 shadow-2xl">
      <div className="flex flex-col w-1/2 gap-2 p-2 text-left">
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
        <p>Gets data of all available Coins from the API.</p>
        <hr />
        <p>Pattern(click to change):</p>
        <div className="flex gap-4 text-left">
          <p className="text-green-400 cursor-pointer" onClick={handleShow}>
            Status 200
          </p>
          <p className="text-red-400 cursor-pointer" onClick={handleShow}>
            Status 405
          </p>
        </div>
        <pre className="text-left">{JSON.stringify(pattern, null, 2)}</pre>
      </div>
      <pre className="bg-gray-900 text-white p-2 rounded-lg w-1/2 h-80 max-h-80 overflow-y-auto shadow-lg">
        {coins.length !== 0 ? JSON.stringify(coins, null, 2) : 'Click the button :)'}
      </pre>
    </section>
  )
}

export default CheckHealth
