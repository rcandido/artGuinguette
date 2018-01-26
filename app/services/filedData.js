const defaultAgenda = {
    avant: [{
        date: new Date("December 9, 2017 18:00:00"),
        info: {
            titre: `Arts &amp; Guinguette fête Noel`,
            description: ``,
            adresse: `Place de la République, 13640 La Roque-d'Anthéron, France`,
            adresseGoogle: `https://www.google.fr/maps/place/Place+de+la+R%C3%A9publique,+13640+La+Roque-d'Anth%C3%A9ron/@43.7149263,5.3091953,17z/data=!3m1!4b1!4m5!3m4!1s0x12ca1e82b778dfe5:0x68c1baca38f27eae!8m2!3d43.7149263!4d5.311384`,
            evtFacebook: `https://www.facebook.com/events/137457863675009/`
        }
    }, {
        date: new Date("May 27, 2017 18:00:00"),
        info: {
            titre: `Arts &amp; Guinguette`,
            description: ``,
            adresse: `place d'Olmetta, 13640 La Roque-d'Anthéron, France`,
            adresseGoogle: `https://www.google.fr/maps/place/Place+de+la+R%C3%A9publique,+13640+La+Roque-d'Anth%C3%A9ron/@43.7149263,5.3091953,17z/data=!3m1!4b1!4m5!3m4!1s0x12ca1e82b778dfe5:0x68c1baca38f27eae!8m2!3d43.7149263!4d5.311384`,
            evtFacebook: `https://www.facebook.com/events/163382837488442/`


        }
    }],
    apres: [{
        date: new Date("JUIN 9, 2018 18:00:00"),
        info: {
            titre: `Arts &amp; Guinguette fête Pagque`,
            description: ``,
            adresse: `Place de la République, 13640 La Roque-d'Anthéron, France`,
            adresseGoogle: `https://www.google.fr/maps/place/Place+de+la+R%C3%A9publique,+13640+La+Roque-d'Anth%C3%A9ron/@43.7149263,5.3091953,17z/data=!3m1!4b1!4m5!3m4!1s0x12ca1e82b778dfe5:0x68c1baca38f27eae!8m2!3d43.7149263!4d5.311384`,
            evtFacebook: `https://www.facebook.com/events/137457863675009/`
        }
    }, {
        date: new Date("AOUT 27, 2018 18:00:00"),
        info: {
            titre: `Arts &amp; Guinguette fetes mmoi`,
            description: ``,
            adresse: `place d'Olmetta, 13640 La Roque-d'Anthéron, France`,
            adresseGoogle: `https://www.google.fr/maps/place/Place+de+la+R%C3%A9publique,+13640+La+Roque-d'Anth%C3%A9ron/@43.7149263,5.3091953,17z/data=!3m1!4b1!4m5!3m4!1s0x12ca1e82b778dfe5:0x68c1baca38f27eae!8m2!3d43.7149263!4d5.311384`,
            evtFacebook: `https://www.facebook.com/events/163382837488442/`


        }
    }]
};

var filedData = (agenda) => {
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
        console.log('element ' + i++, element)
    });
    return agenda;

};
export default filedData;
