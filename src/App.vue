<script setup>
import { ref } from 'vue';

import { ModalsContainer, useModal } from 'vue-final-modal';
import 'vue-final-modal/style.css';


import uniqid from "uniqid";

import Header from './components/Header.vue';
import GameBody from './components/GameBody.vue';
import GameModal from './components/GameModal.vue';

const score = ref(0);
const highScore = ref(0);
const gameId = ref( uniqid() );

const resetGame = () => {
  score.value = 0;
  gameId.value = uniqid();
};

const { open, close } = useModal({  
  component: GameModal,
  attrs: {
    title: 'Game Over',
    onConfirm() {
      close();
      resetGame();
    },
  },
  slots: {
    default: '<p>Your score was </p>',
  },
});


const updateScore = (reset) => {
  console.log("this is app");
  console.log(reset);
  if (reset) {
      // setModalOpen(true);
      // console.log("game over");
      // alert("game over");
      open();
      // resetGame();
      return;
  }

  score.value = score.value + 1;
 
  // Check if high score needs to be updated
  if( score.value > highScore.value){
    highScore.value = highScore.value + 1;
  }
};

</script>

<template>
  <Header :score="score" :highScore="highScore" />
  <main class="main-content">
      <div class="main-content__inner wrap">
          <GameBody @updateScore="updateScore" :gameId="gameId"/>
      </div>
  </main>
  <ModalsContainer />
</template>

