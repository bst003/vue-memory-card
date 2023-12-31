<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
    name: String,
    sprite: String,
    gameId: String
});

const emit = defineEmits(['trigger']);

const clicked = ref(false);

const triggerButton = () => {
    if (clicked.value === false) {
        clicked.value = true;
        emit('trigger', false);
        return;
    }

    emit('trigger', true);
};

watch(() => props.gameId, (oldgameId, newGameId) => {
    if( oldgameId !== newGameId ){
        clicked.value = false;
    }
});

console.log(`is clicked: ${clicked.value}`);

</script>

<template>
     <button class="gameCard" type="button" @click="triggerButton">
        <div class="gameCard__inner">
            <img :src="sprite" :alt="name" />
            <p>{{name}}</p>
        </div>
    </button>
</template>