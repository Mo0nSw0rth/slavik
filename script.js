function loadLang(lang) {
    console.log(lang)
    fetch("/lang/" + lang + '.json')
        .then(response => response.json())
        .then(data => {
            for (let key in data) {
                if (key.includes("head.title")) {
                    document.title = data[key]
                    continue
                }
                console.log(key)
                const objects = document.getElementsByClassName(key)
                for (let i = 0; i < objects.length; i++) {
                    objects[i].textContent = data[key];
                }
            }
        })
        .catch(error => {
            console.error('Error loading JSON file:', error);
            loadLang("en")
        });
}

window.addEventListener('load', loadLang("en"));
