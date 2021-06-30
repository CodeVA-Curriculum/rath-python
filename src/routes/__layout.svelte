<script>
	// import "../global.scss";

	import logoSrc from '$lib/assets/CodeVA Logo.png';
	import pyLogo from '$lib/assets/Python Logo.png';
	import {faPlus} from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';
</script>



<main>
	<nav class="navbar has-shadow" role="navigation" aria-label="main navigation">
		<div class="navbar-brand">
			<a class="navbar-item" href='.'>
				<img src={logoSrc} height="28">
				<div class='px-2'>
					<Fa icon={faPlus} size="1.5x" />
				</div>
				<img src={pyLogo} height="28">
			</a>
	  
			<a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
			</a>
		</div>
	  
		<div id="navbarBasicExample" class="navbar-menu">
			<div class="navbar-start">
				
		 	</div>
			<div class="navbar-end">
				<a href='.' class="navbar-item">
					Home
				</a>
				<!-- <a href='/about' class="navbar-item">
					Overview
				</a> -->
			</div>
		</div>
	</nav>
	<slot />
</main>

<style lang='scss' global>
	@import "../global.scss";
</style>
