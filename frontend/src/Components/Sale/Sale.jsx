import React from 'react'

function Sale() {
  return (
   <>
    <div className="flex flex-col m-4 p-2 border shadow-xl "> 
      <h2 className="font-semibold text-center text-white py-2 mb-2 text-xl">Sales</h2>
          <div className="flex w-full space border border-black border-double">
          <div type="text" className="bg-slate-300 focus:outline-none w-1/6 px-2 py-1 text-gray-700 bg-">s.No</div>
          <div type="text" className="bg-slate-300 focus:outline-none w-2/6 px-2 py-1 text-gray-700">Item</div>
          <div type="text" className="bg-slate-300 focus:outline-none w-1/6 px-2 py-1 text-gray-700">quantity</div>
          <div type="text" className="bg-slate-300 focus:outline-none w-1/6 px-2 py-1 text-gray-700">price</div>
          <div type="text" className="bg-slate-300 focus:outline-none w-1/6 px-2 py-1 text-gray-700">total</div>
          </div>
      <div className="flex w-full space-x-1 font-mono"> 
        
        {<>
          <input type="text" className="focus:outline-none w-1/6 px-2 py-1 text-gray-700"/>
          <input type="text" className="focus:outline-none w-2/6 px-2 py-1 text-gray-700"/>
          <input type="text" className="focus:outline-none w-1/6 px-2 py-1 text-gray-700"/>
          <input type="text" className="focus:outline-none w-1/6 px-2 py-1 text-gray-700"/>
          <input type="text" className="focus:outline-none w-1/6 px-2 py-1 text-gray-700"/>
          </>
        }
        
      </div>
    </div>
   </>
  )
}

export default Sale