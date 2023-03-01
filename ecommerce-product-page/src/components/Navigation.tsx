import { useState } from 'react'
import Cart from './Cart'
import { IconCart, IconClose, IconLogo, IconMenu } from './SVG'
import { useCart } from '../context/CartContext'
export default ({ open, openMenu }: { open: boolean; openMenu: () => void }) => {
	const { getCart, toggleCart, getProductQuantity, cartQuantity } = useCart()
	return (
		<header className={`flex justify-between items-center relative z-30 text-lg ${open ? 'border-lightGrayishBlue border-b': ''}`}>
			<nav className="flex items-center justify-center p-4 md:p-6 lg:p-8 gap-x-4">
				<button onClick={openMenu} className="outline-none group md:hidden" title="Navigation Menu">
					<IconMenu className="fill-veryDarkBlue transition duration-300 transform group-hover:fill-orange group-hover:-rotate-12 group-focus:fill-orange group-focus:-rotate-12" />
				</button>
				<a href="/" className="outline-none group" title="Home page">
					<IconLogo className="text-current transition duration-300 group-hover:fill-orange group-focus:fill-orange" />
				</a>
				<div className={`${open ? 'absolute top-0 left-0 w-full h-screen bg-black/75 z-30' : 'hidden md:flex'}`}>
					<div className={`${open ? 'bg-white text-darkGrayishBlue' : ''} p-4 w-3/5 h-screen flex flex-col md:bg-none md:w-fit md:h-full md:flex-row md:leading-none  gap-x-4 md:text-base`}>
						<button onClick={openMenu} className="mb-4 group outline-none md:hidden" title="Close Navigation Menu">
							<IconClose className="fill-veryDarkBlue transition duration-300 transform group-hover:rotate-90 group-hover:scale-105 group-hover:fill-orange group-focus:scale-105 group-focus:rotate-90 group-focus:fill-orange outline-none" />
						</button>

						<a href="#" className="nav-link" title="Go to Collection">
							Collections
						</a>

						<a href="#" className="nav-link" title="Go to Men">
							Men
						</a>
						<a href="#" className="nav-link" title="Go to Women">
							Women
						</a>
						<a href="#" className="nav-link" title="Go to About">
							About
						</a>
						<a href="#" className="nav-link" title="Go to Contact">
							Contact
						</a>
					</div>
				</div>
			</nav>
			<div className="p-4 flex gap-x-2 md:gap-x-4 relative">
				<button onClick={toggleCart} className="group outline-none relative" title="Shopping Cart">
					<IconCart className={`transition duration-300 transform fill-veryDarkBlue group-hover:fill-orange  group-focus:fill-orange  ${getCart() ? '-rotate-12 fill-orange' : ''} `} />{' '}
					{cartQuantity() != 0 ? (
						<span className="absolute top-0 right-0 translate-x-2 -translate-y-1.5 text-[10px] text-white bg-orange rounded-3xl list-none py-0 px-2">{cartQuantity()}</span>
					) : null}
				</button>
				<button className="h-6 w-6 md:h-8 md:w-8 outline-none group" title="Profile">
					<img
						src="./images/image-avatar.png"
						alt=""
						className="transition duration-300 transform group-hover:scale-125 group-focus:scale-125 rounded-full group-hover:border-orange group-hover:border-2 group-focus:border-2 group-focus:border-orange"
					/>
				</button>
				{getCart() ? <Cart /> : null}
			</div>
		</header>
	)
}
