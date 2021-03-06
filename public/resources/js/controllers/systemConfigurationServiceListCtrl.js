define(['./module'],
	function(controllers) {
		'use strict';

		controllers.controller('SystemConfigurationServiceListCtrl', [
			'$scope', '$state', 'NagiosFactory', 'SystemConfigurationServiceFactory',
			function($scope, $state, NagiosFactory, SystemConfigurationServiceFactory) {
				$scope.createService = function() {
					$state.go('systemConfigurationServiceCreation');
				};

				$scope.editService = function(id) {
					$state.go('systemConfigurationServiceEdit', {id: id});
				};

				$scope.deleteService = function(id) {
					SystemConfigurationServiceFactory.remove(id)
						.success(function(data) {
							NagiosFactory.restart();
							SystemConfigurationServiceFactory.list()
								.then(function(services) {
									$scope.services = services;
								});
						});
				};

				SystemConfigurationServiceFactory.list($state.params)
					.then(function(data) {
						$scope.services = data;
					});
			}
		]);
	}
);