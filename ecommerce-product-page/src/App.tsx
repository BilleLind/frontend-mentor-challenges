import Navigation from './components/Navigation'
import { useEffect, useState } from 'react'
import Slider from './components/Slider'
import { IconCart, IconMinus, IconPlus } from './components/SVG'
import { formatCurrency } from './utilities/FormatCurrency'
import { getProduct, Product } from './utilities/fakeProductAPI'
import { useCart } from './context/CartContext'

function App() {
	const [open, setOpen] = useState<boolean>(false)
	const [product, setProduct] = useState<Product>()

	const { getProductQuantity, decreaseCartQuantity, increaseCartQuantity } = useCart()

	const openMenu = () => {
		setOpen((prevOpen) => !prevOpen)
	}

	useEffect(() => {
		setProduct(getProduct())
	}, [])

	/* Slider Logic */
	const [current, setCurrent] = useState(0)
	const [lightBoxState, setLightBoxState] = useState(false)

	const handleLightBoxState = () => {
		setLightBoxState((current) => !current)
		console.log(lightBoxState)
	}
	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1)
	}

	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1)
	}

	if (product == undefined) {
		return (
			<main className="flex w-full h-full justify-center items-center">
				<h1 className="animate-pulse ">Loading....</h1>
			</main>
		)
	}

	return (
		<>
			<Navigation open={open} openMenu={openMenu} />
			<div className={`${lightBoxState ? 'hidden lg:absolute w-full h-ful inset-0 bg-black bg-opacity-75 lg:flex justify-center items-center z-20' : ''}`}>
				<Slider
					lightBox={{ check: true, state: lightBoxState, handler: handleLightBoxState }}
					slides={{ images: product.images, thumbnails: product.thumbnails, next: nextSlide, previous: prevSlide, current: current, setCurrent: setCurrent }}></Slider>
			</div>
			<section className="sm:max-w-lg md:max-w-xl sm:pt-4 lg:flex lg:max-w-[95%] mx-auto lg:mt-6 lg:gap-x-10 lg:gap-y-14 relative ">
				<Slider
					lightBox={{ check: false, state: lightBoxState, handler: handleLightBoxState }}
					slides={{ images: product.images, thumbnails: product.thumbnails, next: nextSlide, previous: prevSlide, current: current, setCurrent: setCurrent }}
				/>
				<div className="p-6 grid gap-4 md:justify-center lg:w-1/2 lg:content-center">
					<h4 className="text-xs text-orange font-bold">{product?.creator}</h4>
					<h1 className="text-xl font-bold leading-none">{product?.title}</h1>
					<p className="text-xs text-veryDarkBlue">{product?.desc} </p>
					<div className="flex items-center justify-between">
						<div className="flex gap-x-2 ">
							<h5 className="text-xl font-bold">{product ? (product.discount ? formatCurrency(product.price * (product.discount / 100)) : formatCurrency(product.price)) : 'Loading'}</h5>
							<h6 className="px-1 text-base rounded-lg text-orange bg-paleOrange my-auto font-bold">50%</h6>
						</div>
						<p className="text-darkGrayishBlue font-bold line-through">{product ? (product.discount ? null : formatCurrency(product.price)) : 'Loading'}</p>
					</div>
					<div className="lg:flex gap-x-6">
						<div className="flex items-center justify-between p-3 bg-lightGrayishBlue shadow-lg text-black rounded-lg w-full lg:w-1/3">
							<button className="outline-none group" onClick={() => decreaseCartQuantity(0)}>
								<IconMinus className="fill-orange transition duration-300 transform group-hover:scale-125 group-focus:scale-125 group-focus:outline-orange group-hover:opacity-80 group-focus:opacity-80" />
							</button>
							<span className="font-bold">{getProductQuantity(0)}</span>
							<button className="outline-none group" onClick={() => increaseCartQuantity(0)}>
								<IconPlus className="fill-orange transition duration-300 transform group-hover:scale-125 group-focus:scale-125 group-focus:outline-orange group-hover:opacity-80 group-focus:opacity-80" />
							</button>
						</div>
						<button className="btn-act w-full lg:w-2/3  shadow-lg" onClick={() => increaseCartQuantity(0)}>
							<IconCart className="fill-paleOrange mr-2" /> <span className="font-bold">Add {getProductQuantity(0) >= 1 ? 'more' : ''} to cart</span>
						</button>
					</div>
				</div>
			</section>
		</>
	)
}

export default App
