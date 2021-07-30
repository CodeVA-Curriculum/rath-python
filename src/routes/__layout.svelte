<script>
	// import "../global.scss";

	import {faPlus} from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';

	import logoSrc from '$lib/assets/CodeVALogo.png';
	import pyLogo from '$lib/assets/PythonLogo.png';
	import NSFLogo from '$lib/assets/NSFLogo.png';

	import {base} from "$app/paths";
</script>



<main class='is-flex is-flex-direction-column'>
	<nav class="navbar has-shadow" role="navigation" aria-label="main navigation">
		<div class="navbar-brand">
			<a class="navbar-item" href="{base}/">
				<img alt="A logo for Code Virginia--a large blue circle with the text 'CodeVA' in the center" src={logoSrc} height="28">
				<div class='px-2'>
					<Fa icon={faPlus} size="1.5x" />
				</div>
				<img alt="The Python logo--two stylized snakes forming a 'plus' sign" src={pyLogo} height="28">
				<h1 class='has-text-weight-bold is-size-5 ml-5 is-hidden-touch'>Designing Interactive Narratives with Python</h1>
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
			<div class="navbar-end links">
				<a href='{base}/' class="navbar-item">
					Home
				</a>

				<!-- Dropdown -->
				<div class="navbar-item has-dropdown is-hoverable">
					<a href="{base}/modules" class="navbar-link">
					Modules
					</a>
			
					<div class="navbar-dropdown">
					<a href="{base}/modules/module-0" class="navbar-item">
						0. Course Overview
					</a>
					<a href="{base}/modules/module-1" class="navbar-item">
						1. Speaking & Listening
					</a>
					<a href="{base}/modules/module-2" class="navbar-item">
						2. Remembering
					</a>
					<a href="{base}/modules/module-3" class="navbar-item">
						3. Choosing
					</a>
					<a href="{base}/modules/module-4" class="navbar-item">
						4. Organizing
					</a>
					<!-- <a href="{base}/modules/module-5" class="navbar-item">
						5. Designing Interactive Narratives
					</a> -->
					</div>
				</div>

			</div>
		</div>
	</nav>
	<slot />
<footer class="footer">
	<div class="columns has-text-left">
		<div class='column is-2'></div>
		<div class='column is-narrow'>
			<img alt="The National Science Foundational logo." src={NSFLogo} style="height: 6rem;" />
		</div>
		<div class='column'>
			<p class='is-size-6'>The “Reaching Across the Hallway” project is funded by the National Science Foundation under Grant Award #2010256. Any opinions, findings, and conclusions or recommendations expressed in this material are those of the author(s) and do not necessarily reflect the views of the National Science Foundation. These modules were written by <a href="https://jonstapleton.github.io/"><strong>Jon Stapleton</strong></a> on behalf of <a href="https://www.codevirginia.org/"><strong>CodeVA</strong></a>. The source code is licensed
				<a href="https://www.gnu.org/licenses/gpl-3.0.en.html">GPLv3</a>. The website content
				is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.</p>
		</div>
		<div class='column is-2'></div>
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
	.links {
		margin-right: 5rem;
	}
</style>
