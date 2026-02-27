(function () {
    //var currentUrl = location.href;
    var cookieFlag = $.cookie('diabetesCookie');
    if (cookieFlag != 'true') {
        location.href = "/hcp/";
    }
}());
function getRootPath() {
    var strFullPath = window.document.location.href;
    var strPath = window.document.location.pathname;
    var pos = strFullPath.indexOf(strPath);
    var prePath = strFullPath.substring(0, pos);
    return prePath;
}
