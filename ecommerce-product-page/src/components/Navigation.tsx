import { IconCart, IconClose, IconMenu } from './SVG'
import { Dispatch, SetStateAction } from 'react'
type Dispatcher<S> = Dispatch<SetStateAction<S>>

export default ({ open, openMenu }: { open: boolean; openMenu: () => void }) => {
	return (
		<header className="flex justify-between items-center relative border-b border-lightGrayishBlue">
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
		</header>
	)
}
