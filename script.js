function generateWish() {
    let name = document.getElementById("nameInput").value;

    if (name.trim() === "") {
        alert("Please enter a name!");
        return;
    }

    let message = `
        💗 Happy Birthday ${name}! 💗  
        🎉 Wishing you a day filled with smiles, surprises & happiness! 🎀  
        ✨ Have a beautiful year ahead ✨
    `;

    let output = document.getElementById("output");
    output.innerHTML = message;
    output.classList.remove("hidden");
}
