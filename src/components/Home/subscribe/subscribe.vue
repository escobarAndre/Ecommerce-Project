<template>
  <div class="subscribe">
    <h3 class="subscribe-title">Seja o primeiro a saber sobre nossas ofertas!</h3>
    <InputText placeholder="Digite seu email..." class="subscribe-input" type="text" v-model="value" />
    <Button class="subscribe-btn" type="submit">Cadastrar</Button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass">
    .subscribe
        background-color: #003F63
        width: 100vw
        height: 8rem
        margin-bottom: 2rem
        display: flex
        justify-content: center
        align-items: center

        &-title
            font-size: 2rem
            color: white
            margin-right: 1.5rem

        &-input
            height: 3rem
            margin: 1rem
            border-radius: .5rem!important

        &-btn
            height: 3rem
            margin: 1rem!important
            border-radius: .5rem!important

            

</style>