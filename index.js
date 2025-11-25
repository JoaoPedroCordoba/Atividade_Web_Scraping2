const CORS = "https://api.allorigins.win/raw?url=";
const SEARCH_URL = "https://www.themoviedb.org/search?query=";
const FILME_BASE = "https://www.themoviedb.org";

const output = document.getElementById("output");
const card = document.getElementById("resultado-card");
const input = document.getElementById("filme-input");

function log(msg) {
    output.textContent += msg + "\n";
}

async function fetchHTML(url) {
    const resposta = await fetch(CORS + encodeURIComponent(url));
    return new DOMParser().parseFromString(await resposta.text(), "text/html");
}

async function scrapeBusca(termo) {
    log("Buscando filme: " + termo);

    const urlBusca = SEARCH_URL + encodeURIComponent(termo);
    const docBusca = await fetchHTML(urlBusca);

    const primeiro = docBusca.querySelector(".search_results .card.v4.tight");

    if (!primeiro) {
        log("Nenhum resultado encontrado.");
        card.innerHTML = "<strong>Filme não encontrado</strong>";
        return;
    }

    const linkEl = primeiro.querySelector("a");
    const nome = linkEl.textContent.trim();
    const link = FILME_BASE + linkEl.getAttribute("href");

    log("Filme encontrado: " + nome);
    log("Indo para página do filme (pt-BR)...");

    const docFilme = await fetchHTML(link + "?language=pt-BR");

    const sinopse = docFilme.querySelector(".overview p")?.textContent.trim() || "Sinopse não encontrada";
    const notaBruta = docFilme.querySelector(".user_score_chart")?.getAttribute("data-percent") || "N/A";
    const nota = notaBruta !== "N/A" ? (parseFloat(notaBruta) / 10).toFixed(1) : "N/A";

    // EXTRAÇÃO DO CARTAZ
    const imgEl = docFilme.querySelector(".image_content img") 
               || docFilme.querySelector(".poster img");

    const poster = imgEl ? imgEl.src : "";

    card.innerHTML = `
        <img id="poster" src="${poster}" alt="Cartaz do filme">

        <div>
            <strong style="font-size: 1.4em;">${nome}</strong>

            <p><b>Nota:</b> ${nota} / 10</p>

            <p><b>Sinopse:</b> ${sinopse}</p>

            <p><a href="${link}" target="_blank">Página oficial</a></p>
        </div>
    `;
}

function iniciarBusca() {
    output.textContent = "";
    if (input.value.trim().length === 0) {
        alert("Digite o nome de um filme!");
        return;
    }
    scrapeBusca(input.value);
}