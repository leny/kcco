/**
 * Keep calm and carry on
 * A JavaScript util library
 * @author Leny (http://leny.me)
 *
 * inspired by:
 *     Utopia by Lea Verou (http://lea.verou.me)
 *     jQuery (http://jquery.com)
 *
 * MIT license (http://www.opensource.org/licenses/mit-license.php)
 * Last update: 2013-5-2
 */

( function( window ) {

    var $ = function( sSelector, $Context ) {
        var aElements,
            aReturnedElements = [];

        if( !sSelector ) {
            return [];
        }

        aElements = ( $Context || document ).querySelectorAll( sSelector ) || [];

        for( var i = -1, oElement; oElement = aElements[ ++i ]; ) {
            aReturnedElements.push( oElement );
        }

        return aReturnedElements;
    };

    var xhr = function( oSettings ) {
        var oXHR = new XMLHttpRequest(),
            sMethod = oSettings.method || 'GET',
            oData = oSettings.data || '';

        oXHR.open( sMethod, oSettings.url + ( sMethod === 'GET' && oData ? '?' + oData : '' ), true );

        oSettings.headers = oSettings.headers || {};

        if( sMethod !== 'GET' && !oSettings.headers[ 'Content-type' ] && !oSettings.headers[ 'Content-Type' ] ) {
            oXHR.setRequestHeader( "Content-type", "application/x-www-form-urlencoded" );
        }

        for( var sHeader in oSettings.headers ) {
            oXHR.setRequestHeader( sHeader, oSettings.headers[ sHeader ] );
        }

        oXHR.onreadystatechange = function() {
            if( oXHR.readyState === 4 ) {
                oSettings.callback( oXHR );
            }
        };

        oXHR.send( sMethod === 'GET' ? null : oData );

        return oXHR;
    };

    $.xhr = xhr;
    $.ajax = xhr;
    window.$ = $;

} )( window );