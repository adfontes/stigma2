define(['./implement', './module', '../app-config'],
	function(implement, services, appConfig) {
		'use strict';

		services.factory('StatusNodeFactory', function($http) {
			return {
				list: function() {
					var url = appConfig.getConfiguration().home + '/api/status/nodes';
					return implement.httpGetServiceImpl($http, url);
				},
				show: function(id) {
					var url = appConfig.getConfiguration().home + '/api/status/nodes/' + id;
					return implement.httpGetServiceImpl($http, url);
				}
			}
		});
	}
);