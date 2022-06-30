<template>
<div id="mainDiv">
  <nav id="mainNav">
    <h2 class="hidden">Main Nav</h2>
      <img id="mainLogo" src="../assets/valorant-logo-pink.svg" alt="valorant logo">
  </nav>
  <h2 class="mainHeader">Agent Select</h2>
  <div class="container">
  <h2 class="hidden">Agent screen</h2>
      <ul>
        <li v-for="agent in agents" v-bind:key="agent.displayName">
          <img v-bind:src="agent.displayIcon" class="thumbnail" alt="thumbnail">
          <p><router-link :to="`/agents/${agent.uuid}`">{{agent.displayName}}</router-link></p>
        </li>
      </ul>
  </div>
</div>
</template>

<script>
	export default {
		props: ['theTitle', 'agents'],
	};
</script>