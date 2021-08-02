<script>
    let inputURL = "";
    let outputURL = "";

    let buttonText = "Copy";
    let copyState = false;

    function generate(inputString) {
        outputURL = "<iframe frameborder='0' width='100%'' height='500px' src='" + inputURL + "?embed=true&outputonly=1'></iframe>";
    }

    function copyURL(text) {
        console.log("Copying text...")
        var el = document.createElement("textarea");
        el.setAttribute('readonly', '');
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        document.body.appendChild(el);
        el.value = text;
        el.select();
        document.execCommand("copy");
        document.body.removeChild(el);
        copyState = true; // set button state to display success
        buttonText = "Copied!"
        setTimeout(function () {
            copyState = false; // turn it off
            buttonText = "Copy"
        }, 1000);
    }
    import Fa from 'svelte-fa';
    import {faCopy, faCheckCircle} from '@fortawesome/free-solid-svg-icons';
</script>

<div class='replit-embed-generator card py-3 px-5'>
    <div class='subtitle'>Repl.it Embed Code Generator</div>
    <div class='card-body'>
        <div class='field has-addons has-addons-fullwidth'>
            <div class='control'>
                <input bind:value={inputURL} class='input' type='text' placeholder="Paste Replit URL" >
            </div>
            <div class='control'>
                <button on:click={generate(inputURL)} class='fbutton generate button is-secondary'><span class='b-label'>Generate</span><Fa icon={faCheckCircle} /></button>
            </div>
        </div>

        <!-- output appears here -->
        <div class='field has-addons has-addons-fullwidth'>
            <div class='control is-expanded'>
                <input bind:value={outputURL} class='input' type='text' placeholder="Your code will appear here...">
            </div>
            <div class='control'>
                <button on:click={copyURL(outputURL)} class='fbutton button is-primary'>
                    <span class='b-label'>{buttonText}</span>
                    {#if copyState == false}
                    <Fa icon={faCopy} />
                    {/if}
                </button>
            </div>
        </div>
    </div>
</div>

<style>
    .b-label {
        margin-right: 0.5rem;
    }
    .fbutton {
        min-width: 8rem;
    }
    .replit-embed-generator {
        max-width: fit-content;
        min-width: 440px;
        margin: auto;
    }
    .generate:hover {
        background-color: #84C45A;
        color: white;
    }
</style>