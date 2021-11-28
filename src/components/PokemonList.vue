<template>
  <div class="flex flex-col justify-center">
    <div class=" w-3/4 flex flex-col m-auto">
      <input type="search" class="mt-10 text-center justify-center w-full" v-model="$store.state.search" placeholder="Rechercher votre PKMN"/>
      <div class="border-2 border-green-400"></div>
    </div>
    <div class="flex-wrap justify-center mt-10 flex">
    <pokemon
    v-for="pokemon in filters"
    :pokemon="pokemon"
    :key="pokemon.id"
    />
    </div>
  </div>
</template>

<script>
import Pokemon from './Pokemon'
import { mapGetters } from 'vuex'
export default {
  props: ['pokemon'],
  components: {
    Pokemon
  },
  computed: {
    ...mapGetters({
      pokemons: 'pokemons',
      filters: 'filters'
    })
  }
}
</script>

<style></style>
