(function(){
var b=document.querySelector('.burger'),n=document.getElementById('nav');
if(b&&n)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');b.setAttribute('aria-label',o?'Close menu':'Open menu');});
function $(i){return document.getElementById(i);}
var f=$('cform');
if(f)f.addEventListener('submit',function(e){e.preventDefault();var fm=$('fm');
 if($('website').value)return;
 if(!f.checkValidity()){fm.hidden=false;fm.textContent='Please add your name, a valid email address and a message, and tick the agreement box.';return;}
 var body='Name: '+$('name').value+'\nEmail: '+$('email').value+'\nTopic: '+$('topic').value+'\n\n'+$('message').value;
 location.href='mailto:'+f.getAttribute('data-to')+'?subject='+encodeURIComponent(f.getAttribute('data-brand')+': '+$('topic').value)+'&body='+encodeURIComponent(body);
 fm.hidden=false;fm.textContent='Your email app should open with the message ready to send. If nothing happens, write to us directly at '+f.getAttribute('data-to')+'.';});
var c=$('cookie'),k=null;try{k=localStorage.getItem('ck_'+location.hostname);}catch(e){}
if(c&&!k)c.classList.add('show');
if(c)c.querySelectorAll('button').forEach(function(bt){bt.addEventListener('click',function(){try{localStorage.setItem('ck_'+location.hostname,bt.getAttribute('data-cookie'));}catch(e){}c.classList.remove('show');});});
var y=$('year');if(y)y.textContent=new Date().getFullYear();
})();
(function(){function $(i){return document.getElementById(i);}
function on(a,f){a.forEach(function(x){x.addEventListener('input',f);x.addEventListener('change',f);});f();}
var ww=$('wf-w');if(ww){var wd=$('wf-d'),wl=$('wf-l');on([ww,wd,wl],function(){var w=parseFloat(ww.value)||0,d=parseFloat(wd.value)||0,l=parseFloat(wl.value)||0;if(w<12||d<20||l<20){$('wf-o').innerHTML='<strong>Enter all three numbers</strong>';return;}
 var flat=w*10*0.32,lo=w<15?32:w<16.5?34:w<18?38:w<19.5?40:42,hi=w<15?37:w<16.5?39:w<18?41:w<19.5?44:48,v,t;
 if(l>flat+3){v='Likely too big';t='The lugs ('+l+' mm) probably overhang the flat top of your wrist (about '+Math.round(flat)+' mm).';}
 else if(d<lo-2){v='Small and discreet';t='Below the usual '+lo+'–'+hi+' mm range. Lovely as a dress watch.';}
 else if(d>hi){v='Bold but wearable';t='Larger than the usual '+lo+'–'+hi+' mm, but the lug length should still sit within your wrist.';}
 else{v='A good fit';t='Diameter is within '+lo+'–'+hi+' mm and the lugs should sit inside your wrist.';}
 $('wf-o').innerHTML='<strong>'+v+'</strong><p>'+t+'</p><span class="tc-tag">Strap ≈ '+(Math.round(d/2/2)*2)+' mm</span>';});}
var as=$('ac-s');if(as){var ad=$('ac-d'),at=$('ac-t');var R={mech:[-20,20,'everyday automatic'],chron:[-4,6,'chronometer'],quartz:[-0.5,0.5,'quartz']};
 on([as,ad,at],function(){var s=parseFloat(as.value)||0,d=Math.max(1,parseFloat(ad.value)||1),r=s/d,x=R[at.value],ok=r>=x[0]&&r<=x[1],rr=Math.round(r*10)/10;
  $('ac-o').innerHTML='<strong>'+(rr>0?'+':'')+rr+' s/day</strong><p>About '+(Math.round(Math.abs(r)*30/6)/10)+' minutes '+(r>=0?'fast':'slow')+' a month.</p><p>'+(ok?'Within the typical range for a '+x[2]+' movement ('+x[0]+' to +'+x[1]+' s/d).':'Outside the typical '+x[0]+' to +'+x[1]+' s/d for a '+x[2]+' movement. '+(Math.abs(r)>30?'Worth a magnetism check by a watchmaker.':'Try resting it in a different position overnight.'))+'</p>';});}
var wr=$('wr-r');if(wr){var wc=$('wr-c');var W={0:['Keep it dry','Avoid hand-washing with it on.'],30:['Splashes only','Rain and hand-washing are fine. No showers or swimming.'],50:['Light water only','Short, shallow swims are possible but showers are best avoided.'],100:['Swimming','Fine for swimming and snorkelling. Avoid diving from boards.'],200:['Water sport','Swimming, snorkelling and recreational water sport.'],300:['Diving','Built for scuba diving when the bezel and crown are used correctly.']};
 on([wr,wc],function(){var v=parseInt(wr.value,10),w=W[v];$('wr-o').innerHTML='<strong>'+w[0]+'</strong><p>'+w[1]+'</p><p>'+(wc.value==='push'&&v>=100?'With a push-pull crown, never operate it underwater and have seals tested yearly.':wc.value==='screw'?'Always screw the crown fully down before water contact.':'Seals age: have water resistance tested every year or two.')+'</p>';});}
})();
