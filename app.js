const getRandomValue = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 1,
      winner: null,
      battleLogs: [],
    };
  },
  watch: {
    playerHealth(value) {
      if (this.monsterHealth <= 0 && value <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "monster";
      }
    },
    monsterHealth(value) {
      if (this.playerHealth <= 0 && value <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "player";
      }
    },
  },
  computed: {
    playerHealthBarStyle() {
      if (this.playerHealth <= 0) {
        return { width: this.playerHealth + "%" };
      } else {
        return { width: this.playerHealth + "%" };
      }
    },
    monsterHealthBarStyle() {
      if (this.monsterHealth <= 0) {
        return { width: this.monsterHealth + "%" };
      } else {
        return { width: this.monsterHealth + "%" };
      }
    },
  },
  methods: {
    playerAttack() {
      this.currentRound++;
      const attackPower = getRandomValue(5, 12);
      this.monsterHealth -= attackPower;
      this.monsterAttack();
    },
    playerSpecialAttack() {
      this.currentRound++;
      const attackPower = getRandomValue(10, 15);
      this.monsterHealth -= attackPower;
      this.monsterAttack();
    },
    playerHeal() {
      this.currentRound++;
      const healValue = getRandomValue(12, 16);
      if (this.playerHealth + healValue > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += healValue;
      }
      this.monsterAttack();
    },
    monsterAttack() {
      const attackPower = getRandomValue(8, 15);
      this.playerHealth -= attackPower;
    },
    surrender() {
      this.playerHealth = 0;
    },
    startGame() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.currentRound = 1;
      this.winner = null;
      this.battleLogs = [];
    },
  },
});

app.mount("#game");
