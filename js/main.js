// ================== Données ==================
const skills = [
    { name: "HTML", color: "#E34F26" },
    { name: "CSS", color: "#1572B6" },
    { name: "JS", color: "#F7DF1E" },
    { name: "React", color: "#61DAFB" },
    { name: "Node.js", color: "#339933" },
    { name: "Python", color: "#3776AB" },
];

const projects = [
    { title: "Site E-commerce", description: "Boutique en ligne complète.", image: "assets/images/project1.jpg", technologies: ["React","Node.js"], github:"#", demo:"#"},
    { title: "Gestion de Tâches", description: "App web collaborative.", image: "assets/images/project2.jpg", technologies: ["Vue","Firebase"], github:"#", demo:"#"},
];

// ================== Injecter Compétences ==================
const skillsContainer = document.getElementById("skills-container");
skills.forEach(s => {
    const div = document.createElement("div");
    div.className = "p-6 bg-white rounded-xl shadow-lg flex flex-col items-center justify-center card-hover scroll-reveal";
    div.innerHTML = `<p class="font-semibold" style="color:${s.color}">${s.name}</p>`;
    skillsContainer.appendChild(div);
});

// ================== Injecter Projets ==================
const projectsContainer = document.getElementById("projects-container");
projects.forEach(p => {
    const div = document.createElement("div");
    div.className = "bg-white rounded-2xl shadow-lg overflow-hidden card-hover scroll-reveal";
    div.innerHTML = `
        <div class="relative h-48 overflow-hidden">
            <img src="${p.image}" alt="${p.title}" class="w-full h-full object-cover hover:scale-110 transition-transform"/>
        </div>
        <div class="p-6">
            <h3 class="text-xl font-bold mb-2">${p.title}</h3>
            <p class="text-gray-600 mb-2">${p.description}</p>
            <div class="flex flex-wrap gap-2 mb-4">
                ${p.technologies.map(t=>`<span class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">${t}</span>`).join('')}
            </div>
            <div class="flex gap-2">
                <a href="${p.github}" target="_blank" class="px-3 py-1 bg-gray-900 text-white rounded hover:bg-gray-800">Code</a>
                ${p.demo? `<a href="${p.demo}" target="_blank" class="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">Demo</a>`:``}
            </div>
        </div>
    `;
    projectsContainer.appendChild(div);
});

// ================== Scroll Reveal ==================
const scrollReveal = document.querySelectorAll(".scroll-reveal");
const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if(e.isIntersecting) { e.target.classList.add("visible"); observer.unobserve(e.target); } });
}, { threshold: 0.1 });
scrollReveal.forEach(el=>observer.observe(el));

// ================== Menu Mobile ==================
const menuBtn = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");
const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");
menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
    menuIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");
});

// ================== Typing Effect ==================
const roles = ["Développeur Web","Spécialiste Front-end","Architecte Cloud"];
let i = 0;
const roleText = document.getElementById("role-text");
setInterval(() => {
    roleText.classList.remove("typing-effect");
    setTimeout(()=>{
        roleText.textContent = roles[i];
        roleText.classList.add("typing-effect");
        i = (i+1)%roles.length;
    },100);
},5000);

// ================== Formulaire Contact ==================
const form = document.getElementById("contact-form");
form.addEventListener("submit", e=>{ e.preventDefault(); alert("Message envoyé !"); form.reset(); });

// ================== Téléchargement CV ==================
function downloadCV(){
    const link = document.createElement("a");
    link.href="assets/cv/CV.pdf";
    link.download="CV_[Votre_Nom].pdf";
    link.click();
}
