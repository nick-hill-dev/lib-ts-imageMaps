namespace ImageMaps {

    export class ImageMapFrame {

        public constructor(public readonly index: number, public readonly image: HTMLCanvasElement) {
        }

        public render(
            context: CanvasRenderingContext2D,
            x: number,
            y: number,
            horizontalAlignment: HorizontalAlignment = HorizontalAlignment.left,
            verticalAlignment: VerticalAlignment = VerticalAlignment.top,
            rotation: number = 0
        ) {
            let transformX = 0;
            if (horizontalAlignment == HorizontalAlignment.center) {
                transformX = Math.floor(this.image.width / 2);
            } else if (horizontalAlignment == HorizontalAlignment.right) {
                transformX = this.image.width;
            }
            let transformY = 0;
            if (verticalAlignment == VerticalAlignment.middle) {
                transformY = Math.floor(this.image.height / 2);
            } else if (verticalAlignment == VerticalAlignment.bottom) {
                transformY = this.image.height;
            }
            if (rotation == 0) {
                context.drawImage(this.image, x - transformX, y - transformY);
            } else {
                context.save();
                context.translate(x, y);
                context.rotate(rotation);
                context.drawImage(this.image, -transformX, -transformY);
                context.restore();
            }
        }

    }

}