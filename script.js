// Função para atualizar o contador
function atualizarContador() {
    const contadorElemento = document.getElementById('contador');
    let contador = 0;

    // Função para incrementar o contador
    function incrementar() {
        if (contador <= 100) {
            contador++;
            contadorElemento.textContent = contador;
        }
    }

    // Adicione um listener para o evento de scroll
    window.addEventListener('scroll', incrementar);
}

// Chame a função para iniciar o contador
atualizarContador();

// cadastro

let btn = document.querySelector('#verNumero')
let btnConfirm = document.querySelector('#verConfirmNumero')

let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false

let email = document.querySelector('#email')
let labelEmail = document.querySelector('#labelEmail')
let validEmail = false

let numero = document.querySelector('#numero')
let labelNumero = document.querySelector('#labelNumero')
let validNumero = false

let confirmNumero = document.querySelector('#confirmNumero')
let labelConfirmNumero = document.querySelector('#labelConfirmNumero')
let validconfirmNumero = false

let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')

nome.addEventListener('keyup', () => {
    if (nome.value.length <= 2) {
        labelNome.setAttribute('style', 'color: red')
        labelNome.innerHTML = 'Nome: *Insira no minimo 3 caracteres'
        nome.setAttribute('style', 'border-color: red')
        validNome = false
    } else {
        labelNome.setAttribute('style', 'color: green')
        labelNome.innerHTML = 'Nome'
        nome.setAttribute('style', 'border-color: green')
        validNome = true
    }
})

email.addEventListener('keyup', () => {
    if (email.value.length <= 4) {
        labelEmail.setAttribute('style', 'color: red')
        labelEmail.innerHTML = 'E-mail: *Insira no minimo 5 caracteres'
        email.setAttribute('style', 'border-color: red')
        validEmail = false
    } else {
        labelEmail.setAttribute('style', 'color: green')
        labelEmail.innerHTML = 'Email:'
        email.setAttribute('style', 'border-color: green')
        validEmail = true
    }
})

numero.addEventListener('keyup', () => {
    if (numero.value.length <= 8) {
        labelNumero.setAttribute('style', 'color: red')
        labelNumero.innerHTML = 'Número para contato: *Inválido'
        numero.setAttribute('style', 'border-color: red')
        validNumero = false
    } else {
        labelNumero.setAttribute('style', 'color: green')
        labelNumero.innerHTML = 'Número:'
        numero.setAttribute('style', 'border-color: green')
        validNumero = true
    }
})

confirmNumero.addEventListener('keyup', () => {
    if(numero.value != confirmNumero.value){
      labelConfirmNumero.setAttribute('style', 'color: red')
      labelConfirmNumero.innerHTML = 'Confirmar número: *número diferente'
      confirmNumero.setAttribute('style', 'border-color: red')
      validconfirmNumero = false
    } else {
      labelConfirmNumero.setAttribute('style', 'color: green')
      labelConfirmNumero.innerHTML = 'Confirmar número:'
      confirmNumero.setAttribute('style', 'border-color: green')
      validconfirmNumero = true
    }
  })

  function cadastrar(){
    if(validNome && validEmail &&validNumero && validconfirmNumero){
      let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')
      
      listaUser.push(
      {
        nomeCad: nome.value,
        emailCad: email.value,
        numeroCad: numero.value
      }
      )
      
      localStorage.setItem('listaUser', JSON.stringify(listaUser))
      
     
      msgSuccess.setAttribute('style', 'display: block')
      msgSuccess.innerHTML = '<strong>Cadastrando usuário...</strong>'
      msgError.setAttribute('style', 'display: none')
      msgError.innerHTML = ''
      
      setTimeout(()=>{
          window.location.href = '#'
      }, 3000)
    
      
    } else {
      msgError.setAttribute('style', 'display: block')
      msgError.innerHTML = '<strong>Preencha todos os campos corretamente antes de cadastrar</strong>'
      msgSuccess.innerHTML = ''
      msgSuccess.setAttribute('style', 'display: none')
    }
  }
  
  btn.addEventListener('click', ()=>{
    let inputNumero = document.querySelector('#numero')
    
    if(inputNumero.getAttribute('type') == 'password'){
      inputNumero.setAttribute('type', 'text')
    } else {
      inputNumero.setAttribute('type', 'password')
    }
  })
  
  btnConfirm.addEventListener('click', ()=>{
    let inputConfirmNumero = document.querySelector('#confirmNumero')
    
    if(inputConfirmNumero.getAttribute('type') == 'password'){
      inputConfirmNumero.setAttribute('type', 'text')
    } else {
      inputConfirmNumero.setAttribute('type', 'password')
    }
  })
  