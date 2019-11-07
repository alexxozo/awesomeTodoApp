#!/bin/bash

# sudo chown alex -R /dev/kvm &
emulator -avd Pixel_2_API_28 &
npx react-native run-android &
yarn start