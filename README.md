**NAME**: M.SAMPUJYA\
**Company**: CODTECH IT SOLUTIONS\
**ID**: CT4WD3397\
**DOMAIN**: WEB DEVELOPMENT\
**DURATION**: JULY 1st,2024 to AUGUST 1st,2024\
**PROJECT NAME**: Weather Forecast Web Application

****OVERVIEW OF THE PROJECT:****\
![image](https://github.com/user-attachments/assets/bf049fe1-d274-45cb-9db2-158351fe5034)


**Weather Application Overview**
**Purpose:**
The weather application allows users to search for weather information by city.
It retrieves data from the OpenWeatherMap API and displays current weather conditions, including temperature, humidity, wind speed, and weather type. 
The background image and weather icon update according to the weather conditions.

**Key Features:**\
**Search Functionality:**\
Users can input a city name into a search box.\
Clicking the search button triggers a request to fetch weather data for the specified city.\
**Weather Data Display:**\
City Name: Shows the name of the city.\
Weather Type: Displays the main weather condition (e.g., Clear, Rain).\
Temperature: Shows the current temperature in Celsius.\
Humidity: Displays the percentage of humidity.\
Wind Speed: Shows the wind speed in kilometers per hour.\
**Dynamic UI Updates:**\
Background Image: Changes based on the weather condition (e.g., Rain, Clear, Snow).\
Weather Icon: Updates to represent the current weather condition (e.g., Rain icon, Snow icon).\
**Error Handling:**\
Displays an error message if the city is not found or if the API request fails.\
Clears previous weather data if an error occurs.

**Code Breakdown:**\
**DOM Elements Selection:**\
searchBox: Input field for entering the city name.\
searchBtn: Button to trigger the weather search.\
weather_icon: Image element to display weather condition icons.\
bgimage: Style property of the body to set the background image.\
**API Configuration:**\
apiKey: Your API key for accessing OpenWeatherMap.\
apiUrl: Base URL for the OpenWeatherMap API.\
**Weather Fetching Function (checkWeather):**\
Fetch Weather Data: Sends a request to the OpenWeatherMap API with the city name and API key.\
Update UI: Updates the city name, weather type, temperature, humidity, and wind speed on the webpage.\
Change Background and Icon: Updates the background image and weather icon based on the weather type.\
Error Handling: Catches and displays errors if the API request fails.\
**Event Listener:**\
Search Button Click: Triggers the checkWeather function with the value entered in the search box.\
**Usage Instructions:**\
Enter City Name: Type the name of a city into the search box.\
Click Search Button:Press the search button to fetch and display the weather information.\
View Weather Information:Check the displayed weather details, background image, and weather icon.\
Handle Errors:If the city is not found or an error occurs, an appropriate message is shown.
