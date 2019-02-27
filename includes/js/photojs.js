$(document).ready(function(){
	$('.tagger').hide();
		var mainx=0;
		var mainy=0;
		
		$.ajax({
				type:'POST',
				url:'refreshdb.php',
				dataType:'JSON',
				success:function(data){
					var count=1;
					/* i=id v=[name,x,y]*/
						$.each(data,function(i,v){
						alert(i+" "+v);/*screen shot bheja hai ye alert ka. Agge ka part same hai jo tu tag pe click karne par karta tha, sirf kyunki abi apnepas
						text box se value nai ayegaa.. so database se extract kia h and v[0] use kia hai for name and v[2] for top and v[1] for left*/
							
							$('.names').append('<div class="list" id="'+count+'" value="'+v[0]+'">'+v[0]+'<input type="button" id="na" value="x"></div>');
							$('.tagger').hide();
							$('#text').val("");
							$('.con').append('<div class="tagbox" id="name'+count+'">');
							$('#name'+count).css({'left':+v[1],'top':+v[2],'display':'none'});
					/* yahape count use kar sakte h ya fir databse me jo "id" column dala with auto increment usko use kar sakte by using i instead of count*/		
					count++;
						});
				},
		}).done();
		
		
		$('.image img').click(function(e){
		var x;
		var y;
		var iwidth=$(this).width()-50;
		var iheight=$(this).height()-50;;
		
		var offset = $(this).offset();
			x=e.pageX - offset.left;
			y=e.pageY - offset.top;

			if(x<50){
				x=50;
			}
			if(y<45){
				y=45;
			}
			if(x>iwidth){
				x=iwidth;
			}
			if(y>iheight){
				y=iheight;
			}
					
				mainx= x + offset.left-50;
				mainy= y + offset.top-50;
				
		$('.tagger').css('left',mainx);		
		$('.tagger').css('top',mainy);
		$('.tagger').show();
		});
		
		$(document).on('keyup','#text',function(){
		var x=$('#text').val();
		$('.suggest').hide();
		$('.sugg').css('display','none');
		$.ajax({
				type:'POST',
				url:'suggestphoto.php',
				data:{'name':x},
				dataType:'JSON',
				success:function(data){
					/*alert(data);*/
					$.each(data,function(name,v){
					$('.sugg').append('<div class="suggest"><a href="#" value="'+v+'">'+v+'</a></div>');
					$('.sugg').css('display','block');
					});
				},
		}).done();
	});
		$(document).on('click','.suggest a',function(){
							var	x=$(this).attr('value');
								$('#text').val(x);
							$('.suggest').hide();	
						});
		
		var count=0;
		$(document).on('click','#tag',function(){
			
			var value = $('#text').val();
			$('.names').append('<div class="list" id="'+count+'" value="'+value+'">'+value+'<input type="button" id="na" value="x"></div>');
			$('.tagger').hide();
			$('#text').val("");
			$('.con').append('<div class="tagbox" id="name'+count+'">');
			/*alert(mainx+''+mainy);*/
			$('#name'+count).css({'left':mainx,'top':mainy,'display':'none'});
			count++;
			
			$.ajax({
			type:'POST',
			url:'photodb.php',
			data:{'name':value,'x':mainx,'y':mainy},
			dataType:'JSON',
			success:function(data){
				alert(data);
			},
		}).done()
				
		});
		
		$(document).on('click','#back',function(){
			$('.tagger').hide();
		});
		
		$(document).on('click','#na',function(){
			var a= $('.list').attr('value');
			var i= $('.list').attr('id');
			
				$.ajax({
					type:'POST',
					url:'removename.php',
					data:{'name':a},
					dataType:'JSON',
					success:function(data){
						alert(data);
					},
				}).done()
		
			$('#name'+i).remove();
			$(this).parent().remove();
			
		});
		
		$(document).on('mouseover','.list',function(){
			var a= $(this).attr('id');
			$('#name'+a).show();
		});
		
		$(document).on('mouseout','.list',function(){
			var a= $(this).attr('id');
			$('#name'+a).hide();
		});
		
})	