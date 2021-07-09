<script>
    import Markdown from '$lib/components/Markdown.svelte';
    import Fa from 'svelte-fa';
    import {faQuestion, faQuestionCircle} from '@fortawesome/free-solid-svg-icons';
    export let title="No Title!";
    export let footerLink;
    import {base} from '$app/paths';

    export let icon=faQuestionCircle;
</script>

<div class='prompt card my-5'>
    <div class='card-content body'>
        <h3><Fa icon={icon} /> {title}</h3>
        <Markdown>
            <slot />
        </Markdown>
    </div>
    {#if footerLink}
    <div class='card-footer linker'>
        <a class='card-footer-item' href="{footerLink}">View Starter Code</a>
    </div>
    {/if}
</div>

<style lang='scss'>
    @import "../styles/variables.scss";
    .callout {
        background-color: whitesmoke;
    }
    .body {
        padding: 3rem;
    }
    .linker {
        background-color: $green;
        :hover {
            background: #6ca14a;
        }
        a {
            font-weight: bolder;
            color: white;
            :hover {
                color: whitesmoke;
            }
        }
    }
</style>