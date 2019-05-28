console.log('Javascript is working!');

let activeUser = 'red';
document.getElementById('message').innerHTML = activeUser;

const toggle = function(currentUser) {
    if(currentUser === 'red') { 
        return 'yellow';
    } else {
        return 'red';
    }
}

function toggleUser() {
    activeUser = toggle(activeUser);
    document.getElementById('message').innerHTML = activeUser;
}