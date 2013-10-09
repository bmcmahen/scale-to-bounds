
# scale-to-bounds

  given an original width, height, and a max width and height, scale to the maximum size while maintaining original ratio

## Installation

  Install with [component(1)](http://component.io):

    $ component install bmcmahen/scale-to-bounds

## Use

### scale(originalWidth, originalHeight, maxWidth, maxHeight);

### Example

```javascript
var scale = require('scale-to-bounds');
var dimensions = scale(100, 200, 800, 600);
// dimensions.width = maxwidth
// dimensions.height = maxheight
```

## License

  MIT
