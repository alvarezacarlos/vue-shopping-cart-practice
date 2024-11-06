export default {
    login(context) {
        context.commit('setLogged', { isLogged: true })
    },
    logout(context) {
        context.commit('setLogged', { isLogged: false })
    },
    addToCart(context, product) {
        context.commit('addToCart', product)
    },
    removeFromCart(context, productId) {
        context.commit('removeFromCart', productId)
    }
}