<script>
    import Markdown from '$lib/components/Markdown.svelte';
    export let title="No Title!";
    export let footerLink;
</script>

<div class='callout card my-5'>
    <div class='card-content body'>
        <h3>💡 {title}</h3>
        <Markdown>
            <slot />
        </Markdown>
    </div>
    {#if footerLink}
    <div class='card-footer linker'>
        <a class='card-footer-item' href={footerLink}>View Starter Code</a>
    </div>
    {/if}
</div>

<style lang='scss'>
    @import '../styles/variables.scss';
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