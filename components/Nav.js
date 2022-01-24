import Image from 'next/Image'
import Link from 'next/Link'

const items = [
  { id: 1, name: 'Home', url: '/'},
  { id: 2, name: 'Projects', url: '/projects'},
  { id: 3, name: 'About', url: '/about'},
  { id: 4, name: 'Contact', url: '/contact'},
]

const nav = () => {
  return (
    <header className="container m-auto flex lg:justify-between justify-around py-10">
      <Image
        src="/img/edurl_logo.svg"
        height={55}
        width={55}
      />
      <nav>
        <ul className="flex h-full items-center">
          {items.map(item => ((
            <li key={item.id} className="text-lg font-bold m-2.5">
              <Link 
                href={item.url}>
                <a>{item.name}</a>
              </Link>
            </li>
          )))}
        </ul>
      </nav>
    </header>
  );
}

export default nav;
