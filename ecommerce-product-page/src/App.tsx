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
			<section className='md:flex md:w-11/12 md:mx-auto md:mt-6  md:h-screen'>
				<Slider slides={{ images: product.images, thumbnails: product.thumbnails }} />
				<div className="p-3 grid gap-4 md:justify-center">
					<h4 className="text-xs text-orange font-bold">{product?.creator}</h4>
					<h1 className="text-lg font-bold leading-none">{product?.title}</h1>
					<p className="text-xs text-veryDarkBlue">{product?.desc} </p>
					<div className="flex items-center justify-between">
						<div className="flex gap-x-2 ">
							<h5 className="text-lg font-bold">{product ? (product.discount ? formatCurrency(product.price * (product.discount / 100)) : formatCurrency(product.price)) : 'Loading'}</h5>
							<h6 className="px-1 text-base rounded-lg text-orange bg-paleOrange my-auto font-bold">50%</h6>
						</div>
						<p className="text-darkGrayishBlue font-bold line-through">{product ? (product.discount ? null : formatCurrency(product.price)) : 'Loading'}</p>
					</div>
					<div className="flex items-center justify-between p-3 bg-lightGrayishBlue text-black rounded-lg">
						<button className="outline-none group" onClick={() => decreaseCartQuantity(0)}>
							<IconMinus className="fill-orange transition duration-300 transform group-hover:scale-125 group-focus:scale-125 group-focus:outline-orange group-hover:opacity-80 group-focus:opacity-80" />
						</button>
						<span>{getProductQuantity(0)}</span>
						<button className="outline-none group" onClick={() => increaseCartQuantity(0)}>
							<IconPlus className="fill-orange transition duration-300 transform group-hover:scale-125 group-focus:scale-125 group-focus:outline-orange group-hover:opacity-80 group-focus:opacity-80" />
						</button>
					</div>
					<button className="btn-act" onClick={() => increaseCartQuantity(0)}>
						<IconCart className="fill-paleOrange mr-2" /> <span className="font-bold">Add {getProductQuantity(0) >= 1 ? 'more' : ''} to cart</span>
					</button>
				</div>
			</section>
		</>
	)
}

export default App
