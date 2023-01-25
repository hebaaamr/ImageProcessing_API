# ImageProcessing_API

## Scripts

"start:prod": "npm run build && node build/index.js"
"test": "npm run build && npm run jasmine"

## Endpoint

The server will listen on port 3000

eg.

*right path:
http://localhost:3000/imageprocessing/?imageName=encenadaport.jpg&width=200&height=200

*wrong path:
http://localhost:3000/imageprocessing/?imageName=encenadaport.jpg

