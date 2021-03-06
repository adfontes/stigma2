define(['./module'],
	function(utils) {
		'use strict';

		utils.factory('TimestampFormatFactory', function() {
			return {
				convertDateToYYYYMMDDhhmmss: function(timestamp) {
					var formatDate = new Date(timestamp * 1000);
					var months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];

					var year = formatDate.getFullYear();
					var month = months[formatDate.getMonth()];
					var date = '0' + formatDate.getDate();
					var hour = formatDate.getHours();
					var min = '0' + formatDate.getMinutes();
					var sec = '0' + formatDate.getSeconds();

					var time = year + '-' + month + '-' + date.substr(date.length-2) + ' ' + hour + ':' + min.substr(min.length-2) + ':' + sec.substr(sec.length-2);
					return time;
				},
				getDurationToNow: function(timestamp) {
					var now = new Date().getTime() / 1000;
					var duration = now - timestamp;

					var date = parseInt(duration / 86400);
					var hour = parseInt(duration % 86400 / 3600);
					var min = parseInt(duration % 86400 % 3600 / 60);
					var sec = parseInt(duration % 86400 % 3600 % 60);

					var time = date + 'd ' + hour + 'h ' + min + 'm ' + sec + 's';
					return time;
				}
			};
		});
	}
);