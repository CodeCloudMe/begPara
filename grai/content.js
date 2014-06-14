/*if(window.location.href.indexOf('bitzino')==-1){
		return;
	}



/*! jQuery v2.0.3 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery-2.0.3.min.map
*/


console.log("running grai");



//alert('extension running...');



	setTimeout(function(){
		init();

	},4000);

var gameStarted = false;

function init(){

	listenForGameStart();
	
}

function listenForGameStart(){
if(gameStarted == true){
	return false;
}

	if($(".status:nth(1)").html().length>3){

		console.log("new game");
		t1 = setTimeout(function(){
			determineWager();
			//clearTimeout(t1);
		}, 500);
	}
	else{

		//console.log("game in progress");
		t2 = setTimeout(function(){
			listenForGameStart();
			clearTimeout(t2);
		}, 3000);
	}
	gameStarted=false;
}

var myCards;
function determineWager(){
	t3 = setTimeout(function(){

		listenForGameStart();
		clearTimeout(t3);
	},5000);
	
	//get all card values and save them and category
	myCards = [];
	dealersCards = [];
	for(i=0; i<9; i++){
		if(typeof $('.c3 .n'+i+':last .rank:nth(0)').html()== "undefined"){
			break;
		}
		myCards.push($('.c3 .n'+i+':last .rank:nth(0)').html())
	}
	for(i=0; i<9; i++){
		if(typeof $('.c2 .n'+i+':nth(0) .rank:nth(0)').html()== "undefined"){
			break;
		}
		dealersCards.push($('.c2 .n'+i+':nth(0) .rank:nth(0)').html())
	}

	allCards=[];
	allCards =allCards.concat(dealersCards,myCards);
	saveHighAndLow(allCards);



	//get the total number of highs and lows

}


function saveHighAndLow(theCards){

	t4= setTimeout(function(){

		determineMoves();
		clearTimeout(t4);
	}, 2500);
	if(localStorage.getItem('high')==null){

			localStorage.setItem('high', 0);
		}
			if(localStorage.getItem('low')==null){

			localStorage.setItem('low', 0);
		}

		high = parseInt(localStorage.getItem('high'));
		low = parseInt(localStorage.getItem('low'));

	for(i in theCards){

		if(Number(theCards[i])> -1){
			//is number
			if(parseInt(theCards[i]) > 9){
				high=high+1;
				console.log("high +1: " +theCards[i]);
				localStorage.setItem('high', high);
			}
			if(parseInt(theCards[i]) < 7){
				low=low+1;
				console.log("low+1: " +theCards[i]);
				localStorage.setItem('low', low);
			}

		}
		else{
			high=high+1;
				console.log("high +1: " +theCards[i]);
				localStorage.setItem('high', high);

		}
	}

	if(high>low){

		$('#blackjack_table_bet').val('1');
		//console.log("dealers score is higher than yours. Dealer is \n "+ high+ "You are \n"+low);
			t5 = setTimeout(function(){

			$('#info form:last').submit()
			clearTimeout(t5);
		}, 100);

		return ('bet low');
	
	}
	if(low == high){

		$('#blackjack_table_bet').val('10');
		console.log("You are even. Dealer is \n "+ high+ "You are \n"+low);
		
		t6 = setTimeout(function(){

			$('#info form:last').submit();
			clearTimeout(t6);
		}, 100);

		return ('bet even');
		
	}

	if(low > (high+10)){

		$('#blackjack_table_bet').val('50');
		console.log("You are up 10 or more. Dealer is \n "+ high+ "You are \n"+low);
		
		t7 = setTimeout(function(){

			$('#info form:last').submit();
			clearTimeout(t7);
		}, 100);

		return ('bet +100');
		
	}

		if(low > (high+8)){

		$('#blackjack_table_bet').val('60');
		console.log("You are up 10 or more. Dealer is \n "+ high+ "You are \n"+low);
			
		t8 = setTimeout(function(){

			$('#info form:last').submit()
			clearTimeout(t8);
		}, 100);

		return ('bet +60');
		
		}


if(low > (high+6)){

		$('#blackjack_table_bet').val('40');
		console.log("You are up 10 or more. Dealer is \n "+ high+ "You are \n"+low);
			
		t9 = setTimeout(function(){

			$('#info form:last').submit();
			clearTimeout(t9);
		}, 100);

		return ('bet +40');
		
		}

		if(low > (high+3)){

		$('#blackjack_table_bet').val('28');
		console.log("You are up 10 or more. Dealer is \n "+ high+ "You are \n"+low);
			
		t10 = setTimeout(function(){

			$('#info form:last').submit();
			clearTimeout(t10);
		}, 100);

		return ('bet +28');
		
		}

		if(low > (high)){

		$('#blackjack_table_bet').val('20');
		console.log("You are up a little. Dealer is \n "+ high+ "You are \n"+low);
			
		t11 = setTimeout(function(){

			$('#info form:last').submit();
			clearTimeout(t11);
		}, 100);

		return ('bet +20');
		
		}








}

