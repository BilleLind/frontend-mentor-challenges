import { useState } from 'react'
import { IconNext, IconPrevious } from './SVG'

interface SlidesProp {
	lightBox: {
		check: boolean
		state: boolean
		handler: () => void
	}
	slides: {
		images: string[]
		thumbnails: string[]
		next: () => void
		previous: () => void
		current: number
		setCurrent: (index: number) => void
	}
}

export default ({ slides, lightBox }: SlidesProp) => {
	/* const [current, setCurrent] = useState(0) */

	const length = slides.images.length

	/* const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1)
	}

	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1)
	} */

	/* const [lightBox, setLightBox] = useState(false)

	const handleLightBox = () => {
		setLightBox((current) => !current)
	} */

	if (!Array.isArray(slides.images) || slides.images.length <= 0) {
		return null
	}

	if (lightBox.check && !lightBox.state) return null
	else lightBox.check && lightBox.state
	return (
		<section className={`w-full lg:w-1/2 h-auto relative  ${lightBox.check && lightBox.state} ? 'lg:max-w-4xl z-10' : 'hidden'`}>
			{/* {lightBox.check && lightBox.state ? (
				<p>Both</p>
			) : (
				<p>
					Check: {lightBox.check ? 'true' : 'false'} | {lightBox.state ? 'true' : 'false'}
				</p>
			)} */}
			{/* Mobile slider buttons */}
			{/* <button
				onClick={prevSlide}
				className={`absolute left-0 ml-1 inset-y-1/2 translate-t-1/2 z-20 bg-white rounded-full w-6 h-6 inline-flex items-center justify-center md:hidden ${current === 0 ? 'hidden' : ''}`}>
				<IconPrevious className="-ml-1" />
			</button>
			<button
				onClick={nextSlide}
				className={`absolute right-0 mr-1 top-1/2 translate-t-1/2 z-20 bg-white rounded-full w-6 h-6 inline-flex items-center justify-center md:hidden ${current === length - 1 ? 'hidden' : ''}`}>
				<IconNext className="-mr-1" />
			</button> */}
			<div className={`absolute inset-4 flex  ${lightBox.state && lightBox.check ? '' : 'lg:hidden'}`}>
				<div className="flex items-center justify-start">
					<button onClick={slides.previous} className={` bg-white rounded-full w-10 h-10 flex items-center justify-center ${slides.current === 0 ? 'hidden' : ''}`}>
						<IconPrevious className="-ml-1" />
					</button>
				</div>
				<div className="flex items-center justify-end w-full">
					<button onClick={slides.next} className={`bg-white rounded-full w-10 h-10 flex items-center justify-center ${slides.current === length - 1 ? 'hidden' : ''}`}>
						<IconNext className="-mr-1" />
					</button>
				</div>
			</div>

			{/* Slides */}
			{/* <div className="relative overflow-hidden w-full h-full">
				<div className="transition-all duration-300 transform bg-lightGrayishBlue absolute w-full h-auto"></div>
				{slides.images.map((slide, index) => {
					return (
						<img
							key={index}
							src={`/images/${slide}`}
							className={`absolute  transform transition duration-300 block w-full h-auto aspect-[4/4] object-cover md:rounded-2xl ${
								index > current ? '-translate-x-full z-0' : index < current ? 'translate-x-full z-0' : 'translate-x-0 z-10'
							}`}></img>
					)
				})}
			</div> */}
			<div className="aspect-[5/4] lg:aspect-square" onClick={lightBox.handler}>
				{slides.images.map((slide, index) => {
					return (
						<img
							className={`object-cover sm:rounded-2xl cursor-pointer pointer-events-none lg:pointer-events-auto w-full h-full ${slides.current === index ? '' : 'hidden'}`}
							alt=""
							key={index}
							src={`/images/${slide}`}></img>
					)
				})}
			</div>

			{/* Thumbnails */}
			<div className="hidden lg:flex lg:flex-wrap gap-x-4 items-center justify-between mt-6">
				{slides.thumbnails.map((thumbnail, index) => {
					return (
						<img
							src={`/images/${thumbnail}`}
							key={index}
							className={`object-cover m-auto w-1/5 aspect-[4/4] rounded-lg transform transition duration-300 cursor-pointer outline-none bg-orange hover:border-orange hover:border-2 hover:scale-110 focus:border-orange focus:border-2 focus:scale-110 ${
								slides.current == index ? 'border-2 border-orange scale-110 cursor-default opacity-70' : ''
							}`}
							onClick={() => slides.setCurrent(index)}
							tabIndex={0}
						/>
					)
				})}
			</div>
		</section>
	)
}
