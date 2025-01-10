function increaseScore(teamName){
    const scoreId =`score${teamName}`

    const scoreElement = document.getElementById(scoreId)

    let score = parseInt(scoreElement.textContent)

    scoreElement.textContent = ++score
}

function decreaseScore(teamName){
    const scoreId =`score${teamName}`

    const scoreElement = document.getElementById(scoreId)

    let score = Number(scoreElement.textContent)

    if(score > 0){
        scoreElement.textContent = --score
    }else{
        alert("Score zaten 0'ın altında daha fazla azaltılamaz... ")
    }
}

function setNamePrompt(teamName){
    const name = prompt("Takımın Yeni Adını Giriniz... ")

    document.getElementById(`team${teamName}`).getElementsByTagName("h2")[0].textContent = name
}

function setScorePrompt(teamName){
    const score = prompt("Takımın Yeni Scorunu Giriniz...")

    if(!isNaN(score) && score !== null){
        const scoreNum = parseInt(score)
        if(Number.isInteger(scoreNum) && scoreNum >= 0){
            document.getElementById(`score${teamName}`).textContent = scoreNum
        }else{
            alert("Lütfen Geçerli Bir Değer Giriniz...")
        }
    }else{
        alert("Giriş İptal Edildi...")
    }
}

document.getElementById("resetButtonA").addEventListener("click", function(){
    document.getElementById("scoreA").innerText = "0"
});

document.getElementById("resetButtonB").addEventListener("click", function(){
    document.getElementById("scoreB").innerText = "0"
});