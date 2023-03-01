export interface Product {
	creator: string
	title: string
	desc: string
	price: number
	discount: number
	images: string[]
	thumbnails: string[]
}

export const getProduct = (): Product => {
	const product: Product = {
		creator: 'SNEAKER COMBANY',
		title: 'Fall Limited Edition Sneakers',
		desc: "These low-profile sneakers are your perfekt casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
		price: 250,
		discount: 50,
		images: ['image-product-1.jpg', 'image-product-2.jpg', 'image-product-3.jpg', 'image-product-4.jpg'],
		thumbnails: ['image-product-1-thumbnail.jpg', 'image-product-2-thumbnail.jpg', 'image-product-3-thumbnail.jpg', 'image-product-4-thumbnail.jpg'],
	}

	return product
}
