 import { LevelFormat } from '../types';

//Objects
const Bb = 'brown_block';
const Bc = 'bush_middle';
const Bl = 'bush_left'
const Bm = 'ballmonster';
const Bml = 'bush_middle_left';
const Bmr = 'bush_middle_right';
const Br = 'bush_right';
const C = 'coin';
const Cb = 'coinbox';
const G_t = 'grass_top';
const Gl = 'grass_left';
const Gtl = 'grass_top_left';
const Gtlc = 'grass_top_left_corner';
const Gtlr = 'grass_top_left_rounded';
const Gtrr = 'grass_top_right_rounded';
const Gt = 'greenturtle';
const Mb = 'mushroombox';
const Ptl = 'pipe_top_left';
const Pl = 'pipe_left';
const Plg = 'pipe_left_grass';
const Pls = 'pipe_left_soil';
const Ptr = 'pipe_top_right';
const Pr = 'pipe_right';
const Prg = 'pipe_right_grass';
const Prs = 'pipe_right_soil';
const Psl = 'planted_soil_left';
const Psm = 'planted_soil_middle';
const Psr = 'planted_soil_right';
const Mcb = 'multiple_coinbox';
const S = 'soil';
const Sb = 'starbox';
const Sl = 'soil_left';
const Sr = 'soil_right';
const St = 'stone';

