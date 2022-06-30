<template>
<div id="mainDiv">
    <h2 class="hidden">Agent information</h2>
    <nav id="mainNav">
        <h2 class="hidden">Main Nav</h2>
        <img id="mainLogo" src="../assets/valorant-logo-pink.svg" alt="valorant logo">
    </nav>
    <p class="mainHeader"><strong>{{agentDesc.displayName}}</strong></p>
    <div id="mainImage">
        <img v-bind:src="agentDesc.fullPortrait" id="heroImage" alt="hero image">
    </div>
    <p class="headerTxt">Role: {{agentDesc.role.displayName}}</p>
    <p class="descriptionTxt">{{agentDesc.role.description}}</p>
    <p class="headerTxt">Abilities</p>
    <ul>
        <li v-for="ability in agentDesc.abilities" v-bind:key="ability.displayName">
        <div class="ability"><img v-bind:src="ability.displayIcon" class="thumbnail2" alt="ability icon"><p>{{ability.displayName}}</p></div>
        <p class="descriptionTxt">{{ability.description}}</p>
        </li>
    </ul>
    <p class="headerTxt">Voice Line</p>
    
    <div id="audio">
        <audio controls>
            <source v-bind:src="agentDesc.voiceLine.mediaList[0].wave" type="audio/wav">
        </audio><br>    
    </div>
    <router-link to="/agents">Back to agent select</router-link>
</div>
</template>
<script>
    export default {
        data() {
            return {
                agentDesc: {}
            }
        },
        created() {
        //we can grab id from url, then use it to make a call to the API to grab planet information 
        var vm = this; 
        let id = this.$route.params.id
          fetch(`https://valorant-api.com/v1/agents/${id}`)
              .then(function(response){
                    return response.json();
                })
              .then(function(data) { 
              vm.agentDesc = data.data
              //console.log(vm.agentDesc);
          });
        },
    };
</script>