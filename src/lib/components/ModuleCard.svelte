<script>
    export let title, description, path
    import Fa from 'svelte-fa';
    import {faLink} from '@fortawesome/free-solid-svg-icons';
    import {base} from "$app/paths";
</script>

<div class='module card my-5 p-5'>
    <div class='container content'>
        <a href="{base}/{path}"><h3><span class='mr-2'>{title}</span><Fa icon={faLink} size="0.75x"/></h3></a>
       <p>{description}</p>
    </div>
</div>

<style lang=scss>
    @import "../styles/variables.scss";
    .module {
        border-radius: 20px;
        // background: $grey-dark;
        // color: whitesmoke;
        h3:hover {
            color: $primary;
        }
    }
</style>