<template>
  <div class="flex flex-col justify-center">
    <div v-for="pokemon in getPokemon" :key="pokemon.id">
      <img :src="pokemon.image" class="h-64" alt="pokemon"/>
      <h1 class="text-center">C'est {{ pokemon.name }}</h1>
      <h2 class="text-center">Pv: {{ pokemon.pv }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      params: this.$route.params.id
    }
  },
  computed: {
    getPokemon () {
      return this.$store.state.pokemons.filter(pkmn => {
        return pkmn.id.includes(this.params)
      })
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap');
* {
  font-family: 'Indie Flower', cursive;
}
</style>
