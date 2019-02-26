/*
 * IRremote: IRsendDemo - demonstrates sending IR codes with IRsend
 * An IR LED must be connected to Arduino PWM pin 3.
 * Version 0.1 July, 2009
 * Copyright 2009 Ken Shirriff
 * http://arcfn.com
 */


#include <IRremote.h>

IRsend irsend;

unsigned long codes[11] = {
                                          0x10AF8877, /*  0: Power        */
                                          0x10AF609F, /*  1: Timer        */
                                          0x10AF20DF, /*  2: Fan--        */
                                          0x10AF807F, /*  3: Fan++        */
                                          0x10AFB04F, /*  4: Temp--       */
                                          0x10AF708F, /*  5: Temp++       */
                                          0x10AF906F, /*  6: Cool         */
                                          0x10AF40BF, /*  7: Energy Saver */
                                          0x10AFE01F, /*  8: Fan Only     */
                                          0x10AF00FF, /*  9: Auto Fan     */
                                          0x10AF00FF  /* 10: Sleep        */
};

int incommingByte = 0;

void setup()
{
  Serial.begin(9600);
}

void loop() {
  if (Serial.available() > 0) {
    incommingByte = Serial.read();
    if (incommingByte >= '0') {
      incommingByte -= '0';
    }
    if (incommingByte <= 10) {
      send(incommingByte);
      delay(40);
    }
  }
}

void send(int code){
  irsend.sendNEC(codes[code], 32);
}

