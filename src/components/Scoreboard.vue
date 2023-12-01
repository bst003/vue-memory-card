<script setup>

defineProps({
  score: Number,
  highScore: Number,
});
</script>

<template>
    <div class="scoreboard">
        <p>Score: {{score}}</p>
        <p>High Score: {{highScore}}</p>
    </div>
</template>