//Level Columns
const _ = [,];
const _3 = [,,,];
const _7 = [,..._3,..._3,];
const _3G = [..._3, G_t]
const SS = Array(2).fill(S)
const SSS = Array(3).fill(S)
const SSSS = Array(4).fill(C);
const C_ = [C,,];
const C7 = Array(7).fill(C);
const C_x5 = [...C_,...C_,...C_,...C_,...C_];
const GPsl = [G_t, Psl];
const GPsm = [G_t, Psm];
const GPsr = [G_t, Psr];
const GtlrSl = [Gtlr, Sl];
const GtopS =  [G_t, S];
const GtopSx2 = Array(2).fill(GtopS);
const GtopSx3 = Array(3).fill(GtopS);
const GtopSx4 = Array(4).fill(GtopS);
const GtopSx5 = Array(5).fill(GtopS);
const GtopSx6 = Array(6).fill(GtopS);
const GtopSx7 = Array(7).fill(GtopS);
const GtopSx10 = Array(10).fill(GtopS);
const GtGtopS = [Gt, ...GtopS];
const Bb2 = Array(2).fill(Bb);
const Bb3 = Array(3).fill(Bb);
const Bb4 = Array(4).fill(Bb);
const Bb5 = Array(5).fill(Bb);
const Bb6 = Array(6).fill(Bb)
const _Bb2 = [,...Bb2];
const Bb_3 = [Bb,..._3];
const Bb2C = [...Bb2, C]
const Bb3GtopS = [...Bb3, ...GtopS];
const Bb3GtopSx2 = Array(2).fill(Bb3GtopS);
const Bb5GtopS = [...Bb5, ...GtopS];
const Cb_3 = [Cb,..._3];
const Mb_3 = [Mb,..._3];
const Sb_3 = [Sb,..._3];
const _Bb5GtopS = [,...Bb5GtopS]
const _3GtopS = [..._3,  ...GtopS];
const GtopS4 =    [...GtopS,...SSS];
const GtopS4x2 = Array(2).fill(GtopS4);
const GtopS4x3 = Array(3).fill(GtopS4);
const GtopS4x4 = Array(4).fill(GtopS4);
const GtopS4x5 = Array(5).fill(GtopS4);
const GtrrSr = [Gtrr, Sr];
const GtopSGtrrSr = [GtopS, GtrrSr];
const Cb_3GtopS =    [Cb,..._3GtopS]
const Cb_3GtopSSSS = [...Cb_3GtopS,...SSS]
const Bb_3GtopS =    [Bb,..._3GtopS];
const Bb_3GtopSx2 = Array(2).fill(Bb_3GtopS);
const PlPlgPls = [Pl, Plg, Pls];
const PtlPlPlgPls=  [Ptl,...PlPlgPls];
const Cb_3Bb3GtopS = [...Cb_3, ...Bb3, ...GtopS]
const Cb_3Bb_3GtopS = [Cb,..._3,...Bb_3GtopS];
const Cb_3Bb_3GtopSx2 =  Array(2).fill(Cb_3Bb_3GtopS);
const Bb2GtopS =  [...Bb2,...GtopS];
const _Bb2GtopS = [..._Bb2,...GtopS];
const Bb2GtopSx2 = Array(2).fill(_Bb2GtopS);
const Bb2GtopSx4 =  Array(4).fill(_Bb2GtopS);
const Bb_7GtopS = [...Bb_3,,..._3GtopS];
const Bb_7GtopSx2 = Array(2).fill(Bb_7GtopS);
const BlGts = [Bl, ...GtopS];
const BcGts = [Bc, ...GtopS];
const BrGtopS = [Br, ...GtopS];
const BmrGts = [Bmr, ...GtopS];
const BmlGts = [Bml,...GtopS];
const fall = [];
const fall2 =  Array(2).fill(fall);
const fall3 =  Array(3).fill(fall);
const BmGtopS = [Bm,...GtopS];
const Cb_3x2Bb3GtopS  = [...Cb_3,...Cb_3,...Bb_3GtopS];
const Cb_3x2Bb3GtopSx2 =Array(2).fill(Cb_3x2Bb3GtopS);
const St_3Bb3GtopS =  [St,..._3,...Bb3GtopS];
const St_3Bb3GtopSx2 =  Array(2).fill(St_3Bb3GtopS);
const Pls3 =  Array(3).fill(Pls); 
const Pr5 = Array(5).fill(Pr);
const PtrPrPrgPrs = [Ptr, Pr, Prg, Prs];
const PtlPlPlgPlsPtrPrPrgPrs = [ PtlPlPlgPls,PtrPrPrgPrs,];
const GtlGl2GtlcS = [Gtl,Gl,Gl,Gtlc,S];
const Bb_3GtopSSSS = [Bb, ..._3, ...GtopS4];
const Cb_3GtopSSSSBb_3GtopSSSSCb_3GtopSSSS = [Cb_3GtopSSSS, Bb_3GtopSSSS, Cb_3GtopSSSS];
const GtopS2Cb_3GtopS = [...GtopSx2, Cb_3GtopS];
const BmGtopSSSS = [Bm,...GtopS4];
const Mcb_3 = [Mcb, ..._3]
const PrgPrs = [Prg,Prs];
const GtopS5BmGtopS = [...GtopSx5, BmGtopS];
const PtlPl2PlgPls4 = [Ptl,Pl,...PlPlgPls,...Pls3];
const PtrPr5PrgPrs = [Ptr,...Pr5,...PrgPrs];
const BlGtsBmlGts = [BlGts, BmlGts];
const BmrGtsBrGtopS = [BmrGts, BrGtopS];
const CBb5GtopS = [C,...Bb5GtopS];
const BbGtlrSl = [Bb,...GtlrSl];
const Bb2Cx2 = Array(2).fill(Bb2C)
const Bb2CBb2GtopS = [...Bb2C,...Bb2GtopS];
const Bb2Cx2Bb2GtopS = [...Bb2C,...Bb2C,...Bb2GtopS];
const Bb2_Bb2GtopS = [...Bb2,..._Bb2GtopS];
const GtopS2Cb_3GtopSGtopS2 = [...GtopS2Cb_3GtopS,...GtopSx2];
const Bb3_Bb5GtopS = [...Bb3,..._Bb5GtopS];
const Bb5_Bb5GtopS = [...Bb5,..._Bb5GtopS];
const Bb6_Bb5GtopS = [...Bb6,..._Bb5GtopS];
const Bb3GtopSx7 = [Bb3GtopS,...GtopSx6];

