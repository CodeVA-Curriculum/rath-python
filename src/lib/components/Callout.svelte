<script>
    import Markdown from '$lib/components/Markdown.svelte';
    export let title="No Title!";
</script>

<div class='callout card content section my-5'>
    <h3>💡 {title}</h3>
    <Markdown>
        <slot />
    </Markdown>
</div>

<style lang='scss'>
    @import '../styles/variables.scss';
    .callout {
        background-color: whitesmoke;
    }
</style>