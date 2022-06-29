import { useState } from 'react';
import Container from '../components/Container';
import Link from 'next/link';

export default function Navbar() {
    const [dropDown, setDropdown] = useState(false);
    const[offcanvas, setOffcanvas] = useState(false);
    const[search, setSearch] = useState(false);
  const dropdownList = [
    {text: 'Liga Inggris', href: '/posts'},
    {text: 'Liga Spanyol', href: '#'},
    {text: 'Liga Italia', href: '#'},
    {text: 'Liga Prancis', href: '#'},
    {text: 'Liga Jerman', href: '#'},
  ];
    return(
<nav className="py-2 mb-5 bg-green-800 sticky top-0">
        <Container>
        <div className="flex items-center">
          <div className="w-3/12 lg:hidden">
            <button onClick={() => setOffcanvas(!offcanvas)}>
            <svg fill="currentColor" viewBox="0 0 20 20" class="w-14 h-14">
              <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clip-rule="evenodd"></path>
            </svg>
            </button>
          </div>
            <div className="lg:w-2/12 w-6/12 flex items-center justify-center lg:justify-start lg:text-3xl sm:text-3xl font-bold">
              <div className="w-12 h-12 bg-green-500 rounded flex items-center justify-center mr-2 shadow-xl ">DG</div>
              Detik Gol
            </div>
            <div className="w-3/12 lg:hidden text-right">
              <button onClick={() => setSearch(!search)}>
              <svg className="inline-block" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.4">
                  <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="white" stroke-width="2" />
                  <path d="M21 21L16.65 16.65" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </g>
              </svg>
              </button>
            </div>
            <div className={`lg:w-7/12 w-full bg-gradient-to-b from-green-600 to-green-900 lg:bg-none lg:static lg:h-auto lg:p-0 fixed top-0 h-full p-10 transition-all ${offcanvas ? 'left-0' : '-left-full'}`}>
              <button className="absolute top-5 right-5 lg:hidden"
              onClick={() => setOffcanvas(false)}
              >
              <svg fill="currentColor" viewBox="0 0 20 20" class="w-12 h-12">
              <path x-show="open" fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
              </svg>
              </button>
              <ul className="lg:space-x-14 flex lg:items-center text-2xl flex-col lg:flex-row space-y-4 lg:space-y-0">
              <li><Link href="/posts"><a className="hover:underline">News</a></Link></li>
              <li><a href="#"className="hover:underline">Transfer</a></li>
              <li><a href="#"className="hover:underline">Liga Champions</a></li>
              <li className="relative">
                <a className="hover:underline cursor-pointer flex items-center"
                onClick={() => setDropdown(!dropDown)}>Lainnya
                <svg className="ml-2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 6L8 10L12 6" stroke="white" strokeWidth="2" stokeLinecap="round" strokeLinejoin="round" />
                  </svg> 
                </a>
                {dropDown && (
                  <ul className="absolute w-[200px] bg-green-800 rounded shadow-2xl mt-4">
                    {dropdownList.map(({text, href}) => (
                    <li key={text} className="border-b last:border-0">
                       <Link href="/posts"><a className="flex py-3 px-6  border-white/8 hover:bg-green-700/60 last:border-0">
                      {text}
                    </a>
                    </Link>
                    </li>
                  ))}
                  </ul>
                )}
                </li> 
              </ul>
            </div>
            <div className={`lg:w-3/12 absolute lg:static lg:px-0 w-full left-0 p-10 transition-all ${search? '-top-6' : '-top-40'}`}>
            <button className="absolute top-12 right-12 lg:hidden"
              onClick={() => setSearch(false)}
              >
              <svg fill="currentColor" viewBox="0 0 20 20" class="w-8 h-8">
              <path x-show="open" fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
              </svg>
              </button>
              <input className="bg-green-700 py-3 px-6 w-full lg:rounded-full rounded-lg bg-search pl-12" placeholder="Search" />
            </div>
          </div>
        </Container>
</nav>
            );
        }