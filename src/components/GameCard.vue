<script setup>
import { ref } from 'vue'

defineProps({
    name: String,
    sprite: String
});

const emit = defineEmits(['trigger']);

const clicked = ref(false);

const triggerButton = () => {
    console.log(clicked.value);
    if (clicked.value === false) {
        clicked.value = true;
        emit('trigger', false);
        return;
    }

    emit('trigger', false);
};

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