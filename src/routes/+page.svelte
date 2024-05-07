<script>
</script>

<svelte:head>
  <title>Home</title>
  <meta name="samsite" content="Svelte demo app" />
</svelte:head>

<section>
  <div class="about-container">
    <p>Hi, <span class="about text">I'm Sam</span></p>
  </div>

  <div class="code-container">
    <p class="code text half">write code</p>
  </div>

  <div class="photos-container">
    <p class="photos text half">take photos</p>
  </div>

</section>

<style>
  section {
    display: grid;
    gap: 1rem;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    height: 100%;
    width: 100%;
    font-size: 3rem;
  }

  section > div {
    background-color: #fefefe;
    text-align: center;
    height: 100%;
    position: relative;
  }

  div > p {
    margin: auto;
  }

  .about-container {
    grid-column: 1 / -1;
    display: flex;
    flex-dir: row;
    justify-content: center;
  }

  .about-container > p {
    width: 100%;
  }

  .code-container {
    grid-column: 1 / 2;
  }

  .photos-container {
    grid-column: 2 / 3;
  }


  .half {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(0%, -50%);
    width: 50%;
  }

</style>


