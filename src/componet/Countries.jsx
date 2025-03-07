
export function Countries(){
    return(
        <>
        <div className="flex">
            <div className="flex items-center border-r-1 m-10 pr-3">
           <h2 className="text-4xl font-bold">
            REST
           </h2>
           <h2 className="text-4xl font-bold text-blue-600">
            Explorer
           </h2>
           </div>
          
           </div>
           <div>
           <h1 className="font-extrabold text-3xl ml-15">
           Countries 
           </h1>
           </div>
           <div className="flex gap-10">
            <input className="w-1/2 border border-gray-400 p-3 ml-10 mt-10" type="text" placeholder="Search by name... " />
            <select className="w-1/2 border border-gray-400 p-3 mr-10 mt-10">
                <option value="All Regions">All Regions</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
           </div>
          

        </>
    )
}