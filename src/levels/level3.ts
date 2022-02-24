import { LevelFormat } from '../types';
// import Console from "Console";

//Objects
const S = 'soil';
const Sl = 'soil_left';
const Sr = 'soil_right';
const C = 'coin';
const Cb = 'coinbox';
const Mcb = 'multiple_coinbox';
const Bb = 'brown_block';
const Bl = 'bush_left';
const Bc = 'bush_middle';
const Bml = 'bush_middle_left';
const Bm = 'ballmonster';
const Bmr = 'bush_middle_right';
const Br = 'bush_right';
const G = 'grass_top';
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
const Sb = 'starbox';
const St = 'stone';
//Level Columns
const GtSZ =      ['','','','','','','','','','','','','','grass_top','soil'];
const GtS =       [G, S];
const GtSSSS =    [G, S, S, S, S];
const Cb3GtS =    [Cb, '', '', '', G, S]
const Cb3GtSSSS = [Cb, '', '', '', G, S, S, S, S];
const Bb3GtS =    [Bb, '', '', '', G, S];
const PtlPlPlgPls=  [Ptl, Pl, Plg, Pls];
const Cb3Bb3GtS = [Cb, '', '', '', Bb, '', '', '', G, S];
const BbBbGtS =  [Bb, Bb, G, S];
const Bb6GtS = [Bb, '', '', '', '', '', '', '', G, S];
const space15 = [];
const BmGtS = [Bm, G, S];
const Cb3Cb3Bb3GtS  = [Cb, '', '', '', Cb, '', '', '', Bb, '', '', '', G, S];
const St3BbBbBbGS =  [St, '', '', '', Bb, Bb, Bb, G, S];
const BbBbBbGS = [Bb, Bb, Bb, G, S];

