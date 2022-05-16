function initDemoMap() {
  var osm = L.tileLayer(
    "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
  );



  var baseLayers = {
    osm: osm,
  };

  var map = L.map("map", {
	  center:[ 41.053207, 29.043345],
			   zoom: 12, 
			   zoomDelta:0.01,
			   
    layers: [osm]
  });

  var layerControl = L.control.layers(baseLayers);
  layerControl.addTo(map);
  // map.setView({center:[ 41.053207, 29.043345],
			   // zoom: 12, 
			   // zoomDelta:0.5});

  return {
    map: map,
    layerControl: layerControl
  };
}

// demo map
var mapStuff = initDemoMap();
var map = mapStuff.map;
//var layerControl = mapStuff.layerControl;

var datas =data;

var velocityLayer = L.velocityLayer({
  displayValues: false,
  displayOptions: {
    velocityType: "Global Wind",
  },
  data: datas,
  maxVelocity: 1,
  velocityScale: 0.4 // arbitrary default 0.005
}).addTo(map);
//layerControl.addOverlay(velocityLayer, "İstanbul Trafik Yoğunluk Değişimi Vektörel Alanı");



