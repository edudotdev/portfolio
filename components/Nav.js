import Image from 'next/Image'
import Link from 'next/Link'

const nav = () => {
  return (
    <header className="container m-auto flex justify-between py-10">
      <Image
        src="/img/edurl_logo.svg"
        height={50}
        width={50}
      />
      <nav>
        <ul className="flex h-full items-center">
          <li className="text-lg font-bold m-2.5"><Link href="/"><a>Home</a></Link></li>
          <li className="text-lg font-bold m-2.5"><Link href="/proyects"><a>Projects</a></Link></li>
          <li className="text-lg font-bold m-2.5"><Link href="/about"><a>About</a></Link></li>
          <li className="text-lg font-bold m-2.5"><Link href="/contact"><a>Contact</a></Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default nav;
