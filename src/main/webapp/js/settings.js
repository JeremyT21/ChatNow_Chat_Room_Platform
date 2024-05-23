function changeColor(alpha){
    //checks which button was pressed and saves the info
    if(alpha==='y'){
        sessionStorage.setItem('backgroundType', 'color');
        sessionStorage.setItem('backgroundColor', '#a0aa18');
        applyBackgroundColor(alpha);
    }
    else if(alpha==='p'){
        sessionStorage.setItem('backgroundType', 'color');
        sessionStorage.setItem('backgroundColor', '#490985');
        applyBackgroundColor(alpha);
    }
    else if(alpha==='g'){
        sessionStorage.setItem('backgroundType', 'color');
        sessionStorage.setItem('backgroundColor', '#11ad2b');
        applyBackgroundColor(alpha);
    }
    else if(alpha==='s'){
        sessionStorage.setItem('backgroundType', 'image');
        applyBackgroundColor(alpha);
    }
    else if(alpha==='random'){
        let hex = document.getElementById('colorInput');
        hex = hex.value;
        if(hex.length > 5)
        {
            sessionStorage.setItem('backgroundType', 'color');
            sessionStorage.setItem('backgroundColor', hex);
            applyBackgroundColor(hex);
        }
    }
    // enter key event for user color choice
    document.getElementById("colorInput").addEventListener("keyup", sendingColorMessage);
}

// checks enter key for own color choice
function sendingColorMessage(event) {
    if (event.key === "Enter") {
        changeColor('random');
    }
}


function applyBackgroundColor(a) {
    //takes the stored info from the buttons and applies corresponding styles
    sessionStorage.setItem('a', a);
    const backgroundType = sessionStorage.getItem('backgroundType');
    const header = document.querySelector('.header');
    const rooms = document.querySelector('.room-list');
    const chatrooms = document.querySelector('#roomListMenu');
    if (backgroundType === 'color') {
        const color = sessionStorage.getItem('backgroundColor');
        header.style.backgroundImage = 'none';
        header.style.backgroundColor = color;
        rooms.style.backgroundImage = 'none';
        rooms.style.backgroundColor = color;
        if(a==='y' || a==='g'){
            //if yellow or green sets stuff to black
            header.style.color = '#000000';
            chatrooms.style.color = '#000000';
            chatrooms.style.borderColor = '#000000';
        }
        else if (a==='p' || a==='s'){
            //if purple or space sets stuff to white/grey
            header.style.color = '#fff';
            chatrooms.style.color = '#c4c4c4';
            chatrooms.style.borderColor = '#c4c4c4';
        }
        else{
            //this is where user color occurs
            if('#400000' > a){
                //applies white if color is darker than certain amount
                header.style.color = '#fff';
                chatrooms.style.color = '#000000';
                chatrooms.style.borderColor = '#000000';
            }
            else{
                //if lighter than amount sets to black/grey
                header.style.color = '#000000';
                chatrooms.style.color = '#c4c4c4';
                chatrooms.style.borderColor = '#c4c4c4';
            }
        }
    } else if (backgroundType === 'image') {
        //used for setting space images
        header.style.backgroundColor = '#000000';
        header.style.color = '#fff';
        header.style.backgroundImage = "url(img/titlebackground.png)";
        rooms.style.backgroundImage = "url(img/roomlistbackground.png)";
    }
}

//calls function on load
applyBackgroundColor(sessionStorage.getItem('a'));