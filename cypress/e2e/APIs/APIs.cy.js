describe('Tesing in API with Cypress', () => {
  it('POST endpoint responds with status 200', () => {
    cy.request({
      url: 'https://jsonplaceholder.typicode.com/posts',
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it('Endpoint posts has 100 entries', () => {
    // cy.request({
    //   url: 'https://jsonplaceholder.typicode.com/posts',
    // }).then((response) => {
    //   expect(response.body).to.have.length(100);
    // });
    //Another way to do it
    cy.visit('https://jsonplaceholder.typicode.com');
    cy.request('/posts').its('body').should('have.length', 100);
  });

  it('Post 1 has the title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit" ', () => {
    cy.request({
      url: 'https://jsonplaceholder.typicode.com/posts/1',
    }).then((response) => {
      expect(response.body.title).to.eq(
        'sunt aut facere repellat provident occaecati excepturi optio reprehenderit'
      );
    });
    //Another way to do it
    // cy.visit('https://jsonplaceholder.typicode.com');
    // cy.request('/posts/1')
    //   .its('body')
    //   .should(
    //     'have.property',
    //     'title',
    //     'sunt aut facere repellat provident occaecati excepturi optio reprehenderit'
    //   );
  });

  it('The post request works correctly for the endpoint', () => {
    cy.request({
      method: 'POST',
      url: 'https://jsonplaceholder.typicode.com/posts',
      body: {
        userId: 1,
        id: 101,
        title: 'foo',
        body: 'bar',
      },
    }).then((response) => {
      expect(response.body).to.have.property('title', 'foo');
    });
  });

  it('The put request works correctly for the endpoint', () => {
    cy.request({
      method: 'PUT',
      url: 'https://jsonplaceholder.typicode.com/posts/2',
      body: {
        title: 'foo updated',
        body: 'bar',
      },
    }).then((response) => {
      expect(response.body).to.have.property('title', 'foo updated');
    });
  });

  it('The patch request works correctly for the endpoint', () => {
    cy.request({
      method: 'PATCH',
      url: 'https://jsonplaceholder.typicode.com/posts/2',
      body: {
        title: 'foo updated',
        body: 'bar',
      },
    }).then((response) => {
      expect(response.body).to.have.property('title', 'foo updated');
    });
  });

  it('The delete request works correctly for the endpoint', () => {
    cy.request({
      method: 'DELETE',
      url: 'https://jsonplaceholder.typicode.com/posts/2',
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
    //Another way to do it
    // cy.request('DELETE', 'https://jsonplaceholder.typicode.com/posts/2').then(
    //   (response) => {
    //     expect(response.status).to.eq(200);
    //   }
    // );
  });
});
