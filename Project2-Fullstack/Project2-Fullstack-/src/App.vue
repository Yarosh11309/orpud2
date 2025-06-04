<template>
  <Navbar/>
  <div class="margin-navbar">navbar</div>
  <div v-show="$route.path === '/'">
    <h2 v-if="$store.getters.getLength !== 0">Каталог Фильмов</h2>
    <div class="content">
      <Product/>
    </div>
    <div>
      <CreateProduct/>
    </div>
  </div>
  
  <router-view></router-view>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Product from './components/Product.vue';
import CreateProduct from './components/CreateProduct.vue';

export default {
  components: { Navbar, Product, CreateProduct },
  data() {
    return {
      isFirst: true,
      defaultProducts: [
        {
          id: 1,
          name: 'Батя 2. Дед',
          genre: 'Комедия',
          inLike: false,
          inCart: false,
          countInCart: 0,
          imageURL: "https://avatars.mds.yandex.net/get-ott/200035/2a0000019712069e12386b899d48f2aaa1a6/292x440"
        },
        {
          id: 2,
          name: 'Леди баг и Супер кот',
          genre: 'Мультфильм',
          inLike: false,
          inCart: false,
          countInCart: 0,
          imageURL: "https://avatars.mds.yandex.net/get-ott/1648503/2a0000019697fe0e6ef403116b1d371f9957/292x440"
        },
        {
          id: 3,
          name: 'Блогеры Взаперти',
          genre: 'Комедия',
          inLike: false,
          inCart: false,
          countInCart: 0,
          imageURL: "https://avatars.mds.yandex.net/get-ott/13051577/2a0000019711b82baeff49bbb51b99749cd3/292x440"
        },
        {
          id: 4,
          name: 'Мастер',
          genre: 'Боевик',
          inLike: false,
          inCart: false,
          countInCart: 0,
          imageURL: "https://avatars.mds.yandex.net/get-ott/2385704/2a00000196a5675daa5ccaacb788fe8bb5a5/292x440"
        },
        {
          id: 5,
          name: 'Пальма 2',
          genre: 'Комедия',
          inLike: false,
          inCart: false,
          countInCart: 0,
          imageURL: "https://avatars.mds.yandex.net/get-ott/12808873/2a00000195b36ce700646810dfba5de9fedb/292x440"
        },
        {
          id: 6,
          name: 'Я ничего не помню',
          genre: 'Боевик',
          inLike: false,
          inCart: false,
          countInCart: 0,
          imageURL: "https://pic.uma.media/cwebp/pic/cardimage/64/ef/64ef25298ef22ec1b10a8d58c924ff3d.jpg?size=200&quality=95"
        },
        {
          id: 7,
          name: 'Танго на осколках',
          genre: 'Драма',
          inLike: false,
          inCart: false,
          countInCart: 0,
          imageURL: "https://pic.uma.media/cwebp/pic/cardimage/6f/e6/6fe62dd2860ce2376c40d10397532bd2.jpg?size=220&quality=95"
        },
        {
          id: 8,
          name: 'Жить Жизнь',
          genre: 'Драма',
          inLike: false,
          inCart: false,
          countInCart: 0,
          imageURL: "https://pic.uma.media/cwebp/pic/cardimage/64/37/64371267719994b6159d8e17949c5105.jpg?size=220&quality=95"
        }
      ]
    }
  },
  mounted() {
    this.initializeProducts();
  },
  methods: {
    initializeProducts() {
      if (this.$store.state.products.length === 0) {
        this.$store.commit('setDefaultProducts', this.defaultProducts);
      }
    }
  }
}
</script>

<style scoped>
.margin-navbar {
  padding-top: 70px;
}

h2 {
  margin-top: 30px;
  text-align: center;
  font-size: 40px;
  letter-spacing: 5px;
}

.content {
  margin-block: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 60px;
}
</style>