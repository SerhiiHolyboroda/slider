 
 let slider = document.querySelector('.slider')
 let arr = []
//  slider.style.backgroundImage = "url('img/1_jFyawcsqoYctkTuZg6wQ1A.jpeg')"
 for (let i = 1 ; i<10 ; i++ ){
      
//       arr[i] =  document.querySelector(`#inlineRadio${i}`)
       arr[i] =  `#inlineRadio${i}`
     console.log(`#inlineRadio${i}`)
 }
document.querySelector(`${arr[1]}`).checked = true;
let img = ["url('img/img1.jpeg')" , "url('img/img3.jpg')" , "url('img/img3.jpeg')", "url('img/img4.jpg')", "url('img/img5.jpg')",
          "url('img/img6.jpg')", "url('img/img7.jpg')" , "url('img/img8.jpg')" , "url('img/img9.jpg')"        ]
 
  for (let i = 1 ; i<arr.length ; i++ ){   
if(document.querySelector(`${arr[i]}`).checked = true) {
    slider.style.backgroundImage = img[i];
}
      
  }
let time1 = setInterval(function(){
     let n = Math.random()*0|9
      slider.style.backgroundImage = img[n];
 },1000)
// let but1 = document.querySelector('.btn3') !
//   but1.addEventListener('click' , function(){ !
//        slider.style.backgroundImage = img[i]; !
//       });
//   let but2 = document.querySelector('.btn3')
//   but2.addEventListener('click' , function(){
//       });
//    
   let but3 = document.querySelector('.btn3')
but3.addEventListener('click' , function(){
 let time1 = setInterval(function(){
     let n = (Math.random() * 9 | 0) 
      slider.style.backgroundImage = img[n];
 },2000)
    
});









document.querySelector(`${arr[1]}`).addEventListener('click', function(e) {
            
        slider.style.backgroundImage = "url('img/img1.jpeg')"
      });
     document.querySelector(`${arr[2]}`).addEventListener('click', function(e) {
        slider.style.backgroundImage = "url('img/img2.jpg')"
      });
     document.querySelector(`${arr[3]}`).addEventListener('click', function(e) {
        slider.style.backgroundImage = "url('img/img3.jpeg')"
      });
     document.querySelector(`${arr[4]}`).addEventListener('click', function(e) {
        slider.style.backgroundImage = "url('img/img4.jpg')"
      });
     document.querySelector(`${arr[5]}`).addEventListener('click', function(e) {
        slider.style.backgroundImage = "url('img/img5.jpg')"
      });
     document.querySelector(`${arr[6]}`).addEventListener('click', function(e) {
        slider.style.backgroundImage = "url('img/img6.jpg')"
      });
     document.querySelector(`${arr[7]}`).addEventListener('click', function(e) {
        slider.style.backgroundImage = "url('img/img7.jpg')"
      });
     document.querySelector(`${arr[8]}`).addEventListener('click', function(e) {
        slider.style.backgroundImage = "url('img/img8.jpg')"
      });
     document.querySelector(`${arr[9]}`).addEventListener('click', function(e) {
        slider.style.backgroundImage = "url('img/img9.jpg')"
      });
//  
// let buttons = document.querySelector('#') // get the buttons
     
     
     
     
     
//for (let i = 1; i < buttons.length; i++) { // loop over them
//  buttons[i].addEventListener('click', function(e) {
//      alert(';fsdfsfs')
//   slider.style.backgroundImage = "url('img/1_jFyawcsqoYctkTuZg6wQ1A.jpeg')"
//  }); // add event listener to each one
//}
