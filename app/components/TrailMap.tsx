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
  address: string;
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
      const { Map } = await importLibrary("maps") as google.maps.MapsLibrary;
      if (cancelled || !mapRef.current) return;

      const map = new Map(mapRef.current, {
        center: { lat: 52.23, lng: 21.01 },
        zoom: 12,
        disableDefaultUI: true,
        styles: DARK_STYLE,
        backgroundColor: "#0a0a0a",
      });

      const geocoder = new google.maps.Geocoder();
      const bounds = new google.maps.LatLngBounds();

      stops.forEach((stop) => {
        geocoder.geocode({ address: stop.address + ", Warszawa, Polska" }, (results, status) => {
          if (cancelled || status !== "OK" || !results?.[0]) return;

          const pos = results[0].geometry.location;
          bounds.extend(pos);

          const marker = new google.maps.Marker({
            position: pos,
            map,
            title: stop.label,
            icon: {
              path: google.maps.SymbolPath.CIRCLE,
              scale: 8,
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

          map.fitBounds(bounds, 24);
        });
      });
    })();

    return () => { cancelled = true; };
  }, [stops, color]);

  return (
    <div ref={mapRef} style={{ height: "220px", width: "100%", background: "#0a0a0a" }} />
  );
}
