
var documents = [{
    "id": 0,
    "url": "http://localhost:4000/brizolara.github.io/en/404/",
    "title": "404",
    "body": "404 Page does not exist!Please use the search bar at the top or return to the Home page! "
    }, {
    "id": 1,
    "url": "http://localhost:4000/brizolara.github.io/about",
    "title": "About / Portfolio / CV / Release",
    "body": "Compositor, desenvolvedor e cientista. No momento pesquiso ligações do movimento humano com síntese de áudio (principalmente síntese a partir de primeiros princípios) e para visuais, tanto explícita quanto por IA (o Elemental vem dessa pesquisa). Tenho criado música instrumental (choro,  jazz , etc) e desenho de áudio/trilha sonora/computação criativa em trabalhos com outros artistas e performers por alguns anos agora - músicos, DJs, atores, dançarinos. . . Morei no Brasil até 2018, agora estou em doutorado na Université Bretagne Sud, França.  Também tenho uma longa experiência em desenvolvimento de software na indústria médica, com um mestrado em Física Médica (UFSC-SC). Este site é uma versão mais completa do meu portfolio, mais recursos gratuitos e blog. &nbsp; Portfolio e Currículo:       CV Músico/artista/desenvolvedor    &nbsp;&nbsp;    CV Desenvolvedor/cientista        Portfolio artístico (PDF | Google Docs)    &nbsp;&nbsp;    Portfolio desenvolvedor/cientista  &nbsp; Release (artístico): Tiago é compositor, arranjador e pesquisador, criando música livre, instrumental, canção, experimental e arte sonora, com forte influência brasileira e sul-americana. Entre 2005 e 2015 apresentou composições em festivais em SC, PR e SP, atuou como músico, ministrante e proponente em projetos de música popular e folclórica - com destaque para apresentações artísticas em Santiago-Chile (2013) e Lima-Peru (2015) e dois CDs independentes. Desde 2016 vem atuando em música, arte sonora, desenvolvimento para visuais, dança estendida e luteria digital com o R. I. S. C. O. e com instalações digitais interativas e trilha / desenho de som com o Atelier Digital O Sítio, entre outros parceiros. Nessas áreas foi também ministrante de cursos e oficinas e professor na Fatenp-SC. Atualmente é doutorando em Computação e Movimento Humano na Université Bretagne Sud (França), pesquisando aplicações computacionais audiovisuais interativas para performance de palco. É mestre em Física pela UFSC-SC, especialista em Desenvolvimento de Jogos Digitais pela PUC-PR, foi aluno de Composição Musical na UEM-PR e cursou as disciplinas Orchestration I e Music Composition for Film, TV and Games (Berklee School of Music Online), além de consultor em desenvolvimento de software para a área médica. "
    }, {
    "id": 2,
    "url": "http://localhost:4000/brizolara.github.io/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 3,
    "url": "http://localhost:4000/brizolara.github.io/",
    "title": "Home",
    "body": "           Destaques:                                                                                                                                                                                                                                       Latest Release                              :               Ouça Quanto Dura Uma Fita de Viola em Tempo de Reis? no seu app preferido: https://ps. onerpm. com/2409364297:                                                                       videoaudio                                                                                                                                                                                                                                                                                                              SoMo                              :               Um instrumento musical/audiovisual baseado em movimento desenvolvido utilizando as ferramentas livres de código aberto Pure Data e Processing. O SoMo pode ser montado com um. . . :                                                                       videopapersource codePDF                                                                                                                                                                                                                                                                                                              Limiar                              :               Uma experiência estética imersiva interativa, que permite a contemplação tanto ativa quanto observar outras pessoas na obra, sempre habitando o Limiar entre mundos de aquarela. . . :                                                                       video                                                                                                                                                                                                                                                                                                    Oficina - SomaRumor 2021                              :               Esta oficina foi resultado da minha residência artística no SomaRumor II - Encontro Latino-Americano de Arte Sonora, em outubro/2021. Foi voltada a compositores, artistas sonoros,. . . :                                                                       video                                                                                                                              Recente:                                                                                                                               Baixar portfolio              :       Baixar o Portfolio Artístico - PDF. Acessar o portfolio (Google Docs). Ou clique aqui para acessar currículo e portfolio técnico-científicos (softwares médicos, jogos digitais, currículo acadêmico em física médica, computação. . . :                               PDF                                                                                                                                               Elemental              :       Vento, chuva e trovão, incorporados como instrumentos sonoros/musicais. O Elemental é um novo desenvolvimento em expressão musical, que une avanços recentes em desenho de áudio em tempo real via síntese. . . :                               videopaperPDF                                                                                                                                               R. I. S. C. O.               :       Após o 1o R. I. S. C. O. , um grupo homônimo foi formado para seguir produzindo e pesquisando dentro de um caldo que inclui captação de som direto, live electronics, sintetizadores analógicos, pesquisa em. . . :                               videopaper                                                                                                                                               Atelier Digital              :       O Atelier Digital produz arte com atravessamentos digitais e promove eventos de criação e formação com artistas locais e convidados. A equipe inicial, em 2017, foi composta por Alexandre Chaves,. . . :                               videopaper                                                                                                                                               Primeiras Milongas - com Iara Germer              :       Ouça no seu aplicativo preferido: https://ps. onerpm. com/3598322120:                               videoaudio                                                                                                                                               O Efeito do Observador              :       Espelho, tela de pintura, filme fotográfico. Mudar a iluminação do ambiente, passear com objetos na frente do “espelho” (câmera), mover-se em diferentes ritmos… tudo faz criar continuamente nessa tela que. . . :                               interactivesource code                               &laquo; Prev       1        2      Next &raquo; "
    }, {
    "id": 4,
    "url": "http://localhost:4000/brizolara.github.io/page2/",
    "title": "Home",
    "body": "{% if page. url == “/” %}           {{ site. featured_description[site. active_lang] }}:       {% for post in site. posts %}        {% if post. featured == true %}      {% include featuredbox. html %}    {% endif %}  {% endfor %}  {% endif %}       {{ site. recent_description[site. active_lang] }}:         {% for post in paginator. posts %}      {% include postbox. html %}    {% endfor %}    {% include pagination. html %}"
    }, {
    "id": 5,
    "url": "http://localhost:4000/brizolara.github.io/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 6,
    "url": "http://localhost:4000/brizolara.github.io/portfolio/",
    "title": "Baixar portfolio",
    "body": "2021/05/21 -  Baixar o Portfolio Artístico - PDF.  Acessar o portfolio (Google Docs).  Ou clique aqui para acessar currículo e portfolio técnico-científicos (softwares médicos, jogos digitais, currículo acadêmico em física médica, computação e música). "
    }, {
    "id": 7,
    "url": "http://localhost:4000/brizolara.github.io/fita-viola-lancamento/",
    "title": "Latest Release",
    "body": "2020/10/06 - Ouça Quanto Dura Uma Fita de Viola em Tempo de Reis? no seu app preferido: https://ps. onerpm. com/2409364297 Ouça no YouTube… … ou a versão solo: Ficha técnica: Tiago Brizolara: música, violão 7 cordas, edição. Marcelo Pimenta: percussão. Tiago Suminsky: edição, mixagem, masterização, captação da percussão. Dimi Camorlinga: captação do violão. Ana Carpes: capa, sobre quadro de vídeo de Dimi Camorlinga. "
    }, {
    "id": 8,
    "url": "http://localhost:4000/brizolara.github.io/elemental/",
    "title": "Elemental",
    "body": "2020/09/01 - Vento, chuva e trovão, incorporados como instrumentos sonoros/musicais. O Elemental é um novo desenvolvimento em expressão musical, que une avanços recentes em desenho de áudio em tempo real via síntese (ou seja, sem sons pré-gravados) e novas interfaces homem-computador, para apropriar sons naturais num eixo de expressão que atravessa desde sons como na natureza até a experiência abstrata, passando pelo que o autor, Tiago Brizolara, chama de performance surreal: um território novo onde os sons naturais são dobrados, moldados, pela trajetória impressa pelo corpo do executante. No vídeo a multiartista recifense Maria Flor testa o instrumento pela primeira vez. Um primeiro artigo explica como o Elemental foi implementado, em termos de sua síntese de áudio e mapeamentos entre gesto e som, e mostra os resultados de duas validações: em Plouhinec-França, com público geral, e, em Recife-Brasil, com um público composto em sua grande maioria de músicos, dançarinos, designers de instrumentos musicais digitais e áreas afins. A maioria dos participantes considerou o Elemental adequado para aplicações expressivas, seja relativas primariamente a som (como música, por exemplo), corpo (por exemplo, dança) ou performances mistas. O instrumento ainda não estreou nos palcos. Um vídeo documentando o processo de composição para uma performance, onde uso o Elemental em forma de plug-in VSTi dentro do software Reaper pode ser visto abaixo:     View this post on Instagram      A post shared by Tiago Brizolara (@tiago. brizolara) Em breve deve sair um segundo artigo (e outra publicação aqui no site), situando o instrumento esteticamente, falando sobre música eletroacústica, cognição, o Elemental VSTi, a versão para celular e com uma proposta de metodologia para desenvolvimento de instrumentos digitais para performance surreal. Em breve também vou falar sobre e disponibilizar links para a oficina que ministrei como resultado de minha residencia artística no II Encontro Latinoamericano de Arte Sonora - SomaRumor, em Outubro de 2021. Materiais: Tiago Brizolara, Sylvie Gibet, and Caroline Larboulette. 2020. Elemental: a Gesturally Controlled System to Perform Meteorological Sounds. Proceedings of the International Conference on New Interfaces for Musical Expression, Birmingham City University, pp. 470–476. [BibTex] Agradecimentos: Para além de minhas orientadoras Sylvie Gibet e Caroline Larboulette, agradeço a João Tragtenberg e à Universidade Federal de Pernambuco, nas pessoas dos professores Filipe Calegario e Giordano Cabral pela parceria na mobilidade internacional que desenvolvi junto ao Centro de Informática. A mobilidade foi financiada pelo departamento de Morbihan e a região Bretagne, no contexto de meu doutorado na Université Bretagne Sud (França). "
    }, {
    "id": 9,
    "url": "http://localhost:4000/brizolara.github.io/SoMo/",
    "title": "SoMo",
    "body": "2020/08/30 -  Um instrumento musical/audiovisual baseado em movimento desenvolvido utilizando as ferramentas livres de código aberto Pure Data e Processing. O SoMo pode ser montado com um computador pessoal comum e uma webcam de vídeo de baixo custo - usando a PSEye®, obtivemos uma responsividade de até 100 quadros analisados por segundo e áudio gerado em tempo real. Um feedback visual auxilia o executante e serve esteticamente à performance. O instrumento foi desenvolvido por Tiago Brizolara e Marcos Moritz e um artigo descrevendo o sistema foi publicado no Simpósio Brasileiro de Computação Musical em 2015: http://compmus. ime. usp. br/sbcm2015/files/proceedings-print. pdf O código-fonte se encontra em https://bitbucket. org/mmoritz/somo  Yllu representa em uma de suas formas a música que produzem as pequenas asas em vôo … Essa voz tem semelhança a outra mais importante: Illa dá nome a certa espécie de luz e aos monstros que nasceram feridos pelos raios lunares. Illa é um menino de duas cabeças ou um bezerro que nasce decapitado; ou um penhasco gigante, todo negro e lúcido, cuja superfície aparecera cruzada por uma veia larga de rocha branca, de opaca luz; é também uma plantação onde as fileiras de milho se entrecruzam ou formam redemoinhos; são illas os touros míticos que habitam o fundo dos lagos solitários, das altas lagoas rodeadas de totora, povoadas por patos negros. Todos os illas causam o bem ou o mal, mas sempre em grau sumo. Tocar um illa e morrer ou alcançar a ressurreição é possível. Essa voz illa tem algum parentesco fonético e uma comunhão interna de sentido com a terminação Yllu”    José Maria Arguedas, In. Los Ríos Profundos (tradução livre).  Fotos: [Em cima] O SoMo na performance Yllu, com o grupo R. I. S. C. O. (Florianópolis-SC, 2017). [Embaixo] Com o R. I. S. C. O. em apresentação no Centro Cultural Azambuja (Brusque-SC, 2018). "
    }, {
    "id": 10,
    "url": "http://localhost:4000/brizolara.github.io/RISCO/",
    "title": "R.I.S.C.O.",
    "body": "2020/08/29 - Após o 1o R. I. S. C. O. , um grupo homônimo foi formado para seguir produzindo e pesquisando dentro de um caldo que inclui captação de som direto, live electronics, sintetizadores analógicos, pesquisa em computação musical, luteria digital, VJing e dança expandida. Destacam-se:Apresentação no Festival Internacional Strangloscope 2017 - Museu da Imagem e do Som (MIS-SC), Centro Integrado de Cultura (CIC) - Florianópolis, SC. Concerto no Teatro Azambuja (Brusque-SC), selecionado pelo edital Estação Cultural 2018, da Fundação Catarinense de Cultura. Performance Yllu - 2017 e 2018. O Sítio Arte Educação E Tecnologia. Florianópolis-SC. “Yllu representa em uma de suas formas a música que produzem as pequenas asas em vôo … Essa voz tem semelhança a outra mais importante: Illa dá nome a certa espécie de luz e aos monstros que nasceram feridos pelos raios lunares. Illa é um menino de duas cabeças ou um bezerro que nasce decapitado; ou um penhasco gigante, todo negro e lúcido, cuja superfície aparecera cruzada por uma veia larga de rocha branca, de opaca luz; é também uma plantação onde as fileiras de milho se entrecruzam ou formam redemoinhos; são illas os touros míticos que habitam o fundo dos lagos solitários, das altas lagoas rodeadas de totora, povoadas por patos negros. Todos os illas causam o bem ou o mal, mas sempre em grau sumo. Tocar um illa e morrer ou alcançar a ressurreição é possível. Essa voz illa tem algum parentesco fonético e uma comunhão interna de sentido com a terminação Yllu”  José Maria Arguedas, In. Los Ríos Profundos"
    }, {
    "id": 11,
    "url": "http://localhost:4000/brizolara.github.io/Limiar/",
    "title": "Limiar",
    "body": "2020/08/21 - Uma experiência estética imersiva interativa, que permite a contemplação tanto ativa quanto observar outras pessoas na obra, sempre habitando o Limiar entre mundos de aquarela e som. Camadas de aquarelas vão sendo desveladas conforme os visitantes se aproximam, marcando suavemente suas silhuetas. Em algum lugar do Limiar habitam formas luminosas que buscam os pasticipantes e se evadem. A trilha sonora co-interage com alguns elementos gráficos, ligados à presença e interação dos visitantes. A projeção é em formato widescreen e o áudio tem espacialização reativa. Especificamente, 5 aquarelas estão sobrepostas e vão sendo reveladas de acordo com a interação das pessoas com a obra, capturada por um sensor Kinect. Uma aquarela em tons predominantemente alaranjados é revelada pela silhueta dos presentes e também por agentes inteligentes que lembram fogos-fátuos (wisps). Esses agentes possuem um comportamento de movimento inteligente (steering behaviour) que se aproxima dos visitantes em grupo, para, ao se aproximar demais, voltar para um lugar seguro, trazendo uma sensação de obra viva e de sedução. Elementos geométricos atraídos pelos visitantes revelam outras camadas, arrastam consigo o panorama do áudio e também há um elemento geométrico procedural, diferente e único a cada ciclo. Uma aquarela de uma paisagem predominantemente roxa com cactus é revelada por uma máscara circular centrada nos visitantes e cujo tamanho obedece a intensidade da trilha sonora. Quais aquarelas e quais elementos encontram-se presentes são roteirizados pela trilha sonora. O código-fonte da obra foi feito em OpenFrameworks (C++).  Ficha técnica: Instalação audiovisual interativa, ano 2017. Concepção e execução: Atelier Digital (Alexandre Chaves, Kaue Costa, João Aires, Tiago Brizolara). Aquarelas: João Aires. Programação: Kaue Costa, Tiago Brizolara. Trilha sonora (exceto na estréia): Tiago Brizolara, Flora Holderbaum. "
    }, {
    "id": 12,
    "url": "http://localhost:4000/brizolara.github.io/SomaRumor2021/",
    "title": "Oficina - SomaRumor 2021",
    "body": "2020/08/20 - Esta oficina foi resultado da minha residência artística no SomaRumor II - Encontro Latino-Americano de Arte Sonora, em outubro/2021. Foi voltada a compositores, artistas sonoros, instrumentistas, dançarinos, sound designers e curiosos em geral. Nela falamos sobre instrumentalidade, sensores, música eletroacústica, mapeamentos movimento-som e muitos temas relacionados. Os 4 dias de oficina podem ser acessados no canal do evento ou diretamente na playlist abaixo: Durante a residência eu trabalhei duas versões adicionais do Elemental, formando um ecosistema criativo com o instrumento original: O Elemental Mobile - sobre o qual foquei a oficina -, uma versão do instrumento original rodando completamente em aparelho celular, e o Elemental-VSTi (apresentado brevemente na oficina), que permite a composição eletroacústica e idéias para modificações do instrumento, graças aos parâmetros internos da síntese expostos no uso como plugin VST-i dentro de qualquer DAW (Digital Audio Workstation, como Reaper, Pro Tools, Ardour, etc). Essas duas versões do Elemental foram disponibilizadas para os participantes. O SomaRumor II foi um evento admirável. Meus agradecimentos a meu tutor Giuliano Obici, a Flora Holderbaum, a Byron Rodrigues e todos os presentes, com quem tivemos trocas riquíssimas. "
    }, {
    "id": 13,
    "url": "http://localhost:4000/brizolara.github.io/atelier-digital/",
    "title": "Atelier Digital",
    "body": "2018/08/28 - O Atelier Digital produz arte com atravessamentos digitais e promove eventos de criação e formação com artistas locais e convidados. A equipe inicial, em 2017, foi composta por Alexandre Chaves, Kaue Costa, João Aires (também o idealizador) e Tiago Brizolara, membro entre 2017 e 2018 e parceiro desde então.        &nbsp;&nbsp;          "
    }, {
    "id": 14,
    "url": "http://localhost:4000/brizolara.github.io/primeiras-milongas-lancamento/",
    "title": "Primeiras Milongas - com Iara Germer",
    "body": "2018/08/27 - Ouça no seu aplicativo preferido: https://ps. onerpm. com/3598322120 Ou dê uma olhada no YouTube: Lançado em abril de 2020, este EP tem duas milongas, um gênero da cultura gaúcha, da região do Rio da Prata - Argentina e Uruguay - mas também muito produzido no Brasil. Ambas foram feitas de bate-e-pronto: Fiz a música da Milonga para Minha Mãeassim que a Iara Germer me mostrou o poema que ela queria transformar em milonga. E Iara fez a letra da Milonga do Quem Dera enquanto ouvia eu, Flora Holderbaum (violino) e Gilnei Silveira (percussão) ensaiar a música para tocar instrumental no dia seguinte! Eu e Iara, gaúchos do Rio Grande do Sul, decidimos transformar as músicas num EP, convidando o acordeonista Bruno Moritz, com quem gravamos numa ótima tarde no estúdio de Carlos Lacerda, em Florianópolis. Escrevi o arranjo do acordeon na Milonga do Quem, mas as belas e idiomáticas linhas na Milonga para Minha Mãe são improviso do Bruno. A incrível fotografia da capa foi tirada por Núbia Abe, na cachoeira do Rio Salto, município de Águas Mornas (SC). Ficha técnica: Letra e voz: Iara Germer. Música, violão 7 cordas e voz: Tiago Brizolara. Acordeon: Bruno Moritz. Produção do áudio: Jorge Lacerda. Foto: Núbia Abe. "
    }, {
    "id": 15,
    "url": "http://localhost:4000/brizolara.github.io/efeito-do-observador/",
    "title": "O Efeito do Observador",
    "body": "2018/08/26 - Espelho, tela de pintura, filme fotográfico. Mudar a iluminação do ambiente, passear com objetos na frente do “espelho” (câmera), mover-se em diferentes ritmos… tudo faz criar continuamente nessa tela que infinitamente se renova como um filme lentamente impressionado. O efeito do observador é interagir. Colocamos as mãos (versão com controlador LeapMotion. Senão, mouse) para tentar desvelar mais rapidamente o que ocorre no exato momento, como que impressionando o filme mais rapidamente - com efeito, nos aproximamos de algo como um espelho nessa área onde interagimos, mas o aspecto ali se torna oscilante e menos detalhado. Clique para experimentar a versao com mouse e sua webcam Essa obra foi instalada na exposição Experimental #1 (O Sítio Arte, Educação, Tecnologia - Florianópolis/SC) com “espelho” monitor e webcam instalados em parede, mais totem com LeapMotion montado e computador embutido. Agora está reimplementada de modo que, hospedada online, qualquer um possa apreciar/interagir diretamente de um navegador utilizando sua própria webcam. Ficha técnica: Instalação visual interativa, ano 2017. Concepção, programação e execução: Tiago Brizolara. "
    }, {
    "id": 16,
    "url": "http://localhost:4000/brizolara.github.io/pd-cortador1/",
    "title": "Computação Musical - Instrumentalizando um Cortador de Grama - 1",
    "body": "2018/08/25 - O massacre musical da roçadeira elétrica: Como transformar um cortador de grama num instrumento musical digital? As ferramentas tradicionais de produção de áudio (Ableton, Pro Tools, samplers em geral…) podem nos levar até certo ponto em expresividade. Esta série de postagens chama para algo mais:  Abordar desenho de áudio e computação musical usando Pure Data a partir de um nível iniciante; Exercitar diferentes escutas;     Ir além do paradigma de nota musical;    Trabalhar instrumentalidade;     Alçar vôos para além do teclado;    Criar um plugin (e usar nas ferramentas tradicionais de produção áudio - ora, veja só!)A inspiração vem de um encontro do laboratório de Corpo, Som E Tecnologia, coordenado pela profa. Dra. Flora Holderbaum e vinculado neste momento à disciplina de Tecnologia Musical (Ceart-UDESC-SC). Um dos participantes utilizou uma amostra gravada de um som de cortador de grama, inseriu num sampler e aplicou filtragens para construir timbres. Um contrabaixo utilizando esse procedimento, no entanto, não deu bom resultado - vamos apelar então para nossa escuta e entendimento dos fenômenos envolvidos e modelar esse som digitalmente, colhendo os frutos que recém falamos acima.                 Se você nunca produziu com Pure Data, pode assistir esta oficina introdutória (começa aos 43m55s. Assista do começo para exemplos de Pd em performances de todo tipo, além de desenho de áudio e trilha sonora, focando em produção brasileira e florianopolitana):  Que nota eu escuto se eu tocar a corda Mi (660 Hz) 440 vezes por segundo? : Se você sabe a resposta, então você sabe de onde vem a nota (altura musical é o nome correto) de um cortador de grama. O princípio é o mesmo da sirene mecânica (de colégio, de polícia…. ): uma roda dentada ou com pás gira, atingindo um anteparo muitas vezes por segundo. Por exemplo, se o anteparo está sendo atingido 440 vezes/segundo, a gente escuta uma nota Lá (440 Hz. Ora, Hz significa exatamente repetições por segundo!). No caso do cortador, são os dentes da nossa lâmina que atingem o que está sendo cortado. Por isso que ouvimos a altura musical subir em glissando à medida que o giro da lâmina ganha velocidade). Que mágica é essa? Pra entender melhor, nós fomos à Barra da Lagoa falar com seu Bentois: Quer dizer que a repetição de um mero som de duas coisas se chocando vira uma nota musical? É uma imitação que engana nossa percepção? B. : Não é uma imitação. A própria nota musical (altura musical) é que é a invenção da nossa audição. Coisas como a voz, os pássaros e as violas agitam o ar em repetições, do mesmo jeito que uma sirene - só que de jeitos menos bruscos. A lei da nossa audição é essa: repetiu mais do que umas 20 vezes/segundo, virou nota. Ainda não acredito! B. : Observe a trama de um tecido. Se você arrastar uma unha sobre ele, vai estar atingindo diversos fios por segundo. Observe como a nota que você ouve é aguda o tanto mais rápido você arrasta sua unha. Na demonstração a seguir, Pierre Schaeffer (no absolutamente necessário Solfejo do Objeto Sonoro, de 1966) chama à atenção 3 fenômenos diferentes na escuta ao transformarmos sons musicais em notas musicais através de sua repetição cada vez mais rápida. O material escolhido para ser repetido influencia o timbre da nota ouvida e a este material Schaeffer chama grão: http://tramausp. com. br/_trabalhos/001solfege. html#item4. Obs 1. : Estamos ignorando o som do motor e das ressonâncias do equipamento por enquanto. Obs 2. : E a resposta da pergunta da seção então é: escutamos a nota Lá (440 Hz) - isso mesmo, tocamos a corda Mi e ouvimos a nota Lá. &nbsp; Prática: O patch abaixo é nosso primeiro esboço. Clique no botão para mostrar os controles aqui desta postagem para interagir com ele. Em seguida conversaremos sobre como ele funciona. Loading . . . Clique para iniciar            Frequência: (valor será recebido no patch em [r freq])                       (será recebido no patch um bang em [r desliga])              OK. Agora talvez você ache mais confortável rodar o patch em outra janela enquanto lê o texto aqui. Se for o caso, clique aqui para baixá-lo e abrir no seu Pure Data. Antes de mais nada, precisamos do som de um impacto da lâmina. Podemos levar um equipamento a um lugar isolado e captar com um bom microfone. Ou procurar um som desses em algum repositório como freesound. org. Ou ser bem mais práticos, começar do simples e tentar captar o essencial do fenômeno. Um som de impacto seco (sem grandes ressonâncias) consiste em um pico de amplitude que decresce rapidamente (sabemos isso já de ouvido). Vamos implementar usando um objeto array:  Menu Put-&gt;Array (ou atalho Shift+Ctrl+A) e desenhamos no array (lembrete: temos que estar no modo de execução, não de edição. Para alternar entre os dois modos, podemos ir ao menu Edit-&gt;Edit Mode ou Ctrl+E): Ao criar o array, vemos que, por padrão, cada ponto pode assumir valores entre -1 e 1. Esse é o padrão da escala em áudio digital. Valores fora dessa escala vão clipar o som. Para facilitar seu trabalho de desenhar no array1, você pode enviar a mensagem ;array1 const 0, para zerar todos os elementos do array1 (ou qualquer que seja o nome que você deu). Para tratar esses valores como um sample a ser repetido, vamos criar um objeto [tabread4~]. Para enviar esses valores que estão no array, enviamos a mensagem set array1 para o [tabread4~]. [tabread4~], nosso samplerPelo “~”, já sabemos que é um objeto que emite um sinal. Lembre que sinais não precisam de nenhuma interação, eles são produzidos continuamente. Qual valor [tabread4~] emitirá é definido pelo valor recebido no seu inlet, encarado como índice, iniciando do zero. Ou seja, se [tabread4~] recebe 0, emite o 1o elemento do array guardado (que é o array1). Se recebe 1, emite o 2o elemento de array1, etc. Se recebe 99, emite o 100o elemento de array1 (que é o último, já que criamos array1 com 100 elementos). Por isso usamos o objeto [phasor~]. Este é um oscilador cujo sinal emitido é uma linha de 0 a 1. Quando multiplicamos sua saída por 99, agora temos uma linha de 0 a 99. Ou seja, ao entrar em [tabread4~] varremos todos os seus elementos. E quantas vezes por segundo isso acontece? Quantas vezes por segundo phasor repetir-se, ou seja, sua frequência. Para termos o efeito de ligar e desligar o cortador, aplicamos [line~], para que a frequência desejada não mude de sopetão, mas transicione, obtendo o nosso glissando. Veja que as mensagens que mandamos para gerar sinais de linha com [line~] têm como 2o parâmetro o número 1000: é a quantidade de milisegundos que durará a linha. Futuramente podemos controlar esse tempo também para ter transições mais rápidas ou demoradas - podem depender do intervalo de frequência a percorrer, por exemplo. A dica final: o Help do Pd vale ouro, use e abuse! É só clicar com o botão direito em um objeto e ir em Help. Tem também o Help geral no menu. &nbsp; Algumas melhoras: Riqueza harmônicaComo comentamos ali em cima, podemos modelar ainda o som do motor e as ressonâncias no equipamento. Podemos experimentar essas melhoras com filtragens dentro do próprio software de áudio da nossa preferência quando transformarmos nosso cortador em um plugin nas próximas semanas… ou podemos modelar por aqui mesmo. Por agora seguiremos adiante para chegar logo no plugin. Quem tem interesse em síntese de áudio, pode ver as implementações em Pure Data de sons de motores do Sound Design Toolkit (patches de Pure Data e de Max/MSP) ou do livro Designing Sound, de Andy Farnell (inclui os patches de Pure Data no site).  Gestual  da lâminaA forma com a qual nossa lâmina ganha e perde velocidade é muito importante. Isso porque boa parte do que entendemos como timbre é determinado pelas características dinâmicas do som, i. e. , a forma como ele se desenrola no tempo - principalmente durante seu início (a que chamamos ataque). É esse ataque que está sendo trabalhado quando um violonista escolhe de que forma vai lixar as unhas da mão direita e em que ângulo vai atingir as cordas; quando um pianista trabalha o “peso” de seu toque durante o breve intervalo de tempo onde o martelo dentro do instrumento começa a entrar em contato com a corda; etc. E é por nossa audição estar automaticamente sempre imaginando os movimentos por trás dos sons que uma performance musical expressiva tem muito mais a ver com essa breve trajetória do nascimento de cada som do que com o conteúdo de harmônicos - ao menos na opinião deste que aqui escreve. Fica a chamada para os próximos trabalhos! &nbsp; Mais minhocas na cabeça: Baixe o patch e experimente fazer outros desenhos de forma de onda no array1. O que acontece com o som se você desenhar algo parecido com um seno? E algo parecido com dois ciclos de seno? Ou dois ciclos de impulso? O que acontece quando o 1o e o último elemento de array1 são muito diferentes? Aliás, o que acontece sempre que há variações muito grandes entre um ponto e outro? Tudo isso revela vários assuntos sobre a relação entre forma de onda e as frequências presentes, que veremos na próxima postagem! &nbsp; Materiais:  Solfejo do Objeto Sonoro - versão em Português Roda de Savart - Um tipo de sirene. No séc. XIX foi o dispositivo que demonstrou a relação entre frequência e altura musical Instrumento musical por Bart Hopkin, feito de 33 rodas de savart. Hilariante ;) Sound Design Toolkit (Pure Data) Andy Farnell’s Designing Sound (patches de Pure Data gratuitos no site)Aos programadores e aventureiros: Código-fonte desta página. O patch interativo de Pd usa:     WebPd, versão do Pure Data para o navegador   pd-fileutils. Algumas utilidades para uso do Pd em web. Só não estamos usando para exibir nossos patches porque o objeto array não está sendo desenhado no momento…    "
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow-lg" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-danger btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><small><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});