
let vez;
let posicaoTabuleiro = [];
let ultimoClick = [];
let casasMarcadas = [];
let obrigatorio = false;
let pecaObrigada = []
let c;
let pontosPretas = 12;
let pontosBrancas = 12;
let pecasBrancas = [];
let pecasPretas = [];
let bloquear = false;

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
            posicaoTabuleiro[x][y]['mov'] = false;
        }
    }

    // POSICIONA AS PEÇAS BRANCAS NO ARRAY
    posicaoTabuleiro[1][1]['tipo'] = 'normal'; posicaoTabuleiro[1][1]['cor'] = 'branca'; posicaoTabuleiro[1][1]['mov'] = false;
    posicaoTabuleiro[1][3]['tipo'] = 'normal'; posicaoTabuleiro[1][3]['cor'] = 'branca'; posicaoTabuleiro[1][3]['mov'] = false;
    posicaoTabuleiro[1][5]['tipo'] = 'normal'; posicaoTabuleiro[1][5]['cor'] = 'branca'; posicaoTabuleiro[1][5]['mov'] = false;
    posicaoTabuleiro[1][7]['tipo'] = 'normal'; posicaoTabuleiro[1][7]['cor'] = 'branca'; posicaoTabuleiro[1][7]['mov'] = false;

    posicaoTabuleiro[2][2]['tipo'] = 'normal'; posicaoTabuleiro[2][2]['cor'] = 'branca'; posicaoTabuleiro[2][2]['mov'] = false;
    posicaoTabuleiro[2][4]['tipo'] = 'normal'; posicaoTabuleiro[2][4]['cor'] = 'branca'; posicaoTabuleiro[2][4]['mov'] = false;
    posicaoTabuleiro[2][6]['tipo'] = 'normal'; posicaoTabuleiro[2][6]['cor'] = 'branca'; posicaoTabuleiro[2][6]['mov'] = false;
    posicaoTabuleiro[2][8]['tipo'] = 'normal'; posicaoTabuleiro[2][8]['cor'] = 'branca'; posicaoTabuleiro[2][8]['mov'] = false;

    posicaoTabuleiro[3][1]['tipo'] = 'normal'; posicaoTabuleiro[3][1]['cor'] = 'branca'; posicaoTabuleiro[3][1]['mov'] = false;
    posicaoTabuleiro[3][3]['tipo'] = 'normal'; posicaoTabuleiro[3][3]['cor'] = 'branca'; posicaoTabuleiro[3][3]['mov'] = false;
    posicaoTabuleiro[3][5]['tipo'] = 'normal'; posicaoTabuleiro[3][5]['cor'] = 'branca'; posicaoTabuleiro[3][5]['mov'] = false;
    posicaoTabuleiro[3][7]['tipo'] = 'normal'; posicaoTabuleiro[3][7]['cor'] = 'branca'; posicaoTabuleiro[3][7]['mov'] = false;
        
    for (x = 1; x < 9; x++){
            for (y = 1; y < 9; y++){
                if (posicaoTabuleiro[x][y]['cor'] == 'branca' && posicaoTabuleiro[x+1][y+1] && posicaoTabuleiro[x+1][y+1]['cor'] == 'preta' && posicaoTabuleiro[x+2][y+2] && posicaoTabuleiro[x+2][y+2]['cor'] == false){

                }
            }
        }

    // POSICIONA AS PEÇAS PRETAS NO ARRAY

    posicaoTabuleiro[6][2]['tipo'] = 'normal'; posicaoTabuleiro[6][2]['cor'] = 'preta'; posicaoTabuleiro[6][2]['mov'] = false;
    posicaoTabuleiro[6][4]['tipo'] = 'normal'; posicaoTabuleiro[6][4]['cor'] = 'preta'; posicaoTabuleiro[6][4]['mov'] = false;
    posicaoTabuleiro[6][6]['tipo'] = 'normal'; posicaoTabuleiro[6][6]['cor'] = 'preta'; posicaoTabuleiro[6][6]['mov'] = false;
    posicaoTabuleiro[6][8]['tipo'] = 'normal'; posicaoTabuleiro[6][8]['cor'] = 'preta'; posicaoTabuleiro[6][8]['mov'] = false;

    posicaoTabuleiro[7][1]['tipo'] = 'normal'; posicaoTabuleiro[7][1]['cor'] = 'preta'; posicaoTabuleiro[7][1]['mov'] = false;
    posicaoTabuleiro[7][3]['tipo'] = 'normal'; posicaoTabuleiro[7][3]['cor'] = 'preta'; posicaoTabuleiro[7][3]['mov'] = false;
    posicaoTabuleiro[7][5]['tipo'] = 'normal'; posicaoTabuleiro[7][5]['cor'] = 'preta'; posicaoTabuleiro[7][5]['mov'] = false;
    posicaoTabuleiro[7][7]['tipo'] = 'normal'; posicaoTabuleiro[7][7]['cor'] = 'preta'; posicaoTabuleiro[7][7]['mov'] = false;

    posicaoTabuleiro[8][2]['tipo'] = 'normal'; posicaoTabuleiro[8][2]['cor'] = 'preta'; posicaoTabuleiro[8][1]['mov'] = false;
    posicaoTabuleiro[8][4]['tipo'] = 'normal'; posicaoTabuleiro[8][4]['cor'] = 'preta'; posicaoTabuleiro[8][3]['mov'] = false;
    posicaoTabuleiro[8][6]['tipo'] = 'normal'; posicaoTabuleiro[8][6]['cor'] = 'preta'; posicaoTabuleiro[8][5]['mov'] = false;
    posicaoTabuleiro[8][8]['tipo'] = 'normal'; posicaoTabuleiro[8][8]['cor'] = 'preta'; posicaoTabuleiro[8][7]['mov'] = false;

    ultimoClick['x'] = 0;
    ultimoClick['y'] = 0;
    ultimoClick['cor'] = false;
    ultimoClick['tipo'] = false;
    ultimoClick['mov'] = false;
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
    c = 0;
    debugger

    if (bloquear == true){
        if (posicaoTabuleiro[a][b]['mov'] == true){
            possiveisLances(a,b);
            return
        }
        else if (document.getElementById('t'+a+b).style.backgroundColor == 'rgb(178, 34, 34)'){
            capturarPecinha(a,b);
            movimentarPeca(a,b);
            return
        }
        return
    }
    if (posicaoTabuleiro[a][b]['cor'] == 'preta'){
        if (vez != posicaoTabuleiro[a][b]['cor']){
            console.log('não é sua vez');
            return;
        }
        if (ultimoClick['tipo'] != false){
            limparBoard();
            possiveisLances(a,b);
            return;
        }
        possiveisLances(a,b) //chamar opcao para mostrar opções
        return;
    }

    if (posicaoTabuleiro[a][b]['cor'] == 'branca'){
        if (vez != posicaoTabuleiro[a][b]['cor']){
            console.log('não é sua vez');
            return;
        }
        if (ultimoClick['tipo'] != false){
            limparBoard(); // limpar as casas antes de mostrar as opções
            possiveisLances(a,b); // chamar funcao para mostrar opções
            return;
        }
        //chamar opcao para mostrar opções
        possiveisLances(a,b);
        return;
    }
    if (obrigatorio == true || bloquear == true && document.getElementById('t'+a+b).style.backgroundColor == 'rgb(178, 34, 34)'){
        capturarPecinha(a,b)
    }

    if (document.getElementById('t'+a+b).style.backgroundColor == 'rgb(178, 34, 34)'){
        //chamar funcao para movimentar a peça
        movimentarPeca(a,b);
    }
}

