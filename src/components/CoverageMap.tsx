import { useEffect, useRef, useState } from "react";
import L from "leaflet";
import { locations } from "@/data/locations";
import { MapPin } from "lucide-react";

// Custom SVG marker matching the navy brand color
const createBrandIcon = () => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 36" width="28" height="42">
    <defs>
      <filter id="shadow" x="-20%" y="-10%" width="140%" height="130%">
        <feDropShadow dx="0" dy="1" stdDeviation="1.5" flood-color="#000" flood-opacity="0.25"/>
      </filter>
    </defs>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 9 12 24 12 24s12-15 12-24C24 5.373 18.627 0 12 0z" fill="hsl(215,55%,20%)" filter="url(#shadow)"/>
    <circle cx="12" cy="11" r="5" fill="hsl(188,55%,69%)"/>
  </svg>`;

  return L.divIcon({
    html: svg,
    className: "custom-brand-marker",
    iconSize: [28, 42],
    iconAnchor: [14, 42],
    popupAnchor: [0, -38],
  });
};

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
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted || !mapRef.current || mapInstanceRef.current) return;

    const center: L.LatLngExpression = [54.88, -1.5];
    const map = L.map(mapRef.current, {
      center,
      zoom: 10,
      scrollWheelZoom: false,
    });

    mapInstanceRef.current = map;

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Coverage area circle
    L.circle(center, {
      radius: 45000,
      color: "hsl(188, 55%, 69%)",
      fillColor: "hsl(188, 55%, 69%)",
      fillOpacity: 0.08,
      weight: 2,
      dashArray: "6 4",
    }).addTo(map);

    const brandIcon = createBrandIcon();

    // Add markers
    locations.forEach((loc) => {
      const coords = coordinates[loc.slug];
      if (!coords) return;

      const marker = L.marker(coords, { icon: brandIcon }).addTo(map);
      marker.bindPopup(`
        <div style="padding:4px 2px;font-family:system-ui,sans-serif;">
          <strong style="font-size:14px;color:hsl(215,55%,20%);">${loc.name}</strong>
          <p style="font-size:11px;color:#666;margin:2px 0 8px;">${loc.county}</p>
          <a href="/locations/${loc.slug}" style="font-size:13px;font-weight:500;color:hsl(215,55%,20%);text-decoration:none;display:inline-flex;align-items:center;gap:4px;">
            View area →
          </a>
        </div>
      `);
    });

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, [isMounted]);

  if (!isMounted) {
    return (
      <div className="h-[500px] md:h-[600px] w-full bg-muted rounded-xl flex items-center justify-center animate-pulse">
        <MapPin className="w-10 h-10 text-muted-foreground opacity-50" />
      </div>
    );
  }

  return (
    <div className="rounded-xl overflow-hidden shadow-lg border border-border h-[500px] md:h-[600px] w-full z-0 relative">
      <div ref={mapRef} className="h-full w-full" />
    </div>
  );
};

export default CoverageMap;
