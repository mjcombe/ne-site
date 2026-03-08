import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";
import L from "leaflet";
import { locations } from "@/data/locations";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";

// Fix for default marker icon in react-leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

// Create a custom icon using our brand colors
const customIcon = new L.Icon({
  iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

// Coordinates for North East locations
const coordinates: Record<string, [number, number]> = {
  "newcastle": [54.9783, -1.6178],
  "sunderland": [54.9069, -1.3838],
  "gateshead": [54.9621, -1.6017],
  "durham": [54.7753, -1.5849],
  "north-shields": [55.0086, -1.4445],
  "south-shields": [54.9961, -1.4312],
  "washington": [54.9000, -1.5167],
  "blyth": [55.1264, -1.5034],
  "ashington": [55.1812, -1.5684],
  "middlesbrough": [54.5742, -1.2325],
  "stockton-on-tees": [54.5682, -1.3190],
  "darlington": [54.5242, -1.5540],
  "hartlepool": [54.5273, -1.2133],
  "peterlee": [54.6989, -1.3323],
  "seaham": [54.8344, -1.3303],
  "consett": [54.8519, -1.8294],
  "bishop-auckland": [54.6622, -1.6774],
  "chester-le-street": [54.8550, -1.5724],
  "cramlington": [55.0864, -1.5866],
  "whitley-bay": [55.0441, -1.4468],
  "wallsend": [54.9912, -1.5312],
  "jarrow": [54.9818, -1.4883],
  "hebburn": [54.9734, -1.5126],
  "newton-aycliffe": [54.6200, -1.5800],
  "stanley": [54.8710, -1.6960],
};

const CoverageMap = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return <div className="h-[500px] w-full bg-muted rounded-xl flex items-center justify-center animate-pulse"><MapPin className="w-10 h-10 text-muted-foreground opacity-50" /></div>;

  // Center of North East (roughly between Newcastle and Sunderland)
  const center: [number, number] = [54.88, -1.5];

  return (
    <div className="rounded-xl overflow-hidden shadow-lg border border-border h-[500px] md:h-[600px] w-full z-0 relative">
      <MapContainer 
        center={center} 
        zoom={10} 
        scrollWheelZoom={false}
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          className="map-tiles"
        />
        
        {/* Draw a large circle to show general coverage area */}
        <Circle 
          center={center} 
          radius={45000} // 45km radius
          pathOptions={{ 
            color: 'hsl(188, 55%, 69%)', 
            fillColor: 'hsl(188, 55%, 69%)', 
            fillOpacity: 0.1,
            weight: 2,
            dashArray: "4 4"
          }} 
        />

        {locations.map((loc) => {
          const coords = coordinates[loc.slug];
          if (!coords) return null;

          return (
            <Marker key={loc.slug} position={coords} icon={customIcon}>
              <Popup className="custom-popup">
                <div className="p-1">
                  <h3 className="font-heading font-bold text-base mb-1">{loc.name}</h3>
                  <p className="text-xs text-muted-foreground mb-3">{loc.county}</p>
                  <Link 
                    to={`/locations/${loc.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:text-accent/80"
                  >
                    View area <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
};

export default CoverageMap;