#  Currículo - Felippe Oliveira

Currículo pessoal desenvolvido com **HTML, CSS e JavaScript**, apresentando um design moderno e responsivo para destacar habilidades, projetos e experiência profissional.


## Estrutura do Projeto

```
meu-cv/
├── index.html              # Estrutura principal da página
├── style.css               # Estilos (cores, layout, animações)
├── script.js               # Funcionalidades (scroll e interações)
├── assets/
│   └── foto-perfil.jpg     # Foto de perfil
└── README.md               # Este arquivo
```

---

## Como Usar Localmente

1. **Clone ou baixe o repositório:**
   ```bash
   git clone https://github.com/giordany10/meu-cv.git
   cd meu-cv
   ```

2. **Abra no navegador:**
   - Duplo clique em `index.html`, ou
   - Use a extensão Live Server do VS Code

3. **Personalize seu conteúdo:**
   - Edite os textos em `index.html`
   - Ajuste cores em `style.css` (variáveis CSS)
   - Substitua `assets/foto-perfil.jpg` por sua foto

---

##  Customizando as Cores

Todas as cores estão centralizadas no arquivo `style.css`, dentro de `:root`:

```css
:root {
  --bg: #0f1419;              /* Fundo principal */
  --primary: #6366f1;         /* Cor primária */
  --accent: #ec4899;          /* Cor de destaque */
  --text: #f1f5f9;            /* Texto principal */
  --text-muted: #94a3b8;      /* Texto secundário */
}
##  Publicar no GitHub Pages

### Passo 1: Criar Repositório
1. Acesse [GitHub.com](https://github.com)
2. Clique em **New Repository**
3. Nomeie como **meu-cv**
4. Marque "Public"
5. Clique em "Create repository"

### Passo 2: Fazer Push do Código
Na pasta do projeto, no terminal:
```bash
git init
git add .
git commit -m "Meu currículo online 🚀"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/meu-cv.git
git push -u origin main
```

### Passo 3: Ativar GitHub Pages
1. Vá para **Settings → Pages**
2. Em "Source", escolha branch `main`
3. Em "Folder", escolha `/ (root)`
4. Clique em "Save"

### Passo 4: Acessar o Site
Em poucos minutos, seu currículo estará disponível em:
```
https://seu-usuario.github.io/meu-cv/

##  Recursos Utilizados

- HTML
- CSS
- JavaScript
- Google Fonts

---

## Contato

- **Email:** lippeoliveira8@gmail.com
- **LinkedIn:** [Felippe Oliveira](https://www.linkedin.com/in/felippe-oliveira-80018b379/)
- **GitHub:** [@giordany10](https://github.com/giordany10)

**Desenvolvido  por Felippe Oliveira**
