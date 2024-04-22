import React from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "./MapComponent.css";

const customMarkerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png",
  iconSize: [25, 32],
  iconAnchor: [12, 32],
  popupAnchor: [0, -32],
});

export default function MapComponent() {
  return (
    <MapContainer
      center={[49.067144757117205, 33.41812290337026]}
      zoom={20}
      scrollWheelZoom={false}
      id="map"
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[49.067145, 33.41828]} icon={customMarkerIcon}>
        <Popup>Синтез</Popup>
      </Marker>
    </MapContainer>
  );
}
