// Starting Point Scripts
(function() {
  // iPhone 5 WebApp height Fix
  if (window.screen.height==568) {
    document.querySelector("meta[name=viewport]").content="user-scalable=no, initial-scale=1, maximum-scale=1, target-densitydpi=device-dpi";
  }
  // Windows Phone 8 IE10 Snap Mode Width Fix
  if ("-ms-user-select" in document.documentElement.style && navigator.userAgent.match(/IEMobile\/10\.0/)) {
    var msViewportStyle = document.createElement("style");
    msViewportStyle.appendChild(
      document.createTextNode("@-ms-viewport{width:auto!important}")
      );
    document.getElementsByTagName("head")[0].appendChild(msViewportStyle);
  } 
})();
//Remove 300ms click delay on touchscreens
$(function() {
  FastClick.attach(document.body);
});
$(function () {
    //Initialize Popovers
    $('body').popover({
      selector: '[data-toggle="popover"]'
    });

    //Initialize Tooltips
    $('html.no-touch body').tooltip({
      selector: 'a[rel="tooltip"], [data-toggle="tooltip"]',
      container: 'body'
    });

    //Initialize Datepicker
    $('#timeline').datepicker({
      todayBtn: "linked",
      orientation: "auto right",
      todayHighlight: true,
      format: "M. d, 'yy",
      autoclose: true
    });
  });
$( window ).load(function()  {
    //Toggle Slide Out Menu
    $('.menuToggle, .closeSlide').click(function () {
      $(".slide-right").toggleClass('open');
      $(".slide-left").toggleClass('open');
      return false;
    });

    //Changes Direction of Menu Collapse Button Icon
    $('[data-toggle="collapse"]').click(function () {
      $(this).children('.fa-play').toggleClass('fa-rotate-90');
      $(this).children('.fa-play').toggleClass('fa-rotate-180');
    });

    //Changes Color of Active Toolbar Button Group
    $('.toolbar .btn-group .btn').click(function () {
      if(!$(this).hasClass('btn-primary')){
        $(this).toggleClass('btn-primary').siblings('.btn').removeClass('btn-primary');
      }
    });

    $('.tag').click(function () {
      $(this).toggleClass('active').siblings('.tag').removeClass('active');
    });

    $('.groupLink').click(function () {
      if($(this).siblings().hasClass('in')){
        $(this).parent().removeClass('active');
      }else{
        $(this).parent().addClass('active');
      }
    });

    $('.sonar').click(function () {
      $('.sonar').collapse({toggle: false});
      if($(this).hasClass('active')){
        $('.sonar').removeClass('active');
        $(this).removeClass('active');   
      }else{
        $('.sonar').removeClass('active');
        $(this).addClass('active');  
        $(this).removeClass('new');    
      }
    });
    $('.sonarStatus').click(function () {
      if($(this).hasClass('text-muted')){
        $(this).closest('.tags').siblings('.sonar').removeClass('inactive');  
        $(this).removeClass('text-muted'); 
      }else{
        $(this).closest('.tags').siblings('.sonar').addClass('inactive'); 
        $(this).addClass('text-muted');    
      }
    });

    $('.tag .tagLink').click(function () {
      $('.networks').collapse({toggle: false});
      if($('.networks').hasClass('in')){
        $('.networks').collapse('hide');
      }
    });

    $('#condensedToolbar').click(function () {
      $('#expandedToolbar').show();
      $('#condensedToolbar').hide();
    });
    $('.toolbarToggle').click(function () {
      $('#expandedToolbar').hide();
      $('#condensedToolbar').show();

      if($('#chooseMap').hasClass('active')){
        $('#currentView').text('Map View');
      }else{
        $('#currentView').text('List View');
      }

      if($('#chooseText').hasClass('active')){
        $('#currentType').text('Text');
      }else if($('#choosePhoto').hasClass('active')){
        $('#currentType').text('Photo');
      }else if($('#chooseVideo').hasClass('active')){
        $('#currentType').text('Video');
      }else{
        $('#currentType').text('Choose...');
      }

      if($('#chooseSaved').hasClass('active')){
        $('#currentFilter').text('Saved By Me');
      }else if($('#chooseComments').hasClass('active')){
        $('#currentFilter').text('Commented By Me');
      }else if($('#chooseNot').hasClass('active')){
        $('#currentFilter').text('Not Verified');
      }else if($('#chooseVerified').hasClass('active')){
        $('#currentFilter').text('Verified (Not Cleared)');
      }else if($('#chooseCleared').hasClass('active')){
        $('#currentFilter').text('Verified (Cleared)');
      }else{
        $('#currentFilter').text('Choose...');
      }

      
    });
  });
