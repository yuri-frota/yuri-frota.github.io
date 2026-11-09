# Academic website — Yuri Frota

Modern, static website for GitHub Pages. No build tools, frameworks or hosting fees required.

## Publish
1. Extract this ZIP.
2. Upload the contents of the extracted folder (not the folder itself) to the **root** of the `yuri-frota.github.io` GitHub repository.
3. Commit the changes to the branch used by GitHub Pages (usually `main`).
4. Go to GitHub repository **Settings → Pages** and confirm **Deploy from a branch** / `main` / `/ (root)`.
5. Visit https://yuri-frota.github.io/ after GitHub finishes publishing.

## Edit
- `index.html`: landing page, featured research.
- `ap.html`: research, datasets, downloads.
- `cv.html`: publications (search and year filters).
- `cur.html`: teaching and supervision.
- `li.html`: useful resources.
- `per.html`: personal page.
- `co.html`: contact details.
- `site.css`: styles, responsive layout.
- `site.js`: mobile menu and publication filters.
- `legacy/`: original copies of replaced pages.

All pre-existing course pages (`prog.html`, `pi.html`, etc.) and `arquivos/`, `files/`, `PO/`, `Prog1/`, `ProgE/`, `python/` remain included.

The site uses Google Fonts when online and local system-font fallbacks offline.

## Before publishing
Check your portrait, current academic information, course offerings, office location, publication citations and external links.

## Ajustes de novembro de 2026
- `ap.html`: removida a seção de datasets e instâncias.
- `cv.html`: filtros por ano e busca corrigidos (visibilidade por CSS e lógica JS).
- `cur.html`: eliminada uma entrada incorreta de aluno e corrigida a codificação do nome de Ítalo.
- `li.html`: recursos e colegas separados; recuperadas as fotos dos pesquisadores.
- Após publicar, use Ctrl+F5 para atualizar o cache do navegador.

## Atualização de 09/11/2026 (disciplinas)
- Ítalo Leite Ferreira Portinho movido para Current students em cur.html.
- prog.html e pi.html redesenhadas com o cabeçalho, navegação, rodapé e estilo do site novo.
- Materiais e avaliações antigos presentes apenas em comentários HTML não foram tratados como atividades atuais. As páginas indicam onde serão publicados os materiais de 2026.2.
