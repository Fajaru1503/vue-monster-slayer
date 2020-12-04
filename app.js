const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
    };
  },
  computed: {
    playerHealthBarStyle() {
      return { width: this.playerHealth + "%" };
    },
    monsterHealthBarStyle() {
      return { width: this.monsterHealth + "%" };
    },
  },
  methods: {
    playerAttack() {
      const attackPower = Math.floor(Math.random() * (12 - 5)) + 5;
      this.monsterHealth -= attackPower;
      console.log(this.monsterHealth);
      this.monsterAttack();
    },
    monsterAttack() {
      const attackPower = Math.floor(Math.random() * (15 - 8)) + 8;
      this.playerHealth -= attackPower;
      console.log(this.playerHealth);
    },
  },
});

app.mount("#game");
