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