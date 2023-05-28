// Se valida si el navegador es compatible con los service worker
// Se utlizan las promesas para la validacion
// .then se usa si es validado 
// .catch es si no es validado
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js')
    .then(reg => console.log('Registro de SW exitoso', reg))
    .catch(err => console.warn('Error al tratar de registrar el sw', err))
}