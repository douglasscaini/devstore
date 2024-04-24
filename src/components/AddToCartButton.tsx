"use client";

import { useCart } from "@/contexts/CartContext";

type AddToCartButtonProps = {
    productId: number;
};

export function AddToCartButton({ productId }: AddToCartButtonProps) {
    const { addToCart } = useCart();

    function handleAddToProductToCart() {
        addToCart(productId);
    }

    return (
        <button
            type="button"
            className="mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-600 font-semibold text-white"
            onClick={handleAddToProductToCart}
        >
            Adicionar ao carrinho
        </button>
    );
}
