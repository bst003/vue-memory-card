<script setup>
import Scoreboard from "./Scoreboard.vue";

defineProps({
  score: Number,
  highSchore: Number,
});

</script>

<template>
    <header class="site-header">
        <div class="site-header__inner wrap">
            <h1>Pokémon Memory Game</h1>

            <Scoreboard :score="score" :highScore="highScore" />
        </div>
    </header>
</template>