function possiveisLances(vx,vy){ 
    c = 0;
    aaa = vx + 2;
    bbb = vx - 2;
    ccc = vy + 2;
    ddd = vy - 2;

    ultimoClick['x'] = 0; //DEFINE O ULTIMO CLICK COM O VALOR PADRAO INICIAL
    ultimoClick['y'] = 0; //DEFINE O ULTIMO CLICK COM O VALOR PADRAO INICIAL
    ultimoClick['cor'] = false; //DEFINE O ULTIMO CLICK COM O VALOR PADRAO INICIAL
    ultimoClick['tipo'] = false; //DEFINE O ULTIMO CLICK COM O VALOR PADRAO INICIAL

    ultimoClick['x'] = vx; // DEFINE A CASA DO ULTIMO CLICK
    ultimoClick['y'] = vy; // DEFINE A CASA DO ULTIMO CLICK
    ultimoClick['cor'] = posicaoTabuleiro[vx][vy]['cor']; // DEFINE A CASA DO ULTIMO CLICK
    ultimoClick['tipo'] = posicaoTabuleiro[vx][vy]['tipo']; // DEFINE A CASA DO ULTIMO CLICK

    if (posicaoTabuleiro[vx][vy]['tipo'] == 'dama'){
        
        verificarMovimentosDamas(vx,vy);
        return;

    }

    if (bloquear == true){
        if (aaa < 9 && ccc < 9){
            if (posicaoTabuleiro[vx+2][vy+2]['cor'] == false && posicaoTabuleiro[vx+1][vy+1]['cor'] != posicaoTabuleiro[vx][vy]['cor'] && posicaoTabuleiro[vx+1][vy+1]['cor'] != false)
            possivelMovimento(vx+2,vy+2);
        }

        if (aaa < 9 && ddd > 0){
            if (posicaoTabuleiro[vx+2][vy-2]['cor'] == false && posicaoTabuleiro[vx+1][vy-1]['cor'] != posicaoTabuleiro[vx][vy]['cor'] && posicaoTabuleiro[vx+1][vy-1]['cor'] != false)
            possivelMovimento(vx+2,vy-2);
        }

        if (bbb > 0 && ccc < 9){
            if (posicaoTabuleiro[vx-2][vy+2]['cor'] == false && posicaoTabuleiro[vx-1][vy+1]['cor'] != posicaoTabuleiro[vx][vy]['cor'] && posicaoTabuleiro[vx-1][vy+1]['cor'] != false)
            possivelMovimento(vx-2,vy+2);
        }

        if (bbb > 0 && ddd > 0){
            if (posicaoTabuleiro[vx-2][vy-2]['cor'] == false && posicaoTabuleiro[vx-1][vy-1]['cor'] != posicaoTabuleiro[vx][vy]['cor'] && posicaoTabuleiro[vx-1][vy-1]['cor'] != false)
            possivelMovimento(vx-2,vy-2);
        }

        return;
    }
    
    if (posicaoTabuleiro[vx][vy]['cor'] == 'preta'){ // verifica os lances disponiveis das pretas
        if (posicaoTabuleiro[vx-1][vy-1] && posicaoTabuleiro[vx-1][vy-1]['cor'] != 'preta' && posicaoTabuleiro[vx-1][vy-1]['cor'] != false){ // VERIFICA SE É POSSIVEL MOVIMENTO DE CAPTURAR PEÇA
            possivelMovimento(vx-2,vy-2);
        }

        if (posicaoTabuleiro[vx-1][vy+1] && posicaoTabuleiro[vx-1][vy+1]['cor'] != 'preta' && posicaoTabuleiro[vx-1][vy+1]['cor'] != false){ // VERIFICA SE É POSSIVEL MOVIMENTO DE CAPTURAR PEÇA
            possivelMovimento(vx-2,vy+2);
        } 

        if (obrigatorio != true){ // CASO NÃO HAJA MOVIMENTO DE CAPTURA, MOSTRA OS OPCOES DE MOVIMENTO PADRAO
            possivelMovimento(vx-1,vy-1,);
            possivelMovimento(vx-1,vy+1,);
        }
    }

    if (posicaoTabuleiro[vx][vy]['cor'] == 'branca'){
        if (posicaoTabuleiro[vx+1][vy-1] && posicaoTabuleiro[vx+1][vy-1]['cor'] != 'branca' && posicaoTabuleiro[vx+1][vy-1]['cor'] != false){ // VERIFICA SE É POSSIVEL MOVIMENTO DE CAPTURAR PEÇA
            possivelMovimento(vx+2,vy-2, 1);
        }
        
        if (posicaoTabuleiro[vx+1][vy+1] && posicaoTabuleiro[vx+1][vy+1]['cor'] != 'branca' && posicaoTabuleiro[vx+1][vy+1]['cor'] != false){ // VERIFICA SE É POSSIVEL MOVIMENTO DE CAPTURAR PEÇA
            possivelMovimento(vx+2,vy+2, 2);
        }
        
        if (obrigatorio != true){ // CASO NÃO HAJA MOVIMENTO DE CAPTURA, MOSTRA OS OPCOES DE MOVIMENTO PADRAO
            possivelMovimento(vx+1,vy-1);
            possivelMovimento(vx+1,vy+1);
        }
    }
}

