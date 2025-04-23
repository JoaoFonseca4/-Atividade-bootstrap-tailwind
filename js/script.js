const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

// Função para exibir o alerta
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}


const alertTrigger1 = document.getElementById('liveAlertBtn')
if (alertTrigger1) {
  alertTrigger1.addEventListener('click', () => {
    appendAlert('Sucesso! O Pequeno Príncipe foi adicionado aos seus favoritos', 'success')
  })
}


const alertTrigger2 = document.getElementById('liveAlertBtn2')
if (alertTrigger2) {
  alertTrigger2.addEventListener('click', () => {
    appendAlert('Sucesso! A Culpa é das Estrelas foi adicionado aos seus favoritos', 'success')
  })
}

const alertTrigger3 = document.getElementById('liveAlertBtn3')
if (alertTrigger3) {
  alertTrigger3.addEventListener('click', () => {
    appendAlert('Sucesso! Alice no País das Maravilhas foi adicionado aos seus favoritos', 'success')
  })
}

const alertTrigger4 = document.getElementById('liveAlertBtn4')
if (alertTrigger4) {
  alertTrigger4.addEventListener('click', () => {
    appendAlert('Sucesso! O Diário de Anne Frank foi adicionado aos seus favoritos', 'success')
  })
}

const alertTrigger5 = document.getElementById('liveAlertBtn5')
if (alertTrigger5) {
  alertTrigger5.addEventListener('click', () => {
    appendAlert('Sucesso! O Código Da Vinci foi adicionado aos seus favoritos', 'success')
  })
}


const alertTrigger6 = document.getElementById('liveAlertBtn6')
if (alertTrigger6) {
  alertTrigger6.addEventListener('click', () => {
    appendAlert('Sucesso! A Crônica de Nárnia foi adicionado aos seus favoritos', 'success')
  })
}

const alertTrigger7 = document.getElementById('liveAlertBtn7')
if (alertTrigger7) {
  alertTrigger7.addEventListener('click', () => {
    appendAlert('Sucesso! Cem Anos de Solidão foi adicionado aos seus favoritos', 'success')
  })
}

const alertTrigger8 = document.getElementById('liveAlertBtn8')
if (alertTrigger8) {
  alertTrigger8.addEventListener('click', () => {
    appendAlert('Sucesso! Memórias Póstumas de Brás Cubas foi adicionado aos seus favoritos', 'success')
  })
}
