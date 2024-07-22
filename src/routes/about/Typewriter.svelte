<script lang="ts">
	import { onMount } from "svelte";
  let parent: HTMLElement;
  let list: HTMLCollection;
  let wordIndex = 0;
  let charIndex = 0;
  let pauseTimer = 20;

  let curText = "";

  function startTyping() {
    curText = getTextFromNumbers()
  }

  function getTextFromNumbers(): string {
    let fulltext = list[wordIndex].textContent;
    if (!fulltext) {
      return "something broke"
    }
    let lettersShown = fulltext.length - Math.abs(charIndex - fulltext.length)
    charIndex++;
    if (lettersShown < 0) {
      wordIndex = (wordIndex + 1) % list.length
      charIndex = 1
    }
    return fulltext.substring(0, lettersShown)
  }

  onMount(() => {
    list = parent.children;
    console.log(list[0].textContent)
    const interval = setInterval(
      startTyping, 200 
    )

    return () => {
      clearInterval(interval)
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
