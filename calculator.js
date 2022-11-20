const body = document.querySelector('body');
const cal_cont = document.querySelector('.cal_cont');


const theme_buttons = Array.from(document.querySelectorAll('.theme'));
//console.log(theme_buttons);

const display = document.querySelector('.display');

const cal_btns = Array.from(document.querySelectorAll('.button'));
//constle.log(cal_btns);

//colors
const whiteColor = '#dde1e7';
const navyColor = 'navy';
const goldColor = 'rgb(255,215,0)';
//Box Shadows
const whiteBoxShadow = '-4px -4px 7px #ffffff73,4px 4px 7px rgba(94, 104, 122, .288);';

const navyBoxShadow = '-4px -4px 7px navy,4px 4px 7px rgba(94, 104, 122, .288);';

goldBoxShadow = '-4px -4px 7px gold,4px 4px 7px rgba(94, 104, 122, .288);';


theme_buttons.map(theme_button => {
  theme_button.addEventListener('click', (e) => {
    //targeting each buttons class list
    const target_themes_btn = e.target.classList;
    //checking if the themes button contains the given class list 
    if(target_themes_btn.contains('theme_1')){
      body.style.backgroundColor = whiteColor;
      cal_cont.style.backgroundColor = whiteColor;
      cal_cont.style.boxShadow = whiteBoxShadow;
      //console.log('Im themes 1');
    }else if(target_themes_btn.contains('theme_2')){
      body.style.backgroundColor = navyColor;
      cal_cont.style.backgroundColor = navyColor;
      cal_cont.style.boxShadow = navyBoxShadow;
      //console.log('Im themes 2');
    }else if(target_themes_btn.contains('theme_3')){
      body.style.backgroundColor = goldColor;
      cal_cont.style.backgroundColor = goldColor;
      cal_cont.style.boxShadow = goldBoxShadow;
      //console.log('Im themes 3');
    }
    else{
      console.log('Hello World')
    }
  });
});

cal_btns.map(cal_btn => {
  cal_btn.addEventListener('click', (e) => {
    //console.log(e.target.innerText);
    const target_current_btn = e.target.innerText;
    if(target_current_btn === 'CLR'){
      display.innerText = '';
    }
    else if(target_current_btn === 'DEL'){
      display.innerText = display.innerText.slice(0,-1);
    }
    else if(target_current_btn === '='){
      try{
        display.innerText = eval(display.innerText);
      }catch{
        display.innerText = 'Error!';
      }
    }
    else {
      display.innerText += target_current_btn;
    }
  });
});
