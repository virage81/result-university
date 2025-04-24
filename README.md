# Weather Sounds

## Overview

A simple web app to play nature sounds (summer, rain, winter) with a volume slider and background images.

## Task

- Build an app using Webpack to play nature sounds.
- Features:
  - Volume slider to control audio loudness.
  - Clickable items to play sounds (only one sound at a time).
  - Pause/resume sound on repeated clicks.
  - Change page background image based on the playing sound.
- Requirements:
  - Configure Webpack for HTML, CSS, and Sass.
  - Handle static assets (fonts, favicon, images, audio).
  - Split Webpack into development and production configs with `webpack-dev-server`.
  - Use ESLint in development.
  - Write the app in pure JavaScript.

## Implementation

### Webpack Setup

- **Common Config (`webpack.config.common.js`)**:

  - Entry: `src/index.js`.
  - Plugins:
    - `HtmlWebpackPlugin`: Uses `public/index.html` as a template.
    - `MiniCssExtractPlugin`: Extracts CSS into separate files.
    - `ESLintPlugin`: Lints JavaScript in development.
  - Rules:
    - CSS: `css-loader` with `MiniCssExtractPlugin.loader`.
    - Sass: `style-loader`, `css-loader`, `postcss-loader`, `sass-loader`.
    - Fonts: Outputs to `dist/fonts/`.

- **Development Config (`webpack.config.development.js`)**:

  - Mode: `development`.
  - Output: `dev/`.
  - Dev server: Runs on port 3000 with hot reloading.
  - Plugin: `CopyPlugin` copies `favicon.ico` and `src/assets/` to `dev/`.

- **Production Config (`webpack.config.production.js`)**:
  - Mode: `production`.
  - Output: `prod/`.
  - Plugins: `CopyPlugin` copies `favicon.ico` and `src/assets/` to `prod/`.
  - Optimization: Minifies JS (`TerserPlugin`) and CSS (`CssMinimizerPlugin`), splits vendor chunks.

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
