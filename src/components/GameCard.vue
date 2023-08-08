<script setup>
import { ref } from 'vue'

defineProps({
    name: String,
    sprite: String
});
</script>

<template>
     <button class="gameCard" type="button" >
        <div class="gameCard__inner">
            <img :src="sprite" :alt="name" />
            <p>{{name}}</p>
        </div>
    </button>
</template>