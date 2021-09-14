<template>
  <div class="header">
    <div class="header-logo">
      <img @click="goToPage('/home')" src="" alt="Logo KadCasa" />
    </div>
    <div class="header-menu">
      <ul class="c-dropdown">
        <li class="c-dropdown__item">
          <p @click="goToPage('/velas')">VELAS</p>
          <div class="c-dropdown__submenu">
            <ul>
              <li @click="goToPage('/velas/velas-decorativas')">DECORATIVAS</li>
              <li @click="goToPage('/velas/suporte-para-velas')">
                SUPORTE PARA VELAS
              </li>
              <li @click="goToPage('/velas/velas-aromaticas')">
                VELAS AROMÁTICAS
              </li>
            </ul>
          </div>
        </li>
        <li class="c-dropdown__item"><p @click="goToPage('/mantas')">MANTAS</p></li>
        <li class="c-dropdown__item">
          <p @click="goToPage('/almofadas')">ALMOFADAS</p>
          <div class="c-dropdown__submenu">
            <ul>
              <li @click="goToPage('/almofadas/padrao')">PADRÃO</li>
              <li @click="goToPage('/almofadas/quebra-rim')" >QUEBRA RIM</li>
            </ul>
          </div>
        </li>
        <li class="c-dropdown__item"><p @click="goToPage('/bandejas')">BANDEJAS</p></li>
        <li class="c-dropdown__item">
          <p @click="goToPage('/decoracao')">DECORAÇÃO</p>
          <div class="c-dropdown__submenu">
            <ul>
              <li @click="goToPage('/decoracao/aderecos-de-parede')">ADEREÇOS DE PAREDE</li>
              <li @click="goToPage('/decoracao/bandejas')">BANDEJAS</li>
              <li @click="goToPage('/decoracao/bolas-estilo-murano')">BOLAS ESTILO MURANO</li>
              <li @click="goToPage('/decoracao/bancos-decorados')">BANCOS DECORADOS</li>
              <li @click="goToPage('/decoracao/casticais')">CASTIÇAIS</li>
              <li @click="goToPage('/decoracao/centro-de-mesa')">CENTRO DE MESAS</li>
              <li @click="goToPage('/decoracao/cestarias')">CESTARIAS</li>
              <li @click="goToPage('/decoracao/decorados-com-velas')">DECORADOS COM VELAS</li>
              <li @click="goToPage('/decoracao/esculturas')">ESCULTURAS</li>
              <li @click="goToPage('/decoracao/lanternas')">LANTERNAS</li>
              <li @click="goToPage('/decoracao/porta-retrato')">PORTA RETRATOS</li>
              <li @click="goToPage('/decoracao/potuches')">POTUCHES</li>
              <li @click="goToPage('/decoracao/quadros')">QUADROS</li>
              <li @click="goToPage('/decoracao/vasos')">VASOS</li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
    <div class="header-icones">
      
      <i @click="goToPage('/lista-de-desejos')" class="pi pi-heart header-icones__heart"><div class="badge">{{badge}}</div></i>
      <i @click="goToPage('/login')" class="pi pi-user header-icones__user"></i>
      <i @click="goToPage('./carrinho')" class="pi pi-shopping-cart header-icones__cart"></i>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      badge: this.calcBadge(),
      wishlist: new Array

    }
  },
  methods: {
    goToPage(route) {
      this.$router.push(route);
    },
    calcBadge() {
      if(localStorage.getItem("wishlist")) {
            this.wishlist = JSON.parse(localStorage.getItem("wishlist"))
            return this.wishlist.length
            }

    }
  },
  mounted() {
    this.calcBadge()
  }
};
</script>

<style lang="sass" src="./style.sass" scoped/>