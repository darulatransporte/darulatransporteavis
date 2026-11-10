/*
 * Zentrales Übersetzungssystem für das Buchungsportal von Darula Transporte.
 * Sprachen: Deutsch (Standard), Englisch, Rumänisch, Polnisch, Tschechisch,
 *            Türkisch, Ukrainisch, Bulgarisch.
 *
 * Verwendung in HTML:
 *   data-i18n="schluessel"               -> Textinhalt
 *   data-i18n-placeholder="schluessel"   -> placeholder
 *   data-i18n-aria-label="schluessel"    -> aria-label
 *   data-i18n-title="schluessel"         -> title
 *   data-i18n-content="schluessel"       -> content (z. B. meta description)
 *
 * Verwendung in Skripten:
 *   I18n.t("schluessel")                 -> Text in der aktuellen Sprache
 *   I18n.t("schluessel", { name: "x" })  -> Platzhalter wie {name} werden ersetzt
 *
 * Nach jedem Sprachwechsel wird das Ereignis "i18n:change" auf dem document ausgelöst.
 * Fehlt ein Schlüssel in der aktuellen Sprache, wird Deutsch verwendet.
 */
(() => {
  "use strict";

  const SPEICHER_SCHLUESSEL = "darula-sprache";
  const STANDARD = "de";

  const SPRACHEN = {
    de: { name: "Deutsch", locale: "de-DE" },
    en: { name: "English", locale: "en-GB" },
    ro: { name: "Română", locale: "ro-RO" },
    pl: { name: "Polski", locale: "pl-PL" },
    cs: { name: "Čeština", locale: "cs-CZ" },
    tr: { name: "Türkçe", locale: "tr-TR" },
    uk: { name: "Українська", locale: "uk-UA" },
    bg: { name: "Български", locale: "bg-BG" }
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
      "banner.inventur": "Wichtige Information: Am 11.11.2026 findet unsere Inventur statt. Die Warenannahme bleibt an diesem Tag geschlossen.",
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
      "rules.4": "Am 11.11.2026 bleibt die Warenannahme wegen der Inventur geschlossen.",
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
      "footer.legal": "Rechtliches"
    },
    en: {
      "meta.title.index": "Goods receiving | Darula Transporte",
      "meta.description.index": "Goods receiving and delivery guidelines of Darula Transporte & Logistik. Register deliveries digitally.",
      "nav.skip": "Skip to content",
      "nav.home": "Go to home page",
      "nav.main": "Main navigation",
      "nav.booking": "Go to booking portal",
      "nav.language": "Language",
      "nav.feedback": "Suggest an improvement",
      "banner.inventur": "Important notice: our stocktaking takes place on 11.11.2026. Goods receiving remains closed that day.",
      "hero.title": "Goods receiving",
      "hero.lead": "To keep operations at our loading ramp running smoothly, we ask all partners to follow our delivery guidelines and to register every delivery through our digital notification system.",
      "hero.cta": "Register a delivery",
      "zeiten.aria": "Opening hours",
      "zeiten.regular.label": "Regular unloading",
      "zeiten.regular.days": "Monday to Thursday",
      "zeiten.regular.time": "07:00 – 14:30",
      "zeiten.short.label": "Shortened unloading",
      "zeiten.short.days": "Friday",
      "zeiten.short.time": "07:00 – 12:00",
      "zeiten.note.label": "Important note",
      "zeiten.note.days": "Register in advance",
      "zeiten.note.text": "Please register every delivery in good time through the booking portal.",
      "steps.title": "How a delivery works",
      "steps.1.title": "Choose a date",
      "steps.1.text": "Choose an available working day in the booking portal. The calendar shows how many slots for deliveries of 20 pallets or more are still free on that day.",
      "steps.2.title": "Enter delivery details",
      "steps.2.text": "Enter the forwarding company, email address, number of pallets and BE number or reference. You can optionally upload the delivery note.",
      "steps.3.title": "Keep your confirmation",
      "steps.3.text": "After booking you receive a booking number. Note it down or print it and have it ready for the delivery.",
      "rules.title": "Important rules",
      "rules.1": "Goods receiving takes place only from Monday to Friday. You book a day, not a time.",
      "rules.2": "Deliveries under 20 pallets can be booked at any time.",
      "rules.3": "Deliveries of 20 pallets or more are limited to three per day.",
      "rules.4": "On 11.11.2026 goods receiving remains closed due to stocktaking.",
      "rules.5": "Delivery notes can be uploaded as PDF, JPG or PNG, up to 10 MB.",
      "feedback.title": "Help us get better!",
      "feedback.text": "We have newly developed our digital booking portal for you. Is there anything in the process that we could make easier or better? We welcome every suggestion!",
      "feedback.open": "Send a suggestion",
      "feedback.submit": "Send suggestion",
      "feedback.sending": "Sending...",
      "feedback.close": "Close",
      "feedback.modal.title": "Ideas for the website?",
      "feedback.modal.text.index": "Have you noticed anything in our new booking portal that we could still improve? We welcome your suggestions!",
      "feedback.modal.text.booking": "Have you noticed anything while booking that we could still improve? We welcome your suggestions!",
      "feedback.form.name": "Company / name",
      "feedback.form.email": "Your email (for any queries)",
      "feedback.form.message": "Your suggestion",
      "feedback.form.placeholder": "What could we do better on the website?",
      "feedback.success": "Thank you for your suggestions!",
      "feedback.error": "Unfortunately your suggestion could not be saved. Please try again later or call us: +49 911 30039794.",
      "contact.title": "Contact",
      "contact.queries": "Questions about goods receiving",
      "contact.phone": "Phone:",
      "contact.email": "Email:",
      "footer.admin": "Administration",
      "footer.legal": "Legal"
    },
    ro: {
      "meta.title.index": "Recepție marfă | Darula Transporte",
      "meta.description.index": "Recepția mărfii și regulile de livrare ale Darula Transporte & Logistik. Anunțați livrările online.",
      "nav.skip": "Mergi la conținut",
      "nav.home": "Mergi la pagina principală",
      "nav.main": "Navigație principală",
      "nav.booking": "Către portalul de rezervări",
      "nav.language": "Limbă",
      "nav.feedback": "Sugestie de îmbunătățire",
      "banner.inventur": "Informare importantă: pe 11.11.2026 are loc inventarierea noastră. Recepția mărfii rămâne închisă în acea zi.",
      "hero.title": "Recepție marfă",
      "hero.lead": "Pentru ca activitatea la rampa noastră să decurgă fără probleme, vă rugăm să respectați regulile noastre de livrare și să anunțați fiecare livrare prin sistemul nostru digital de notificare.",
      "hero.cta": "Anunțați o livrare",
      "zeiten.aria": "Program",
      "zeiten.regular.label": "Descărcare obișnuită",
      "zeiten.regular.days": "Luni până joi",
      "zeiten.regular.time": "07:00 – 14:30",
      "zeiten.short.label": "Descărcare redusă",
      "zeiten.short.days": "Vineri",
      "zeiten.short.time": "07:00 – 12:00",
      "zeiten.note.label": "Notă importantă",
      "zeiten.note.days": "Anunțați din timp",
      "zeiten.note.text": "Vă rugăm să anunțați fiecare livrare la timp prin portalul de rezervări.",
      "steps.title": "Cum decurge o livrare",
      "steps.1.title": "Alegeți data",
      "steps.1.text": "Alegeți în portalul de rezervări o zi lucrătoare disponibilă. Calendarul arată câte locuri pentru livrări de 20 de paleți sau mai mult mai sunt libere în acea zi.",
      "steps.2.title": "Introduceți datele livrării",
      "steps.2.text": "Introduceți firma de transport, adresa de e-mail, numărul de paleți și numărul BE sau referința. Avizul de însoțire poate fi încărcat opțional.",
      "steps.3.title": "Păstrați confirmarea",
      "steps.3.text": "După rezervare primiți un număr de rezervare. Notați-l sau tipăriți-l și păstrați-l la îndemână pentru livrare.",
      "rules.title": "Reguli importante",
      "rules.1": "Recepția mărfii are loc doar de luni până vineri. Se rezervă o zi, nu o oră.",
      "rules.2": "Livrările sub 20 de paleți pot fi rezervate oricând.",
      "rules.3": "Livrările de 20 de paleți sau mai mult sunt limitate la trei pe zi.",
      "rules.4": "Pe 11.11.2026 recepția mărfii rămâne închisă din cauza inventarierii.",
      "rules.5": "Avizele de însoțire pot fi încărcate în format PDF, JPG sau PNG, de cel mult 10 MB.",
      "feedback.title": "Ajutați-ne să ne îmbunătățim!",
      "feedback.text": "Am dezvoltat portalul nostru digital de rezervări complet nou pentru dumneavoastră. Observați ceva în proces ce am putea face mai simplu sau mai bine? Ne bucurăm de fiecare sugestie!",
      "feedback.open": "Trimiteți o sugestie",
      "feedback.submit": "Trimiteți sugestia",
      "feedback.sending": "Se trimite...",
      "feedback.close": "Închide",
      "feedback.modal.title": "Idei pentru site?",
      "feedback.modal.text.index": "Observați ceva în noul nostru portal de rezervări ce am putea îmbunătăți? Ne bucurăm de sugestiile dumneavoastră!",
      "feedback.modal.text.booking": "Observați ceva la rezervare ce am putea îmbunătăți? Ne bucurăm de sugestiile dumneavoastră!",
      "feedback.form.name": "Firmă / nume",
      "feedback.form.email": "E-mailul dumneavoastră (pentru eventuale întrebări)",
      "feedback.form.message": "Sugestia dumneavoastră",
      "feedback.form.placeholder": "Ce am putea face mai bine pe site?",
      "feedback.success": "Vă mulțumim pentru sugestii!",
      "feedback.error": "Din păcate, sugestia nu a putut fi salvată. Vă rugăm să încercați din nou mai târziu sau să ne sunați: +49 911 30039794.",
      "contact.title": "Contact",
      "contact.queries": "Întrebări despre recepția mărfii",
      "contact.phone": "Telefon:",
      "contact.email": "E-mail:",
      "footer.admin": "Administrare",
      "footer.legal": "Informații juridice"
    },
    pl: {
      "meta.title.index": "Przyjęcie towaru | Darula Transporte",
      "meta.description.index": "Przyjęcie towaru i zasady dostaw firmy Darula Transporte & Logistik. Dostawy zgłaszać online.",
      "nav.skip": "Przejdź do treści",
      "nav.home": "Przejdź na stronę główną",
      "nav.main": "Nawigacja główna",
      "nav.booking": "Przejdź do portalu rezerwacji",
      "nav.language": "Język",
      "nav.feedback": "Propozycja ulepszenia",
      "banner.inventur": "Ważna informacja: 11.11.2026 odbywa się nasza inwentaryzacja. Przyjęcie towaru w tym dniu jest zamknięte.",
      "hero.title": "Przyjęcie towaru",
      "hero.lead": "Aby praca przy naszej rampie przebiegała sprawnie, prosimy wszystkich partnerów o przestrzeganie naszych zasad dostaw i zgłaszanie każdej dostawy w naszym cyfrowym systemie zapowiedzi.",
      "hero.cta": "Zgłoś dostawę",
      "zeiten.aria": "Godziny otwarcia",
      "zeiten.regular.label": "Standardowy rozładunek",
      "zeiten.regular.days": "Od poniedziałku do czwartku",
      "zeiten.regular.time": "07:00 – 14:30",
      "zeiten.short.label": "Skrócony rozładunek",
      "zeiten.short.days": "Piątek",
      "zeiten.short.time": "07:00 – 12:00",
      "zeiten.note.label": "Ważna uwaga",
      "zeiten.note.days": "Zgłaszać z wyprzedzeniem",
      "zeiten.note.text": "Prosimy zgłaszać każdą dostawę z odpowiednim wyprzedzeniem w portalu rezerwacji.",
      "steps.title": "Jak przebiega dostawa",
      "steps.1.title": "Wybierz termin",
      "steps.1.text": "Wybierz w portalu rezerwacji dostępny dzień roboczy. Kalendarz pokazuje, ile miejsc na dostawy od 20 palet jest tego dnia jeszcze wolnych.",
      "steps.2.title": "Wprowadź dane dostawy",
      "steps.2.text": "Podaj firmę spedycyjną, adres e-mail, liczbę palet oraz numer BE lub referencję. List przewozowy można dodać opcjonalnie.",
      "steps.3.title": "Zachowaj potwierdzenie",
      "steps.3.text": "Po rezerwacji otrzymasz numer rezerwacji. Zapisać lub wydrukować go i mieć pod ręką na czas dostawy.",
      "rules.title": "Ważne zasady",
      "rules.1": "Przyjęcie towaru odbywa się wyłącznie od poniedziałku do piątku. Rezerwuje się dzień, nie godzinę.",
      "rules.2": "Dostawy poniżej 20 palet można rezerwować w dowolnym momencie.",
      "rules.3": "Dostawy od 20 palet są możliwe maksymalnie trzy dziennie.",
      "rules.4": "W dniu 11.11.2026 przyjęcie towaru jest zamknięte z powodu inwentaryzacji.",
      "rules.5": "Listy przewozowe można przesłać jako PDF, JPG lub PNG, maksymalnie 10 MB.",
      "feedback.title": "Wspólnie ulepszajmy naszą stronę!",
      "feedback.text": "Całkowicie na nowo opracowaliśmy dla Państwa nasz cyfrowy portal rezerwacji. Czy zauważyli Państwo w procesie coś, co moglibyśmy jeszcze uprościć lub ulepszyć? Cieszymy się z każdej sugestii!",
      "feedback.open": "Wyślij sugestię",
      "feedback.submit": "Wyślij sugestię",
      "feedback.sending": "Wysyłanie...",
      "feedback.close": "Zamknij",
      "feedback.modal.title": "Pomysły na stronę?",
      "feedback.modal.text.index": "Czy zauważyli Państwo w naszym nowym portalu rezerwacji coś, co moglibyśmy jeszcze ulepszyć? Cieszymy się z Państwa sugestii!",
      "feedback.modal.text.booking": "Czy podczas rezerwacji zauważyli Państwo coś, co moglibyśmy ulepszyć? Cieszymy się z Państwa sugestii!",
      "feedback.form.name": "Firma / imię i nazwisko",
      "feedback.form.email": "Państwa e-mail (do ewentualnych pytań)",
      "feedback.form.message": "Państwa sugestia",
      "feedback.form.placeholder": "Co moglibyśmy zrobić lepiej na stronie?",
      "feedback.success": "Dziękujemy za Państwa sugestie!",
      "feedback.error": "Niestety nie udało się zapisać sugestii. Prosimy spróbować ponownie później lub zadzwonić: +49 911 30039794.",
      "contact.title": "Kontakt",
      "contact.queries": "Pytania dotyczące przyjęcia towaru",
      "contact.phone": "Telefon:",
      "contact.email": "E-mail:",
      "footer.admin": "Administracja",
      "footer.legal": "Informacje prawne"
    },
    cs: {
      "meta.title.index": "Příjem zboží | Darula Transporte",
      "meta.description.index": "Příjem zboží a pravidla dodávek společnosti Darula Transporte & Logistik. Dodávky ohlašujte online.",
      "nav.skip": "Přejít na obsah",
      "nav.home": "Na úvodní stránku",
      "nav.main": "Hlavní navigace",
      "nav.booking": "Do rezervačního portálu",
      "nav.language": "Jazyk",
      "nav.feedback": "Návrh na zlepšení",
      "banner.inventur": "Důležitá informace: 11.11.2026 probíhá naše inventura. Příjem zboží je v tento den uzavřen.",
      "hero.title": "Příjem zboží",
      "hero.lead": "Aby příjem zboží u naší rampy probíhal hladce, žádáme všechny partnery, aby dodržovali naše pravidla pro dodávky a každou dodávku ohlásili prostřednictvím našeho digitálního systému pro avizaci dodávek.",
      "hero.cta": "Ohlásit dodávku",
      "zeiten.aria": "Otevírací doba",
      "zeiten.regular.label": "Běžné vykládání",
      "zeiten.regular.days": "Pondělí až čtvrtek",
      "zeiten.regular.time": "07:00 – 14:30",
      "zeiten.short.label": "Zkrácené vykládání",
      "zeiten.short.days": "Pátek",
      "zeiten.short.time": "07:00 – 12:00",
      "zeiten.note.label": "Důležitá poznámka",
      "zeiten.note.days": "Ohlásit předem",
      "zeiten.note.text": "Každou dodávku prosíme včas ohlaste prostřednictvím rezervačního portálu.",
      "steps.title": "Jak probíhá dodávka",
      "steps.1.title": "Vyberte termín",
      "steps.1.text": "V rezervačním portálu vyberte dostupný pracovní den. Kalendář ukazuje, kolik míst pro dodávky od 20 palet je v daný den ještě volných.",
      "steps.2.title": "Zadejte údaje o dodávce",
      "steps.2.text": "Uveďte speditérskou firmu, e-mailovou adresu, počet palet a číslo BE nebo referenci. Dodací list můžete volitelně nahrát.",
      "steps.3.title": "Uschovejte potvrzení",
      "steps.3.text": "Po rezervaci obdržíte číslo rezervace. Zapište si ho nebo vytiskněte a mějte ho připravené pro dodávku.",
      "rules.title": "Důležitá pravidla",
      "rules.1": "Příjem zboží probíhá pouze od pondělí do pátku. Rezervuje se den, nikoli čas.",
      "rules.2": "Dodávky do 20 palet lze kdykoli rezervovat.",
      "rules.3": "Dodávky od 20 palet jsou možné nejvýše tři denně.",
      "rules.4": "Dne 11.11.2026 je příjem zboží kvůli inventuře uzavřen.",
      "rules.5": "Dodací listy lze nahrát ve formátu PDF, JPG nebo PNG, nejvýše 10 MB.",
      "feedback.title": "Pomozte nám být lepší!",
      "feedback.text": "Náš digitální rezervační portál jsme pro vás zcela nově vyvinuli. Všimli jste si v průběhu něčeho, co bychom mohli ještě zjednodušit nebo zlepšit? Každého návrhu si velmi vážíme!",
      "feedback.open": "Odeslat návrh",
      "feedback.submit": "Odeslat návrh",
      "feedback.sending": "Odesílání...",
      "feedback.close": "Zavřít",
      "feedback.modal.title": "Nápady na web?",
      "feedback.modal.text.index": "Všimli jste si v našem novém rezervačním portálu něčeho, co bychom mohli ještě zlepšit? Vaše návrhy uvítáme!",
      "feedback.modal.text.booking": "Všimli jste si při rezervaci něčeho, co bychom mohli zlepšit? Vaše návrhy uvítáme!",
      "feedback.form.name": "Firma / jméno",
      "feedback.form.email": "Váš e-mail (pro případné dotazy)",
      "feedback.form.message": "Váš návrh",
      "feedback.form.placeholder": "Co bychom mohli na webu zlepšit?",
      "feedback.success": "Děkujeme za vaše návrhy!",
      "feedback.error": "Bohužel se návrh nepodařilo uložit. Zkuste to prosím později znovu nebo nám zavolejte: +49 911 30039794.",
      "contact.title": "Kontakt",
      "contact.queries": "Dotazy k příjmu zboží",
      "contact.phone": "Telefon:",
      "contact.email": "E-mail:",
      "footer.admin": "Správa",
      "footer.legal": "Právní informace"
    },
    tr: {
      "meta.title.index": "Mal kabulü | Darula Transporte",
      "meta.description.index": "Darula Transporte & Logistik mal kabulü ve teslimat kuralları. Teslimatları dijital olarak bildirin.",
      "nav.skip": "İçeriğe geç",
      "nav.home": "Ana sayfaya git",
      "nav.main": "Ana gezinme",
      "nav.booking": "Rezervasyon portalına git",
      "nav.language": "Dil",
      "nav.feedback": "İyileştirme önerisi",
      "banner.inventur": "Önemli bilgi: 11.11.2026 tarihinde envanter sayımımız yapılacaktır. Mal kabulü o gün kapalıdır.",
      "hero.title": "Mal kabulü",
      "hero.lead": "Rampamızdaki işleyişin sorunsuz ilerlemesi için tüm iş ortaklarımızdan teslimat kurallarımıza uymalarını ve her teslimatı dijital bildirim sistemimiz üzerinden kaydettirmelerini rica ediyoruz.",
      "hero.cta": "Teslimat bildirin",
      "zeiten.aria": "Çalışma saatleri",
      "zeiten.regular.label": "Normal boşaltma",
      "zeiten.regular.days": "Pazartesi – Perşembe",
      "zeiten.regular.time": "07:00 – 14:30",
      "zeiten.short.label": "Kısaltılmış boşaltma",
      "zeiten.short.days": "Cuma",
      "zeiten.short.time": "07:00 – 12:00",
      "zeiten.note.label": "Önemli not",
      "zeiten.note.days": "Önceden bildirin",
      "zeiten.note.text": "Lütfen her teslimatı zamanında rezervasyon portalı üzerinden bildirin.",
      "steps.title": "Teslimat nasıl ilerler",
      "steps.1.title": "Tarih seçin",
      "steps.1.text": "Rezervasyon portalında uygun bir iş günü seçin. Takvim, o gün 20 palet ve üzeri teslimatlar için kaç yerin hâlâ boş olduğunu gösterir.",
      "steps.2.title": "Teslimat bilgilerini girin",
      "steps.2.text": "Nakliye firmasını, e-posta adresini, palet sayısını ile BE numarası veya referansı girin. Teslimat irsaliyesini isteğe bağlı olarak yükleyebilirsiniz.",
      "steps.3.title": "Belgeyi saklayın",
      "steps.3.text": "Rezervasyondan sonra bir rezervasyon numarası alırsınız. Bunu not edin veya yazdırın ve teslimat için hazır bulundurun.",
      "rules.title": "Önemli kurallar",
      "rules.1": "Mal kabulü yalnızca Pazartesi ile Cuma arasında yapılır. Rezervasyon bir saat için değil, bir gün için yapılır.",
      "rules.2": "20 palet altındaki teslimatlar istediğiniz zaman rezerve edilebilir.",
      "rules.3": "20 palet ve üzeri teslimatlar günde en fazla üç tane olabilir.",
      "rules.4": "11.11.2026 tarihinde envanter nedeniyle mal kabulü kapalı kalır.",
      "rules.5": "Teslimat irsaliyeleri PDF, JPG veya PNG formatında, en fazla 10 MB olarak yüklenebilir.",
      "feedback.title": "Daha iyi olmamıza yardımcı olun!",
      "feedback.text": "Dijital rezervasyon portalımızı sizin için tamamen yeniden geliştirdik. Süreçte daha kolay ya da daha iyi yapabileceğimiz bir şey fark ederseniz bizimle paylaşın. Her öneriyi memnuniyetle karşılarız!",
      "feedback.open": "Öneri gönderin",
      "feedback.submit": "Öneriyi gönder",
      "feedback.sending": "Gönderiliyor...",
      "feedback.close": "Kapat",
      "feedback.modal.title": "Web sitesi için fikirleriniz?",
      "feedback.modal.text.index": "Yeni rezervasyon portalımızda iyileştirebileceğimiz bir şey fark ettiniz mi? Önerilerinizi bekliyoruz!",
      "feedback.modal.text.booking": "Rezervasyon yaparken iyileştirebileceğimiz bir şey fark ettiniz mi? Önerilerinizi bekliyoruz!",
      "feedback.form.name": "Firma / Ad",
      "feedback.form.email": "E-posta adresiniz (olası sorular için)",
      "feedback.form.message": "İyileştirme öneriniz",
      "feedback.form.placeholder": "Web sitesinde neyi daha iyi yapabiliriz?",
      "feedback.success": "Önerileriniz için teşekkür ederiz!",
      "feedback.error": "Maalesef öneriniz kaydedilemedi. Lütfen daha sonra tekrar deneyin veya bizi arayın: +49 911 30039794.",
      "contact.title": "İletişim",
      "contact.queries": "Mal kabulü ile ilgili sorular",
      "contact.phone": "Telefon:",
      "contact.email": "E-posta:",
      "footer.admin": "Yönetim",
      "footer.legal": "Yasal bilgiler"
    },
    uk: {
      "meta.title.index": "Прийом товарів | Darula Transporte",
      "meta.description.index": "Правила прийому товарів і доставки компанії Darula Transporte & Logistik. Повідомляйте про доставки онлайн.",
      "nav.skip": "Перейти до вмісту",
      "nav.home": "На головну сторінку",
      "nav.main": "Головна навігація",
      "nav.booking": "До порталу бронювання",
      "nav.language": "Мова",
      "nav.feedback": "Пропозиція щодо покращення",
      "banner.inventur": "Важлива інформація: 11.11.2026 у нас проходить інвентаризація. Прийом товарів того дня закритий.",
      "hero.title": "Прийом товарів",
      "hero.lead": "Щоб робота біля нашої рампи проходила без збоїв, просимо всіх партнерів дотримуватися наших правил доставки та реєструвати кожну доставку через нашу цифрову систему попереднього повідомлення.",
      "hero.cta": "Повідомити про доставку",
      "zeiten.aria": "Години роботи",
      "zeiten.regular.label": "Звичайне розвантаження",
      "zeiten.regular.days": "Понеділок – четвер",
      "zeiten.regular.time": "07:00 – 14:30",
      "zeiten.short.label": "Скорочене розвантаження",
      "zeiten.short.days": "П'ятниця",
      "zeiten.short.time": "07:00 – 12:00",
      "zeiten.note.label": "Важлива примітка",
      "zeiten.note.days": "Повідомляти заздалегідь",
      "zeiten.note.text": "Будь ласка, своєчасно реєструйте кожну доставку через портал бронювання.",
      "steps.title": "Як відбувається доставка",
      "steps.1.title": "Оберіть дату",
      "steps.1.text": "У порталі бронювання оберіть доступний робочий день. Календар показує, скільки місць для доставок від 20 палет ще вільні того дня.",
      "steps.2.title": "Введіть дані доставки",
      "steps.2.text": "Вкажіть транспортну компанію, адресу електронної пошти, кількість палет та номер BE або посилання. Накладну можна завантажити за бажанням.",
      "steps.3.title": "Збережіть підтвердження",
      "steps.3.text": "Після бронювання ви отримаєте номер бронювання. Запишіть або роздрукуйте його та тримайте напоготові для доставки.",
      "rules.title": "Важливі правила",
      "rules.1": "Прийом товарів відбувається лише з понеділка по п'ятницю. Бронюється день, а не година.",
      "rules.2": "Доставки менше 20 палет можна бронювати в будь-який час.",
      "rules.3": "Доставки від 20 палет обмежені трьома на день.",
      "rules.4": "11.11.2026 прийом товарів закритий через інвентаризацію.",
      "rules.5": "Накладні можна завантажувати у форматах PDF, JPG або PNG, розміром до 10 МБ.",
      "feedback.title": "Допоможіть нам стати кращими!",
      "feedback.text": "Ми повністю з нуля розробили для вас наш цифровий портал бронювання. Помітили щось у процесі, що ми могли б зробити простішим або кращим? Ми будемо раді кожній пропозиції!",
      "feedback.open": "Надіслати пропозицію",
      "feedback.submit": "Надіслати пропозицію",
      "feedback.sending": "Надсилання...",
      "feedback.close": "Закрити",
      "feedback.modal.title": "Ідеї для сайту?",
      "feedback.modal.text.index": "Чи помітили ви щось у нашому новому порталі бронювання, що ми могли б ще покращити? Ми будемо раді вашим пропозиціям!",
      "feedback.modal.text.booking": "Чи помітили ви щось під час бронювання, що ми могли б покращити? Ми будемо раді вашим пропозиціям!",
      "feedback.form.name": "Компанія / ім'я",
      "feedback.form.email": "Ваша електронна пошта (для можливих уточнень)",
      "feedback.form.message": "Ваша пропозиція",
      "feedback.form.placeholder": "Що ми могли б зробити краще на сайті?",
      "feedback.success": "Дякуємо за ваші пропозиції!",
      "feedback.error": "На жаль, пропозицію не вдалося зберегти. Будь ласка, спробуйте пізніше або зателефонуйте нам: +49 911 30039794.",
      "contact.title": "Контакти",
      "contact.queries": "Питання щодо прийому товарів",
      "contact.phone": "Телефон:",
      "contact.email": "E-mail:",
      "footer.admin": "Адміністрування",
      "footer.legal": "Правова інформація"
    },
    bg: {
      "meta.title.index": "Приемане на стоки | Darula Transporte",
      "meta.description.index": "Приемане на стоки и правила за доставка на Darula Transporte & Logistik. Съобщавайте за доставките онлайн.",
      "nav.skip": "Към съдържанието",
      "nav.home": "Към началната страница",
      "nav.main": "Основна навигация",
      "nav.booking": "Към портала за резервации",
      "nav.language": "Език",
      "nav.feedback": "Предложение за подобрение",
      "banner.inventur": "Важна информация: на 11.11.2026 провеждаме инвентаризация. Приемането на стоки в този ден е затворено.",
      "hero.title": "Приемане на стоки",
      "hero.lead": "За да протича безпроблемно работата при нашата рампа, молим всички партньори да спазват нашите правила за доставка и да регистрират всяка доставка чрез нашата дигитална система за предварително известяване.",
      "hero.cta": "Съобщете за доставка",
      "zeiten.aria": "Работно време",
      "zeiten.regular.label": "Редовно разтоварване",
      "zeiten.regular.days": "Понеделник до четвъртък",
      "zeiten.regular.time": "07:00 – 14:30",
      "zeiten.short.label": "Съкратено разтоварване",
      "zeiten.short.days": "Петък",
      "zeiten.short.time": "07:00 – 12:00",
      "zeiten.note.label": "Важна забележка",
      "zeiten.note.days": "Съобщавайте предварително",
      "zeiten.note.text": "Моля, регистрирайте всяка доставка навреме чрез портала за резервации.",
      "steps.title": "Как протича доставката",
      "steps.1.title": "Изберете дата",
      "steps.1.text": "Изберете в портала за резервации свободен работен ден. Календарът показва колко места за доставки от 20 палета или повече са все още свободни за деня.",
      "steps.2.title": "Въведете данните за доставката",
      "steps.2.text": "Посочете спедиторската фирма, имейл адреса, броя палети и номера BE или референцията. Товарителницата можете да качите по желание.",
      "steps.3.title": "Запазете потвърждението",
      "steps.3.text": "След резервацията получавате номер на резервация. Запишете го или го отпечатайте и го дръжте под ръка за доставката.",
      "rules.title": "Важни правила",
      "rules.1": "Приемането на стоки се извършва само от понеделник до петък. Резервира се ден, а не час.",
      "rules.2": "Доставки под 20 палета могат да се резервират по всяко време.",
      "rules.3": "Доставките от 20 палета нагоре са ограничени до три на ден.",
      "rules.4": "На 11.11.2026 приемането на стоки остава затворено поради инвентаризация.",
      "rules.5": "Товарителници могат да се качват като PDF, JPG или PNG, до 10 MB.",
      "feedback.title": "Помогнете ни да се подобрим!",
      "feedback.text": "Разработихме за вас изцяло нов дигитален портал за резервации. Забелязвате ли нещо в процеса, което бихме могли да направим по-просто или по-добро? Всяко предложение е добре дошло!",
      "feedback.open": "Изпратете предложение",
      "feedback.submit": "Изпрати предложение",
      "feedback.sending": "Изпраща се...",
      "feedback.close": "Затвори",
      "feedback.modal.title": "Идеи за уебсайта?",
      "feedback.modal.text.index": "Забелязвате ли нещо в новия ни портал за резервации, което бихме могли да подобрим? Очакваме вашите предложения!",
      "feedback.modal.text.booking": "Забелязахте ли нещо по време на резервацията, което бихме могли да подобрим? Очакваме вашите предложения!",
      "feedback.form.name": "Фирма / име",
      "feedback.form.email": "Вашият имейл (за евентуални въпроси)",
      "feedback.form.message": "Вашето предложение",
      "feedback.form.placeholder": "Какво бихме могли да направим по-добре в уебсайта?",
      "feedback.success": "Благодарим ви за предложенията!",
      "feedback.error": "За съжаление предложението не можа да бъде запазено. Моля, опитайте отново по-късно или ни се обадете: +49 911 30039794.",
      "contact.title": "Контакт",
      "contact.queries": "Въпроси относно приемането на стоки",
      "contact.phone": "Телефон:",
      "contact.email": "Имейл:",
      "footer.admin": "Администрация",
      "footer.legal": "Правна информация"
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
    } catch (fehler) {
      // Kein Speicher verfügbar (z. B. privater Modus): die Sprache gilt nur für diese Seite.
    }
    uebersetzeSeite();
    document.dispatchEvent(new CustomEvent("i18n:change", { detail: { sprache: code } }));
  }

  const locale = () => SPRACHEN[aktuelle].locale;

  // isoDatum im Format "JJJJ-MM-TT" in das Datumsformat der aktuellen Sprache umwandeln
  function formatDatum(isoDatum) {
    const [jahr, monat, tag] = isoDatum.split("-").map(Number);
    return new Intl.DateTimeFormat(locale(), {
      timeZone: "UTC", day: "2-digit", month: "2-digit", year: "numeric"
    }).format(new Date(Date.UTC(jahr, monat - 1, tag)));
  }

  // Monatsname und Jahr; monat ist 0-basiert wie in JavaScript
  function formatMonat(jahr, monat) {
    return new Intl.DateTimeFormat(locale(), {
      timeZone: "UTC", month: "long", year: "numeric"
    }).format(new Date(Date.UTC(jahr, monat, 1)));
  }

  function formatZeitpunkt(zeitpunkt) {
    return new Date(zeitpunkt).toLocaleDateString(locale(), { timeZone: "Europe/Berlin" });
  }

  // Füllt ein <select> mit den Sprachen und hält es mit der aktuellen Sprache synchron
  function mountSwitcher(auswahl) {
    auswahl.replaceChildren();
    for (const [code, info] of Object.entries(SPRACHEN)) {
      const option = document.createElement("option");
      option.value = code;
      option.lang = code;
      option.textContent = info.name;
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
    t,
    setzeSprache,
    aktuelleSprache: () => aktuelle,
    locale,
    formatDatum,
    formatMonat,
    formatZeitpunkt,
    mountSwitcher,
    uebersetze: uebersetzeSeite,
    SPRACHEN,
    TEXTE
  };
})();
