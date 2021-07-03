<script>
    export let title, description
    export let previous;
    export let next;
    let preEnable = false;
    let nextEnable = false;

    $: if(next) {
        nextEnable = true;
    }
    $: if(previous) {
        preEnable = true;
    }
    
    import Fa from 'svelte-fa';
    import {faArrowLeft, faArrowRight, faHome} from '@fortawesome/free-solid-svg-icons'
</script>

<div class='hero is-primary banner'>
    <div class='columns'>
        <div class='column is-6 is-offset-3'>
            <h1 class='title'>{title}</h1>
            <p class='block'>{description}</p>
            <div class='buttons has-addons'>
                {#if preEnable}
                <a class='button nav' href={previous}>
                    <Fa icon={faArrowLeft} />
                    <span class='button-text'>Previous</span>
                </a>
                {/if}
                <a class='button nav' href="../modules">
                    <Fa icon={faHome} />
                    <span class='button-text'>Index</span>
                </a>
                {#if nextEnable}
                <a class='button nav' href={next} >
                    <span class='button-text'>Next</span>
                    <Fa icon={faArrowRight} />
                </a>
                {/if}
            </div>
        </div>
    </div>
</div>
<div class='columns'>
    <div class='blog column is-6 is-offset-3 content'>
        <slot></slot>
    </div>
</div>

<style>
    .nav {
        width: 8rem;
    }
    .button-text {
        padding-left: 0.75rem;
        padding-right: 0.75rem;
    }
    .banner {
        padding-top: 5rem;
        padding-bottom: 5rem;
    }
</style>