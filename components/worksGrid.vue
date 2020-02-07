<template>
  <div class="works-grid">
      <div v-for="work in works" class="work" :style="'background-color:' + work.color">
          <h3>
              {{ work.title }}
          </h3>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            works:[
                {
                    title: "Work 1",
                    color: "brown"
                },
                {
                    title: "Work 2",
                    color: "blue"
                },
                {
                    title: "Work 3",
                    color: "green"
                },
                {
                    title: "Work 4",
                    color: "yellow"
                },
                {
                    title: "Work 5",
                    color: "teal"
                },
                
            ]
        }
    }
}
</script>

<style>

</style>