<template>
  <div class="user">
    <div class="login">
      <div @click="showLogin()" class="login-entry">
        <h4 v-bind:class="{activeForm: !login}" ><b>Login</b></h4>
      </div>
      <div @click="showCadastro()"  class="login-entry">
        <h4 v-bind:class="{activeForm: !cadastro}"  class="active"><b>Cadastro</b></h4>
      </div>
    </div>
    <div v-if="!login" class="input">
      <span class="p-float-label center">
        <InputText id="username" type="text" />
        <label style="marginLeft: 5.5rem" for="username">Endereço de email</label>
      </span>
      <span class="p-float-label center">
        <InputText id="username" type="text" />
        <label for="username" style="marginLeft: 5.5rem">Senha</label>
      </span>
      <div>
        <input style="marginRight: 10px" type="checkbox" class="center" id="lembrar-me" name="lembrar-me" />
        <label for="lembrar-me">Lembrar-me</label>
      </div>
      <Button
        label="Primary"
        style="marginleft: 8.9rem; margintop: 1.5rem"
        class="p-button-md center"
      />
    </div>

    <div class="cadastro" v-if="!cadastro">

      <h4 class="cadastro-title">Faça o seu cadastro de forma simples e rápida. </h4>
      
      <div style="display: flex; justifyContent: center">
        <span class="p-float-label cadastro-input">
            <InputText v-bind:class="{activeInput: !nomeRequired}" style="width: 10rem" id="selectedNome" name="selectedNome" type="text" v-model="selectedNome" />
            <label for="Nome">Nome</label>
        </span>
        <span class="p-float-label cadastro-input">
            <InputText v-bind:class="{activeInput: !sobrenomeRequired}" style="width: 10rem" id="Sobrenome" type="text" v-model="selectedSobrenome" />
            <label for="Sobrenome">Sobrenome</label>
        </span>
      </div>
      <div style="display: flex;justifyContent: center">
        <span class="p-float-label cadastro-input">
            <InputText v-bind:class="{activeInput: !emailRequired}" style="width: 20rem" id="email" type="text" v-model="selectedEmail" />
            <label for="email">Email</label>
        </span>
      </div>
      <div style="display: flex; justifyContent: center">
        <span class="p-float-label cadastro-input">
            <InputMask v-bind:class="{activeInput: !telefoneRequired}" style="width: 10rem" id="Telefone" type="text" v-model="selectedTelefone"  mask="(99)99999-9999" />

            <label for="Telefone">Telefone</label>
        </span>
        <span class="p-float-label cadastro-input">
            <InputMask style="width: 10rem" id="Telefone2" type="text" v-model="selectedTelefone2" mask="(99) 99999-9999" />
            <label for="Telefone2">Telefone (2)</label>
        </span>
      </div>
      <div style="display: flex; justifyContent: center">
            <Dropdown v-bind:class="{activeInput: !sexoRequired}" class="cadastro-input" style="width: 9.7rem" v-model="selectedSexo" :options="sexo" optionLabel="sexo" placeholder="Sexo" />
            <span class="p-float-label cadastro-input">
              <InputMask v-bind:class="{activeInput: !dataRequired}" style="width: 10.3rem" id="dataNascimento" type="text" v-model="selectedData" mask="99/99/9999" placeholder="Data de Nascimento" />

              <label for="DataNascimento"></label>
            </span>
      </div>
      <div style="display: flex; justifyContent: center">
        <span class="p-float-label cadastro-input">
            <InputMask v-bind:class="{activeInput: !cpfRequired}" style="width: 20rem" id="cpf" type="text" v-model="selectedCPF" mask="999.999.999.-99" />

            <label for="cpf">CPF</label>
        </span>
      </div >
       <div style="display: flex; justifyContent: center">
        <span class="p-float-label cadastro-input">
            <InputText v-bind:class="{activeInput: !endereçoRequired}" style="width: 20rem" id="endereço" type="text" v-model="selectedEndereço" />
            <label for="endereço">Endereço</label>
        </span>
      </div >
      <div style="display: flex; justifyContent: center">
        <span class="p-float-label cadastro-input">
            <InputText v-bind:class="{activeInput: !numeroRequired}" style="width: 10rem" id="Número" type="number" v-model="selectedNumero" />
            <label for="Número">Número</label>
        </span>
        <span class="p-float-label cadastro-input">
            <InputText v-bind:class="{activeInput: !bairroRequired}" style="width: 10rem" id="Bairro" type="text" v-model="selectedBairro" />
            <label for="Bairro">Bairro</label>
        </span>
      </div >
      <div style="display: flex; justifyContent: center">
        <span class="p-float-label cadastro-input">
            <InputMask v-bind:class="{activeInput: !cepRequired}" style="width: 10rem" id="CEP" type="text" v-model="selectedCEP" mask="99999-999" />

            <label for="CEP">CEP</label>
        </span>
        <Dropdown v-bind:class="{activeInput: !estadoRequired}" class="cadastro-input" style="width: 10rem" v-model="selectedEstado" :options="estados" optionLabel="estado" placeholder="Estado" />        
      </div >
      <div v-if="!error">
        <p style="color: red; fontSize: .8rem; textAlign: center">Existem campos que não foram preenchidos.</p>
      </div>
      <div style="justifyContent: center; paddingLeft: 9.5rem; ">
      
        <Button
          label="Primary"
          class="p-button-md center"
          @click="checkForm()"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
    methods: {
      showCadastro() {
        this.cadastro = false
        this.login = true
      },
      showLogin() {
        this.login = false
        this.cadastro = true
      },
      checkForm() {
        this.error = true
        this.nomeRequired = true
        this.sobrenomeRequired = true
        this.emailRequired = true
        this.telefoneRequired = true
        this.telefone2Required = true
        this.sexoRequired = true
        this.cpfRequired = true
        this.dataRequired = true
        this.endereçoRequired = true
        this.numeroRequired = true
        this.bairroRequired = true
        this.cepRequired = true
        this.estadoRequired = true

        if(this.selectedNome && this.selectedSobrenome && this.selectedEmail && this.selectedTelefone &&
        this.selectedTelefone2 && this.selectedCPF && this.selectedData && this.selectedEndereço && this.selectedNumero &&
        this.selectedBairro && this.selectedCEP && this.selectedEstado) {
          
          console.log('Formulário aprovado')
          this.newUser()
        }

        if(!this.selectedSobrenome) {
          this.sobrenomeRequired = false
          this.error = false
          console.log('error')
        }

        if(!this.selectedNome) {
          this.nomeRequired = false
          this.error = false
          console.log('error')} 
        
        if(!this.selectedEmail) {
          this.emailRequired = false
          this.error = false
          console.log('error')
        }

        if(!this.selectedTelefone) {
          this.telefoneRequired = false
          this.error = false
          console.log('error')
        }

        if(!this.selectedTelefone2) {
          this.telefone2Required = false
          this.error = false
          console.log('error')
        }

        if(!this.selectedSexo) {
          this.sexoRequired = false
          this.error = false
          console.log('error')
        }

        if(!this.selectedData) {
          this.dataRequired = false
          this.error = false
          console.log('error')
        }

        if(!this.selectedCPF) {
          this.cpfRequired = false
          this.error = false
          console.log('error')
        }

        if(!this.selectedEndereço) {
          this.endereçoRequired = false
          this.error = false
          console.log('error')
        }

        if(!this.selectedNumero) {
          this.numeroRequired = false
          this.error = false
          console.log('error')
        }

        if(!this.selectedBairro) {
          this.bairroRequired = false
          this.error = false
          console.log('error')
        }

        if(!this.selectedCEP) {
          this.cepRequired = false
          this.error = false
          console.log('error')
        }

        if(!this.selectedEstado) {
          this.estadoRequired = false
          this.error = false
          console.log('error')
        }
        
      },

      newUser() {
        this.user.push({Sexo: this.selectedSexo, 
        Nome: this.selectedNome,
        Sobrenome: this.selectedSobrenome,
        Email: this.selectedEmail,
        Telefone: this.selectedTelefone,
        Telefone2: this.selectedTelefone2,
        CPF: this.selectedCPF, 
        Endereco: this.selectedEndereço, 
        Numero: this.selectedNumero,
        Bairro: this.selectedBairro,
        CEP: this.selectedCEP, 
        Estado: this.selectedEstado})
        console.log(this.user)
      }
    },
    data() {
      return {
        cadastro: true,
        login: false,
        
        //Requerimentos formulario
        error: true,
        nomeRequired: true,
        sobrenomeRequired: true,
        emailRequired: true,
        telefoneRequired: true,
        telefone2Required: true,
        sexoRequired: true,
        cpfRequired: true,
        dataRequired: true,
        endereçoRequired: true,
        numeroRequired: true,
        bairroRequired: true,
        cepRequired: true,
        estadoRequired: true,

        user: [
          { 
            Nome: null,
            Sobrenome: null,
            Email: null,
            Telefone: null,
            Telefone2: null,
            Sexo: null,
            CPF: null,
            data: null,
            Endereço: null,
            Numero: null,
            Bairro: null,
            CEP: null,
            Estado: null,
          }
        ],
        selectedSexo: null,
        selectedNome: null,
        selectedSobrenome: null,
        selectedEmail: null, 
        selectedTelefone: null,
        selectedTelefone2: null,
        selectedCPF: null,
        selectedData: null,
        selectedEndereço: null,
        selectedNumero: null,
        selectedBairro: null,
        selectedCEP: null,
        selectedEstado: null,
        sexo: [
          {sexo: 'Masculino'},
          {sexo: 'Feminino'}
        ],
        estados: [
          {estado: 'AC'},
          {estado: 'AL'},
          {estado: 'AP'},
          {estado: 'AM'},
          {estado: 'BA'},
          {estado: 'CE'},
          {estado: 'ES'},
          {estado: 'GO'},
          {estado: 'MA'},
          {estado: 'MT'},
          {estado: 'MS'},
          {estado: 'MG'},
          {estado: 'PA'},
          {estado: 'PB'},
          {estado: 'PR'},
          {estado: 'PE'},
          {estado: 'PI'},
          {estado: 'RJ'},
          {estado: 'RN'},
          {estado: 'RS'},
          {estado: 'RO'},
          {estado: 'RR'},
          {estado: 'SC'},
          {estado: 'SP'},
          {estado: 'TO'},
          {estado: 'DF'},
        ]
      }
    }
};
</script>

<style lang="sass">



.activeInput
  border-color: red!important

.activeForm
  border-bottom: 3px solid black!important
  color: black!important



.user
    margin: 10rem 28rem
    

    .cadastro
      display: inline-block
      width: 24rem
      background-color: white
      
      .cadastro-input
        margin-bottom: 1.7rem

      .cadastro-title
        font-family: 'Comfortaa', cursive
        text-align: center


    .input
        display: inline-block
        justify-content: center
        text-align: center
        width: 24rem

        .center
            margin: 0 0 1rem 0 
            

        input
            background-color: #F1F1F1

    .login

        display: flex
        width: 24rem

        
            

        .login-entry
            width: 12rem
            text-align: center
            margin: 0 0 1rem 0
            cursor: pointer

            h4
                font-family: 'Comfortaa', cursive
                color: grey
                font-size: .8rem
                font-weight: 700
                border-bottom: 3px solid grey
                padding-bottom: 1rem
</style>