function possivelMovimento(valorx,valory){
    
    if (valorx > 0 && valorx < 9 && valory > 0 && valory < 9){
        if (posicaoTabuleiro[valorx][valory]['tipo'] == false){
            c++
            document.getElementById('t'+valorx+valory).style.backgroundColor = 'rgb(178, 34, 34)';
            casasMarcadas[c] = document.getElementById('t'+valorx+valory);
        }
    }
}

function capturarPecinha(a,b){
    posicaoTabuleiro[a][b]['tipo'] = ultimoClick['tipo'];
    posicaoTabuleiro[a][b]['cor'] = ultimoClick['cor'];
    obrigatorio = false;
    
        
        if ( a > ultimoClick['x']){
        
            if( b > ultimoClick['y']){
    
                posicaoTabuleiro[a-1][b-1]['cor'] = false;
                posicaoTabuleiro[a-1][b-1]['tipo'] = false;
                posicaoTabuleiro[a-1][b-1]['mov'] = false;
                document.getElementById('t'+(a-1)+(b-1)).classList.remove('cor'+'-'+'branca','cor'+'-'+'preta','dama'+'-'+'preta','dama'+'-'+'branca');
                document.getElementById('t'+(a-1)+(b-1)).classList.add('vazio');
                document.getElementById('t'+(a-1)+(b-1)).style.backgroundColor = ''
    
            } else if ( b < ultimoClick['y']){
    
                posicaoTabuleiro[a-1][b+1]['cor'] = false;
                posicaoTabuleiro[a-1][b+1]['tipo'] = false;
                posicaoTabuleiro[a-1][b+1]['mov'] = false;
                document.getElementById('t'+(a-1)+(b+1)).classList.remove('cor'+'-'+'branca','cor'+'-'+'preta','dama'+'-'+'preta','dama'+'-'+'branca');
                document.getElementById('t'+(a-1)+(b+1)).classList.add('vazio');
                document.getElementById('t'+(a-1)+(b+1)).style.backgroundColor = ''
            }
    
        }
    
        else if ( a < ultimoClick['x']){
            
            if( b > ultimoClick['y']){
    
                posicaoTabuleiro[a+1][b-1]['cor'] = false;
                posicaoTabuleiro[a+1][b-1]['tipo'] = false;
                posicaoTabuleiro[a+1][b-1]['mov'] = false;
                document.getElementById('t'+ (a+1) + (b-1)).classList.remove('cor'+'-'+'branca','cor'+'-'+'preta','dama'+'-'+'preta','dama'+'-'+'branca');
                document.getElementById('t'+ (a+1) + (b-1)).classList.add('vazio');
                document.getElementById('t'+ (a+1) + (b-1)).style.backgroundColor = ''
    
            } else if ( b < ultimoClick['y']){
    
                posicaoTabuleiro[a+1][b+1]['cor'] = false;
                posicaoTabuleiro[a+1][b+1]['tipo'] = false;
                posicaoTabuleiro[a+1][b+1]['mov'] = false;
                document.getElementById('t'+ (a+1) + (b+1)).classList.remove('cor'+'-'+'branca','cor'+'-'+'preta','dama'+'-'+'preta','dama'+'-'+'branca');
                document.getElementById('t'+ (a+1) + (b+1)).classList.add('vazio');
                document.getElementById('t'+ (a+1) + (b+1)).style.backgroundColor = ''
            }
        }

        if (ultimoClick['cor'] == 'preta'){
            
            pontosBrancas = pontosBrancas - 1;

        } else {
            
            pontosPretas = pontosPretas - 1;
            
        }

        if (pontosBrancas == 0){
            
            prompt('Parabéns, as peças pretas venceram!!');
        } else if (pontosPretas == 0){
            
            prompt('Parabéns, as peças brancas venceram!!');
        }
    verificarLanceDuplo(a,b);

}

