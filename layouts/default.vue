<template>
  <div>
    <nuxt/>
  </div>
</template>

<style>
  *, *:before, *:after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  ul, li {
    list-style: none;
  }

  .clear:before,
  .clear:after {
    content: '';
    display: table;
    clear: both;
  }
</style>
