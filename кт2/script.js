document.addEventListener("DOMContentLoaded", () => {
    const f = document.forms[0];
    let t = document.querySelector("#table tbody");

    if (!t) {
        console.error("Таблица не найдена!");
        return;
    }

    f.addEventListener("submit", (e) => {
        e.preventDefault();
        let body = {};
        for (let i = 0; i < f.elements.length; i++) {
            let tag = f[i];
            if (tag.name) {
                if (tag.type === "radio" && tag.checked) {
                    body[tag.name] = tag.value;
                } else if (tag.type !== "radio") {
                    body[tag.name] = tag.value;
                }
            }
        }
        console.log(body);
        let html = `<tr>
            <td><img src="${body.image}" width="50" alt="${body.title}"></td>
            <td>${body.title || ""}</td>
            <td>${body.sort || ""}</td>
            <td>${body.strength || ""}</td>
            <td>${body.cost || ""}</td>
            <td>${body.description || ""}</td>
        </tr>`;
        t.innerHTML += html;
        
        // Очистка полей формы после добавления
        f.reset();

        
        console.log("Сорт:", body.sort);
        console.log("Крепкость:");

    });
});
