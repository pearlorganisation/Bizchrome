import axios from "axios";
import fetch from "node-fetch";
export const findLocation = async (req, res) => {
  try {
    const { latitude, longitude } = req?.body;
    const apiKey = process.env.GOOGLE_MAPS_API_KEY;
    const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`;
    let payload = {};

    await fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "OK" && data.results.length > 0) {
          const addressComponents = data.results[0].address_components;
          const cityName = addressComponents.find((component) =>
            component.types.includes("sublocality")
          ).long_name;
          const countryName = addressComponents.find((component) =>
            component.types.includes("country")
          ).long_name;

          // console.log(`City: ${cityName}, Country: ${countryName}`);
          payload.cityName = cityName;
          payload.countryName = countryName;
          //  console.log("This is payload", payload);
        } else {
          console.error("Unable to retrieve location information.");
        }
      })
      .catch((error) => {
        console.error(`Error fetching location data: ${error}`);
      });

    res.status(200).json({
      success: true,
      message: "Fetched the location successfully",
      data: payload,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: error || error?.message,
    });
  }
};
