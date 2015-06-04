
var myDrive = {

			folderArray = [],

			UIBinding : function(){

				$(".fm-input").on('input', function() {
				   if($(this).val() == ""){
						$(this).closest(".fm-inputsWrap").find(".fm-submit").attr('disabled',true);
					}else{
						$(this).closest(".fm-inputsWrap").find(".fm-submit").attr('disabled',false);
					}	
				});


				$("#createNewFolder").click(function(){
					var popDiv = $('#'+$(this).attr('name'));			
					popDiv.css('marginTop',tHeight/2 - popDiv.height()/2)
					showPopup(popDiv)
				});

				

				$(".fm-fn-create").click(function(){
					
				});

				$(".fm-fn-cancel").click(function(){
					hidePopup($('#'+$(this).attr('name')))
				});
			},

			init : function(){
				this.UIBinding();
			}



	}




$(function(){
	
		myDrive.init();
});

function showPopup(popup){
		popup.show();
		$('.lightBoxy').show();
}

function hidePopup(popup){
		popup.hide();
		$('.lightBoxy').hide();
}