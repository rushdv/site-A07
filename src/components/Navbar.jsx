// import Navbar from "./Navbar"
// import Navbar from "./Header"

// const Navbar = ({nav}) => {
//     return (
//         <div>
//             Hello
//         </div>
//     )
// }

// export default Navbar;




const Navbar = () => {
    return (
        <nav className='flex justify-between px-6 p-3 bg-white'>
            <div>
                <h3 className='font-bold'>CS - Ticket System</h3>
            </div>
            <div className='flex gap-5 my-auto'>
                <ul className='flex gap-5 my-auto'>
                    <li><a href="">Home</a></li>
                    <li><a href="">FAQ</a></li>
                    <li><a href="">Changelog</a></li>
                    <li><a href="">Blog</a></li>
                    <li><a href="">Download</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
                <button className='bg-[#632EE3] text-white p-1 px-2 rounded font-semibold'>New Ticket</button>
            </div>
        </nav>
    )
}


export default Navbar;