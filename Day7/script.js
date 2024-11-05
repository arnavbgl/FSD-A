document.addEventListener("DOMContentLoaded", () => {
    async function fetchdata() {
        try {
            let response = await fetch("https://api.github.com/users?per_page=10");
            let data = await response.json();
            data.forEach((element) => {
                let h1 = document.createElement("h1");
                h1.textContent = element.login;
                let a = document.createElement("a");
                a.textContent = element.html_url;
                a.setAttribute("href", element.html_url);
                a.setAttribute("target", "_blank"); // opens link in new tab
                let top = document.getElementById('top');
                top.appendChild(h1);
                top.appendChild(a);
            });
        } catch (error) {
            console.log(error);
        }
    }

    // Mode toggle
    let modeButton = document.getElementById("mode");
    modeButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        modeButton.textContent = document.body.classList.contains("dark-mode") ? "🌞" : "🌙";
    });

    fetchdata();
});
