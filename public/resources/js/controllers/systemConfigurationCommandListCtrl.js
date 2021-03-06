define(['./module'],
	function(controllers) {
		'use strict';

		controllers.controller('SystemConfigurationCommandListCtrl', [
			'$scope', '$state', 'NagiosFactory', 'SystemConfigurationCommandFactory',
			function($scope, $state, NagiosFactory, SystemConfigurationCommandFactory) {
				$scope.createCommand = function() {
					$state.go('systemConfigurationCommandCreation');
				};

				$scope.editCommand = function(id) {
					$state.go('systemConfigurationCommandEdit', {id: id});
				};

				$scope.deleteCommand = function(id) {
					SystemConfigurationCommandFactory.remove(id)
						.success(function(data) {
							NagiosFactory.restart();
							SystemConfigurationCommandFactory.list()
								.then(function(commands) {
									$scope.commands = commands;
								});
						});
				};

				SystemConfigurationCommandFactory.list()
					.then(function(data) {
						$scope.commands = data;
					});
			}
		]);
	}
);