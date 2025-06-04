<template>
    <form @submit.prevent class="form">
        <h2>Добавить фильм в каталог</h2>
        <div v-if="data.name && data.genre && data.imageURL" class="product-description">
            <img alt="product" :src= data.imageURL>
            <p class="overflow">{{ data.name }}</p>
            <p class="overflow">{{ data.genre }}</p>
        </div>
        <label for="nameProduct">Введите название фильма</label>
        <input v-model="data.name" type="text" id="nameProduct">
        <label for="genreProduct">Введите жанр фильма</label>
        <input v-model="data.genre" type="text" id="genreProduct">
        <label for="imageURLProduct">Введите постер фильма</label>
        <input v-model="data.imageURL" type="url" id="imageURLProduct">
        <button class="btn-add" @click="addProduct">Добавить фильм</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            data: {
                name: '',
                genre: '',
                imageURL: ''
            }
        }
    },
    methods: {
        async addProduct() { 
            if(this.data.name && this.data.genre && this.data.imageURL) {
                await this.$store.dispatch('addProduct', this.data);
                this.data.name = '';
                this.data.genre = '';
                this.data.imageUrl = '';
            }
            else{
                alert("Заполните данные!!!")
            }
        }
    }
}
</script>

<style scoped>
h2 {
    margin-block: 30px;
    text-align: center;
    font-size: 40px;
    letter-spacing: 5px;
}

.form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin-block: 150px;
}

.form img {
    height: 350px;
    width: 250px;
    border-radius: 5px;
}

.form label {
    font-size: larger;
}

.form input {
    border: 0;
    border-radius: 5px;
    outline: none;
    height: 25px;
    width: 30vw;
    padding: 7px;
    font-size: 20px;
}

.product-description {
    margin-bottom: 20px;
}

.btn-add {
    margin-top: 8px;
    height: 38px;
    width: 230px;
    background-color: #22AAA0;
    border: 0;
    border-radius: 5px;
    padding: 7px;
    font-family: "Pangolin", serif;
    font-size: 15px;
    font-weight: 600;
    transition: transform 500ms ease;
}

.btn-add:hover {
    cursor: pointer;
    background-color: #0e4642;
    transform: scale(1.1) translateY(-5px);
}

.overflow {
  overflow: hidden;
  text-overflow: ellipsis;
  width: 200px;
}
</style>