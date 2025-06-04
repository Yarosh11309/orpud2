<template>
  <h2>Рекомендации</h2>
  <div class="content">
    <div v-if="recommendedProducts.length > 0" class="content__container">
      <div v-for="product in recommendedProducts" :key="product.id" class="product">
        <img :src="product.imageURL" alt="Постер фильма">
        <div class="product-description">
          <svg @click="$store.dispatch('setFavourite', product.id)" xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="35px" :fill="product.inLike ? '#ff0000' : '#000'">
            <path d="m480-128-44-39.83q-102.93-93.91-170.32-162.24-67.39-68.34-107.32-122.04-39.93-53.69-55.81-97.77-15.88-44.07-15.88-89.45 0-89.34 59.99-149.34 60-60 148.67-60 54.62 0 102.31 25.34Q445.33-798 480-750q39.5-49.67 85.46-74.17 45.95-24.5 99.29-24.5 88.59 0 148.59 59.96 59.99 59.96 59.99 149.25 0 45.5-15.88 89.58t-55.81 97.77q-39.93 53.7-107.32 122.04Q626.93-261.74 524-167.83L480-128Z"/>
          </svg>
          <div>
            <p class="overflow">{{ product.name }}</p>
            <p class="overflow">{{ product.genre }}</p>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="content__container">
      <p v-if="hasFavourites">К сожалению, по вашим предпочтениям рекомендаций не найдено.</p>
      <p v-else>Добавьте фильмы в избранное, чтобы получить рекомендации.</p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    // Проверяем, есть ли избранные фильмы
    hasFavourites() {
      return this.$store.state.products.some(item => item.inLike);
    },

    // Получаем рекомендуемые продукты
    recommendedProducts() {
      const allProducts = this.$store.state.products;

      // Получаем избранные фильмы
      const favouriteProducts = allProducts.filter(item => item.inLike);

      // Если нет избранных - возвращаем пустой массив
      if (favouriteProducts.length === 0) return [];

      // Собираем уникальные жанры из избранного
      const favouriteGenres = new Set();
      favouriteProducts.forEach(product => {
        // Обрабатываем строку с жанрами (разделитель - запятая)
        const genres = product.genre.split(',').map(g => g.trim());
        genres.forEach(genre => favouriteGenres.add(genre));
      });

      // Фильтруем рекомендации:
      // 1. Исключаем уже избранные
      // 2. Выбираем фильмы с совпадающими жанрами
      // 3. Исключаем уже добавленные в корзину (опционально)
      return allProducts
          .filter(product => {
            return !product.inLike &&
                product.genre.split(',').some(genre =>
                    favouriteGenres.has(genre.trim())
                );
          })
          .slice(0, 5); // Ограничиваем количество рекомендаций
    }
  }
}
</script>

<style scoped>
/* Сохраняем существующие стили и добавляем новые */
h2 {
  margin-top: 30px;
  text-align: center;
  font-size: 40px;
  letter-spacing: 5px;
}

.content {
  display: flex;
  justify-content: center;
}

.content__container {
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-block: 20px;
  padding: 14px 26px;
  box-sizing: border-box;
  border-radius: 10px;
  background-color: #f5f5f5;
  box-shadow: 7px 0 20px #00000050, 0 7px 20px #00000050, -7px 0 20px #00000050, 0 -7px 20px #00000050;
}

.product {
  display: flex;
  width: 400px;
  transition: transform 500ms ease;
  background-color: white;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

.product:hover {
  transform: scale(1.05);
}

.product img {
  height: 200px;
  width: 150px;
  border-radius: 5px;
}

.product-description {
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.product svg:hover {
  cursor: pointer;
  transform: scale(0.8);
}

.btn {
  width: 150px;
  height: 40px;
  background-color: #25BA7B;
  border: 0;
  border-radius: 5px;
  padding: 7px;
  font-family: "Pangolin", serif;
  font-size: 15px;
  font-weight: 600;
  transition: transform 500ms ease;
  color: white;
}

.btn:hover:not(.btn-disabled) {
  cursor: pointer;
  background-color: #197c53;
  transform: scale(1.05);
}

.btn-disabled {
  background-color: #197c53;
}

.overflow {
  overflow: hidden;
  text-overflow: ellipsis;
  width: 200px;
}
</style>