exports.handler = async (event) => {
  const city = event.queryStringParameters.city;

  if (!city) {
    return { statusCode: 400, body: JSON.stringify({ message: "City is required" }) };
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${process.env.WEATHER_API_KEY}&units=metric`;

  const response = await fetch(url);
  const data = await response.json();

  return {
    statusCode: response.status,
    body: JSON.stringify(data),
  };
};
