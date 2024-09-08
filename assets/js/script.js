i18next
.use(i18nextHttpBackend)
.use(i18nextBrowserLanguageDetector)
.init(
  {
    fallbackLng: "en", // Langue par défaut
    debug: false,
    backend: {
      loadPath: './locales/{{lng}}.json'
    }
  },
  function (err, t) {
    // Mise à jour du texte initial
    updateContent();
  }
);

function updateContent() {
  document.getElementById("catch-phrase").innerHTML = i18next.t("catch-phrase");
}

function changeLng(lng) {
  i18next.changeLanguage(lng);
}

i18next.on('languageChanged', () => {
  updateContent();
});
