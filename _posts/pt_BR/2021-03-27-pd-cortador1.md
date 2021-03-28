---
layout: post
title:  "Computação Musical - Instrumentalizando um Cortador de Grama - 1"
author: tiago
categories: [ pure data, computação musical, desenho de áudio, educativo ]
tags: [ pure data, computer music, audio design, educational ]
image: assets/images/capas/pd-cortador-1.png
description: ""
lang: pt_BR
custom-javascript-list: [assets/js/jquery.min.js, assets/js/webpd-latest.js]
featured: false
hidden: false
hasAudio: true
hasVideo: true
hasPaper: false
hasScore: false
hasInteractivity: false
hasSourceCode: false
hasPDF: false
---

<i>Em construção</i>   

<!--<script src="/brizolara.github.io/assets/js/jquery.js"></script>
<script src="/brizolara.github.io/assets/js/webpd-latest.js"></script>-->
<script>
    var patch
    $.get('{{ site.baseurl }}/assets/pd/cortador-1.pd', function(patchStr) {
        patch = Pd.loadPatch(patchStr)
        Pd.start()
    })
</script>

Licença:
<pre>
</pre>