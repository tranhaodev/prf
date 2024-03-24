$('[data-toggle="collapsible-nav"]').on('click',function(e){var target=($(this).data('target'));$('#'+target).toggleClass('show')});$(document).ready(function(){if(window.innerWidth>=992){$('#collapsible-nav').addClass('show')}else{$('#collapsible-nav').removeClass('show')}
if($('.hover-box').length){setHoverBoxPerspective()}});$(window).resize(function(){if($('.hover-box').length){setHoverBoxPerspective()}});function setHoverBoxPerspective(){$('.hover-box').css({'perspective':function(){return Math.max($(this).width(),$(this).height())*2+50}})}
var classNames=['in-up','in-right','in-down','in-left','out-up','out-right','out-down','out-left'];$('.hover-box').hover(function(event){var direction="up";if(jQuery.fn.entry){direction=$(this).entry({e:event})}
$(this).removeClass(classNames.join(" "));$(this).addClass("in-"+direction)},function(event){var direction="up";if(jQuery.fn.entry){direction=$(this).entry({e:event})}
$(this).removeClass(classNames.join(" "));$(this).addClass("out-"+direction)});(function(global,factory){typeof exports==='object'&&typeof module!=='undefined'?factory(exports,require('jquery'),require('popper.js')):typeof define==='function'&&define.amd?define(['exports','jquery','popper.js'],factory):(global=global||self,factory(global.bootstrap={},global.jQuery,global.Popper))}(this,(function(exports,$,Popper){'use strict';$=$&&$.hasOwnProperty('default')?$['default']:$;Popper=Popper&&Popper.hasOwnProperty('default')?Popper['default']:Popper;var uriAttrs=['background','cite','href','itemtype','longdesc','poster','src','xlink:href'];var ARIA_ATTRIBUTE_PATTERN=/^aria-[\w-]*$/i;var DefaultWhitelist={'*':['class','dir','id','lang','role',ARIA_ATTRIBUTE_PATTERN],a:['target','href','title','rel'],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:['src','alt','title','width','height'],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]};var SAFE_URL_PATTERN=/^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi;var DATA_URL_PATTERN=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;function allowedAttribute(attr,allowedAttributeList){var attrName=attr.nodeName.toLowerCase();if(allowedAttributeList.indexOf(attrName)!==-1){if(uriAttrs.indexOf(attrName)!==-1){return Boolean(attr.nodeValue.match(SAFE_URL_PATTERN)||attr.nodeValue.match(DATA_URL_PATTERN))}
return!0}
var regExp=allowedAttributeList.filter(function(attrRegex){return attrRegex instanceof RegExp});for(var i=0,l=regExp.length;i<l;i++){if(attrName.match(regExp[i])){return!0}}
return!1}
function sanitizeHtml(unsafeHtml,whiteList,sanitizeFn){if(unsafeHtml.length===0){return unsafeHtml}
if(sanitizeFn&&typeof sanitizeFn==='function'){return sanitizeFn(unsafeHtml)}
var domParser=new window.DOMParser();var createdDocument=domParser.parseFromString(unsafeHtml,'text/html');var whitelistKeys=Object.keys(whiteList);var elements=[].slice.call(createdDocument.body.querySelectorAll('*'));var _loop=function _loop(i,len){var el=elements[i];var elName=el.nodeName.toLowerCase();if(whitelistKeys.indexOf(el.nodeName.toLowerCase())===-1){el.parentNode.removeChild(el);return"continue"}
var attributeList=[].slice.call(el.attributes);var whitelistedAttributes=[].concat(whiteList['*']||[],whiteList[elName]||[]);attributeList.forEach(function(attr){if(!allowedAttribute(attr,whitelistedAttributes)){el.removeAttribute(attr.nodeName)}})};for(var i=0,len=elements.length;i<len;i++){var _ret=_loop(i);if(_ret==="continue")continue}
return createdDocument.body.innerHTML}
Object.defineProperty(exports,'__esModule',{value:!0})})))
/* facebook chat  js */
      var chatbox = document.getElementById('fb-customer-chat');
      chatbox.setAttribute("page_id", "100691754849446");
      chatbox.setAttribute("attribution", "biz_inbox");

      const facebookChat = () => {
        window.fbAsyncInit = function() {
          FB.init({
            xfbml            : true,
            version          : 'v17.0'
          });
        };
  
        (function(d, s, id) {
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) return;
          js = d.createElement(s); js.id = id;
          js.src = 'https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js';
          fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
      }
      setTimeout(facebookChat, 4000);