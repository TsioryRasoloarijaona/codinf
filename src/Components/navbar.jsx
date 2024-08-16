import logo from '../assets/edenia-logo.jpg';

export function NavBar() {
    return (
        <nav className="container py-4 flex flex-row justify-between">
            <div>
                <img className='ml-8 text-xl text-teal-500 hover:animate-spin img-prop' src={logo}/>
            </div>
            <ul className="flex justify-end mt-2">
                <li className="mx-4 text-xl hover:text-amber-950 hover:scale-125" >Home</li>
                <li className="mx-4 text-xl hover:text-amber-950 hover:scale-125">Products</li>
                <li className="mx-4 text-xl hover:text-amber-950 hover:scale-125">Projects</li>
            </ul>
        </nav>
    )
}