import{h as D,j as Ze}from"./index-DtWnD0nq.js";import{a as w_,b as S_,c as x_,_ as $_,d as z_,e as C_,p as E_}from"./index-DszBTI8l.js";var Vt={exports:{}};(function(t,e){e=t.exports=w_(),e.Stream=e,e.Readable=e,e.Writable=S_(),e.Duplex=x_(),e.Transform=$_,e.PassThrough=z_,e.finished=C_,e.pipeline=E_})(Vt,Vt.exports);var t_=Vt.exports;const{Transform:P_}=t_;var H_=t=>class e_ extends P_{constructor(_,n,o,i,c){super(c),this._rate=_,this._capacity=n,this._delimitedSuffix=o,this._hashBitLength=i,this._options=c,this._state=new t,this._state.initialize(_,n),this._finalized=!1}_transform(_,n,o){let i=null;try{this.update(_,n)}catch(c){i=c}o(i)}_flush(_){let n=null;try{this.push(this.digest())}catch(o){n=o}_(n)}update(_,n){if(!D.isBuffer(_)&&typeof _!="string")throw new TypeError("Data must be a string or a buffer");if(this._finalized)throw new Error("Digest already called");return D.isBuffer(_)||(_=D.from(_,n)),this._state.absorb(_),this}digest(_){if(this._finalized)throw new Error("Digest already called");this._finalized=!0,this._delimitedSuffix&&this._state.absorbLastFewBits(this._delimitedSuffix);let n=this._state.squeeze(this._hashBitLength/8);return _!==void 0&&(n=n.toString(_)),this._resetState(),n}_resetState(){return this._state.initialize(this._rate,this._capacity),this}_clone(){const _=new e_(this._rate,this._capacity,this._delimitedSuffix,this._hashBitLength,this._options);return this._state.copy(_._state),_._finalized=this._finalized,_}};const{Transform:T_}=t_;var D_=t=>class __ extends T_{constructor(_,n,o,i){super(i),this._rate=_,this._capacity=n,this._delimitedSuffix=o,this._options=i,this._state=new t,this._state.initialize(_,n),this._finalized=!1}_transform(_,n,o){let i=null;try{this.update(_,n)}catch(c){i=c}o(i)}_flush(){}_read(_){this.push(this.squeeze(_))}update(_,n){if(!D.isBuffer(_)&&typeof _!="string")throw new TypeError("Data must be a string or a buffer");if(this._finalized)throw new Error("Squeeze already called");return D.isBuffer(_)||(_=D.from(_,n)),this._state.absorb(_),this}squeeze(_,n){this._finalized||(this._finalized=!0,this._state.absorbLastFewBits(this._delimitedSuffix));let o=this._state.squeeze(_);return n!==void 0&&(o=o.toString(n)),o}_resetState(){return this._state.initialize(this._rate,this._capacity),this}_clone(){const _=new __(this._rate,this._capacity,this._delimitedSuffix,this._options);return this._state.copy(_._state),_._finalized=this._finalized,_}};const q_=H_,N_=D_;var U_=function(t){const e=q_(t),_=N_(t);return function(n,o){switch(typeof n=="string"?n.toLowerCase():n){case"keccak224":return new e(1152,448,null,224,o);case"keccak256":return new e(1088,512,null,256,o);case"keccak384":return new e(832,768,null,384,o);case"keccak512":return new e(576,1024,null,512,o);case"sha3-224":return new e(1152,448,6,224,o);case"sha3-256":return new e(1088,512,6,256,o);case"sha3-384":return new e(832,768,6,384,o);case"sha3-512":return new e(576,1024,6,512,o);case"shake128":return new _(1344,256,31,o);case"shake256":return new _(1088,512,31,o);default:throw new Error("Invald algorithm: "+n)}}},n_={};const We=[1,0,32898,0,32906,2147483648,2147516416,2147483648,32907,0,2147483649,0,2147516545,2147483648,32777,2147483648,138,0,136,0,2147516425,0,2147483658,0,2147516555,0,139,2147483648,32905,2147483648,32771,2147483648,32770,2147483648,128,2147483648,32778,0,2147483658,2147483648,2147516545,2147483648,32896,2147483648,2147483649,0,2147516424,2147483648];n_.p1600=function(t){for(let e=0;e<24;++e){const _=t[0]^t[10]^t[20]^t[30]^t[40],n=t[1]^t[11]^t[21]^t[31]^t[41],o=t[2]^t[12]^t[22]^t[32]^t[42],i=t[3]^t[13]^t[23]^t[33]^t[43],c=t[4]^t[14]^t[24]^t[34]^t[44],l=t[5]^t[15]^t[25]^t[35]^t[45],h=t[6]^t[16]^t[26]^t[36]^t[46],u=t[7]^t[17]^t[27]^t[37]^t[47],f=t[8]^t[18]^t[28]^t[38]^t[48],r=t[9]^t[19]^t[29]^t[39]^t[49];let a=f^(o<<1|i>>>31),s=r^(i<<1|o>>>31);const b=t[0]^a,k=t[1]^s,g=t[10]^a,p=t[11]^s,v=t[20]^a,z=t[21]^s,S=t[30]^a,E=t[31]^s,C=t[40]^a,F=t[41]^s;a=_^(c<<1|l>>>31),s=n^(l<<1|c>>>31);const P=t[2]^a,U=t[3]^s,w=t[12]^a,H=t[13]^s,ie=t[22]^a,re=t[23]^s,se=t[32]^a,ce=t[33]^s,le=t[42]^a,ue=t[43]^s;a=o^(h<<1|u>>>31),s=i^(u<<1|h>>>31);const ae=t[4]^a,he=t[5]^s,fe=t[14]^a,pe=t[15]^s,de=t[24]^a,ve=t[25]^s,me=t[34]^a,ye=t[35]^s,ge=t[44]^a,be=t[45]^s;a=c^(f<<1|r>>>31),s=l^(r<<1|f>>>31);const ke=t[6]^a,we=t[7]^s,Se=t[16]^a,xe=t[17]^s,$e=t[26]^a,ze=t[27]^s,Ce=t[36]^a,Ee=t[37]^s,Pe=t[46]^a,He=t[47]^s;a=h^(_<<1|n>>>31),s=u^(n<<1|_>>>31);const Te=t[8]^a,De=t[9]^s,qe=t[18]^a,Ne=t[19]^s,Ue=t[28]^a,Le=t[29]^s,Be=t[38]^a,Fe=t[39]^s,Me=t[48]^a,Ae=t[49]^s,J=b,Q=k,X=p<<4|g>>>28,Y=g<<4|p>>>28,Z=v<<3|z>>>29,tt=z<<3|v>>>29,et=E<<9|S>>>23,_t=S<<9|E>>>23,nt=C<<18|F>>>14,ot=F<<18|C>>>14,it=P<<1|U>>>31,rt=U<<1|P>>>31,st=H<<12|w>>>20,ct=w<<12|H>>>20,lt=ie<<10|re>>>22,ut=re<<10|ie>>>22,at=ce<<13|se>>>19,ht=se<<13|ce>>>19,ft=le<<2|ue>>>30,pt=ue<<2|le>>>30,dt=he<<30|ae>>>2,vt=ae<<30|he>>>2,mt=fe<<6|pe>>>26,yt=pe<<6|fe>>>26,gt=ve<<11|de>>>21,bt=de<<11|ve>>>21,kt=me<<15|ye>>>17,wt=ye<<15|me>>>17,St=be<<29|ge>>>3,xt=ge<<29|be>>>3,$t=ke<<28|we>>>4,zt=we<<28|ke>>>4,Ct=xe<<23|Se>>>9,Et=Se<<23|xe>>>9,Pt=$e<<25|ze>>>7,Ht=ze<<25|$e>>>7,Tt=Ce<<21|Ee>>>11,Dt=Ee<<21|Ce>>>11,qt=He<<24|Pe>>>8,Nt=Pe<<24|He>>>8,Ut=Te<<27|De>>>5,Lt=De<<27|Te>>>5,Bt=qe<<20|Ne>>>12,Ft=Ne<<20|qe>>>12,Mt=Le<<7|Ue>>>25,At=Ue<<7|Le>>>25,Wt=Be<<8|Fe>>>24,Ot=Fe<<8|Be>>>24,It=Me<<14|Ae>>>18,Rt=Ae<<14|Me>>>18;t[0]=J^~st&gt,t[1]=Q^~ct&bt,t[10]=$t^~Bt&Z,t[11]=zt^~Ft&tt,t[20]=it^~mt&Pt,t[21]=rt^~yt&Ht,t[30]=Ut^~X&lt,t[31]=Lt^~Y&ut,t[40]=dt^~Ct&Mt,t[41]=vt^~Et&At,t[2]=st^~gt&Tt,t[3]=ct^~bt&Dt,t[12]=Bt^~Z&at,t[13]=Ft^~tt&ht,t[22]=mt^~Pt&Wt,t[23]=yt^~Ht&Ot,t[32]=X^~lt&kt,t[33]=Y^~ut&wt,t[42]=Ct^~Mt&et,t[43]=Et^~At&_t,t[4]=gt^~Tt&It,t[5]=bt^~Dt&Rt,t[14]=Z^~at&St,t[15]=tt^~ht&xt,t[24]=Pt^~Wt&nt,t[25]=Ht^~Ot&ot,t[34]=lt^~kt&qt,t[35]=ut^~wt&Nt,t[44]=Mt^~et&ft,t[45]=At^~_t&pt,t[6]=Tt^~It&J,t[7]=Dt^~Rt&Q,t[16]=at^~St&$t,t[17]=ht^~xt&zt,t[26]=Wt^~nt&it,t[27]=Ot^~ot&rt,t[36]=kt^~qt&Ut,t[37]=wt^~Nt&Lt,t[46]=et^~ft&dt,t[47]=_t^~pt&vt,t[8]=It^~J&st,t[9]=Rt^~Q&ct,t[18]=St^~$t&Bt,t[19]=xt^~zt&Ft,t[28]=nt^~it&mt,t[29]=ot^~rt&yt,t[38]=qt^~Ut&X,t[39]=Nt^~Lt&Y,t[48]=ft^~dt&Ct,t[49]=pt^~vt&Et,t[0]^=We[e*2],t[1]^=We[e*2+1]}};const V=n_;function B(){this.state=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],this.blockSize=null,this.count=0,this.squeezing=!1}B.prototype.initialize=function(t,e){for(let _=0;_<50;++_)this.state[_]=0;this.blockSize=t/8,this.count=0,this.squeezing=!1};B.prototype.absorb=function(t){for(let e=0;e<t.length;++e)this.state[~~(this.count/4)]^=t[e]<<8*(this.count%4),this.count+=1,this.count===this.blockSize&&(V.p1600(this.state),this.count=0)};B.prototype.absorbLastFewBits=function(t){this.state[~~(this.count/4)]^=t<<8*(this.count%4),t&128&&this.count===this.blockSize-1&&V.p1600(this.state),this.state[~~((this.blockSize-1)/4)]^=128<<8*((this.blockSize-1)%4),V.p1600(this.state),this.count=0,this.squeezing=!0};B.prototype.squeeze=function(t){this.squeezing||this.absorbLastFewBits(1);const e=D.alloc(t);for(let _=0;_<t;++_)e[_]=this.state[~~(this.count/4)]>>>8*(this.count%4)&255,this.count+=1,this.count===this.blockSize&&(V.p1600(this.state),this.count=0);return e};B.prototype.copy=function(t){for(let e=0;e<50;++e)t.state[e]=this.state[e];t.blockSize=this.blockSize,t.count=this.count,t.squeezing=this.squeezing};var L_=B,rn=U_(L_),O,m,o_,i_,T,Oe,r_,Kt,te,Gt,Jt,s_,W={},c_=[],B_=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,G=Array.isArray;function x(t,e){for(var _ in e)t[_]=e[_];return t}function l_(t){var e=t.parentNode;e&&e.removeChild(t)}function Qt(t,e,_){var n,o,i,c={};for(i in e)i=="key"?n=e[i]:i=="ref"?o=e[i]:c[i]=e[i];if(arguments.length>2&&(c.children=arguments.length>3?O.call(arguments,2):_),typeof t=="function"&&t.defaultProps!=null)for(i in t.defaultProps)c[i]===void 0&&(c[i]=t.defaultProps[i]);return M(t,c,n,o,null)}function M(t,e,_,n,o){var i={type:t,props:e,key:_,ref:n,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:o??++o_,__i:-1,__u:0};return o==null&&m.vnode!=null&&m.vnode(i),i}function F_(){return{current:null}}function I(t){return t.children}function A(t,e){this.props=t,this.context=e}function q(t,e){if(e==null)return t.__?q(t.__,t.__i+1):null;for(var _;e<t.__k.length;e++)if((_=t.__k[e])!=null&&_.__e!=null)return _.__e;return typeof t.type=="function"?q(t):null}function u_(t){var e,_;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((_=t.__k[e])!=null&&_.__e!=null){t.__e=t.__c.base=_.__e;break}return u_(t)}}function Xt(t){(!t.__d&&(t.__d=!0)&&T.push(t)&&!K.__r++||Oe!==m.debounceRendering)&&((Oe=m.debounceRendering)||r_)(K)}function K(){var t,e,_,n,o,i,c,l;for(T.sort(Kt);t=T.shift();)t.__d&&(e=T.length,n=void 0,i=(o=(_=t).__v).__e,c=[],l=[],_.__P&&((n=x({},o)).__v=o.__v+1,m.vnode&&m.vnode(n),ee(_.__P,n,o,_.__n,_.__P.namespaceURI,32&o.__u?[i]:null,c,i??q(o),!!(32&o.__u),l),n.__v=o.__v,n.__.__k[n.__i]=n,p_(c,n,l),n.__e!=i&&u_(n)),T.length>e&&T.sort(Kt));K.__r=0}function a_(t,e,_,n,o,i,c,l,h,u,f){var r,a,s,b,k,g=n&&n.__k||c_,p=e.length;for(_.__d=h,M_(_,e,g),h=_.__d,r=0;r<p;r++)(s=_.__k[r])!=null&&typeof s!="boolean"&&typeof s!="function"&&(a=s.__i===-1?W:g[s.__i]||W,s.__i=r,ee(t,s,a,o,i,c,l,h,u,f),b=s.__e,s.ref&&a.ref!=s.ref&&(a.ref&&_e(a.ref,null,s),f.push(s.ref,s.__c||b,s)),k==null&&b!=null&&(k=b),65536&s.__u||a.__k===s.__k?h=h_(s,h,t):typeof s.type=="function"&&s.__d!==void 0?h=s.__d:b&&(h=b.nextSibling),s.__d=void 0,s.__u&=-196609);_.__d=h,_.__e=k}function M_(t,e,_){var n,o,i,c,l,h=e.length,u=_.length,f=u,r=0;for(t.__k=[],n=0;n<h;n++)c=n+r,(o=t.__k[n]=(o=e[n])==null||typeof o=="boolean"||typeof o=="function"?null:typeof o=="string"||typeof o=="number"||typeof o=="bigint"||o.constructor==String?M(null,o,null,null,null):G(o)?M(I,{children:o},null,null,null):o.constructor===void 0&&o.__b>0?M(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o)!=null?(o.__=t,o.__b=t.__b+1,l=A_(o,_,c,f),o.__i=l,i=null,l!==-1&&(f--,(i=_[l])&&(i.__u|=131072)),i==null||i.__v===null?(l==-1&&r--,typeof o.type!="function"&&(o.__u|=65536)):l!==c&&(l==c-1?r--:l==c+1?r++:l>c?f>h-c?r+=l-c:r--:l<c&&(l==c-r?r-=l-c:r++),l!==n+r&&(o.__u|=65536))):(i=_[c])&&i.key==null&&i.__e&&!(131072&i.__u)&&(i.__e==t.__d&&(t.__d=q(i)),Yt(i,i,!1),_[c]=null,f--);if(f)for(n=0;n<u;n++)(i=_[n])!=null&&!(131072&i.__u)&&(i.__e==t.__d&&(t.__d=q(i)),Yt(i,i))}function h_(t,e,_){var n,o;if(typeof t.type=="function"){for(n=t.__k,o=0;n&&o<n.length;o++)n[o]&&(n[o].__=t,e=h_(n[o],e,_));return e}t.__e!=e&&(e&&t.type&&!_.contains(e)&&(e=q(t)),_.insertBefore(t.__e,e||null),e=t.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType===8);return e}function f_(t,e){return e=e||[],t==null||typeof t=="boolean"||(G(t)?t.some(function(_){f_(_,e)}):e.push(t)),e}function A_(t,e,_,n){var o=t.key,i=t.type,c=_-1,l=_+1,h=e[_];if(h===null||h&&o==h.key&&i===h.type&&!(131072&h.__u))return _;if(n>(h!=null&&!(131072&h.__u)?1:0))for(;c>=0||l<e.length;){if(c>=0){if((h=e[c])&&!(131072&h.__u)&&o==h.key&&i===h.type)return c;c--}if(l<e.length){if((h=e[l])&&!(131072&h.__u)&&o==h.key&&i===h.type)return l;l++}}return-1}function Ie(t,e,_){e[0]==="-"?t.setProperty(e,_??""):t[e]=_==null?"":typeof _!="number"||B_.test(e)?_:_+"px"}function R(t,e,_,n,o){var i;t:if(e==="style")if(typeof _=="string")t.style.cssText=_;else{if(typeof n=="string"&&(t.style.cssText=n=""),n)for(e in n)_&&e in _||Ie(t.style,e,"");if(_)for(e in _)n&&_[e]===n[e]||Ie(t.style,e,_[e])}else if(e[0]==="o"&&e[1]==="n")i=e!==(e=e.replace(/(PointerCapture)$|Capture$/i,"$1")),e=e.toLowerCase()in t||e==="onFocusOut"||e==="onFocusIn"?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+i]=_,_?n?_.u=n.u:(_.u=te,t.addEventListener(e,i?Jt:Gt,i)):t.removeEventListener(e,i?Jt:Gt,i);else{if(o=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in t)try{t[e]=_??"";break t}catch{}typeof _=="function"||(_==null||_===!1&&e[4]!=="-"?t.removeAttribute(e):t.setAttribute(e,e=="popover"&&_==1?"":_))}}function Re(t){return function(e){if(this.l){var _=this.l[e.type+t];if(e.t==null)e.t=te++;else if(e.t<_.u)return;return _(m.event?m.event(e):e)}}}function ee(t,e,_,n,o,i,c,l,h,u){var f,r,a,s,b,k,g,p,v,z,S,E,C,F,P,U,w=e.type;if(e.constructor!==void 0)return null;128&_.__u&&(h=!!(32&_.__u),i=[l=e.__e=_.__e]),(f=m.__b)&&f(e);t:if(typeof w=="function")try{if(p=e.props,v="prototype"in w&&w.prototype.render,z=(f=w.contextType)&&n[f.__c],S=f?z?z.props.value:f.__:n,_.__c?g=(r=e.__c=_.__c).__=r.__E:(v?e.__c=r=new w(p,S):(e.__c=r=new A(p,S),r.constructor=w,r.render=O_),z&&z.sub(r),r.props=p,r.state||(r.state={}),r.context=S,r.__n=n,a=r.__d=!0,r.__h=[],r._sb=[]),v&&r.__s==null&&(r.__s=r.state),v&&w.getDerivedStateFromProps!=null&&(r.__s==r.state&&(r.__s=x({},r.__s)),x(r.__s,w.getDerivedStateFromProps(p,r.__s))),s=r.props,b=r.state,r.__v=e,a)v&&w.getDerivedStateFromProps==null&&r.componentWillMount!=null&&r.componentWillMount(),v&&r.componentDidMount!=null&&r.__h.push(r.componentDidMount);else{if(v&&w.getDerivedStateFromProps==null&&p!==s&&r.componentWillReceiveProps!=null&&r.componentWillReceiveProps(p,S),!r.__e&&(r.shouldComponentUpdate!=null&&r.shouldComponentUpdate(p,r.__s,S)===!1||e.__v===_.__v)){for(e.__v!==_.__v&&(r.props=p,r.state=r.__s,r.__d=!1),e.__e=_.__e,e.__k=_.__k,e.__k.forEach(function(H){H&&(H.__=e)}),E=0;E<r._sb.length;E++)r.__h.push(r._sb[E]);r._sb=[],r.__h.length&&c.push(r);break t}r.componentWillUpdate!=null&&r.componentWillUpdate(p,r.__s,S),v&&r.componentDidUpdate!=null&&r.__h.push(function(){r.componentDidUpdate(s,b,k)})}if(r.context=S,r.props=p,r.__P=t,r.__e=!1,C=m.__r,F=0,v){for(r.state=r.__s,r.__d=!1,C&&C(e),f=r.render(r.props,r.state,r.context),P=0;P<r._sb.length;P++)r.__h.push(r._sb[P]);r._sb=[]}else do r.__d=!1,C&&C(e),f=r.render(r.props,r.state,r.context),r.state=r.__s;while(r.__d&&++F<25);r.state=r.__s,r.getChildContext!=null&&(n=x(x({},n),r.getChildContext())),v&&!a&&r.getSnapshotBeforeUpdate!=null&&(k=r.getSnapshotBeforeUpdate(s,b)),a_(t,G(U=f!=null&&f.type===I&&f.key==null?f.props.children:f)?U:[U],e,_,n,o,i,c,l,h,u),r.base=e.__e,e.__u&=-161,r.__h.length&&c.push(r),g&&(r.__E=r.__=null)}catch(H){if(e.__v=null,h||i!=null){for(e.__u|=h?160:32;l&&l.nodeType===8&&l.nextSibling;)l=l.nextSibling;i[i.indexOf(l)]=null,e.__e=l}else e.__e=_.__e,e.__k=_.__k;m.__e(H,e,_)}else i==null&&e.__v===_.__v?(e.__k=_.__k,e.__e=_.__e):e.__e=W_(_.__e,e,_,n,o,i,c,h,u);(f=m.diffed)&&f(e)}function p_(t,e,_){e.__d=void 0;for(var n=0;n<_.length;n++)_e(_[n],_[++n],_[++n]);m.__c&&m.__c(e,t),t.some(function(o){try{t=o.__h,o.__h=[],t.some(function(i){i.call(o)})}catch(i){m.__e(i,o.__v)}})}function W_(t,e,_,n,o,i,c,l,h){var u,f,r,a,s,b,k,g=_.props,p=e.props,v=e.type;if(v==="svg"?o="http://www.w3.org/2000/svg":v==="math"?o="http://www.w3.org/1998/Math/MathML":o||(o="http://www.w3.org/1999/xhtml"),i!=null){for(u=0;u<i.length;u++)if((s=i[u])&&"setAttribute"in s==!!v&&(v?s.localName===v:s.nodeType===3)){t=s,i[u]=null;break}}if(t==null){if(v===null)return document.createTextNode(p);t=document.createElementNS(o,v,p.is&&p),i=null,l=!1}if(v===null)g===p||l&&t.data===p||(t.data=p);else{if(i=i&&O.call(t.childNodes),g=_.props||W,!l&&i!=null)for(g={},u=0;u<t.attributes.length;u++)g[(s=t.attributes[u]).name]=s.value;for(u in g)if(s=g[u],u!="children"){if(u=="dangerouslySetInnerHTML")r=s;else if(u!=="key"&&!(u in p)){if(u=="value"&&"defaultValue"in p||u=="checked"&&"defaultChecked"in p)continue;R(t,u,null,s,o)}}for(u in p)s=p[u],u=="children"?a=s:u=="dangerouslySetInnerHTML"?f=s:u=="value"?b=s:u=="checked"?k=s:u==="key"||l&&typeof s!="function"||g[u]===s||R(t,u,s,g[u],o);if(f)l||r&&(f.__html===r.__html||f.__html===t.innerHTML)||(t.innerHTML=f.__html),e.__k=[];else if(r&&(t.innerHTML=""),a_(t,G(a)?a:[a],e,_,n,v==="foreignObject"?"http://www.w3.org/1999/xhtml":o,i,c,i?i[0]:_.__k&&q(_,0),l,h),i!=null)for(u=i.length;u--;)i[u]!=null&&l_(i[u]);l||(u="value",b!==void 0&&(b!==t[u]||v==="progress"&&!b||v==="option"&&b!==g[u])&&R(t,u,b,g[u],o),u="checked",k!==void 0&&k!==t[u]&&R(t,u,k,g[u],o))}return t}function _e(t,e,_){try{if(typeof t=="function"){var n=typeof t.__u=="function";n&&t.__u(),n&&e==null||(t.__u=t(e))}else t.current=e}catch(o){m.__e(o,_)}}function Yt(t,e,_){var n,o;if(m.unmount&&m.unmount(t),(n=t.ref)&&(n.current&&n.current!==t.__e||_e(n,null,e)),(n=t.__c)!=null){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(i){m.__e(i,e)}n.base=n.__P=null}if(n=t.__k)for(o=0;o<n.length;o++)n[o]&&Yt(n[o],e,_||typeof t.type!="function");_||t.__e==null||l_(t.__e),t.__c=t.__=t.__e=t.__d=void 0}function O_(t,e,_){return this.constructor(t,_)}function d_(t,e,_){var n,o,i,c;m.__&&m.__(t,e),o=(n=typeof _=="function")?null:_&&_.__k||e.__k,i=[],c=[],ee(e,t=(!n&&_||e).__k=Qt(I,null,[t]),o||W,W,e.namespaceURI,!n&&_?[_]:o?null:e.firstChild?O.call(e.childNodes):null,i,!n&&_?_:o?o.__e:e.firstChild,n,c),p_(i,t,c)}function v_(t,e){d_(t,e,v_)}function I_(t,e,_){var n,o,i,c,l=x({},t.props);for(i in t.type&&t.type.defaultProps&&(c=t.type.defaultProps),e)i=="key"?n=e[i]:i=="ref"?o=e[i]:l[i]=e[i]===void 0&&c!==void 0?c[i]:e[i];return arguments.length>2&&(l.children=arguments.length>3?O.call(arguments,2):_),M(t.type,l,n||t.key,o||t.ref,null)}function R_(t,e){var _={__c:e="__cC"+s_++,__:t,Consumer:function(n,o){return n.children(o)},Provider:function(n){var o,i;return this.getChildContext||(o=[],(i={})[e]=this,this.getChildContext=function(){return i},this.componentWillUnmount=function(){o=null},this.shouldComponentUpdate=function(c){this.props.value!==c.value&&o.some(function(l){l.__e=!0,Xt(l)})},this.sub=function(c){o.push(c);var l=c.componentWillUnmount;c.componentWillUnmount=function(){o&&o.splice(o.indexOf(c),1),l&&l.call(c)}}),n.children}};return _.Provider.__=_.Consumer.contextType=_}O=c_.slice,m={__e:function(t,e,_,n){for(var o,i,c;e=e.__;)if((o=e.__c)&&!o.__)try{if((i=o.constructor)&&i.getDerivedStateFromError!=null&&(o.setState(i.getDerivedStateFromError(t)),c=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(t,n||{}),c=o.__d),c)return o.__E=o}catch(l){t=l}throw t}},o_=0,i_=function(t){return t!=null&&t.constructor==null},A.prototype.setState=function(t,e){var _;_=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=x({},this.state),typeof t=="function"&&(t=t(x({},_),this.props)),t&&x(_,t),t!=null&&this.__v&&(e&&this._sb.push(e),Xt(this))},A.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),Xt(this))},A.prototype.render=I,T=[],r_=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Kt=function(t,e){return t.__v.__b-e.__v.__b},K.__r=0,te=0,Gt=Re(!1),Jt=Re(!0),s_=0;const j_=Object.freeze(Object.defineProperty({__proto__:null,Component:A,Fragment:I,cloneElement:I_,createContext:R_,createElement:Qt,createRef:F_,h:Qt,hydrate:v_,get isValidElement(){return i_},get options(){return m},render:d_,toChildArray:f_},Symbol.toStringTag,{value:"Module"})),sn=Ze(j_);var $,d,jt,je,L=0,m_=[],y=m,Ve=y.__b,Ke=y.__r,Ge=y.diffed,Je=y.__c,Qe=y.unmount,Xe=y.__;function N(t,e){y.__h&&y.__h(d,t,L||e),L=0;var _=d.__H||(d.__H={__:[],__h:[]});return t>=_.__.length&&_.__.push({}),_.__[t]}function y_(t){return L=1,g_(k_,t)}function g_(t,e,_){var n=N($++,2);if(n.t=t,!n.__c&&(n.__=[_?_(e):k_(void 0,e),function(l){var h=n.__N?n.__N[0]:n.__[0],u=n.t(h,l);h!==u&&(n.__N=[u,n.__[1]],n.__c.setState({}))}],n.__c=d,!d.u)){var o=function(l,h,u){if(!n.__c.__H)return!0;var f=n.__c.__H.__.filter(function(a){return!!a.__c});if(f.every(function(a){return!a.__N}))return!i||i.call(this,l,h,u);var r=!1;return f.forEach(function(a){if(a.__N){var s=a.__[0];a.__=a.__N,a.__N=void 0,s!==a.__[0]&&(r=!0)}}),!(!r&&n.__c.props===l)&&(!i||i.call(this,l,h,u))};d.u=!0;var i=d.shouldComponentUpdate,c=d.componentWillUpdate;d.componentWillUpdate=function(l,h,u){if(this.__e){var f=i;i=void 0,o(l,h,u),i=f}c&&c.call(this,l,h,u)},d.shouldComponentUpdate=o}return n.__N||n.__}function V_(t,e){var _=N($++,3);!y.__s&&oe(_.__H,e)&&(_.__=t,_.i=e,d.__H.__h.push(_))}function b_(t,e){var _=N($++,4);!y.__s&&oe(_.__H,e)&&(_.__=t,_.i=e,d.__h.push(_))}function K_(t){return L=5,ne(function(){return{current:t}},[])}function G_(t,e,_){L=6,b_(function(){return typeof t=="function"?(t(e()),function(){return t(null)}):t?(t.current=e(),function(){return t.current=null}):void 0},_==null?_:_.concat(t))}function ne(t,e){var _=N($++,7);return oe(_.__H,e)&&(_.__=t(),_.__H=e,_.__h=t),_.__}function J_(t,e){return L=8,ne(function(){return t},e)}function Q_(t){var e=d.context[t.__c],_=N($++,9);return _.c=t,e?(_.__==null&&(_.__=!0,e.sub(d)),e.props.value):t.__}function X_(t,e){y.useDebugValue&&y.useDebugValue(e?e(t):t)}function Y_(t){var e=N($++,10),_=y_();return e.__=t,d.componentDidCatch||(d.componentDidCatch=function(n,o){e.__&&e.__(n,o),_[1](n)}),[_[0],function(){_[1](void 0)}]}function Z_(){var t=N($++,11);if(!t.__){for(var e=d.__v;e!==null&&!e.__m&&e.__!==null;)e=e.__;var _=e.__m||(e.__m=[0,0]);t.__="P"+_[0]+"-"+_[1]++}return t.__}function tn(){for(var t;t=m_.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(j),t.__H.__h.forEach(Zt),t.__H.__h=[]}catch(e){t.__H.__h=[],y.__e(e,t.__v)}}y.__b=function(t){d=null,Ve&&Ve(t)},y.__=function(t,e){t&&e.__k&&e.__k.__m&&(t.__m=e.__k.__m),Xe&&Xe(t,e)},y.__r=function(t){Ke&&Ke(t),$=0;var e=(d=t.__c).__H;e&&(jt===d?(e.__h=[],d.__h=[],e.__.forEach(function(_){_.__N&&(_.__=_.__N),_.i=_.__N=void 0})):(e.__h.forEach(j),e.__h.forEach(Zt),e.__h=[],$=0)),jt=d},y.diffed=function(t){Ge&&Ge(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(m_.push(e)!==1&&je===y.requestAnimationFrame||((je=y.requestAnimationFrame)||en)(tn)),e.__H.__.forEach(function(_){_.i&&(_.__H=_.i),_.i=void 0})),jt=d=null},y.__c=function(t,e){e.some(function(_){try{_.__h.forEach(j),_.__h=_.__h.filter(function(n){return!n.__||Zt(n)})}catch(n){e.some(function(o){o.__h&&(o.__h=[])}),e=[],y.__e(n,_.__v)}}),Je&&Je(t,e)},y.unmount=function(t){Qe&&Qe(t);var e,_=t.__c;_&&_.__H&&(_.__H.__.forEach(function(n){try{j(n)}catch(o){e=o}}),_.__H=void 0,e&&y.__e(e,_.__v))};var Ye=typeof requestAnimationFrame=="function";function en(t){var e,_=function(){clearTimeout(n),Ye&&cancelAnimationFrame(e),setTimeout(t)},n=setTimeout(_,100);Ye&&(e=requestAnimationFrame(_))}function j(t){var e=d,_=t.__c;typeof _=="function"&&(t.__c=void 0,_()),d=e}function Zt(t){var e=d;t.__c=t.__(),d=e}function oe(t,e){return!t||t.length!==e.length||e.some(function(_,n){return _!==t[n]})}function k_(t,e){return typeof e=="function"?e(t):e}const _n=Object.freeze(Object.defineProperty({__proto__:null,useCallback:J_,useContext:Q_,useDebugValue:X_,useEffect:V_,useErrorBoundary:Y_,useId:Z_,useImperativeHandle:G_,useLayoutEffect:b_,useMemo:ne,useReducer:g_,useRef:K_,useState:y_},Symbol.toStringTag,{value:"Module"})),cn=Ze(_n);export{cn as a,rn as j,sn as r};
