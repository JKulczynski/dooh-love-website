"use client";

import { useEffect, useRef } from "react";
import { importLibrary, setOptions } from "@googlemaps/js-api-loader";

setOptions({ key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!, v: "weekly" });

const DARK_STYLE: google.maps.MapTypeStyle[] = [
  { elementType: "geometry", stylers: [{ color: "#0d0d0d" }] },
  { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#444444" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#0a0a0a" }] },
  { featureType: "administrative", elementType: "geometry", stylers: [{ color: "#1a1a1a" }] },
  { featureType: "administrative.locality", elementType: "labels.text.fill", stylers: [{ color: "#666666" }] },
  { featureType: "poi", stylers: [{ visibility: "off" }] },
  { featureType: "road", elementType: "geometry", stylers: [{ color: "#1e1e1e" }] },
  { featureType: "road", elementType: "geometry.stroke", stylers: [{ color: "#0a0a0a" }] },
  { featureType: "road", elementType: "labels.text.fill", stylers: [{ color: "#444444" }] },
  { featureType: "road.highway", elementType: "geometry", stylers: [{ color: "#2a2a2a" }] },
  { featureType: "water", elementType: "geometry", stylers: [{ color: "#050505" }] },
  { featureType: "transit", stylers: [{ visibility: "off" }] },
];

export interface RouteData {
  stops: { pos: [number, number]; label: string }[];
  color: string;
  name: string;
}

interface Props {
  routes: RouteData[];
  height?: number;
}

export default function MultiRouteMap({ routes, height = 340 }: Props) {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current || routes.length === 0) return;
    let cancelled = false;

    (async () => {
      const { Map, Polyline } = await importLibrary("maps") as google.maps.MapsLibrary;
      if (cancelled || !mapRef.current) return;

      const bounds = new google.maps.LatLngBounds();
      routes.forEach((r) => r.stops.forEach((s) => bounds.extend({ lat: s.pos[0], lng: s.pos[1] })));

      const map = new Map(mapRef.current, {
        center: bounds.getCenter(),
        zoom: 13,
        disableDefaultUI: true,
        styles: DARK_STYLE,
        backgroundColor: "#0a0a0a",
      });

      map.fitBounds(bounds, 48);

      routes.forEach((route) => {
        const path = [
          ...route.stops.map((s) => ({ lat: s.pos[0], lng: s.pos[1] })),
          { lat: route.stops[0].pos[0], lng: route.stops[0].pos[1] },
        ];

        new Polyline({ path, strokeColor: route.color, strokeOpacity: 0.15, strokeWeight: 14, map });
        new Polyline({ path, strokeColor: route.color, strokeOpacity: 0.9,  strokeWeight: 3,  map });

        route.stops.forEach((stop) => {
          new google.maps.Marker({
            position: { lat: stop.pos[0], lng: stop.pos[1] },
            map,
            title: stop.label,
            icon: {
              path: google.maps.SymbolPath.CIRCLE,
              scale: 5,
              fillColor: route.color,
              fillOpacity: 1,
              strokeColor: "#0a0a0a",
              strokeWeight: 2,
            },
          });
        });
      });
    })();

    return () => { cancelled = true; };
  }, [routes]);

  return (
    <div ref={mapRef} style={{ height: `${height}px`, width: "100%", background: "#0a0a0a" }} />
  );
}
