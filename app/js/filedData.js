'use strict';
var jourDay = ['', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
var moisMonth = ['JANVIER', 'FEVRIER', 'MARS', 'AVRIL', 'MAI', 'JUIN', 'JUILLET', 'AOUT', 'SEPTEMBRE', 'OCTOBRE', 'NOVEMBRE', 'DÉCEMBRE'];
var start = Date.now();
export const agendaComplet = [{
    id: 1,
    evtInfo: `#/desc/1-1`,
    date: new Date("December 9, 2017 18:00:00"),
    info: {
        titre: `Arts & Guinguette fête Noel`,
        description: `Festival musique live avec Magalie Missko et Up your soul
        construction artistique<br>
        animation enfant<br>
        restauration et biere de qualité, <br>
        fabrication Maison<br>
        Convient aux enfants`,
        qui: `<a href="http://www.missko.fr/" target="_blank"> Magalie Missko</a> 
        <br> <a href="https://www.facebook.com/upyoursoul/?fref=pb&hc_location=profile_browser" target="_blank"> Up your soul</a>
        <br><a href="https://www.facebook.com/assoartconvergence/?fref=pb&hc_location=profile_browser" target="_blank">Art Convergence</a> <br>`,
        ou:`<a href="https://www.google.fr/maps/place/Place+de+la+R%C3%A9publique,+13640+La+Roque-d'Anth%C3%A9ron/@43.7149263,5.3091953,17z/data=!3m1!4b1!4m5!3m4!1s0x12ca1e82b778dfe5:0x68c1baca38f27eae!8m2!3d43.7149263!4d5.311384" target="_blank">
        Place de la République, 13640 La Roque-d'Anthéron, France
        </a>`,
        adresse: `Place de la République, 13640 La Roque-d'Anthéron, France`,
        adresseGoogle: `https://www.google.fr/maps/place/Place+de+la+R%C3%A9publique,+13640+La+Roque-d'Anth%C3%A9ron/@43.7149263,5.3091953,17z/data=!3m1!4b1!4m5!3m4!1s0x12ca1e82b778dfe5:0x68c1baca38f27eae!8m2!3d43.7149263!4d5.311384`,     
        evtFacebook: `https://www.facebook.com/events/137457863675009/`,     
        likeFacebook: `https://www.facebook.com/events/137457863675009/`
    }
}, {
    id: 2,
    evtInfo: `#/desc/2-2`,
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
        qui: `
        <a href="http://www.cirque-pouce.com/" target="_blank"> le cirque Pouce</a> 
        <br> <a href="https://www.facebook.com/Fifi-Rubato-Co-232080380473215/" target="_blank">Fifi Rubato</a> 
        <br> <a href="https://www.facebook.com/BLACK-Inside-359632134190138/" target="_blank">Black Inside </a> `, 
        ou:`<a href="https://www.google.fr/maps/place/Place+de+la+R%C3%A9publique,+13640+La+Roque-d'Anth%C3%A9ron/@43.7149263,5.3091953,17z/data=!3m1!4b1!4m5!3m4!1s0x12ca1e82b778dfe5:0x68c1baca38f27eae!8m2!3d43.7149263!4d5.311384" target="_blank">
        Place d'Olmetta, 13640 La Roque-d'Anthéron, France
        </a>`,
        adresse: `Place d'Olmetta, 13640 La Roque-d'Anthéron, France`,
        adresseGoogle: `https://www.google.fr/maps/place/Place+de+la+R%C3%A9publique,+13640+La+Roque-d'Anth%C3%A9ron/@43.7149263,5.3091953,17z/data=!3m1!4b1!4m5!3m4!1s0x12ca1e82b778dfe5:0x68c1baca38f27eae!8m2!3d43.7149263!4d5.311384`,
        evtFacebook: false,      //https://www.facebook.com/events/163382837488442/
        likeFacebook: `https://www.facebook.com/events/137457863675009/`


    }
}, {
    id: 3,
    evtInfo: `#/desc/3-3`,
    date: new Date("May 3, 2018 18:00:00"),
    info: {
        titre: `Arts & Guinguette fête le Printemps (En vrai c'est pour de faux c'est pour tester mais chutt)`,
        description: `Musique "live"............Arts de la rue.............Expos...........Gastronomie Belge (spécialités de bières et de VRAIES frites).................Miniguinguette pour les enfants.........Et 
        surtout des SOURIRES et des surprises (Y a Rihrih)!!
        <br>
        "Arts et guinguette", c'est tout ça....
        <br>
        <br>
        ON revient le : SAMEDI 3 MAI de midi à minuit pour une journée festive Place Dolmetta à La Roque d'Anthéron <br>
        Entrée gratuite`,
        qui: `<a href="http://www.missko.fr/" target="_blank"> Magalie Missko</a> 
        <br> <a href="https://www.facebook.com/upyoursoul/?fref=pb&hc_location=profile_browser" target="_blank"> Up your soul</a>
        <br><a href="http://www.rihannanow.com/" target="_blank">Riri !! Rien que pour vous</a> <br>`,   
        ou:`<a href="https://www.google.fr/maps/place/Place+de+la+R%C3%A9publique,+13640+La+Roque-d'Anth%C3%A9ron/@43.7149263,5.3091953,17z/data=!3m1!4b1!4m5!3m4!1s0x12ca1e82b778dfe5:0x68c1baca38f27eae!8m2!3d43.7149263!4d5.311384" target="_blank">
        Place de la République, 13640 La Roque-d'Anthéron, France
        </a>`,
        adresse: `Place de la République, 13640 La Roque-d'Anthéron, France`,
        adresseGoogle: `https://www.google.fr/maps/place/Place+de+la+R%C3%A9publique,+13640+La+Roque-d'Anth%C3%A9ron/@43.7149263,5.3091953,17z/data=!3m1!4b1!4m5!3m4!1s0x12ca1e82b778dfe5:0x68c1baca38f27eae!8m2!3d43.7149263!4d5.311384`,
        evtFacebook: `https://www.facebook.com/events/137457863675009/`,
        likeFacebook: `https://www.facebook.com/events/137457863675009/`
    }
}];

