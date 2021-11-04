class Cotacao {
    constructor(transportador, valor, prazo, km) {
        this.transportador = transportador;
        this.valor = valor;
        this.prazo = prazo;
        this.km = km;
    }

    validarDados() {
        for(let i in this) {
            if(this[i] == undefined || this[i] == '' || this[i] == null) {
                return false
            }
        }
        return true
    }
}

class Bd {
    constructor() {
        let id = sessionStorage.getItem('id');

        if(id === null) {
            sessionStorage.setItem('id', 0)
        }
    }
    getNextId() {
        let nextId = sessionStorage.getItem('id');
        return parseInt(nextId) + 1;
    }
    register(d) {
    let id = this.getNextId();
    sessionStorage.setItem(id, JSON.stringify(d));
    sessionStorage.setItem('id', id);
    }
    showData() {
        let cotacoes = Array();
        let id = sessionStorage.getItem('id');

        for(let i = 1; i <= id; i++) {
            let cotacao = JSON.parse(sessionStorage.getItem(i));
            if(cotacao === null) {
                continue
            } else {
                cotacao.id = i;
                cotacoes.push(cotacao);
                cotacoes.sort(function(a, b) {
                    JSON.parse(a.valor/a.km, b.valor/b.km)
                    if((a.valor/a.km) < (b.valor/b.km)) return -1;
                    if((a.valor/a.km) > (b.valor/b.km)) return 1;
                    return 0
                })
            }
        }
        console.log(cotacoes);
        return cotacoes;
    }
}

let bd = new Bd();

function cadastrarCotacao() {
    let transportador = document.getElementById('transport');
    let valor = document.getElementById('valor');
    let prazo = document.getElementById('prazo');
    let km = document.getElementById('km');

    let cotacao = new Cotacao(transportador.value, valor.value, prazo.value, km.value); 

    if(cotacao.validarDados()) {
        bd.register(cotacao);

        document.getElementById('transport').value = '';
        document.getElementById('valor').value = '';
        document.getElementById('prazo').value = '';

        window.location.reload();
    } else {
        alert(`Informações incompletas!`)
    }
}

function makeTable(cotacoes = Array()) {
    if(cotacoes.length == 0) {
        cotacoes = bd.showData();
    }
    let listTable = document.getElementById('tableMaked');
    listTable.innerHTML = '';

    cotacoes.forEach(function(d) {
        let line = listTable.insertRow();
        let porKm = line.insertCell();
        porKm.className = `porKm`;

        line.insertCell(0).innerHTML = d.transportador;
        line.insertCell(1).innerHTML = `R$ ${d.valor}`;
        line.insertCell(2).innerHTML = d.prazo;
        line.insertCell(3).innerHTML = d.km;
        porKm.innerHTML = `R$ ${(d.valor / d.km).toFixed(2)}`;
    })
}

function insertLocation() {    
    /*let origem = document.getElementById('txtOrigem');
    let destino = document.getElementById('txtDestino');
    let veiculo = document.getElementById('dadosSalvado');
    let placa = document.getElementById('placa');
    */

    let origem = document.createElement('th');
    let destino = document.createElement('th');
    destino.colSpan = 2;
    let veiculo = document.createElement('th');
    let placa = document.createElement('th');
    let rowTable = document.createElement('thead');
    let tableList = document.getElementById('tableM');

    origem.innerHTML = `ORIGEM: ${document.getElementById('txtOrigem').value}`;
    destino.innerHTML = `DESTINO: ${document.getElementById('txtDestino').value}`;
    veiculo.innerHTML = `VEÍCULO: ${document.getElementById('dadosSalvado').value}`;
    placa.innerHTML = `PLACA: ${document.getElementById('placa').value}`;

    rowTable.appendChild(origem);
    rowTable.appendChild(destino);
    rowTable.appendChild(veiculo);
    rowTable.appendChild(placa);

    tableList.prepend(rowTable)
    
    console.log(tableList);
}

function reset() {
    sessionStorage.clear();
    window.location.reload();
    document.getElementById('km').value = '';
}
