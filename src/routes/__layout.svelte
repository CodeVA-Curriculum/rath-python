<script>
	// import "../global.scss";

	import logoSrc from '$lib/assets/CodeVA Logo.png';
	import pyLogo from '$lib/assets/Python Logo.png';
	import {faPlus} from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';
</script>



<main class='is-flex is-flex-direction-column'>
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
<footer class="footer">
	<div class="content has-text-centered">
		<p>
		These modules were written by <strong>Jon Stapleton</strong> on behalf of <strong>CodeVA</strong>. The source code is licensed
		<a href="http://opensource.org/licenses/mit-license.php">GPLv3</a>. The website content
		is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
		</p>
	</div>
</footer>
</main>

<style lang='scss' global>
	@import "../global.scss";
	main {
		min-height: 100vh;
	}
	main > footer {
		margin-top: auto;
	}
</style>
