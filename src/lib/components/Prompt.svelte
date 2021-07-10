<script>
    import Markdown from '$lib/components/Markdown.svelte';
    import Fa from 'svelte-fa';
    import {faPepperHot} from '@fortawesome/free-solid-svg-icons';
    export let title="No Title!";
    export let spice = "none";
    export let footerLink = "#";
    import {base} from '$app/paths';

    export let icon=faPepperHot;

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
        <h3><span style="color: {getColor(spice)}"><Fa icon={icon} /></span> {title}</h3>
        <Markdown>
            <slot />
        </Markdown>
    </div>
    <div class='card-footer linker' style="--color: {getColor(spice)}">
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
            color: white;
            :hover {
                color: whitesmoke;
            }
        }
    }
</style>