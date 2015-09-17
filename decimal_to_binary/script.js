
$('.input').keyup(function(){
	//takes value from user's input
	var input = $(this).val();

	//Decimal to binary algoritm
	var getBinary = "";
while(input >0){
    if(input % 2 == 0){
        getBinary = "0" + getBinary;
        input = input / 2;
    }else{
        getBinary = "1" + getBinary;
        input = (input-1)/2;
    }
   
};
	
	$('.binary').text(getBinary);
});








