<template>
  <div class="categoria">
    <div class="breadcrumb">
      <p>Home / Decoração / Lanternas</p>
    </div>
    <div class="collum">
      <div class="sidebar">
        <PanelMenu :model="items" />
      </div>
      <div class="produtos">
        <h2 class="produtos-title">Lanternas</h2>
        <div class="produtos-show">
          <product-card></product-card>
          <product-card></product-card>
          <product-card></product-card>
          <product-card></product-card>
          <product-card></product-card>
          <product-card></product-card>
          <product-card></product-card>
          <product-card></product-card>
          <product-card></product-card>
          <product-card></product-card>
        </div>
        <Paginator :rows="10" :totalRecords="totalItemsCount"> </Paginator>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  methods: {
    alert() {
      window.alert("Hello world!");
    },
  },
  data() {
    return {
      rows: 10,
      totalRecords: 20,
      totalItemsCount: 12,
      items: [
        {
          label: "Categoria",
          items: [
            {
              label: "Categoria 1",
              command: () => {
                this.alert();
              },
            },
            { label: "Categoria 2", command: () => {} },
            { label: "Categoria 3", command: () => {} },
            { label: "Categoria 4", command: () => {} },
            { label: "Categoria 5", command: () => {} },
            { label: "Categoria 6", command: () => {} },
          ],
        },
        {
          label: "Preços",
          items: [
            { label: "$0,00 à %50,00", command: () => {} },
            { label: "$50,00 à $100,00", command: () => {} },
            { label: "$100,00 à $150,00", command: () => {} },
            { label: "$150,00 à $200,00", command: () => {} },
            { label: "$200,00 à $250,00", command: () => {} },
            { label: "$250,00 à $300,00", command: () => {} },
          ],
        },
        {
          label: "Cor",
          items: [
            { label: "Vermelho", command: () => {} },
            { label: "Amarelo", command: () => {} },
            { label: "Azul", command: () => {} },
            { label: "Branco", command: () => {} },
            { label: "Preto", command: () => {} },
            { label: "Roxo", command: () => {} },
          ],
        },
        {
          label: " Material",
          items: [
            { label: "Madeira", command: () => {} },
            { label: "Acrilico", command: () => {} },
            { label: "Cera", command: () => {} },
            { label: "Palha", command: () => {} },
            { label: "Metal", command: () => {} },
            { label: "Plástico", command: () => {} },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="sass" scoped >
.categoria
    padding-top: 1rem

    .breadcrumb
        width: 100%
        margin-bottom: 2rem
        padding-left: 5rem

    .collum
        display: grid
        grid-template-columns: 25% 75%

        .sidebar
            width: 20rem
            height: auto
            padding-left: 5rem
            grid-area: 1

        .produtos
            padding-left: 2rem

            .produtos-title
                padding: 0
                margin-top: 0rem
                font-family: 'Comfortaa', cursive
                font-size: 1.2rem
                border-bottom: 2px solid blue
                padding-bottom: .3rem
                width: 13rem

            .produtos-show
                display: grid
                grid-template-columns: 23% 23% 23% 23%
</style>