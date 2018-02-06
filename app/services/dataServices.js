import {
    customDate
} from '../js/dataProcessing';
import {
    photoSlideNumber
} from '../js/myConst';

(function () {
    'use strict';
    let services = angular.module('dataServices', ['ngResource']);

    services.factory('GetArtDatas', ['$resource', '$q',  '$rootScope', function ($resource, $q, $rootScope) {
        let artDatas = {};

        // Get all events
        artDatas.getEvents = () => {
            let agenda = [];
           
            agenda = $rootScope.cachedAgenda ? $rootScope.cachedAgenda : $resource('/app/assets/data/agenda.json');
            $rootScope.cachedAgenda = agenda;
            return agenda;
        }

        // Get one event with id 'id'
        artDatas.getEvent = (id) => {
            let deferred = $q.defer();
            if($rootScope.cachedAgendaById && $rootScope.cachedAgendaById[id]) {
                deferred.resolve($rootScope.cachedAgendaById);              
            } else {
                if(!$rootScope.cachedAgendaById) {
                    $rootScope.cachedAgendaById = [];                         
                } 
                let result = false;
                let BreakException = {};
                let start= Date.now();
               
    
                let agenda = [];
                let AllAvents = artDatas.getEvents();
                let pEvents = AllAvents.query();
    
                let i = 0;
                pEvents.$promise.then(function (data) {
                    try {
                        data.forEach(element => {
                            customDate(element);
                            element.cetait = '';
                            // Event already done
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
                        // 'break' is not allowed, but don't want to continue if the event is already found
                        if (e !== BreakException) throw e;
                    }
                    $rootScope.cachedAgendaById[id] = result;
                    deferred.resolve(result);
                });
            }
            
            return deferred.promise;
        }
        // Get slide info
        artDatas.getSlide = (sd, $rootScope) => {
            let result = [];
            let slide = [];
    
            let deferred = $q.defer();
            if(!$rootScope.slides) {
                $rootScope.slides = [];
            }
            // Do nothing and resolve de propise, already serched
            if($rootScope.slide && $rootScope.slides[sd]){
                        
                        console.log('%c cf cache! ', 'background: #123; color: #cada55');
                        console.log('%c $rootScope.slides[sd] cached', $rootScope.slides[sd]);
                        deferred.resolve($rootScope.slides[sd]);
            }
            // New event (doesn't display)
            else {
      
                let AllAvents = artDatas.getEvents();
                let pEvents = AllAvents.query();
                $rootScope.slide = [];
                let slides = [];
               
                let slidesLenght = [];
                console.log('%c cf db! ', 'background: #222; color: #bada55');
                pEvents.$promise.then(function (data) {
                   
                    data.forEach(element => {                                 
                        result.push({
                            id: element.id,
                            number: element.slide
                        });                
                    });
                
                    if(sd == 0) {
                        console.log('sd == 0 ');
                        let j = 0;
                        result.forEach(si => {
                       
                            for (let i = 0; i < si.number; i++) {
                                let theSlide = {
                                    image: 'app/img/' + si.id + '/slider' + i +'.jpg',
                                    description: 'Image '+ j,
                                    url: 'desc/' + j,
                                    id: si.id
                                };                              
                                slide.push(theSlide);
                                j++;
                            }
                        });
                    } else {
                            for (let i = 0; i < photoSlideNumber; i++) {
                                let theSlide = {
                                    image: 'app/img/' + sd + '/slider' + i +'.jpg',
                                    description: 'Image '+ i,
                                    url: 'desc/' + i,
                                    image: 'app/img/' + sd + '/slider' + i +'.jpg',
                                    id: sd
                                };                      
                                slide.push(theSlide);
                            }
                            console.log('sd != 0 ');
                                          
                    }
                    console.log('slide => ', slide);
                    $rootScope.slides[sd] = slide;             
                    deferred.resolve(slide);
                });
            }
           
            return deferred.promise;
        }

        return artDatas;
    }]);
})();