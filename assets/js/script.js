i18next
  .use(i18nextHttpBackend)
  .use(i18nextBrowserLanguageDetector)
  .init(
    {
      fallbackLng: "fr", // Langue par défaut
      debug: false,
      backend: {
        loadPath: "./locales/{{lng}}.json",
      },
    },
    function (err, t) {
      // Mise à jour du texte initial
      updateContent();
    }
  );

function updateContent() {
  if (document.getElementById("catch-phrase")) {
    document.getElementById("catch-phrase").innerHTML =
      i18next.t("catch-phrase");
  }
  if (document.getElementById("intro-title")) {
    document.getElementById("intro-title").innerHTML = i18next.t("intro-title");
  }
  if (document.getElementById("intro")) {
    document.getElementById("intro").innerHTML = i18next.t("intro");
  }
  if (document.getElementById("sub-navbar-intro")) {
    document.getElementById("sub-navbar-intro").innerHTML =
      i18next.t("sub-navbar-intro");
  }
  if (document.getElementById("sub-navbar-photos")) {
    document.getElementById("sub-navbar-photos").innerHTML =
      i18next.t("sub-navbar-photos");
  }
  if (document.getElementById("sub-navbar-videos")) {
    document.getElementById("sub-navbar-videos").innerHTML =
      i18next.t("sub-navbar-videos");
  }
  if (document.getElementById("sub-navbar-team_ah2r")) {
    document.getElementById("sub-navbar-team_ah2r").innerHTML = i18next.t(
      "sub-navbar-team_ah2r"
    );
  }
  if (document.getElementById("sub-navbar-techniques")) {
    document.getElementById("sub-navbar-techniques").innerHTML = i18next.t(
      "sub-navbar-techniques"
    );
  }
  if (document.getElementById("sub-navbar-evenements")) {
    document.getElementById("sub-navbar-evenements").innerHTML = i18next.t(
      "sub-navbar-evenements"
    );
  }
}
function changeLng(lng) {
  i18next.changeLanguage(lng);
  if (lng === "fr") {
    document.querySelector("button.fr").classList.add("selected");
    document.querySelector("button.en").classList.remove("selected");
  } else if (lng === "en") {
    document.querySelector("button.en").classList.add("selected");
    document.querySelector("button.fr").classList.remove("selected");
  }

  changeNavbarLng(lng);
}

function changeNavbarLng(lng) {
  if (lng === "fr") {
    document.getElementById("reel").src = "./assets/images/buttons/reel.png";
    document.getElementById("virtuel").src =
      "./assets/images/buttons/virtuel.png";
    document.getElementById("art").src = "./assets/images/buttons/art.png";
  } else if (lng === "en") {
    document.getElementById("reel").src = "./assets/images/buttons/reel_en.png";
    document.getElementById("virtuel").src =
      "./assets/images/buttons/virtuel_en.png";
    document.getElementById("art").src = "./assets/images/buttons/art_en.png";
  }
}

i18next.on("languageChanged", () => {
  updateContent();
});

document.addEventListener("DOMContentLoaded", () => {
  const scrolledClass = "body-scrolled";

  if (window.scrollY > 0) {
    document.querySelector(".navbar").classList.add(scrolledClass);
  } else {
  }
});

document.addEventListener("scroll", () => {
  const scrolledClass = "body-scrolled";
  const scrollThreshold = 50; // Ajustez selon vos besoins

  if (window.scrollY > scrollThreshold) {
    console.log("scroll");

    document.querySelector(".navbar").classList.add(scrolledClass);
  } else {
    document.querySelector(".navbar").classList.remove(scrolledClass);
  }
});
