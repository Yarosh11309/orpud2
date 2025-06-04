<template>
  <h2>Аккаунт</h2>
  <div class="content">
    <div v-if="isAuthenticated" id="authenticated">
      <p>Вы авторизованы!</p>
      <button @click="$store.dispatch('stateAuth')" id="btn-exit">Выйти</button>
    </div>
    <Login v-if="!isSignUp && !isAuthenticated"/>
    <Signup v-else-if="isSignUp && !isAuthenticated"/>
    <div v-if="!isSignUp && !isAuthenticated" @click="setActiveBlock" class="btn-switch">Зарегаться?</div>
    <div v-else-if="isSignUp && !isAuthenticated" @click="setActiveBlock" class="btn-switch">Войти?</div>
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
  position: absolute;
}

.btn-switch:hover {
  cursor: pointer;
  color: blue;
}
</style>