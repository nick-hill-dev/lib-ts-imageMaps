# lib-ts-imageMaps

A TypeScript library for working with and rendering canvas-based image maps.

## Render Single Frame

```javascript
var sprites = new ImageMaps.ImageMap(spritesImage, SPRITE_SIZE, SPRITE_SIZE);
sprites.render(canvasContext, x, y, spriteFrameIndex);
```

## Render Text

```javascript
var font = new ImageMaps.FontImageMap(fontImage, FONT_SIZE, FONT_SIZE);
font.render(canvasContext, x, y, 'Hello World!');
```
