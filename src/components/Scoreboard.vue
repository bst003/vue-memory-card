<script setup>

defineProps({
  score: Number,
  highSchore: Number,
});
</script>

<template>
    <div class="scoreboard">
        <p>Score: {{score}}</p>
        <p>High Score: {{highScore}}</p>
    </div>
</template>


