async function loadProfiles() {
    const userName = document.getElementById("username").value;
    if (!userName) {
        alert("Voce precisa digitar um usuario!");
        return;
    }

    const response = await fetch(`https://api.github.com/users/${userName}`);
    const user = await response.json();

    const profileElement = document.createElement("div");
    profileElement.classList.add("profile-item");
    profileElement.innerHTML = `
    <img src="${user.avatar_url}" />
    <h2>${user.name || user.login}</h2>
    <p>${user.bio}</p>
    `;

    const profiles = document.getElementById("profiles");
    profiles.appendChild(profileElement)

}