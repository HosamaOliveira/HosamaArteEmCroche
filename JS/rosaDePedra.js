function navigate(page) {
  switch (page) {
    case 'home':
      location.href = './index.html'
      break
    case 'photos':
      location.href = './fotos.html'
      break
    case 'revenues':
      location.href = './revenues.html'
      break
    case 'videoClasses':
      location.href = './videoClasses.html'
      break
  }
}


















// document.querySelector("#items")
// .addEventListener("whell", event => {
//   if(event.deltaY > 0) {
//     event.target.scrollBy(300,0)
//   } else {
//     event.target.scrollBy(-300, 0)
//   }
// })
