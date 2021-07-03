<script>
    // console.log($$slots);
    import marked from 'marked';

    // Preserve className attributes when sanitizing the HTML
    // This is necessary for syntax highlighting
    // const schema = merge(github, { attributes: { '*': ['className'] } });

    let e;
    let content;
    
    $: if(e) {
        content = marked(e.innerHTML, {sanitize: false});
    }
</script>



<div class='markdown'>
    <span bind:this={e} style='display: none;'>
        <slot />
    </span>
    {#if content}
    {@html content}
    {/if }
</div>