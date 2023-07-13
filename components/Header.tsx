<<<<<<< HEAD
import Navbar from './Navbar'

const Header = () => {
  return (
    <header className='shadow-md w-full text-center fixed py-10 mx-auto bg-white'>
        <Navbar />
    </header>
  )
}

export default Header
=======
import Link from 'next/link'

const Header = () => {
  return (
    <div className='flex justify-evenly shadow-sm p-10'>
        <Link href="/">Nextbase</Link>
        <ul className='flex'>
            <li>Features</li>
            <li>Demos</li>
            <li>Pricing</li>
            <li>Discord</li>
            <li>public Roadmap</li>
            <li>FAQ</li>
        </ul>
        <Link href="/account">Account</Link>
    </div>
  )
}

export default Header
>>>>>>> d7802562f07fbe9060afca964e44d55d2160a0c4
