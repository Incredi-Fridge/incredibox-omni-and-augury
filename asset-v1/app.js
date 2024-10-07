/* RB Kelly */
var app=new function(){this.name="Augury",this.version="Omni Augury",this.date="2024",this.folder="asset-v1/",this.looptime=6400,this.bpm=150,this.totalframe=350,this.nbpolo=7,this.nbloopbonus=6,this.bonusloopA=!0,this.bonusendloopA=!1,this.recmaxloop=34,this.recminloop=4,this.recmintime=Math.round(this.looptime/1e3)*this.recminloop,this.spritepolo="polo-sprite.png",this.spritepolotshirt="polo-sprite-tshirt.png",this.spritepicto="game-picto.png",this.colBck="#170723",this.col0="#573C6A",this.col1="#422758",this.col2="#2E1642",this.col3="#241036",this.col4="#170723",this.animearray=[{name:"1_bloco",color:"3C60D8",uniqsnd:!1},{name:"2_screws",color:"3C60D8",uniqsnd:!1},{name:"3_circuit",color:"3C60D8",uniqsnd:!1},{name:"4_saul",color:"3C60D8",uniqsnd:!1},{name:"5_knox",color:"3C60D8",uniqsnd:!0},{name:"6_bass",color:"A5281E",uniqsnd:!1},{name:"7_chipy",color:"A5281E",uniqsnd:!1},{name:"8_cash",color:"A5281E",uniqsnd:!1},{name:"9_muhan",color:"A5281E",uniqsnd:!1},{name:"10_bricks",color:"A5281E",uniqsnd:!1},{name:"11_polno",color:"6F3896",uniqsnd:!1},{name:"12_siren",color:"6F3896",uniqsnd:!1},{name:"13_quartz",color:"6F3896",uniqsnd:!0},{name:"14_blackwood",color:"6F3896",uniqsnd:!1},{name:"15_potion",color:"6F3896",uniqsnd:!1},{name:"16_invision",color:"3CAB9E",uniqsnd:!1},{name:"17_gemdemon",color:"3CAB9E",uniqsnd:!1},{name:"18_baylor",color:"3CAB9E",uniqsnd:!1},{name:"19_loan",color:"3CAB9E",uniqsnd:!1},{name:"20_henry",color:"3CAB9E",uniqsnd:!1},{name:"1_boxie",color:"293562",uniqsnd:!1},{name:"2_screws_2",color:"293562",uniqsnd:!1},{name:"3_tiky",color:"293562",uniqsnd:!1},{name:"4_chester",color:"293562",uniqsnd:!1},{name:"5_skull",color:"293562",uniqsnd:!0},{name:"6_bass_2",color:"953630",uniqsnd:!1},{name:"7_bonky",color:"953630",uniqsnd:!0},{name:"8_atm",color:"953630",uniqsnd:!1},{name:"9_mike",color:"953630",uniqsnd:!1},{name:"10_bricks_2",color:"953630",uniqsnd:!1},{name:"11_luis",color:"67497C",uniqsnd:!1},{name:"12_candles",color:"67497C",uniqsnd:!1},{name:"13_christal",color:"67497C",uniqsnd:!0},{name:"14_guard",color:"67497C",uniqsnd:!1},{name:"15_potion_2",color:"67497C",uniqsnd:!1},{name:"16_souls",color:"476876",uniqsnd:!1},{name:"17_demon",color:"476876",uniqsnd:!1},{name:"18_jack",color:"476876",uniqsnd:!1},{name:"19_loan_2",color:"476876",uniqsnd:!1},{name:"20_hehe",color:"476876",uniqsnd:!1}],this.bonusarray=[{name:"tour",src:"v3-b1-tour-hb.mp4",code:"21,24,26,29,30",sound:"21_bonus_tour",aspire:"aspire"},{name:"reveal",src:"v3-b2-reveal-hb.mp4",code:"21,25,26,34,39",sound:"22_bonus_reveal",aspire:"aspire"},{name:"airline",src:"v3-b3-airline-hb.mp4",code:"21,26,33,37,38",sound:"23_bonus_airline",aspire:"aspire"}]};
