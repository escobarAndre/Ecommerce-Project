<template>
  <div class="page">
      <div class="col-1">
          <div class="produtos" v-for="list of carrinho" :key="list">
              <i class="pi pi-trash"></i>
              <img src="./folha-1.jpg" alt="">
              <h2 class="title">{{list.name}}</h2>
              <p class="valor">R${{list.valor.toFixed(2)}}</p>
              <input v-model="list.qtd" class="qtd" type="number">
              <p class="valor-total">R${{list.valorTotal.toFixed(2)}}</p>
          </div>
      </div>
      <div class="col-2">
          <div class="confirmacao">
              <h2>Total no Carrinho</h2>
              <div class="itens">
                  <div class="itens subtotal">
                      <p class="subtotal-title">Subtotal</p>
                      <p class="subtotal-valor">R${{valorTotal.toFixed(2)}}</p>
                  </div>
                  <div class="itens entrega">
                      <p class="entrega-title">Entrega</p>
                      <p class="entrega-valor">Digite seu endereço para ver as opcções de entrega. <br> <b>Calcular Entrega </b></p>
                  </div>
                  <div class="itens total">
                      <p class="total-title">Total</p>
                      <p class="total-valor">R${{valorTotal.toFixed(2)}}</p>
                  </div>
              </div>
              <button>CONCLUIR COMPRA</button>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            carrinho: new Array(),
            valorTotal: 0,
            
        
        }
    },
    methods: {
        capturarCarrinho() {
            if(localStorage.getItem("carrinho")) {
                this.carrinho = JSON.parse(localStorage.getItem("carrinho"))
                console.log(this.carrinho)
            }
        }, 
         calcTotal() {
             this.valorTotal = this.carrinho.reduce(getTotal, 0)
             function getTotal(total, item) {
                 return total + (item.valorTotal)
             }
        }
    }, 
    mounted() {
        this.capturarCarrinho(),
        this.calcTotal()
    }
}
</script>

<style lang="sass">

input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button
    -webkit-appearance: none
    margin: 0

.page
    display: grid
    grid-template-columns: 60% 35%
    height: auto
    font-family: 'Comfortaa', cursive
    padding: 5rem 0 
    align-items: top
    background-color: #f1f1f1
    padding-bottom: 9rem

    .col-1
        .produtos
            display: flex
            align-items: center
            justify-content: space-around
            width: 85%
            float: right
            border-top: 1px solid lightgrey
            border-bottom: 1px solid lightgrey
            margin: .5rem 0
            background-color: white
            

            img
                width: 100px
                height: 100px
            .title
                font-size: .9rem
                width: 3rem
                text-align: center
                color: grey

            .valor

            .qtd
                width: 2.5rem
                height: 2.5rem
                background-color: #f1f1f1
                text-align: center
                border: none
                -moz-appearance: textfield
                -webkit-appearance: textfield

            .valor-total

    .col-2
        margin-left: 3rem
        background-color: white
        padding-left: 2rem
        
        .confirmacao

            button
                border: none
                background-color: #1c80cf
                color: white
                width: 80%
                height: 3rem
                cursor: pointer
                margin-bottom: 1.5rem

            
            .itens
                .itens
                    display: flex
                    align-items: center
                    justify-content: space-between
                    width: 80%
                    border-top: 1px solid lightgrey
                
                    .subtotal-title            
                    .subtotal-valor
                    .entrega-title
                    .entrega-valor
                        width: 55%
                        font-size: .9rem
                    .total-title
                    .total-valor
                        font-size: 1.5rem
                    
</style>