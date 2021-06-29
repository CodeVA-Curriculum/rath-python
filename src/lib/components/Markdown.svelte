<script>
    // console.log($$slots);
    import snarkdown from 'snarkdown';
    let e;
</script>

<span bind:this={e} style='display: none;'>
    <slot />
</span>

{#if e}
{@html snarkdown(e.innerHTML)}
{/if }