myCards1 = [];
	dealersCards1 = [];
function determineMoves(){

	myCards1 = [];
	dealersCards1 = [];

	for(i=0; i<9; i++){
		if(typeof $('.c2 .n'+i+':last .rank:nth(0)').html()== "undefined"){
			break;
		}
		myCards1.push($('.c2 .n'+i+':last .rank:nth(0)').html())
	}
	for(i=0; i<9; i++){
		if(typeof $('.c1 .n'+i+':nth(0) .rank:nth(0)').html()== "undefined"){
			break;
		}
		dealersCards1.push($('.c1 .n'+i+':nth(0) .rank:nth(0)').html())
	}

	if(myCards1.length >2){
		myCards1=[];
		dealersCards1=[];
		for(i=0; i<9; i++){
		if(typeof $('.c3 .n'+i+':last .rank:nth(0)').html()== "undefined"){
			break;
		}
		myCards1.push($('.c3 .n'+i+':last .rank:nth(0)').html())
		
	}

	for(i=0; i<9; i++){
		if(typeof $('.c2 .n'+i+':last .rank:nth(0)').html()== "undefined"){
			break;
		}
	dealersCards1.push($('.c2 .n'+i+':last .rank:nth(0)').html())
	}
}




t14 = setTimeout(function(){

	playBased();
	//clearTimeout(t14);
}, 1000);

}











function determineMoves1(){

	
	for(i=0; i<9; i++){
		if(typeof $('.c2 .n'+i+':last .rank:nth(0)').html()== "undefined"){
			break;
		}
		myCards1.push($('.c2 .n'+i+':last .rank:nth(0)').html())
	}
	for(i=0; i<9; i++){
		if(typeof $('.c1 .n'+i+':nth(0) .rank:nth(0)').html()== "undefined"){
			break;
		}
		dealersCards1.push($('.c1 .n'+i+':nth(0) .rank:nth(0)').html())
	}

	if(myCards1.length >2){
		myCards1=[];
		dealersCards1=[];
		for(i=0; i<9; i++){
		if(typeof $('.c3 .n'+i+':last .rank:nth(0)').html()== "undefined"){
			break;
		}
		myCards1.push($('.c3 .n'+i+':last .rank:nth(0)').html())
		
	}

	for(i=0; i<9; i++){
		if(typeof $('.c2 .n'+i+':last .rank:nth(0)').html()== "undefined"){
			break;
		}
	dealersCards1.push($('.c2 .n'+i+':last .rank:nth(0)').html())
	}
}




t14 = setTimeout(function(){

	playBased();
	//clearTimeout(t14);
}, 1000);

}










function playBased(){

		soft = false;
	for(i in myCards1){

		if(myCards1[i]=="A"){
			soft=true
		}

		if(Number(myCards1[i])> -1){
			myCards1[i]= parseInt(myCards1[i]);
		}
		else{

			if(myCards1[i]=="A"){
				myCards1[i]=11;
			}
			else{
				myCards1[i]=10;
			}
		}
	}

	if(soft==true){

		playSoft(myCards1, dealersCards1);
	}

	else{
		playHard(myCards1, dealersCards1);
	}


}


