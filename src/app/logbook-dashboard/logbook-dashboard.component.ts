import { Component, OnInit, Input, ElementRef, AfterViewInit, ViewChild, HostListener } from '@angular/core';
import { Person } from '../interfaces/person';
import { PERSON_LIST } from '../interfaces/person_list';


//Canvas
import { fromEvent } from 'rxjs';
import { switchMap, takeUntil, pairwise } from 'rxjs/operators'


@Component({
  selector: 'app-logbook-dashboard',
  templateUrl: './logbook-dashboard.component.html',
  styleUrls: ['./logbook-dashboard.component.css']
})

export class LogbookDashboardComponent implements OnInit {

  counter = 0;
  @HostListener('window:keydown.space', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    this.counter++;
    console.log(this.counter);
  }

  @HostListener('document:mousemove', ['$event']) 
  onMouseMove(e: any) {
    this.counter--;
  }

  doClick(event: any): void {

    var x = event.clientX;
    var y = event.clientY;
    var offsetX = event.offsetX;
    var offsetY = event.offsetY;
    var text = "Cordenadas: (" + x +"," + y + ")";
    text = text + "\nOffset From Canvas: (" + offsetX +"," + offsetY + ")";
    
   
    /// These are the 2 new lines, see you target the canvas element then apply it to getContext
    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');
    if (!ctx) { return; }

    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#000';

     //draw a circle
     //ctx?.beginPath();
     //ctx?.arc(x, y, 10, 0, Math.PI*2, true); 
     //ctx?.closePath();
     //ctx?.fill();
  
     
     //ctx.beginPath();
     //ctx.moveTo(offsetX, offsetY); // from
     //ctx.lineTo(offsetX + 200, offsetY);
     //ctx.arc(offsetX, offsetY, 10, 0, Math.PI*2, true); 
     //ctx.stroke();
     //alert(text);
    
   }


  imagePath = '../assets/img/logbookapollo.png';
  nameTest = "Name: Rafael Quiles";
  person: Person = {
    idPerson: 1,
    namePerson: 'Maricel Palacio'
  };

  person_list = PERSON_LIST;

  selectedHero?: Person;
  onSelect(item: Person): void {
    this.person = item;
  }

  //Canvas
  //@ViewChild('canvas') 
  private canvas: HTMLCanvasElement = {} as HTMLCanvasElement;
  public cx: CanvasRenderingContext2D = {} as CanvasRenderingContext2D;


  constructor() {

    let canvasTemp = document.getElementById('canvas') as
                 HTMLCanvasElement;
    this.canvas = canvasTemp;
    //let cxTemp = canvasTemp.getContext('2d');
    this.cx.lineWidth = 5;
    this.cx.lineCap = 'round';
    this.cx.strokeStyle = '#000';

    let img = new Image();
      // img.crossOrigin = "anonymous";
      // img.src = 'https://mdn.mozillademos.org/files/5397/rhino.jpg';
      //img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Fundus_photograph_of_normal_left_eye.jpg/250px-Fundus_photograph_of_normal_left_eye.jpg";
      img.src = "https://www.researchgate.net/profile/Mohd_Hijazi/publication/221338546/figure/fig3/AS:667852856127495@1536239937315/llustration-of-fundus-images-in-grayscale-a-Normal-and-b-AMD.jpg";
  
      /*img.onload = function() {
        this.cx.drawImage(img, 0, 0);
        const imageData = this.cx.getImageData(0, 0, img.width, img.height);
        //const isGray = this.isGrayScaleImage(imageData);
        console.log(imageData);
        //console.log(isGray);
      };*/

      //this.captureEvents(this.canvas);
      //this.catureEventCanvas();
  
  }


  ngOnInit(): void {
  }

  private captureEvents(canvasEl: HTMLCanvasElement) {
    // this will capture all mousedown events from the canvas element
    fromEvent(canvasEl, 'mousedown')
      .pipe(
        switchMap((e) => {
          // after a mouse down, we'll record all mouse moves
          return fromEvent(canvasEl, 'mousemove')
            .pipe(
              // we'll stop (and unsubscribe) once the user releases the mouse
              // this will trigger a 'mouseup' event    
              takeUntil(fromEvent(canvasEl, 'mouseup')),
              // we'll also stop (and unsubscribe) once the mouse leaves the canvas (mouseleave event)
              takeUntil(fromEvent(canvasEl, 'mouseleave')),
              // pairwise lets us get the previous value to draw a line from
              // the previous point to the current point    
              pairwise()
            )
        })
      )
  }

  private drawOnCanvas(prevPos: { x: number, y: number }, currentPos: { x: number, y: number }) {
    if (!this.cx) { return; }

    this.cx.beginPath();

    if (prevPos) {
      this.cx.moveTo(prevPos.x, prevPos.y); // from
      this.cx.lineTo(currentPos.x, currentPos.y);
      this.cx.stroke();
    }
  }

  private catureEventCanvas(){
    //fromEvent(this.canvas.nativeElement, 'mousedown');
  }



}
