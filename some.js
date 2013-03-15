var cubique = [
{header:"Домик", text:"Уютный домик на компанию 20-25 человек", img:"images/23d.jpg"},
{header:"Футбольное поле", text:"Футбольное поле на 10-12 человек."},
{header:"Лесная площадка", text:"В центре расположен корабль «Черная жемчужина», а по периметру в хаотичном порядке располагаются различные строения — укрытия."},
{header:"Главная поляна", text:"Место для проведения различных сценарных и сюжетно-приключенческих игр."},
{header:"Скалодром", text:"9-метровый скалодром, оборудованный стационарными верёвками и страховочными устройствами."},
{header:"Высотный город", text:"Уникальный комплекс высотных заданий-препятствий на высоте свыше 6 метров над землей."},
{header:"Троллея", text:"Аналог парашютной вышки или тарзанки. "},
{header:"Парковка", text:""},
{header:"Домик", text:"Теплый домик на команию 20 человек."},
{header:"Домик", text:"Теплый домик на 6-8 человек."},
{header:"Домик", text:"Самое большое отапливаемое помещение в Солдате Удачи на 100 человек. "},
{header:"Служебное помещение", text:""},
{header:"Баня", text:" Березовые венечки, теплый предбанник с уютной обстановкой, а самое главное теплая атмосфера."},
{header:"Терраса", text:"Помещение на компанию 30-40 человек."},
{header:"Охотничий домик", text:"Первый этаж - комната с камином на 20 человек, мансарда на 25-30 человек."},
{header:"Беседка", text:"Для любителей природы и свежего воздуха мы предоставляем комфортные беседки."},
{header:"Беседка", text:"Для любителей природы и свежего воздуха мы предоставляем комфортные беседки."},
{header:"Домик", text:"Избушка на курьих ножках для компании из 10 человек. "}
];

$(document).ready(function() {
	Planstery.bind("onselect" , function(id){
		var mainContainer = $("#planstery-main-container");
		toolTip(cubique[id[0].id - 1].header, cubique[id[0].id -1].text, id[0]);
	});
	Planstery.bind("ondeselect" , function(){
		toolTip();
	});
	Planstery.bind("onmouseenter" , function(id){			
		toolTip(cubique[id.id - 1].header,'',id);
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


function toolTip(header, text, object, img) {
	var tooltip = $("#planstery-tooltip");
	var tooltipHeader = $("#planstery-tooltip-header");
	var tooltipText = $("#planstery-tooltip-text");
	w = 150; // Tooltip's wigth
	var mainContainer = $("#planstery-main-container");
	var str = "Free Web Building Tutorials!";
	if (header) {
		var x = mainContainer.offset().left + object.bounds.center.x;
		var y = mainContainer.offset().top + object.bounds.center.y - object.bounds.height/2 - 20;
		tooltipHeader.text(header);
		tooltipText.css({"display":"none"})
		tooltip.css({
			"display": "block",
			"left": x - w/2 + 'px',
			"top": y - tooltip.height() + 'px'
		})
		if(text){
			//tooltipText.text(text+'\n'+str.link("http://www.w3schools.com"));
			tooltipText.css({"display":"block"})
			//document.write(str.link("http://www.w3schools.com"));
//			if(img){
					
//				}
		}
	} else { 
		tooltip.css("display", "none");
	} 
}