const level1: LevelFormat = 
  {
    width: 252,
    height: 15,
    id: 0,
    background: 9,
    data: [
...GtopSx2,...PtlPlPlgPlsPtrPrPrgPrs, GtopS,
['mario',...GtopS],
[...Mcb_3,...GtopS],
GPsl,GPsm,GPsr,...GtopSx6,
BlGts,BcGts,...BmrGtsBrGtopS,...GtopSx2,
[...Mb_3,...GtopS],
...GtopSx2,BmGtopS,...PtlPlPlgPlsPtrPrPrgPrs,...GtopSx6,
Cb_3Bb3GtopS,
...Bb3GtopSx7,...PtlPlPlgPlsPtrPrPrgPrs,...GtopSx2,
Cb_3GtopS,...GtopSx6,BmGtopS,GtlGl2GtlcS,...GtopS4x3,
[...Cb_3GtopS,Psl,...SS],
[...Bb_3GtopS,Psr,...SS],
...Cb_3GtopSSSSBb_3GtopSSSSCb_3GtopSSSS, ...GtopS4x3,
BmGtopSSSS,PtlPl2PlgPls4,PtrPr5PrgPrs,...Bb_7GtopSx2,
[...Bb_3,...Cb_3GtopS],
...Bb_7GtopSx2,
[Bm,...Bb_7GtopS],
GtopS,
[_3,...C7,..._3GtopS],
...GtopSGtrrSr, ...fall2,
GtlrSl, ...GtopSx2, Bb_3GtopS,
[...Mb_3,...Bb_3GtopS],
Bb_3GtopS, ...GtopSx3, ...PtlPlPlgPlsPtrPrPrgPrs, ...GtopSx2,
Cb_3GtopS, ...GtopSx3, ...BlGtsBmlGts, BcGts,
[Bb,,,Bmr,...GtopS],
[Bb,,,Br,...GtopS],
...Cb_3Bb_3GtopSx2, ...Cb_3x2Bb3GtopSx2, ...Cb_3Bb_3GtopSx2,
...Bb_3GtopSx2,GtopS,GtGtopS,...GtopSGtrrSr,...fall2,
GtlrSl,GtopS,...PtlPlPlgPlsPtrPrPrgPrs,
...GtopS2Cb_3GtopS,...GtopSx4, GPsl,
[Bm,...GPsm],
GPsr,...GtopS2Cb_3GtopSGtopS2,
GtGtopS,...PtlPlPlgPlsPtrPrPrgPrs,...GtopS5BmGtopS,
[...Sb_3,...Bb3GtopS],
Bb3GtopS, ...GtopSx6,GtlGl2GtlcS, ...GtopS4x3,
...Cb_3GtopSSSSBb_3GtopSSSSCb_3GtopSSSS,
[Bb,..._3G,Psl,...SSS],
[Cb,..._3G,Psm,...SSS],
[...GPsr,...SSS],
...GtopS4x5,BmGtopSSSS,
PtlPl2PlgPls4,PtrPr5PrgPrs,
...GtopS2Cb_3GtopSGtopS2,
BmGtopS, GtopS, ...PtlPlPlgPlsPtrPrPrgPrs,...GtopS5BmGtopS,
Cb_3Bb3GtopS, Bb3GtopS, ...GtopSx6,
...PtlPlPlgPlsPtrPrPrgPrs,
...GtopSx6,GtGtopS,...BlGtsBmlGts,...BmrGtsBrGtopS,
...GtopSx2,GtGtopS,GtrrSr,...fall3,
[Bb,...BbGtlrSl],
...Bb2GtopSx4,
...Bb3GtopSx2,...St_3Bb3GtopSx2,
[...Mcb_3,...Bb3GtopS],
[...Bb3,...GtrrSr],
...fall2,BbGtlrSl,...Bb2GtopSx2,
[Bb,C,...Bb2,...GtopS],
Bb2_Bb2GtopS, Bb2CBb2GtopS,
[Bb,_,...Bb2_Bb2GtopS],
Bb2Cx2Bb2GtopS,
Bb3_Bb5GtopS,
[...Bb4,...CBb5GtopS],
Bb5_Bb5GtopS,
[...Bb6,...CBb5GtopS],
Bb6_Bb5GtopS,
GtopS,
[...C_x5,,...GtopS],
...GtopSx10
    ],
  }
;

export {level1};



