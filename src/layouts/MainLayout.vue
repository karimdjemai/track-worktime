<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title class="absolute-center">
          track time
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    
    <q-page-container>
      <router-view />
    </q-page-container>
    
    <template v-if="timer_running">
      <q-footer elevated class="bg-blue-grey text-white">
        <q-toolbar>
          <q-toolbar-title class="absolute-center">
            {{ get_time }}
          </q-toolbar-title>
        </q-toolbar>
      </q-footer>
    </template>
  </q-layout>
</template>

<script>
export default {
  data () {
    return {
      now: 0
    }
  },
  
  created () {
    setInterval(() => {
      this.now = Date.now()
    }, 1000)
  },
  
  computed: {
    get_time () {
      const passedSec = Math.max(0, Math.round((this.now - this.$store.getters['timer/timerStart']) / 1000))
      return new Date(passedSec * 1000).toISOString().substr(11, 8)
    },
    
    timer_running () {
      return this.$store.getters['timer/timerRunning']
    }
  },
  
  methods: {
    tD (n) {
      return n > 9 ? '' + n : '0' + n
    }
  }
}
</script>
