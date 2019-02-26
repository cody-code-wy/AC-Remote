# ACRemote

## Configuration

You must configure the electric imp agent url in `assets/app-config.json` there is an example file located in `assets/example-app-config.json` replace the value of `electricimpurl` with your agent url

## Arduino

The arduino code expects that you have the following functions available on your air conditioner via IR remote

- Temperature up
- Temperature down
- Fan Speed Up
- Fan Speed Down
- Cool (mode)
- Energy Saver (mode)
- Fan Only (mode)
- Power (toggle)
- Timer (unused in this project)
- Sleep (unused in this project)
- Auto Fan Speed (unused in this project)

You must configure the array `codes` with the NEC codes for those functions.

There is no feedback system to the arduino, it assumes that every code sent is received.

## Electric Imp

The electric imp expects that your air conditioner has a upper and lower bound for temperature (16 and 32 ºC in the default configuration), and exactly 3 fan speeds. Any other configuration will require additional development.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


