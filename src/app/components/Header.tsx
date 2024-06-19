import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-gray-800 py-4 text-white">
      <nav className="container mx-auto flex items-center justify-between">
        <div className="logo">
          <Link href="/">
            <span className="text-xl font-bold">TobiStudio</span>
          </Link>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="#about">About</Link>
          </li>
          <li>
            <Link href="#portfolio">Portfolio</Link>
          </li>
          <li>
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}