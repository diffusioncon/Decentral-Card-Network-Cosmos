<template>
  <div>
    <h2>Card Voting</h2>
    <div class="voter">
      <vue-swing
        @throwout="throwout"
        @throwin="throwin"
        :config="config"
      >
        <div class="box">
          <CardComponent  v-bind:model="sampleCard" v-bind:active-step="3"></CardComponent>
        </div>
        <div class="box">
          <CardComponent  v-bind:model="sampleCard" v-bind:active-step="3"></CardComponent>
        </div>
        <div class="box">
          <CardComponent  v-bind:model="sampleCard" v-bind:active-step="3"></CardComponent>
        </div>
      </vue-swing>
    </div>
  </div>
</template>

<script>
import CardComponent from '../CardComponent'
export default {
  name: 'VotingPage',
  components: {CardComponent},
  data () {
    return {
      sampleCard: {
        name: 'Name',
        description: '',
        ability: '',
        notes: '',
        article: 'the',
        surname: 'Surname',
        type: 'No Type',
        tags: [],
        cost: {
          lumber: 0,
          food: 0,
          iron: 0,
          mana: 0,
          energy: 0,
          generic: 0
        },
        ticks: 0,
        defense: 0,
        attack: 0
      }
    }
  }
}
</script>

<style scoped>
.box {
  position: absolute;
}
.voter {
  min-height: 100vh;
}
vue-swing {
  min-height: 100vh;
}
</style>
