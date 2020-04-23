<template>
  <q-page class="flex flex-center q-pa-md">
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-fab
        icon="alarm"
        direction="up"
        color="accent"
        @show="startTimer">
        
        <q-fab-action color="accent" icon="history" />
        <q-fab-action @click="endTimer" color="accent" icon="save" />
        <q-fab-action @click="endTimer" color="accent" icon="delete" />
      </q-fab>
    </q-page-sticky>
    
    <q-table
          title="may 2020"
          :data="data"
          :columns="columns"
          class="full-width"
          hide-bottom />
    
    <p v-if="get_timer_running">Running</p>
  </q-page>
</template>

<script>
export default {
  name: 'PageDashboard',
  
  data () {
    return {
      timer_running: false,
      
      columns: [
        {
          name: 'desc',
          required: true,
          label: 'Day',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        {
          name: 'hours',
          label: 'Hours',
          field: 'hours',
          sortable: true
        },
        {
          name: 'total',
          label: 'Wage total',
          field: 'total'
        }
      ],
      data: [
        {
          name: '01.01.2020',
          hours: 5,
          total: 130
        }
      ]
    }
  },
  computed: {
    get_timer_running () {
      return this.$store.getters['timer/timerRunning']
    }
  },
  
  methods: {
    startTimer () {
      if (!this.get_timer_running) {
        this.$store.commit('timer/startTimer')
      }
    },
    
    endTimer () {
      this.$store.commit('timer/stopTimer')
    }
  }
}

</script>
