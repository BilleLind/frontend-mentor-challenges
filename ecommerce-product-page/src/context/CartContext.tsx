import { createContext, FC, ReactNode, useContext, useState } from 'react'

type CartContext = {
	/* openCart: () => void
	closeCart: () => void */
	getProductQuantity: (id: number) => number
	increaseCartQuantity: (id: number) => void
	decreaseCartQuantity: (id: number) => void
	removeProductFromCart: (id: number) => void
	/* cartQuantity: number
	CartProducts: CartProduct[] */
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
	const [cart, setCart] = useState<CartProduct[]>([])

	const getProductQuantity = (id: number) => {
		return cart.find((item) => item.id === id)?.quantity || 0
	}

	const increaseCartQuantity = (id: number) => {
		setCart((currentItems) => {
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
		setCart((currentItems) => {
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
		setCart((currentItems) => {
			return currentItems.filter((item) => item.id !== id)
		})
	}

	return <CartContext.Provider value={{ getProductQuantity, increaseCartQuantity, decreaseCartQuantity, removeProductFromCart }}>{children}</CartContext.Provider>
}
