/************ 
 * Nc2 *
 ************/


// store info about the experiment session:
let expName = 'nc2';  // from the Builder filename that created this script
let expInfo = {
    '班別學號 (e.g., 1a01)': '',
};
let PILOTING = util.getUrlParameters().has('__pilotToken');

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color('white'),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(instrRoutineBegin());
flowScheduler.add(instrRoutineEachFrame());
flowScheduler.add(instrRoutineEnd());
flowScheduler.add(blank1000RoutineBegin());
flowScheduler.add(blank1000RoutineEachFrame());
flowScheduler.add(blank1000RoutineEnd());
const preloopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(preloopLoopBegin(preloopLoopScheduler));
flowScheduler.add(preloopLoopScheduler);
flowScheduler.add(preloopLoopEnd);



flowScheduler.add(testinstrRoutineBegin());
flowScheduler.add(testinstrRoutineEachFrame());
flowScheduler.add(testinstrRoutineEnd());
flowScheduler.add(blank1000RoutineBegin());
flowScheduler.add(blank1000RoutineEachFrame());
flowScheduler.add(blank1000RoutineEnd());
const testloopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(testloopLoopBegin(testloopLoopScheduler));
flowScheduler.add(testloopLoopScheduler);
flowScheduler.add(testloopLoopEnd);



