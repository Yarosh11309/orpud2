<template>
    <div class="counter">
        <button @click="decrement()">-</button>
        <span class="count">{{ count }}</span>
        <button @click="increment()">+</button>
    </div>
</template>
  
<script>
  export default {
    data() {
      return {
        count: 1,
        minCount: 1,
        maxCount: 10
      };
    },
    methods: {
      increment() {
        if (this.count < this.maxCount) {
          this.count++;
          this.$emit('count-change', this.count);
        }
      },
      decrement() {
        if (this.count > this.minCount) {
          this.count--;
          this.$emit('count-change', this.count);
        }
      }
    }
  };
</script>
  
<style scoped>
.counter {
    display: flex;
    flex-direction: row;
}

button {
    background-color: #d1d1d1;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 5px 10px;
    margin: 0 5px;
    cursor: pointer;
    font-size: larger;
}

.count {
    background-color: #eeeeee;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 5px 10px;
    margin: 0 5px;
    display: inline-block;
    width: 20px;
    text-align: center;
}
</style>
  