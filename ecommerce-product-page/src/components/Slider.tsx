import { useState } from 'react'
import { IconNext, IconPrevious } from './SVG'

type slide = {
	image: string
	thumbnail: string
}

interface SlidesProp {
	slides: slide[]
}

export default ({ slides }: SlidesProp) => {
	const [current, setCurrent] = useState(0)
	const length = slides.length

	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1)
	}

	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1)
	}
	if (!Array.isArray(slides) || slides.length <= 0) {
		return null
	}

	console.log(current)

	return (
		<section className="w-full h-60 relative">
			<button onClick={prevSlide} className={`absolute left-0 ml-1 inset-y-1/2 translate-t-1/2 z-20 bg-white rounded-full w-6 h-6 inline-flex items-center justify-center ${current ===0 ? 'hidden': ''}`}>
				<IconPrevious className="-ml-1" />
			</button>
			<button onClick={nextSlide} className={`absolute right-0 mr-1 top-1/2 translate-t-1/2 z-20 bg-white rounded-full w-6 h-6 inline-flex items-center justify-center ${current ===length-1 ? 'hidden': ''}`}>
				<IconNext className="-mr-1" />
			</button>
			<div className="relative overflow-hidden w-full h-full">
				{slides.map((slide, index) => {
					return (
						<div
							key={index} 
							className={`transition-all duration-300 transform bg-lightGrayishBlue absolute inset-0 ${
								index > current ? '-translate-x-full z-0' : index < current ? 'translate-x-full z-0' : 'translate-x-0 z-10'
							}  `}>
							{' '}
							
							<img
								src={`/images/${slide.image}`} /*  */
								className={`transform transition duration-300 block  w-full `}></img> 
							{/* )} */}
						</div>
					)
				})}
			</div>

			{/* Thumbnail */}
		</section>
	)
}