flowScheduler.add(thankRoutineBegin());
flowScheduler.add(thankRoutineEachFrame());
flowScheduler.add(thankRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'resources/ncprac.csv', 'path': 'resources/ncprac.csv'},
    {'name': 'resources/nc3test.csv', 'path': 'resources/nc3test.csv'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2026.1.3';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["\u73ed\u5225\u5b78\u865f (e.g., 1a01)"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var instrClock;
var instruct;
var ok;
var blank1000Clock;
var b1000;
var preClock;
var preleft;
var preright;
var precenter;
var textleft;
var textright;
var blank500Clock;
var b500;
var testinstrClock;
var instruct_2;
var ok_2;
var test_2Clock;
var preleft_3;
var preright_3;
var precenter_3;
var textleft_2;
var textright_2;
var thankClock;
var instruct_3;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "instr"
  instrClock = new util.Clock();
  instruct = new visual.TextBox({
    win: psychoJS.window,
    name: 'instruct',
    text: '接下來，你會在螢幕兩邊看到兩個三位數。\n請用最快的速度，將手指點在數值較大的數字上。\n\n現在有三題練習題讓你熟悉測試內容，\n準備好後按 “OK” 按鈕即可開始。',
    placeholder: 'Type here...',
    font: 'Noto Sans TC',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [1.2, 1.2],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: 0.0 
  });
  
  ok = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'ok',
    text: 'OK',
    font: 'Noto Sans TC',
    pos: [0.45, (- 0.35)],
    size: [0.2, 0.08],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'aliceblue',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -1,
    letterHeight: 0.05,
    bold: false,
    italic: false,
  });
  ok.clock = new util.Clock();
  
  // Initialize components for Routine "blank1000"
  blank1000Clock = new util.Clock();
  b1000 = new visual.TextBox({
    win: psychoJS.window,
    name: 'b1000',
    text: '.',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [0.5, 0.5],  units: undefined, 
    ori: 0.0,
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: 0.0 
  });
  
  // Initialize components for Routine "pre"
  preClock = new util.Clock();
  preleft = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'preleft',
    text: None,
    font: 'Noto Sans TC',
    pos: [(- 0.3), (- 0.15)],
    size: [0.4, 0.4],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'white',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: 0,
    letterHeight: 0.1,
    bold: false,
    italic: false,
  });
  preleft.clock = new util.Clock();
  
  preright = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'preright',
    text: None,
    font: 'Noto Sans TC',
    pos: [0.3, (- 0.15)],
    size: [0.4, 0.4],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'white',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -1,
    letterHeight: 0.1,
    bold: false,
    italic: false,
  });
  preright.clock = new util.Clock();
  
  precenter = new visual.TextBox({
    win: psychoJS.window,
    name: 'precenter',
    text: '',
    placeholder: 'Type here...',
    font: 'Noto Sans TC',
    pos: [0, 0.25], 
    draggable: false,
    letterHeight: 0.1,
    lineSpacing: undefined,
    size: [0.4, 0.4],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -2.0 
  });
  
  textleft = new visual.TextBox({
    win: psychoJS.window,
    name: 'textleft',
    text: '',
    placeholder: 'Type here...',
    font: 'Noto Sans TC',
    pos: [(- 0.3), (- 0.15)], 
    draggable: false,
    letterHeight: 0.1,
    lineSpacing: 1.0,
    size: [0.4, 0.4],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: 'white', borderColor: 'black',
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -3.0 
  });
  
  textright = new visual.TextBox({
    win: psychoJS.window,
    name: 'textright',
    text: '',
    placeholder: 'Type here...',
    font: 'Noto Sans TC',
    pos: [0.3, (- 0.15)], 
    draggable: false,
    letterHeight: 0.1,
    lineSpacing: 1.0,
    size: [0.4, 0.4],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: 'white', borderColor: 'black',
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -4.0 
  });
  
  // Initialize components for Routine "blank500"
  blank500Clock = new util.Clock();
  b500 = new visual.TextBox({
    win: psychoJS.window,
    name: 'b500',
    text: '.',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [0.5, 0.5],  units: undefined, 
    ori: 0.0,
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: 0.0 
  });
  
  // Initialize components for Routine "testinstr"
  testinstrClock = new util.Clock();
  instruct_2 = new visual.TextBox({
    win: psychoJS.window,
    name: 'instruct_2',
    text: '接下來，你會在螢幕兩邊看到兩個三位數。\n請用最快的速度，將手指點在數值較大的數字上。\n\n測試共有二十題，\n準備好後按 “OK” 按鈕即可開始。',
    placeholder: 'Type here...',
    font: 'Noto Sans TC',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [1.2, 1.2],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: 0.0 
  });
  
  ok_2 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'ok_2',
    text: 'OK',
    font: 'Noto Sans TC',
    pos: [0.45, (- 0.35)],
    size: [0.2, 0.08],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'aliceblue',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -1,
    letterHeight: 0.05,
    bold: false,
    italic: false,
  });
  ok_2.clock = new util.Clock();
  
  // Initialize components for Routine "test_2"
  test_2Clock = new util.Clock();
  preleft_3 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'preleft_3',
    text: None,
    font: 'Noto Sans TC',
    pos: [(- 0.3), (- 0.15)],
    size: [0.4, 0.4],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'white',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: 0,
    letterHeight: 0.1,
    bold: false,
    italic: false,
  });
  preleft_3.clock = new util.Clock();
  
  preright_3 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'preright_3',
    text: None,
    font: 'Noto Sans TC',
    pos: [0.3, (- 0.15)],
    size: [0.4, 0.4],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'white',
    fillColor: 'white',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -1,
    letterHeight: 0.1,
    bold: false,
    italic: false,
  });
  preright_3.clock = new util.Clock();
  
  precenter_3 = new visual.TextBox({
    win: psychoJS.window,
    name: 'precenter_3',
    text: '',
    placeholder: 'Type here...',
    font: 'Noto Sans TC',
    pos: [0, 0.25], 
    draggable: false,
    letterHeight: 0.1,
    lineSpacing: undefined,
    size: [0.4, 0.4],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -2.0 
  });
  
  textleft_2 = new visual.TextBox({
    win: psychoJS.window,
    name: 'textleft_2',
    text: '',
    placeholder: 'Type here...',
    font: 'Noto Sans TC',
    pos: [(- 0.3), (- 0.15)], 
    draggable: false,
    letterHeight: 0.1,
    lineSpacing: 1.0,
    size: [0.4, 0.4],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: 'white', borderColor: 'black',
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -3.0 
  });
  
  textright_2 = new visual.TextBox({
    win: psychoJS.window,
    name: 'textright_2',
    text: '',
    placeholder: 'Type here...',
    font: 'Noto Sans TC',
    pos: [0.3, (- 0.15)], 
    draggable: false,
    letterHeight: 0.1,
    lineSpacing: 1.0,
    size: [0.4, 0.4],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: 'white', borderColor: 'black',
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -4.0 
  });
  
  // Initialize components for Routine "thank"
  thankClock = new util.Clock();
  instruct_3 = new visual.TextBox({
    win: psychoJS.window,
    name: 'instruct_3',
    text: '恭喜你！你已完成數字比較（二）之測試。\n請不要離開頁面，等待下一步指示。',
    placeholder: 'Type here...',
    font: 'Noto Sans TC',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [1.2, 1.2],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var routineForceEnded;
var instrMaxDurationReached;
var instrMaxDuration;
var instrComponents;
function instrRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instr' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    instrClock.reset();
    routineTimer.reset();
    instrMaxDurationReached = false;
    // update component parameters for each repeat
    // reset ok to account for continued clicks & clear times on/off
    ok.reset()
    psychoJS.experiment.addData('instr.started', globalClock.getTime());
    instrMaxDuration = null
    // keep track of which components have finished
    instrComponents = [];
    instrComponents.push(instruct);
    instrComponents.push(ok);
    
    instrComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instrRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instr' ---
    // get current time
    t = instrClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instruct* updates
    if (t >= 0.0 && instruct.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruct.tStart = t;  // (not accounting for frame time here)
      instruct.frameNStart = frameN;  // exact frame index
      
      instruct.setAutoDraw(true);
    }
    
    
    // if instruct is active this frame...
    if (instruct.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *ok* updates
    if (t >= 0 && ok.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ok.tStart = t;  // (not accounting for frame time here)
      ok.frameNStart = frameN;  // exact frame index
      
      ok.setAutoDraw(true);
    }
    
    
    // if ok is active this frame...
    if (ok.status === PsychoJS.Status.STARTED) {
    }
    
    if (ok.status === PsychoJS.Status.STARTED) {
      // check whether ok has been pressed
      if (ok.isClicked) {
        if (!ok.wasClicked) {
          // store time of first click
          ok.timesOn.push(ok.clock.getTime());
          // store time clicked until
          ok.timesOff.push(ok.clock.getTime());
        } else {
          // update time clicked until;
          ok.timesOff[ok.timesOff.length - 1] = ok.clock.getTime();
        }
        if (!ok.wasClicked) {
          // end routine when ok is clicked
          continueRoutine = false;
          
        }
        // if ok is still clicked next frame, it is not a new click
        ok.wasClicked = true;
      } else {
        // if ok is clicked next frame, it is a new click
        ok.wasClicked = false;
      }
    } else {
      // keep clock at 0 if ok hasn't started / has finished
      ok.clock.reset();
      // if ok is clicked next frame, it is a new click
      ok.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instrComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instrRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instr' ---
    instrComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('instr.stopped', globalClock.getTime());
    psychoJS.experiment.addData('ok.numClicks', ok.numClicks);
    psychoJS.experiment.addData('ok.timesOn', ok.timesOn);
    psychoJS.experiment.addData('ok.timesOff', ok.timesOff);
    // the Routine "instr" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var blank1000MaxDurationReached;
var blank1000MaxDuration;
var blank1000Components;
function blank1000RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'blank1000' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    blank1000Clock.reset(routineTimer.getTime());
    routineTimer.add(1.000000);
    blank1000MaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('blank1000.started', globalClock.getTime());
    blank1000MaxDuration = null
    // keep track of which components have finished
    blank1000Components = [];
    blank1000Components.push(b1000);
    
    blank1000Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function blank1000RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'blank1000' ---
    // get current time
    t = blank1000Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *b1000* updates
    if (t >= 0.0 && b1000.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      b1000.tStart = t;  // (not accounting for frame time here)
      b1000.frameNStart = frameN;  // exact frame index
      
      b1000.setAutoDraw(true);
    }
    
    
    // if b1000 is active this frame...
    if (b1000.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (b1000.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      b1000.tStop = t;  // not accounting for scr refresh
      b1000.frameNStop = frameN;  // exact frame index
      // update status
      b1000.status = PsychoJS.Status.FINISHED;
      b1000.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    blank1000Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function blank1000RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'blank1000' ---
    blank1000Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('blank1000.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();} else if (blank1000MaxDurationReached) {
        blank1000Clock.add(blank1000MaxDuration);
    } else {
        blank1000Clock.add(1.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var preloop;
function preloopLoopBegin(preloopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    preloop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'resources/ncprac.csv',
      seed: undefined, name: 'preloop'
    });
    psychoJS.experiment.addLoop(preloop); // add the loop to the experiment
    currentLoop = preloop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    preloop.forEach(function() {
      snapshot = preloop.getSnapshot();
    
      preloopLoopScheduler.add(importConditions(snapshot));
      preloopLoopScheduler.add(preRoutineBegin(snapshot));
      preloopLoopScheduler.add(preRoutineEachFrame());
      preloopLoopScheduler.add(preRoutineEnd(snapshot));
      preloopLoopScheduler.add(blank500RoutineBegin(snapshot));
      preloopLoopScheduler.add(blank500RoutineEachFrame());
      preloopLoopScheduler.add(blank500RoutineEnd(snapshot));
      preloopLoopScheduler.add(preloopLoopEndIteration(preloopLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function preloopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(preloop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function preloopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var testloop;
function testloopLoopBegin(testloopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    testloop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'resources/nc3test.csv',
      seed: undefined, name: 'testloop'
    });
    psychoJS.experiment.addLoop(testloop); // add the loop to the experiment
    currentLoop = testloop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    testloop.forEach(function() {
      snapshot = testloop.getSnapshot();
    
      testloopLoopScheduler.add(importConditions(snapshot));
      testloopLoopScheduler.add(test_2RoutineBegin(snapshot));
      testloopLoopScheduler.add(test_2RoutineEachFrame());
      testloopLoopScheduler.add(test_2RoutineEnd(snapshot));
      testloopLoopScheduler.add(blank500RoutineBegin(snapshot));
      testloopLoopScheduler.add(blank500RoutineEachFrame());
      testloopLoopScheduler.add(blank500RoutineEnd(snapshot));
      testloopLoopScheduler.add(testloopLoopEndIteration(testloopLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function testloopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(testloop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function testloopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var preMaxDurationReached;
var preMaxDuration;
var preComponents;
function preRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'pre' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    preClock.reset();
    routineTimer.reset();
    preMaxDurationReached = false;
    // update component parameters for each repeat
    preleft.setText('');
    // reset preleft to account for continued clicks & clear times on/off
    preleft.reset()
    preright.setText('');
    // reset preright to account for continued clicks & clear times on/off
    preright.reset()
    precenter.setText(Ctext);
    textleft.setText(Ltext);
    textright.setText(Rtext);
    psychoJS.experiment.addData('pre.started', globalClock.getTime());
    preMaxDuration = null
    // keep track of which components have finished
    preComponents = [];
    preComponents.push(preleft);
    preComponents.push(preright);
    preComponents.push(precenter);
    preComponents.push(textleft);
    preComponents.push(textright);
    
    preComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function preRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'pre' ---
    // get current time
    t = preClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *preleft* updates
    if (t >= 0 && preleft.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      preleft.tStart = t;  // (not accounting for frame time here)
      preleft.frameNStart = frameN;  // exact frame index
      
      preleft.setAutoDraw(true);
    }
    
    
    // if preleft is active this frame...
    if (preleft.status === PsychoJS.Status.STARTED) {
    }
    
    if (preleft.status === PsychoJS.Status.STARTED) {
      // check whether preleft has been pressed
      if (preleft.isClicked) {
        if (!preleft.wasClicked) {
          // store time of first click
          preleft.timesOn.push(preleft.clock.getTime());
          // store time clicked until
          preleft.timesOff.push(preleft.clock.getTime());
        } else {
          // update time clicked until;
          preleft.timesOff[preleft.timesOff.length - 1] = preleft.clock.getTime();
        }
        if (!preleft.wasClicked) {
          // end routine when preleft is clicked
          continueRoutine = false;
          
        }
        // if preleft is still clicked next frame, it is not a new click
        preleft.wasClicked = true;
      } else {
        // if preleft is clicked next frame, it is a new click
        preleft.wasClicked = false;
      }
    } else {
      // keep clock at 0 if preleft hasn't started / has finished
      preleft.clock.reset();
      // if preleft is clicked next frame, it is a new click
      preleft.wasClicked = false;
    }
    
    // *preright* updates
    if (t >= 0 && preright.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      preright.tStart = t;  // (not accounting for frame time here)
      preright.frameNStart = frameN;  // exact frame index
      
      preright.setAutoDraw(true);
    }
    
    
    // if preright is active this frame...
    if (preright.status === PsychoJS.Status.STARTED) {
    }
    
    if (preright.status === PsychoJS.Status.STARTED) {
      // check whether preright has been pressed
      if (preright.isClicked) {
        if (!preright.wasClicked) {
          // store time of first click
          preright.timesOn.push(preright.clock.getTime());
          // store time clicked until
          preright.timesOff.push(preright.clock.getTime());
        } else {
          // update time clicked until;
          preright.timesOff[preright.timesOff.length - 1] = preright.clock.getTime();
        }
        if (!preright.wasClicked) {
          // end routine when preright is clicked
          continueRoutine = false;
          
        }
        // if preright is still clicked next frame, it is not a new click
        preright.wasClicked = true;
      } else {
        // if preright is clicked next frame, it is a new click
        preright.wasClicked = false;
      }
    } else {
      // keep clock at 0 if preright hasn't started / has finished
      preright.clock.reset();
      // if preright is clicked next frame, it is a new click
      preright.wasClicked = false;
    }
    
    // *precenter* updates
    if (t >= 0.0 && precenter.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      precenter.tStart = t;  // (not accounting for frame time here)
      precenter.frameNStart = frameN;  // exact frame index
      
      precenter.setAutoDraw(true);
    }
    
    
    // if precenter is active this frame...
    if (precenter.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *textleft* updates
    if (t >= 0.0 && textleft.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textleft.tStart = t;  // (not accounting for frame time here)
      textleft.frameNStart = frameN;  // exact frame index
      
      textleft.setAutoDraw(true);
    }
    
    
    // if textleft is active this frame...
    if (textleft.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *textright* updates
    if (t >= 0.0 && textright.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textright.tStart = t;  // (not accounting for frame time here)
      textright.frameNStart = frameN;  // exact frame index
      
      textright.setAutoDraw(true);
    }
    
    
    // if textright is active this frame...
    if (textright.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    preComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function preRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'pre' ---
    preComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('pre.stopped', globalClock.getTime());
    psychoJS.experiment.addData('preleft.numClicks', preleft.numClicks);
    psychoJS.experiment.addData('preleft.timesOn', preleft.timesOn);
    psychoJS.experiment.addData('preleft.timesOff', preleft.timesOff);
    psychoJS.experiment.addData('preright.numClicks', preright.numClicks);
    psychoJS.experiment.addData('preright.timesOn', preright.timesOn);
    psychoJS.experiment.addData('preright.timesOff', preright.timesOff);
    // the Routine "pre" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var blank500MaxDurationReached;
var blank500MaxDuration;
var blank500Components;
function blank500RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'blank500' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    blank500Clock.reset(routineTimer.getTime());
    routineTimer.add(0.500000);
    blank500MaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('blank500.started', globalClock.getTime());
    blank500MaxDuration = null
    // keep track of which components have finished
    blank500Components = [];
    blank500Components.push(b500);
    
    blank500Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function blank500RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'blank500' ---
    // get current time
    t = blank500Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *b500* updates
    if (t >= 0.0 && b500.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      b500.tStart = t;  // (not accounting for frame time here)
      b500.frameNStart = frameN;  // exact frame index
      
      b500.setAutoDraw(true);
    }
    
    
    // if b500 is active this frame...
    if (b500.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (b500.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      b500.tStop = t;  // not accounting for scr refresh
      b500.frameNStop = frameN;  // exact frame index
      // update status
      b500.status = PsychoJS.Status.FINISHED;
      b500.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    blank500Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function blank500RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'blank500' ---
    blank500Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('blank500.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();} else if (blank500MaxDurationReached) {
        blank500Clock.add(blank500MaxDuration);
    } else {
        blank500Clock.add(0.500000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var testinstrMaxDurationReached;
var testinstrMaxDuration;
var testinstrComponents;
function testinstrRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'testinstr' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    testinstrClock.reset();
    routineTimer.reset();
    testinstrMaxDurationReached = false;
    // update component parameters for each repeat
    // reset ok_2 to account for continued clicks & clear times on/off
    ok_2.reset()
    psychoJS.experiment.addData('testinstr.started', globalClock.getTime());
    testinstrMaxDuration = null
    // keep track of which components have finished
    testinstrComponents = [];
    testinstrComponents.push(instruct_2);
    testinstrComponents.push(ok_2);
    
    testinstrComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function testinstrRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'testinstr' ---
    // get current time
    t = testinstrClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instruct_2* updates
    if (t >= 0.0 && instruct_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruct_2.tStart = t;  // (not accounting for frame time here)
      instruct_2.frameNStart = frameN;  // exact frame index
      
      instruct_2.setAutoDraw(true);
    }
    
    
    // if instruct_2 is active this frame...
    if (instruct_2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *ok_2* updates
    if (t >= 0 && ok_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ok_2.tStart = t;  // (not accounting for frame time here)
      ok_2.frameNStart = frameN;  // exact frame index
      
      ok_2.setAutoDraw(true);
    }
    
    
    // if ok_2 is active this frame...
    if (ok_2.status === PsychoJS.Status.STARTED) {
    }
    
    if (ok_2.status === PsychoJS.Status.STARTED) {
      // check whether ok_2 has been pressed
      if (ok_2.isClicked) {
        if (!ok_2.wasClicked) {
          // store time of first click
          ok_2.timesOn.push(ok_2.clock.getTime());
          // store time clicked until
          ok_2.timesOff.push(ok_2.clock.getTime());
        } else {
          // update time clicked until;
          ok_2.timesOff[ok_2.timesOff.length - 1] = ok_2.clock.getTime();
        }
        if (!ok_2.wasClicked) {
          // end routine when ok_2 is clicked
          continueRoutine = false;
          
        }
        // if ok_2 is still clicked next frame, it is not a new click
        ok_2.wasClicked = true;
      } else {
        // if ok_2 is clicked next frame, it is a new click
        ok_2.wasClicked = false;
      }
    } else {
      // keep clock at 0 if ok_2 hasn't started / has finished
      ok_2.clock.reset();
      // if ok_2 is clicked next frame, it is a new click
      ok_2.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    testinstrComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function testinstrRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'testinstr' ---
    testinstrComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('testinstr.stopped', globalClock.getTime());
    psychoJS.experiment.addData('ok_2.numClicks', ok_2.numClicks);
    psychoJS.experiment.addData('ok_2.timesOn', ok_2.timesOn);
    psychoJS.experiment.addData('ok_2.timesOff', ok_2.timesOff);
    // the Routine "testinstr" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var test_2MaxDurationReached;
var test_2MaxDuration;
var test_2Components;
function test_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'test_2' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    test_2Clock.reset();
    routineTimer.reset();
    test_2MaxDurationReached = false;
    // update component parameters for each repeat
    preleft_3.setText('');
    // reset preleft_3 to account for continued clicks & clear times on/off
    preleft_3.reset()
    preright_3.setText('');
    // reset preright_3 to account for continued clicks & clear times on/off
    preright_3.reset()
    precenter_3.setText(Ctext);
    textleft_2.setText(Ltext);
    textright_2.setText(Rtext);
    psychoJS.experiment.addData('test_2.started', globalClock.getTime());
    test_2MaxDuration = null
    // keep track of which components have finished
    test_2Components = [];
    test_2Components.push(preleft_3);
    test_2Components.push(preright_3);
    test_2Components.push(precenter_3);
    test_2Components.push(textleft_2);
    test_2Components.push(textright_2);
    
    test_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function test_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'test_2' ---
    // get current time
    t = test_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *preleft_3* updates
    if (t >= 0 && preleft_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      preleft_3.tStart = t;  // (not accounting for frame time here)
      preleft_3.frameNStart = frameN;  // exact frame index
      
      preleft_3.setAutoDraw(true);
    }
    
    
    // if preleft_3 is active this frame...
    if (preleft_3.status === PsychoJS.Status.STARTED) {
    }
    
    if (preleft_3.status === PsychoJS.Status.STARTED) {
      // check whether preleft_3 has been pressed
      if (preleft_3.isClicked) {
        if (!preleft_3.wasClicked) {
          // store time of first click
          preleft_3.timesOn.push(preleft_3.clock.getTime());
          // store time clicked until
          preleft_3.timesOff.push(preleft_3.clock.getTime());
        } else {
          // update time clicked until;
          preleft_3.timesOff[preleft_3.timesOff.length - 1] = preleft_3.clock.getTime();
        }
        if (!preleft_3.wasClicked) {
          // end routine when preleft_3 is clicked
          continueRoutine = false;
          
        }
        // if preleft_3 is still clicked next frame, it is not a new click
        preleft_3.wasClicked = true;
      } else {
        // if preleft_3 is clicked next frame, it is a new click
        preleft_3.wasClicked = false;
      }
    } else {
      // keep clock at 0 if preleft_3 hasn't started / has finished
      preleft_3.clock.reset();
      // if preleft_3 is clicked next frame, it is a new click
      preleft_3.wasClicked = false;
    }
    
    // *preright_3* updates
    if (t >= 0 && preright_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      preright_3.tStart = t;  // (not accounting for frame time here)
      preright_3.frameNStart = frameN;  // exact frame index
      
      preright_3.setAutoDraw(true);
    }
    
    
    // if preright_3 is active this frame...
    if (preright_3.status === PsychoJS.Status.STARTED) {
    }
    
    if (preright_3.status === PsychoJS.Status.STARTED) {
      // check whether preright_3 has been pressed
      if (preright_3.isClicked) {
        if (!preright_3.wasClicked) {
          // store time of first click
          preright_3.timesOn.push(preright_3.clock.getTime());
          // store time clicked until
          preright_3.timesOff.push(preright_3.clock.getTime());
        } else {
          // update time clicked until;
          preright_3.timesOff[preright_3.timesOff.length - 1] = preright_3.clock.getTime();
        }
        if (!preright_3.wasClicked) {
          // end routine when preright_3 is clicked
          continueRoutine = false;
          
        }
        // if preright_3 is still clicked next frame, it is not a new click
        preright_3.wasClicked = true;
      } else {
        // if preright_3 is clicked next frame, it is a new click
        preright_3.wasClicked = false;
      }
    } else {
      // keep clock at 0 if preright_3 hasn't started / has finished
      preright_3.clock.reset();
      // if preright_3 is clicked next frame, it is a new click
      preright_3.wasClicked = false;
    }
    
    // *precenter_3* updates
    if (t >= 0.0 && precenter_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      precenter_3.tStart = t;  // (not accounting for frame time here)
      precenter_3.frameNStart = frameN;  // exact frame index
      
      precenter_3.setAutoDraw(true);
    }
    
    
    // if precenter_3 is active this frame...
    if (precenter_3.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *textleft_2* updates
    if (t >= 0.0 && textleft_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textleft_2.tStart = t;  // (not accounting for frame time here)
      textleft_2.frameNStart = frameN;  // exact frame index
      
      textleft_2.setAutoDraw(true);
    }
    
    
    // if textleft_2 is active this frame...
    if (textleft_2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *textright_2* updates
    if (t >= 0.0 && textright_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textright_2.tStart = t;  // (not accounting for frame time here)
      textright_2.frameNStart = frameN;  // exact frame index
      
      textright_2.setAutoDraw(true);
    }
    
    
    // if textright_2 is active this frame...
    if (textright_2.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    test_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function test_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'test_2' ---
    test_2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('test_2.stopped', globalClock.getTime());
    psychoJS.experiment.addData('preleft_3.numClicks', preleft_3.numClicks);
    psychoJS.experiment.addData('preleft_3.timesOn', preleft_3.timesOn);
    psychoJS.experiment.addData('preleft_3.timesOff', preleft_3.timesOff);
    psychoJS.experiment.addData('preright_3.numClicks', preright_3.numClicks);
    psychoJS.experiment.addData('preright_3.timesOn', preright_3.timesOn);
    psychoJS.experiment.addData('preright_3.timesOff', preright_3.timesOff);
    // the Routine "test_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var thankMaxDurationReached;
var thankMaxDuration;
var thankComponents;
function thankRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'thank' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    thankClock.reset(routineTimer.getTime());
    routineTimer.add(10.000000);
    thankMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('thank.started', globalClock.getTime());
    thankMaxDuration = null
    // keep track of which components have finished
    thankComponents = [];
    thankComponents.push(instruct_3);
    
    thankComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function thankRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'thank' ---
    // get current time
    t = thankClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instruct_3* updates
    if (t >= 0.0 && instruct_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruct_3.tStart = t;  // (not accounting for frame time here)
      instruct_3.frameNStart = frameN;  // exact frame index
      
      instruct_3.setAutoDraw(true);
    }
    
    
    // if instruct_3 is active this frame...
    if (instruct_3.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (instruct_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      instruct_3.tStop = t;  // not accounting for scr refresh
      instruct_3.frameNStop = frameN;  // exact frame index
      // update status
      instruct_3.status = PsychoJS.Status.FINISHED;
      instruct_3.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    thankComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function thankRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'thank' ---
    thankComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('thank.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();} else if (thankMaxDurationReached) {
        thankClock.add(thankMaxDuration);
    } else {
        thankClock.add(10.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
