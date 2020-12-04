const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
    };
  },
  methods: {
    playerAttack() {
      const attackPower = Math.floor(Math.random() * (12 - 7)) + 7;
      this.monsterHealth -= attackPower;
      console.log(this.monsterHealth);
    },
  },
});

app.mount("#game");
