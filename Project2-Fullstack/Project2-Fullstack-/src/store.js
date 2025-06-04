import { createStore } from "vuex";

const store = createStore({
    state() {
        const products = JSON.parse(localStorage.getItem('products'));
        return {
            products: products || [],
            auth: JSON.parse(sessionStorage.getItem('auth')) || '-'
        }
    },
    getters: {
        getLength(state) {
            return state.products.length;
        }
    },
    mutations: {
        setDefaultProducts(state, products) {
            state.products = products;
            localStorage.setItem('products', JSON.stringify(state.products));
        },
        stateAuth(state) {
            state.auth = state.auth === '+' ? '-' : '+';
            sessionStorage.setItem('auth', JSON.stringify(state.auth));
            window.location.reload();
        },
        addProduct(state, payload) {
            const newProduct = {
                id: payload.currentLength + 1,
                name: payload.name,
                genre: payload.genre,
                inLike: false,
                inCart: false,
                countInCart: 0,
                imageURL: payload.imageURL,
            }

            state.products.push(newProduct)
            localStorage.setItem('products', JSON.stringify(state.products))
        },
        setFavourite(state, payload) {
            const product = state.products.find(product => product.id === payload);

            product.inLike = !product.inLike;
            localStorage.setItem('products', JSON.stringify(state.products));
        },
        addInCart(state, payload) {
            const product = state.products.find(product => product.id === payload);


            product.inCart = !product.inCart;
            product.countInCart = 1;
            localStorage.setItem('products', JSON.stringify(state.products));
        },
        changeCountInCart(state, payload) {
            const product = state.products.find(product => product.id === payload.id);

            product.countInCart = payload.count;
            localStorage.setItem('products', JSON.stringify(state.products));
        },
        signUp(_, payload) {
            if (payload.password === payload.truePassword){
                delete payload.truePassword;
                localStorage.setItem(`${payload.mail}`, JSON.stringify(payload));
                alert('Успешно, Выполните вход!');
            }
            else {
                alert('Неверные данные!')
            }
        },
        signIn(_, payload) {
            // Пытаемся получить данные
            const stored = localStorage.getItem(payload.mail);

            // Если пользователя нет
            if (!stored) {
                alert('Пользователь не найден!');
                return;
            }

            try {
                const person = JSON.parse(stored);

                // Сравниваем только пароль
                if (payload.password === person.password) {
                    sessionStorage.setItem('auth', JSON.stringify('+'));
                    window.location.reload();
                } else {
                    alert('Неверный пароль!');
                }
            } catch (e) {
                alert('Ошибка данных пользователя');
            }
        }
    },
    actions: {
        addProduct({ commit, getters }, payload) {
            payload.currentLength = getters.getLength;

            return new Promise((resolve) => {
                setTimeout(() => {
                    commit('addProduct', payload);
                    resolve();
                },1500)
            });
        },
        setFavourite({ commit }, payload) {
            commit('setFavourite', payload);
        },
        addInCart({ commit }, payload) {
            commit('addInCart', payload);
        },
        changeCountInCart({ commit }, payload) {
            commit('changeCountInCart', payload);
        },
        signUp({ commit }, payload) {
            commit('signUp', payload);
        },
        signIn({ commit }, payload) {
            commit('signIn', payload);
        },
        stateAuth({ commit }) {
            commit('stateAuth');
        }
    }
})

export default store;