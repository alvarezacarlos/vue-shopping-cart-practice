export default {
    login(context) {
        context.commit('setLogged', { isLogged: true })
    },
    logout(context) {
        context.commit('setLogged', { isLogged: false })
    },
}