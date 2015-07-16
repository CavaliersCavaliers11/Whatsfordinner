var chinesel = ["<a href='http://www.legendseafoodhonolulu.com/menus1' target='_blank'>Legend Seafood</a>","<a href='http://www.jadedynastyhawaii.com/' target='_blank'>Jade Dynasty</a>", "<a href='http://www.littlevillagehawaii.com/' target='_blank'>Little Village</a>"];

var japanesel = ["<a href='http://www.gyotakuhawaii.com' target='_blank'>Gyotaku</a>","<a href='http://www.morimotowaikiki.com' target='_blank'>Morimoto</a>","<a href='http://www.shokudojapanese.com' target='_blank'>Shokudo</a>","<a href='http://www.mrojisan.com/Mr._Ojisan_Restaurant/Mr.Ojisan_-_Home.html' target='_blank'>Mr. Ojisan</a>","<a href='http://www.toridollusa.com' target='_blank'>Marukame</a>","<a href=http://www.noburestaurants.com/waikiki/experience/' target='_blank'>Nobu</a>","<a href=http://mitchssushi.com/' target='_blank'>Mitch's</a>"];

var italianl = ["<a href='http://paesanohawaii.com' target='_blank'>Paesano</a>","<a href='http://www.yelp.com/biz/assaggio-ristorante-italiano-honolulu' target='_blank'>Assagio's</a>","<a href='http://www.bucadibeppo.com/restaurants/hi/honolulu/' target='_blank'>Buca di Beppo</a>"];

var koreanl = ["<a href='http://www.sorabolhawaii.com/' target='_blank'>Sorabol</a>","<a href='http://camelliabuffet.com/' target='_blank'>Camellia Buffet</a>","<a href='http://choisgardenkoreanrestaurant.com/' target='_blank'>Choi's Garden</a>"];

var frenchl = ["<a href='http://www.chefmavro.com' target='_blank'>Chef Mavro</a>","<a href='http://www.jjfrenchbistro.com/' target='_blank'>JJ French Bistro</a>","<a href='http://www.lebistrowv.com/home.html' target='_blank'>Le Bistro</a>","<a href='http://www.halekulani.com/la-mer-restaurant' target='_blank'>La Mer</a>","<a href='http://latourcafe.com/' target='_blank'>La Tour Cafe</a>","<a href='http://www.lecrepecafe.com/' target='_blank'>Le Crepe Cafe</a>"];

var hawaiianl = ["<a href='http://topofwaikiki.com' target='_blank'>Top of Waikiki</a>","<a href='http://www.azurewaikiki.com' target='_blank'>Azure</a>","<a href='http://willowshawaii.com' target='_blank'>Willow's</a>","<a href='http://www.dukeswaikiki.com' target='_blank'>Duke's</a>","<a href='http://www.onohawaiianfoods.com' target='_blank'>Ono Hawaiian Food</a>","<a href='http://www.helenashawaiianfood.com' target='_blank'>Helena's</a>","<a href='http://www.luluswaikiki.com/' target='_blank'>LuLu's</a>"];

var mexicanl = ["<a href='http://www.loschaparros.com' target='_blank'>Los Chaparros</a>","<a href='http://www.mexicocantina.com/' target='_blank'>Mexica Cantina</a>","<a href='http://joseshonolulu.com/' target='_blank'>Joe's Mexican Cafe</a>"];

var americanl = ["<a href='http://www.townkaimuki.com' target='_blank'>Town Kaimuki</a>","<a href='http://www.yardhouse.com/locations/hi/honolulu/waikiki-waikiki-beach-walk/8316'>Yard House</a>"];

var thail = ["<a href='http://www.phuketthaihawaii.com' target='_blank'>Phuket Thai</a>","<a href='https://sites.google.com/site/paethairestaurant/' target='_blank'>Pae Thai</a>","<a href='http://itstothaifor.com/' target='_blank'>To Thai</a>"];

var vietnamesel = ["<a href='http://diem99cafe-hi.webs.com/' target='_blank'>Diem 99 Cafe</a>","<a href='http://www.menuism.com/restaurants/bac-nam-honolulu-15363' target='_blank'>Bac Nam</a>","<a href='http://www.thatfoodcray.com/honolulu-cray-pho-huong-lan/' target='_blank'>Pho Huaong</a>"];

var fusionl = ["<a href='http://www.alanwongs.com' target='_blank'>Alanwongs</a>","<a href='http://www.kitnkitchen.com/' target='_blank'>Kit and Kitchen</a>","<a href='http://michelshawaii.com' target='_blank'>Michel's</a>","<a href='http://www.royshawaii.com' target='_blank'>Roy's</a>","<a href='http://www.sarentoswaikiki.com/ ' target='_blank'>Sarento's</a>","<a href='http://daspot.net/#/intro' target='_blank'>Da Spot</a>"];

var takeoutl = ["<a href='http://www.yelp.com/biz/nam-fong-restaurant-honolulu' target='_blank'>Nam Fong</a>"];

var items = "";
var i;

function chinese () {
	document.getElementById("space").innerHTML = "";
	items = "";
	list = chinesel;
	looper();
	return;
}

function japanese () {
	document.getElementById("space").innerHTML = "";
	items = "";
	list = japanesel;
	looper();
	return;
}


function italian () {
	document.getElementById("space").innerHTML = "";
	items = "";
	list = italianl;
	looper();
	return;
}

function korean () {
	document.getElementById("space").innerHTML = "";
	items = "";
	list = koreanl;
	looper();
	return;
}

function french () {
	document.getElementById("space").innerHTML = "";
	items = "";
	list = frenchl;
	looper();
	return;
}

function hawaiian () {
	document.getElementById("space").innerHTML = "";
	items = "";
	list = hawaiianl;
	looper();
	return;
}

function mexican () {
	document.getElementById("space").innerHTML = "";
	items = "";
	list = mexicanl;
	looper();
	return;
}

function american () {
	document.getElementById("space").innerHTML = "";
	items = "";
	list = americanl;
	looper();
	return;
}

function thai () {
	document.getElementById("space").innerHTML = "";
	items = "";
	list = thail;
	looper();
	return;
}

function vietnamese () {
	document.getElementById("space").innerHTML = "";
	items = "";
	list = vietnamesel;
	looper();
	return;
}

function fusion () {
	document.getElementById("space").innerHTML = "";
	items = "";
	list = fusionl;
	looper();
	return;
}

function takeout () {
	document.getElementById("space").innerHTML = "";
	items = "";
	list = takeoutl;
	looper();
	return;
}



function resetter () {
	document.getElementById("space").innerHTML = "";
	items = "";
	return;
}

function looper() {
	for (i = 0; i < list.length; i++) {
		items += list[i] + "<br>";
	}
	document.getElementById("space").innerHTML = items;
	return;
}

