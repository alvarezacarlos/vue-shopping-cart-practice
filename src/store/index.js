import { createStore } from 'vuex'
import authModule from './auth'
import productModule from './products'

const store = createStore({
    modules: {
        authModule,
        productModule,
    }
})

export default store