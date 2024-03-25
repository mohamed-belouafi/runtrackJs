function jourTravaille(date) {
    const jour = date.getDate();
    const mois = date.getMonth() + 1;
    const annee = date.getFullYear();

    const joursFeries = ["01/01", "05/04", "01/05", "08/05", "21/05", "14/07", "15/08", "01/11", "11/11", "25/12"];
    const weekEnd = [0, 6]; // 0 pour dimanche, 6 pour samedi

    const dateString = ("0" + jour).slice(-2) + "/" + ("0" + mois).slice(-2);

    if (joursFeries.includes(dateString)) {
        console.log(`Le ${jour}/${mois}/${annee} est un jour férié.`);
    } else if (weekEnd.includes(date.getDay())) {
        console.log(`Non, le ${jour}/${mois}/${annee} est un week-end.`);
    } else {
        console.log(`Oui, le ${jour}/${mois}/${annee} est un jour travaillé.`);
    }
}

const date = new Date(2024, 0, 1);
jourTravaille(date);
const autredate = new Date(2024, 1, 29)
jourTravaille(autredate);
const date1 = new Date (2024, 4, 11)
jourTravaille(date1);