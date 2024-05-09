<script lang="ts">
  export let height = "20rem";
  export let width = "20rem";
  export let rotation = "0deg";

  export let message: string = "";

</script>

<div style="
    --postit-height: {height};
    --postit-width: {width};
    --postit-rotation: {rotation};
  ">
  <p>{message}</p>
</div>

<style>
  div {
    background: var(--color-postit);
    font-family: var(--font-notes);
    margin: auto;
    height: var(--postit-height);
    width: var(--postit-width);
    transform: rotate(var(--postit-rotation));
    box-shadow: 0rem 2rem 1.5rem rgba(0, 0, 0, 0.04);
    transition: box-shadow 0.3s ease-in-out;
  }
  div > p {
    margin: 0;
  }
  div:hover {
    box-shadow: 
      0rem 3rem 4rem rgba(0, 0, 0, 0.04),
      0rem 2rem 1.5rem rgba(0, 0, 0, 0.06);
  }
</style>

