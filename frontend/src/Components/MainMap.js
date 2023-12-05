import React, { useRef, useState } from 'react';
import { Box, Button, Flex, HStack, Input, SkeletonText } from "@chakra-ui/react";
import { GoogleMap, Marker, Autocomplete, DirectionsRenderer,useJsApiLoader } from "@react-google-maps/api";

const libraries = ["places"];
const center = { lat: 22.7250667, lng: 75.8732225 };

function MainMap() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries
  });
  async function addLocation() {
    if (!navigator.geolocation) {
      console.log("Geolocation is not supported by your browser");
      return;
    }
  
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position.coords.latitude, position.coords.longitude);
    }, () => {
      console.log("Unable to retrieve your location");
    });
  }
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");
  const [waypoints, setWaypoints] = useState([]);
  
  const originRef = useRef();
  const destinationRef = useRef();

  if (!isLoaded) return <SkeletonText />;

  async function calculateRoute() {
    if (originRef.current.value === "" || destinationRef.current.value === "") return;
    
    const directionsService = new window.google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: originRef.current.value,
      destination: destinationRef.current.value,
      waypoints: waypoints.map(waypoint => ({location: waypoint})),
      optimizeWaypoints: false,
      travelMode: window.google.maps.TravelMode.DRIVING,
    });
    
    setDirectionsResponse(results);
    setDistance(results.routes[0].legs[0].distance.text);
    setDuration(results.routes[0].legs[0].duration.text);
    setWaypoints([]);
  }

  function clearRoute() {
    setDirectionsResponse(null);
    setDistance("");
    setDuration("");
    originRef.current.value = "";
    destinationRef.current.value = "";
    setWaypoints([]);
  }

  return (
    <Flex position="relative" flexDirection="column" alignItems="center" h="100vh" w="100vw">
      <Box position="absolute" left={0} top={0} h="100%" w="100%">
        <GoogleMap
          center={center}
          zoom={15}
          mapContainerStyle={{ width: "100%", height: "100%" }}
          options={{ zoomControl: false, streetViewControl: false, mapTypeControl: false, fullscreenControl: false }}
        >
          <Marker position={center} />
          {directionsResponse && <DirectionsRenderer directions={directionsResponse} />}
        </GoogleMap>
      </Box>
      <Box p={4} borderRadius="lg" m={4} bgColor="white" shadow="base" minW="container.md" zIndex="1">
        <HStack spacing={2} justifyContent="space-between">
          <Box flexGrow={1}>
            <Autocomplete><Input type="text" placeholder="Origin" ref={originRef} /></Autocomplete>
          </Box>
          <Box flexGrow={1}>
            <Autocomplete><Input type="text" placeholder="Destination" ref={destinationRef} /></Autocomplete>
          </Box>
          {waypoints.map((waypoint, index) => (
            <Box key={index} flexGrow={1}>
              <Autocomplete>
                <Input type="text" defaultValue={waypoint} onChange={(e) => {
                  const newWaypoints = [...waypoints];
                  newWaypoints[index] = e.target.value;
                  setWaypoints(newWaypoints);
                }} />
              </Autocomplete>
            </Box>
          ))}
          <Button onClick={() => setWaypoints([...waypoints, ""])}>Add Waypoint</Button>
        
  <Button colorScheme="pink" onClick={calculateRoute}>Calculate Route</Button>
  <Button onClick={clearRoute}>Clear Route</Button>
        </HStack>
        <Button onClick={addLocation}>Add Location</Button>

      </Box>
    </Flex>
  );
}

export default MainMap;
