<template>
    <div id="login">
        <h3>Регистрация</h3>
        <form @submit.prevent id="form">
            <div>
                <label for="input-name">Ваше имя*</label>
                <input v-model="person.name" type="text" id="input-name" placeholder="Иван" required>
            </div>
            <div>
                <label for="input-email">Email*</label>
                <input v-model="person.mail" type="email" id="input-email" placeholder="example@mail.ru" required>
            </div>
            <div>
                <label for="input-password">Пароль*</label>
                <input v-model="person.password" type="password" id="input-password" placeholder="..." required>
            </div>
            <div>
                <label for="input-true-password">Подтвердить пароль*</label>
                <input v-model="person.truePassword" type="password" id="input-true-password" placeholder="..." required>
            </div>
            <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
            <button @click="signUp" id="btn">Зарегистрироваться</button>
        </form>
    </div>
</template>
  
<script>
export default {
  data() {
    return {
        person: {
            name: '', // New field
            mail: '',
            password: null,
            truePassword: null
        },
        errorMessage: null
    }
  },
  methods: {
    async signUp() {
        // Ensure name is also included in the check for filled fields
        if (this.person.name && this.person.mail && this.person.password && this.person.truePassword) {
            const result = await this.$store.dispatch('signUp', this.person);
            console.log('Signup.vue: Result from store dispatch:', result); // Debug log
            if (result && result.success) { // Added check for result object itself
                console.log('Signup.vue: Registration successful, emitting event.'); // Debug log
                this.$emit('registration-successful');
                this.person.name = ''; // Clear the name field
                this.person.mail = '';
                this.person.password = null;
                this.person.truePassword = null;
                this.errorMessage = null;
            } else {
                console.log('Signup.vue: Registration failed or result was unexpected.'); // Debug log
                if (result && result.error === 'password_mismatch') { // Added check for result object
                    this.errorMessage = 'Пароли не совпадают';
                } else if (result && result.error === 'empty_fields') { // Added check for result object
                    this.errorMessage = 'Пожалуйста, заполните все обязательные поля.';
                }
                else {
                    this.errorMessage = 'Произошла ошибка регистрации.';
                }
            }
        } else {
            // Updated error message to reflect that all fields are required.
            this.errorMessage = 'Пожалуйста, заполните все обязательные поля, включая имя.';
        }
    }
  }
}
</script>
  
<style scoped>
.error-message {
    color: red;
    text-align: center;
    margin-bottom: 10px;
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
    margin-block: 30px;
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
    margin-top: 10px;
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