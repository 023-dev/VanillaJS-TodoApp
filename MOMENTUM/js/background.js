// myTestCode
// function backgroundImage(){
//     const randomInt = Math.floor(Math.random() * (8));
//     const imageNmae = 'image/'+ String(randomInt) + '.jpg'
//     document.body.style.backgroundImage = "url("+imageNmae+")";
//     console.log(`../image/${randomInt}.jpg`);
// }
// backgroundImage()
// setInterval(backgroundImage, 3000)

const imageNames = ["0.jpg","1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg"]
const chosenImage = imageNames[Math.floor(Math.random() * (imageNames.length-1))]
const bgImage = document.createElement("img")

bgImage.src = `image/${chosenImage}`
bgImage.style.backgroundSize = "cover"
document.body.appendChild(bgImage)
