define(['./module', '../app-config'],
	function(controllers, appConfig) {
		'use strict';

		controllers.controller('SystemConfigurationServiceListCtrl', [
			'$scope', '$state', 'SystemConfigurationServiceFactory',
			function($scope, $state, SystemConfigurationServiceFactory) {
				$scope.createService = function() {
					$state.go('systemConfigurationServiceCreation');
				};

				$scope.detailService = function(id) {
					$state.go('systemConfigurationServiceShow', {id: id});
				};

				$scope.deleteService = function(id) {
					SystemConfigurationServiceFactory.remove(id)
						.success(function(data) {
							SystemConfigurationServiceFactory.list()
								.then(function(services) {
									$scope.services = services;
								});
						});
				};

				$scope.listHost = function(object_uuid) {
					$state.go('systemConfigurationHostList', {object_uuid: object_uuid});
				};

				$scope.$on('$viewContentLoaded', function() {
					SystemConfigurationServiceFactory.list($state.params)
						.then(function(data) {
							$scope.services = data;
						});
				});
			}
		]);
	}
);