import { IconCart, IconClose, IconMenu } from './SVG'
import { Dispatch, SetStateAction } from 'react'
type Dispatcher<S> = Dispatch<SetStateAction<S>>

export default ({ open, openMenu }: { open: boolean; openMenu: () => void }) => {
	return (
		<header className="flex p-4 justify-between items-center relative">
			<nav className="flex items-center gap-4 ">
				<button onClick={openMenu}>
					<IconMenu />
				</button>
				<div className="flex">
					<h1 className="font-bold text-xl leading-none">sneakers</h1>
					<div className={`${open ? 'absolute top-0 left-0 flex flex-col w-full bg-black/60' : ''}`}>
						<div className={`${open ? 'flex flex-col font-bold gap-y-3 bg-white p-4 w-[200px]' : 'hidden lg:flex'}`}>
							<button onClick={openMenu} className={`${open ? 'inline-flex' : 'hidden'}`}>
								<IconClose />
							</button>
							<a href="#">Collections</a>
							<a href="#">Men</a>
							<a href="#">Women</a>
							<a href="#">About</a>
							<a href="#">Contact</a>
						</div>
					</div>
				</div>
			</nav>
			<div className="flex items-center gap-4">
				<IconCart />
				<button className="h-6 w-6">
					<img src="./images/image-avatar.png" alt="" />
				</button>
			</div>
		</header>
	)
}
