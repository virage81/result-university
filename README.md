# Weather Sounds

## Overview

A simple web app to play nature sounds (summer, rain, winter) with a volume slider and background images.

## Task

- Migrate existing webpack project to typescript.

## Implementation

### Typescript Setup

- **Common Config (`webpack.config.common.js`)**:

  - Entry: `src/index.ts`.
  - Rules:
    - Typescript: `ts-loader`

- Migrate all `js` files to `ts`.
- Fix all type errors.

### App Features

- **Sound Playback**:
  - Clicking a sound item plays its audio (e.g., `summer.mp3`).
  - Clicking again pauses; clicking once more resumes.
  - Only one sound plays at a time.
- **Background**:
  - Updates the page background image (e.g., `summer-bg.jpg`) based on the playing sound.
- **Volume Slider**:
  - Range input adjusts audio volume.
  - Styled with Sass to match a blue/white design.

## Usage

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd result-university
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run in development mode:

   ```bash
   npm run start
   ```

   Opens `http://localhost:3000`.

4. Build for production:

   ```bash
   npm run build
   ```

   Outputs to `prod/`.

5. Build for development:
   ```bash
   npm run build:dev
   ```
   Outputs to `dev/`.
