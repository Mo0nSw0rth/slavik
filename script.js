function loadLang(lang) {
    fetch("/lang/" + lang + '.json')
        .then(response => response.json())
        .then(data => {
            for (let key in data) {
                if (key.includes("head.title")) {
                    document.title = data[key]
                    continue
                }
                const objects = document.getElementsByClassName(key)
                for (let i = 0; i < objects.length; i++) {
                    objects[i].textContent = data[key];
                }
            }
        })
        .catch(error => {
            console.error('Error loading JSON file:', error);
        });
}

window.addEventListener('load', loadLang("en"));
