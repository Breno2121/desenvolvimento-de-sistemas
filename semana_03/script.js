async function loadProfile() {
    const userName = document.getElementById("username").value;
    if (!userName) {
        alert("Voce precisa digitar um usuario!");
        return;
    }

    const response = await fetch(`https://api.github.com/users/${userName}`, {
        method: 'GET'
    })

    const user = await response.json();

    const profiles = document.getElementById("profiles");
    const profileElement = document.createElement("div")
    profileElement.classList.add("profile-item");
    profileElement.innerHTML = `<img src"" />
    <h2>Breno</h2>
    `;

    profiles.appendChild(profileElement)

}