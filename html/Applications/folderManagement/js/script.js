
var myDrive = {

			//folderArray = [],

			UIBinding : function(){

				$(".fm-input").on('input', function() {
				   if($(this).val() == ""){
						$(this).closest(".fm-inputsWrap").find(".fm-submit").attr('disabled',true);
					}else{
						$(this).closest(".fm-inputsWrap").find(".fm-submit").attr('disabled',false);
					}	
				});


				

				

				/*$(".fm-fn-create").click(function(){
					$(".fm-input").val();
				});*/

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
	var list1 = new LinkedList();		
	//list1.headerInit();

	$("#createNewFolder").click(function(){
		var popDiv = $('#'+$(this).attr('name'));			
		popDiv.css('marginTop',tHeight/2 - popDiv.height()/2)
		showPopup(popDiv);
		
	});

	$(".fm-fn-create").click(function(){
		list1.add($("#newFolder").val());
	});

	

});

	var array = [];
	function LinkedList(){
		this.head = null;
	}


	LinkedList.prototype.add = function(value){

		console.log(value)
		var node = {
			value : value,
			next : null
		};
		var current;
		if(this.head == null){
			this.head = {};
			array[this.head] = [];
			array[this.head].push(node)
		}else{
			array[this.head].push(node)
		}


	}

	LinkedList.prototype.getRef = function(ref){
		this.head = ref;
	}



function showPopup(popup){
		popup.show();
		$('.lightBoxy').show();
}

function hidePopup(popup){
		popup.hide();
		$('.lightBoxy').hide();
}