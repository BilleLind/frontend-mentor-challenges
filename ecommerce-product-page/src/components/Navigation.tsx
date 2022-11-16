import { IconCart, IconClose, IconLogo, IconMenu } from './SVG'

export default ({ open, openMenu }: { open: boolean; openMenu: () => void }) => {
	return (
		<header className="flex justify-between items-center relative z-30 border-b border-lightGrayishBlue text-lg">
			<nav className="flex items-center justify-center p-4 gap-x-4">
				<IconMenu onClick={openMenu} className=" md:hidden" />
				<div className={`${open ? 'absolute top-0 left-0 w-full h-screen bg-black/75 z-30' : 'hidden'}`}>
					<div className="bg-white p-4 w-3/5 h-screen flex flex-col">
						<button onClick={openMenu} className="mb-4">
							<IconClose />
						</button>
						<a href="#" /* className={`${open ? '' :'ml-4 '} text-darkGrayishBlue  hover:text-black p-4 hover:border-b-orange hover:border-b `} */>Collections</a>
						<a href="#" className="">
							Men
						</a>
						<a href="#" className="">
							Women
						</a>
						<a href="#" className="">
							About
						</a>
						<a href="#" className="">
							Contact
						</a>
					</div>
				</div>
				<a href="#">
					<IconLogo />
				</a>
			</nav>
			<div className="p-2 flex gap-x-2">
				<button>
					<IconCart />
				</button>
				<button className="h-6 w-6">
					<img src="./images/image-avatar.png" alt="" />
				</button>
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
