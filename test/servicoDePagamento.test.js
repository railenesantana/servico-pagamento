const assert = require('assert');
const servicoDePagamento = require('../src/servicoDePagamento');

describe('servicoDePagamento', function () {

  it('deve realizar um pagamento com categoria cara quando valor for maior que 100', function () {

    const servico = new servicoDePagamento();

    servico.pagar('0987-7656-3475', 'Samar', 156.87);

    const ultimoPagamento = servico.consultarUltimoPagamento();

    assert.deepStrictEqual(ultimoPagamento, {
      codigoBarras: '0987-7656-3475',
      empresa: 'Samar',
      valor: 156.87,
      categoria: 'cara'
    });
  });

});