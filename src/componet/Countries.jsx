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
           <ul className="flex text-lg gap-4 m-18 -ml-6">
            <li>
                Home
            </li>
            <li>
                Countries
            </li>
            <li>
                About
            </li>
           </ul>
           </div>
           <div>
           <h1 className="font-extrabold text-3xl ml-15">
           Countries 
           </h1>
           </div>
           <div>
            <input type="text" placeholder="Search by name... " />
           </div>
          

        </>
    )
}