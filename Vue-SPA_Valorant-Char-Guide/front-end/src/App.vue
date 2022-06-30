<template>
    <div class="container">
    <h1 class="hidden">Valorant Character Page</h1>
     <!-- kinda like a generic component that will change based on what the address is -->
    <router-view v-bind:agents="theAgents" the-title="Valorant Agents"/>
    </div>
</template>

<script>

    export default {
      data() {
          return {theAgents: []};
      },            
      created: function() {
        var vm = this; 
          fetch('https://valorant-api.com/v1/agents')
              .then(function(response){
                return response.json();
              })
              .then(function(data) {
              vm.theAgents = data.data;
              //Code to remove a non playable character as mentioned in the api documentation
              vm.theAgents =vm.theAgents.filter(function (e){
                return e.isPlayableCharacter == true;
              });                
          });
      },
    }
</script>

<style lang="scss">
  #logo {
  width: 200px;
  }
</style>
