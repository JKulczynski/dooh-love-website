"use client";

import { useEffect, useRef } from "react";
import { importLibrary, setOptions } from "@googlemaps/js-api-loader";

setOptions({ key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!, v: "weekly" });

const DARK_STYLE: google.maps.MapTypeStyle[] = [
  { elementType: "geometry", stylers: [{ color: "#141414" }] },
  { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#444444" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#0a0a0a" }] },
  { featureType: "administrative", elementType: "geometry", stylers: [{ color: "#1a1a1a" }] },
  { featureType: "administrative.locality", elementType: "labels.text.fill", stylers: [{ color: "#555555" }] },
  { featureType: "poi", stylers: [{ visibility: "off" }] },
  { featureType: "road", elementType: "geometry", stylers: [{ color: "#1e1e1e" }] },
  { featureType: "road", elementType: "geometry.stroke", stylers: [{ color: "#0a0a0a" }] },
  { featureType: "road", elementType: "labels.text.fill", stylers: [{ color: "#444444" }] },
  { featureType: "road.highway", elementType: "geometry", stylers: [{ color: "#2a2a2a" }] },
  { featureType: "road.highway", elementType: "labels.text.fill", stylers: [{ color: "#555555" }] },
  { featureType: "transit", stylers: [{ visibility: "off" }] },
  { featureType: "water", elementType: "geometry", stylers: [{ color: "#050505" }] },
];

interface Stop {
  pos: [number, number];
  label: string;
}

interface TrailMapProps {
  stops: Stop[];
  color: string;
}

export default function TrailMap({ stops, color }: TrailMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current) return;
    let cancelled = false;

    (async () => {
      const { Map, Polyline } = await importLibrary("maps") as google.maps.MapsLibrary;
      if (cancelled || !mapRef.current) return;

      const bounds = new google.maps.LatLngBounds();
      stops.forEach((s) => bounds.extend({ lat: s.pos[0], lng: s.pos[1] }));

      const map = new Map(mapRef.current, {
        center: bounds.getCenter(),
        zoom: 13,
        disableDefaultUI: true,
        styles: DARK_STYLE,
        backgroundColor: "#0a0a0a",
      });

      map.fitBounds(bounds, 32);

      const path = [
        ...stops.map((s) => ({ lat: s.pos[0], lng: s.pos[1] })),
        { lat: stops[0].pos[0], lng: stops[0].pos[1] },
      ];

      new Polyline({
        path,
        strokeColor: color,
        strokeOpacity: 0.18,
        strokeWeight: 12,
        map,
      });

      new Polyline({
        path,
        strokeColor: color,
        strokeOpacity: 0.85,
        strokeWeight: 3,
        map,
      });

      stops.forEach((stop) => {
        const marker = new google.maps.Marker({
          position: { lat: stop.pos[0], lng: stop.pos[1] },
          map,
          title: stop.label,
          icon: {
            path: google.maps.SymbolPath.CIRCLE,
            scale: 6,
            fillColor: color,
            fillOpacity: 1,
            strokeColor: "#0a0a0a",
            strokeWeight: 2,
          },
        });

        const infoWindow = new google.maps.InfoWindow({
          content: `<div class="gmap-tip">${stop.label}</div>`,
          disableAutoPan: true,
        });

        marker.addListener("mouseover", () => infoWindow.open({ map, anchor: marker }));
        marker.addListener("mouseout", () => infoWindow.close());
      });
    })();

    return () => { cancelled = true; };
  }, [stops, color]);

  return (
    <div ref={mapRef} style={{ height: "220px", width: "100%", background: "#0a0a0a" }} />
  );
}
