import './App.css'

function App() {
  return (
    <>
      <nav className="w-full h-200 bg-black border-4 border-green-500 flex items-start p-6 fixed top-0 left-0">
        <div className="flex flex-col border-4 border-blue-500 gap-4 items-start justify-center w-full">

          <div className="flex border-4 border-red-500 justify-between w-full items-center p-3">
            <div className="flex border-4 border-blue-500 gap-4 flex-row items-start justify-start w-1/3">
              <p className="text-white text-lg font-bold">About Us</p>
              <p className="text-white text-lg font-bold">Amenities</p>
              <p className="text-white text-lg font-bold">Reservations</p>
            </div>
            <div className="flex border-4 border-blue-500 flex-col items-center justify-center w-1/3">
              <p className="text-white text-xl font-bold">Gemini</p>
              <p className="text-white text-sm font-bold">Gemini</p>
            </div>
            <div className="flex border-4 border-green-500 gap-4 flex-row items-end justify-end w-1/3">
              <p className="text-white text-lg font-bold">instagram</p>
              <p className="text-white text-lg font-bold">facebook</p>
              <p className="text-white text-lg font-bold">tiktok</p>
            </div>


          </div>
          <div className="flex border-4 border-red-500 justify-between w-full items-center p-3">
            
          </div>
        </div>
      </nav>


    </>
  )
}

export default App
