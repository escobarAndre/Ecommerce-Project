<template>
  <div class="produto">
      <div class="col-1">
          <div v-bind:class="{ imagemprimeira : imagem1 , imagemsegunda : imagem2}" class="img imagem-1"/>
          <div class="thumbnail">
              <img @click="showImagem(true, false)" class="thumbnail-img" src="./folha-1.jpg" alt="">
              <img @click="showImagem(false, true )" class="thumbnail-img" src="./folha-2.jpg" alt="">
          </div>
      </div>
      <div class="col-2">
          <div class="produto-itens">
              <h2 class="produtos-itens__title">Centro de Mesa Folha em Polirosina</h2>
              <p class="produtos-itens__subtitle">Folha em poli resina pequena</p>
              <p class="produtos-itens__descricao"> <b>Cor:</b> Dourado</p>
              <p class="produtos-itens__descricao"> <b>Disponibilidade:</b> Pronta Entrega</p>
              <div class="categorias">
                  <p>Tag:</p>
                  <p class="cat">categoria1</p>
                  <p class="cat">categoria2</p>
              </div>
              <p class="produtos-itens__SKU">SKU: 13247</p>
              <div style="display: flex">
                <h2 style="marginRight: 1rem">${{quantidade * preço}},00</h2>
                <div class="produto-itens__qtd">
                  <Button @click="retirarQtd()" style="height: 2.5rem" icon="pi pi-minus" iconPos="right" />
                  <p>{{quantidade}}</p>
                  <Button @click="addQtd()" style="height: 2.5rem" icon="pi pi-plus" iconPos="right" />
                  <Button @click="addCarrinho()" style="height: 2.5rem; marginLeft: .5rem">COMPRAR</Button>
                </div>
              </div>
              <div @click="favoritar()" class="favoritar">
                <i style="marginRight: .5rem" class="pi pi-heart"></i>
                <p>Favoritar</p>
              </div>
              <div class="divisor"/>
              <div class="produtos-itens__descrição">
                  <div class="descrição-title">
                    <div v-bind:class="{active : descrição}" @click="showDescrição()" class="descrição-title__tabview">
                        <h4  class="tabview-h4 ">Descrição</h4>
                    </div>
                    <div v-bind:class="{active : adicional}" @click="showAdicional()" class="descrição-title__tabview">
                        <h4 class="tabview-h4">Informação Adicional</h4>
                    </div>
                  </div>
                  <div class="descrição-content">
                      <div v-show="descrição" class="descrição-content__descrição">
                        <p>Toda a sofisticação nesse conjunto de centro de mesa em Poliresina dourada. Seu
                        design moderno aliado a sua textura e cor conferem luxo em qualquer ambiente. Podem ser
                        usados separadamente sem perder seu efeito sofisticado.</p>
                      </div>
                      <div v-show="adicional" class="descrição-content__adicional">
                          <ul>
                              <li>
                                  <p><b>Múltiplo:</b></p>
                                  <p class="p-right">1</p>
                              </li>
                              <li>
                                  <p style="textAlign: left"><b>Altura (cm):</b></p>
                                  <p class="p-right">4,5</p>
                              </li>
                              <li>
                                  <p><b>Largura (cm)</b></p>
                                  <p class="p-right">18</p>
                              </li>
                              <li>
                                  <p><b>Profundidade (cm)</b></p>
                                  <p class="p-right">29</p>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
  <div class="produtos2">
      <h4>Vocẽ também pode gostar:</h4>
      <div class="produtos2-card" style="display: flex">
          <product-card></product-card>
          <product-card></product-card>
          <product-card></product-card>
          <product-card></product-card>
          <product-card></product-card>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            quantidade: 1,
            preço: 110,
            adicional: false,
            descrição: true, 
            imagem1: true,
            imagem2: false,
            wishlist: new Array(),
            carrinho: new Array(),
            id: 13247

        }
    },
    methods: {
        addQtd() {
            if(this.quantidade < 100) {
                this.quantidade++
            } else {
                return this.quantidade
            }
        },
        retirarQtd() {
            if(this.quantidade > 0) {
                this.quantidade--
            } else {
                return this.quantidade
            }
        },
        showAdicional() {
            this.adicional = true
            this.descrição = false
        },
        showDescrição() {
            this.descrição = true
            this.adicional = false
        }, 
        showImagem(a, b) {
            this.imagem1 = a
            this.imagem2 = b
        },
        favoritar() {

            if(localStorage.getItem('wishlist')) {
                //Recuperar array do localStorage
                let obj = localStorage.getItem('wishlist')
                // Fazer this.carrinho ser array principal
                this.wishlist = JSON.parse(obj)
                //Verificar se esta vazio
                if(this.wishlist.length === 0) {
                    this.wishlist.push({name: 'Centro de Mesa Folha em Poliresina', id: this.id})
                    localStorage.setItem('wishlist', JSON.stringify(this.wishlist))
                } else {
                    return null
                }
            }
            else {
                this.wishlist.push({name: 'Centro de Mesa Folha em Poliresina', id: this.id})
                localStorage.setItem('wishlist', JSON.stringify(this.wishlist))
            }
        },
        addCarrinho() {

            if(localStorage.getItem('carrinho')) {
                //Recuperar array do localStorage
                let obj = localStorage.getItem('carrinho')
                // Fazer this.carrinho ser array principal
                this.carrinho = JSON.parse(obj)
                // Verificar se ja existi o produto dentro do array
                let exist = function (el) {
                    return el.name === 'Centro de Mesa Folha em Poliresina'
                }
                //Adicionar +1 na quantidade
                if(exist != undefined) {
                    //Descobrir index do elemento
                    let position = this.carrinho.findIndex(el => el.name === 'Centro de Mesa Folha em Poliresina')
                    //Adicionar quantiade no array
                   this.carrinho[position].qtd = this.quantidade
                   //Adicionar valor * quantidade no array
                   this.carrinho[position].valorTotal = this.preço * this.quantidade
                   // Adicionar nova quantidade e valor no localStorage
                   localStorage.setItem('carrinho', JSON.stringify(this.carrinho))
                }
            } else {
                this.carrinho.push({name: 'Centro de Mesa Folha em Poliresina', qtd: 1, valor: 110.00, valorTotal: 110.00})
                localStorage.setItem('carrinho', JSON.stringify(this.carrinho))
                console.log('Works')
            }
        }
        
    }
}
</script>

