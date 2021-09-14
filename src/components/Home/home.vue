<template>
  <slide-component></slide-component>
  <categorias></categorias>
  <mais-vendidos-component></mais-vendidos-component>
  <banner-duplo></banner-duplo>
  <melhores-ofertas-component></melhores-ofertas-component>
  <subscribe></subscribe>
</template>

<script>
import categorias from './categorias/categorias.vue'
import subscribe from './subscribe/subscribe.vue'
import bannerDuplo from './banneDuplo/bannerDuplo.vue'
import melhoresOfertasComponent from "./melhoresOfertas/melhoresOfertas.vue";
import maisVendidosComponent from "../Home/maisVendidos/maisVendidos.vue";
import slideComponent from "./Slide/Slide.vue";

export default {
    components: {
    slideComponent, maisVendidosComponent, melhoresOfertasComponent, 
    bannerDuplo, subscribe, categorias
  },

}
</script>

<style>

</style>