function movimentarPeca(aa,bb){
    posicaoTabuleiro[aa][bb]['tipo'] = ultimoClick['tipo'];
    posicaoTabuleiro[aa][bb]['cor'] = ultimoClick['cor'];


    document.getElementById('t'+ ultimoClick['x'] + ultimoClick['y']).classList.remove('cor'+'-'+'branca','cor'+'-'+'preta','dama'+'-'+'preta','dama'+'-'+'branca');
    document.getElementById('t'+ ultimoClick['x'] + ultimoClick['y']).classList.add('vazio');
    
    if (posicaoTabuleiro[aa][bb]['cor'] == 'preta'){

        posicaoTabuleiro[ultimoClick['x']][ultimoClick['y']]['cor'] = false;
        posicaoTabuleiro[ultimoClick['x']][ultimoClick['y']]['tipo'] = false;
        posicaoTabuleiro[ultimoClick['x']][ultimoClick['y']]['mov'] = false;
        document.getElementById('t'+aa+bb).style.backgroundColor = '';
        document.getElementById('t'+ aa + bb).classList.remove('vazio');

            if (posicaoTabuleiro[aa][bb]['tipo'] == 'dama'){
                document.getElementById('t'+ aa + bb).classList.add('dama'+'-'+'preta' , 'cor'+'-'+'preta');
            }
            
            else if ( aa != 1 ){

                document.getElementById('t'+ aa + bb).classList.add('cor'+'-'+'preta');

            }

            else if (aa == 1){

                posicaoTabuleiro[aa][bb]['tipo'] = 'dama';
                document.getElementById('t'+ aa + bb).classList.add('dama'+'-'+'preta' , 'cor'+'-'+'preta');

            }

        if (bloquear != true){

            for (x = 1; x < 9; x++){
                for (y = 1; y < 9; y++){
                    if (posicaoTabuleiro[x][y]['tipo'] == 'dama' && posicaoTabuleiro[x][y]['cor'] == 'branca'){
                        verifiPossivelDamas(x,y);
                        if(obrigatorio == true){
                            limparBoard();
                            vez = 'branca';
                            document.getElementById('trocarVezNome').innerHTML = 'brancas';
                            return;
                        }
                        break;
                    }
                    if ( (x + 2) <= 8 && (y + 2) <= 8 && posicaoTabuleiro[x][y]['cor'] == 'branca' && posicaoTabuleiro[x+1][y+1] != undefined && posicaoTabuleiro[x+1][y+1]['cor'] == 'preta' && posicaoTabuleiro[x+2][y+2] != undefined && posicaoTabuleiro[x+2][y+2]['cor'] == false){
                        obrigatorio = true;
                        vez = 'branca';
                        document.getElementById('trocarVezNome').innerHTML = 'brancas';
                        limparBoard();
                        return
                    }
                    else if ( (x + 2) <= 8 && (y - 2) > 0 && posicaoTabuleiro[x][y]['cor'] == 'branca' && posicaoTabuleiro[x+1][y-1] != undefined && posicaoTabuleiro[x+1][y-1]['cor'] == 'preta' && posicaoTabuleiro[x+2][y-2] != undefined && posicaoTabuleiro[x+2][y-2]['cor'] == false){
                        obrigatorio = true;            
                        vez = 'branca';
                        document.getElementById('trocarVezNome').innerHTML = 'brancas';
                        limparBoard();
                        return
                    }
                }
            }
        }


        obrigatorio = false;
    }
    else if (posicaoTabuleiro[aa][bb]['cor'] == 'branca'){

        posicaoTabuleiro[ultimoClick['x']][ultimoClick['y']]['cor'] = false;
        posicaoTabuleiro[ultimoClick['x']][ultimoClick['y']]['tipo'] = false;
        document.getElementById('t'+aa+bb).style.backgroundColor = '';
        document.getElementById('t'+ aa + bb).classList.remove('vazio');

        if (posicaoTabuleiro[aa][bb]['tipo'] == 'dama'){
            document.getElementById('t'+ aa + bb).classList.add('dama'+'-'+'branca' , 'cor'+'-'+'branca');
        }

        if ( aa != 8){

            document.getElementById('t'+ aa + bb).classList.add('cor'+'-'+'branca');

        }

        if (aa == 8){

            posicaoTabuleiro[aa][bb]['tipo'] = 'dama';
            document.getElementById('t'+ aa + bb).classList.add('dama'+'-'+'branca' , 'cor'+'-'+'branca');

        }
        if (bloquear != true){

            for (x = 1; x < 9; x++){
                for (y = 1; y < 9; y++){
                    if (posicaoTabuleiro[x][y]['tipo'] == 'dama' && posicaoTabuleiro[x][y]['cor'] == 'preta'){
                        verifiPossivelDamas(x,y);
                        if(obrigatorio == true){
                            limparBoard();
                            vez = 'preta';
                            document.getElementById('trocarVezNome').innerHTML = 'pretas';
                            return;
                        }
                        break;
                    }
                    if ( (x - 2) > 0 && (y + 2) <= 8 &&  posicaoTabuleiro[x][y]['cor'] == 'preta' && posicaoTabuleiro[x-1][y+1] != undefined && posicaoTabuleiro[x-1][y+1]['cor'] == 'branca' && posicaoTabuleiro[x-2][y+2] != undefined && posicaoTabuleiro[x-2][y+2]['cor'] == false){
                        obrigatorio = true;
                        vez = 'preta';
                        document.getElementById('trocarVezNome').innerHTML = 'pretas';
                        limparBoard();
                        return
                    }
                    else if ( (x - 2) > 0 && (y - 2) > 0 &&  posicaoTabuleiro[x][y]['cor'] == 'preta' && posicaoTabuleiro[x-1][y-1] != undefined && posicaoTabuleiro[x-1][y-1]['cor'] == 'branca' && posicaoTabuleiro[x-2][y-2] != undefined && posicaoTabuleiro[x-2][y-2]['cor'] == false){
                        obrigatorio = true;
                        vez = 'preta';
                        document.getElementById('trocarVezNome').innerHTML = 'pretas';
                        limparBoard();
                        return
                    }
                }
            }
        }

        obrigatorio = false;
    }

    if (bloquear != true){
        
        if (vez == 'preta'){
            vez = 'branca'
            document.getElementById('trocarVezNome').innerHTML = 'brancas';
        } else {
            vez = 'preta'
            document.getElementById('trocarVezNome').innerHTML = 'pretas';
        }
    }

    
    posicaoTabuleiro[ultimoClick['x']][ultimoClick['y']]['mov'] = false;

    limparBoard();
}

