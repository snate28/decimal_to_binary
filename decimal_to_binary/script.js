
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



$('.input2').keyup(function(){
    //takes user's input
    var input2 = $(this).val();

//Binary to decimals algorithm
var decimal = 0;
for(var i=input2.length-1;i>=0;i--){
    decimal+= input2[i]*Math.pow(2,input2.length-1-i);
}
    $('.decimal').text(decimal);
});








