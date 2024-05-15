import Image from 'next/image'
import Link from 'next/link'

const navItems = {
  '/': {
    name: 'Home',
  },
  '/blog': {
    name: 'Blog',
  },
  'https://portfolio-starter-kit-gamma-three-34.vercel.app/': {
    name: 'Deploy',
  },
}

export function Navbar() {
  return (
    <aside className="-ml-[8px] mb-12 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-2 pb-0 fade md:overflow-auto scroll-pr-6 md:relative bg-slate-800 p-2 rounded-md"
          id="nav"
        >
          <div className="flex flex-col items-center text-white w-full"> 
          <Image src={'/logo.png'} alt="logo" width={50} height={50} className='mx-auto' style={{objectFit: 'cover', objectPosition: 'center', filter: 'invert(100%)'}} />

            <div className="mb-0"> 
              <h3 className="text-2xl font-bold">My Blog</h3>
            </div>
            <div className="flex flex-row space-x-0 text-slate-300 font-semibold"> 
              {Object.entries(navItems).map(([path, { name }]) => {
                return (
                  <Link
                    key={path}
                    href={path}
                    className="transition-all hover:text-neutral-400 dark:hover:text-neutral-200 py-2 px-2 m-2"
                  >
                    {name}
                  </Link>
                )
              })}
            </div>
          </div>
        </nav>
      </div>
    </aside>
  )
}
