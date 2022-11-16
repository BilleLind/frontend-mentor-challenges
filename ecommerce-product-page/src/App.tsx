import Navigation from './components/Navigation'
import { useState } from 'react'
import Slider from './components/Slider'
import { IconCart, IconMinus, IconPlus } from './components/SVG'
function App() {
	const [open, setOpen] = useState<boolean>(false)

	const openMenu = () => {
		setOpen((prevOpen) => !prevOpen)
	}

	const slides = [
		{ image: 'image-product-1.jpg', thumbnail: 'image-product-1-thumbnail.jpg' },
		{ image: 'image-product-2.jpg', thumbnail: 'image-product-2-thumbnail.jpg' },
		{ image: 'image-product-3.jpg', thumbnail: 'image-product-3-thumbnail.jpg' },
		{ image: 'image-product-4.jpg', thumbnail: 'image-product-4-thumbnail.jpg' },
	]

	return (
		<>
			<Navigation open={open} openMenu={openMenu} />
			<Slider slides={slides} />
			<section className="p-3 grid gap-3">
				<h4 className="text-xs text-orange font-bold">SNEAKER COMBANY</h4>
				<h1 className="text-lg font-bold leading-none">Fall Limited Edition Sneakers</h1>
				<p className="text-xs text-veryDarkBlue">
					These low-profile sneakers are your perfekt casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.
				</p>
				<div className="flex items-center justify-between">
					<div className="flex gap-x-2 ">
						<h5 className="text-lg font-bold">$125.00</h5>
						<h6 className="px-1 text-base rounded-lg text-orange bg-paleOrange my-auto font-bold">50%</h6>
					</div>
					<p className="text-darkGrayishBlue font-bold line-through">$250.00</p>
				</div>
				<div className="flex items-center justify-between p-3 bg-lightGrayishBlue text-black rounded-lg">
					<IconMinus className='fill-orange'/>
					<span>0</span>
					<IconPlus className='fill-orange'/>
					 {/* context for session/memory/localstorage cart */}
				</div>
				<button className="flex items-center p-3 bg-orange text-paleOrange text-base justify-center rounded-lg">
					<IconCart className="fill-paleOrange mr-2" /> <span className='font-bold'>Add to cart</span>
				</button>
			</section>
		</>
	)
}

export default App
