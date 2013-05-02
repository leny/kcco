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

( function( window, undefined ) {

    var $ = function( sExpression, $Context ) {
        var aElements = ( $Context || document ).querySelectorAll( sExpression ) || [],
            aReturnedElements = [];

        try {
            aReturnedElements =  Array.prototype.slice.call( aElements );
        } catch( e ) {
            for( var i = -1, oElement; oElement = aElements[ ++i ]; ) {
                aReturnedElements.push( oElement );
            }
        }

        return aReturnedElements.length === 1 ? aReturnedElements[ 0 ] : aReturnedElements;
    };

    if ( !Array.prototype.forEach ) {
        Array.prototype.forEach = function( fCallback, oScope ) {
            for( var i = 0, len = this.length; i < len; ++i ) {
                fCallback.call( oScope || this, this[i], i, this );
            }
        }
    }

    var xhr = function( oSettings ) {
        var oXHR = new XMLHttpRequest(),
            sMethod = oSettings.method || 'GET',
            oData = oSettings.data || '';

        oXHR.open( sMethod, oSettings.url + ( sMethod === 'GET' && oData ? '?' + oData : '' ), true );

        oSettings.headers = oSettings.headers || {};

        if( sMethod !== 'GET' && !oSettings.headers[ 'Content-type' ] && !oSettings.headers[ 'Content-Type' ] ) {
            oXHR.setRequestHeader( "Content-type", "application/x-www-form-urlencoded" );
        }

        for( var header in oSettings.headers ) {
            oXHR.setRequestHeader( header, oSettings.headers[ header ] );
        }

        oXHR.onreadystatechange = function() {
            if( oXHR.readyState === 4 ) {
                oSettings.callback( oXHR );
            }
        };

        oXHR.send( sMethod === 'GET' ? null : oData );

        return oXHR;
    };

    var offset = function( $Element ) {
        var iLeft = 0,
            iTop = 0,
            $CurrentElement = $Element,
            rBody = /body/i;

        if( $CurrentElement.parentNode ) {
            do {
                iLeft += $CurrentElement.offsetLeft;
                iTop += $CurrentElement.offsetTop;
            } while ( ( $CurrentElement = $CurrentElement.offsetParent ) && $CurrentElement.nodeType < 9 );

            $CurrentElement = $Element;

            do {
                iLeft -= $CurrentElement.scrollLeft;
                iTop -= $CurrentElement.scrollTop;
            } while ( ( $CurrentElement = $CurrentElement.parentNode ) && !rBody.test( $CurrentElement.nodeName ) );
        }

        return {
            top: iTop,
            right: window.innerwidth - iLeft - $Element.offsetWidth,
            bottom: window.innerHeight - iTop - $Element.offsetHeight,
            left: iLeft,
        };
    };

    $.ajax = xhr;
    window.$ = $;

} )( window );
