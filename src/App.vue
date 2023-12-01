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

</script>

<template>
  <Header :score="score.value" :highScore="highScore.value" />
  <main class="main-content">
      <div class="main-content__inner wrap">
          <GameBody />
      </div>
  </main>
</template>

