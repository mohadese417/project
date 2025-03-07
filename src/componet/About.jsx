export default function About() {
    return (
        <>
            <div className="flex">
                <div className="flex items-center border-r-1 m-15 pr-3">
                    <h2 className="text-4xl font-bold">
                        REST
                    </h2>
                    <h2 className="text-4xl font-bold text-blue-600">
                        Explorer
                    </h2>
                </div>
              
            </div>
           
                <h1 className="flex justify-center font-bold text-6xl">
                    About This Website
                </h1>
                <div className=" text-3xl  m-10 pl-50 pr-50">
                    <p className="m-10" >
                        This website uses the <span className="text-blue-600">REST Countries API</span> to display comprehensive information about countries from around the world.
                    </p>
                    <p className="m-10">
                        Explore our data to learn about country names, capitals, regions, populations, flags, and much more. Whether you’re curious about a particular country or looking for insights about global regions, our interactive explorer makes it easy.
                    </p>
                    <p className="m-10">
                        Our goal is to build a fully responsive and modern web application using the latest technologies, including React Router v7 for seamless routing and Tailwind CSS for a beautiful, responsive user interface.
                    </p>
                </div>

            
        </>
    )
}