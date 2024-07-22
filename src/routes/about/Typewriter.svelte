<script lang="ts">
	import { onMount } from "svelte";
  let parent: HTMLElement;
  let list: HTMLCollection;
  let wordIndex = 0;
  let charIndex = 0;
  export let timeout = 2000;
  export let speed = 75;
  let pauseTimer = timeout;

  let curText = "";

  function startTyping() {
    let fulltext = list[wordIndex].textContent;
    if (!fulltext) {
      return ""
    }

    let lettersShown = fulltext.length - Math.abs(charIndex - fulltext.length)

    if (lettersShown < 0) {
      wordIndex = (wordIndex + 1) % list.length
      charIndex = 1
      return;
    }

    if (lettersShown === fulltext.length && pauseTimer > 0) {
      pauseTimer -= speed
    } else {
      charIndex++;
      pauseTimer = timeout;
    }

    curText = fulltext.substring(0, lettersShown)
  }

  onMount(() => {
    list = parent.children;
    const typingInterval = setInterval(
      startTyping, speed
    )

    return () => {
      clearInterval(typingInterval)
    }
  })

</script>


<div class="invisible" aria-hidden="true" bind:this={parent}>
  <slot />
</div>

<h1 class="text">{curText}</h1>

<style>
  .text {
    height: 3rem;
  }

  .invisible {
    display: none;
  }
</style>
