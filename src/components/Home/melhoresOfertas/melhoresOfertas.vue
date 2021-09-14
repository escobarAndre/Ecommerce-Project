<template>
  <div class="">
    <div class="text-center">
      <h2>Melhores Ofertas</h2>
      <p>Se inspire nas melhores ofertas KadCasa</p>
    </div>
    <div class="tabview">
      <div class="tabview-header">
        <div
          @click="showTab1()"
          :class="{ active: activeTab1 === 1 }"
          class="tabview-header__item"
          style="cursor: pointer"
        >
          <h4>VELAS</h4>
        </div>
        <div
          @click="showTab2()"
          :class="{ active: activeTab2 === 1 }"
          class="tabview-header__item"
          style="cursor: pointer"
        >
          <h4>MANTAS</h4>
        </div>
        <div
          @click="showTab3()"
          :class="{ active: activeTab3 === 1 }"
          class="tabview-header__item"
          style="cursor: pointer"
        >
          <h4>ALMOFADAS</h4>
        </div>
        <div
          @click="showTab4()"
          :class="{ active: activeTab4 === 1 }"
          class="tabview-header__item"
          style="cursor: pointer"
        >
          <h4>BANDEJAS</h4>
        </div>
        <div
          @click="showTab5()"
          :class="{ active: activeTab5 === 1 }"
          class="tabview-header__item"
          style="cursor: pointer"
        >
          <h4>DECORAÇÃO</h4>
        </div>
      </div>
      <div class="tabview-content">
        <div v-if="activeTab1 === 1">
          <div class="produtos">
            <div class="produtos-item">
              <product-card></product-card>
            </div>
            <div class="produtos-item">
              <product-card></product-card>
            </div>
            <div class="produtos-item">
              <product-card></product-card>
            </div>
            <div class="produtos-item">
              <product-card></product-card>
            </div>
            <div class="produtos-item">
              <product-card></product-card>
            </div>
          </div>
        </div>
        <div v-if="activeTab2 === 1">
            <div class="produtos">
            <div class="produtos-item">
              <product-card></product-card>
            </div>
            <div class="produtos-item">
              <product-card></product-card>
            </div>
            <div class="produtos-item">
              <product-card></product-card>
            </div>
            <div class="produtos-item">
              <product-card></product-card>
            </div>
            <div class="produtos-item">
              <product-card></product-card>
            </div>
          </div>
        </div>
        <div v-if="activeTab3 === 1">
            <div class="produtos">
            <div class="produtos-item">
              <product-card></product-card>
            </div>
            <div class="produtos-item">
              <product-card></product-card>
            </div>
            <div class="produtos-item">
              <product-card></product-card>
            </div>
            <div class="produtos-item">
              <product-card></product-card>
            </div>
            <div class="produtos-item">
              <product-card></product-card>
            </div>
          </div>
        </div>
        <div v-if="activeTab4 === 1">
            <div class="produtos">
            <div class="produtos-item">
              <product-card></product-card>
            </div>
            <div class="produtos-item">
              <product-card></product-card>
            </div>
            <div class="produtos-item">
              <product-card></product-card>
            </div>
            <div class="produtos-item">
              <product-card></product-card>
            </div>
            <div class="produtos-item">
              <product-card></product-card>
            </div>
          </div>
        </div>
        <div v-if="activeTab5 === 1">
            <div class="produtos">
            <div class="produtos-item">
              <product-card></product-card>
            </div>
            <div class="produtos-item">
              <product-card></product-card>
            </div>
            <div class="produtos-item">
              <product-card></product-card>
            </div>
            <div class="produtos-item">
              <product-card></product-card>
            </div>
            <div class="produtos-item">
              <product-card></product-card>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab1: 1,
      activeTab2: 0,
      activeTab3: 0,
      activeTab4: 0,
      activeTab5: 0,
    };
  },
  methods: {
    showTab1() {
      this.activeTab1 = 1;
      this.activeTab2 = 0;
      this.activeTab3 = 0;
      this.activeTab4 = 0;
      this.activeTab5 = 0;
    },
    showTab2() {
      this.activeTab1 = 0;
      this.activeTab2 = 1;
      this.activeTab3 = 0;
      this.activeTab4 = 0;
      this.activeTab5 = 0;

    },
    showTab3() {
      this.activeTab1 = 0;
      this.activeTab2 = 0;
      this.activeTab3 = 1;
      this.activeTab4 = 0;
      this.activeTab5 = 0;
    },
    showTab4() {
      this.activeTab1 = 0;
      this.activeTab2 = 0;
      this.activeTab3 = 0;
      this.activeTab4 = 1;
      this.activeTab5 = 0;
    },
    showTab5() {
      this.activeTab1 = 0;
      this.activeTab2 = 0;
      this.activeTab3 = 0;
      this.activeTab4 = 0;
      this.activeTab5 = 1;
    },
  },
  components: {
  }
};
</script>

<style lang="sass" src="./style.sass" scoped>
</style>

