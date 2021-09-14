<template>
  <div class="categorias">
      <div @click="goToPage('/velas')" class="categoria velas">
          <div  class="sub-categoria">
              <h5>VELAS</h5>
          </div>
      </div>
      <div @click="goToPage('/mantas')" class="categoria mantas">
          <div  class="sub-categoria">
              <h5>MANTAS</h5>
          </div>
      </div>
      <div @click="goToPage('/almofadas')" class="categoria almofadas">
          <div class="sub-categoria">
              <h5>ALMOFADAS</h5>
          </div>
      </div>
      <div @click="goToPage('/bandejas')" class="categoria bandejas">
          <div class="sub-categoria">
              <h5>BANDEJAS</h5>
          </div>
      </div>
      <div @click="goToPage('/decoracao')" class="categoria decoracao">
          <div class="sub-categoria">
              <h5>DECORAÇÃO</h5>
          </div>
      </div>

  </div>
</template>

<script>
export default {
    methods: {
        goToPage(route) {
        this.$router.push(route);
        },
    },
}
</script>

<style lang="sass">
.categorias
    display: flex
    justify-content: space-around
    align-items: center
    margin-top: 2rem
    margin-bottom: 5rem

    .velas
        background-image: url(./velas.jpg)
        background-position: center
        background-size: cover
        background-repeat: no-repeat

    .mantas
        background-image: url(./mantas.jpg)
        background-position: center
        background-size: cover
        background-repeat: no-repeat
    .almofadas
        background-image: url(./almofadas.jpg)
        background-position: center
        background-size: cover
        background-repeat: no-repeat
    .bandejas
        background-image: url(./bandejas.jpg)
        background-position: center
        background-size: cover
        background-repeat: no-repeat
    .decoracao
        background-image: url(./decoracao.jpg)
        background-position: center
        background-size: cover
        background-repeat: no-repeat
    

    .categoria
        width: 10rem
        height: 15rem
        // background-color: #003F63
        cursor: pointer

        

        .sub-categoria
            background-color: white
            width: 9rem
            height: 4rem
            margin-top: 10rem 
            text-align: center
            padding-top: 2rem

            h5
                font-family: 'Comfortaa', cursive
                font-weight: 300
                font-size: 1rem
                color: #003F63
                margin: 0
                border-bottom: 1px solid #000000
                width: 5rem
                padding: 0 0 .5rem 0rem
                margin: 0 0 0 1rem 


</style>