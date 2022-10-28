/*//generate rgb background
//steps
//steps 1 : onload handler
//steps 2 : rgbcolor color generate function
//steps 3 : collect all necessary data
//steps 4 : add click event*/

//steps 1
window.onload = function (){
    main();
}
function main(){
    //steps 3
    let background = document.querySelector('.main');
    let chngbtn = document.querySelector('.chng-btn');
    let copyBtn = document.querySelector('.copy-btn');
    let input = document.querySelector('.hex-input');

    //steps 4
    chngbtn.addEventListener('click',function (){
        let BgColor = ChangeRGBBg();
        background.style.backgroundColor = BgColor;
        input.value = BgColor;
    })
    copyBtn.addEventListener('click',function (){
        navigator.clipboard.writeText(input.value);
    })
}

//steps 2
function ChangeRGBBg(){
    //rgb colors number starts 0 - 255 like rgb(0,23,255)
    const red = Math.floor( Math.random() * 255);
    const green = Math.floor( Math.random() * 255);
    const blue = Math.floor( Math.random() * 255);

    return `rgb(${red},${green},${blue})`
}