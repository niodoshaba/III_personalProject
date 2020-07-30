// 3/25 saved

window.addEventListener('load',function(){

  //   點擊購物車彈出左側欄  
    $(function(){
        $("button.headerbtn_shopcar").on("click", function(){
        $("#cardiv").toggleClass("-open");
        });
      });
  //   點擊購物車彈出左側欄
  
  
  // 關閉購物車
      let carclose = document.getElementById('closecar')
      let cardiv = document.getElementById('cardiv')
  
      carclose.addEventListener('click',function(){
        cardiv.classList.toggle('-open')
      })
  // 關閉購物車
  
  
  
  // 漢堡
      var hamburger_icon = document.getElementById("hamburger_icon");
      var hr1 = document.getElementById('hr1')
      var hr2 = document.getElementById('hr2')
      var hr3 = document.getElementById('hr3')
      var menubur = document.getElementsByClassName('menubur')
      var bodylock = document.getElementsByTagName('body')
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

        }
          
        setTimeout(function(){
          burclick = true;
          }, 1000);
        }
      });
    // 漢堡

    //登入註冊切換   

    let login = document.getElementById('login')
    let signup = document.getElementById('signup')
    let logininswitch = document.getElementById('logininswitch')
    let signswitch = document.getElementById('signswitch')
    //登入註冊切換      

    login.addEventListener('click',function(){
        signup.style.borderBottom = '1px solid #e0e0e0'
        signup.style.borderLeft = '1px solid #e0e0e0'
        signup.style.backgroundColor = '#f1f1f1'
        login.style.borderBottom = '0'
        login.style.borderRight = '0'
        login.style.backgroundColor = 'white'
        signswitch.style.display = 'none'
        logininswitch.style.display = 'block'
        
    })

    signup.addEventListener('click',function(){
        login.style.borderBottom = '1px solid #e0e0e0'
        login.style.borderRight = '1px solid #e0e0e0'
        login.style.backgroundColor = '#f1f1f1'
        signup.style.borderBottom = '0'
        signup.style.borderLeft = '0'
        signup.style.backgroundColor = 'white'
        signswitch.style.display = 'block'
        logininswitch.style.display = 'none'
    })

    let sign_account = document.getElementById('sign_account')
    let sign_password = document.getElementById('sign_password')
    let sign_passwordcheck = document.getElementById('sign_passwordcheck')
    let sign_mail = document.getElementById('sign_mail')
    let sign_phone = document.getElementById('sign_phone')

   
    var mail_reg = /^([\w\-]){2,}\@([\w\-])+\.([A-Za-z]{2,4})$/
    var phone_reg = /^09\d{2}\-\d{3}\-\d{3}$/
    var password_reg = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Za-z]{1,}).*$/

    $('#sign_password').blur(function(){
      if(sign_password.value.match(password_reg)){
        sign_password.style.backgroundColor = "rgba(0,200,0,.05)"
      }else{
        sign_password.style.backgroundColor = "rgba(255,0,0,.1)"
      }
    })

    $('#sign_passwordcheck').blur(function(){
      if(sign_passwordcheck.value.match(password_reg)){
        sign_passwordcheck.style.backgroundColor = "rgba(0,200,0,.05)"
      }else{
        sign_passwordcheck.style.backgroundColor = "rgba(255,0,0,.1)"
      }

      if(sign_passwordcheck.value == sign_password.value){
        sign_passwordcheck.style.backgroundColor = "rgba(0,200,0,.05)"
      }else{
        sign_passwordcheck.style.backgroundColor = "rgba(255,0,0,.1)"
      }

      if(sign_passwordcheck.value == ''){
        sign_passwordcheck.style.backgroundColor = "rgba(255,0,0,.1)"
      }
    })

    $('#sign_mail').blur(function(){
      if(sign_mail.value.match(mail_reg)){
        sign_mail.style.backgroundColor = "rgba(0,200,0,.05)"
      }else{
        sign_mail.style.backgroundColor = "rgba(255,0,0,.1)"
      }
    })

    $('#sign_phone').blur(function(){
      if(sign_phone.value.match(phone_reg)){
        sign_phone.style.backgroundColor = "rgba(0,200,0,.05)"
      }else{
        sign_phone.style.backgroundColor = "rgba(255,0,0,.1)"
      }
      });
    })

  
  
  
  
  