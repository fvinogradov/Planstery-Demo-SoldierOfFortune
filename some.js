var cubique = [
{header:"Домик", text:"Уютный домик на компанию 20-25 человек"},
{header:"Футбольное поле", text:"Футбольное поле на 10-12 человек."},
{header:"Лесная площадка", text:"В центре расположен корабль «Черная жемчужина», а по периметру в хаотичном порядке располагаются различные строения — укрытия."},
{header:"Главная поляна", text:"Место для проведения различных сценарных и сюжетно-приключенческих игр."},
{header:"Скалодром", text:"9-метровый скалодром, оборудованный стационарными верёвками и страховочными устройствами."},
{header:"Высотный город", text:"Уникальный комплекс высотных заданий-препятствий на высоте свыше 6 метров над землей."},
{header:"Троллея", text:"Аналог парашютной вышки или тарзанки. "},
{header:"Парковка", text:"Парковка на 20-30 машин"},
{header:"Домик", text:"Теплый домик на команию 20 человек."},
{header:"Домик", text:"Теплый домик на 6-8 человек."},
{header:"Домик", text:"Самое большое отапливаемое помещение в Солдате Удачи на 100 человек. "},
{header:"Служебное помещение", text:"Слудебное помешенме для хранения винтовок и снаряжения"},
{header:"Баня", text:" Березовые венечки, теплый предбанник с уютной обстановкой, а самое главное теплая атмосфера."},
{header:"Терраса", text:"Помещение на компанию 30-40 человек."},
{header:"Охотничий домик", text:"Первый этаж - комната с камином на 20 человек, мансарда на 25-30 человек."},
{header:"Беседка", text:"Для любителей природы и свежего воздуха мы предоставляем комфортные беседки."},
{header:"Беседка", text:"Для любителей природы и свежего воздуха мы предоставляем комфортные беседки."},
{header:"Домик", text:"Избушка на курьих ножках для компании из 10 человек. "}
];

$(document).ready(function() {
	Planstery.bind("onselect" , function(id){
		clr();
		toolTip(cubique[id[0].id - 1].header, id[0]);
		ShowImage(cubique[id[0].id -1].text, id[0].id - 1);
	});
	Planstery.bind("ondeselect" , function(){
		toolTip();
		ShowImage();
	});
	Planstery.bind("onmouseenter" , function(id){
		toolTip(cubique[id.id - 1].header, id);
	});//cubique[id.id - 1].text,
	Planstery.bind("onmouseleave" , function(id){
		toolTip();
	});
	Planstery.bind("onplandragstart" , function(){
		toolTip();
	});
	Planstery.bind("ondocumentloadcomplete" , function() {

		Planstery.setStyleForObject({
				"obj-id": "2",
				"selection-color": "rgba(144, 238, 144, 0.9)",
				"background-color": "rgba(144,238, 144, 0.6)",
				"hover-color": "rgba(144, 238, 144, 0.8)"
			});
		});
});


function assign(id) {
	Planstery.selectObjects(id);
}

function clr() {
	Planstery.clearSelection();
}

function toolTip(header, object) {
	var tooltip = $("#planstery-tooltip");
	var tooltipHeader = $("#planstery-tooltip-header");
	//var tooltipText = $("#planstery-tooltip-text");
	//var img = $("#image-container");
	w = 150; // Tooltip's wigth
	var mainContainer = $("#planstery-main-container");
	if (header) {
		var x = mainContainer.offset().left + object.bounds.center.x;
		var y = mainContainer.offset().top + object.bounds.center.y - object.bounds.height/2 - 20;
		tooltipHeader.text(header);
		//tooltipText.css({"display":"none"});
		//img.css("display","none");
		tooltip.css({
			"display": "block",
			"left": x - w/2 + 'px',
			"top": y - tooltip.height() + 'px'
		})
	} else { 
		tooltip.css("display", "none");
	//img.css("display","none");
	} 
}

var images = new Array();
images[0] = new Image(50,50);
images[0].src="images/1.png";
images[4] = new Image(50,50);
images[4].src="images/5.png";
images[5]=new Image(50,50);
images[5].src="images/6.png";
images[6]=new Image(50,50);
images[6].src="images/7.png";
images[8]=new Image(50,50);
images[8].src="images/9.png";
images[9]=new Image(50,50);
images[9].src="images/10.png";
images[10]=new Image(50,50);
images[10].src="images/11.png";
images[13]=new Image(50,50);
images[13].src="images/14.png";
images[14]=new Image(50,50);
images[14].src="images/15.png";
images[15]=new Image(50,50);
images[15].src="images/16.png";
images[16]=new Image(50,50);
images[16].src="images/17.png";
images[17]=new Image(50,50);
images[17].src="images/18.png";
images[18]=new Image(50,50);
images[18].src="images/19.png";

function ShowImage(text, id){
	var text_field = $("#text_field");	
	if(text){
		text_field.css({
		"display":"block",
		});
		text_field.text(text);
		if (images[id] !== undefined){
		document.getElementById("img1").src = images[id].src;}
		else {
		document.getElementById("img1").src = images[18].src;}
	} else {
		text_field.css("display", "none");
		document.getElementById("img1").src = images[18].src;
	}
}