function verificarLanceDuplo(a,b){
    
    if(posicaoTabuleiro[a][b]['tipo'] == 'dama'){
        verificarCapturaDuplaDama(a,b);
        return
    }

    if(posicaoTabuleiro[a][b]['cor'] == 'preta'){
        if ( (a - 2) > 0 && (b - 2) > 0 && posicaoTabuleiro[a-1][b-1] != undefined && posicaoTabuleiro[a-1][b-1]['cor'] == 'branca' && posicaoTabuleiro[a-2][b-2] != undefined && posicaoTabuleiro[a-2][b-2]['cor'] == false){
            posicaoTabuleiro[a][b]['mov'] = true;
            bloquear = true;
            return;
        }
        if ( (a - 2) > 0 && (b + 2) < 9 && posicaoTabuleiro[a-1][b+1] != undefined && posicaoTabuleiro[a-1][b+1]['cor'] == 'branca' && posicaoTabuleiro[a-2][b+2] != undefined && posicaoTabuleiro[a-2][b+2]['cor'] == false){
            posicaoTabuleiro[a][b]['mov'] = true;
            bloquear = true;
            return;
        }
        if ( (a + 2) < 9 && (b - 2) > 0 && posicaoTabuleiro[a+1][b-1] != undefined && posicaoTabuleiro[a+1][b-1]['cor'] == 'branca' && posicaoTabuleiro[a+2][b-2] != undefined && posicaoTabuleiro[a+2][b-2]['cor'] == false){
            posicaoTabuleiro[a][b]['mov'] = true;
            bloquear = true;
            return;
        }

        if ( (a + 2) < 9 && (b + 2) < 9 && posicaoTabuleiro[a+1][b+1] != undefined && posicaoTabuleiro[a+1][b+1]['cor'] == 'branca' && posicaoTabuleiro[a+2][b+2] != undefined && posicaoTabuleiro[a+2][b+2]['cor'] == false){
            posicaoTabuleiro[a][b]['mov'] = true;
            bloquear = true;
            return;
        }
        bloquear = false;
        posicaoTabuleiro[a][b]['mov'] = false;
        return
    }

    else if(posicaoTabuleiro[a][b]['cor'] == 'branca'){
        
        if ( (a + 2) < 9 && (b - 2) > 0 && posicaoTabuleiro[a+1][b-1] != undefined && posicaoTabuleiro[a+1][b-1]['cor'] == 'preta' && posicaoTabuleiro[a+2][b-2] != undefined && posicaoTabuleiro[a+2][b-2]['cor'] == false){
            posicaoTabuleiro[a][b]['mov'] = true;
            bloquear = true;
            return;
        }

        if ( (a + 2) < 9 && (b + 2) < 9 && posicaoTabuleiro[a+1][b+1] != undefined && posicaoTabuleiro[a+1][b+1]['cor'] == 'preta' && posicaoTabuleiro[a+2][b+2] != undefined && posicaoTabuleiro[a+2][b+2]['cor'] == false){
            posicaoTabuleiro[a][b]['mov'] = true;
            bloquear = true;
            return;
        }
        if ( (a + 2) > 0 && (b - 2) > 0 && posicaoTabuleiro[a-1][b-1] != undefined && posicaoTabuleiro[a-1][b-1]['cor'] == 'preta' && posicaoTabuleiro[a-2][b-2] != undefined && posicaoTabuleiro[a-2][b-2]['cor'] == false){
            posicaoTabuleiro[a][b]['mov'] = true;
            bloquear = true;
            return;
        }
        if ( (a + 2) > 0 && (b + 2) < 9 && posicaoTabuleiro[a-1][b+1] != undefined && posicaoTabuleiro[a-1][b+1]['cor'] == 'preta' && posicaoTabuleiro[a-2][b+2] != undefined && posicaoTabuleiro[a-2][b+2]['cor'] == false){
            posicaoTabuleiro[a][b]['mov'] = true;
            bloquear = true;
            return;
        }
        bloquear = false;
        posicaoTabuleiro[a][b]['mov'] = false;
        return
    }

    posicaoTabuleiro[a][b]['mov'] = false;
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


function verificarMovimentosDamas(vx,vy){ // marcas as casas disponíveis para a dama

    for (let p = 1; p < 9; p++){
            
        if ((vx+p+1) > 8 || (vy+p+1) > 8){ // verifica se é possivel a captura
            
            if((vx+p) < 9 && (vy+p) < 9 && posicaoTabuleiro[vx+p][vy+p]['cor'] == false){ // verifica se é possivel movimento normal antes de encerrar o loop
                if(obrigatorio == false && bloquear == false){
                    possivelMovimento(vx+p,vy+p);
                }
            }
            break;
        }

        if(posicaoTabuleiro[vx+p][vy+p]['cor'] != posicaoTabuleiro[vx][vy]['cor'] && posicaoTabuleiro[vx+p][vy+p]['cor'] != false){
            if ( posicaoTabuleiro[vx+p+1][vy+p+1]['cor'] == false){
                    possivelMovimento(vx+p+1,vy+p+1);
            }
            break;
        }

        if(posicaoTabuleiro[vx+p][vy+p]['cor'] == posicaoTabuleiro[vx][vy]['cor']){
            break;
        }

        if (obrigatorio == false && bloquear == false){
            if (posicaoTabuleiro[vx+p][vy+p]['cor'] == false ){
                possivelMovimento(vx+p,vy+p);
            }
        }
    }

    for (let p = 1; p < 9; p++){
            
        if ((vx+p+1) >= 9 || (vy-p-1) < 1){
            
            if( (vx+p) <= 8 && (vy-p) >= 1 && posicaoTabuleiro[vx+p][vy-p]['cor'] == false){
                if (obrigatorio == false && bloquear == false){
                    possivelMovimento(vx+p,vy-p);
                }
                break;
            }
            break;
        }

        if(posicaoTabuleiro[vx+p][vy-p]['cor'] != posicaoTabuleiro[vx][vy]['cor'] && posicaoTabuleiro[vx+p][vy-p]['cor'] != false && posicaoTabuleiro[vx+p+1][vy-p-1]['cor'] == false){
            possivelMovimento(vx+p+1,vy-p-1);
            break;
        }

        if(posicaoTabuleiro[vx+p][vy-p]['cor'] == posicaoTabuleiro[vx][vy]['cor']){
            break;
        }

        if (obrigatorio == false && bloquear == false){
            if (posicaoTabuleiro[vx+p][vy-p]['cor'] == false ){
                possivelMovimento(vx+p,vy-p);
            }
        }
    }

    for (let p = 1; p < 9; p++){
            
        if ((vx-p-1) < 1 || (vy+p+1) >= 9){
            
            if((vx-p) >= 1 && (vy+p) <= 8 && posicaoTabuleiro[vx-p][vy+p]['cor'] == false){
                if (obrigatorio == false && bloquear == false){
                    possivelMovimento(vx-p,vy+p);
                }
            }
            break;
        }

        if(posicaoTabuleiro[vx-p][vy+p]['cor'] != posicaoTabuleiro[vx][vy]['cor'] && posicaoTabuleiro[vx-p][vy+p]['cor'] != false && posicaoTabuleiro[vx-p-1][vy+p+1]['cor'] == false){
            possivelMovimento(vx-p-1,vy+p+1);
            break;
        }

        if(posicaoTabuleiro[vx-p][vy+p]['cor'] == posicaoTabuleiro[vx][vy]['cor']){
            break;
        }

        if (obrigatorio == false && bloquear == false){
            if (posicaoTabuleiro[vx-p][vy+p]['cor'] == false ){
                possivelMovimento(vx-p,vy+p);
            }
        }
    }

    for (let p = 1; p < 9; p++){
            
        if ((vx-p-1) < 1 || (vy-p-1) < 1){
            
            if( (vx-p) >= 1 && (vy-p) >= 1 && posicaoTabuleiro[vx-p][vy-p]['cor'] == false){
                if(obrigatorio == false && bloquear == false){
                    possivelMovimento(vx-p,vy-p);
                }
            }
            break;
        }

        if(posicaoTabuleiro[vx-p][vy-p]['cor'] != posicaoTabuleiro[vx][vy]['cor'] && posicaoTabuleiro[vx-p][vy-p]['cor'] != false && posicaoTabuleiro[vx-p-1][vy-p-1]['cor'] == false){
            possivelMovimento(vx-p-1,vy-p-1);
            break;
        }

        if(posicaoTabuleiro[vx-p][vy-p]['cor'] == posicaoTabuleiro[vx][vy]['cor']){
            break;
        }

        if (obrigatorio == false && bloquear == false){
            if (posicaoTabuleiro[vx-p][vy-p]['cor'] == false ){
                possivelMovimento(vx-p,vy-p);
            }
        }
    }
}


function verifiPossivelDamas(vx,vy){ // verifica se existe algum movimento de captura por parte das damas

    for (let p = 1; p < 9; p++){
            
        if ( (vx+p+1) >= 9 || (vy+p+1) >= 9 || (vx+p) >= 9 || (vy+p) >= 9 ){
            break;
        }

        if(posicaoTabuleiro[vx+p][vy+p]['cor'] == posicaoTabuleiro[vx][vy]['cor']){
            break;
        }

        if(posicaoTabuleiro[vx+p][vy+p]['cor'] != posicaoTabuleiro[vx][vy]['cor'] && posicaoTabuleiro[vx+p][vy+p]['cor'] != false && posicaoTabuleiro[vx+p+1][vy+p+1]['cor'] == false){
            obrigatorio = true
            return;
        }
    }

    for (let p = 1; p < 9; p++){
            
        if ( (vx+p+1) >= 9 || (vy-p-1) < 1 || (vx+p) >= 9 || (vy-p) < 1 ){
            break;
        }

        if(posicaoTabuleiro[vx+p][vy-p]['cor'] == posicaoTabuleiro[vx][vy]['cor']){
            break;
        }

        if(posicaoTabuleiro[vx+p][vy-p]['cor'] != posicaoTabuleiro[vx][vy]['cor'] && posicaoTabuleiro[vx+p][vy-p]['cor'] != false && posicaoTabuleiro[vx+p+1][vy-p-1]['cor'] == false){
            obrigatorio = true;
            return;
        }
    }

    for (let p = 1; p < 9; p++){
            
        if ( (vx-p-1) < 1 || (vy+p+1) >= 9 || (vx-p) < 1 || (vy+p) >=9 ){
            break;
        }

        if(posicaoTabuleiro[vx-p][vy+p]['cor'] == posicaoTabuleiro[vx][vy]['cor']){
            break;
        }

        if(posicaoTabuleiro[vx-p][vy+p]['cor'] != posicaoTabuleiro[vx][vy]['cor'] && posicaoTabuleiro[vx-p][vy+p]['cor'] != false && posicaoTabuleiro[vx-p-1][vy+p+1]['cor'] == false){
            obrigatorio = true;
            return;
        }
    }

    for (let p = 1; p < 9; p++){
            
        if ( (vx-p-1) < 1 || (vy-p-1) < 1 || (vx-p) < 1 || (vy-p) < 1 ){
            break;
        }

        if(posicaoTabuleiro[vx-p][vy-p]['cor'] == posicaoTabuleiro[vx][vy]['cor']){
            break;
        }

        if(posicaoTabuleiro[vx-p][vy-p]['cor'] != posicaoTabuleiro[vx][vy]['cor'] && posicaoTabuleiro[vx-p][vy-p]['cor'] != false && posicaoTabuleiro[vx-p-1][vy-p-1]['cor'] == false){
            obrigatorio = true;
            return;
        }

    }
}

function verificarCapturaDuplaDama(vx,vy){ // verifica se tem alguns lance duplo por parte da dama

    for (let p = 1; p < 9; p++){
            
        if ((vx+p+1) >= 9 || (vy+p+1) >= 9 || (vx+p) >= 9 || (vy+p) >= 9){
            break;
        }

        if(posicaoTabuleiro[vx+p][vy+p]['cor'] != posicaoTabuleiro[vx][vy]['cor'] && posicaoTabuleiro[vx+p][vy+p]['cor'] != false && posicaoTabuleiro[vx+p+1][vy+p+1]['cor'] == false){
            posicaoTabuleiro[vx][vy]['mov'] = true;
            bloquear = true;
            return;
        }
    }

    for (let p = 1; p < 9; p++){
            
        if ((vx+p+1) >= 9 || (vy-p-1) < 1 || (vx+p) >= 9 || (vy-p) < 1){
            break;
        }

        if(posicaoTabuleiro[vx+p][vy-p]['cor'] != posicaoTabuleiro[vx][vy]['cor'] && posicaoTabuleiro[vx+p][vy-p]['cor'] != false && posicaoTabuleiro[vx+p+1][vy-p-1]['cor'] == false){
            posicaoTabuleiro[vx][vy]['mov'] = true;
            bloquear = true;
            return;
        }
    }

    for (let p = 1; p < 9; p++){
            
        if ((vx-p-1) < 1 || (vy+p+1) >= 9 || (vx-p) < 1 || (vy+p) >= 9){
            break;
        }

        if(posicaoTabuleiro[vx-p][vy+p]['cor'] != posicaoTabuleiro[vx][vy]['cor'] && posicaoTabuleiro[vx-p][vy+p]['cor'] != false && posicaoTabuleiro[vx-p-1][vy+p+1]['cor'] == false){
            posicaoTabuleiro[vx][vy]['mov'] = true;
            bloquear = true;
            return;
        }
    }

    for (let p = 1; p < 9; p++){
            
        if ((vx-p-1) < 1 || (vy-p-1) < 1 || (vx-p) < 1 || (vy-p) < 1){
            break;
        }

        if(posicaoTabuleiro[vx-p][vy-p]['cor'] != posicaoTabuleiro[vx][vy]['cor'] && posicaoTabuleiro[vx-p][vy-p]['cor'] != false && posicaoTabuleiro[vx-p-1][vy-p-1]['cor'] == false){
            posicaoTabuleiro[vx][vy]['mov'] = true;
            bloquear = true;
            return;
        }

    }

    bloquear = false;
}