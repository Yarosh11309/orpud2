<template>
    <div id="login">
        <h3>Войти в аккаунт</h3>
        <form @submit.prevent id="form">
            <div>
                <label for="input-email">Email*</label>
                <input v-model="person.mail" type="email" id="input-email" placeholder="example@mail.ru" required>
            </div>
            <div>
                <label for="input-password">Пароль*</label>
                <input v-model="person.password" type="password" id="input-password" placeholder="..." required>
            </div>
            <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
            <button @click="handleSignIn" id="btn">Войти</button>
        </form>
    </div>
</template>
  
<script>
export default {
  data() {
    return {
        person: {
            mail: '',
            password: null
        },
        errorMessage: null
    }
  },
  methods: {
    async handleSignIn() {
        if (!this.person.mail || !this.person.password) {
            this.errorMessage = 'Пожалуйста, заполните все поля.';
            return;
        }
        this.errorMessage = null; // Clear previous error

        const result = await this.$store.dispatch('signIn', this.person);

        if (result && !result.success) {
            if (result.error === 'user_not_found') {
                this.errorMessage = 'Пользователь с таким email не найден.';
            } else if (result.error === 'invalid_password') {
                this.errorMessage = 'Неверный пароль.';
            } else if (result.error === 'data_error') {
                this.errorMessage = 'Произошла ошибка при чтении данных пользователя.';
            } else {
                this.errorMessage = 'Произошла ошибка входа. Попробуйте снова.';
            }
        } else if (result && result.success) {
            // Page reloads due to store logic, clear error just in case
            this.errorMessage = null;
        }
    }
  }
}
</script>
  
<style scoped>
.error-message {
    color: red;
    text-align: center;
    margin-bottom: 10px; /* Or margin-top, depending on placement */
}

#login {
  margin-block: 40px;
  padding: 40px;
  width: 500px;
  height: 600px;
  border-radius: 5px;
  box-sizing: border-box;
  background-color: #f5f5f5;
  box-shadow: 7px 0 20px #00000050, -7px 0 20px #00000050, 0 7px 20px #00000050, 0 -7px 20px #00000050;
}

h3 {
    font-size: 40px;
    text-align: center;
}

#form {
    margin-block: 80px;
    margin-inline: 40px;
    display: flex;
    flex-direction: column;
    gap: 35px;
}

#form div {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

#form label {
    font-size: 30px;
}

#form input {
    height: 40px;
    width: 91%;
    border: 0;
    outline: none;
    padding: 0 15px;
    font-size: 20px;
    border-radius: 5px;
    border: 1px solid #000;
}

#btn {
    margin-top: 30px;
    width: 100%;
    border: 0;
    outline: none;
    height: 55px;
    border-radius: 5px;
    font-size: larger;
    color: #f5f5f5;
    background-color: #25BA30;
}

#btn:hover {
    cursor: pointer;
    background-color: #1b8822;
}
</style>