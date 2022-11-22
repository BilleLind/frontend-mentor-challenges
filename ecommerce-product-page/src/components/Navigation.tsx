import { useState } from 'react'
import Cart from './Cart'
import { IconCart, IconClose, IconLogo, IconMenu } from './SVG'

export default ({ open, openMenu }: { open: boolean; openMenu: () => void }) => {
	const [showCart, setShowCart] = useState(false)
	const openCart = () => {
		setShowCart((pre) => !pre)
	}
	return (
		<header className="flex justify-between items-center relative z-30 border-b border-lightGrayishBlue text-lg">
			<nav className="flex items-center justify-center p-4 gap-x-4">
				<button onClick={openMenu} className="outline-none group md:hidden" title="Navigation Menu">
					<IconMenu className="fill-veryDarkBlue transition duration-300 transform group-hover:fill-orange group-hover:-rotate-12 group-focus:fill-orange group-focus:-rotate-12" />
				</button>
				<div className={`${open ? 'absolute top-0 left-0 w-full h-screen bg-black/75 z-30' : 'hidden'}`}>
					<div className="bg-white p-4 w-3/5 h-screen flex flex-col">
						<button onClick={openMenu} className="mb-4 group outline-none" title="Close Navigation Menu">
							<IconClose className="fill-veryDarkBlue transition duration-300 transform group-hover:rotate-90 group-hover:scale-105 group-hover:fill-orange group-focus:scale-105 group-focus:rotate-90 group-focus:fill-orange outline-none" />
						</button>

						<a href="#" className="nav-link">
							Collections
						</a>

						<a href="#" className="nav-link">
							Men
						</a>
						<a href="#" className="nav-link">
							Women
						</a>
						<a href="#" className="nav-link">
							About
						</a>
						<a href="#" className="nav-link">
							Contact
						</a>
					</div>
				</div>
				<a href="/" className="outline-none group" title="Home page">
					<IconLogo className="text-current transition duration-300 group-hover:fill-orange" />
				</a>
			</nav>
			<div className="p-2 flex gap-x-2 relative">
				<button onClick={openCart} className="group outline-none" title="Shopping Cart">
					<IconCart className={`transition duration-300 transform group-hover:fill-orange group-hover:-rotate-12 group-focus:fill-orange group-focus:-rotate-12 `} />{' '}
					{/* ${showCart ? '-rotate-12 fill-orange': ''} */}
				</button>
				<button className="h-6 w-6 outline-none group" title="Profile">
					<img
						src="./images/image-avatar.png"
						alt=""
						className="transition duration-300 transform group-hover:scale-125 group-focus:scale-125 rounded-full group-hover:border-orange group-hover:border-2 group-focus:border-2 group-focus:border-orange"
					/>
				</button>
				{showCart ? <Cart /> : null}
			</div>
		</header>
	)
}
{
	/* <header className="flex justify-between items-center relative border-b border-lightGrayishBlue">
			<nav className="flex items-center gap-x-4 ">
				<button onClick={openMenu} className="ml-4 py-4 md:hidden">
					<IconMenu />
				</button>
				<div className="flex">
					<h1 className="font-bold text-xl leading-none py-4">sneakers</h1>
					<div className={`${open ? 'absolute top-0 left-0 flex flex-col w-full bg-black/60' : ''}`}>
						<div className={`${open ? 'flex flex-col font-bold gap-y-3 bg-white  w-3/5' : 'hidden md:flex justify-center gap-x-3 leading-none items-center h-full'}`}>
							<button onClick={openMenu} className={`${open ? 'inline-flex p-4 border-red-400 ' : 'hidden'}`}>
								<IconClose />
							</button>
							<a href="#" className={`${open ? '' :'ml-4 '} text-darkGrayishBlue  hover:text-black p-4 hover:border-b-orange hover:border-b `}>Collections</a>
							<a href="#" className='p-4'>Men</a>
							<a href="#" className='p-4'>Women</a>
							<a href="#" className='p-4'>About</a>
							<a href="#" className='p-4'>Contact</a>
							<button className=''>

							</button>
						</div>
					</div>
				</div>
			</nav>
			<div className="flex items-center gap-x-4 p-4">
				<IconCart />
				<button className="h-6 w-6">
					<img src="./images/image-avatar.png" alt="" />
				</button>
			</div>
		</header> */
}
