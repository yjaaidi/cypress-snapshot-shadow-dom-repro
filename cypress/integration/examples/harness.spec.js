function getContent() {
  return cy.get('#content').invoke('text');
}

class Magic {
  constructor(el) {
    this.el = el;
  }

  host() {
    return this.el;
  }
}

class ContentHarness extends Magic {
  static hostSelector = '#content';

  async isOpen() {
    console.log(this.host());
    return this.host().hasClass('open');
  }
}

function getHarness(harness) {
  return cy.get(harness.hostSelector).pipe((el) => new ContentHarness(el));
}

context('Harness', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080');
  });
  it('should read Shadow DOM content', () => {
    getHarness(ContentHarness)
      .pipe((harness) => harness.isOpen())
      .should('equal', true);
  });
});
