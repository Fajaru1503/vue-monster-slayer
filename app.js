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
    playerHeal() {
      const healValue = getRandomValue(12, 16);
      if (this.playerHealth + healValue > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += healValue;
      }
      this.monsterAttack();
    },
    monsterAttack() {
      const attackPower = getRandomValue(7, 15);
      this.playerHealth -= attackPower;
    },
  },
});

app.mount("#game");
