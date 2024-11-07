export default {
    addToCart(state, product) {
        const productInCartIndex = state.cartProducts.products.findIndex(
            (cartProduct) => cartProduct.productId === product.id
        );
        if (productInCartIndex >= 0) {
            state.cartProducts.products[productInCartIndex].quantity++;
        } else {
            const newProduct = {
                productId: product.id,
                title: product.title,
                image: product.image,
                price: product.price,
                quantity: 1,
            };
            state.cartProducts.products.push(newProduct);
        }
        state.cartProducts.quantity++;
        state.cartProducts.total += product.price;
    },
    removeFromCart(state, productId) {
        const productInCartIndex = state.cartProducts.products.findIndex(
            (cartProduct) => cartProduct.productId === productId
        );
        if (productInCartIndex >= 0) {
            const productInCart = state.cartProducts.products[productInCartIndex];
            state.cartProducts.products.splice(productInCartIndex, 1);
            state.cartProducts.quantity -= productInCart.quantity;
            state.cartProducts.total -= productInCart.price * productInCart.quantity;
        }
    },
}