define(['./module'],
	function(utils) {
		'use strict';

		utils.factory('DirectiveTimeperiodFactory', function() {
			var timeperiods = {};

			return {
				drop: function(num) {
					delete timeperiods[num];
				},
				getTimeperiods: function() {
					return timeperiods;
				},
				register: function(count, timeperiod) {
					timeperiods[count] = timeperiod;
				}
			};
		});
	}
);