<script setup>
import { onMounted, ref } from 'vue'

import GameCard from './GameCard.vue';

defineProps({
    gameId: String
})

const emit = defineEmits(['updateScore']);

const pokeArrState = ref([]);

const formatPokemonData = (data) => {
    const formattedData = {
        id: data.id,
        name: data.name,
        sprite: data.sprites.front_default,
    };

    return formattedData;
};

const shuffle = (array) => {
    array.sort((a, b) => {
        return Number(Math.random() - 0.5);
    });

    return array;
};

const triggerCard = (reset) => {
    const newPokeArr = shuffle(pokeArrState.value);
    console.log(newPokeArr);
    pokeArrState.value = [...newPokeArr];

    // updateScore(reset);
    emit('updateScore', reset);
};

onMounted(() => {
    const getPokemonData = async (id) => {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

            const unformattedPokemonData = await response.json();

            const formattedPokemonData = formatPokemonData(unformattedPokemonData);

            return formattedPokemonData;
        } catch (err) {
            console.log("Error fetching pokemon");
            console.error(err);
        }
    };

    const createInitialPokeArr = async () => {
        let initialPokeArr = [];

        for (let i = 0; i <= 11; i++) {
            const pokemonData = await Promise.resolve(getPokemonData(i + 1));

            initialPokeArr.push(pokemonData);
        }

        initialPokeArr = shuffle(initialPokeArr);

        return initialPokeArr;
    };

    const fillPokeArrState = async () => {
        const initialPokeArr = await createInitialPokeArr();

        console.log(initialPokeArr);

        pokeArrState.value = [...initialPokeArr];
    };

    fillPokeArrState();   
});

</script>
 
<template>
     <section className="gameBody">
            <h2>How to play</h2>
            <p>
                Click the cards below to earn points, if you click the same card twice your score is
                reset to zero.
            </p>

            <div className="gameCards-grid">
                <GameCard v-for="pokemon in pokeArrState"
                    :name="pokemon.name"
                    :sprite="pokemon.sprite"
                    :key="pokemon.name"
                    :gameId="gameId"
                    @trigger="triggerCard"
                />
            </div>
     </section>
</template>


