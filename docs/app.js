const questionBank = {
  Spanish: [
    { question: "How do you say 'hello'?", options: ["hola", "adios", "gracias", "por favor"], answer: 0 },
    { question: "How do you say 'thank you'?", options: ["perdon", "gracias", "buenos dias", "amigo"], answer: 1 },
    { question: "How do you say 'friend'?", options: ["casa", "libro", "amigo", "agua"], answer: 2 },
    { question: "How do you say 'water'?", options: ["agua", "sol", "pan", "escuela"], answer: 0 },
    { question: "How do you say 'goodbye'?", options: ["hola", "adios", "si", "noche"], answer: 1 }
  ],
  French: [
    { question: "How do you say 'hello'?", options: ["merci", "bonjour", "ami", "eau"], answer: 1 },
    { question: "How do you say 'thank you'?", options: ["merci", "salut", "livre", "oui"], answer: 0 },
    { question: "How do you say 'friend'?", options: ["maison", "pain", "ami", "soleil"], answer: 2 },
    { question: "How do you say 'water'?", options: ["eau", "ecole", "nuit", "chat"], answer: 0 },
    { question: "How do you say 'goodbye'?", options: ["bonjour", "au revoir", "merci", "oui"], answer: 1 }
  ],
  Japanese: [
    { question: "How do you say 'hello'?", options: ["Arigato", "Sayonara", "Konnichiwa", "Mizu"], answer: 2 },
    { question: "How do you say 'thank you'?", options: ["Tomodachi", "Arigato", "Ohayo", "Neko"], answer: 1 },
    { question: "How do you say 'friend'?", options: ["Tomodachi", "Mizu", "Hon", "Ie"], answer: 0 },
    { question: "How do you say 'water'?", options: ["Taiyo", "Pan", "Mizu", "Yoru"], answer: 2 },
    { question: "How do you say 'goodbye'?", options: ["Konnichiwa", "Sayonara", "Arigato", "Hai"], answer: 1 }
  ]
};

function currentUser() { return localStorage.getItem("penguin_username"); }
function userKey(name) { return "penguin_user_" + name.toLowerCase(); }
function getUser(name = currentUser()) {
  if (!name) return null;
  return JSON.parse(localStorage.getItem(userKey(name)) || JSON.stringify({ username: name, score: 0, xp: 0, level: 1, color: "#000000" }));
}
function saveUser(user) {
  localStorage.setItem(userKey(user.username), JSON.stringify(user));
  localStorage.setItem("penguin_username", user.username);
}
function requireUser() {
  if (!currentUser()) window.location.href = "index.html";
  return getUser();
}
function logout() { localStorage.removeItem("penguin_username"); window.location.href = "index.html"; }
function allUsers() {
  return Object.keys(localStorage).filter(k => k.startsWith("penguin_user_")).map(k => JSON.parse(localStorage.getItem(k)));
}
function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, ch => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#039;"}[ch]));
}
