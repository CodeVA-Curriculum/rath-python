<script context="module">
    const posts = import.meta.glob('./*.md')
  
    let body = []
    let paths = []
  
    for (const path in posts) {
        paths.push(path);
        body.push(posts[path]().then(({metadata}) => metadata))
    }
    
    export async function load({ page, fetch }) {
      let posts = await Promise.all(body)
      for(let i=0; i<posts.length; i++) {
          if(posts[i]) {
              let end = paths[i].indexOf(".md");
              posts[i].path = "modules" + paths[i].substring(1, end);
          }
      }
      return {
        props: {
          posts
        }
      };
    }
</script>

<script>
    import ModuleCard from '$lib/components/ModuleCard.svelte';
    export let posts;
</script>

<div class='section'>
    <div class='container'>
        <!-- <h1 class='big block'>Course Modules</h1> -->
        <ul>
            {#each posts as p}
            {#if p}
            <li>
              <ModuleCard {...p} />
            </li>
            {/if}
            {/each}
        </ul>
    </div>
</div>

<style lang='scss'>
    .big {
        font-size: 2rem;
        font-weight: bolder;
    }
</style>