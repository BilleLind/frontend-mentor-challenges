import { useCart } from '../context/CartContext'
import { getProduct } from '../utilities/fakeProductAPI'
import { formatCurrency } from '../utilities/FormatCurrency'
import { IconDelete } from './SVG'

export default () => {
	const { cartProducts, removeProductFromCart } = useCart()

	return (
		<div className="absolute top-14 right-0 w-screen max-w-[340px] mx-2 bg-white rounded-lg text-base shadow-2xl">
			<h5 className="text-start font-bold border-b border-darkGrayishBlue p-4">Cart</h5>
			<div className="flex flex-col items-center justify-between gap-4 p-4">
				{cartProducts.length != 0 ? (
					cartProducts.map((item) => {
						const product = getProduct()
						return (
							<article className="flex gap-x-4" key={item.id}>
								<img src={`images/${product.images[0]}`} alt="" className="w-14 h-14 rounded-lg" />
								<div className="text-darkGrayishBlue text-start">
									<p className="truncate">{product.title}</p>
									<p>
										{formatCurrency(product.price * (product.discount / 100))} x {item.quantity}{' '}
										<span className="font-bold text-black">{formatCurrency((product.price * (product.discount / 100)) * item.quantity)}</span>
									</p>
								</div>
								<button onClick={() => removeProductFromCart(0)}>
									<IconDelete className="my-auto fill-darkGrayishBlue" />
								</button>
							</article>
						)
					})
				) : (
					<article className="text-darkGrayishBlue font-bold p-4">Your cart is empty.</article>
				)}

				{cartProducts.length != 0 ? (
					<button className="btn-act font-bold w-full" onClick={() => console.log('Checked Out!')}>
						Checkout
					</button>
				) : null}
			</div>
		</div>
	)
}
/* <article className="flex gap-x-4">
					<img src="/images/image-product-1.jpg" alt="" className="w-14 h-14 rounded-lg" />
					<div className="text-darkGrayishBlue text-start">
						<p className="truncate">Fall Limited Edition Sneakers</p>
						<p>
							{formatCurrency(125)} x 3 <span className="font-bold text-black">{formatCurrency(375)}</span>
						</p>
					</div>
					<button>
						<IconDelete className="my-auto fill-darkGrayishBlue" />
					</button>
				</article> */
