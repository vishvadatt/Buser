import form from "./form";
const initialValues = {
  frontrightshoulder: "",
  frontadamsapple: "",
  frontleftshoulder: "",
  frontchest: "",
  frontrightabnominal: "",
  frontabnominal: "",
  frontleftabnominal: "",
  frontrightthip: "",
  frontleftthip: "",
  frontrightknee: "",
  frontleftknee: "",
  frontrightankle: "",
  frontleftankle: "",

  CrossPatternCONTRAIPSIControl: "",
  CrossPatternCONTRAIPSI: "",
  COGLoadsRLControl: "",
  COGLoadsRL: "",
  RLKnIRERControl: "",
  RLKnIRER: "",
  RLHipELEVControl: "",
  RLHipELEV: "",
  RLHipLATShiftControl: "",
  RLHipLATShift: "",
  RLHipFLEXEXTdecrControl: "",
  RLHipFLEXEXTdecr: "",
  RLHipROTforFLEXEXTControl: "",
  RLHipROTforFLEXEXT: "",
  RLPelvicFLEXEXTdecrControl: "",
  RLPelvicFLEXEXTdecr: "",
  RLPelvicROTIncrDecrControl: "",
  RLPelvicROTIncrDecr: "",
  TorsoCROTControl: "",
  TorsoCROT: "",
  TorsoOffsetRLControl: "",
  TorsoOffsetRL: "",
  TorsoLATFLEXControl: "",
  TorsoLATFLEX: "",
  HATLoadLRControl: "",
  HATLoadLR: "",
  RLFootIRERControl: "",
  RLFootIRER: "",
  RLCductIRERControl: "",
  RLCductIRER: "",
  RLArmSwingControl: "",
  RLArmSwing: "",
  RLShFLEXEXTControl: "",
  RLShFLEXEXT: "",
  RLArmCarryingAngleIncrDecrControl: "",
  RLArmCarryingAngleIncrDecr: "",
  HOHControl: "",
  HOH: "",
  HBBControl: "",
  HBB: "",
  DFControl: "",
  DF: "",
  Gaitnotes: "",

  PosturePage: [
    {
      // ear check
      lefteartop: false,
      leftearbottom: false,
      righteartop: false,
      rightearbottom: false,

      // beard
      beardone: false,
      beardtwo: false,
      beardthree: false,
      beardfour: false,
      bearfive: false,
      bearsix: false,

      // thorat
      thoratone: false,
      thorattwo: false,

      // shoulder left
      sholdertopone: false,
      sholdertoptwo: false,
      shoulderone: false,
      shouldertwo: false,
      shoulderthree: false,
      shoulderfour: false,
      shoulderfive: false,
      shouldersix: false,
      shoulderbottomone: false,
      shoulderbottomtwo: false,

      // shoulder middle
      shouldermiddleone: false,
      shouldermiddletwo: false,
      shouldermiddlethree: false,
      shouldermiddlefour: false,
      shouldermiddlefive: false,
      shouldermiddlesix: false,

      // shoulder right

      shoulderrighttopone: false,
      shoulderrighttoptwo: false,
      shoulderrightone: false,
      shoulderrighttwo: false,
      shoulderrightthree: false,
      shoulderrightfour: false,
      shoulderrightfive: false,
      shoulderrightsix: false,
      shoulderrightbottomone: false,
      shoulderrightbottomtwo: false,

      // left chest

      chestlefttopone: false,
      chestlefttoptwo: false,
      chestleftone: false,
      chestlefttwo: false,
      chestleftthree: false,
      chestleftfour: false,
      chestleftbottomone: false,
      chestleftbottomtwo: false,

      // middle chest

      chestmiddleone: false,
      chestmiddletwo: false,

      // right chest
      chestrighttopone: false,
      chestrighttoptwo: false,
      chestrightone: false,
      chestrighttwo: false,
      chestrightthree: false,
      chestrightfour: false,
      chestrightbottomone: false,
      chestrightbottomtwo: false,

      // middle body
      middlebodyone: false,
      middlebodytwo: false,
      middlebodythree: false,
      middlebodyfour: false,

      // left hand
      lefthandone: false,
      lefthandtwo: false,
      lefthandthree: false,
      lefthandfour: false,

      // right hand
      righthandone: false,
      righthandtwo: false,
      righthandthree: false,
      righthandfour: false,

      // left stomach
      leftstomachtopone: false,
      leftstomachtoptwo: false,
      leftstomachone: false,
      leftstomachtwo: false,
      leftstomachthree: false,
      leftstomachfour: false,
      leftstomachfive: false,
      leftstomachsix: false,
      leftstomachbottomone: false,
      leftstomachbottomtwo: false,

      // top stomach
      topstomachone: false,
      topstomachtwo: false,

      // bottom stomach
      bottomstomachone: false,
      bottomstomachtwo: false,

      // right stomach

      rightstomachtopone: false,
      rightstomachtoptwo: false,
      rightstomachone: false,
      rightstomachtwo: false,
      rightstomachthree: false,
      rightstomachfour: false,
      rightstomachfive: false,
      rightstomachsix: false,
      rightstomachbottomone: false,
      rightstomachbottomtwo: false,

      // left hand plam
      lefthandplamone: false,
      lefthandplamtwo: false,
      lefthandplamthree: false,
      lefthandplamfour: false,

      // right hand plam
      righthandplamone: false,
      righthandplamtwo: false,
      righthandplamthree: false,
      righthandplamfour: false,

      // left abdomen

      leftabdomentopone: false,
      leftabdomentoptwo: false,
      leftabdomenone: false,
      leftabdomentwo: false,
      leftabdomenthree: false,
      leftabdomenfour: false,
      leftabdomenfive: false,
      leftabdomensix: false,
      leftabdomenonebottomone: false,
      leftabdomenonebottomtwo: false,

      // right abdomen
      rightabdomentopone: false,
      rightabdomentoptwo: false,
      rightabdomenone: false,
      rightabdomentwo: false,
      rightabdomenthree: false,
      rightabdomenfour: false,
      rightabdomenfive: false,
      rightabdomensix: false,
      rightabdomenonebottomone: false,
      rightabdomenonebottomtwo: false,

      // left knee
      leftkneetopone: false,
      leftkneetoptwo: false,
      leftkneetopthree: false,
      leftkneetopfour: false,
      leftkneeone: false,
      leftkneetwo: false,
      leftkneethree: false,
      leftkneefour: false,
      leftkneefive: false,
      leftkneesix: false,
      leftkneebottomone: false,
      leftkneebottomtwo: false,
      leftkneebottomthree: false,
      leftkneebottomfour: false,

      // right knee
      rightkneetopone: false,
      rightkneetoptwo: false,
      rightkneetopthree: false,
      rightkneetopfour: false,
      rightkneeone: false,
      rightkneetwo: false,
      rightkneethree: false,
      rightkneefour: false,
      rightkneefive: false,
      rightkneesix: false,
      rightkneebottomone: false,
      rightkneebottomtwo: false,
      rightkneebottomthree: false,
      rightkneebottomfour: false,

      // top foot
      topfootone: false,
      topfoottwo: false,
      topfootthree: false,
      topfootfour: false,

      // left ankle
      leftankleone: false,
      leftankletwo: false,
      leftanklethree: false,
      leftanklefour: false,
      leftanklefive: false,
      leftanklesix: false,

      // right ankle

      rightankleone: false,
      rightankletwo: false,
      rightanklethree: false,
      rightanklefour: false,
      rightanklefive: false,
      rightanklesix: false,

      // Bottom foot
      bottomfootone: false,
      bottomfoottwo: false,
      bottomfootthree: false,
      bottomfootfour: false,

      //  left toe
      lefttoeone: false,
      lefttoetwo: false,

      // middle toe
      middletoeone: false,
      middletoetwo: false,

      // right toe
      righttoeone: false,
      righttoetwo: false,

      frontrightshoulder: false,
      frontadamsapple: false,
      frontleftshoulder: false,
      frontchest: false,
      frontrightabnominal: false,
      frontabnominal: false,
      frontleftabnominal: false,
      frontrightthip: false,
      frontleftthip: false,
      frontrightknee: false,
      frontleftknee: false,
      frontrightankle: false,
      frontleftankle: false,

      // Left Body

      // ear part
      eartopone: false,
      eartoptwo: false,
      eartopthree: false,
      earone: false,
      eartwo: false,
      earthree: false,
      earfour: false,
      earfive: false,
      earsix: false,
      earseven: false,
      eartopeight: false,
      earrightone: false,
      earrighttwo: false,
      earrightthree: false,
      earrightfour: false,
      earrightfive: false,
      earrightsix: false,
      earrightseven: false,

      // left body throat

      throatone: false,
      throattwo: false,

      // left body left shoulder part

      leftshoulderone: false,
      leftshouldertwo: false,
      leftshoulderthree: false,
      leftshoulderfour: false,
      leftshoulderfive: false,
      leftshouldersix: false,
      leftshoulderseven: false,
      leftshouldereight: false,
      leftshouldernine: false,
      leftshoulderten: false,
      leftshouldereleven: false,
      leftshouldertwleve: false,
      leftshoulderithirteen: false,
      leftshoulderfourteen: false,

      //  left body right shoulder part

      rightshoulderone: false,
      rightshouldertwo: false,
      rightshoulderthree: false,
      rightshoulderfour: false,
      rightshoulderfive: false,
      rightshouldersix: false,
      rightshoulderseven: false,
      rightshouldereight: false,
      rightshouldernine: false,
      rightshoulderten: false,
      rightshouldereleven: false,
      rightshouldertwleve: false,
      rightshoulderithirteen: false,
      rightshoulderfourteen: false,

      // {/* left arm */}

      leftarmone: false,
      leftarmtwo: false,

      //  {/* left body right albow */}
      righalbowone: false,
      righalbowtwo: false,
      rightalbowthree: false,
      rightalbowfour: false,
      rightalbowfive: false,
      rightalbowsix: false,
      rightalbowseven: false,

      //  {/* left body left albow */}

      leftalbowone: false,
      leftalbowtwo: false,
      leftalbowthree: false,
      leftalbowfour: false,
      leftalbowfive: false,
      leftalbowsix: false,
      leftalbowseven: false,
      leftalboweight: false,
      leftalbownine: false,

      // {/* Left Body left hend */}

      leftbodyhandone: false,
      leftbodyhandtwo: false,
      leftbodyhandthree: false,
      leftbodyhandfour: false,
      leftbodyhandfive: false,
      leftbodyhandsix: false,
      leftbodyhandseven: false,

      // {/*Left body right hend */}

      righthandone: false,
      righthandtwo: false,
      righthandthree: false,
      righthandfour: false,
      righthandfive: false,
      righthandsix: false,
      righthandseven: false,
      righthandeight: false,
      righthandnine: false,

      //  {/*Left body left hip */}

      lefthipone: false,
      lefthiptwo: false,
      lefthipthree: false,
      lefthipfour: false,
      lefthipfive: false,
      lefthipsix: false,
      lefthipseven: false,

      //  {/*Left body Right hip */}

      righthipone: false,
      righthiptwo: false,
      righthipthree: false,
      righthipfour: false,
      righthipfive: false,
      righthipsix: false,
      righthipseven: false,

      //  {/* Left body left knee     */}

      leftkneeone1: false,
      leftkneetwo2: false,
      leftkneethree3: false,
      leftkneefour4: false,
      leftkneefive5: false,
      leftkneesix6: false,
      leftkneeseven7: false,

      // {/* left body right knee     */}

      rightkneeone1: false,
      rightkneetwo2: false,
      rightkneethree3: false,
      rightkneefour4: false,
      rightkneefive5: false,
      rightkneesix6: false,
      rightkneeseven7: false,

      // {/*Left body left ankle */}

      leftankleone1: false,
      leftankletwo2: false,
      leftanklethree3: false,
      leftanklefour4: false,
      leftanklefive5: false,
      leftanklesix6: false,
      leftankleseven7: false,

      // {/*Left body Right ankle */}

      rightankleone1: false,
      rightankletwo2: false,
      rightanklethree3: false,
      rightanklefour4: false,
      rightanklefive5: false,
      rightanklesix6: false,
      rightankleseven7: false,

      // {/* Left Body finger */}

      leftbodyfingerone: false,
      leftbodyfingertwo: false,

      //  {/* Left Body Sole */}

      leftbodysoleone: false,
      leftbodysoletwo: false,

      //  RIGHT BODY

      //  {/*Right body right ears part */}
      righteartopone: false,
      righteartoptwo: false,
      righteartopthree: false,
      rightbodyearone: false,
      rightbodyeartwo: false,
      rightbodyearthree: false,
      rightbodyearfour: false,
      rightbodyearfive: false,
      rightbodyearsix: false,
      rightbodyearseven: false,
      rightbodyleftearone: false,
      rightbodylefteartwo: false,
      rightbodyleftearthree: false,
      rightbodyleftearfour: false,
      rightbodyleftearfive: false,
      rightbodyleftearsix: false,
      rightbodyleftearseven: false,

      //  {/* Right neck */}

      rightneckone: false,
      rightnecktwo: false,

      // {/* Right sholder  */}

      rightsholderone: false,
      rightsholdertwo: false,
      rightsholderthree: false,
      rightsholderfour: false,
      rightsholderfive: false,
      rightsholdersix: false,
      rightsholderseven: false,
      rightsholdereight: false,
      rightsholdernine: false,
      rightsholderten: false,
      rightsholdereleven: false,
      rightsholdertwelve: false,
      rightsholdertherteen: false,
      rightsholderfourteen: false,

      // {/* Right leftsholder  */}

      rightbodyleftsholderone: false,
      rightbodyleftsholdertwo: false,
      rightbodyleftsholderthree: false,
      rightbodyleftsholderfour: false,
      rightbodyleftsholderfive: false,
      rightbodyleftsholdersix: false,
      rightbodyleftsholderseven: false,
      rightbodyleftsholdereight: false,
      rightbodyleftsholdernine: false,
      rightbodyleftsholderten: false,
      rightbodyleftsholdereleven: false,
      rightbodyleftsholdertwelve: false,
      rightbodyleftsholdertherteen: false,
      rightbodyleftsholderfourteen: false,

      // {/* Right arm */}

      armone: false,
      armtwo: false,

      //  {/* Right albow */}

      rightbodyalbowone: false,
      rightbodyalbowtwo: false,
      rightbodyalbowthree: false,
      rightbodyalbowfour: false,
      rightbodyalbowfive: false,
      rightbodyalbowsix: false,
      rightbodyalbowseven: false,
      rightbodyalboweight: false,
      rightbodyalbownine: false,
      rightbodyalbowten: false,
      rightbodyalboweleven: false,
      rightbodyalbowtweleve: false,
      rightbodyalbowtherteen: false,
      rightbodyalbowfourteen: false,
      rightbodyalbowfifteen: false,
      rightbodyalbowsixteen: false,

      // {/* Right body hand */}
      rightbodyhandone: false,
      rightbodyhandtwo: false,
      rightbodyhandthree: false,
      rightbodyhandfour: false,
      rightbodyhandfive: false,
      rightbodyhandsix: false,
      rightbodyhandseven: false,
      rightbodyhandeight: false,
      rightbodyhandnine: false,
      rightbodyhandten: false,
      rightbodyhandeleven: false,
      rightbodyhandtwelve: false,
      rightbodyhandtherteen: false,
      rightbodyhandfourteen: false,
      rightbodyhandfiftineen: false,
      rightbodyhandsixteen: false,

      // {/* Right body hip */}

      hipone: false,
      hiptwo: false,
      hipthree: false,
      hipfour: false,
      hipfive: false,
      hipsix: false,
      hipseven: false,
      hipeight: false,
      hipnine: false,
      hipten: false,
      hipeleven: false,
      hiptwelve: false,
      hiptherteen: false,
      hipfourteen: false,

      // {/* Right Body knee */}

      kneeone: false,
      kneetwo: false,
      kneethree: false,
      kneefour: false,
      kneefive: false,
      kneesix: false,
      kneeseven: false,
      kneeeight: false,
      kneenine: false,
      kneeten: false,
      kneeeleven: false,
      kneetwelve: false,
      kneetherteen: false,
      kneefourteen: false,

      // {/* Right Body ankle */}

      Rightbodyankleone: false,
      Rightbodyankletwo: false,
      Rightbodyanklethree: false,
      Rightbodyanklefour: false,
      Rightbodyanklefive: false,
      Rightbodyanklesix: false,
      Rightbodyankleseven: false,
      Rightbodyankleeight: false,
      Rightbodyanklenine: false,
      Rightbodyankleten: false,
      Rightbodyankleeleven: false,
      Rightbodyankletwelve: false,
      Rightbodyankletherteen: false,
      Rightbodyanklefourteen: false,

      // {/* right finger */}

      Rightfingerone: false,
      Rightfingertwo: false,

      // {/* Right sole */}

      Rightsoleone: false,
      Rightsoletwo: false,

      // BODY MAP///

      checkboxdiagram: false,
      checkboxdiagram1: false,
      checkboxdiagram2: false,
      checkboxdiagram3: false,
      checkboxdiagram4: false,
      checkboxdiagram5: false,
      checkboxdiagram6: false,
      checkboxdiagram7: false,
      checkboxdiagram8: false,
      checkboxdiagram9: false,
      checkboxdiagram10: false,
      checkboxdiagram11: false,
      checkboxdiagram12: false,
      checkboxdiagram13: false,
      checkboxdiagram14: false,
      checkboxdiagram15: false,
      checkboxdiagram16: false,
      checkboxdiagram17: false,
      checkboxdiagram18: false,
      checkboxdiagram19: false,
      checkboxdiagram20: false,
      checkboxdiagram21: false,
      checkboxdiagram22: false,
      checkboxdiagram23: false,
      checkboxdiagram24: false,
      checkboxdiagram25: false,
      checkboxdiagram26: false,
      checkboxdiagram27: false,
      checkboxdiagram28: false,
      checkboxdiagram29: false,
      checkboxdiagram30: false,
      checkboxdiagram31: false,
      checkboxdiagram32: false,
      checkboxdiagram33: false,
      checkboxdiagram34: false,
      checkboxdiagram35: false,
      checkboxdiagram36: false,
      checkboxdiagram37: false,
      checkboxdiagram38: false,
      checkboxdiagram39: false,
      checkboxdiagram40: false,
      checkboxdiagram41: false,
      checkboxdiagram42: false,
      checkboxdiagram43: false,
      checkboxdiagram44: false,
      checkboxdiagram45: false,
      checkboxdiagram46: false,
      checkboxdiagram47: false,
      checkboxdiagram48: false,
      checkboxdiagram49: false,
      checkboxdiagram50: false,
      checkboxdiagram51: false,
      checkboxdiagram52: false,
      checkboxdiagram53: false,
      checkboxdiagram54: false,
      checkboxdiagram55: false,
      checkboxdiagram56: false,
      checkboxdiagram57: false,
      checkboxdiagram58: false,
      checkboxdiagram59: false,
      checkboxdiagram60: false,
      checkboxdiagram61: false,
      checkboxdiagram62: false,
      checkboxdiagram63: false,
      checkboxdiagram64: false,
      checkboxdiagram65: false,
      checkboxdiagram66: false,
      checkboxdiagram67: false,
      checkboxdiagram68: false,
      checkboxdiagram69: false,
      checkboxdiagram70: false,
      checkboxdiagram71: false,
      checkboxdiagram72: false,
      checkboxdiagram73: false,
      checkboxdiagram74: false,
      checkboxdiagram75: false,
      checkboxdiagram76: false,
      checkboxdiagram77: false,
      checkboxdiagram78: false,
      checkboxdiagram79: false,
      checkboxdiagram80: false,
      checkboxdiagram81: false,
      checkboxdiagram82: false,
      checkboxdiagram83: false,
      checkboxdiagram84: false,
      checkboxdiagram85: false,
      checkboxdiagram86: false,
      checkboxdiagram87: false,
      checkboxdiagram88: false,
      checkboxdiagram89: false,
      checkboxdiagram90: false,
      checkboxdiagram91: false,
      checkboxdiagram92: false,
      checkboxdiagram93: false,
      checkboxdiagram94: false,
      checkboxdiagram95: false,
      checkboxdiagram96: false,
      checkboxdiagram97: false,
      checkboxdiagram98: false,
      checkboxdiagram99: false,
      checkboxdiagram100: false,
      checkboxdiagram101: false,
      checkboxdiagram102: false,
      checkboxdiagram103: false,
      checkboxdiagram104: false,
      checkboxdiagram105: false,
      checkboxdiagram106: false,
      checkboxdiagram107: false,
      checkboxdiagram108: false,
      checkboxdiagram109: false,
      checkboxdiagram110: false,
      checkboxdiagram111: false,
      checkboxdiagram112: false,
      checkboxdiagram113: false,
      checkboxdiagram114: false,
      checkboxdiagram115: false,
      checkboxdiagram116: false,
      checkboxdiagram117: false,
      checkboxdiagram118: false,
      checkboxdiagram119: false,

      CrossPatternCONTRAIPSIControl: "",
      CrossPatternCONTRAIPSI: "",
      COGLoadsRLControl: "",
      COGLoadsRL: "",
      RLKnIRERControl: "",
      RLKnIRER: "",
      RLHipELEVControl: "",
      RLHipELEV: "",
      RLHipLATShiftControl: "",
      RLHipLATShift: "",
      RLHipFLEXEXTdecrControl: "",
      RLHipFLEXEXTdecr: "",
      RLHipROTforFLEXEXTControl: "",
      RLHipROTforFLEXEXT: "",
      RLPelvicFLEXEXTdecrControl: "",
      RLPelvicFLEXEXTdecr: "",
      RLPelvicROTIncrDecrControl: "",
      RLPelvicROTIncrDecr: "",
      TorsoCROTControl: "",
      TorsoCROT: "",
      TorsoOffsetRLControl: "",
      TorsoOffsetRL: "",
      TorsoLATFLEXControl: "",
      TorsoLATFLEX: "",
      HATLoadLRControl: "",
      HATLoadLR: "",
      RLFootIRERControl: "",
      RLFootIRER: "",
      RLCductIRERControl: "",
      RLCductIRER: "",
      RLArmSwingControl: "",
      RLArmSwing: "",
      RLShFLEXEXTControl: "",
      RLShFLEXEXT: "",
      RLArmCarryingAngleIncrDecrControl: "",
      RLArmCarryingAngleIncrDecr: "",
      HOHControl: "",
      HOH: "",
      HBBControl: "",
      HBB: "",
      DFControl: "",
      DF: "",
      Gaitnotes: "",
    },
  ],
  FunctionalDetails: [
    {
      COGTensionBreathingPRControl: "",
      COGTensionBreathingPR: "",
      RombergTestControl: "",
      RombergTest: "",
      StandingHOHPTBothControl: "",
      StandingHOHPTBoth: "",
      HoHminus: false,
      HoHplusone: false,
      HoHplustwo: false,
      HoHplusthree: false,
      HoHOcc: false,
      HoHC: false,
      HoHSh: false,
      HoHSc: false,
      HoHT1: false,
      HoHT: false,
      HoHMT: false,
      HoHL: false,
      HoHP: false,
      HoHSa: false,
      HoHH: false,
      HoHK: false,
      HoHA: false,
      PTminus: false,
      PTplusone: false,
      PTplustwo: false,
      PTplusthree: false,
      PTOcc: false,
      PTC: false,
      PTSh: false,
      PTSc: false,
      PTT1: false,
      PTT: false,
      PTMT: false,
      PTL: false,
      PTP: false,
      PTSa: false,
      PTH: false,
      PTK: false,
      PTA: false,
      Bothminus: false,
      Bothplusone: false,
      Bothplustwo: false,
      Bothplusthree: false,
      BothOcc: false,
      BothC: false,
      BothSh: false,
      BothSc: false,
      BothT1: false,
      BothT: false,
      BothMT: false,
      BothL: false,
      BothP: false,
      BothSa: false,
      BothH: false,
      BothK: false,
      BothA: false,
      CDHypo: false,
      CDHyper: false,
      CDOcc: false,
      CDC: false,
      CDSh: false,
      CDSc: false,
      CDT1: false,
      CDT: false,
      CDMT: false,
      CDL: false,
      CDP: false,
      CDSa: false,
      CDH: false,
      CDK: false,
      CDA: false,
      StandingGoalPostsControl: "",
      StandingGoalPosts: "",
      StandingTorsoRotationControl: "",
      StandingTorsoRotation: "",
      StandingWallTestControl: "",
      StandingWallTest: "",
      StandingWallTestwHOHPTBothControl: "",
      StandingWallTestwHOHPTBoth: "",
      StandingWallAngelsControl: "",
      StandingWallAngels: "",
      StandingWallLateralBendsReachControl: "",
      StandingWallLateralBendsReach: "",
      StandingNeckROMControl: "",
      StandingNeckROM: "",
      JawOpeningandLateralDeviationControl: "",
      JawOpeningandLateralDeviation: "",
      GilletSIJFunctionTestControl: "",
      GilletSIJFunctionTest: "",
      StandingStorkWalksControl: "",
      StandingStorkWalks: "",
      TrendelenburgTestControl: "",
      TrendelenburgTest: "",
      StepUpsControl: "",
      StepUps: "",
      StandingToeTouchControl: "",
      StandingToeTouch: "",
      SquatControl: "",
      Squat: "",
      LungesControl: "",
      Lunges: "",
      SittingAnkleKneeCrossoverControl: "",
      SittingAnkleKneeCrossover: "",
      SittingCatsandDogsControl: "",
      SittingCatsandDogs: "",
      SittingSingleHipLiftsControl: "",
      SittingSingleHipLifts: "",
      HooklyingPositionControl: "",
      HooklyingPosition: "",
      HooklyingLegRotationsControl: "",
      HooklyingLegRotations: "",
      LyingSupineControl: "",
      LyingSupine: "",
      SBControl: "",
      SB: "",
      IMLSIJTestControl: "",
      IMLSIJTest: "",
      LyingProneControl: "",
      LyingProne: "",
      ProneSingleLegLiftsControl: "",
      ProneSingleLegLifts: "",
      SupineSingleLegActiveBridgesControl: "",
      SupineSingleLegActiveBridges: "",
    },
  ],
};

export default initialValues;
