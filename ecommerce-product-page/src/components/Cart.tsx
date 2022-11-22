import { formatCurrency } from '../utilities/FormatCurrency'
import { IconDelete } from './SVG'

export default () => {
	return (
		<div className="absolute top-14 right-0 w-screen max-w-[340px] mx-2 bg-white rounded-lg text-base">
			<h5 className="text-start font-bold border-b border-darkGrayishBlue p-3">Cart</h5>
			<div className="flex flex-col items-center justify-between gap-4 p-4">
				<article className="flex gap-x-4">
					<img src="/images/image-product-1.jpg" alt="" className="w-14 h-14 rounded-lg" />
					<div className="text-darkGrayishBlue text-start">
						<p className='truncate'>Fall Limited Edition Sneakers</p>
						<p >
							{formatCurrency(125)} x 3 <span className="font-bold text-black">{formatCurrency(375)}</span>
						</p>
					</div>
					<button >
						<IconDelete className="my-auto fill-darkGrayishBlue" />
					</button>
				</article>
				<button className="btn-act font-bold w-full" onClick={()=> console.log("Checked Out!")}>Checkout</button>
			</div>
		</div>
	)
}
