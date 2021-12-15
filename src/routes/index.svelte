<script>
	import codeLogo from '$lib/assets/CodeVALogo.png';
	import pyLogo from '$lib/assets/PythonLogo.png';
	import Fa from 'svelte-fa';
	import {faPlus} from '@fortawesome/free-solid-svg-icons'
	import {base} from '$app/paths';
</script>

<section class='section is-medium has-text-centered'>
	<div class='level is-mobile icons'>
		<img class='level-item i' alt="The Code Virginia logo, a large blue circle with the text 'CodeVA' in the center." width="100" src={codeLogo} />
		<span class='level-item i'><Fa size="5x" icon={faPlus} /></span>
		<img class='level-item i' alt="The Python logo, two stylized snakes intertwined to form a plus sign" width="100" src={pyLogo}>
	</div>
		<h1 class='title'>Designing Interactive Narratives with Python</h1>
		<!-- <div class='buttons'> -->
		<a class='button my-4 is-primary is-large' href="{base}/modules">Get Started</a>
			<!-- <a class='button my-4 is-secondary is-large' href="{base}/modules">Tips & Tricks</a> -->
		<!-- </div> -->
</section>

<style type='text/scss' lang='scss'>
.icons {
	max-width: 30rem;
	margin-right: auto;
	margin-left: auto;
	margin-bottom: 3rem;
	.i {
		margin: 0rem;
		padding: 0rem;
	}
}
	h1 {
		font-size: 3rem;
	}
</style>