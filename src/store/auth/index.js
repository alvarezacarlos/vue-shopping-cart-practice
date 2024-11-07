import authGetters from "./getters"
import authMutations from "./mutations"
import authActions from "./actions"

const authModule = {
    state() {
        return {
            userIsLogged: false,
        }
    },
    getters: authGetters,
    actions: authActions,
    mutations: authMutations,
}

export default authModule