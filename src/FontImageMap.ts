namespace ImageMaps {

    export class FontImageMap {

        private imageMap: ImageMap;

        public constructor(
            image: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement,
            glyphWidth: number = 0,
            glyphHeight: number = 0
        ) {
            this.imageMap = new ImageMap(image, glyphWidth, glyphHeight);
        }

        public render(context: CanvasRenderingContext2D, x: number, y: number, text: string) {
            for (let i = 0; i < text.length; i++) {
                let code = text.charCodeAt(i);
                this.imageMap.render(context, x, y, code);
                x += this.imageMap.tileWidth;
            }
        }

    }

}