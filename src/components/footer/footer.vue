<template>
  <div class="footer">
    <div class="mapa-do-site">
      <h4>MAPA DO SITE</h4>
      <ul>
        <li @click="goToPage('/home')">Home</li>
        <li @click="goToPage('/velas')">Velas</li>
        <li @click="goToPage('/mantas')">Mantas</li>
        <li @click="goToPage('/almofadas')">Almofadas</li>
        <li @click="goToPage('/bandejas')">Bandejas</li>
        <li @click="goToPage('/decoracao')">Decoração</li>
        <li @click="goToPage('/quem-somos')">Quem somos</li>
        <li @click="goToPage('/contato')">Contato</li>
      </ul>
    </div>
    <div class="ajuda">
      <h4>AJUDA</h4>
      <ul>
        <li>Termos e Condições</li>
        <li @click="goToPage('/lista-de-desejos')">Lista de Desejos</li>
        <li>Rastrear Pedido</li>
        <li></li>
      </ul>
    </div>
    <div class="pagamento">
      <h4>FORMAS DE PAGAMENTO</h4>
      <div class="pagamento_img">
        <div class="pagamento_img-pix"></div>
        <div class="pagamento_img-paypal"></div>
        <div class="pagamento_img-pagseguro"></div>
        <div class="pagamento_img-mercadopago"></div>
      </div>
    </div>
  </div>
  <div class="rede_sociais">
    <Button icon="pi pi-facebook" class="p-button-rounded p-button-primary btn" />
    <Button icon="pi pi-camera" class="p-button-rounded p-button-warning" />
  </div>
  <div class="footer_final">
    <p>
      Kad Casa | CNPj 32.989.448/0001-09 | +55 11 99938-0938 | @ 2021 - Rua
      Paulista, 240 - Por André Escobar
    </p>
  </div>
</template>

<script>
export default {
  methods: {
    goToPage(route) {
      this.$router.push(route)
    }
  }
};
</script>

<style lang="sass">
.rede_sociais
    display: flex
    justify-content: center
    padding-top: .5rem

    .btn
        margin-right: 1rem
    

.footer_final
    text-align: center
    color: grey
    font-size: .8rem

.footer
    display: flex
    justify-content: space-around
    box-shadow: 0px 0px 5px rgb(0, 0, 0)
    margin-top: .2rem
    width: 100vw


    

    .mapa-do-site
        padding: 1rem
        text-align: left

        h4
            font-family: 'Comfortaa', cursive

        ul
            list-style: none
            list-style-type: none
            font-family: 'Comfortaa', cursive

            li
                margin: 1rem 0
                cursor: pointer

    .ajuda
        padding: 1rem
        text-align: left

        h4
            font-family: 'Comfortaa', cursive

        ul
            list-style: none
            list-style-type: none
            font-family: 'Comfortaa', cursive

            li
                margin: 1rem 0
                cursor: pointer

    .pagamento
        padding: 1rem
        text-align: left

        h4
            font-family: 'Comfortaa', cursive

        .pagamento_img
            .pagamento_img-mercadopago
                background-image: url(./cards.png)
                background-position: 103px 0px
                width: 51px
                height: 32px
                margin: 0 6px 6px 0
                float: left
                cursor: pointer

            .pagamento_img-pix
                background-image: url(./cards.png)
                background-position: 51px 0px
                width: 51px
                height: 32px
                margin: 0 6px 6px 0
                float: left
                cursor: pointer

            .pagamento_img-pagseguro
                background-image: url(./cards.png)
                background-position: -52px -33px
                width: 51px
                height: 32px
                margin: 0 6px 6px 0
                float: left
                cursor: pointer

            .pagamento_img-paypal
                background-image: url(./cards.png)
                background-position: 0px -33px
                width: 51px
                height: 32px
                margin: 0 6px 6px 0
                float: left
                cursor: pointer
</style>