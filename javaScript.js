
let vez;
let posicaoTabuleiro = [];
let ultimoClick = []
let casasMarcadas = []
let c = 0

function newGame(){
    if (vez == undefined){
        document.getElementById('escolhaUmLado').innerHTML = 'Escolha um lado'
        document.getElementById('escolhaUmLado').style.opacity = 1;
        return
    }
    setTimeout(mostrarTabuleiro, 1400);
    document.getElementById('esconder').classList.add('hidden');
    document.getElementById('tabuleiroo').classList.add('showTabu');
    let x,y


    for (x = 1; x < 9; x++){
        posicaoTabuleiro[x] = []
        for (y = 1; y < 9; y++){
            posicaoTabuleiro[x][y] = []
            posicaoTabuleiro[x][y]['tipo'] = false;
            posicaoTabuleiro[x][y]['cor'] = false;
        }
    }

    // POSICIONA AS PEÇAS BRANCAS NO ARRAY
    posicaoTabuleiro[1][2]['tipo'] = 'normal'; posicaoTabuleiro[1][2]['cor'] = 'branca';
    posicaoTabuleiro[1][4]['tipo'] = 'normal'; posicaoTabuleiro[1][4]['cor'] = 'branca';
    posicaoTabuleiro[1][6]['tipo'] = 'normal'; posicaoTabuleiro[1][6]['cor'] = 'branca';
    posicaoTabuleiro[1][8]['tipo'] = 'normal'; posicaoTabuleiro[1][8]['cor'] = 'branca';

    posicaoTabuleiro[2][1]['tipo'] = 'normal'; posicaoTabuleiro[2][1]['cor'] = 'branca';
    posicaoTabuleiro[2][3]['tipo'] = 'normal'; posicaoTabuleiro[2][3]['cor'] = 'branca';
    posicaoTabuleiro[2][5]['tipo'] = 'normal'; posicaoTabuleiro[2][5]['cor'] = 'branca';
    posicaoTabuleiro[2][7]['tipo'] = 'normal'; posicaoTabuleiro[2][7]['cor'] = 'branca';

    posicaoTabuleiro[3][2]['tipo'] = 'normal'; posicaoTabuleiro[3][2]['cor'] = 'branca';
    posicaoTabuleiro[3][4]['tipo'] = 'normal'; posicaoTabuleiro[3][4]['cor'] = 'branca';
    posicaoTabuleiro[3][6]['tipo'] = 'normal'; posicaoTabuleiro[3][6]['cor'] = 'branca';
    posicaoTabuleiro[3][8]['tipo'] = 'normal'; posicaoTabuleiro[3][8]['cor'] = 'branca';

    // POSICIONA AS PEÇAS PRETAS NO ARRAY

    posicaoTabuleiro[6][2]['tipo'] = 'normal'; posicaoTabuleiro[6][2]['cor'] = 'preta';
    posicaoTabuleiro[6][4]['tipo'] = 'normal'; posicaoTabuleiro[6][4]['cor'] = 'preta';
    posicaoTabuleiro[6][6]['tipo'] = 'normal'; posicaoTabuleiro[6][6]['cor'] = 'preta';
    posicaoTabuleiro[6][8]['tipo'] = 'normal'; posicaoTabuleiro[6][8]['cor'] = 'preta';

    posicaoTabuleiro[7][1]['tipo'] = 'normal'; posicaoTabuleiro[7][1]['cor'] = 'preta';
    posicaoTabuleiro[7][3]['tipo'] = 'normal'; posicaoTabuleiro[7][3]['cor'] = 'preta';
    posicaoTabuleiro[7][5]['tipo'] = 'normal'; posicaoTabuleiro[7][5]['cor'] = 'preta';
    posicaoTabuleiro[7][7]['tipo'] = 'normal'; posicaoTabuleiro[7][7]['cor'] = 'preta';

    posicaoTabuleiro[8][2]['tipo'] = 'normal'; posicaoTabuleiro[8][2]['cor'] = 'preta';
    posicaoTabuleiro[8][4]['tipo'] = 'normal'; posicaoTabuleiro[8][4]['cor'] = 'preta';
    posicaoTabuleiro[8][6]['tipo'] = 'normal'; posicaoTabuleiro[8][6]['cor'] = 'preta';
    posicaoTabuleiro[8][8]['tipo'] = 'normal'; posicaoTabuleiro[8][8]['cor'] = 'preta';

    ultimoClick['x'] = 0;
    ultimoClick['x']['y'] = 0;
    ultimoClick['cor'] = false;
    ultimoClick['tipo'] = false;
}

function ladoEscolher(lado){
    if(lado == 'branca'){
        document.getElementById('colocarBranca').classList.add('escolhido');
        document.getElementById('colocarPreta').classList.remove('escolhido');
        document.getElementById('escolhaUmLado').innerHTML = 'Cor branca escolhida';
        document.getElementById('escolhaUmLado').style.opacity = 1;
        vez = lado;
        return
    } else {
        document.getElementById('colocarBranca').classList.remove('escolhido');
        document.getElementById('colocarPreta').classList.add('escolhido');
        document.getElementById('escolhaUmLado').innerHTML = 'Cor preta escolhida';
        document.getElementById('escolhaUmLado').style.opacity = 1;
        vez = 'preta';
        return
    }
}

function mostrarTabuleiro(){
    document.getElementById('tabuleiroo').style.width = "auto";
    document.getElementById('tabuleiroo').style.height = "auto";
}

