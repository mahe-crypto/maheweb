const annee = document.getElementById("annee");
const menuMobile = document.getElementById("menu-mobile");
const navigation = document.getElementById("navigation");
const formulaire = document.getElementById("formulaire");
const confirmation = document.getElementById("confirmation");
const champOffre = document.getElementById("offre");
const boutonsOffres = document.querySelectorAll(".choix-offre");

annee.textContent = new Date().getFullYear();

menuMobile.addEventListener("click", function () {
  const menuOuvert = navigation.classList.toggle("ouvert");

  menuMobile.setAttribute("aria-expanded", String(menuOuvert));
  menuMobile.textContent = menuOuvert ? "×" : "☰";
});

navigation.querySelectorAll("a").forEach(function (lien) {
  lien.addEventListener("click", function () {
    navigation.classList.remove("ouvert");
    menuMobile.setAttribute("aria-expanded", "false");
    menuMobile.textContent = "☰";
  });
});

boutonsOffres.forEach(function (bouton) {
  bouton.addEventListener("click", function () {
    champOffre.value = bouton.dataset.offre;
    document.getElementById("contact").scrollIntoView({
      behavior: "smooth"
    });
  });
});

formulaire.addEventListener("submit", function (event) {
  event.preventDefault();

  const nom = document.getElementById("nom").value.trim();
  const email = document.getElementById("email").value.trim();
  const telephone = document.getElementById("telephone").value.trim();
  const offre = champOffre.value;
  const message = document.getElementById("message").value.trim();

  const sujet = encodeURIComponent(
    "Demande de site internet - " + offre
  );

  const contenu = encodeURIComponent(
    "Bonjour MaheWeb,\n\n" +
    "Je souhaite obtenir des informations pour la création d'un site.\n\n" +
    "Nom ou entreprise : " + nom + "\n" +
    "Adresse e-mail : " + email + "\n" +
    "Téléphone : " + (telephone || "Non renseigné") + "\n" +
    "Offre souhaitée : " + offre + "\n\n" +
    "Description du projet :\n" + message + "\n\n" +
    "Cordialement,\n" + nom
  );

  confirmation.textContent =
    "Ouverture de votre application de messagerie...";

  window.location.href =
    "mailto:mahe02424@gmail.com?subject=" +
    sujet +
    "&body=" +
    contenu;
});