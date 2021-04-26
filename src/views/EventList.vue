<template>
  <div>
    <h1>Events For Good</h1>
    <div class="events">
      <EventCard  v-for="event in events" :key="event.id" :event="event"/>
    </div>
  </div>
</template>

<script>

import EventCard from "@/components/EventCard";

export default {
  name: "EventList",
  components: {
    EventCard,
  },
  data() {
    return {
      events:[
        {
          id: 12,
          category: 'animal fair',
          title: 'event desaaaaa',
          description:'this is the event is',
          location: 'Addis Ababa, Jafer',
          date: 'January 28,2012',
          time: '12:00',
          petsAllowed: true,
          organizer: 'Kat Lady',
        },
        {
          id: 12,
          category: 'cccc',
          title: 'bbbbbbbbbbbbbbbbbbb',
          description:'vvvvvvvvvvvvv',
          location: 'bbbbbbbbbbbbbb',
          date: 'January 28,2012',
          time: '12:00',
          petsAllowed: true,
          organizer: 'Kat Lady',
        }
      ]
    }
  },

};
</script>

<style scoped>
.events { /* events in a Flexbox container  and align center*/
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
