#include <Wire.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>
#include <ESP8266HTTPClient.h>
#include <ESP8266WiFi.h>

// VERSION #3 of Arduino Sensor code

#include <ESP8266WiFiMulti.h>
#include <WiFiClientSecure.h>
#include <ArduinoJson.h>

#include <DHT.h>
#include <DHT_U.h>

#define DHTPIN 14
#define DHTTYPE    DHT22 

DHT dht(DHTPIN, DHTTYPE);
float hum;
float temp;

ESP8266WiFiMulti WiFiMulti;
const char* host = "https://iot-sensors-178ba.web.app/api/v1/sensor/API_KEY";
//const char* fingerpr = "5C 99 13 CD 89 23 74 99 44 40 7D C6 92 D1 71 0E 32 60 C6 0A";

const char* ssid = "Univision_C819";
const char* password = "*********";

int count = 0;

void setup() {
  Serial.begin(115200);
  dht.begin();

  WiFi.mode(WIFI_STA);
  
  WiFiMulti.addAP(ssid, password);

  while(WiFiMulti.run() != WL_CONNECTED) {
    delay(3000);
    Serial.print("Trying to connect: ");
    Serial.println("IP status:");
    Serial.println(WiFi.status());
  }

}

void loop() {

  if(WiFiMulti.run() == WL_CONNECTED) {
    count++;
    Serial.println("IP Address:");
    Serial.println(WiFi.localIP());

    hum = dht.readHumidity();
    temp= dht.readTemperature();

    HTTPClient http;
    WiFiClientSecure client;
    client.setInsecure();
    client.connect(host, 443);
    

      Serial.println("Now trying to connect"); 
      http.begin(client, host);
      http.addHeader("Content-Type", "application/json");

      StaticJsonDocument<40> document;
      document["temp"] = temp;
      document["hum"] = hum;
      
      char buffer[40];
      serializeJson(document, buffer);
      Serial.print("Data: ");
      Serial.print(buffer);
      int status = http.PATCH(buffer);

      if(status == HTTP_CODE_OK) {
        String payload = http.getString();
        Serial.print("\nResponse: ");
        Serial.println(payload);
      } else {
        Serial.print("\nStatus: ");
        Serial.print(status);
      }
  }
}
