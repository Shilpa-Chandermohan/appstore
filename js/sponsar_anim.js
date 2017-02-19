function adv(data){
	
				
				var length = data.TotalResults;
				var leftLength = Math.floor(length/2);
				var rightLength = length - leftLength;
				
				var indexLeft = 0;
				var resLeft = 1;
				var indexRight = leftLength ;
				var resRight = leftLength + 1;
				
				
				setInterval(function getAdvertisementData(){
					
					$("#advert_cont").fadeOut(3000, function(){
												
						$("#left_img").attr("src",data.Results[indexLeft-1][resLeft-1][0]);
						$("#right_img").attr("src",data.Results[indexRight-1][resRight-1][0]);
						$(this).fadeIn(3000); 
			
					});
					
					if(indexLeft !=  leftLength)
					{
						indexLeft++;
						resLeft++;
					}
					
					else
					{
						indexLeft = 1;
						resLeft = 2;
					}
					
					
					if(indexRight !=  length)
					{
						
						indexRight++;
						resRight++;
					}
					
					else
					{
						indexRight = leftLength +1;
						resRight = leftLength + 2;
					}
					
					
					
				
				} ,6000) 
				
			}
		
			


