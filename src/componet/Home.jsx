import { Link } from "react-router-dom"

export default function Home(){
    return(
        <div>
        <div className="flex">
            <div className="flex items-center border-r-1 m-15 pr-3">
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
           <div className="text-6xl font-bold m-30 break-words">
            <h1>
           Explore Countries with
           </h1>
           <h1 className="text-blue-600">
           Real-Time Data
           </h1>
           </div>
           <div className="ml-40 -mt-20 text-3xl font-medium ">
           <p className="break-words">
           Discover details about every country around the 
           <span className="block ">
           world – from capitals to regions!
           </span>
           </p>
           </div>
           <div className="flex">
            <Link to="/Countries">
            <button className="bg-blue-500 rounded-xl h-15 text-white items-center flex ml-30 mt-10  gap-3 text-2xl p-5">
                Explore Now 
                <img className="w-9  " src="src\img\icons8-go-back-50.png" alt="" />
            </button>
            </Link>
            <Link to="/About">
            <button className="rounded-xl ml-10 mt-10 w-40 text-white text-1xl justify-center bg-neutral-400 h-15  items-center flex ">
                Learn More
            </button>
            </Link>
           </div>
        
        </div>
    )
}