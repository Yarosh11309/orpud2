<template>
  <h2>Избранное</h2>
  <div class="content">
    <div class="content__container">
      <div v-for="like in viewFavourites" class="product">
        <img :src = like.imageURL>
        <div class="product-description">
          <svg @click="$store.dispatch('setFavourite', like.id)" xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="35px" fill="#000"><path d="m480-128-44-39.83q-102.93-93.91-170.32-162.24-67.39-68.34-107.32-122.04-39.93-53.69-55.81-97.77-15.88-44.07-15.88-89.45 0-89.34 59.99-149.34 60-60 148.67-60 54.62 0 102.31 25.34Q445.33-798 480-750q39.5-49.67 85.46-74.17 45.95-24.5 99.29-24.5 88.59 0 148.59 59.96 59.99 59.96 59.99 149.25 0 45.5-15.88 89.58t-55.81 97.77q-39.93 53.7-107.32 122.04Q626.93-261.74 524-167.83L480-128Z"/></svg>
          <div>
            <p class="overflow">{{ like.name }}</p>
            <p class="overflow">{{ like.genre }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="countFavourites">
    <p>В избранном: </p>
    <p>{{ countFavourites }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    viewFavourites() {
      return this.$store.state.products.filter(item => item.inLike === true);
    },
    countFavourites() {
      let count = 0;
      this.$store.state.products.filter(item => item.inLike === true && count++);
      return count;
    }
  }
}
</script>

<style scoped>
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
  width: 600px;
  height: 650px;
  display: flex;
  flex-direction: column;
  margin-block: 20px;
  padding: 14px 26px;
  box-sizing: border-box;
  overflow-y: scroll;
  overflow-x: hidden;
  border-radius: 10px;
  background-color: #f5f5f5;
  box-shadow: 7px 0 20px #00000050, 0 7px 20px #00000050, -7px 0 20px #00000050, 0 -7px 20px #00000050;
}

.content__container::-webkit-scrollbar {
  width: 0;  /*Для вертикального scrollbar*/
  background: transparent;  /*Делаем фон прозрачным*/
}

.product {
  display: flex;
  transition: transform 500ms ease;
}

.product:hover {
  transform: scale(1.1);
}

.product img {
  height: 350px;
  width: 250px;
  border-radius: 5px;
}

.product-description {
  margin-block: 20px;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 60px;
}

.product p {
  font-size: 30px;
}

.product svg:hover {
  cursor: pointer;
  transform: scale(0.8);
}

.btn {
  width: 250px;
  height: 50px;
  background-color: #25BA7B;
  border: 0;
  border-radius: 5px;
  padding: 7px;
  font-family: "Pangolin", serif;
  font-size: 15px;
  font-weight: 600;
  transition: transform 500ms ease;
}

.btn:hover:not(.btn-disabled) {
  cursor: pointer;
  background-color: #197c53;
  transform: scale(1.1) translateY(-5px);
}

.btn-disabled {
  background-color: #197c53;
}

.countFavourites {
  position: absolute;
  right: 10%;
  top: 50%;
  font-size: 30px;
  text-align: center;
}

.overflow {
  overflow: hidden;
  text-overflow: ellipsis;
  width: 200px;
}
</style>
