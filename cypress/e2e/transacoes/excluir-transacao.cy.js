describe('Excluir transações', () => {
  beforeEach(() => {
    cy.visit('/')

    cy.contains('Nova Transação').click()

    cy.get('#description').type('Transferência')
    cy.get('#amount').type('-100')
    cy.get('#date').type('2026-09-04')

    cy.contains('Salvar').click()
  })

  it('deve remover uma transação', () => {
cy.contains('td.description', 'Transferência')
  .parents('tr')
  .find('img[onclick^="Transaction.remove"]')

cy.contains('td.description', 'Transferência').should('not.exist')

  })
})