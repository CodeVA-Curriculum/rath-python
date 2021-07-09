<script>
    export let title, description, video, activities
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

    $: console.log(activities);
    
    import Fa from 'svelte-fa';
    import {faArrowLeft, faArrowRight, faHome} from '@fortawesome/free-solid-svg-icons'
    import {base} from '$app/paths';
</script>

<div class='hero is-primary banner'>
    <div class='columns'>
        <div class='column is-3'></div>
        
        <div class='column px-5'>
            <h1 class='title'>{title}</h1>
            <p class='block'>{description}</p>
            <p class='block subtitle'>In this module, you will:</p>
            {#if activities}
            {#each activities as a}
            <div>
                <label class='checkbox'>
                    <input type='checkbox'>
                    {a}
                </label>
            </div>
            {/each}
            {/if}
            <div class='block buttons has-addons mt-5'>
                {#if preEnable}
                <a class='button nav' href="{base}/modules/{previous}">
                    <Fa icon={faArrowLeft} />
                    <span class='button-text'>Previous</span>
                </a>
                {/if}
                <a class='button nav' href="{base}/modules">
                    <Fa icon={faHome} />
                    <span class='button-text'>Index</span>
                </a>
                {#if nextEnable}
                <a class='button nav' href="{base}/modules/{next}" >
                    <span class='button-text'>Next</span>
                    <Fa icon={faArrowRight} />
                </a>
                {/if}
            </div>
        </div>
        {#if video}
        <div class='column'>
            <div class="player">
                <iframe webkitallowfullscreen mozallowfullscreen allowfullscreen title={title} width="100%" height="100%" src={video} frameborder="0" gesture="media" allow="encrypted-media"></iframe>
            </div>
        </div>
        {/if}
        <div class='column is-3'></div>
    </div>
</div>
<div class='columns'>
    <div class='blog column is-6 is-offset-3 content px-5'>
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
    .player {
        border-radius: 10px;
        overflow: hidden;
        z-index: 1;
        /* background-color: pink; */
        height: 300px;
    }
</style>