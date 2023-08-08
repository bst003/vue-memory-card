<script setup>
// import HelloWorld from './components/HelloWorld.vue'
import { onMounted } from 'vue'

import Header from './components/Header.vue';
import GameBody from './components/GameBody.vue';

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

        };

        fillPokeArrState();
});
</script>

<template>
  <Header />
  <main class="main-content">
      <div class="main-content__inner wrap">
          <GameBody />
      </div>
  </main>
</template>

