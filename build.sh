#! /usr/bin/bash

CURRENTDIR=$PWD

PROJECTS=(
    client
    comments
    event-bus
    moderation
    posts
    query
)

for i in "${PROJECTS[@]}"; do
  echo "### Building $i"
  cd "$CURRENTDIR/$i"
  docker build -t wlainer/$i .
  echo "### Done"
done

