import Navbar from "./Navbar"

const Header = () => {

  return (
    <>
    <div className="flex justify-between items-center w-full h-20 text-white md:px-4 bg-black fixed">
     <div className="text-4xl md:text-4xl font-companyname ml-2 lg:text-5xl">
        Amazing Company
     </div>
        <Navbar/>
    </div>
    </>
  )
}

export default Header