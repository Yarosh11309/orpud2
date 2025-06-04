<template>
  <nav>
    <router-link class="logo" to="/">
        <h1>Store</h1>
    </router-link>
    <router-link class="account" to="/Account">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Z"/></svg>
        <p>Аккаунт</p>
    </router-link>
    <router-link class="favourites" to="/Favourites">
        <svg class="margin-svg-heart" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Z"/></svg>
        <p>Избранное</p>
    </router-link>
    <router-link class="favourites" to="/Cart">
      <svg class="margin-svg-heart" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Z"/></svg>
      <p>Рекомендации</p>
    </router-link> 
  </nav>
</template>

<script>
export default {
  computed: {
    isAuthenticated() {
      return this.$store.state.auth && this.$store.state.auth.isAuthenticated;
    },
    userName() {
      return this.$store.state.auth && this.$store.state.auth.userName ? this.$store.state.auth.userName : '';
    }
  }
}
</script>

<style scoped>
.user-greeting {
  color: #fff; /* White text color for greeting */
  margin-right: 15px; /* Space it out a bit from other nav items */
  font-weight: 600;
  font-size: 14px;
}

nav {
    width: 100%;
    height: 70px;
    background-color: #25BA7B;
    padding: 10px;
    box-shadow: 0 1px 20px #0000007e;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    justify-content: space-around;
    z-index: 1000;
}

nav p {
    font-weight: 600;
    font-size: 14px;
}

h1 {
    color: #ddd;
    text-shadow: 20px 0 #000, 0 1px #000;
    font-family: "Permanent Marker", serif;
    font-size: 9rem;
}

.search {
    display: flex;
    border: 1px solid #00000056;
    border-radius: 4px;
}

.search input {
    width: 400px;
    height: 40px;
    border: 0;
    outline: none;
    border-radius: 4px;
    padding: 0 10px;
}

.search svg {
    align-self: center;
    padding-inline: 15px;
    background-color: #22AAA0;
    border-radius: 0 4px 4px 0;
}

.search svg:hover {
    cursor: pointer;
    background-color: #0e4642;
}

a {
    text-decoration: none;
    color: #000f38;
    transition: transform 500ms ease;
}

a:hover:not(.logo) {
    transform: scale(1.1) translateY(5px);
}

a svg {
    margin-inline: 12px;
}

.favourites svg {
    margin-inline: 20px;
}
</style>