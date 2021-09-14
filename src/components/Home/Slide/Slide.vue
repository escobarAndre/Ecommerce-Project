<template>
  <div class="items-wrapper">
    <div class="items" v:bind="scrollBy(300, 0)">
      <div class="item"></div>
    </div>
  </div>
</template>
 

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="sass" src="./style.sass" scoped/>