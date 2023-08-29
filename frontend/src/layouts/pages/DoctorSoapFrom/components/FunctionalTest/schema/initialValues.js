import form from "./form";
const initialValues = {
  COGTensionBreathingPRControl: "",
  COGTensionBreathingPR: "",
  RombergTestControl: "",
  RombergTest: "",
  StandingHOHPTBothControl: "",
  StandingHOHPTBoth: "",
  HoHminus: "",
  HoHplusone: "",
  HoHplustwo: "",
  HoHplusthree: "",
  HoHOcc: "",
  HoHC: "",
  HoHSh: "",
  HoHSc: "",
  HoHT1: "",
  HoHT: "",
  HoHMT: "",
  HoHL: "",
  HoHP: "",
  HoHSa: "",
  HoHH: "",
  HoHK: "",
  HoHA: "",
  PTminus: "",
  PTplusone: "",
  PTplustwo: "",
  PTplusthree: "",
  PTOcc: "",
  PTC: "",
  PTSh: "",
  PTSc: "",
  PTT1: "",
  PTT: "",
  PTMT: "",
  PTL: "",
  PTP: "",
  PTSa: "",
  PTH: "",
  PTK: "",
  PTA: "",
  Bothminus: "",
  Bothplusone: "",
  Bothplustwo: "",
  Bothplusthree: "",
  BothOcc: "",
  BothC: "",
  BothSh: "",
  BothSc: "",
  BothT1: "",
  BothT: "",
  BothMT: "",
  BothL: "",
  BothP: "",
  BothSa: "",
  BothH: "",
  BothK: "",
  BothA: "",
  CDHypo: "",
  CDHyper: "",
  CDOcc: "",
  CDC: "",
  CDSh: "",
  CDSc: "",
  CDT1: "",
  CDT: "",
  CDMT: "",
  CDL: "",
  CDP: "",
  CDSa: "",
  CDH: "",
  CDK: "",
  CDA: "",
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