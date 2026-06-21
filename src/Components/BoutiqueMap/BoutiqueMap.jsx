import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import { useState } from "react";

function BoutiqueMap() {
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const center = {
    lat: 51.5095,
    lng: -0.1357,
  };

  const boutiques = [
    {
      id: 1,
      name: "Savile Row Bespoke",
      rating: 5,
      location: "Savile Row, London",
      lat: 51.5095,
      lng: -0.1357,
    },
    {
      id: 2,
      name: "Heritage Tailors",
      rating: 5,
      location: "New Bond Street, London",
      lat: 51.5084,
      lng: -0.1408,
    },
    {
      id: 3,
      name: "Lorenzo & Sons",
      rating: 5,
      location: "Regent Street, London",
      lat: 51.5144,
      lng: -0.1282,
    },
    {
      id: 4,
      name: "The Bespoke Club",
      rating: 4,
      location: "Jermyn Street, London",
      lat: 51.5069,
      lng: -0.1347,
    },
    {
      id: 5,
      name: "Mayfair Tailoring",
      rating: 4,
      location: "South Molton Street, London",
      lat: 51.5138,
      lng: -0.1486,
    },
    {
      id: 6,
      name: "Threadcraft Studio",
      rating: 5,
      location: "Oxford Street, London",
      lat: 51.5154,
      lng: -0.1361,
    },
  ];

  const mapContainerStyle = {
    width: "100%",
    height: "300px",
    borderRadius: "8px",
  };

  const handleLoadScript = () => {
    setIsLoading(false);
  };

  const handleLoadError = (error) => {
    console.error("Error loading Google Maps:", error);
    setIsLoading(false);
  };

  return (
    <div style={{ position: "relative", width: "100%", height: "300px" }}>
      {isLoading && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#f3f4f6",
            borderRadius: "8px",
            zIndex: 1,
          }}
        >
          <div style={{ textAlign: "center", color: "#6b7280" }}>
            <p style={{ margin: "0 0 8px 0", fontSize: "14px" }}>Loading map...</p>
            <div
              style={{
                width: "30px",
                height: "30px",
                border: "3px solid #e5e7eb",
                borderTop: "3px solid #3b82f6",
                borderRadius: "50%",
                animation: "spin 1s linear infinite",
                margin: "0 auto",
              }}
            />
            <style>{`
              @keyframes spin {
                to { transform: rotate(360deg); }
              }
            `}</style>
          </div>
        </div>
      )}

      <LoadScript
        googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
        onLoad={handleLoadScript}
        onError={handleLoadError}
      >
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={14}
        >
          {boutiques.map((boutique) => (
            <Marker
              key={boutique.id}
              position={{ lat: boutique.lat, lng: boutique.lng }}
              onClick={() => setSelectedMarker(boutique)}
            />
          ))}

          {selectedMarker && (
            <InfoWindow
              position={{ lat: selectedMarker.lat, lng: selectedMarker.lng }}
              onCloseClick={() => setSelectedMarker(null)}
            >
              <div style={{ color: "#000", fontSize: "12px" }}>
                <h3 style={{ margin: "0 0 5px 0" }}>{selectedMarker.name}</h3>
                <p style={{ margin: "0 0 5px 0" }}>⭐ {selectedMarker.rating}</p>
                <p style={{ margin: "0" }}>{selectedMarker.location}</p>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default BoutiqueMap;