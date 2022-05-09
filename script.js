let container = document.createElement('div')
container.className = 'container'
document.body.append(container)

let wrapp = document.createElement('div')
wrapp.className = 'wrapper'
container.append(wrapp)

let textarea = document.createElement('textarea');
textarea.id = "textarea";
textarea.rows = "10";
textarea.cols = "30";
textarea.autofocus = true;
wrapp.append(textarea);

const keysArr = [
    ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace"],
    ["Tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[", "]", "\\"],
    ["CapsLock", "A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "&#39", "Enter"],
    ["ShiftLeft", "Z", "X", "C", "V", "B", "N", "M", ",", ".", "/", "▲", "ShiftRight"],
    ["CtrlLeft", "Win", "AltLeft", " ", "AltRight", "◀", "▼", "▶", "CtrlRight"]
]


function createKeyboard(){
    let keyboardContainer = document.createElement('div')
    keyboardContainer.className = 'keyboard_container'
    wrapp.append(keyboardContainer)

    for(let i=0; i<keysArr.length; i++){
        let row = document.createElement('div');
        row.className = 'row';
        keyboardContainer.append(row);
        for(let j=0; j<keysArr[i].length; j++){
            let content
            let key = document.createElement('div');
            key.classList ='key'
            key.innerHTML = keysArr[i][j]
            content = key.innerHTML
            row.append(key)
            if(key.textContent === "Backspace"){
                key.classList.add('backspace')
                content = '';
                key.addEventListener('mousedown', ()=>{
                        textarea.value = textarea.value.slice(0, -1)
                })
            }
            if(key.textContent === "Tab"){
                key.classList.add('tab')
                content = '\t'
            }
            if(key.textContent === "CapsLock"){
                key.classList.add('capsLk')
                content = '';
                key.addEventListener('click', ()=> capsOn(key))
            }
            if(key.textContent === "Enter"){
                key.classList.add('enter')
                content = '\n'
            }
            if(key.textContent === "ShiftLeft"){
                key.classList.add('shift_left')
                key.textContent = 'Shift'
                content = '';
            }
            if(key.textContent === "ShiftRight"){
                key.classList.add('shift_right')
                key.textContent = 'Shift'
                content = '';
            }
            if(key.textContent === "▲"){
                key.classList.add('arrow_up')
            }
            if(key.textContent === "CtrlLeft"){
                key.classList.add('ctrl_left')
                key.textContent = 'Ctrl'
                content = '';
            }
            if(key.textContent === "CtrlRight"){
                key.classList.add('ctrl_right')
                key.textContent = 'Ctrl'
                content = '';
            }
            if(key.textContent === "Win"){
                key.classList.add('win')
                content = '';
            }
            if(key.textContent === "AltLeft"){
                key.classList.add('alt_left')
                key.textContent = 'Alt'
                content = '';
            }
            if(key.textContent === "AltRight"){
                key.classList.add('alt_right')
                key.textContent = 'Alt'
                content = '';
            }
            if(key.textContent === " "){
                key.classList.add('space')
            }
            if(key.textContent === "◀"){
                key.classList.add('arrow_left')
            }
            if(key.textContent === "▼"){
                key.classList.add('arrow_down')
            }
            if(key.textContent === "▶"){
                key.classList.add('arrow_right')
            }
            key.addEventListener('mousedown', ()=> this.mouseDown(key,content))
            key.addEventListener('mouseup', ()=> this.mouseUp(key))
        }
        
    }
    
}
createKeyboard()

function capsOn(key){
    key.classList.toggle('active')             
}
const caps = document.querySelector('.capsLk');

function mouseDown(key,content){
    if(event.type === 'mousedown' && key.textContent !== "CapsLock"){
        key.classList.add('active')
        if(caps.classList.contains('active')){
            textarea.value += content.toUpperCase()
        }else{
            textarea.value += content.toLowerCase()
        }
    }
    textarea.focus();
    
}

function mouseUp(key){
    if(event.type === 'mouseup' && key.textContent !== "CapsLock"){
        key.classList.remove('active')
    }
    textarea.focus();
}


const space = document.querySelector('.space');
const keys = document.querySelectorAll('.key');
const tab = document.querySelector('.tab');
const backspace = document.querySelector('.backspace');
const shiftLf = document.querySelector('.shift_left');
const shiftRg = document.querySelector('.shift_right');
const ctrlLf = document.querySelector('.ctrl_left');
const ctrlRg = document.querySelector('.ctrl_right');
const altLf = document.querySelector('.alt_left');
const altRg = document.querySelector('.alt_right');
const win = document.querySelector('.win');
const enter = document.querySelector('.enter');
const arrow_up = document.querySelector('.arrow_up');
const arrow_down = document.querySelector('.arrow_down');
const arrow_left = document.querySelector('.arrow_left');
const arrow_right = document.querySelector('.arrow_right');

function activeKeysOnKeyboard(){
    for(let i =0;i<keys.length;i++){
        if ( keys[i] != caps &&
            keys[i] != space &&
            keys[i] != tab &&
            keys[i] != backspace &&
            keys[i] != shiftLf &&
            keys[i] != shiftRg &&
            keys[i] != ctrlLf &&
            keys[i] != ctrlRg &&
            keys[i] != altLf &&
            keys[i] != altRg &&
            keys[i] != win &&
            keys[i] != enter &&
            keys[i] != arrow_up &&
            keys[i] != arrow_down &&
            keys[i] != arrow_left &&
            keys[i] != arrow_right ){
                keys[i].setAttribute('keyname', keys[i].innerText);
                keys[i].setAttribute('lowerName', keys[i].innerText.toLowerCase());
    }
    }
    
    window.addEventListener('keydown',function(el){
    for(let i =0;i<keys.length;i++){
        if(el.key == keys[i].getAttribute('keyname') || el.key == keys[i].getAttribute('lowerName')){
            keys[i].classList.add('active');
        }
    }
    if(el.code == 'CapsLock'){
        caps.classList.toggle('active');
    }if(el.code =='Space'){
        space.classList.add('active');
    }if(el.code == 'Tab'){
        el.preventDefault()
        textarea.value += '\t'
        tab.classList.add('active');
    }if(el.code == 'Backspace'){
        backspace.classList.add('active');
    }if (el.code == 'ShiftLeft'){
        shiftLf.classList.add('active');
    }if (el.code == 'ShiftRight'){
        shiftRg.classList.add('active');
    }if (el.code == 'ControlLeft'){
        el.preventDefault();
        ctrlLf.classList.add('active');
    }if (el.code == 'ControlRight'){
        el.preventDefault();
        ctrlRg.classList.add('active');
    }if (el.code == 'AltLeft'){
        el.preventDefault();
        altLf.classList.add('active');
    }if (el.code == 'AltRight'){
        el.preventDefault();
        altRg.classList.add('active');
    }if (el.code == 'MetaLeft'){
        win.classList.add('active');
    }if (el.code == 'ArrowUp'){
        el.preventDefault();
        arrow_up.classList.add('active');
        textarea.value += '▲';
    }if (el.code == 'ArrowLeft'){
        el.preventDefault();
        arrow_left.classList.add('active');
        textarea.value += '◀';
    }if (el.code == 'ArrowDown'){
        el.preventDefault();
        arrow_down.classList.add('active')
        textarea.value += '▼';
    }if (el.code == 'ArrowRight'){
        el.preventDefault();
        arrow_right.classList.add('active')
        textarea.value += '▶';
    }
    })
    
    window.addEventListener('keyup',function(el){
    for(let i =0;i<keys.length;i++){
        if(el.key == keys[i].getAttribute('keyname') || el.key == keys[i].getAttribute('lowerName')){
            keys[i].classList.remove('active');
        }
    }
    if(el.code =='Space'){
        space.classList.remove('active');
    }if(el.code == 'Tab'){
        tab.classList.remove('active');
    }if(el.code == 'Backspace'){
        backspace.classList.remove('active');
    }
    if (el.code == 'ShiftLeft'){
        shiftLf.classList.remove('active');
    }if (el.code == 'ShiftRight'){
        shiftRg.classList.remove('active');
    }if (el.code == 'ControlLeft'){
        el.preventDefault()
        ctrlLf.classList.remove('active');
    }if (el.code == 'ControlRight'){
        el.preventDefault()
        ctrlRg.classList.remove('active');
    }if (el.code == 'AltLeft'){
        el.preventDefault()
        altLf.classList.remove('active');
    }if (el.code == 'AltRight'){
        el.preventDefault()
        altRg.classList.remove('active');
    }if (el.code == 'MetaLeft'){
        win.classList.remove('active');
    }if (el.code == 'ArrowUp'){
        arrow_up.classList.remove('active');
    }if (el.code == 'ArrowLeft'){
        arrow_left.classList.remove('active');
    }if (el.code == 'ArrowDown'){
        arrow_down.classList.remove('active')
    }if (el.code == 'ArrowRight'){
        arrow_right.classList.remove('active')
    }
    })
    }

window.onload = function(){
    activeKeysOnKeyboard()
}
window.addEventListener('mouseup', ()=>{
    textarea.focus();
})