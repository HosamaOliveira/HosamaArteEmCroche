// Função relógio em index.html
var interval
function startTimer() {
  clearInterval(interval)
  var hourAndDate = document.querySelector("#hourAndDate")

  if(hourAndDate){
    interval = setInterval(() => {
      hourAndDate.innerHTML = new Date(Date.now()).toLocaleTimeString('pt-br')
      hourAndDate.innerHTML += "<br>" + new Date(Date.now()).toLocaleDateString('pt-br')
    },100)
  }
}
startTimer()

// Função de navegação, menu lateral em index, fotos e videoClasses.html
function navigate(page) {
  switch (page) {
    case 'btRegistration':
      location.href = './registration.html'
      break
    case 'title':
      location.href = './index.html'
      break
  }
}

// Função register() em registration.html
function register() {
  let cadName = document.querySelector("#cadName")
  let cadMail = document.querySelector("#cadMail")
  let registered = document.querySelector("#inkScratch")
  let registerOk = document.querySelector("#regis")
  let textRegister = document.querySelector("#textRegister")
  let timer
  let counter = 5

  if (cadName.value.length == "" || cadMail.value.length == "") {
    registered.style.color = "#c70404"
    registered.innerHTML = "* Erro! Por favor, preencha os campos corretamente."
  } else if (!cadMail.checkValidity()) {
    registered.style.color = "#c70404"
    registered.innerHTML = "E-mail inválido, por favor preencha corretamente."
  } else {
    textRegister.innerHTML = "Rosa de Pedra"
    registered.style = `
      height: 100%;
      margim: auto;
      color: #3f145c;
      font-size: 18pt;
    `
    registerOk.style.width = "80%"
    registerOk.style.fontSize = "15pt"
    registerOk.innerHTML = ""
    registered.innerHTML = ""
    showMessage()

  }

  function showMessage(){
    clearTimeout(timer)
    registered.innerHTML = `<p>Olá ${cadName.value},<br>seu registro foi concluído com sucesso.✔<br>Você será redirecionado(a) para a página inicial em <span id="number">${counter--}</span> segundos.</p>`
    if (counter <= 0) {
      clearTimeout(timer)
      location.href = './index.html'
    }
    else 
      timer = setTimeout(()=>{
        showMessage()
      },1000)
  }
}

function reset() {
  let registered = document.querySelector("#inkScratch")

  if ((registered.innerHTML == "* Erro! Por favor, preencha os campos corretamente.") || (registered.innerHTML == "E-mail inválido, por favor preencha corretamente.")) {
    registered.style.color = "#2d0f41"
    registered.innerHTML = "Cadastre-se e receba as novidades diretamente no seu e-mail."
  }
}

