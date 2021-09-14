<template>
    <div class="categoria">
        <div class="card">
            <img src="./folha-1.jpg" alt="Produto KadCasa">
            <div class="card-body">
                <h5 class="card-body__title">NOME DO PRODUTO</h5>
                <div class="card-body__prices">
                    <p class="prices-riscado">15,99</p>
                    <p class="prices-valorAtual">10,99</p>
                </div>
                <p class="card-body__juros">Em até 12x sem juros</p>
                <div class="card-body__button">
                    <Button class="btn" @click="goToPage('/produto')" label="Small" type="">VER PRODUTO</Button>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        goToPage(route) {
            this.$router.push(route);
        }
    }
}
</script>

<style lang="sass" scoped>

    .categoria
        .card
            
            font-family: 'Roboto', sans-serif
            display: inline-block
            justify-content: center
            width: 12rem

            img
                width: 12rem

            &:hover
                box-shadow: 0 0 1em black
                

                .card-body__button
                    opacity: 1
                    transition: 700ms

                img
                    transform: scale(0.9)

            .card-body
                &__title
                    font-family: 'Roboto', sans-serif
                    font-weight: 300
                    text-align: center
                    font-size: 1rem
                    margin-bottom: .3rem
                    margin: 0
                    padding: .2rem 0rem 

                &__prices
                    display: flex
                    text-align: center
                    justify-content: center
                    align-items: center

                    .prices-riscado
                        text-decoration: line-through
                        text-align: center
                        font-size: .9rem
                        margin: 0
                        margin-right: 0
                    .prices-valorAtual
                        padding: 0
                        margin: 0
                        font-size: 1.8rem
                        color: #003F63
                        font-family: 'Roboto', sans-serif
                        font-weight: 500
                &__juros
                    text-align: center
                    font-size: .8rem
                    margin: .3rem
                &__button
                    opacity: 0
                    

                    .btn
                        margin-bottom: .5rem
                        border-radius: 1rem
                        width: 8rem
                        font-size: .8rem
                        left: 16%
                        
                
</style>