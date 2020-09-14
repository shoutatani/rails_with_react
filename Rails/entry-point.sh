#!/bin/bash

cd /Rails
rm -f tmp/pids/server.pid

cd frontend
yarn install
yarn watch &

cd ../
bundle exec rails server -b 0.0.0.0 -p 8080
