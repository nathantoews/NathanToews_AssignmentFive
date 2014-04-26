
				function isEmail(email) { // pass regex for validating an e-mail address 
				var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

				 return regex.test(email); 

				}

				function completeInviteForm() {
					setTimeout(function(){
						$("#formBox").fadeOut(400, function(){
							$(this).before('<span class="msg">Thanks you your submission</span>');
							});

					}, 1100);
				}

				var erdiv =$("#error");
				var btnwrap =$("#btnwrap");

				$(document).ready(function(e){

					$(document).on("click","#sendbtn", function(){
					event.preventDefault();
					var emailval =$("#email").val();
					
					if(!isEmail(emailval)){
					erdiv.html("Please enter a valid email address");
					erdiv.css("display", "block");
					}

				if(isEmail(emailval)){
					erdiv.html("Processing...");
					erdiv.css("display", "block");
					btnwrap.html('<alt="proccessing your form submission">');

					erdiv.css("color", "green");
					(completeInviteForm(),900);

				}

				});



				});