const level3: LevelFormat = 
  {
    width: 252,
    height: 15,
    id: 0,
    background: 9,
    data: [
GtS, GtS, PtlPlPlgPls,
 [Ptr, Pr, Prg, Prs, ],
GtS,
['mario', G, S],
[Mcb, '', '', '', G, S],
[G, Psl],
[G, Psm],
[G, Psr],
GtS, GtS, GtS, GtS, GtS, GtS,
[Bl, G, S],
[Bc, G, S],
[Bmr, G, S],
[Br, G, S],
GtS, GtS,
[Mb, '', '', '', G, S],
GtS, GtS,
BmGtS,
PtlPlPlgPls,
[ Ptr, Pr, Prg, Prs],
GtS, GtS, GtS, GtS, GtS, GtS,
      [Cb, '', '', '', Bb, Bb, Bb, G, S],
      BbBbBbGS,
GtS, GtS, GtS, GtS, GtS, GtS,
PtlPlPlgPls,
[ Ptr, Pr, Prg, Prs],
GtS, GtS,
Cb3GtS,
GtS, GtS, GtS, GtS, GtS, GtS,
BmGtS,
[ Gtl, Gl, Gl, Gtlc, S],
GtSSSS, GtSSSS, GtSSSS,
[Cb, '', '', '', G, S, Psl, S, S],
[Bb, '', '', '', G, S, Psr, S, S],
Cb3GtSSSS,
[Bb, '', '', '', G, S, S, S, S],
Cb3GtSSSS,
GtSSSS, GtSSSS, GtSSSS,
[Bm, G, S, S, S, S],
[ Ptl, Pl, Pl, Plg, Pls, Pls, Pls, Pls],
[ Ptr, Pr, Pr, Pr, Pr, Pr, Prg, Prs],
Bb6GtS, Bb6GtS,
[Bb, '', '', '', Cb, '', '', '', G, S],
Bb6GtS, Bb6GtS,
[Bm, Bb, '', '', '', '', '', '', '', G, S],
GtS,
['', '', '', C, C, C, C, C, C, C, '', '', '', G, S],
GtS,
[Gtrr, Sr],
space15, space15,
[Gtlr, Sl],
GtS, GtS,
Bb3GtS,
[Mb, '', '', '', Bb, '', '', '', G, S],
Bb3GtS,
GtS, GtS, GtS,
PtlPlPlgPls,
[ Ptr, Pr, Prg, Prs],
GtS, GtS,
Cb3GtS,
GtS, GtS, GtS,
[Bl, G, S],
[Bml, G, S],
[Bc, G, S],
[Bb, '', '', Bmr, G, S],
[Bb, '', '', Br, G, S],
Cb3Bb3GtS, Cb3Bb3GtS,
Cb3Cb3Bb3GtS, Cb3Cb3Bb3GtS,
Cb3Bb3GtS, Cb3Bb3GtS,
Bb3GtS, Bb3GtS,
GtS,
      [Gt, G, S],
GtS,
      [Gtrr, Sr],
space15, space15,
      [Gtlr, Sl],
GtS,
      PtlPlPlgPls,
[ Ptr, Pr, Prg, Prs],
GtS, GtS,
Cb3GtS,
GtS, GtS, GtS, GtS,
      [G, Psl],
      [Bm, G, Psm],
      [G, Psr],
GtS, GtS,
      Cb3GtS,
GtS, GtS,
      [Gt, G, S],
      PtlPlPlgPls,
      [ Ptr, Pr, Prg, Prs],
GtS, GtS, GtS, GtS, GtS,
      BmGtS,
      [Sb, '', '', '', Bb, Bb, Bb, G, S],
      BbBbBbGS,
GtS, GtS, GtS, GtS, GtS, GtS,
      [ Gtl, Gl, Gl, Gtlc, S],
      GtSSSS, GtSSSS, GtSSSS,
     Cb3GtSSSS,
      [Bb, '', '', '', G, S, S, S, S],
     Cb3GtSSSS,
      [Bb, '', '', '', G, Psl, S, S, S],
      [Cb, '', '', '', G, Psm, S, S, S],
      [G, Psr, S, S, S],
      GtSSSS, GtSSSS, GtSSSS, GtSSSS, GtSSSS,
      [Bm, G, S, S, S, S],
      [ Ptl, Pl, Pl, Plg, Pls, Pls, Pls, Pls],
      [ Ptr, Pr, Pr, Pr, Pr, Pr, Prg, Prs],
GtS, GtS,
      Cb3GtS,
GtS, GtS,
      BmGtS,
GtS,
      PtlPlPlgPls,
      [  Ptr, Pr, Prg, Prs],
GtS, GtS, GtS, GtS, GtS,
      BmGtS,
      [Cb, '', '', '', Bb, Bb, Bb, G, S],
      BbBbBbGS,
GtS, GtS, GtS, GtS, GtS, GtS,
      PtlPlPlgPls,
      [ Ptr, Pr, Prg, Prs],
GtS, GtS, GtS, GtS, GtS, GtS,
      [Gt, G, S],
      [Bl, G, S],
      [Bml, G, S],
      [Bmr, G, S],
      [Br, G, S],
GtS, GtS,
      [Gt, G, S],
      [Gtrr, Sr],
space15, space15, space15,
      [Bb, Bb, Gtlr, Sl],
     BbBbGtS, BbBbGtS, BbBbGtS, BbBbGtS,
      BbBbBbGS, BbBbBbGS,
      St3BbBbBbGS, St3BbBbBbGS,
      [ Mcb,'','','',Bb,Bb,Bb,G,S],
      [ Bb,Bb,Bb,Gtrr,Sr],
space15, space15,
      [ Bb, Gtlr, Sl],
     BbBbGtS,BbBbGtS,
      [ Bb, C, Bb, Bb, G, S],
      [ Bb,Bb,'',Bb,Bb,G,S],
      [ Bb,Bb,C,Bb,Bb,G,S],
      [ Bb,'',Bb,Bb,'',Bb,Bb,G,S],
      [ Bb,Bb,C,Bb,Bb,C,Bb,Bb,G,S],
      [ Bb,Bb,Bb,'',Bb,Bb,Bb,Bb,Bb,G,S],
      [ Bb,Bb,Bb,Bb,C,Bb,Bb,Bb,Bb,Bb,G,S],
      [ Bb,Bb,Bb,Bb,Bb,'',Bb,Bb,Bb,Bb,Bb,G,S],
      [ Bb,Bb,Bb,Bb,Bb,Bb,C,Bb,Bb,Bb,Bb,Bb,G,S],
      [ Bb,Bb,Bb,Bb,Bb,Bb,'',Bb,Bb,Bb,Bb,Bb,G,S],
GtS,
      [C, '', C, '', C, '', C, '', C, '', '', G, S],
GtS,GtS,GtS,GtS,GtS,GtS,GtS,GtS,GtS,GtS,
    ],
  }
;

export {level3};
