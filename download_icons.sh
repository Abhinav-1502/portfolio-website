#!/bin/bash
mkdir -p src/assets/icons

# List of icons to download (slugs from simpleicons.org)
icons=(
  "java"
  "javascript"
  "python"
  "cplusplus"
  "html5"
  "css3"
  "sass"
  "springboot"
  "nodedotjs"
  "express"
  "fastapi"
  "react"
  "angular"
  "typescript"
  "selenium"
  "awslambda"
  "amazons3"
  "docker"
  "awsfargate"
  "mysql"
  "mongodb"
  "postgresql"
  "git"
  "githubactions"
  "postman"
)

for icon in "${icons[@]}"; do
  echo "Downloading $icon..."
  # Fetching white icons, we'll style them with CSS opacity
  curl -s -L -o "src/assets/icons/$icon.svg" "https://cdn.simpleicons.org/$icon/ffffff"
  
  # Check if empty (failed download usually returns 404 text or empty)
  if [ ! -s "src/assets/icons/$icon.svg" ] || grep -q "Not Found" "src/assets/icons/$icon.svg"; then
      echo "Failed to download $icon, removing..."
      rm "src/assets/icons/$icon.svg"
  fi
done

echo "Download complete."
