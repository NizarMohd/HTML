// language=HTML format=false
const greetings  = `Hello World.<br /> My name is Jennifer.<br />  What is your name?<br />`;
const blah =  'blah blah blah<br />';
let status = 'display';
let faceStatus = 'sad';
let greetingStatus = 'blah';

function clickMeBehaviour() {
    if(status === 'none'){
        document.getElementById('demo').style.display = 'block';
        document.getElementById('demo').innerHTML = blah ;
        status = 'display';
    } else {
        if (greetingStatus === 'blah') {
            document.getElementById('demo').innerHTML = greetings;
            greetingStatus = 'greetings';
        } else {
            document.getElementById('demo'). innerHTML = blah;
            greetingStatus = 'blah';
        }
    }
}

function iCantRead() {
    document.getElementById('demo').style.fontSize = '35px'
}

function small() {
    document.getElementById('demo').style.fontSize = '12px';
}

function originalSize() {
    document.getElementById('demo').style.fontSize = '16px'
}

function hide() {
    document.getElementById('demo').style.display = 'none';
    status = 'none';
}

function display() {
    document.getElementById('demo').style.display = 'block';
    status = 'display';
}

function setVisibility() {
    if(status === 'display') {
        hide();
        document.getElementById('displayButton').innerText = 'display the text!' ;
    } else {
        document.getElementById('displayButton').innerText = 'hide the text!';
        display();
    }
}

function makeMeHappy() {
    document.getElementById('untitled').src = 'images/Untitled2.png';
    faceStatus = 'happy';
}
function makeMeSad() {
    document.getElementById('untitled').src = 'images/Untitled.png';
    faceStatus = 'sad'
}

function changeFace() {
    if(faceStatus === 'sad') {
        makeMeHappy();
        document.getElementById('face').innerText = 'Click Me to make me sad!';
    } else {
        makeMeSad();
        document.getElementById('face').innerText = 'Click Me to make me happy!';
    }
}