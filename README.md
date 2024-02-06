# Thumbnail
extract first frame from video


## Requirement

Before you begin, make sure you have the following installed:

- Node.js: [Download and install Node.js](https://nodejs.org/)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/OussamaBerredjem/Thumbnail


2. install express js:

   ```bash
    npm install express
   
3. install multer library :

   ```bash
   npm install multer

4. install ffmpeg library :

   ```bash
    npm install ffmpeg-static fluent-ffmpeg

5. run express.js server :

   ```bash
   node thumbnail.js

## Example

```bash
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>File First Frame Example</title>
</head>
<body>

<form action="http://localhost:3000/file" method="post" enctype="multipart/form-data">
  <label for="fileInput">Choose File:</label>
  <input type="file" id="fileInput" name="fileInput" accept="image/*">
  <button type="submit">Upload</button>
</form>

</body>
</html>

   
