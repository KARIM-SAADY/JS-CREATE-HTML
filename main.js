let main = document.createElement('main')

// add div image

let divimage = document.createElement('div')
divimage.className = 'image'
main.appendChild(divimage)




// add to image (img)

let image = document.createElement("img")
image.src ='/images/illustration-hero.svg'
divimage.appendChild(image)




//  add div text 

let textHoom = document.createElement('div')
textHoom.className = 'text'
main.appendChild(textHoom)



// add to div text 
let h1 =document.createElement ('h1')
h1.textContent= "Order Summary"
textHoom.appendChild(h1);


let p1 = document.createElement('p')
p1.textContent='You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!'
textHoom.appendChild(p1)




// add div container

let contn = document.createElement('div')
contn.className = 'container'
main.appendChild(contn)



// add div to container


let img2 = document.createElement('img')
img2.src='/icon-music.svg'
contn.appendChild(img2)


let txt_1 = document.createElement('div')
txt_1.className = 'text-1'
contn.appendChild(txt_1)

let a = document.createElement('a')
a.textContent = 'Change'
contn.appendChild(a)


// add to div txt_1
let h2 =document.createElement ('h2')
h2.textContent= "Annual Plan"
txt_1.appendChild(h2);



let p2 = document.createElement('p')
p2.textContent='$59.99/year'
txt_1.appendChild(p2)





// add div btn

let btn = document.createElement('div')
btn.className ='button'
main.appendChild(btn)


// add to div btn

let btn1 = document.createElement('input')
btn1.className = 'button-1'
btn1.type ='submit'
btn1.value = "Proceed to Payment"
btn.appendChild (btn1)


let btn2 = document.createElement('input')
btn2.className = 'button-2'
btn2.type ='submit'
btn2.value = "Cancel Order"
btn.appendChild (btn2)




document.body.appendChild(main)





