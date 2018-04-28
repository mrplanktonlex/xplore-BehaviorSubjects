cd BehaveSubjects/

ng g c aComp  // creates them in src/app
ng g c bComp
ng g c cComp
ng g s aServ // Service having the BehaviorSubject


1. 
    - new BehaviorSubject
    - create another class variable from it using .asObservable() . 
    GOTCHA: Make sure you put the () here in .asObservable() 
            eg. BSAsObservable = this.behaviorSubject.asObservable();

2. 
    - include the service in aComp, bComp, cComp in providers:[] array
    - create instance of AServ using DI in all 3 comps.

3. 
    - dataFromAService: string;
    - ngOnInit() {
         this.aServ.BSAsObservable.subscribe( x => this.dataFromAService = x ); //here () are not required for BSAsObservable()
      }    

4. Dont forget to put {{dataFromAService}} in the htmls of bComp and cComp too.

----

5. 
imp. the .next() method should be called from within the service.
constructor() {
    setTimeout(() => {
      this.behaviorSubject.next('goodbye world');
      }, 3000);

  } // constructor ends

V.VIMP!!!
GOTCHA#5.1: If you want all 3 components to be updated, then .next() should fire from the service AServ.
            the setTimeout method should NOT be in any component. (i.e. the .next() should NOT be in any component. )  
GOTCHA#5.2: but if you do write in any component, say aComp, like so:-
    ngOnInit() {
        this.aServ.BSAsObservable.subscribe( x => this.dataFromAService = x );

        setTimeout(() => {
        this.aServ.behaviorSubject.next('Are you there???');
        }, 6000);
    }
    , then ONLY aComp will be updated ; bComp and cComp will display "goodbye world"
