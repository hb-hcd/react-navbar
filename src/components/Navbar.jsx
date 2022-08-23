import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import 'tw-elements';

const Navbar = () => {
    const [open, setOpen] = useState(false)

    const menu = [
        {
            id: 1,
            Title: "About Us",
            Submenu: [
                { id: 1, Title: "What we do" },
                { id: 2, Title: "Our Story" },
            ]
        },
        {
            id: 2,
            Title: "Solutions",
            Submenu: [
                { id: 1, Title: "Product A" },
                { id: 2, Title: "Product B" },
                { id: 3, Title: "Product C" },
            ]
        },
        {
            id: 3,
            Title: "News",
            Submenu: [
                { id: 1, Title: "Achievements" },
                { id: 2, Title: "Customer reviews" },
            ]
        },
        {
            id: 4,
            Title: "Partners",
            Submenu: [
                { id: 1, Title: "Investors" },
                { id: 2, Title: "Clients" },
                { id: 3, Title: "Suppliers" }
            ]
        },
        {
            id: 5,
            Title: "Contacts",
            Submenu: [
                { id: 1, Title: "Careers" },
                { id: 2, Title: "Customer Services" },
            ]
        },

    ]


    return (
        <>
            <div className={`hidden md:flex text-white text-sm md:flex-row  md:text-lg`}>
                {menu.map(({ id, Title, Submenu }) => (
                    <div
                        key={id}
                        className="relative group inline-block rounded-md hover:opacity-80  hover:text-white cursor-pointer">
                        <button
                            className="bg-transparent text-white font-medium px-2 py-2 rounded inline-flex items-center hover:scale-110 duration-300 "
                        >
                            {Title}
                        </button>
                        <div className="absolute -left-10 hidden text-white p-1 group-hover:block group-hover:bg-[#636360] rounded-md md:w-36 text-sm ">
                            {
                                Submenu.map(({ id, Title }) => (
                                    <a
                                        href={"/"}
                                        key={id}
                                        // style={{transitionDelay:`${id+3}00ms`}}
                                        className="hover:bg-[#a59d9d]  p-1 block hover:translate-x-2 duration-200">{Title}</a>

                                ))
                            }
                        </div>
                    </div>
                ))}

            </div>
            <div onClick={() => setOpen(!open)}
                className="md:hidden mr-4 hover:scale-110 duration-200 cursor-pointer hover:text-gray-500 z-10">
                {
                    open ? <FaTimes size={25} /> : <FaBars size={25} />
                }
            </div>
            {
                open && (
                    <div className="flex flex-col md:hidden w-full justify-center items-center absolute  h-screen bg-transparent mt-80 mr-12 ">
                        {
                            menu.map(({ id, Title, Submenu }) => (
                                <div
                                    key={id}
                                    className="dropend relative group inline-block rounded-md hover:opacity-80  hover:text-white cursor-pointer">
                                    <button    
                                        data-bs-toggle="dropdown"
                                        className="bg-transparent text-white  dropdown-toggle
                                        font-medium px-2 py-2 rounded inline-flex items-center hover:scale-110 duration-300"
                                        type="button"
                                    >
                                        {Title}
                                    </button>

                                    <div className="
                                       dropdown-menu
                                       min-w-max
                                       absolute
                                       hidden
                                       bg-[#ecece2]
                                       text-base
                                       z-50
                                       float-left
                                       text-left
                                       rounded-lg
                                       shadow-lg
                                       
                                       !ml-5
                                       !mt-2
                                       !h-50
                                       !w-50
                                       border-2

                                       "
                                       >
                                        {
                                            Submenu.map(({ id, Title }) => (
                                                <a
                                                    href={"/"}
                                                    key={id}
                                                    className="hover:bg-[#636360]
                                                    hover:text-white
                                                    dropdown-item
                                                    text-sm
                                                    py-2
                                                    px-4
                                                    block
                                                    text-gray-700
                                                    ">{Title}</a>

                                            ))}

                                    </div>


                                </div>
                            ))
                        }
                    </div>
                )
            }
        </>


    )
}

export default Navbar