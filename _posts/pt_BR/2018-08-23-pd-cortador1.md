---
layout: post
title:  "Computação Musical - Instrumentalizando um Cortador de Grama - 1"
author: tiago
categories: [ pure data, computação musical, desenho de áudio, educação, sampler, webpd ]
tags: [ pure data, computer music, audio design, education, sampler, webpd ]
image: assets/images/capas/pd-cortador-1.png
description: ""
lang: pt_BR
custom-javascript-list: [assets/js/jquery.min.js, assets/js/pd-fileutils.js, assets/js/webpd-latest.min.js, assets/js/pd-examples.js ]
featured: false
hidden: false
hasAudio: true
hasVideo: false
hasPaper: false
hasScore: false
hasInteractivity: true
hasSourceCode: true
hasPDF: false
---

<h4 id="introducao">O massacre musical da roçadeira elétrica</h4> <!-- TODO FIXME - the template was jumping to h3 (we should not jump h's), and I'm jumping even more, because of fonte size... -->

Como transformar um cortador de grama num instrumento musical digital?

As ferramentas tradicionais de produção de áudio (_Ableton_, _Pro Tools_, samplers em geral...) podem nos levar até certo ponto em expresividade. Esta série de postagens chama para algo mais:
* Abordar desenho de áudio e computação musical usando Pure Data **a partir de um nível iniciante**;
* Exercitar diferentes escutas;
  + Ir além do paradigma de _nota musical_;
* Trabalhar instrumentalidade;
  + Alçar vôos para além do teclado;
* Criar um _plugin_ (e usar nas ferramentas tradicionais de produção áudio - ora, veja só!)

A inspiração vem de um encontro do laboratório de _Corpo, Som E Tecnologia_, coordenado pela profa. Dra. Flora Holderbaum e vinculado neste momento à disciplina de Tecnologia Musical (Ceart-UDESC-SC). Um dos participantes utilizou uma amostra gravada de um som de cortador de grama, inseriu num sampler e aplicou filtragens para construir timbres. Um contrabaixo utilizando esse procedimento, no entanto, não deu bom resultado - vamos apelar então para nossa escuta e entendimento dos fenômenos envolvidos e modelar esse som digitalmente, colhendo os frutos que recém falamos acima.
<!--<!doctype HTML>-->

<!--<html>-->
  <head>
    <meta charset="utf-8">
    <script type="text/javascript" src="../assets/js/jquery.min.js"></script>
    <script type="text/javascript" src="../assets/js/pd-fileutils.js"></script>
    <script type="text/javascript" src="../assets/js/webpd-latest.min.js"></script>
    <script type="text/javascript" src="../assets/js/pd-examples.js"></script>

    <link href='http://fonts.googleapis.com/css?family=Source+Sans+Pro' rel='stylesheet' type='text/css'>
    <link href='../assets/css/pd-examples.css' rel='stylesheet' type='text/css'>
  </head>

  <!--<body>-->

Se você nunca produziu com Pure Data, pode assistir esta **oficina introdutória** (começa aos 43m55s. Assista do começo para exemplos de Pd em performances de todo tipo, além de desenho de áudio e trilha sonora, focando em produção brasileira e florianopolitana):
<iframe width="560" height="315" src="https://www.youtube.com/embed/8_X3pCm1zy4?start=2635" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<!--------------------------------------------------------------------------------------------------->
<h4 id="qual-nota">"Que nota eu escuto se eu tocar a corda Mi (660 Hz) 440 vezes por segundo?"</h4> <!-- TODO FIXME - the template was jumping to h3 (we should not jump h's), and I'm jumping even more, because of fonte size... -->

Se você sabe a resposta, então você sabe de onde vem a nota (_altura musical_ é o nome correto) de um cortador de grama.

O princípio é o mesmo da sirene mecânica (de colégio, de polícia....): uma roda dentada ou com pás gira, atingindo um anteparo muitas vezes por segundo. Por exemplo, se o anteparo está sendo atingido 440 vezes/segundo, a gente escuta uma nota Lá (440 Hz. Ora, _Hz_ significa exatamente repetições por segundo!).
<br>No caso do cortador, são os dentes da nossa lâmina que atingem o que está sendo cortado. Por isso que ouvimos a altura musical subir em glissando à medida que o giro da lâmina ganha velocidade).

Que mágica é essa? Pra entender melhor, nós fomos à Barra da Lagoa falar com seu Bentois:

<p style="font-family:Verdana;font-size:16px">Quer dizer que a repetição de um mero som de duas coisas se chocando vira uma nota musical? É uma imitação que engana nossa percepção?</p>
<p style="font-family:Verdana;font-size:16px">B.: Não é uma imitação. A própria nota musical <i>(altura musical)</i> é que é a invenção da nossa audição. Coisas como a voz, os pássaros e as violas agitam o ar em repetições, do mesmo jeito que uma sirene - só que de jeitos menos bruscos. A lei da nossa audição é essa: repetiu mais do que umas 20 vezes/segundo, virou nota.</p>
<!--<p style="font-family:Verdana;font-size:16px">E o que seriam jeitos menos bruscos?</p>
<p style="font-family:Verdana;font-size:16px">B.: A corda de violão, a prega vocal, a pele de tambor... todos balançam repetidamente ao invés de se chocar repetidamente com algo.</p>-->
<p style="font-family:Verdana;font-size:16px">Ainda não acredito!</p>
<p style="font-family:Verdana;font-size:16px">B.: Observe a trama de um tecido. Se você arrastar uma unha sobre ele, vai estar atingindo diversos fios por segundo. Observe como a nota que você ouve é aguda o tanto mais rápido você arrasta sua unha.</p>

Na demonstração a seguir, Pierre Schaeffer (no absolutamente necessário Solfejo do Objeto Sonoro, de 1966) chama à atenção 3 fenômenos diferentes na escuta ao transformarmos sons musicais em notas musicais através de sua repetição cada vez mais rápida. O material escolhido para ser repetido influencia o _timbre_ da nota ouvida e a este material Schaeffer chama _grão_: <a href="http://tramausp.com.br/_trabalhos/001solfege.html#item4">http://tramausp.com.br/_trabalhos/001solfege.html#item4</a>. 

_Obs 1.: Estamos ignorando o som do motor e das ressonâncias do equipamento **por enquanto**._
_Obs 2.: E a resposta da pergunta da seção então é: escutamos a nota Lá (440 Hz) - isso mesmo, tocamos a corda Mi e ouvimos a nota Lá_.

<!--------------------------------------------------------------------------------------------------->
<p>&nbsp;</p> <!-- TODO solve this formatting issue in the CSS... -->
<h4 id="pratica">Prática</h4> <!-- TODO FIXME - the template was jumping to h3 (we should not jump h's), and I'm jumping even more, because of fonte size... -->

O patch abaixo é nosso primeiro esboço. Clique no botão para mostrar os controles aqui desta postagem para interagir com ele. Em seguida conversaremos sobre como ele funciona.

  <div id="loading">Loading ...</div>
  <button id="startButton">Clique para iniciar</button>
  
  <div id="controls">
    <form>
      <table>
      <tr>
      <td><input type="range" min="0" max="110" id="freq" value="0"></td><td>Frequência: <span id="demo"></span></td><td style="font-family:Verdana;font-size:16px"> (valor será recebido no patch em <b>[r freq]</b>)</td>
      </tr>
      </table>
      <!--<input type="text" id="freq" />
      <input type="submit" value="Enviar nota MIDI" />-->
    </form>
    <form>
      <table>
      <tr>
      <td><input type="button" value="Desligar" onclick="desligar()"></td><td></td><td style="font-family:Verdana;font-size:16px"> (será recebido no patch um bang em <b>[r desliga]</b>)</td>
      </tr>
      </table>
      <!--<input type="submit" id="desliga" value="Desligar" />-->
    </form>
  </div>

  <script>
  var slider = document.getElementById("freq");
  var output = document.getElementById("demo");
  output.innerHTML = slider.value;

  slider.oninput = function() {
    output.innerHTML = this.value;
    Pd.send('freq', [parseFloat(this.value)]);
  }
  </script>

  <script type="text/javascript">
    function desligar(){
      Pd.send('desliga', ["bang"]);
    }
  </script>

  <!-- Gambiarra... imagem do patch ao inves de renderizar o SVG - tudo porque arrays nao estao sendo renderizados ...-->
  <img src="{{ site.baseurl }}/assets/images/pd-cortador1.png"/>
  
  <div id="svg"></div>

  <script type="text/javascript">
    
    webPdExamples.init()

    /*$('form').submit(function(event) {
      event.preventDefault()
      Pd.send('MIDI_note', [parseFloat($('#MIDI_note').val())])
    })*/

    var patch
    $.get('../assets/pd/cortador-1.pd', function(mainStr) {
      // Loading the patch
      patch = Pd.loadPatch(mainStr)

      //webPdExamples.patchLoaded(mainStr)
      // Show start button
      $('#loading').fadeOut(200, function() { $('#startButton').fadeIn() })
    })

  </script>


OK. Agora talvez você ache mais confortável rodar o patch em outra janela enquanto lê o texto aqui. Se for o caso, clique <a href="{{ site.baseurl }}/assets/pd/cortador-1.pd">aqui</a> para baixá-lo e abrir no seu Pure Data.

Antes de mais nada, precisamos do som de um impacto da lâmina. Podemos levar um equipamento a um lugar isolado e captar com um bom microfone. Ou procurar um som desses em algum repositório como freesound.org. Ou ser bem mais práticos, começar do simples e tentar captar o essencial do fenômeno.

Um som de impacto seco (sem grandes ressonâncias) consiste em um pico de amplitude que decresce rapidamente (sabemos isso já de ouvido). Vamos implementar usando um objeto _array_:
* Menu Put->Array (ou atalho Shift+Ctrl+A)
* e desenhamos no array (lembrete: temos que estar no modo de execução, não de edição. Para alternar entre os dois modos, podemos ir ao menu Edit->Edit Mode ou Ctrl+E):

<img src="{{ site.baseurl }}/assets/images/pd-cortador-1-impulso.png"/>

Ao criar o array, vemos que, por padrão, cada ponto pode assumir valores entre -1 e 1. Esse é o padrão da escala em áudio digital. Valores fora dessa escala vão _clipar_ o som. Para facilitar seu trabalho de desenhar no array1, você pode enviar a mensagem <i>;array1 const 0</i>, para zerar todos os elementos do array1 (ou qualquer que seja o nome que você deu).

Para tratar esses valores como um **sample** a ser repetido, vamos criar um objeto [tabread4~]. Para enviar esses valores que estão no array, enviamos a mensagem <i>set array1</i> para o [tabread4~].

<h5 id="tabread-sampler">[tabread4~], nosso sampler</h5>

Pelo "~", já sabemos que é um objeto que emite um sinal. Lembre que sinais não precisam de nenhuma interação, eles são produzidos continuamente.

Qual valor [tabread4~] emitirá é definido pelo valor recebido no seu inlet, encarado como índice, iniciando do zero. Ou seja, se [tabread4~] recebe 0, emite o 1<sup><u>o</u></sup> elemento do array guardado (que é o array1). Se recebe 1, emite o 2<sup><u>o</u></sup> elemento de array1, etc. Se recebe 99, emite o 100<sup><u>o</u></sup> elemento de array1 (que é o último, já que criamos array1 com 100 elementos).

Por isso usamos o objeto [phasor~]. Este é um oscilador cujo sinal emitido é uma linha de 0 a 1. Quando multiplicamos sua saída por 99, agora temos uma linha de 0 a 99. Ou seja, ao entrar em [tabread4~] varremos todos os seus elementos. E quantas vezes por segundo isso acontece? Quantas vezes por segundo phasor repetir-se, ou seja, sua frequência.

Para termos o efeito de ligar e desligar o cortador, aplicamos [line~], para que a frequência desejada não mude de sopetão, mas transicione, obtendo o nosso glissando. Veja que as mensagens que mandamos para gerar sinais de linha com [line~] têm como 2<sup><u>o</u></sup> parâmetro o número 1000: é a quantidade de milisegundos que durará a linha. Futuramente podemos controlar esse tempo também para ter transições mais rápidas ou demoradas - podem depender do intervalo de frequência a percorrer, por exemplo.

A dica final: o Help do Pd vale ouro, use e abuse! É só clicar com o botão direito em um objeto e ir em Help. Tem também o Help geral no menu.

<!--------------------------------------------------------------------------------------------------->
<p>&nbsp;</p> <!-- TODO solve this formatting issue in the CSS... -->
<h4 id="melhoras">Algumas melhoras</h4> <!-- TODO FIXME - the template was jumping to h3 (we should not jump h's), and I'm jumping even more, because of fonte size... -->

<h5 id="riqueza-harmonica">Riqueza harmônica</h5>

Como comentamos <a href="#qual-nota">ali em cima</a>, podemos modelar ainda o som do motor e as ressonâncias no equipamento. Podemos experimentar essas melhoras com filtragens dentro do próprio software de áudio da nossa preferência quando transformarmos nosso cortador em um plugin nas próximas semanas... ou podemos modelar por aqui mesmo. Por agora seguiremos adiante para chegar logo no plugin.

Quem tem interesse em síntese de áudio, pode ver as implementações em Pure Data de sons de motores do [Sound Design Toolkit (patches de Pure Data e de Max/MSP)](https://mitpress.mit.edu/books/designing-sound) ou do livro [Designing Sound, de Andy Farnell](https://mitpress.mit.edu/books/designing-sound) (inclui os patches de Pure Data no site). 

<h5 id="gestual">"Gestual" da lâmina</h5>

A _forma_ com a qual nossa lâmina ganha e perde velocidade é muito importante. Isso porque boa parte do que entendemos como timbre é determinado pelas características dinâmicas do som, i.e., a forma como ele se desenrola no tempo - principalmente durante seu início (a que chamamos _ataque_). É esse ataque que está sendo trabalhado quando um violonista escolhe de que forma vai lixar as unhas da mão direita e em que ângulo vai atingir as cordas; quando um pianista trabalha o "peso" de seu toque durante o breve intervalo de tempo onde o martelo dentro do instrumento começa a entrar em contato com a corda; etc. E é por _nossa audição estar automaticamente sempre imaginando os movimentos_ por trás dos sons que uma performance musical **expressiva** tem muito mais a ver com essa breve trajetória do nascimento de cada som do que com o conteúdo de harmônicos - ao menos na opinião deste que aqui escreve.

Fica a chamada para os próximos trabalhos!

<!--------------------------------------------------------------------------------------------------->
<p>&nbsp;</p> <!-- TODO solve this formatting issue in the CSS... -->
<h4 id="mais">Mais minhocas na cabeça</h4> <!-- TODO FIXME - the template was jumping to h3 (we should not jump h's), and I'm jumping even more, because of fonte size... -->

Baixe o <a href="{{ site.baseurl }}/assets/pd/cortador-1.pd">patch</a> e experimente fazer outros desenhos de forma de onda no array1. O que acontece com o som se você desenhar algo parecido com um seno? E algo parecido com dois ciclos de seno? Ou dois ciclos de impulso? O que acontece quando o 1<sup><u>o</u></sup> e o último elemento de array1 são muito diferentes? Aliás, o que acontece sempre que há variações muito grandes entre um ponto e outro?

Tudo isso revela vários assuntos sobre a relação entre forma de onda e as frequências presentes, que veremos na <a href="{{ site.baseurl }}/pd-cortador2">próxima postagem!</a>

<!--------------------------------------------------------------------------------------------------->
<p>&nbsp;</p> <!-- TODO solve this formatting issue in the CSS... -->
<h4 id="materiais">Materiais</h4> <!-- TODO FIXME - the template was jumping to h3 (we should not jump h's), and I'm jumping even more, because of fonte size... -->

* [Solfejo do Objeto Sonoro - versão em Português](http://tramausp.com.br/_trabalhos/001solfege.html)
* [Roda de Savart](https://www.youtube.com/watch?v=znVcmChq_1M) - Um tipo de sirene. No séc. XIX foi o dispositivo que demonstrou a relação entre frequência e altura musical 
* [Instrumento musical por Bart Hopkin](https://www.youtube.com/watch?v=WSWG5Wv6fLM), feito de 33 rodas de savart. Hilariante ;)
* [Sound Design Toolkit (Pure Data)](http://soundobject.org/SDT)
* [Andy Farnell's Designing Sound (patches de Pure Data gratuitos no site)](https://mitpress.mit.edu/books/designing-sound)
Aos programadores e aventureiros:
* [Código-fonte desta página](https://github.com/brizolara/brizolara.github.io). O patch interativo de Pd usa:
  - [WebPd](https://github.com/sebpiq/WebPd), versão do Pure Data para o navegador
  - [pd-fileutils](https://github.com/sebpiq/pd-fileutils). Algumas utilidades para uso do Pd em web. Só não estamos usando para exibir nossos patches porque o objeto array não está sendo desenhado no momento...

<!--------------------------------------------------------------------------------------------------->

  <!--</body>
</html>-->

