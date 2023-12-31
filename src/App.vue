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

const modalTitle = ref("Game Over");
const modalMessage = ref('<p>Your score was ' + score.value + '/12</p>');

const resetGame = () => {
  score.value = 0;
  gameId.value = uniqid();
};


const { open, close } = useModal({  
  component: GameModal,
  attrs: {
    title: modalTitle,
    onConfirm() {
      close();
      resetGame();
    },
  },
  slots: {
    default: modalMessage,
  },
});


const updateScore = (reset) => {
  if (reset) {
    modalTitle.value = "Game Over";
    modalMessage.value = '<p>Your score was ' + score.value + '/12</p>';    

    open();
    return;
  }

  score.value = score.value + 1;
 
  // Check if high score needs to be updated
  if( score.value > highScore.value){
    highScore.value = highScore.value + 1;
  }

  // Check if they won
  if( score.value === 12){
    modalTitle.value = "You Win";
    modalMessage.value = '<p>Your score was ' + score.value + '/12</p>';    

    open();
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

