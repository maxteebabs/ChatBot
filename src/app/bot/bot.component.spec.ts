import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule  } from '@angular/forms';
import { BotComponent } from './bot.component';
import { BotService }  from '../bot.service'
import { IfObservable } from 'rxjs/observable/IfObservable';

describe('BotComponent', () => {
  let component: BotComponent;
  let fixture: ComponentFixture<BotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotComponent ],
      imports: [ FormsModule ],
      providers: [ BotService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should test the bot service', () => {
      fixture = TestBed.createComponent(BotComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
      //get the service
      const botService = TestBed.get(BotService);
      expect(botService.converse('hello world')).toBeTruthy();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should check if the button text is labelled "Send"', () => {
    const fixture = TestBed.createComponent(BotComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button').textContent).toEqual('Send');
  })
});
