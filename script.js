const markAllButton = document.getElementById('mark-all');
const numberOFNotofications = document.getElementById('number');
const redDots = document.querySelectorAll('.red-dot');
const unreadChats = document.querySelectorAll('#unread');

const markAll = () => {
    for (const redDot of redDots) {
        redDot.classList.toggle('unread');
        if (redDot.classList.contains('unread')){
            numberOFNotofications.textContent = '3';
        }else{
            numberOFNotofications.textContent = '0';
        }
    }
    for (const chat of unreadChats) {
        chat.classList.toggle('unread');
    }
}

markAllButton.addEventListener('click', markAll);