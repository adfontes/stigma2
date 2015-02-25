define(['./module', '../app-config', './ngDraggableCtrl'],
	function(controllers, appConfig, draggable) {
		'use strict';

		controllers.controller('SystemConfigurationHostEditCtrl', [
			'$scope', '$state', 'SystemConfigurationHostFactory',
			function($scope, $state, SystemConfigurationHostFactory) {
				draggable.setScope($scope);
				draggable.init();

				$scope.editHost = function() {
					$state.go('systemConfigurationHostEdit', {id: $state.params.id});
				};

				$scope.updateHost = function() {
					var params = {};

					for (var k in $scope.use) {
						var key = $scope.use[k].name;
						var value = $scope.hostData[key];
						params[key] = value;
					}

					SystemConfigurationHostFactory.update($state.params.id, params)
						.success(function(data) {
							$state.go('systemConfigurationHostShow', {id: $state.params.id});
						})
						.error(function(data) {
							console.log(data);
						});
				};

				$scope.cancel = function() {
					$state.go('systemConfigurationHostShow', {id: $state.params.id});
				};

				$scope.list = function() {
					$state.go('systemConfigurationHostList');
				};

				$scope.$on('$viewContentLoaded', function() {
					SystemConfigurationHostFactory.show($state.params.id)
						.then(function(data) {
							$scope.hostData = data.hostData;
							$scope.hostDetail = data.hostDetail;
							$scope.use = data.use;
							$scope.disuse = data.disuse;
						});
				});
			}
		]);
	}
);