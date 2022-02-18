const peopleResource = '/people'

describe('Basic Person Service Tests', () => {
    
    it('Get people from express server', () => {
      cy.request({
          method: 'GET',
          url: Cypress.config('baseUrl') + peopleResource
          
      }).then((res) => {
          expect(res.status).to.eq(200)
          expect(res.body).to.have.property('Names')
          expect(res.body.Names[0]).to.eq('Tony')
      })
    })
})