function playHard(myC, deC){

	console.log("playing hard");
	//my total
	 myT = 0;

	 //dealer total
	deT = 0;
	$.each(myC,function() {
		if(Number(this)>-1){
				 myT += this;
		}
	   
	});
	$.each(deC,function() {
	    if(Number(this)>-1){
				 deT += this;
		}
	   
	});
	if(deT==0){
		console.log('sm went wrong with dET!');
		deT=10;
	}


	if(deT==21){
		console.log("Black Jack! Dealer Won...");
		t15= setTimeout(function(){

			//determineWager();
			clearTimeout(t15);
		}, 1000);
		return;
	}
	if(myT==21){
		console.log("Black Jack! You win");
		t16 = setTimeout(function(){
			//determineWager();
			clearTimeout(t16);
		}, 1000);
		return;
	}
	


	//new

	


	if(myT>10 && myT<12){
		goDouble();
		return;
	}
	else if(myT>9 && myT<11 && deT<11){
		goDouble();
		return;
	}
	else if(myT>9 && myT<11 && deT>=11){
		hit();
		return;
	}

	else if(deT > 6 && myT<17){
		hit();
		return;
	}

	else if(myT<17 && deT>6){
		hit();
		return;
	}


	


	//old
	else if(deT >= 7 && myT <17){
		hit();
		return;
	}
	
	else if(deT < 7 && myT <10){
		goDouble();
		return;
	}
	else if(deT >= 7 && myT >16){

		console.log("dealer bigger than 7 and you are bigger than 16");
		stand();
		return;
	}

	else if(deT < 7 && myT >11){
		//alert('hit!');
		console.log("dealer less than 7 and you are bigger than 11");
		stand();
		return;
	}
	else{


	}



	
}


function goDouble(){
		

		setTimeout(function(){
		console.log("doubling");
		isDisabled = $('#info form:nth(2) input:last').attr('disabled');

		if(isDisabled==true){
			console.log("Was going to double but can't because double is disabled. Going to hit");
			hit();

			
		}
		else{
			$('#info form:nth(2)').submit();
		}
	},2000);

	

}
function stand(){

	console.log("standing");
	
	$('#info form:nth(1)').submit();
	/*setTimeout(function(){

		//determineWager();
	},8000);*/
}

function hit(){

	console.log("hitting");
	$('#info form:nth(0)').submit();
	t18 = setTimeout(function(){
		if($(".status:nth(1)").html().length<=3){
			determineMoves1();
		}
		clearTimeout(t18);
		
	},2000);

}

function playSoft(myC, deC){
	console.log("playing soft");



	//my total
	 myT = 0;

	 //dealer total
	deT = 0;
	$.each(myC,function() {
		if(Number(this)>-1){
				 myT += this;
		}
	  
	});

	
	$.each(deC,function() {
		if(Number(this)>-1){
				 deT += this;
		}
	  
	});
	
if(deT==0){
		console.log('sm went wrong with dET!');
		deT=10;
	}



	//if it's not actually soft ... play hard and return;
	if(myT >18){
		playHard(myCards1, dealersCards1);
		return;
	}

	if(deT==21){
		console.log("Black Jack! Dealer Won...");
		t20 = setTimeout(function(){

			//determineWager();
			clearTimeout(t20);
		}, 1000);
		return;
	}
	if(myT==21){
		console.log("Black Jack! You win");
		t21= setTimeout(function(){
			//determineWager();
			clearTimeout(t21);
		}, 1000);
		return;
	}
	


	if(myT > 12 && myT <16){
		hit();
		return;
	}
	else if(myT > 15 && myT <19 && deT <7){
		goDouble();
		return;
	}
	else if(myT > 15 && myT <19 && deT >=7){
		hit();
		return;
	}
	else if(myT > 18){
		console.log("myT is less greater than 18");
		stand();
		return;
	}

	else if(myT <= 15 && myT >=13){
		hit();
		return;
	}
	
	else if(myT <= 18 && myT >=18 && deT <7){
		goDouble();
	}
	else if(myT <= 18 && myT >=18 && deT >=7){
		hit();
	}
	else if(myT > 18){
		console.log("myT is less than 18 part 2");
		stand();
	}
	else{


	}


	

}



