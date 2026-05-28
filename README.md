# Sudharsun R — Personal Portfolio

A fully responsive personal portfolio website built with HTML, CSS, and JavaScript.

---

## Project Structure

```
port/
├── index.html          # Main HTML file
├── styles.css          # All styles and responsive breakpoints
├── script.js           # Animations, interactions, contact form
├── profile.png         # Your profile photo
├── Sudharsun_Resume.pdf  # Your resume (downloaded via CV button)
└── README.md           # This file
```

---

## How to Run Locally

1. Open the `port` folder
2. Double-click `index.html` — it opens directly in your browser
3. No server, no install, no dependencies needed

---

## How to Make Changes

### Change Your Name or Title
Open `index.html` and find:
```html
<h2 id="hero-name">Sudharsun R</h2>
```
Edit the name directly.

---

### Change the Typing Roles
Open `script.js` and find:
```js
const titles = [
    "Web Developer",
    "UI/UX Designer",
    "Graphic Designer",
    "Cybersecurity Enthusiast"
];
```
Add, remove, or edit any role in the list.

---

### Change the Hero Description
Open `index.html` and find the `<p class="hero-desc">` tag:
```html
<p class="hero-desc">
    M.Sc. IT graduate with a strong interest in ...
</p>
```
Replace the text inside.

---

### Add or Edit Skills
Open `index.html` and find the `<!-- ===== SKILLS ===== -->` section.
Copy an existing skill card and edit the icon, title, and description:
```html
<div class="skill reveal">
    <div class="skill-icon-wrap">
        <i class="fas fa-YOUR-ICON"></i>
    </div>
    <h3>Skill Name</h3>
    <p>Short description of the skill.</p>
</div>
```
Find icons at: https://fontawesome.com/icons

---

### Add a Project
Open `index.html` and find the `<!-- ===== PROJECTS ===== -->` section.
Replace a "Coming Soon" placeholder or add a new card:
```html
<div class="project reveal">
    <div class="project-icon-wrap">
        <i class="fas fa-YOUR-ICON"></i>
    </div>
    <span class="project-badge">Academic Project</span>
    <h3>Project Title</h3>
    <p>Project description goes here.</p>
    <div class="project-tags">
        <span><i class="fab fa-python"></i> Python</span>
        <span><i class="fas fa-database"></i> Database</span>
    </div>
</div>
```
For a research paper, use `class="project-badge project-badge--research"` instead.

---

### Update Your Resume
Replace `Sudharsun_Resume.pdf` in the `port` folder with your new PDF.
Keep the filename exactly the same: `Sudharsun_Resume.pdf`

---

### Change Your Profile Photo
Replace `profile.png` in the `port` folder with your new photo.
Keep the filename exactly the same: `profile.png`
Recommended: square image, minimum 400×400px.

---

### Update Social Links
Open `index.html` and find the `<div class="social-links">` block inside the hero section.
Edit the `href` values:
```html
<a href="https://www.instagram.com/YOUR_USERNAME" ...>
<a href="https://www.linkedin.com/in/YOUR_PROFILE" ...>
<a href="https://wa.me/YOUR_PHONE_NUMBER" ...>
```

---

### Update Contact Info
Open `index.html` and find the `<!-- ===== CONTACT ===== -->` section.
Edit each `<a href="...">` inside the contact cards.

---

### Change the Color Theme
The main accent color is orange `#ff6600`.
To change it, open `styles.css` and do a find & replace:
- Find: `#ff6600`
- Replace with your new color (e.g. `#0066ff` for blue)

---

## Contact Form

The form opens Gmail compose in a new tab with the sender's name, email, and message pre-filled. The visitor just clicks Send in Gmail and you receive it at `sudharsun9944@gmail.com`.

To change the recipient email, open `script.js` and find:
```js
"https://mail.google.com/mail/?view=cm&to=sudharsun9944@gmail.com
```
Replace `sudharsun9944@gmail.com` with your new email.

---

## Hosting (to share your portfolio online)

### Option 1 — Netlify (Recommended, free)
1. Go to https://netlify.com and sign up
2. Drag and drop the entire `port` folder onto the Netlify dashboard
3. Your site goes live at a URL like `sudharsun.netlify.app`
4. You can set a custom domain from the Netlify settings

### Option 2 — GitHub Pages (free)
1. Create a GitHub account at https://github.com
2. Create a new repository named `portfolio`
3. Upload all files from the `port` folder
4. Go to Settings → Pages → Deploy from `main` branch
5. Live at `yourusername.github.io/portfolio`

---

## Credits

- Icons: [Font Awesome 6](https://fontawesome.com)
- Fonts: [Google Fonts — Poppins](https://fonts.google.com/specimen/Poppins)
- Particle background: custom canvas animation