<style lang='sass' scoped>
    .produto
        display: grid
        grid-template-columns: 45% 50%
        padding: 5rem 0 3rem 0
        height: auto
        color: #003F60
        padding-left: 5rem
        

       
        .col-1
            height: auto
            padding: 1.5rem 2.5rem 0 0 
            

            .img
                width: 500px
                height: 500px
                border: 1px solid 	#A9A9A9
                float: right
                // margin-left: .8rem


            .imagemprimeira
                background-image: url(./folha-1.jpg)
                background-position: center
                background-size: contain

            .imagemsegunda
                background-image: url(./folha-2.jpg)
                background-position: center
                background-size: contain

                

            .thumbnail
                .thumbnail-img
                    width: 100px
                    height:  100px
                    border: 1px solid 	#A9A9A9
                    margin: .5rem .5rem 0 0
        
                
        .col-2
            height: auto
            // border-right: 1px solid black
            padding: 0 2rem

            .produto-itens
                font-family: 'Comfortaa', cursive

                .produtos-itens__title
                    font-size: 1.5rem
                    font-weight: 500
                    color: #003F63  
                    font-weight: 500

                .produtos-itens__subtitle
                    font-size: .9rem

                .produtos-itens__descricao
                    font-weight: 300
                    font-size: .9rem

                .produto-itens__qtd
                    display: flex
                    align-items: center

                    p
                        height: 1rem
                        width: 3rem
                        text-align: center


                .favoritar
                    display: flex
                    align-items: center
                    justify-content: left
                    font-size: .9rem
                    cursor: pointer

                .categorias
                    display: flex
                    align-items: center
                    justify-content: left
                    margin: 0
                    font-size: .9rem

                    .cat
                        background-color: #91BDEC
                        height: 1.4rem
                        padding: .2rem
                        color: #003F63
                        margin-right: .4rem
                        font-size: .9rem
                        margin: .5rem

                .produtos-itens__SKU
                    font-size: .9rem
                    
                .divisor
                    border-bottom: 1px solid #6d6d6d45
                    width:59%
                    margin: 1rem 0

                .produtos-itens__descrição
                    .descrição-title
                        display: flex
                        padding-bottom: 0
                        
                        .descrição-title__tabview
                            text-align: center
                            margin-right: 2rem
                            height: 1rem
                            padding-bottom: 1.5rem
                            border-bottom: 3px solid white
                            cursor: pointer

                            .tabview-h4
                                margin: 0

                        :hover
                            // padding-bottom: 1.5rem
                            border-color: #e6ae48


                        .active
                            border-bottom: 3px solid #e6ae48

                    .descrição-content
                        margin-top: 1.5rem
                        padding-right: 2.5rem 

                        .descrição-content__descrição
                            font-size: .9rem
                            line-height: 1.2rem

                        .descrição-content__adicional
                            ul
                                padding: 0
                                width: 65%
                                

                                li
                                    list-style: none
                                    display: flex
                                    align-items: center
                                    justify-content: space-between
                                    height: 2rem
                                    font-size: .9rem
                                    
                                    .p-right
                                        text-align: center
                                        width: 2rem


    .produtos2
        padding: 0 5rem 0 3rem
        font-family: 'Comfortaa', cursive
        font-size: 1.4rem
        margin: 5rem 0 5rem 0


        .produtos2-card
            display: flex
            justify-content: space-between
            align-items: center
        
                    

                    
                    
                
</style>