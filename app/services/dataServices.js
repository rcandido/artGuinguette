import {customDate} from '../js/dataProcessing.js';
(function () {
    'use strict';
    var services = angular.module('dataServices', ['ngResource']);

    services.factory('GetArtDatas', ['$resource', '$q', function ($resource, $q) {
        let artDatas = {};

        // Get all events
        artDatas.getEvents = () => {
            var agenda = [];
            agenda =  $resource('/app/assets/data/agenda.json');
            return agenda;
        }

        // Get one event with id 'id'
        artDatas.getEvent = (id) => {
            let result = false;
            let BreakException = {};
            let start = Date.now();
            var deferred = $q.defer();
  
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
                    // Break not allowed but don't want to continue if event is find
                    if (e !== BreakException) throw e;
                }
                deferred.resolve(result);             
            });    
            return deferred.promise;
        }
        return artDatas;
    }]);
})();