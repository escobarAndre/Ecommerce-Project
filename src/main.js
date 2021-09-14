import { createApp } from 'vue'
import { createRouter, createWebHistory} from 'vue-router'
import App from './App.vue'

// Importação dos componentes PRIMEVUE
import PrimeVue from 'primevue/config';
import Carousel from 'primevue/carousel';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Menu from 'primevue/menu';
import PanelMenu from 'primevue/panelmenu';
import Breadcrumb from 'primevue/breadcrumb';
import Paginator from 'primevue/paginator';
import Checkbox from 'primevue/checkbox';
import MultiSelect from 'primevue/multiselect';
import Dropdown from 'primevue/dropdown';
import InputMask from 'primevue/inputmask';
import BadgeDirective from 'primevue/badgedirective';




// Importação de Plugin






//Importação de componentes Globais
import ProductCard from './components/produtoCard/productCard'

// Importação do componentes para rotas
import Home from './components/Home/home'
import Login from './components/login'
import Produto from './components/produto/produto'
import Wishlist from './components/wishlist/wishlist'
import Carrinho from './components/carrinho/carrinho'
    // VELAS
    import velas from './components/Velas/velas'
    import velasDecorativas from './components/Velas/velas-decorativas'
    import velasAromaticas from './components/Velas/velas-aromaticas'
    import suporteParaVelas from './components/Velas/suporte-para-velas'
    // ALMOFADAS
    import almofadas from './components/Almofadas/almofadas'
    import almofadasPadrao from './components/Almofadas/almofadas-padrao'
    import almofadasQuabraRim from './components/Almofadas/almofadas-quebra-rim'
    // BANDEJAS
    import bandejas from './components/Bandejas'
    // MANTAS
    import mantas from './components/Mantas'
    //DECORAÇÃO
    import decoracao from './components/Decoração/decoracao'
        //SUBDECORAÇÂO
        import aderecos from './components/Decoração/subDecoracao/aderecos-de-parede'
        import bancos from './components/Decoração/subDecoracao/bancos-decorados'
        import bandejasDec from './components/Decoração/subDecoracao/bandejas'
        import bolas from './components/Decoração/subDecoracao/bolas-murano'
        import casticais from './components/Decoração/subDecoracao/casticais'
        import centro from './components/Decoração/subDecoracao/centro-de-mesa'
        import cestos from './components/Decoração/subDecoracao/cestos'
        import decoradosVelas from './components/Decoração/subDecoracao/decorados-velas'
        import esculturas from './components/Decoração/subDecoracao/esculturas'
        import lanternas from './components/Decoração/subDecoracao/lanternas'
        import portaRetratos from './components/Decoração/subDecoracao/porta-retrato'
        import potuches from './components/Decoração/subDecoracao/potuches'
        import quadros from './components/Decoração/subDecoracao/quadros'
        import vasos from './components/Decoração/subDecoracao/vasos'

        




import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons

const router = createRouter({

    history: createWebHistory(),
    routes: [
        {path: '/home', component: Home},
        {path: '/login', component: Login},
        {path: '/velas', component: velas},
        {path: '/produto', component: Produto},
        {path: '/lista-de-desejos', component: Wishlist},
        {path: '/carrinho', component: Carrinho},
        {path: '/velas/velas-decorativas', component: velasDecorativas},
        {path: '/velas/velas-aromaticas', component: velasAromaticas},
        {path: '/velas/suporte-para-velas', component: suporteParaVelas},
        {path: '/almofadas', component: almofadas},
        {path: '/almofadas/quebra-rim', component: almofadasQuabraRim},
        {path: '/almofadas/padrao', component: almofadasPadrao},
        {path: '/bandejas', component: bandejas},
        {path: '/mantas', component: mantas},
        {path: '/decoracao', component: decoracao},
        {path: '/decoracao/aderecos-de-parede', component: aderecos},
        {path: '/decoracao/bancos-decorados', component: bancos},
        {path: '/decoracao/bandejas', component: bandejasDec},
        {path: '/decoracao/bolas-estilo-murano', component: bolas},
        {path: '/decoracao/casticais', component: casticais},
        {path: '/decoracao/centro-de-mesa', component: centro},
        {path: '/decoracao/cestarias', component: cestos},
        {path: '/decoracao/decorados-com-velas', component: decoradosVelas},
        {path: '/decoracao/esculturas', component: esculturas},
        {path: '/decoracao/lanternas', component: lanternas},
        {path: '/decoracao/porta-retrato', component: portaRetratos},
        {path: '/decoracao/potuches', component: potuches},
        {path: '/decoracao/quadros', component: quadros},
        {path: '/decoracao/vasos', component: vasos},





    ]
})

const app = createApp(App)
app.use(PrimeVue)
app.use(router)
app.directive('badge', BadgeDirective);
app.component('ProductCard', ProductCard)
app.component('InputMask', InputMask)
app.component('Menu', Menu)
app.component('Paginator', Paginator)
app.component('Dropdown', Dropdown)
app.component('PanelMenu', PanelMenu)
app.component('Checkbox', Checkbox)
app.component('Breadcrumb', Breadcrumb)
app.component('InputText', InputText)
app.component('Button', Button)
app.component('Carousel', Carousel)
app.component('MultiSelect', MultiSelect)
app.mount('#app')
