<script setup>
import { ref } from 'vue'

import uniqid from "uniqid";

// import HelloWorld from './components/HelloWorld.vue'

import Header from './components/Header.vue';
import GameBody from './components/GameBody.vue';

const score = ref(0);
const highScore = ref(0);
const gameId = ref( uniqid() );

// const [score, setScore] = useState(0);
// const [highScore, setHighScore] = useState(0);
// const [gameId, setGameId] = useState(uniqid());

const updateScore = (reset) => {
  console.log("this is app");
  console.log(reset);
  if (reset) {
      // setModalOpen(true);
      // console.log("game over");
      alert("game over");
      resetGame();
      return;
  }

  // setScore(score + 1);
  score.value = score.value + 1;
};

const resetGame = () => {
  score.value = 0;
  gameId.value = uniqid();
};

</script>

<template>
  <Header :score="score" :highScore="highScore" />
  <main class="main-content">
      <div class="main-content__inner wrap">
          <GameBody @updateScore="updateScore" :gameId="gameId"/>
      </div>
  </main>
</template>

