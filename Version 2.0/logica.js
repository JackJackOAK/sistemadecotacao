//Variáveis para armazenar os dados primários

let transpCotacao = Array();
let valorCotacao = Array();
let prazoCotacao = Array();
let kmCotacao = Array();
let preVisual = Array();

//Table que receberá os dados primários
let tableMaked = document.createElement('table');
tableMaked.id = 'tableMaked';

//Cabeçalho da tableMaked

let tableMRow = document.createElement('tr');
let tableMTransp = document.createElement('th');
let tableMValor = document.createElement('th');
let tableMPrazo = document.createElement('th');
let tableMKm = document.createElement('th');
let tableMValorKM = document.createElement('th');

tableMTransp.append('Transportador');
tableMValor.append('Valor');
tableMPrazo.append('Prazo');
tableMKm.append('KM');
tableMValorKM.append('$/km');
tableMaked.append(tableMTransp);
tableMaked.append(tableMValor);
tableMaked.append(tableMPrazo);
tableMaked.append(tableMKm);
tableMaked.append(tableMValorKM);

//Função para adicionar os dados prímários

function addDados() {
    let transportador = document.getElementById('transport').value;
    let valor = document.getElementById('valor').value;
    let prazo = document.getElementById('prazo').value;
    let km = document.getElementById('km').value;

    if (transportador =='' | valor == '' | prazo =='' | km == '' | valor == ' ' | prazo ==' ' | km == ' ') {
        return alert('Complete todos os campos.')
    } else if (transpCotacao.indexOf(transportador) != -1) {
        return alert('Transportador já adicionado.')
    } else {

        let tr = document.createElement('tr');
        tr.className = 'trData';
        tdTr = document.createElement('td');
        tdVal = document.createElement('td');
        tdPra = document.createElement('td');
        tdKm = document.createElement('td');
        tdPorkm = document.createElement('td');

        parseFloat(valor);
        parseFloat(km);
        let porKM = valor / km;

        tdTr.append(transportador);
        tdVal.append(`R$ ${valor}`);
        tdPra.append(`${prazo} dias`);
        tdKm.append(km);
        tdPorkm.append(`R$ ${porKM.toFixed(2)}`)

        tr.append(tdTr, tdVal, tdPra, tdKm, tdPorkm);
        tableMaked.appendChild(tr);

        transpCotacao.push(transportador);
        preVisual.push(transportador);
        valorCotacao.push(valor);
        prazoCotacao.push(prazo);
        kmCotacao.push(km);

        document.getElementById('valor').value = '';
        document.getElementById('prazo').value = '';
    }

    //Cria a pre visualização dos transportadores já adicionados
    preVisual.forEach(function(){
        let tableRow = document.createElement('tr');
        let tableTransp = document.createElement('td');

        tableTransp.append(transportador);
        tableRow.append(tableTransp);

        document.getElementById('table').append(tableRow);
        preVisual = []
    });
}

    
//Verifica e mostra a tableMaked
function createTable() {
    
    if(document.getElementById('tableMaked')){
        return alert('Tabela já criada! Reset para criar uma nova.')
    } else {
        let origem = document.getElementById('txtOrigem').value;
        let destino = document.getElementById('txtDestino').value;
        let salvado = document.getElementById('dadosSalvado').value;
        let placa = document.getElementById('placa').value;
        
        let ori = document.createElement('th');
        let des = document.createElement('th');
        des.colSpan = 2;
        let sal = document.createElement('th');
        let pla = document.createElement('th');

        ori.append(`De: ${origem.toUpperCase()}`);
        des.append(`Para: ${destino.toUpperCase()}`);
        sal.append(`Veículo: ${salvado.toUpperCase()}`);
        pla.append(`Placa: ${placa.toUpperCase()}`);

        let rowData = document.createElement('tr');

        let btnReset = document.getElementById('btnReset');
        btnReset.style.display = 'block';
        btnReset.className = 'btn';

        rowData.append(ori);
        rowData.append(des);
        rowData.append(sal);
        rowData.append(pla);
   
        tableMaked.prepend(rowData);
        
        document.getElementById('divTableMaked').append(tableMaked);
    }
}

//Função que reseta a página para reutilização
function reset() {
    window.location.href = '';
}
