import { useState } from 'react'
import { IconNext, IconPrevious } from './SVG'

interface SlidesProp {
	slides: {
		images: string[]
		thumbnails: string[]
	}
}

export default ({ slides }: SlidesProp) => {
	const [current, setCurrent] = useState(0)

	const length = slides.images.length

	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1)
	}

	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1)
	}
	if (!Array.isArray(slides.images) || slides.images.length <= 0) {
		return null
	}

	return (
		<section className="w-full h-auto  relative ">
			{' '}
			{/* h-80 */}
			<button
				onClick={prevSlide}
				className={`absolute left-0 ml-1 inset-y-1/2 translate-t-1/2 z-20 bg-white rounded-full w-6 h-6 inline-flex items-center justify-center md:hidden ${current === 0 ? 'hidden' : ''}`}>
				<IconPrevious className="-ml-1" />
			</button>
			<button
				onClick={nextSlide}
				className={`absolute right-0 mr-1 top-1/2 translate-t-1/2 z-20 bg-white rounded-full w-6 h-6 inline-flex items-center justify-center md:hidden ${current === length - 1 ? 'hidden' : ''}`}>
				<IconNext className="-mr-1" />
			</button>
			<div className="relative overflow-hidden w-full h-full border-red-400 border-2">
				{slides.images.map((slide, index) => {
					return (
						<div
							key={index}
							className={`transition-all duration-300 transform bg-lightGrayishBlue absolute inset-0 w-full ${
								index > current ? '-translate-x-full z-0' : index < current ? 'translate-x-full z-0' : 'translate-x-0 z-10'
							}  `}>
							{' '}
							<img src={`/images/${slide}`} className={`transform transition duration-300 block w-full  aspect-[4/4] object-cover md:rounded-2xl`}></img>
							{/* )} */}
						</div>
					)
				})}
			</div>
			<div className="hidden md:flex gap-x-4 md:justify-around w-full absolute top-[80%] bottom-0 right-0 left-0 z-20 ">
				{slides.thumbnails.map((thumbnail, index) => {
					return (
						<img
							src={`/images/${thumbnail}`}
							key={index}
							className={`object-cover my-auto w-1/5 aspect-[4/4] rounded-lg transform transition duration-300 outline-none bg-orange hover:border-orange hover:border-2 hover:scale-110 focus:border-orange focus:border-2 focus:scale-110 ${
								current == index ? 'border-2 border-orange scale-110' : ''
							}`}
							onClick={() => setCurrent(index)}
							tabIndex={0}
						/>
					)
				})}
			</div>
		</section>
	)
}
