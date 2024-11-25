const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});

let btn = document.querySelector(".button");
let randomBtn = document.querySelector("#random-comment"); 
let nameInput = document.querySelector("#name-input");
let textArea = document.querySelector("#comment-text");
let commentsList = document.querySelector("#comments-list");
 
function generateRandomComment() {
    const names = ["Анастасія", "Олександр", "Іван", "Марія", "Петро"];
    const comments = [
        "Це чудово!",
        "Мені дуже подобається!",
        "Дякую за інформацію!",
        "Це не зовсім те, що я очікував.",
        "Я б хотів побачити більше таких матеріалів."
    ];

    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomComment = comments[Math.floor(Math.random() * comments.length)];

    return { name: randomName, comment: randomComment };
}

btn.addEventListener("click", function () {
    setTimeout(() => {
        let name = nameInput.value.trim(); 
        let comment = textArea.value.trim(); 
        if (name !== "" && comment !== "") {
            addComment(name, comment);
            nameInput.value = "";
            textArea.value = "";
        }
    }, 1000);
});


setTimeout(function () {
    const { name, comment } = generateRandomComment();
    addComment(name, comment);
}, 20000);

function addComment(name, comment) {
    let commentBlock = document.createElement('div');
    commentBlock.classList.add('comment-block'); 
    let nameElement = document.createElement('p');
    nameElement.classList.add('comment-name'); 
    nameElement.textContent = `Ім'я: ${name}`;

    let commentElement = document.createElement('p');
    commentElement.classList.add('comment-text');
    commentElement.textContent = `Коментар: ${comment}`;

    commentBlock.appendChild(nameElement);
    commentBlock.appendChild(commentElement);
    commentsList.appendChild(commentBlock);
}