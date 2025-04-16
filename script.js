function genererMotDePasse() {
  const caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
  let motDePasse = "";
  for (let i = 0; i < 12; i++) {
    const index = Math.floor(Math.random() * caracteres.length);
    motDePasse += caracteres[index];
  }
  document.getElementById("motdepasse").innerText = motDePasse;
}