function verificarClick(a,b){
    c=0
    if (posicaoTabuleiro[a][b]['cor'] != vez && document.getElementById('t'+(a)+(b)).style.backgroundColor != 'rgb(178, 34, 34)'){   /// VERIFICA SE A PEÇA TEM A COR DA VEZ QUE PODE JOGAR
        console.log('nao é sua vez');
        return;
    }

    if (ultimoClick['tipo'] != false && ultimoClick['x'] == a && ultimoClick['y'] == b){  /// VERIFICA SE o CLICK FOI NA MESMA PECA
        return
    }

    if (casasMarcadas.length > 0 && ultimoClick['cor'] == posicaoTabuleiro[a][b]['cor']){
        limparBoard();
    }
    if (document.getElementById('t'+(a)+(b)).style.backgroundColor == 'rgb(178, 34, 34)'){
        if (ultimoClick['tipo'] != false && ultimoClick['x'] != a && ultimoClick['y'] != b){         
        movimentarPeca(a,b);
        limparBoard() /// LIMPA AS CASAS MARCADAS EM VERMLELHO ANTES DE MOSTRAR AS PROXIMAS JOGADAS
        return;
        }
    }

    if (posicaoTabuleiro[a][b]['tipo'] == 'normal' && posicaoTabuleiro[a][b]['cor'] == 'preta'){
        ultimoClick['x'] = a;
        ultimoClick['y'] = b;
        ultimoClick['cor'] = posicaoTabuleiro[a][b]['cor'];
        ultimoClick['tipo'] = posicaoTabuleiro[a][b]['tipo'];
        let p = 1
        for(p; verificarLancePreto(a-1,b+1,p);p++);
        for(p; verificarLancePreto(a-1,b-1,p);p++);
    }

    else if (posicaoTabuleiro[a][b]['tipo'] == 'normal' && posicaoTabuleiro[a][b]['cor'] == 'branca'){
        ultimoClick['x'] = a;
        ultimoClick['y'] = b;
        ultimoClick['cor'] = posicaoTabuleiro[a][b]['cor'];
        ultimoClick['tipo'] = posicaoTabuleiro[a][b]['tipo'];
        for(let p = 1; verificarLancePreto(a+1,b-1);p++);
        for(let p = 1; verificarLancePreto(a+1,b+1);p++);
    }

}

function verificarLancePreto(pa,pb,p){
    c++
    if(pa > 0 && pa < 9 && pb > 0 && pb < 9){
        if(posicaoTabuleiro[pa][pb]['cor'] != false && posicaoTabuleiro[pa][pb]['cor'] != ultimoClick['cor']){
            for( let j = 1; j < 50; j++){

            }
        }

        if(posicaoTabuleiro[pa][pb]['tipo'] == false){
            casasMarcadas[c] = document.getElementById('t'+(pa)+(pb));
            document.getElementById('t'+(pa)+(pb)).style.backgroundColor = 'rgb(178, 34, 34)';
        }
    }
}

function movimentarPeca(x,v){
    
    posicaoTabuleiro[x][v]['tipo'] = ultimoClick['tipo'];
    posicaoTabuleiro[x][v]['cor'] = ultimoClick['cor'];
    posicaoTabuleiro[ultimoClick['x']][ultimoClick['y']]['tipo'] = false;
    posicaoTabuleiro[ultimoClick['x']][ultimoClick['y']]['cor'] = false;
    document.getElementById('t'+(x)+(v)).classList.remove('vazio','cor'+'-'+'branca','cor'+'-'+'preta');
    if (ultimoClick['cor'] == 'preta'){
        document.getElementById('t'+(x)+(v)).style.backgroundColor = '';
        document.getElementById('t'+ (x)+(v)).classList.add('cor'+'-'+'preta');
    } else if (ultimoClick['cor'] == 'branca'){
        document.getElementById('t'+(x)+(v)).style.backgroundColor = '';
        document.getElementById('t'+ (x)+(v)).classList.add('cor'+'-'+'branca');
    }
    document.getElementById('t'+ultimoClick['x']+ultimoClick['y']).classList.remove('vazio','cor'+'-'+'branca','cor'+'-'+'preta');
    document.getElementById('t'+ultimoClick['x']+ultimoClick['y']).classList.add('vazio');
    if (vez == 'branca'){
        document.getElementById('tabuleiroo').classList.add('brancaVez');
        document.getElementById('tabuleiroo').classList.remove('pretoVez');
    } else if (vez == 'preto'){
        document.getElementById('tabuleiroo').classList.add('pretoVez');
        document.getElementById('tabuleiroo').classList.remove('brancaVez');
    }
    document.getElementById('t'+ultimoClick['x']+ultimoClick['y']).classList.remove('cor'+'-'+'branca','cor'+'-'+'preta');
    document.getElementById('t'+ultimoClick['x']+ultimoClick['y']).classList.add('vazio');
    limparBoard();
}

function limparBoard(){

    if (casasMarcadas.length > 0){
        for (let k = 1 ; k < casasMarcadas.length; k++){
            if(casasMarcadas[k] != undefined){
                casasMarcadas[k].style.backgroundColor = '';
            }
        }
        casasMarcadas = [];
    }
    ultimoClick['x'] = 0;
    ultimoClick['y'] = 0;
    ultimoClick['cor'] = false;
    ultimoClick['tipo'] = false;
}