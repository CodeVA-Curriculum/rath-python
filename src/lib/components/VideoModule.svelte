<script>
    export let video="https://www.youtube.com/embed/aiegUzPX8Zc";
    export let title = "An embedded YouTube video at URL" + video;
</script>

<div class='card py-4 px-6 video-module my-5'>
    <div class='card-body pt-4'>
        <div class='columns'>
            <div class='column pr-5 mr-5 content text'>
                <h3>{title}</h3>
                <!-- description -->
                <slot></slot>
            </div>
            <div class='column'>
                <div class="player">
                    <iframe title={title} width="100%" height="100%" src={video} frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
                </div>
            </div>  
        </div>
    </div>
</div>

<style lang='scss'>
    @import "../../styles.scss";
    .player {
        border-radius: 10px;
        overflow: hidden;
        z-index: 1;
        /* background-color: pink; */
        height: 320px;
    }
    .video-module {
        background-color: $grey-dark;
        border-radius: 20px;
        color: whitesmoke;
        // strong {
        //     color: whitesmoke;
        // }
        h3 {
            color: whitesmoke;
        }
    }
</style>