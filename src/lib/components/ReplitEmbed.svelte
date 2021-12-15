<script>
    export let url;
</script>

{#if url}
<div class='replit-embed container my-5 px-0'>
    <iframe frameborder="0" width="100%" height="500px" src="{url}?embed=true&outputonly=1"></iframe>
</div>
{/if}