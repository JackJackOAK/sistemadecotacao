var listaPrestador = Array();
var valorCotacao = Array();

function add() {
    //capturar campo input
    var transportador = document.getElementById('transportador').value;
    var valor = document.getElementById('valor').value;

    //regra para realizar ou não push nos arrays
    if(transportador === '' || valor == '') {
        return alert('Selecione o transportador e digite o valor');
    } else if(listaPrestador.indexOf(transportador) != -1 ) {
        return
    } else {
        listaPrestador.push(transportador);
        valorCotacao.push(valor);
    }
    
    //row para td que será inserida na tablee
    var rowDataTransp = document.createElement('tr');
    
    //criar td com o valor do array listaPrestador
    
    listaPrestador.forEach(function(valor, indice, array){
        //console.log(valor, indice);
        var tableDataTransp = document.createElement('td');
        tableDataTransp.className  = 'data-transp';
        tableDataTransp.append(valor);

        rowDataTransp.append(tableDataTransp);

        listaPrestador = []
    });
        
    var km = document.getElementById('km').value;
    var tableKm = document.createElement('td');
    tableKm.className = 'data-cot';
    tableKm.append(km);

    parseInt(km)
    parseInt(valorCotacao)
    var valorKm = valorCotacao / km;
    

    //criar td com o valor do array valorCotacao
    valorCotacao.forEach(function(valor, indice, array){
        //console.log(valor, indice);
        var tableDataCot = document.createElement('td')
        tableDataCot.className = 'data-cot';
        tableDataCot.append(`R$ ${valor}`);

        rowDataTransp.append(tableDataCot);
        valorCotacao = []
    });

    rowDataTransp.append(tableKm);

    var prazo = document.getElementById('prazo').value;
    var tablePrazo = document.createElement('td');
    tablePrazo.className = 'data-cot';
    tablePrazo.append(prazo);

    rowDataTransp.append(tablePrazo);

    var tableValKm = document.createElement('td');
    tableValKm.className = 'data-cot';
    tableValKm.append(`R$ ${valorKm.toFixed(2)}`);

    rowDataTransp.append(tableValKm);

    //append das tds criadas na tabela HTML
    document.getElementById('table-data').append(rowDataTransp); 

    var valor = document.getElementById('valor').value = '';
    var prazo = document.getElementById('prazo').value = '';

};

    

function addsalvado() {
    let origem = document.getElementById('txtOrigem').value;
    let destino = document.getElementById('txtDestino').value;
    let veiculo = document.getElementById('veiculo').value;
    let placa = document.getElementById('placa').value;
    let reset = document.getElementById('reset');

    let dadosSalvado = document.getElementById('dados-salvado');
    dadosSalvado.className = 'data-cot';

    tableOri = document.createElement('td');
    tableOri.className = 'data-cot';
    tableOri.append(`De: ${origem}`);

    dadosSalvado.append(tableOri);

    tableDes = document.createElement('td');
    tableDes.className = 'data-cot';
    tableDes.append(`Para: ${destino}`);

    dadosSalvado.append(tableDes);

    tableVei = document.createElement('td');
    tableVei.className = 'data-cot';
    tableVei.append(veiculo);

    dadosSalvado.append(tableVei);

    tablePla = document.createElement('td');
    tablePla.className = 'data-cot';
    tablePla.append(placa);

    dadosSalvado.append(tablePla);
    
    tableRes = document.createElement('td');
    tableRes.className = 'data-cot';
    reset.style.display = 'block';
    tableRes.append(reset);

    dadosSalvado.append(tableRes);
    

    origem = document.getElementById('txtOrigem').value = '';
    destino = document.getElementById('txtDestino').value = '';
    veiculo = document.getElementById('veiculo').value = '';
    placa = document.getElementById('placa').value = '';




    console.log(origem);
    console.log(destino);
    console.log(veiculo);
    console.log(placa);
}

