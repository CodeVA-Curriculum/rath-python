<script>
    import Markdown from '$lib/components/Markdown.svelte';
    import Fa from 'svelte-fa';
    import {faPepperHot} from '@fortawesome/free-solid-svg-icons';
    export let title="No Title!";
    export let spice = "none";
    export let footerLink = "#";
    let color;
    import {base} from '$app/paths';

    export let icon=faPepperHot;

    $: color = getColor(spice);

    function getColor(s) {
        if(s == "mild") {
            return "#84C45A;" 
        } else if(s == "medium") {
            return "#f2e127;"
        } else if(s == "spicy") {
            return "#F16D25;"
        } else {
            return "#323F47;"
        } 
    }
</script>

<div class='prompt card my-5'>
    <div class='card-content body'>
        <h3><span class='{spice}-text'><Fa icon={icon} /></span> {title}</h3>
        <Markdown>
            <slot />
        </Markdown>
    </div>
    <div class='card-footer linker {spice}-background'>
        <a class='card-footer-item' href="{footerLink}">View Starter Code</a>
    </div>
</div>

<style lang='scss'>
    @import "../styles/variables.scss";
    .prompt {
        background-color: whitesmoke;
    }
    .body {
        padding: 3rem;
    }
    .linker {
        background-color: var(--color);
        :hover {
            background-image: linear-gradient(rgba(0, 0, 0, 0.125) 0 0);
        }
        a {
            font-weight: bolder;
            color: $grey-dark;
            :hover {
                color: #000;
            }
        }
    }
    .mild-text {
        color: #84C45A;
    }
    .mild-background {
        background-color: #84C45A;
    }
    .medium-text {
        color: #f2e127;
    }
    .medium-background {
        background-color: #f2e127;
    }
    .spicy-text {
        color: #F16D25;
    }
    .spicy-background {
        background-color: #F16D25;
    }
    .none-text {
        color: #323F47;
    }
    .none-background {
        background-color: #323F47;
    }
</style>