<script>
    // console.log($$slots);
    import remark from 'remark';
    import html from 'remark-html';
    import hl from 'remark-syntax-highlight';
 
    // import github from 'hast-util-sanitize/lib/github';
    // import merge from 'deepmerge';

    // Import the highlighter, for example, say I want prism with javascript support
    import { highlight, languages } from 'prismjs/components/prism-core.js';
    import 'prismjs/components/prism-clike.js';
    import 'prismjs/components/prism-javascript.js';
    import 'prismjs/components/prism-python.js'

    // Preserve className attributes when sanitizing the HTML
    // This is necessary for syntax highlighting
    // const schema = merge(github, { attributes: { '*': ['className'] } });

    let e;
    let content;
    
    $: if(e) {
        remark()
    //.use(styleGuide)
        .use(html)

        .process(e.innerHTML, function (err, file) {
            //console.error(report(err || file))
            // console.log
            content = String(file);
            // console.log(content)
            // content = i;
        })
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