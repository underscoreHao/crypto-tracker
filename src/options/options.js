(function() {
	var defaultVals = {
		'currency': 'USD',
		'crypto_currency': 'bitcoin',
	  'symbol': '$',
	  'symbol_prefix': true,
	};
  
	var config = {};
  
	var Options = {
	  init: function () {
			this.resetConfigVars();
			this.initializeContent();
			this.registerListeners();
	  },
  
	  initializeContent: function () {
			$('#user_currency').val(config.currency);
			$('#crypto_currency').val(config.crypto_currency);
	  },
  
	  registerListeners: function () {
			var self = this;
			$('#btnSaveOptions').on('click', function() {
				$(this).find('#user_currency').val();
				$(this).find('#crypto_currency').val();
				localStorage['currency'] = $('#user_currency').val();
				localStorage['crypto_currency'] = $('#crypto_currency').val();
				self.resetConfigVars();
		});
	  },
  
	  resetConfigVars: function () {
			for (var key in defaultVals) {
				config[key] = localStorage[key] || defaultVals[key];
			}
	  },
	};
  
	return Options;
  })().init();