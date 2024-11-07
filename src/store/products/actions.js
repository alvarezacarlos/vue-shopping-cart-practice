export default {
    addToCart(context, product) {
        context.commit('addToCart', product)
    },
    removeFromCart(context, productId) {
        context.commit('removeFromCart', productId)
    }
}