export const defaultAgenda = {
    label: {
        avant: `C'est trop tard mais il est encore temps de jeter un oeil`,
        apres: `A noter sur vos agendas`
    },
    avant: [agendaComplet[0], agendaComplet[1]],
    apres: [agendaComplet[2]]
};

export function rempliMoiCa(agenda) {
    'use strict';

    let newAgenda = {
        label: {
            avant: `C'est trop tard mais il est encore temps de jeter un oeil`,
            apres: `A noter sur vos agendas`
        },
        avant: [],
        apres: []
    };

    if (Object.keys(agenda).length < 1) {
        agenda = agendaComplet;
    }
    var i = 0;

    agenda.forEach(element => {
        element.affiche = {
            leJourHTML: jourDay[element.date.getDay()],
            leNumeroDuJourHTML: element.date.getDate(),
            leMoisHTML: moisMonth[element.date.getMonth()].substr(0, 3),
            lanneeHTML: element.date.getYear()
        }
        if (element.date < start) {

            newAgenda.avant.push(element);
        } else {
            newAgenda.apres.push(element);
        }
        i++;
    });
    var i = 0;
    return newAgenda;
};

export function getAgenda(id, agenda = agendaComplet) {
    let i = 0;
    let result = false;
    var BreakException = {};

    try {
        agenda.forEach(element => {
            element.affiche = {
                leJourHTML: jourDay[element.date.getDay()],
                leNumeroDuJourHTML: element.date.getDate(),
                leMoisHTML: moisMonth[element.date.getMonth()].substr(0, 3),
                lanneeHTML: element.date.getUTCFullYear()
            }
            element.cetait = '';
            if (element.date < start) {
                element.cetait = 'C\'était le :';
            }
            id = parseInt(id);
            if (element.id == id) {
                result = element;
                throw BreakException;
            }
            i++;
        });
    } catch (e) {
        if (e !== BreakException) throw e;
    }
    return result;
}