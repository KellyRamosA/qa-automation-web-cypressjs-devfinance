describe('Nova transação', () => {
  beforeEach(() => {
    cy.visit('/')

    const transacoes = [
      { descricao: 'Pix', valor: '600', data: '2026-10-25' },
      { descricao: 'Salário', valor: '5000', data: '2026-10-01' },
      { descricao: 'Aluguel', valor: '-1200', data: '2026-10-05' }
    ]

    transacoes.forEach((transacao) => {
      cy.contains('Nova Transação').click()

      cy.get('#description').type(transacao.descricao)
      cy.get('#amount').type(transacao.valor)
      cy.get('#date').type(transacao.data)

      cy.contains('Salvar').click()
    })
  })

  it('deve criar várias transações', () => {
    cy.contains('td.description', 'Pix').should('be.visible')
    cy.contains('td.description', 'Salário').should('be.visible')
    cy.contains('td.description', 'Aluguel').should('be.visible')
  })
})