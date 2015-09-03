#!/bin/bash

echo "Installing Dependencies..."
npm install
bower install
bower update

echo "Grunting..."
grunt
