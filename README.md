# 🎬 TMDB Movie Scraper (HTML Scraping sem API)

Bem-vindo ao **TMDB Movie Scraper**, um projeto simples e poderoso que permite buscar filmes diretamente do site **TheMovieDB (TMDB)** sem usar a API oficial — tudo usando apenas **JavaScript**, **Fetch** e **DOMParser**.
Perfeito para estudos, experimentos ou pequenos projetos pessoais! 🚀

---

## ✨ O que este scraper faz?

Ao pesquisar um filme, o script:

✔️ Acessa a busca oficial do TMDB
✔️ Identifica o **primeiro resultado encontrado**
✔️ Abre a página oficial do filme em **pt-BR**
✔️ Extrai automaticamente:

* 🎞️ **Nome do filme**
* 📝 **Sinopse** em português
* ⭐ **Nota** (convertida de porcentagem para escala 0–10)
* 🖼️ **Cartaz (poster oficial)**
* 🔗 **Link para página oficial**

Tudo isso de forma automática e muito rápida.

---

## 🧠 Como funciona por dentro

O fluxo:

1️⃣ Usuário digita o nome do filme
2️⃣ O script monta a URL de busca:

```
https://www.themoviedb.org/search?query=<nome>
```

3️⃣ O HTML é baixado via **CORS bypass (AllOrigins)**
4️⃣ O HTML é convertido em DOM com `DOMParser`
5️⃣ O script identifica o **primeiro resultado .card.v4.tight**
6️⃣ Acessa a página oficial do filme
7️⃣ Extrai:

* `.overview p` (sinopse)
* `.user_score_chart` (nota)
* `.poster img` (poster)

8️⃣ Exibe tudo em um card estilizado na página ✨

---

## 🧩 Tecnologias utilizadas

* **JavaScript Vanilla**
* `fetch()`
* `DOMParser()`
* CDNs para bypass de CORS
* HTML + CSS
* No backend, sem API oficial!

---

## 📸 Demonstração da saída esperada

```
🎬 Interstellar
⭐ Nota: 8.4 / 10
📝 Sinopse:
Um grupo de astronautas viaja através de um buraco de minhoca...
🎞 Cartaz exibido abaixo
🔗 Página oficial: (link)
```

---

## 🗂️ Estrutura do projeto

```
📁 tmdb-scraper/
│
├── index.html      → Interface + campo de busca
└── script.js       → Código responsável pelo scraping
```

---

## 🧪 Como rodar localmente

1. Crie um arquivo `index.html`
2. Insira o HTML + script dentro da página
3. Abra o arquivo no navegador
4. Digite o nome do filme
5. Pronto! 🎉

---

## ⚠️ Aviso importante

Este scraper é **somente para estudo**.
O TMDB não incentiva scraping, e mudanças no HTML podem quebrar o funcionamento.

❗ **Não use este código para fins comerciais ou automatizações em larga escala.**

---

## 🛠️ Possíveis melhorias

* Cache de resultados
* Slider de recomendações
* Dark/light mode
* Exibir elenco e diretor
* Selecionar idioma da página
* Criar API intermediária

Quer que eu implemente alguma dessas melhorias? 😉

---

## 📄 Licença

Este projeto é de uso livre para fins pessoais e educacionais.


