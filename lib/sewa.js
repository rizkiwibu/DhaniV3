/*

SCRIPT DI BUAT OLEH DHANIOFFICIALL OFFICIALL SENDIRI!!

NO ENC? BUY

CHAT : https://wa.me/6281333603591
NOMOR : 628 13-3360-3591


*/

function _0x5ede(){const _0x75a4ea=['128301HugopS','1135664zQRkZp','keys','4637164SNIpRN','./database/sewa.json','Sewa\x20expired:\x20','exports','log','51392490UcYJnz','14eZrkhF','status','5900yuhWWK','now','1152uLvpRg','stringify','expired','push','splice','58exSRUk','2793944GtBzni','forEach','writeFileSync','1421100DoKLRe'];_0x5ede=function(){return _0x75a4ea;};return _0x5ede();}const _0x1852d2=_0x247a;(function(_0x2f603c,_0x740fcf){const _0x427478=_0x247a,_0x12fa29=_0x2f603c();while(!![]){try{const _0x564ea2=-parseInt(_0x427478(0x195))/0x1+-parseInt(_0x427478(0x18f))/0x2*(parseInt(_0x427478(0x194))/0x3)+-parseInt(_0x427478(0x197))/0x4+-parseInt(_0x427478(0x188))/0x5*(parseInt(_0x427478(0x18a))/0x6)+-parseInt(_0x427478(0x186))/0x7*(parseInt(_0x427478(0x190))/0x8)+parseInt(_0x427478(0x193))/0x9+parseInt(_0x427478(0x185))/0xa;if(_0x564ea2===_0x740fcf)break;else _0x12fa29['push'](_0x12fa29['shift']());}catch(_0x4d761e){_0x12fa29['push'](_0x12fa29['shift']());}}}(_0x5ede,0xcc529));const fs=require('fs'),toMs=require('ms'),{MessageType}=require('@adiwajshing/baileys'),{sleep}=require('./myfunc'),addSewaGroup=(_0x4bd2cd,_0x390533,_0x3ad6e1)=>{const _0x63a93e=_0x247a,_0x485ad7={'id':_0x4bd2cd,'expired':Date[_0x63a93e(0x189)]()+toMs(_0x390533),'status':!![]};_0x3ad6e1[_0x63a93e(0x18d)](_0x485ad7),fs[_0x63a93e(0x192)]('./database/sewa.json',JSON['stringify'](_0x3ad6e1,null,0x3));},getSewaPosition=(_0xc4fbef,_0x38d749)=>{const _0x520c18=_0x247a;let _0x50711f=null;Object['keys'](_0x38d749)[_0x520c18(0x191)](_0x1299dd=>{_0x38d749[_0x1299dd]['id']===_0xc4fbef&&(_0x50711f=_0x1299dd);});if(_0x50711f!==null)return _0x50711f;},getSewaExpired=(_0x3b9a9c,_0x411d32)=>{const _0x2c64be=_0x247a;let _0x578474=null;Object[_0x2c64be(0x196)](_0x411d32)[_0x2c64be(0x191)](_0x2ac39a=>{_0x411d32[_0x2ac39a]['id']===_0x3b9a9c&&(_0x578474=_0x2ac39a);});if(_0x578474!==null)return _0x411d32[_0x578474][_0x2c64be(0x18c)];},checkSewaGroup=(_0x5c7f90,_0x5ebdaf)=>{const _0x1a64a8=_0x247a;let _0x140023=![];return Object['keys'](_0x5ebdaf)[_0x1a64a8(0x191)](_0x1837d5=>{_0x5ebdaf[_0x1837d5]['id']===_0x5c7f90&&(_0x140023=!![]);}),_0x140023;},expiredCheck=(_0x3fb588,_0x37d6ff)=>{setInterval(()=>{const _0x144a07=_0x247a;let _0x2b9124=null;Object[_0x144a07(0x196)](_0x37d6ff)[_0x144a07(0x191)](_0x50f2fc=>{const _0x14a35f=_0x144a07;Date[_0x14a35f(0x189)]()>=_0x37d6ff[_0x50f2fc][_0x14a35f(0x18c)]&&(_0x2b9124=_0x50f2fc);}),_0x2b9124!==null&&(console[_0x144a07(0x184)](_0x144a07(0x199)+_0x37d6ff[_0x2b9124]['id']),_0x37d6ff[_0x2b9124][_0x144a07(0x187)]===!![]&&_0x3fb588['groupLeave'](_0x37d6ff[_0x2b9124]['id'])['then'](()=>{const _0x4c4c07=_0x144a07;_0x37d6ff[_0x4c4c07(0x18e)](_0x2b9124,0x1),fs['writeFileSync'](_0x4c4c07(0x198),JSON[_0x4c4c07(0x18b)](_0x37d6ff,null,0x3));}));},0x3e8);},getAllPremiumUser=_0x34b4bc=>{const _0x4a929f=_0x247a,_0x3fe6f2=[];return Object[_0x4a929f(0x196)](_0x34b4bc)['forEach'](_0x99bcb0=>{const _0x2ffa8e=_0x4a929f;_0x3fe6f2[_0x2ffa8e(0x18d)](_0x34b4bc[_0x99bcb0]['id']);}),_0x3fe6f2;};function _0x247a(_0x5dcc6f,_0x4d34d0){const _0x5ede77=_0x5ede();return _0x247a=function(_0x247aca,_0x1e3045){_0x247aca=_0x247aca-0x183;let _0x15fc67=_0x5ede77[_0x247aca];return _0x15fc67;},_0x247a(_0x5dcc6f,_0x4d34d0);}module[_0x1852d2(0x183)]={'addSewaGroup':addSewaGroup,'getSewaExpired':getSewaExpired,'getSewaPosition':getSewaPosition,'expiredCheck':expiredCheck,'checkSewaGroup':checkSewaGroup,'getAllPremiumUser':getAllPremiumUser};