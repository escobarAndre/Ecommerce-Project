<template>
<h2 class="title">Lista de Desejos</h2>
<div class="page">
  <div class="categoria">
      CATEGORIAS DE PRODUTO
      <ul>
          <li @click="goToPage('/velas')">VELAS</li>
          <li @click="goToPage('/mantas')">MANTAS</li>
          <li @click="goToPage('/almofadas')">ALMOFADAS</li>
          <li @click="goToPage('/bandejas')">BANDEJAS</li>
          <li @click="goToPage('/ecoracao')">DECORAÇÃO</li>
      </ul>
  </div>
  <div class="whishlist">
      <div >
          <h3>Aqui você pode pode selecionar seus objetos emocionais prediletos para logo tê-los em casa.</h3>
          <h4>Minha Lista</h4>
          <div v-for="list of wishlist" :key="list.name" class="whishlist-itens">
                  <i @click="apagarItemWishlist()" class="pi pi-trash"></i>
                  <img src="./folha-1.jpg" alt="">
                  <p>{{list.name}}</p>
          </div>
          
      </div>
  </div>
  
</div>
</template>

<script>
export default {
    data() {
        return{ 
            wishlist: new Array
        }
    },
    methods: {
        capturarWishlist() {
            if(localStorage.getItem("wishlist")) {
                this.wishlist = JSON.parse(localStorage.getItem("wishlist"))
            }
        }, 
        apagarItemWishlist() {
            if(localStorage.getItem('wishlist')) {
                //Recuperar array do localStorage
                let obj = localStorage.getItem('carrinho')
                // Fazer this.carrinho ser array principal
                this.wishlist = JSON.parse(obj)
                //Descobrir index do elemento
                let position = this.wishlist.findIndex(el => el.name === 'Centro de Mesa Folha em Poliresina')
                // //Apagar o elemento do array
                console.log(position)
                this.wishlist.splice(position, 1)
                // //Mandar informação para o localStorage
                localStorage.setItem('wishlist', JSON.stringify(this.wishlist))
            }
        }, 
        goToPage(route) {
            this.$router.push(route)
        }
    },
    mounted() {
        this.capturarWishlist()
    }
    
}
</script>

<style lang="sass" scoped>

    .title
        text-align: center
        padding-top: 5rem
        font-family: 'Comfortaa', cursive
        font-size: 2rem
        background-color: #f5f5f5
        margin: 0


    .page
        display: grid
        grid-template-columns:  30% 60%
        align-items: top
        font-family: 'Comfortaa', cursive
        padding: 5rem 5rem 3rem 5rem 
        height: auto
        background-color: #f5f5f5

        .categoria
            font-size: .9rem
            ul
                padding-left: 0

                li
                    list-style: none
                    margin: 1rem 0
                    color: grey
                    cursor: pointer
            

        .whishlist
            margin-bottom: 8rem
            h3
                margin: 0
                font-weight: 300
                font-size: 1rem

            h4
                font-size: 1rem

            .whishlist-itens
                display: flex
                align-items: center
                justify-content: space-around
                // border: 1px solid grey
                margin: 1rem 0
                background-color: white
                img
                    width: 100px
                    height: 100px

                i
                    cursor: pointer


</style>