/*
 * Betriebsurlaub 2026/2027: Übersetzungen als Ergänzung zu i18n.js.
 * Diese Datei direkt nach i18n.js laden. i18n.js bleibt unverändert.
 * Die Texte werden in window.I18n.TEXTE eingetragen, die t()-Funktion von i18n.js
 * greift darauf zu, daher funktioniert der Sprachwechsel ohne weitere Anpassungen.
 */
(() => {
  "use strict";

  if (!window.I18n || !window.I18n.TEXTE) {
    console.error("i18n-betriebsurlaub.js muss nach i18n.js geladen werden.");
    return;
  }

  const ERGAENZUNGEN = {
    de: {
      "bu.title": "BETRIEBSURLAUB 2026/2027",
      "bu.from.label": "Von",
      "bu.to.label": "Bis",
      "bu.reopen.label": "Wiedereröffnung der Warenannahme",
      "bu.from": "Montag, 21.12.2026",
      "bu.to": "Freitag, 08.01.2027",
      "bu.reopen": "Montag, 11.01.2027",
      "bu.text": "Wir haben Betriebsurlaub vom 21.12.2026 bis einschließlich 08.01.2027. Ab dem 11.01.2027 sind wir wieder für Sie da. Ab diesem Tag ist auch unsere Warenannahme wieder geöffnet. Wir wünschen Ihnen frohe Weihnachten und einen guten Rutsch ins neue Jahr!",
      "rules.bu": "Vom 21.12.2026 bis einschließlich 08.01.2027 ist die Warenannahme wegen unseres Betriebsurlaubs geschlossen. Ab dem 11.01.2027 ist sie wieder geöffnet.",
      "avis.info.bu": "Vom 21.12.2026 bis einschließlich 08.01.2027 ist Betriebsurlaub. In dieser Zeit können keine Anlieferungen gebucht werden. Ab dem 11.01.2027 ist die Buchung wieder möglich.",
      "avis.bu.booking": "Während des Betriebsurlaubs können keine Anlieferungen gebucht werden. Ab Montag, 11.01.2027, ist die Buchung wieder möglich.",
      "avis.status.closed": "Betriebsurlaub – geschlossen",
      "avis.status.closedShort": "Betriebs\u00ADurlaub",
      "avis.err.closed": "Für diesen Zeitraum können keine Anlieferungen gebucht werden, da unser Betriebsurlaub läuft (21.12.2026 bis 08.01.2027)."
    },
    en: {
      "bu.title": "HOLIDAY CLOSURE 2026/2027",
      "bu.from.label": "From",
      "bu.to.label": "Until",
      "bu.reopen.label": "Goods receiving reopens",
      "bu.from": "Monday, 21.12.2026",
      "bu.to": "Friday, 08.01.2027",
      "bu.reopen": "Monday, 11.01.2027",
      "bu.text": "We are closed for our holiday break from 21.12.2026 to 08.01.2027 inclusive. We are back for you from 11.01.2027. Goods receiving reopens on that day as well. We wish you a Merry Christmas and a Happy New Year!",
      "rules.bu": "From 21.12.2026 to 08.01.2027 inclusive, goods receiving is closed for our holiday break. It reopens on 11.01.2027.",
      "avis.info.bu": "From 21.12.2026 to 08.01.2027 inclusive is our holiday closure. No deliveries can be booked during this period. Booking reopens on 11.01.2027.",
      "avis.bu.booking": "No deliveries can be booked during our holiday closure. Booking reopens on Monday, 11.01.2027.",
      "avis.status.closed": "Holiday closure – closed",
      "avis.status.closedShort": "Holiday closure",
      "avis.err.closed": "No deliveries can be booked for this period, as our holiday closure runs from 21.12.2026 to 08.01.2027."
    },
    ro: {
      "bu.title": "ÎNCHIDERE PENTRU CONCEDIU 2026/2027",
      "bu.from.label": "De la",
      "bu.to.label": "Până la",
      "bu.reopen.label": "Recepția mărfurilor se redeschide",
      "bu.from": "Luni, 21.12.2026",
      "bu.to": "Vineri, 08.01.2027",
      "bu.reopen": "Luni, 11.01.2027",
      "bu.text": "Avem concediu colectiv de la 21.12.2026 până la 08.01.2027, inclusiv. Din 11.01.2027 suntem din nou la dispoziția dumneavoastră. Din această zi, recepția mărfurilor este din nou deschisă. Vă dorim Crăciun fericit și La mulți ani!",
      "rules.bu": "În perioada 21.12.2026 – 08.01.2027, inclusiv, recepția mărfurilor este închisă din cauza concediului colectiv. Se redeschide la 11.01.2027.",
      "avis.info.bu": "Între 21.12.2026 și 08.01.2027, inclusiv, avem concediu colectiv, iar în această perioadă nu se pot programa livrări. Programarea redevine posibilă de la 11.01.2027.",
      "avis.bu.booking": "În perioada concediului colectiv nu se pot programa livrări. Programarea redevine posibilă luni, 11.01.2027.",
      "avis.status.closed": "Închis pentru concediu colectiv",
      "avis.status.closedShort": "Concediu",
      "avis.err.closed": "Pentru această perioadă nu se pot programa livrări, deoarece avem concediu colectiv (21.12.2026 – 08.01.2027)."
    },
    pl: {
      "bu.title": "URLOP ZAKŁADOWY 2026/2027",
      "bu.from.label": "Od",
      "bu.to.label": "Do",
      "bu.reopen.label": "Ponowne otwarcie przyjmowania towaru",
      "bu.from": "Poniedziałek, 21.12.2026",
      "bu.to": "Piątek, 08.01.2027",
      "bu.reopen": "Poniedziałek, 11.01.2027",
      "bu.text": "Mamy urlop zakładowy od 21.12.2026 do 08.01.2027 włącznie. Od 11.01.2027 jesteśmy ponownie do Państwa dyspozycji. Od tego dnia przyjmowanie towarów jest ponownie otwarte. Życzymy Państwu Wesołych Świąt i szczęśliwego Nowego Roku!",
      "rules.bu": "Od 21.12.2026 do 08.01.2027 włącznie przyjmowanie towarów jest zamknięte z powodu urlopu zakładowego. Ponownie otwarte od 11.01.2027.",
      "avis.info.bu": "Od 21.12.2026 do 08.01.2027 włącznie trwa urlop zakładowy. W tym czasie nie można rezerwować dostaw. Rezerwacja jest ponownie możliwa od 11.01.2027.",
      "avis.bu.booking": "W czasie urlopu zakładowego nie można rezerwować dostaw. Rezerwacja jest ponownie możliwa w poniedziałek, 11.01.2027.",
      "avis.status.closed": "Urlop zakładowy – zamknięte",
      "avis.status.closedShort": "Urlop",
      "avis.err.closed": "Na ten okres nie można rezerwować dostaw, ponieważ trwa urlop zakładowy (21.12.2026 – 08.01.2027)."
    },
    cs: {
      "bu.title": "FIREMNÍ DOVOLENÁ 2026/2027",
      "bu.from.label": "Od",
      "bu.to.label": "Do",
      "bu.reopen.label": "Opětovné otevření příjmu zboží",
      "bu.from": "Pondělí, 21. 12. 2026",
      "bu.to": "Pátek, 8. 1. 2027",
      "bu.reopen": "Pondělí, 11. 1. 2027",
      "bu.text": "Máme firemní dovolenou od 21. 12. 2026 do 8. 1. 2027 včetně. Od 11. 1. 2027 jsme pro vás opět k dispozici. Od tohoto dne je opět otevřený také příjem zboží. Přejeme vám krásné Vánoce a šťastný nový rok!",
      "rules.bu": "Od 21. 12. 2026 do 8. 1. 2027 včetně je příjem zboží kvůli firemní dovolené zavřený. Znovu otevřeno od 11. 1. 2027.",
      "avis.info.bu": "Od 21. 12. 2026 do 8. 1. 2027 včetně je firemní dovolená. Během této doby nelze rezervovat dodávky. Rezervace je opět možná od 11. 1. 2027.",
      "avis.bu.booking": "Během firemní dovolené nelze rezervovat dodávky. Rezervace je opět možná v pondělí 11. 1. 2027.",
      "avis.status.closed": "Firemní dovolená – zavřeno",
      "avis.status.closedShort": "Dovolená",
      "avis.err.closed": "Pro toto období nelze rezervovat dodávky, protože probíhá firemní dovolená (21. 12. 2026 – 8. 1. 2027)."
    },
    tr: {
      "bu.title": "KOLEKTİF TATİL 2026/2027",
      "bu.from.label": "Başlangıç",
      "bu.to.label": "Bitiş",
      "bu.reopen.label": "Mal kabulü yeniden açılıyor",
      "bu.from": "Pazartesi, 21.12.2026",
      "bu.to": "Cuma, 08.01.2027",
      "bu.reopen": "Pazartesi, 11.01.2027",
      "bu.text": "21.12.2026 ile 08.01.2027 tarihleri arasında (bu tarihler dahil) kolektif tatildeyiz. 11.01.2027 tarihinden itibaren yeniden hizmetinizdeyiz. Mal kabulü de bu tarihten itibaren yeniden açıktır. Size mutlu bir Noel ve güzel bir yeni yıl dileriz!",
      "rules.bu": "21.12.2026 – 08.01.2027 tarihleri arasında (bu tarihler dahil) kolektif tatil nedeniyle mal kabulü kapalıdır. 11.01.2027 tarihinde yeniden açılır.",
      "avis.info.bu": "21.12.2026 – 08.01.2027 tarihleri arasında (bu tarihler dahil) kolektif tatildeyiz. Bu süre içinde teslimat rezervasyonu yapılamaz. Rezervasyon 11.01.2027 tarihinden itibaren yeniden mümkündür.",
      "avis.bu.booking": "Kolektif tatil süresince teslimat rezervasyonu yapılamaz. Rezervasyon Pazartesi, 11.01.2027 tarihinde yeniden açılır.",
      "avis.status.closed": "Kolektif tatil – kapalı",
      "avis.status.closedShort": "Tatil",
      "avis.err.closed": "Bu dönem için teslimat rezervasyonu yapılamaz, çünkü kolektif tatil 21.12.2026 – 08.01.2027 tarihleri arasındadır."
    },
    uk: {
      "bu.title": "КОРПОРАТИВНА ВІДПУСТКА 2026/2027",
      "bu.from.label": "З",
      "bu.to.label": "По",
      "bu.reopen.label": "Прийом товарів відновлюється",
      "bu.from": "Понеділок, 21.12.2026",
      "bu.to": "П’ятниця, 08.01.2027",
      "bu.reopen": "Понеділок, 11.01.2027",
      "bu.text": "Ми перебуваємо на корпоративній відпустці з 21.12.2026 по 08.01.2027 включно. З 11.01.2027 ми знову до ваших послуг. Прийом товарів знову працює з цього дня. Бажаємо вам Різдвяних свят і щасливого Нового року!",
      "rules.bu": "З 21.12.2026 по 08.01.2027 включно прийом товарів закрито через корпоративну відпустку. Знову відкриється 11.01.2027.",
      "avis.info.bu": "З 21.12.2026 по 08.01.2027 включно триває корпоративна відпустка. У цей період бронювання поставок неможливе. Бронювання знову доступне з 11.01.2027.",
      "avis.bu.booking": "Під час корпоративної відпустки бронювання поставок неможливе. Бронювання знову доступне в понеділок, 11.01.2027.",
      "avis.status.closed": "Корпоративна відпустка – зачинено",
      "avis.status.closedShort": "Відпустка",
      "avis.err.closed": "На цей період бронювання поставок неможливе, оскільки триває корпоративна відпустка (21.12.2026 – 08.01.2027)."
    },
    bg: {
      "bu.title": "КОЛЕКТИВНА ПОЧИВКА 2026/2027",
      "bu.from.label": "От",
      "bu.to.label": "До",
      "bu.reopen.label": "Приемането на стоки се възобновява",
      "bu.from": "Понеделник, 21.12.2026",
      "bu.to": "Петък, 08.01.2027",
      "bu.reopen": "Понеделник, 11.01.2027",
      "bu.text": "Ние сме в колективна почивка от 21.12.2026 до 08.01.2027 включително. От 11.01.2027 отново сме на ваше разположение. Приемането на стоки отново е отворено от този ден. Желаем ви Весела Коледа и щастлива Нова година!",
      "rules.bu": "От 21.12.2026 до 08.01.2027 включително приемането на стоки е затворено заради колективната почивка. Отново отваря на 11.01.2027.",
      "avis.info.bu": "От 21.12.2026 до 08.01.2027 включително е колективната почивка. През този период не могат да се резервират доставки. Резервацията отново е възможна от 11.01.2027.",
      "avis.bu.booking": "По време на колективната почивка не могат да се резервират доставки. Резервацията отново е възможна в понеделник, 11.01.2027.",
      "avis.status.closed": "Колективна почивка – затворено",
      "avis.status.closedShort": "Почивка",
      "avis.err.closed": "За този период не могат да се резервират доставки, тъй като е колективната почивка (21.12.2026 – 08.01.2027)."
    }
  };

  for (const [sprache, schluessel] of Object.entries(ERGAENZUNGEN)) {
    const ziel = window.I18n.TEXTE[sprache] || (window.I18n.TEXTE[sprache] = {});
    Object.assign(ziel, schluessel);
  }
})();
