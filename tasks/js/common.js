"use strict";

//initialize Parse library with your application ID and your app's JavaScript library key
Parse.initialize('Fgz8yDTOpDPE4v0PSiuEujPgCfb0LAKPy5UOM7ei', '022fPTfjsRdNGRsJt7H55XqXsrCIZ3GvTiFrrnqt');

/**
 * Shows an error in an element on the page with the class 'error-message'
 * @param err {Object} the error to be shown
 */
function showError(err) {
    $('.error-message').html(err.message).fadeIn();
}

/**
 * Clears any currently showing error
 */
function clearError() {
    $('.error-message').fadeOut().empty();
}
