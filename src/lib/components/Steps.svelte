<script>
    import Markdown from '$lib/components/Markdown.svelte';
    // import {base} from '$app/paths';

    export let title = "";
</script>

<div class='prompt card my-5 p-5'>
    <div class='card-content'>
        <div class='columns'>
            <div class='column'>
                <h3 class='card-title'>{title}</h3>
                <Markdown>
                    {#if $$slots.text }
                    <slot name='text' />
                    {:else}
                    <slot />
                    {/if}
                </Markdown>
            </div>
            {#if $$slots.code }
            <div class='column'>
                <Markdown>
                    <slot name='code' />
                </Markdown>
            </div>
            {/if}
        </div>
        
    </div>
</div>

<style lang='scss'>
    @import "../styles/variables.scss";
</style>