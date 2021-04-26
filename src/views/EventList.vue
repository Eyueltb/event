<template>
  <div>
    <h1 v-show="events.length > 0 ">Events List</h1>
    <div class="events">
      <EventCard  v-for="event in getEvents" :key="event.id" :event="event"/>
    </div>
  </div>
</template>

<script>

import EventCard from "@/components/EventCard";
//import EventService from '@/services/EventService.js'
export default {
  name: "EventList",
  components: {
    EventCard,
  },
  data() {
    return {
      events:[]
    }
  },
  created() {
    /*EventService.getEvents()
        .then(response => {
          this.events = response.data
        })
        .catch(error => {
          console.log('There was an error:', error.response)
    })*/

  },
  methods:{
    getEvents(){
      return this.$store.state.events;
    }
  }
};
</script>

<style scoped>
.events { /* events in a Flexbox container  and align center*/
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
