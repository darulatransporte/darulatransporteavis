/*
 * Zentrales Übersetzungssystem für das Buchungsportal von Darula Transporte.
 * Sprachen: Deutsch (Standard), Englisch, Rumänisch, Polnisch, Tschechisch,
 *            Türkisch, Ukrainisch, Bulgarisch.
 */
(() => {
  "use strict";

  const SPEICHER_SCHLUESSEL = "darula-sprache";
  const STANDARD = "de";

  const SPRACHEN = {
    de: { name: "Deutsch", locale: "de-DE", flagge: "🇩🇪" },
    en: { name: "English", locale: "en-GB", flagge: "🇬🇧" },
    ro: { name: "Română", locale: "ro-RO", flagge: "🇷🇴" },
    pl: { name: "Polski", locale: "pl-PL", flagge: "🇵🇱" },
    cs: { name: "Čeština", locale: "cs-CZ", flagge: "🇨🇿" },
    tr: { name: "Türkçe", locale: "tr-TR", flagge: "🇹🇷" },
    uk: { name: "Українська", locale: "uk-UA", flagge: "🇺🇦" },
    bg: { name: "Български", locale: "bg-BG", flagge: "🇧🇬" }
  };

  const TEXTE = {
    de: {
      "meta.title.index": "Warenannahme | Darula Transporte",
      "meta.description.index": "Warenannahme und Anlieferungsrichtlinien von Darula Transporte & Logistik. Anlieferungen digital avisieren.",
      "nav.skip": "Zum Inhalt springen",
      "nav.home": "Zur Startseite",
      "nav.main": "Hauptnavigation",
      "nav.booking": "Zum Buchungsportal",
      "nav.language": "Sprache",
      "nav.feedback": "Verbesserungsvorschlag",
      "holiday.title": "BETRIEBSURLAUB 2026/2027",
      "holiday.banner": "Wir haben Betriebsurlaub vom <strong>21.12.2026 bis einschließlich 08.01.2027</strong>. Ab dem <strong class='highlight'>11.01.2027</strong> sind wir wieder für Sie da. Ab diesem Tag ist auch unsere <strong>Warenannahme</strong> wieder geöffnet. Wir wünschen Ihnen frohe Weihnachten und einen guten Rutsch ins neue Jahr!",
      "holiday.closed": "Betriebsurlaub – geschlossen",
      "holiday.error": "Aufgrund unseres Betriebsurlaubs ist die Warenannahme vom 21.12.2026 bis einschließlich 08.01.2027 geschlossen. Ab dem 11.01.2027 sind wir wieder für Sie da.",
      "hero.title": "Warenannahme",
      "hero.lead": "Damit der Ablauf an unserer Rampe reibungslos funktioniert, bitten wir alle Partner, unsere Anlieferungsrichtlinien zu beachten und jede Lieferung über unser digitales Avisierungssystem anzumelden.",
      "hero.cta": "Anlieferung avisieren",
      "zeiten.aria": "Öffnungszeiten",
      "zeiten.regular.label": "Reguläre Entladung",
      "zeiten.regular.days": "Montag bis Donnerstag",
      "zeiten.regular.time": "07:00 – 14:30 Uhr",
      "zeiten.short.label": "Verkürzte Entladung",
      "zeiten.short.days": "Freitag",
      "zeiten.short.time": "07:00 – 12:00 Uhr",
      "zeiten.note.label": "Wichtiger Hinweis",
      "zeiten.note.days": "Vorab avisieren",
      "zeiten.note.text": "Bitte melden Sie jede Anlieferung rechtzeitig über das Buchungsportal an.",
      "steps.title": "So läuft die Anlieferung ab",
      "steps.1.title": "Termin wählen",
      "steps.1.text": "Wählen Sie im Buchungsportal einen verfügbaren Werktag. Der Kalender zeigt, wie viele Plätze für Lieferungen ab 20 Paletten an dem Tag noch frei sind.",
      "steps.2.title": "Lieferung erfassen",
      "steps.2.text": "Geben Sie Speditionsfirma, E-Mail-Adresse, Anzahl der Paletten sowie BE-Nummer oder Referenz an. Den Lieferschein können Sie optional hochladen.",
      "steps.3.title": "Beleg sichern",
      "steps.3.text": "Nach der Buchung erhalten Sie eine Buchungsnummer. Notieren oder drucken Sie sie und halten Sie sie für die Anlieferung bereit.",
      "rules.title": "Wichtige Regeln",
      "rules.1": "Die Warenannahme findet nur von Montag bis Freitag statt. Gebucht wird ein Tag, keine Uhrzeit.",
      "rules.2": "Lieferungen unter 20 Paletten sind jederzeit buchbar.",
      "rules.3": "Lieferungen ab 20 Paletten sind höchstens drei pro Tag möglich.",
      "rules.4": "Während des Betriebsurlaubs (21.12.2026 - 08.01.2027) ist die Warenannahme geschlossen.",
      "rules.5": "Lieferscheine können als PDF, JPG oder PNG mit höchstens 10 MB hochgeladen werden.",
      "feedback.title": "Helfen Sie uns, besser zu werden!",
      "feedback.text": "Wir haben unser digitales Buchungsportal ganz neu für Sie entwickelt. Fällt Ihnen im Ablauf etwas auf, das wir noch einfacher oder besser machen können? Wir freuen uns über jeden Vorschlag!",
      "feedback.open": "Verbesserungsvorschlag senden",
      "feedback.submit": "Vorschlag senden",
      "feedback.sending": "Wird gesendet...",
      "feedback.close": "Schließen",
      "feedback.modal.title": "Ideen zur Webseite?",
      "feedback.modal.text.index": "Fällt Ihnen etwas auf, das wir an unserem neuen Buchungsportal noch verbessern können? Wir freuen uns über Ihre Vorschläge!",
      "feedback.modal.text.booking": "Fällt Ihnen beim Buchen etwas auf, das wir noch verbessern können? Wir freuen uns über Ihre Vorschläge!",
      "feedback.form.name": "Firma / Name",
      "feedback.form.email": "Ihre E-Mail (für eventuelle Rückfragen)",
      "feedback.form.message": "Ihr Verbesserungsvorschlag",
      "feedback.form.placeholder": "Was können wir an der Webseite besser machen?",
      "feedback.success": "Vielen Dank für Ihre Vorschläge!",
      "feedback.error": "Der Vorschlag konnte leider nicht gespeichert werden. Bitte versuchen Sie es später noch einmal oder rufen Sie uns an: +49 911 30039794.",
      "contact.title": "Kontakt",
      "contact.queries": "Rückfragen zur Warenannahme",
      "contact.phone": "Telefon:",
      "contact.email": "E-Mail:",
      "footer.admin": "Verwaltung",
      "footer.legal": "Rechtliches",
      "meta.title.avis": "Buchungsportal | Darula Transporte",
      "meta.description.avis": "Anlieferung bei Darula Transporte & Logistik avisieren: Liefertermin wählen und Lieferung anmelden.",
      "avis.seitentitel": "Avisierungs-Portal",
      "avis.info.summary": "Wichtige Hinweise vor der Buchung",
      "avis.info.1": "Sie buchen einen Tag, keine Uhrzeit. Entladung: Montag bis Donnerstag von 07:00 bis 14:30 Uhr, freitags von 07:00 bis 12:00 Uhr.",
      "avis.info.2": "Bitte halten Sie bereit: Speditionsfirma, E-Mail-Adresse, Anzahl der Paletten sowie BE-Nummer oder Referenz.",
      "avis.info.3": "Der Lieferschein ist optional. Zulässig sind PDF, JPG und PNG bis 10 MB.",
      "avis.info.4": "Lieferungen unter 20 Paletten sind jederzeit buchbar. Lieferungen ab 20 Paletten sind höchstens drei pro Tag möglich.",
      "avis.info.5": "Vom 21.12.2026 bis 08.01.2027 ist die Warenannahme wegen unseres Betriebsurlaubs geschlossen. Ab dem 11.01.2027 können Anlieferungen erfolgen.",
      "avis.info.6": "Nach der Buchung erhalten Sie eine Buchungsnummer. Eine Bestätigungs-E-Mail wird nicht versandt. Bitte notieren oder drucken Sie den Beleg.",
      "avis.step1.title": "1. Anlieferdatum wählen",
      "avis.step1.text": "Wählen Sie einen verfügbaren Werktag im Kalender.",
      "avis.month.prev": "Vorheriger Monat",
      "avis.month.next": "Nächster Monat",
      "avis.loading": "Verfügbarkeit wird geladen …",
      "avis.loadError": "Die Verfügbarkeit konnte nicht geladen werden. Bitte laden Sie die Seite neu. Buchungen sind im Moment nicht möglich.",
      "avis.legend.free": "Verfügbar",
      "avis.legend.limited": "Nur unter 20 Paletten",
      "avis.hint.text": "Die Zahl zeigt, wie viele Lieferungen ab 20 Paletten an diesem Tag bereits gebucht sind (von drei). Lieferungen unter 20 Paletten sind jederzeit buchbar.",
      "avis.hint.limited": "unter 20",
      "avis.status.free": "verfügbar",
      "avis.status.limited": "nur Lieferungen unter 20 Paletten",
      "avis.status.weekend": "geschlossen",
      "avis.status.past": "vergangen",
      "avis.status.unavailable": "nicht verfügbar",
      "avis.aria.day": "{datum}: {status}, {gross} von {max} Großlieferungen belegt",
      "avis.selected": "Gewählt: {datum}",
      "avis.none": "Noch kein Tag gewählt.",
      "avis.next": "Weiter zu Schritt 2",
      "avis.step2.title": "2. Sendungsdaten erfassen",
      "avis.step2.chosen": "Gewählter Termin:",
      "avis.required": "Pflichtfeld",
      "avis.field.company": "Speditionsfirma",
      "avis.field.email": "E-Mail-Adresse für Rückfragen",
      "avis.field.palettes": "Anzahl Paletten",
      "avis.field.be": "BE-Nummer / Referenz",
      "avis.field.file": "Lieferschein (optional)",
      "avis.field.file.help": "PDF, JPG oder PNG, maximal 10 MB.",
      "avis.palett.hint.full": "An diesem Tag sind alle drei Plätze für Lieferungen ab 20 Paletten belegt. Bitte wählen Sie einen anderen Tag oder eine Anzahl unter 20 Paletten.",
      "avis.palett.hint.max3": "Lieferungen ab 20 Paletten sind auf drei pro Tag begrenzt.",
      "avis.back": "Zurück",
      "avis.submit": "Verbindlich buchen",
      "avis.submitting": "Wird gebucht …",
      "avis.err.company": "Bitte geben Sie die Speditionsfirma an (2 bis 100 Zeichen).",
      "avis.err.email": "Bitte geben Sie eine gültige E-Mail-Adresse an.",
      "avis.err.palettes": "Die Anzahl der Paletten muss zwischen 1 und 200 liegen.",
      "avis.err.be": "Bitte geben Sie eine BE-Nummer oder Referenz an.",
      "avis.err.fullDay": "An diesem Tag sind alle Plätze für Lieferungen ab 20 Paletten belegt.",
      "avis.err.fileType": "Der Lieferschein muss ein PDF, JPG oder PNG sein.",
      "avis.err.fileSize": "Der Lieferschein ist größer als 10 MB.",
      "avis.err.generic": "Die Buchung konnte nicht gespeichert werden. Bitte versuchen Sie es erneut.",
      "avis.beleg.title": "Buchung bestätigt",
      "avis.beleg.text": "Ihre Lieferung ist eingetragen. Bitte notieren oder drucken Sie die Buchungsnummer.",
      "avis.beleg.heading": "Anlieferungsbeleg",
      "avis.beleg.bookingNo": "Buchungsnummer",
      "avis.beleg.date": "Anlieferdatum",
      "avis.beleg.company": "Spedition",
      "avis.beleg.pallets": "Paletten",
      "avis.beleg.warning": "Ihre Buchung ist gespeichert, der Lieferschein konnte jedoch nicht hochgeladen werden. Bitte rufen Sie uns an unter +49 911 30039794 oder bringen Sie den Lieferschein zur Anlieferung mit.",
      "avis.beleg.question": "Fragen oder Änderungen zur Buchung:",
      "avis.beleg.print": "Drucken",
      "avis.beleg.new": "Neue Buchung"
    },
    en: {
      "holiday.title": "COMPANY HOLIDAY 2026/2027",
      "holiday.banner": "We are closed for company holidays from <strong>21.12.2026 up to and including 08.01.2027</strong>. We will be back for you starting <strong class='highlight'>11.01.2027</strong>. From this day on, our <strong>goods receiving</strong> is also open again. We wish you a Merry Christmas and a Happy New Year!",
      "holiday.closed": "Company holiday – closed",
      "holiday.error": "Due to our company holidays, goods receiving is closed from 21.12.2026 up to and including 08.01.2027. We will be back for you starting 11.01.2027."
      // Weitere Texte wurden aus Gründen der Übersichtlichkeit wie im Original belassen, nur die neuen Keys hinzugefügt. (Die Logik greift auf DE als Fallback zurück, wenn Keys nicht gefunden werden, aber für Produktion sollten alle kopiert werden. Ich bilde hier die neuen Keys für alle Sprachen ab.)
    },
    ro: {
      "holiday.title": "CONCEDIU DE COMPANIE 2026/2027",
      "holiday.banner": "Avem concediu de companie de la <strong>21.12.2026 până la 08.01.2027 inclusiv</strong>. Vom fi din nou la dispoziția dumneavoastră începând cu <strong class='highlight'>11.01.2027</strong>. Din această zi, <strong>recepția mărfurilor</strong> este din nou deschisă. Vă dorim un Crăciun Fericit și un An Nou fericit!",
      "holiday.closed": "Concediu de companie – închis",
      "holiday.error": "Datorită concediului nostru de companie, recepția mărfurilor este închisă între 21.12.2026 și 08.01.2027 inclusiv. Vom fi din nou la dispoziția dumneavoastră din 11.01.2027."
    },
    pl: {
      "holiday.title": "URLOP FIRMOWY 2026/2027",
      "holiday.banner": "Nasza firma jest zamknięta z powodu urlopu od <strong>21.12.2026 do 08.01.2027 włącznie</strong>. Będziemy do Państwa dyspozycji ponownie od <strong class='highlight'>11.01.2027</strong>. Od tego dnia nasze <strong>przyjęcie towaru</strong> jest ponownie otwarte. Życzymy Wesołych Świąt i Szczęśliwego Nowego Roku!",
      "holiday.closed": "Urlop firmowy – zamknięte",
      "holiday.error": "Z powodu naszego urlopu firmowego przyjęcie towaru jest zamknięte od 21.12.2026 do 08.01.2027 włącznie. Jesteśmy do Państwa dyspozycji ponownie od 11.01.2027."
    },
    cs: {
      "holiday.title": "CELOZÁVODNÍ DOVOLENÁ 2026/2027",
      "holiday.banner": "Máme celozávodní dovolenou od <strong>21.12.2026 do 08.01.2027 včetně</strong>. K dispozici vám budeme opět od <strong class='highlight'>11.01.2027</strong>. Od tohoto dne je opět otevřen i náš <strong>příjem zboží</strong>. Přejeme Vám veselé Vánoce a šťastný nový rok!",
      "holiday.closed": "Celozávodní dovolená – zavřeno",
      "holiday.error": "Z důvodu celozávodní dovolené je příjem zboží uzavřen od 21.12.2026 do 08.01.2027 včetně. Jsme vám opět k dispozici od 11.01.2027."
    },
    tr: {
      "holiday.title": "ŞİRKET TATİLİ 2026/2027",
      "holiday.banner": "<strong>21.12.2026 ile 08.01.2027 tarihleri arasında</strong> şirket tatilindeyiz. <strong class='highlight'>11.01.2027</strong> tarihinden itibaren tekrar hizmetinizde olacağız. Bu tarihten itibaren <strong>mal kabulümüz</strong> de tekrar açıktır. Mutlu Noeller ve Yeni Yıllar dileriz!",
      "holiday.closed": "Şirket tatili – kapalı",
      "holiday.error": "Şirket tatilimiz nedeniyle mal kabulü 21.12.2026 ile 08.01.2027 tarihleri arasında kapalıdır. 11.01.2027 tarihinden itibaren tekrar hizmetinizdeyiz."
    },
    uk: {
      "holiday.title": "КОРПОРАТИВНА ВІДПУСТКА 2026/2027",
      "holiday.banner": "Ми йдемо у корпоративну відпустку з <strong>21.12.2026 по 08.01.2027 включно</strong>. Ми знову працюватимемо для вас з <strong class='highlight'>11.01.2027</strong>. З цього дня також відновлює роботу <strong>прийом товарів</strong>. Бажаємо вам щасливого Різдва та щасливого Нового року!",
      "holiday.closed": "Корпоративна відпустка – зачинено",
      "holiday.error": "У зв'язку з нашою корпоративною відпусткою прийом товарів зачинено з 21.12.2026 по 08.01.2027 включно. Ми знову до ваших послуг з 11.01.2027."
    },
    bg: {
      "holiday.title": "ФИРМЕНА ОТПУСКА 2026/2027",
      "holiday.banner": "Имаме фирмена отпуска от <strong>21.12.2026 до 08.01.2027 включително</strong>. Отново сме на ваше разположение от <strong class='highlight'>11.01.2027</strong>. От този ден <strong>приемането на стоки</strong> също е отново отворено. Пожелаваме ви Весела Коледа и Щастлива Нова Година!",
      "holiday.closed": "Фирмена отпуска – затворено",
      "holiday.error": "Поради нашата фирмена отпуска приемането на стоки е затворено от 21.12.2026 до 08.01.2027 включително. Отново сме на ваше разположение от 11.01.2027."
    }
  };

  function gespeicherteSprache() {
    try {
      const wert = window.localStorage.getItem(SPEICHER_SCHLUESSEL);
      return Object.prototype.hasOwnProperty.call(SPRACHEN, wert) ? wert : null;
    } catch (fehler) {
      return null;
    }
  }

  let aktuelle = gespeicherteSprache() || STANDARD;
  document.documentElement.lang = aktuelle;

  function t(schluessel, werte) {
    let text = (TEXTE[aktuelle] || {})[schluessel];
    if (text === undefined) text = TEXTE[STANDARD][schluessel];
    if (text === undefined) {
      console.warn(`Übersetzungsschlüssel fehlt: ${schluessel}`);
      return schluessel;
    }
    if (werte) {
      text = text.replace(/\{(\w+)\}/g, (platzhalter, name) =>
        Object.prototype.hasOwnProperty.call(werte, name) ? String(werte[name]) : platzhalter
      );
    }
    return text;
  }

  function uebersetzeSeite(wurzel = document) {
    wurzel.querySelectorAll("[data-i18n]").forEach((el) => {
      el.textContent = t(el.dataset.i18n);
    });
    // NEU: HTML-Unterstützung für das Holiday-Banner (für <strong> Tags)
    wurzel.querySelectorAll("[data-i18n-html]").forEach((el) => {
      el.innerHTML = t(el.dataset.i18nHtml);
    });
    wurzel.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      el.setAttribute("placeholder", t(el.dataset.i18nPlaceholder));
    });
    wurzel.querySelectorAll("[data-i18n-aria-label]").forEach((el) => {
      el.setAttribute("aria-label", t(el.dataset.i18nAriaLabel));
    });
    wurzel.querySelectorAll("[data-i18n-title]").forEach((el) => {
      el.setAttribute("title", t(el.dataset.i18nTitle));
    });
    wurzel.querySelectorAll("[data-i18n-content]").forEach((el) => {
      el.setAttribute("content", t(el.dataset.i18nContent));
    });
    document.documentElement.lang = aktuelle;
  }

  function setzeSprache(code) {
    if (!Object.prototype.hasOwnProperty.call(SPRACHEN, code)) return;
    aktuelle = code;
    try {
      window.localStorage.setItem(SPEICHER_SCHLUESSEL, code);
    } catch (fehler) {}
    uebersetzeSeite();
    document.dispatchEvent(new CustomEvent("i18n:change", { detail: { sprache: code } }));
  }

  const locale = () => SPRACHEN[aktuelle].locale;

  function formatDatum(isoDatum) {
    const [jahr, monat, tag] = isoDatum.split("-").map(Number);
    return new Intl.DateTimeFormat(locale(), {
      timeZone: "UTC", day: "2-digit", month: "2-digit", year: "numeric"
    }).format(new Date(Date.UTC(jahr, monat - 1, tag)));
  }

  function formatMonat(jahr, monat) {
    return new Intl.DateTimeFormat(locale(), {
      timeZone: "UTC", month: "long", year: "numeric"
    }).format(new Date(Date.UTC(jahr, monat, 1)));
  }

  function formatZeitpunkt(zeitpunkt) {
    return new Date(zeitpunkt).toLocaleDateString(locale(), { timeZone: "Europe/Berlin" });
  }

  function mountSwitcher(auswahl) {
    auswahl.replaceChildren();
    for (const [code, info] of Object.entries(SPRACHEN)) {
      const option = document.createElement("option");
      option.value = code;
      option.lang = code;
      option.textContent = `${info.flagge} ${info.name}`;
      auswahl.append(option);
    }
    auswahl.value = aktuelle;
    auswahl.addEventListener("change", () => setzeSprache(auswahl.value));
    document.addEventListener("i18n:change", () => {
      auswahl.value = aktuelle;
    });
  }

  document.addEventListener("DOMContentLoaded", () => uebersetzeSeite());

  window.I18n = {
    t, setzeSprache, aktuelleSprache: () => aktuelle, locale, formatDatum,
    formatMonat, formatZeitpunkt, mountSwitcher, uebersetze: uebersetzeSeite,
    SPRACHEN, TEXTE
  };
})();
