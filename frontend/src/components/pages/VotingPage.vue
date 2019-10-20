<template>
  <div>
    <h2>Card Voting</h2>
    <div class="voter">
      <vue-swing
        @throwout="throwout"
        @throwin="throwin"
        :config="config"
        class="card"
      >
        <div class="box">
          <CardComponent  v-bind:model="sampleCard" v-bind:active-step="3"></CardComponent>
        </div>
      </vue-swing>
    </div>
  </div>
</template>

<script>
import CardComponent from '../CardComponent'
import VueSwing from 'vue-swing'

export default {
  name: 'VotingPage',
  components: {CardComponent},
  data () {
    return {
      config: {
        allowedDirections: [
          VueSwing.Direction.UP,
          VueSwing.Direction.DOWN,
          VueSwing.Direction.LEFT,
          VueSwing.Direction.RIGHT
        ],
        minThrowOutDistance: 250,
        maxThrowOutDistance: 300
      },
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
  },
  methods: {
    throwout () {
      console.log('THROWOUT')
    },
    throwin () {
      console.log('THROWIN')
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
