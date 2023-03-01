import { createContext, FC, ReactNode, useContext, useState } from 'react'

type CartContext = {
	toggleCart: () => void
	getCart: () => boolean
	getProductQuantity: (id: number) => number
	increaseCartQuantity: (id: number) => void
	decreaseCartQuantity: (id: number) => void
	removeProductFromCart: (id: number) => void
	cartQuantity: () => number
	cartProducts: CartProduct[]
}

interface Props {
	children: React.ReactNode
}

type CartProduct = {
	id: number
	quantity: number
}

const CartContext = createContext({} as CartContext)

export function useCart() {
	return useContext(CartContext)
}

export const CartProvider: FC<Props> = ({ children }) => {
	const [cartProducts, setCartProducts] = useState<CartProduct[]>([])
	const [showCart, setShowCart] = useState(false)

	const toggleCart = () => {
		setShowCart((prev) => !prev)
	}
	const getCart = () => {
		return showCart
	}

	const getProductQuantity = (id: number) => {
		return cartProducts.find((item) => item.id === id)?.quantity || 0
	}
	const cartQuantity = () => {
		if (cartProducts.length == 0) return 0

		var tempQuantity = 0
		cartProducts.forEach((cartProduct) => {
			if (cartProduct.quantity > 0) {
				tempQuantity += cartProduct.quantity
			}
		})
		return tempQuantity
	}

	const increaseCartQuantity = (id: number) => {
		setCartProducts((currentItems) => {
			if (currentItems.find((item) => item.id === id) == null) {
				return [...currentItems, { id: id, quantity: 1 }]
			} else {
				return currentItems.map((item) => {
					if (item.id === id) {
						return { ...item, quantity: item.quantity + 1 }
					} else {
						return item
					}
				})
			}
		})
	}

	const decreaseCartQuantity = (id: number) => {
		setCartProducts((currentItems) => {
			if (currentItems.find((item) => item.id === id)?.quantity === 1) {
				return currentItems.filter((item) => item.id !== id)
			} else {
				return currentItems.map((item) => {
					if (item.id === id) {
						return { ...item, quantity: item.quantity - 1 }
					} else {
						return item
					}
				})
			}
		})
	}

	const removeProductFromCart = (id: number) => {
		setCartProducts((currentItems) => {
			return currentItems.filter((item) => item.id !== id)
		})
	}

	return <CartContext.Provider value={{ getProductQuantity, increaseCartQuantity, decreaseCartQuantity, removeProductFromCart, toggleCart, getCart, cartProducts, cartQuantity }}>{children}</CartContext.Provider>
}
