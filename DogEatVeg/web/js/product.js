// 3/25 saved

window.addEventListener('load',function(){

  let cardimg = document.getElementsByClassName('cardimg')
  let lightbox_out = document.getElementById('lightbox_out')
  let lightbox_in = document.getElementById('lightbox_in')
  let close = document.getElementById("close")
  let lightbox_right = document.getElementsByClassName("lightbox_right")
  var bodylock = document.getElementsByTagName('body')
  let lightbox_product = ['彩虹雞胸乾','菠菜雞胸乾','南瓜雞胸乾','胡蘿蔔雞胸乾','彩虹雞胸乾','菠菜雞胸乾','南瓜雞胸乾','胡蘿蔔雞胸乾']
  let lightbox_title = document.getElementById('lightbox_title')
  let lightbtn = document.getElementById('lightbtn')
  

  let carclose = document.getElementById('closecar')
  let cardiv = document.getElementById('cardiv')

  let incarout = document.getElementById('incarout')
  let delincar = document.getElementsByClassName('delincar')
  let incar = document.getElementsByClassName('incar')

  let atchint = document.getElementById('atchint');
  let atc = document.getElementsByClassName('atc')
  let atc1 = document.getElementsByClassName('atc1')


// AOS彈出
$(function(){
  AOS.init();
});
// AOS彈出

   //   點擊購物車彈出左側欄  
  $(function(){
    $("button.headerbtn_shopcar").on("click", function(){
    $("#cardiv").toggleClass("-open");
    });
  });
//   點擊購物車彈出左側欄


// 關閉購物車
  carclose.addEventListener('click',function(){
  cardiv.classList.toggle('-open')
  })
// 關閉購物車


// 加入購物車創造商品div

for(let i=0;i<atc.length;i++){
    atc[i].addEventListener('click',function(){
        let atccount = this.dataset.atcnum
        // console.log(atccount)
        incarout.innerHTML += `
        <div class="incar" id='incar${atccount}'>
          <div class="delincar" data-delnum="${atccount-1}">&times</div>
          <img src="./img/Heybogua/ch${atccount}.png" alt="">
          <div class="incartext">
            <span>${lightbox_product[atccount-1]}</span><br><span>NT$130 &times; 1 </span>
          </div>
        </div>
        `
        
        // console.log(incar)
        // 刪除購物車內商品
        for(let j=0;j<delincar.length;j++){
            delincar[j].addEventListener('click',function(){
                // let delcount = this.dataset.delnum
                // console.log(delcount)
                // a = delincar[j].parentNode
                // a.parentNode.removeChild(a)
                // console.log(delincar[j].parentNode)
                // incarout.removeChild(incar[delcount])
                // console.log(document.getElementById('incarout').childNodes(document))
                $(this).parent().remove()
                if(incar.length == 0){
                  atchint.style.opacity = '0'
                }
            })
        }
        // 刪除購物車內商品

        if(incar.length == 0){
          atchint.style.opacity = '0'
        }else{
          atchint.style.opacity = '1'
        }

    })
}


// 加入購物車創造商品div


//  點擊加入購物車出現圓點 



for(let i=0;i<atc.length;i++){
  atc[i].addEventListener('click',function(){

    alert('已加入購物車!')
  })
}

//  點擊加入購物車出現圓點   




// 燈箱

    


    for(var i=0;i<cardimg.length;i++){
        cardimg[i].addEventListener("click",lightbox)
    }

    function lightbox(){
        lightbox_out.classList.toggle("-lightboxopen")
        lightbox_in.classList.toggle("-lightboxopen2")

        let lightbox_count = this.dataset.cardnumber;

        // console.log(lightbox_count)
        lightbox_pic.src = `./img/Heybogua/ch${lightbox_count}.png`
        lightbox_title.innerText = lightbox_product[lightbox_count-1];
        lightbtn.innerHTML += `
        <div class="cart atc1" data-atc1num="${lightbox_count}">加入購物車</div>
        <div class="takebill">直接結帳</div>`

        for(let i=0;i<atc1.length;i++){
          atc1[i].addEventListener('click',function(){
            atchint.style.opacity = '1'
            alert('已加入購物車!')
            let atc1count = this.dataset.atc1num
            // console.log(atccount)
            incarout.innerHTML +=
            `
            <div class="incar" id='incar${atc1count}'>
              <div class="delincar" data-delnum="${atc1count-1}">&times</div>
              <img src="./img/Heybogua/ch${atc1count}.png" alt="">
              <div class="incartext">
                <span>${lightbox_product[atc1count-1]}</span><br><span>NT$130 &times; 1 </span>
              </div>
            </div>
            `
            for(let j=0;j<delincar.length;j++){
              delincar[j].addEventListener('click',function(){
                  $(this).parent().remove()
                  if(incar.length == 0){
                    atchint.style.opacity = '0'
                  }
              })
          }
          if(incar.length == 0){
            atchint.style.opacity = '0'
          }else{
            atchint.style.opacity = '1'
          }
          })
        }
        
        // console.log(lightbox_title[lightbox_count-1])


        close.style.display = "block"
        lightbox_right[0].style.display = "block"
        if(innerWidth <= 1024 ){
          bodylock[0].classList.toggle("-bodylock")
          }
    }

    close.addEventListener("click",function(){
        lightbox_out.classList.toggle("-lightboxopen")
        lightbox_in.classList.toggle("-lightboxopen2")
        close.style.display = "none"
        lightbox_right[0].style.display = "none"

        $(lightbtn).children().remove()

        if(innerWidth <= 1024 ){
          bodylock[0].classList.toggle("-bodylock")
          }
    });
    
// 燈箱

// HOVER出現購物車動畫


// HOVER出現購物車動畫

// 漢堡
var hamburger_icon = document.getElementById("hamburger_icon");
var hr1 = document.getElementById('hr1')
var hr2 = document.getElementById('hr2')
var hr3 = document.getElementById('hr3')
var menubur = document.getElementsByClassName('menubur')
var bodylock = document.getElementsByTagName('body')


// var tlmax = new TimelineMax({});
var burclick = true;

hamburger_icon.addEventListener("click", function(){
  
  if(burclick){
    burclick= false;
    
    
  hr1.classList.toggle("-on1")
  hr2.classList.toggle("-on2")
  hr3.classList.toggle("-on3")
  menubur[0].classList.toggle("-on4")

  if(innerWidth <= 768 ){
  bodylock[0].classList.toggle("-bodylock")

    TweenMax.from('.menup1', .5, {
    x: 500,
    ease: Expo.easeOut,
    });
    TweenMax.from('.menup2', .5, {
    x: -500,
    delay:0.1,
    ease: Expo.easeOut,
    });
    TweenMax.from('.menup3', .5, {
    x: 500,
    delay:0.15,
    ease: Expo.easeOut,
    });
    TweenMax.from('.menup4', .5, {
    x: -500,
    delay:0.2,
    ease: Expo.easeOut,
    });
    TweenMax.from('.menup5', .5, {
    x: 500,
    delay:0.25,
    ease: Expo.easeOut,
    });
    TweenMax.from('.menup6', .5, {
    x: -500,
    delay:0.3,
    ease: Expo.easeOut,
    });
    TweenMax.from('.menup7', .5, {
    x: 500,
    delay:0.35,
    ease: Expo.easeOut,
    });
    TweenMax.from('.menup8', .5, {
    x: -500,
    delay:0.4,
    ease: Expo.easeOut,
    });
    TweenMax.from('.menup9', .5, {
    x: 500,
    delay:0.45,
    ease: Expo.easeOut,
    });



//   tlmax.from('.menup1', .1, {
//     x: 500,
//     ease: Bounce.easeOut,
// }).from('.menup2', .1, {
//     x: -500,
//     ease: Bounce.easeOut,
// }).from('.menup5', .1, {
//     x: 500,
//     ease: Bounce.easeOut,
// }).from('.menup4', .1, {
//     x: -500,
//     ease: Bounce.easeOut,
// }).from('.menup5', .1, {
//     x: 500,
//     ease: Bounce.easeOut,
// }).from('.menup6', .1, {
//     x: -500,
//     ease: Bounce.easeOut,
// }).from('.menup7', .1, {
//     x: 500,
//     ease: Bounce.easeOut,
// }).from('.menup8', .1, {
//     x: -500,
//     ease: Bounce.easeOut,
// }).from('.menup9', .1, {
//     x: 500,
//     ease: Bounce.easeOut,
// })

  }
    
  setTimeout(function(){
    burclick = true;
        }, 1000);
      }
});
// 漢堡
    });
