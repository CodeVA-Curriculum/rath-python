<script>
    export let lang;
    import Markdown from '$lib/components/Markdown.svelte';
</script>

<h1>Hello, code & console</h1>
<Markdown>
<slot name="code"/>
</Markdown>
