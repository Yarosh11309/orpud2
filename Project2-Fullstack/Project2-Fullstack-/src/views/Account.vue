<template>
  <h2>Аккаунт</h2>
  <div class="content">
    <div v-if="isAuthenticated" id="authenticated">
      <p>Вы авторизованы!</p>
      <button @click="$store.dispatch('stateAuth')" id="btn-exit">Выйти</button>
    </div>

    <!-- Container for Login form and its switch link -->
    <div v-if="!isSignUp && !isAuthenticated" class="form-container">
      <Login/>
      <div @click="setActiveBlock" class="btn-switch">Ещё нет аккаунта? Зарегистрироваться</div>
    </div>

    <!-- Container for Signup form and its switch link -->
    <div v-else-if="isSignUp && !isAuthenticated" class="form-container">
      <Signup @registration-successful="switchToLogin"/>
      <div @click="setActiveBlock" class="btn-switch">Уже есть аккаунт? Войти</div>
    </div>
  </div>
</template>

<script>
import Login from '@/components/Login.vue';
import Signup from '@/components/Signup.vue';

export default {
  components: { Login, Signup },
  data() {
    return {
      isSignUp: false
    }
  },
  computed: {
    isAuthenticated() {
      return this.$store.state.auth === '+';
    }
  }, 
  methods: {
    setActiveBlock() {
      this.isSignUp = !this.isSignUp;
    },
    switchToLogin() {
      this.isSignUp = false;
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
  flex-direction: column; /* Changed from flex to column for centering forms */
  align-items: center; /* Center items horizontally */
  /* justify-content: center; */ /* This might not be needed if align-items works well */
}

.form-container {
  display: flex;
  flex-direction: column;
  align-items: center; /* Center form and switch link within this container */
}

#authenticated {
  margin-top: 30px;
  text-align: center;
  font-size: 40px;
  font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

#btn-exit {
  width: 150px;
  height: 30px;
  font-size: large;
  border: 0;
  color: #fff;
  background-color: red;
  border-radius: 5px;
}

#btn-exit:hover{
  cursor: pointer;
  background-color: rgb(138, 0, 0);
}

.btn-switch {
  /* position: absolute; */ /* Removed */
  margin-top: 15px; /* Add some space above the switch link */
  font-size: 16px; /* Example font size */
  color: #007bff; /* Example link color */
  text-decoration: none;
  cursor: pointer;
}

.btn-switch:hover {
  text-decoration: underline;
  color: #0056b3; /* Darker blue on hover */
}
</style>