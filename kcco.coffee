###
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
###

$ = ( sSelector, $Context ) ->
    if !sSelector
        return []

    aElements = ( $Context or document ).querySelectorAll( sSelector ) or []
    aReturnedElements = ( oElement for oElement in aElements )

xhr = ( oSettings ) ->
    oXHR = new XMLHttpRequest()
    sMethod = oSettings.method ? 'GET'
    oData = oSettings.data ? ''
    oHeaders = oSettings.headers ? {}

    oXHR.open sMethod, oSettings.url + ( if sMethod is 'GET' and oData then '?' + oData else '' ), true

    oXHR.setRequestHeader "Content-type", "application/x-www-form-urlencoded" if sMethod isnt 'GET' and !oHeaders[ 'Content-type' ] and !oHeaders[ 'Content-Type' ]
    oXHR.setRequestHeader sName, sValue for sName, sValue of oHeaders

    oXHR.onreadystatechange = ->
        oSettings.callback oXHR if oXHR.readyState is 4

    oXHR.send if sMethod is 'GET' then null else oData

    oXHR

$.xhr = xhr
$.ajax = xhr
window.$ = $
