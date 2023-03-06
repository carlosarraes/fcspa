const UpvoteCoin = () => {
  const pattern = {
    message: 'string',
  }

  return (
    <section className="flex p-2 justify-center items-center h-96 gap-2 w-8/12 mt-8 shadow-2xl">
      <div className="flex flex-col gap-2 p-2 w-1/2 text-left">
        <div className="flex gap-4 text-left">
          <h2 className="text-xl p-2 bg-gray-700 text-yellow-300 rounded-lg">PATCH</h2>
          <p className="text-sm self-center">
            https://gosrv-4wgfen3n5q-rj.a.run.app/upvote/:symbol
          </p>
        </div>
        <p>
          Updates on the database favorite value to true. You can use the previous command to check
          that it went through :)
        </p>
        <hr />
        <p>Pattern(Same pattern, only status code change.):</p>
        <div className="flex gap-4 text-left">
          <p className="text-green-400 cursor-pointer">Status 200</p>
          <p className="text-red-400 cursor-pointer">Status 404</p>
          <p className="text-red-400 cursor-pointer">Status 405</p>
        </div>
        <pre className="text-left">{JSON.stringify(pattern, null, 2)}</pre>
      </div>
      <div className="flex flex-col gap-2 w-1/2">
        <pre className="bg-gray-900 text-white p-2 rounded-lg w-full h-24 max-h-24 overflow-y-auto shadow-lg">
          {JSON.stringify(pattern, null, 2)}
        </pre>
        <p className="mt-2">
          Unfortunately, i didnt use gorilla/mux and had a hard time with CORS, from what i saw on
          my research, mux would help a lot :(
        </p>
        <p>You can still upvote if you access the endpoint through Postman/Insomnia</p>
        <a href="https://gosrv-4wgfen3n5q-rj.a.run.app/upvote/KLV" className="text-blue-400">
          /upvote/KLV
        </a>
        <p className="text-red-400">^ you will get an method not allowed ;)</p>
      </div>
    </section>
  )
}

export default UpvoteCoin
