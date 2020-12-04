const getRandomValue = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

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
      const attackPower = getRandomValue(5, 12);
      this.monsterHealth -= attackPower;
      this.monsterAttack();
    },
    monsterAttack() {
      const attackPower = getRandomValue(7, 15);
      this.playerHealth -= attackPower;
    },
  },
});

app.mount("#game");
