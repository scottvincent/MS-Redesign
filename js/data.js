// Google Tabletop JS

// Populate Data from Google Spreadsheet
function showInfo(data, tabletop) {
  // Find all Unique groups and Add
  $.each( tabletop.sheets("Sonars").all(), function(i, sonars) {
    var groupID = "#group" + sonars.group;
    if(sonars.group){
      var content = "<li class='group panel'>";
      if(!sonars.shared){
        content+= "<a class='groupLink' data-toggle='collapse' data-target='"+ groupID +"' data-parent='#mySonars'><i class='fa fa-folder-open-o fa-fw fa-lg'></i> " + sonars.group;
        content+= "</a>";
      }else{
        content+= "<a class='groupLink' data-toggle='collapse' data-target='"+ groupID +"' data-parent='#sharedSonars'><i class='fa fa-folder-open-o fa-fw fa-lg'></i> " + sonars.group;
        content+= "</a>";
      }
      content+= "<ul id='group"+ sonars.group + "' class='nav panel-group collapse'>";
      if(!sonars.shared){
        content+= "<li class='options'><div class='btn-group btn-group-xs'>";
        content+= "<a href='#' class='btn'><i class='fa fa-pencil fa-lg'></i></a>";
        content+= "<a href='#' class='btn'><i class='fa fa-times fa-lg'></i></a>";            
        content+= "</div></li>";
      }
      content+= "</ul>";
      content+= "</li>";
    }
    if($(groupID).length == 0){
      if(!sonars.shared){
        $(content).appendTo("#mySonars");
      }else{
        $(content).appendTo("#sharedSonars");
      }
    }
  })

  // Populate Sonar List
  $.each( tabletop.sheets("Sonars").all(), function(i, sonars) {
    var string = sonars.tags;
    var array = string.split(',');
    var groupID = "#group" + sonars.group;
    
      var content = "<li class='panel'>";
      if(!sonars.group){
        if(!sonars.shared){
          content+= "<a class='sonar " + sonars.status + "' data-toggle='collapse' data-parent='#mySonars' data-target='#sonar" + sonars.id + "' >" + sonars.title + "</a>";
        }else{
          content+= "<a class='sonar " + sonars.status + "' data-toggle='collapse' data-parent='#sharedSonars' data-target='#sonar" + sonars.id + "' >" + sonars.title + "</a>";
        }
      }else{
        content+= "<a class='sonar " + sonars.status + "' data-toggle='collapse' data-parent='"+ groupID +"' data-target='#sonar" + sonars.id + "' >" + sonars.title + "</a>";
      }
      content+= "<ul id='sonar" + sonars.id + "' class='nav tags collapse'>";
      if(!sonars.shared){
        content+= "<li class='options'><div class='btn-group btn-group-xs'>";
        if(sonars.status == "inactive"){
          content+= "<a href='#' class='btn text-muted' data-toggle='tooltip' data-placement='bottom' title='Turn On'><i class='fa fa-power-off fa-lg'></i></a>";
        }else{
          content+= "<a href='#' class='btn' data-toggle='tooltip' data-placement='bottom' title='Turn Off'><i class='fa fa-power-off fa-lg'></i></a>";
        }
        content+= "<a href='#' class='btn' data-toggle='tooltip' data-placement='bottom' title='Edit'><i class='fa fa-pencil fa-lg'></i></a>";
        content+= "<a href='#' class='btn' data-toggle='tooltip' data-placement='bottom' title='Delete'><i class='fa fa-times fa-lg'></i></a>";
        content+= "</div></li>";
      }
      if(sonars.tags){
        for (index = 0; index < array.length; ++index) {
          content+= "<li class='tag'>";
          if (index > 1){
            content+= "<a class='tagLink' data-toggle='collapse' data-target='#tag" + sonars.id + array[index] + index + "'><i class='fa fa-tag fa-lg fa-fw text-muted'></i>" + array[index] + "</a>";
          }else{
            content+= "<a class='tagLink' data-toggle='collapse' data-target='#tag" + sonars.id + array[index] + index + "'><i class='fa fa-fire fa-lg fa-fw text-danger'></i>" + array[index] + "</a>";
          }
          content+= "<div id='tag" + sonars.id + array[index] + index + "' class='collapse networks'>";
          content+= "<i class='fa fa-fw'></i>";
          content+= "<a href='#' data-toggle='tooltip' data-placement='bottom' title='Twitter'><img src='http://www.google.com/s2/favicons?domain=www.twitter.com'/></a>";
          content+= "<a href='#' data-toggle='tooltip' data-placement='bottom' title='Facebook'><img src='http://www.google.com/s2/favicons?domain=www.facebook.com'/></a>";
          content+= "<a href='#' data-toggle='tooltip' data-placement='bottom' title='Instagram'><img src='http://www.google.com/s2/favicons?domain=www.instagram.com'/></a>";
          content+= "<a href='#' data-toggle='tooltip' data-placement='bottom' title='Flickr'><img src='http://www.google.com/s2/favicons?domain=www.flickr.com'/></a>";
          content+= "<a href='#' data-toggle='tooltip' data-placement='bottom' title='YouTube'><img src='http://www.google.com/s2/favicons?domain=www.youtube.com'/></a>";
          content+= "<a href='#' data-toggle='tooltip' data-placement='bottom' title='Google'><img src='http://www.google.com/s2/favicons?domain=www.google.com'/></a>";
          content+= "</div>";
          content+= "</li>";
        }
      }
      content+= "</ul>"; 
      content+= "</li>"; 
    if(!sonars.group){
      if(!sonars.shared){
        $(content).prependTo("#mySonars");
      }else{
        $(content).prependTo("#sharedSonars");
      } 
    }else{
      $(content).appendTo(groupID); 
    }
  })
  
  // Add Sonar Count on Menus
  $(".groupLink").each(function() {
    var n = $(this).siblings().children('.panel').length;
    var content2 = "<div class='badge pull-right'>" + n + "</div>";
    $(content2).appendTo(this); 
  }); 
}


// Google Spreadsheet
var public_spreadsheet_url = 'https://docs.google.com/spreadsheet/pub?key=0AvU6y0DvNPHtdHVRMHBwMGREbUxkYURqM3B5dmo5MHc&output=html';

Tabletop.init( { key: public_spreadsheet_url,
 callback: showInfo,
 wanted: [ "Sonars" ],
 debug: true } )

              
                  
                