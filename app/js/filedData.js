export const defaultAgenda = {
    label: {
        avant: `C'est trop tard mais il est encore temps de jeter un oeil`,
        apres: `A noter sur vos agendas`
    },
    avant: [{
        date: new Date("December 9, 2017 18:00:00"),
        info: {
            titre: `Arts & Guinguette fête Noel`,
            description: `Festival musique live avec magalie Missko et Up your soul
            construction artistique<br>
            animation enfant<br>
            restauration et biere de qualité, <br>
            fabrication Maison<br>
            Convient aux enfants`,
            adresse: `Place de la République, 13640 La Roque-d'Anthéron, France`,
            adresseGoogle: `https://www.google.fr/maps/place/Place+de+la+R%C3%A9publique,+13640+La+Roque-d'Anth%C3%A9ron/@43.7149263,5.3091953,17z/data=!3m1!4b1!4m5!3m4!1s0x12ca1e82b778dfe5:0x68c1baca38f27eae!8m2!3d43.7149263!4d5.311384`,
            evtFacebook: `https://www.facebook.com/events/137457863675009/`
        }
    }, {
        date: new Date("May 27, 2017 18:00:00"),
        info: {
            titre: `Arts & Guinguette`,
            description: `Musique "live"............Arts de la rue.............Expos...........Gastronomie Belge (spécialités de bières et de VRAIES frites).................Miniguinguette pour les enfants.........Et 
            surtout des SOURIRES et des surprises !!
            <br>
            "Arts et guinguette", c'est tout ça....
            <br>
            <br>
            Premier RDV : SAMEDI 27 MAI de midi à minuit pour une journée festive Place Dolmetta à La Roque d'Anthéron <br>
            Entrée gratuite`,
            adresse: `Place d'Olmetta, 13640 La Roque-d'Anthéron, France`,
            adresseGoogle: `https://www.google.fr/maps/place/Place+de+la+R%C3%A9publique,+13640+La+Roque-d'Anth%C3%A9ron/@43.7149263,5.3091953,17z/data=!3m1!4b1!4m5!3m4!1s0x12ca1e82b778dfe5:0x68c1baca38f27eae!8m2!3d43.7149263!4d5.311384`,
            evtFacebook: `https://www.facebook.com/events/163382837488442/`


        }
    }],
    apres: [{
        date: new Date("May 3, 2018 18:00:00"),
        info: {
            titre: `Arts & Guinguette fête le Printemps`,
            description: `Musique "live"............Arts de la rue.............Expos...........Gastronomie Belge (spécialités de bières et de VRAIES frites).................Miniguinguette pour les enfants.........Et 
            surtout des SOURIRES et des surprises !!
            <br>
            "Arts et guinguette", c'est tout ça....
            <br>
            <br>
            ON revient le : SAMEDI 3 MAI de midi à minuit pour une journée festive Place Dolmetta à La Roque d'Anthéron <br>
            Entrée gratuite`,
            adresse: `Place de la République, 13640 La Roque-d'Anthéron, France`,
            adresseGoogle: `https://www.google.fr/maps/place/Place+de+la+R%C3%A9publique,+13640+La+Roque-d'Anth%C3%A9ron/@43.7149263,5.3091953,17z/data=!3m1!4b1!4m5!3m4!1s0x12ca1e82b778dfe5:0x68c1baca38f27eae!8m2!3d43.7149263!4d5.311384`,
            evtFacebook: `https://www.facebook.com/events/137457863675009/`
        }
    }]
};

export function rempliMoiCa(agenda) {
    'use strict';
    if (Object.keys(agenda).length < 1) {
        agenda = defaultAgenda;
    }
    var i = 0;
    let jourDay = ['', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
    let moisMonth = ['JANVIER', 'FEVRIER', 'MARS', 'AVRIL', 'MAI', 'JUIN', 'JUILLET', 'AOUT', 'SEPTEMBRE', 'OCTOBRE', 'NOVEMBRE', 'DÉCEMBRE'];
    let leJour = jourDay[agenda.avant[0].date.getDate()];
    let leMois = moisMonth[agenda.avant[0].date.getMonth()];

    agenda.avant.forEach(element => {
        agenda.avant[i].affiche = {
            leJourHTML: jourDay[agenda.avant[i].date.getDay()],
            leNumeroDuJourHTML: agenda.avant[i].date.getDate(),
            leMoisHTML: moisMonth[agenda.avant[i].date.getMonth()].substr(0, 3)
        }
        i++;
    });
    var i = 0;
    agenda.apres.forEach(element => {
        agenda.apres[i].affiche = {
            leJourHTML: jourDay[agenda.apres[i].date.getDay()],
            leNumeroDuJourHTML: agenda.apres[i].date.getDate(),
            leMoisHTML: moisMonth[agenda.apres[i].date.getMonth()].substr(0, 3)
        }
        i++;
    });
    return agenda;

};