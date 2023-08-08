<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0);
</script>

<template>
    <header class="site-header">
        <div class="site-header__inner wrap">
            <h1>Pokémon Memory Game</h1>
        </div>
    </header>
</template>


