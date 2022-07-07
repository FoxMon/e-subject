const randomName = "FoxMon's friend"

const likeBtn = document.querySelector(".like")
const likeBtn2 = document.querySelector(".like2")
const commentBox = document.querySelector(".card-comment")
const input = document.querySelector(".comment-input")
const sendBtn = document.querySelector(".send")

likeBtn.addEventListener("click", (e) => {
    e.target.style.display = "none"
    likeBtn2.style.display = "block"
})

sendBtn.addEventListener("click", () => {
    const commentContainer = document.createElement("div")
    const username = document.createElement("span")
    const comment = document.createElement("p")

    username.classList.add("comment-username")
    comment.classList.add("comment-text")

    username.innerText = randomName
    comment.innerText = input.value

    commentContainer.appendChild(username)
    commentContainer.appendChild(comment)
    commentBox.appendChild(commentContainer)

    input.value = ""
})
