'use strict';
// 원본 renderResult의 문단 카드 구성과 textContent 기반 el 방식을 복사해 데모에 맞게 구성했습니다.
const el = (tag, className, value) => { const node = document.createElement(tag); node.className = className; node.textContent = String(value ?? ''); return node; };
const paragraphs = [
 {title:'잡음과 반복 측정의 평균',before:'디지털카메라의 이미지 센서는 빛을 전기 신호로 바꾸어 영상 정보를 얻는다. 그런데 같은 물체를 같은 조건에서 연속으로 촬영해도 각 화소에서 측정되는 값은 완전히 같지 않을 수 있다. 빛이 센서에 도달하는 양에 미세한 변동이 있고, 센서 내부에서도 불규칙한 전기 신호가 발생하기 때문이다. 이처럼 측정하려는 정보에 섞여 그 값을 불규칙하게 변화시키는 성분을 잡음이라고 한다. 잡음의 영향을 줄이는 방법 중 하나는 동일한 대상을 여러 번 측정한 뒤 그 값들의 평균을 구하는 것이다. 측정할 때마다 잡음이 값을 높이기도 하고 낮추기도 한다면, 평균을 구하는 과정에서 그 영향이 서로 상쇄될 수 있다. ',keys:[{sentence:'다만 이러한 효과를 얻으려면 측정하는 동안 대상의 상태가 유지되고, 잡음이 특정 방향으로 치우치지 않아야 한다.',points:['앞에서 제시한 반복 측정 후 평균 구하기가 효과를 내는 조건입니다. 다음 문단에서도 평균화가 효과를 내기 위한 전제가 제시됩니다.','측정값이 달라지는 원인이 대상 자체의 변화인지, 잡음인지 구별해야 합니다. 대상의 상태가 유지되어야 잡음의 영향을 줄이는 효과를 기대할 수 있습니다.','‘다만’은 앞선 설명에 조건을 붙입니다. 대상의 상태 유지와 잡음의 방향에 관한 두 조건을 함께 확인해야 합니다.']}],after:'',summary:'이미지 센서의 측정값에는 잡음이 섞일 수 있습니다. 같은 대상을 여러 번 측정해 평균을 구하면 잡음의 영향을 줄일 수 있지만, 대상의 상태가 유지되고 잡음이 특정 방향으로 치우치지 않아야 합니다.',plain:'같은 물체를 찍어도 센서가 받아들이는 값은 조금씩 달라질 수 있습니다. 알고 싶은 정보에 불규칙한 흔들림이 섞이기 때문인데, 이것을 잡음이라고 합니다. 여러 번 측정한 값이 어떤 때는 높고 어떤 때는 낮다면, 평균을 내면서 그 영향이 서로 상쇄될 수 있습니다. 다만 대상 자체가 달라지거나 잡음이 계속 값을 높이는 쪽으로만 작용한다면, 평균만으로 이런 효과를 기대하기 어렵습니다.'},
 {title:'공간적 평균화의 전제와 한계',before:'영상에서는 서로 이웃한 화소들의 측정값을 평균하여 잡음을 줄이기도 한다. 이를 공간적 평균화라고 하자. 밝기가 고른 벽을 촬영했다면 이웃한 화소에는 비슷한 양의 빛이 들어오므로, 화소 사이의 작은 측정값 차이를 잡음에 의한 것으로 보고 줄일 수 있다. 그러나 검은 물체와 흰 배경이 맞닿은 경계에서는 사정이 달라진다. 경계 양쪽의 측정값 차이는 잡음 때문만이 아니라 실제 밝기의 차이 때문에 생긴다. ',keys:[{sentence:'공간적 평균화는 이웃한 화소가 비슷한 정보를 담고 있다는 전제에서 효과적이지만, 바로 그 전제가 성립하지 않는 경계에서는 보존해야 할 차이까지 줄일 수 있다.',points:['1문단과 공통으로 평균을 이용하지만, 평균을 구하는 대상이 반복 측정값에서 이웃한 화소의 값으로 달라졌습니다. 3문단은 경계가 흐려지는 한계를 줄일 방법을 제시합니다.','밝기가 고른 벽의 작은 측정값 차이와 물체 경계의 실제 밝기 차이를 구별해야 합니다. 후자는 영상에 보존해야 할 정보입니다.','‘바로 그 전제’는 이웃한 화소가 비슷한 정보를 담고 있다는 뜻입니다. 벽과 경계에서 결과가 다른 이유를 전제의 성립 여부와 연결해 읽어야 합니다.']}],after:' 그 결과 잡음은 감소하더라도 물체의 윤곽이 흐려질 수 있다.',summary:'이웃한 화소의 값을 평균하는 공간적 평균화는 밝기가 고른 영역에서 잡음을 줄이는 데 유리합니다. 그러나 물체의 경계에서는 실제 밝기 차이까지 줄여 윤곽을 흐리게 할 수 있습니다.',plain:'이번에는 같은 대상을 여러 번 측정하는 대신, 영상에서 서로 이웃한 화소의 값을 모아 평균을 구합니다. 밝기가 고른 벽이라면 이웃 화소들이 담는 실제 정보가 비슷하므로, 작은 측정값 차이를 잡음으로 보고 줄일 수 있습니다. 반면 검은 물체와 흰 배경 사이의 차이는 영상에 남겨야 할 정보입니다. 경계 양쪽의 값을 함께 평균하면 이 차이까지 작아져 윤곽이 흐려질 수 있습니다.'},
 {title:'가중치의 보완 효과와 남는 문제',before:'이러한 한계를 줄이기 위해, 평균을 구할 때 이웃한 화소를 모두 같은 비중으로 반영하지 않는 방법을 사용할 수 있다. 기준 화소와 가까이 있으면서 측정값도 비슷한 화소에는 큰 가중치를 주고, 측정값 차이가 큰 화소에는 작은 가중치를 주는 것이다. 가중치는 평균을 구할 때 각 값이 결과에 영향을 미치는 정도를 뜻한다. 이 방법은 경계 반대편 화소의 영향을 줄여 윤곽을 보존하는 데 유리하다. ',keys:[{sentence:'하지만 측정값의 차이만으로 실제 밝기 차이와 잡음을 완전히 구별할 수는 없다.',tail:' 잡음 때문에 값이 크게 달라진 화소도 실제 경계의 일부로 취급되어 충분히 보정되지 않을 수 있기 때문이다. ',points:['2문단의 한계를 보완하려고 가중치를 달리하는 방법을 제시했지만, ‘하지만’ 뒤에서 이 방법에도 남는 문제를 밝힙니다.','실제 경계와 잡음은 모두 큰 측정값 차이로 나타날 수 있습니다. 차이가 크다는 사실만으로 그 원인을 확정할 수는 없습니다.','잡음으로 값이 크게 달라진 화소를 경계로 취급하면, 줄여야 할 잡음이 충분히 보정되지 않고 남을 수 있다는 결과까지 연결해야 합니다.']},{sentence:'결국 측정값의 차이를 더 많이 없애는 것이 언제나 더 정확한 영상을 만드는 것은 아니다.',points:['2문단에서는 차이를 줄이다가 윤곽까지 흐려졌고, 3문단에서는 차이를 보존하려다가 잡음이 남을 수 있었습니다. ‘결국’은 이 논의를 종합합니다.','잡음에 의한 변동은 줄여야 하지만 실제 밝기 차이는 보존해야 합니다. 둘 다 측정값의 차이로 나타나므로 구별이 필요합니다.','‘언제나’에 주목하세요. 차이를 줄이는 행위 자체를 부정하는 것이 아니라, 더 많이 줄일수록 항상 더 정확해지는 것은 아니라는 뜻입니다.']}],after:' 잡음 제거의 핵심은 없애야 할 변동과 남겨야 할 차이를 구별하는 데 있다.',summary:'화소 사이의 거리와 측정값의 유사성에 따라 가중치를 달리하면 경계를 보존하는 데 유리합니다. 그러나 실제 밝기 차이와 잡음을 완전히 구별할 수 없어 잡음이 충분히 제거되지 않을 수 있습니다.',plain:'주변 화소의 값을 모두 똑같이 반영하지 않고, 기준 화소와 가까우면서 값도 비슷한 화소를 더 많이 반영하는 방법입니다. 여기서 가중치는 각 값이 평균 결과에 영향을 미치는 정도입니다. 값 차이가 큰 화소를 적게 반영하면 경계 반대편의 밝기가 섞이는 것을 줄일 수 있습니다. 하지만 잡음 때문에 값이 크게 달라진 화소도 실제 경계의 일부로 취급될 수 있습니다. 그러면 줄여야 할 잡음이 충분히 보정되지 않고 남을 수 있습니다.'}
];
function selectSentence(button, key, number) {
 document.querySelectorAll('.key-sentence').forEach(other => {other.setAttribute('aria-pressed',String(other === button));other.querySelector('.key-hint').textContent = other === button ? '✓ 선택됨' : '↗ 독해 포인트 보기';});
 const content = document.getElementById('insight-content');
 const quote = el('blockquote','selected-quote',number+'문단 · '+key.sentence);
 const points = el('div','points','');
 ['연결해서 읽기','개념 구별','주목할 표현'].forEach((title,index) => {const box = el('div','','');box.append(el('h3','',title),el('p','',key.points[index]));points.append(box);});
 content.replaceChildren(quote,points);
 document.querySelector('.insight').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'nearest'});
}
function renderResult(data) {
 const reading = document.getElementById('reading');
 data.forEach((p,index) => {
 const card = el('article','paragraph','');
 const heading = el('h2','paragraph-heading','');heading.append(el('span','number',(index+1)+'문단'),document.createTextNode(p.title));
 const columns = el('div','columns','');const source = el('section','source','');source.append(el('h3','','원문'));const text = el('p','','');text.append(document.createTextNode(p.before));
 p.keys.forEach(key => {const button = el('button','key-sentence',key.sentence);button.type='button';button.setAttribute('aria-pressed','false');button.setAttribute('aria-controls','insight-content');button.append(el('span','key-hint','↗ 독해 포인트 보기'));button.addEventListener('click',() => selectSentence(button,key,index+1));text.append(button);if(key.tail)text.append(document.createTextNode(key.tail));});
 text.append(document.createTextNode(p.after));source.append(text);
 const explanation = el('section','explanation','');explanation.append(el('h3','','핵심 요약'),el('p','summary',p.summary),el('h3','','쉬운 풀이'),el('p','',p.plain));columns.append(source,explanation);card.append(heading,columns);reading.append(card);
 });
}
renderResult(paragraphs);
