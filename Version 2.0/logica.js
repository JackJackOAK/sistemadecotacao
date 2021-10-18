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
        tdPorkm.className = 'porkm';

        parseFloat(valor);
        parseFloat(km);
        let porKM = valor / km;

        tdTr.append(transportador);
        tdVal.append(`R$ ${valor}`);
        tdPra.append(`${prazo} dias`);
        tdKm.append(km);
        tdPorkm.append(porKM.toFixed(2))

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

        sortTable();
    }
}

//Função que reseta a página para reutilização
function reset() {
    window.location.href = '';
}

function sortTable() {
    var table, rows, switching, i, x, y, shouldSwitch;

    table = document.getElementById('tableMaked');

    switching = true;

    /* Make a loop that will continue until no switching has been done: */
    
    while (switching) {

        // Start by saying: no switching is done:
        switching = false;
        rows = table.rows;

        /* Loop through all table rows (except the first, which contains table headers): */
        
        for (i = 1; i < (rows.length - 1); i++) {
            // Start by saying there should be no switching:
            shouldSwitch = false;
            /* Get the two elements you want to compare, one from current row and one from the next: */                        
            x = rows[i].getElementsByClassName('porkm')[0];
            y = rows[i + 1].getElementsByClassName('porkm')[0];
            // Check if the two rows should switch place:
            if (Number(x.innerHTML) > Number(y.innerHTML)) {
                //if so, mark as a switch and break the loop:
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            /* If a switch has been marked, make the switch
            and mark that a switch has been done: */
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}
