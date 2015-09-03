#!/bin/bash

# set this dir as current workind dir
cd "$(dirname "$0")"

echo "Installing Dependencies..."
npm install
bower install
bower update

echo "Grunting..."
grunt
