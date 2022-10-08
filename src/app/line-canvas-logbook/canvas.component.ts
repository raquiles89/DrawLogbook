import {
  Component, Input, ElementRef, AfterViewInit, ViewChild
} from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { switchMap, takeUntil, pairwise } from 'rxjs/operators'

@Component({
  selector: 'app-canvas',
  template: '<canvas #canvas></canvas>',
  styles: ['canvas { border: 1px solid #000; }']
})
export class CanvasComponent implements AfterViewInit {

  myCanvas!: HTMLCanvasElement;
  context!: CanvasRenderingContext2D;

  @Input() public width = 1097;
  @Input() public height = 195;




  public ngAfterViewInit() {
    const myCanvas = document.getElementById('canvas') as HTMLCanvasElement;
    const ctx = myCanvas.getContext('2d');
    if (!myCanvas) { return; }
    if (!ctx) { return; }

    this.myCanvas = myCanvas;
    this.context = ctx;

    this.myCanvas.width = this.width;
    this.myCanvas.height = this.height;

    this.context.lineWidth = 3;
    this.context.lineCap = 'round';
    this.context.strokeStyle = '#000';

    this.captureEvents();

    let that = this;
    let img = new Image();
    // img.crossOrigin = "anonymous";
    // img.src = 'https://mdn.mozillademos.org/files/5397/rhino.jpg';
    //img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Fundus_photograph_of_normal_left_eye.jpg/250px-Fundus_photograph_of_normal_left_eye.jpg";
    //img.src = "https://www.researchgate.net/profile/Mohd_Hijazi/publication/221338546/figure/fig3/AS:667852856127495@1536239937315/llustration-of-fundus-images-in-grayscale-a-Normal-and-b-AMD.jpg";
    img.src = '../assets/img/logbookapollo.png';

    img.onload = function () {
      that.context.drawImage(img, 0, 0);
      const imageData = that.context.getImageData(0, 0, img.width, img.height);
      const isGray = that.isGrayScaleImage(imageData);
      console.log(imageData);
      console.log(isGray);
    };

  }

  private captureEvents() {
    // this will capture all mousedown events from the canvas element
    /*const mouseDown = fromEvent<MouseEvent>(this.myCanvas, 'mousedown').pipe(
      switchMap((e) => {
          return fromEvent(this.myCanvas, 'mousemove').pipe(takeUntil(fromEvent(this.myCanvas, 'mouseup')),
          pairwise())
      }));
      */

    const mouseDown = fromEvent<MouseEvent>(this.myCanvas, 'mousedown');
    mouseDown.pipe(
        switchMap((e) => {

          // after a mouse down, we'll record all mouse moves
          return fromEvent(this.myCanvas, 'mousemove')
            .pipe(
              // we'll stop (and unsubscribe) once the user releases the mouse
              // this will trigger a 'mouseup' event    
              takeUntil(fromEvent(this.myCanvas, 'mouseup')),
              // we'll also stop (and unsubscribe) once the mouse leaves the canvas (mouseleave event)
              takeUntil(fromEvent(this.myCanvas, 'mouseleave')),
              // pairwise lets us get the previous value to draw a line from
              // the previous point to the current point    
              pairwise()
            )
        })
      );
       // Subscribe to start listening for mouse-move events
    const subscription = mouseDown.subscribe(evt => {
      console.log('down mouse')
      const rect = this.myCanvas.getBoundingClientRect();
 
      // previous and current position with the offset
      const prevPos = {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
      };
 
      const currentPos = {
        x: evt.clientX + 100 - rect.left,
        y: evt.clientY - rect.top
      };
 
      // this method we'll implement soon to do the actual drawing
      this.drawOnCanvas(prevPos, currentPos);
    
      // When the mouse is over the upper-left of the screen,
      // unsubscribe to stop listening for mouse movements
     // if (evt.clientX < 40 && evt.clientY < 40) {
        //subscription.unsubscribe();
      //}
    });

    /*.subscribe((res: [MouseEvent, MouseEvent]) => {
      const rect = canvasEl.getBoundingClientRect();
 
      // previous and current position with the offset
      const prevPos = {
        x: res[0].clientX - rect.left,
        y: res[0].clientY - rect.top
      };
 
      const currentPos = {
        x: res[1].clientX - rect.left,
        y: res[1].clientY - rect.top
      };
 
      // this method we'll implement soon to do the actual drawing
      this.drawOnCanvas(prevPos, currentPos);
    });*/
  }




  private drawOnCanvas(prevPos: { x: number, y: number }, currentPos: { x: number, y: number }) {
    if (!this.context) { return; }

    this.context.beginPath();

    if (prevPos) {
      this.context.moveTo(prevPos.x, prevPos.y); // from
      this.context.lineTo(currentPos.x, currentPos.y);
      this.context.stroke();
    }
  }

  // Visit rgb pixel data in various blocks; if any rgb values are not equal, the assumption is a color image.
  private isGrayScaleImage(imageData: any): boolean {
    const data = imageData.data;
    const max = 1000;

    const isGray = this.isPixelDataGrayScale(data, 0, data.length);
    if (isGray) {
      return true;
    } else {
      return false;
    }
  }

  private isPixelDataGrayScale(data: number[], min: number, max: number): boolean {
    for (let j = min; j < min + max; j += 4) {
      const r = data[j];
      const g = data[j + 1];
      const b = data[j + 2];
      if (r !== g && r !== b) {
        console.log(`Found rgb color pixels ${r}/${g}/${b} at data[${j}]`);
        return false;
      }
    }
    return true;
  }


}
