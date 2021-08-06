<script>
    // export let lang;
    export let title = "";
    import Markdown from '$lib/components/Markdown.svelte';
</script>

<div class='code-and-console card p-5 my-5'>
    <h3 class='subtitle'>{title}</h3>
    <div class='card-body'>
        <Markdown>
            <slot />
        </Markdown>
        <div class='columns mt-3'>
            <div class='column'>
                <Markdown>
                    <slot name='code' />
                </Markdown>
            </div>
            <div class='column'>
                <Markdown>
                    <slot name="console"/>
                </Markdown>
            </div>
        </div>
    </div>
</div>


