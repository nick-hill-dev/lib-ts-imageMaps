namespace ImageMaps {

    export class ImageMap {

        public readonly tilesWide: number = 0;

        public readonly tilesHigh: number = 0;

        public readonly count: number = 0;

        public constructor(public readonly image: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement, public readonly tileWidth: number, public readonly tileHeight: number) {
            this.tilesWide = Math.ceil(image.width / tileWidth);
            this.tilesHigh = Math.ceil(image.height / tileHeight);
            this.count = this.tilesWide * this.tilesHigh;
        }

        public render(context: CanvasRenderingContext2D, x: number, y: number, imageIndex: number) {
            var imageIndexX = imageIndex % this.tilesWide;
            var imageIndexY = Math.floor(imageIndex / this.tilesWide);
            context.drawImage(this.image, imageIndexX * this.tileWidth, imageIndexY * this.tileHeight, this.tileWidth, this.tileHeight, x, y, this.tileWidth, this.tileHeight);
        }

    }

}