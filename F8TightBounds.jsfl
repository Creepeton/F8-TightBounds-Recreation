var dom = an.getDocumentDOM();
var timeline = dom.getTimeline();
var lib = dom.library;
var allRotations = [];
var allWidths = [];
var sN = Math.random();

dom.convertToSymbol('graphic', sN, 'center')
var xR = dom.selection[0].x;
var yR = dom.selection[0].y;
dom.breakApart();
dom.group();
var xG = dom.selection[0].x;
var yG = dom.selection[0].y;
var xGT = dom.getTransformationPoint(dom.selection[0]).x;
var yGT = dom.getTransformationPoint(dom.selection[0]).y;
for (var i = 0; i < 45; i++) {
	dom.selection[0].rotation = i
	var bounds = dom.getSelectionRect();
	var perimetre = (bounds.right - bounds.left) + (bounds.bottom - bounds.top);
	allWidths.push(perimetre);
	allRotations.push(i);
}
dom.deleteSelection();
lib.addItemToDocument({x:xR, y:yR}, sN);
dom.breakApart();
dom.group();
dom.setTransformationPoint({x:xGT, y:yGT});
var minrot = allRotations[allWidths.indexOf(Math.min.apply(Math, allWidths))];
dom.selection[0].rotation += minrot;
dom.convertToSymbol('graphic', 'graphic ' + Math.random()*1000000000000000000, 'center');
var xT = xR - dom.selection[0].x;
var yT = yR - dom.selection[0].y;
dom.setTransformationPoint({x:xT, y:yT});
dom.selection[0].rotation -= minrot;
dom.setTransformationPoint({x:0, y:0});
an.getDocumentDOM().enterEditMode('inPlace');
dom.breakApart();
an.getDocumentDOM().exitEditMode();
lib.deleteItem(sN);
