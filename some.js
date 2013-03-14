var cubique = [
{header:"Domik", text:"20"},
{header:"Play-field", text:"Play-field for 10-12 people."},
{header:"Chocolate", text:"Cotton candy bonbon cotton candy muffin sesame snaps."},
{header:"Cupcake", text:"Chocolate bar cake croissant. Cheesecake marshmallow caramels cake lollipop."},
{header:"Cake powder", text:"Tart tart applicake ice cream gummi bears jujubes jujubes. Applicake marshmallow marzipan jelly sweet."},
{header:"Tart", text:"Brownie powder powder carrot cake lollipop souffle. Halvah lemon drops jelly chocolate cake tiramisu dessert tootsie roll sweet."},
{header:"Croissant", text:"Cupcake applicake applicake pie lollipop pastry caramels oat cake sweet. "},
{header:"Jelly-o macaroon", text:"Croissant jelly beans gummi bears lemon drops cheesecake tootsie roll tootsie roll muffin powder."},
{header:"Lollipop", text:"Jelly-o macaroon cake brownie. Halvah applicake dessert marshmallow pastry."},
{header:"Apple pie", text:"Halvah applicake fruitcake candy sesame snaps gummi bears jelly-o brownie."},
{header:"Pastry", text:"Chocolate toffee wafer jujubes brownie wypas halvah toffee. Sweet croissant sugar plum danish candy cookie powder topping. "},
{header:"Chocolate toffee", text:"Dessert tiramisu pie dragee tart gummies danish. Cookie brownie gummi bears toffee sesame snaps chupa chups marzipan jelly candy."},
{header:"Chocolate bar", text:"Jelly halvah jelly beans brownie tart. Marshmallow biscuit cookie sweet jelly cookie powder candy pastry."},
{header:"Pudding", text:"Cupcake sugar plum tootsie roll cookie cookie chocolate bar dessert chocolate cake. Jujubes macaroon icing sugar plum dragee pie."},
{header:"Jelly halvah", text:"Pudding gummies candy chupa chups jujubes bear claw sugar plum pastry carrot cake. Topping sesame snaps lollipop gummies jujubes liquorice cookie cookie."},
{header:"Jujubes", text:"Chupa chups macaroon candy brownie faworki donut toffee cheesecake pastry. "},
{header:"Cake powder", text:"Wypas marshmallow bonbon croissant chocolate bar. Biscuit oat cake jelly-o marshmallow faworki chupa chups jujubes."},
{header:"Chupa chups", text:"Lollipop apple pie tootsie roll. Chocolate cake liquorice cotton candy tootsie roll cupcake tootsie roll cookie ice cream. "},
{header:"Applicake marshmallow", text:"Cupcake gummi bears pastry jelly jujubes liquorice marshmallow oat cake pastry. Cake powder tiramisu. "},
{header:"Bear claw", text:"Sesame snaps pudding cookie cookie tootsie roll jelly jelly-o. Chocolate bonbon wypas."},
{header:"Sesame snaps", text:"Pastry macaroon pie jelly beans oat cake pie fruitcake. Jelly marshmallow wypas macaroon."},
{header:"Chocolate toffee", text:"Chocolate bar fruitcake pudding. Icing lemon drops tootsie roll."},
{header:"Lollipop apple", text:"Cheesecake marshmallow caramels cake lollipop."}
];

$(document).ready(function() {
	Planstery.bind("onselect" , function(id){
		var mainContainer = $("#planstery-main-container");
		clr();
		toolTip(cubique[id[0].id - 1].header, cubique[id[0].id -1].text, id[0]);
	});
	Planstery.bind("ondeselect" , function(){
		toolTip();
	});
	Planstery.bind("onmouseenter" , function(id){			
		toolTip(cubique[id.id - 1].header, cubique[id.id - 1].text, id);
	});
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


function toolTip(header, text, object) {
	var tooltip = $("#planstery-tooltip");
	var tooltipHeader = $("#planstery-tooltip-header");
	var tooltipText = $("#planstery-tooltip-text");
	w = 150; // Tooltip's wigth
	var mainContainer = $("#planstery-main-container");
	if (header) {
		var x = mainContainer.offset().left + object.bounds.center.x;
		var y = mainContainer.offset().top + object.bounds.center.y - object.bounds.height/2 - 20;
		tooltipHeader.text(header);
		tooltipText.text(text);
		tooltip.css({
			"display": "block",
			"left": x - w/2 + 'px',
			"top": y - tooltip.height() + 'px'
		})
	} else { 
		tooltip.css("display", "none");
	} 
}