const createNativeCanvas = () => {
  return document.createElement('canvas');
};

class Canvas {
  pixelRatio: number;
  native: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  width: number = 0;
  height: number = 0;

  constructor() {
    this.pixelRatio =
      (typeof window !== 'undefined' && window.devicePixelRatio) || 1;

    this.native = createNativeCanvas();
    this.context = this.native.getContext('2d') as CanvasRenderingContext2D;
  }

  getContext() {
    return this.context;
  }
  setWidth(width: number) {
    this.width = this.native.width = width * this.pixelRatio;
    this.native.style.width = width + 'px';
    this.getContext().scale(this.pixelRatio, this.pixelRatio);
  }
  setHeight(height: number) {
    this.height = this.native.height = height * this.pixelRatio;
    this.native.style.height = height + 'px';
    this.getContext().scale(this.pixelRatio, this.pixelRatio);
  }
  getWidth() {
    return this.width;
  }
  getHeight() {
    return this.height;
  }
}

export default Canvas;
