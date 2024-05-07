describe('Amazon Tests', () => {
  beforeEach(() => {
    cy.visit('https://www.amazon.com/');
  });

  afterEach(() => {
    cy.screenshot({ capture: 'viewport' });
  });

  const retryOptions = {
    retries: 2,
  };


  const signUp = () => {
    cy.get('#nav-link-accountList-nav-line-1').should('be.visible').click({ multiple: true });
    cy.url().should('include', '/ap/signin');
    cy.get('#createAccountSubmit').should('be.visible').click();
    cy.get('#ap_customer_name').should('be.visible').type("Awais");
    cy.get('#ap_email').should('be.visible').type("youremail");
    cy.get('#ap_password').should('be.visible').type("your password");
    cy.get('#ap_password_check').should('be.visible').type("your password");
    cy.get('#continue').click();
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.contain('There\'s already an account with this email');
      cy.contains('a', 'Sign in').click();
    });
  };

  const login = () => {
    cy.get('#nav-link-accountList-nav-line-1').should('be.visible').click({ multiple: true });
    cy.url().should('include', '/ap/signin');
    cy.get('#ap_email').should('be.visible').type("your email");
    cy.get('#continue').click();
    cy.get('#ap_password').should('be.visible').type("your password");
    cy.get('#signInSubmit').click();
    cy.get('.nav-line-1.nav-progressive-content').should('contain', 'Hello, Your name');
  };

  const searchItem = () => {
    cy.get('#twotabsearchtextbox').should('be.visible').type("shoes");
    cy.get('#nav-search-submit-button').click();
    cy.url().should('include', 'shoes');
    cy.contains('span', 'shoes for men').click();
  };

  const searchAndAddToCart = () => {
    cy.get('#twotabsearchtextbox').should('be.visible').type("shoes");
    cy.get('#nav-search-submit-button').click();
    cy.url().should('include', 'shoes');
    cy.contains('span', 'shoes for men').click();
    cy.get('.a-size-base-plus.a-color-base.a-text-normal').first().click();
    cy.get('#add-to-cart-button').click();
    cy.url().should('include', '/cart');
  };

  const goToCart = () => {
    cy.get('#nav-cart-count-container').should('be.visible').click();
  };

  const increaseQuantity = () => {
    cy.get('.a-dropdown-prompt').should('be.visible').first().click();
    cy.get('.a-list-link .a-dropdown-item.quantity-option a').contains('2').click();
  };

  const deleteItem = () => {
    cy.get('.a-dropdown-prompt').should('be.visible').first().click();
    cy.get('.a-list-link .a-dropdown-item.quantity-option a').contains('0').click();
  };

  const openAdressBook = () => {
    cy.get('#nav-global-location-popover-link').should('be.visible').first().click();
    cy.get('#GLUXManageAddressLink a').should('be.visible').click();
  };

  const addAddress = () => {
    cy.get('#ya-myab-plus-address-icon').click();
    cy.get('#address-ui-widgets-countryCode').click();
    cy.get('.a-dropdown-item').contains('Pakistan').click();
    cy.wait(2000);
    cy.get('#address-ui-widgets-enterAddressLine1').type('COMSATS');
    cy.get('#address-ui-widgets-enterAddressLine2').type('Software Testing');
    cy.get('#address-ui-widgets-enterAddressCity').type('Islamabad');
    cy.get('#address-ui-widgets-enterAddressStateOrRegion').type('Islamabad');
    cy.get('#address-ui-widgets-enterAddressPostalCode').type('04403');
    cy.get('#address-ui-widgets-enterAddressPhoneNumber').type('your phone number');
    cy.get('#address-ui-widgets-enterAddressFullName').type('Awais Ur Rehman');
    cy.get('#address-ui-widgets-form-submit-button').click();
    cy.get('.a-box-inner.a-alert-container').should('contain', 'Address saved');
  };


  const deleteAddress = () => {
    cy.get('#ya-myab-address-delete-btn-2').click();
    cy.wait(2000);
    cy.get('#deleteAddressModal-2-submit-btn').click();
    cy.get('.a-alert-heading').should('contain', 'Address removed');
  };

  const editAddress = () => {
    cy.get('#ya-myab-address-edit-btn-1').click();
    cy.get('#address-ui-widgets-enterAddressLine1').clear();
    cy.get('#address-ui-widgets-enterAddressLine2').clear();
    cy.get('#address-ui-widgets-enterAddressCity').clear();
    cy.get('#address-ui-widgets-enterAddressStateOrRegion').clear();
    cy.get('#address-ui-widgets-enterAddressPostalCode').clear();
    cy.get('#address-ui-widgets-enterAddressPhoneNumber').clear();
    cy.get('#address-ui-widgets-enterAddressFullName').clear();
    cy.get('#address-ui-widgets-enterAddressLine1').type('COMSATS 2');
    cy.get('#address-ui-widgets-enterAddressLine2').type('SOFTWARE TESTING 2');
    cy.get('#address-ui-widgets-enterAddressCity').type('New City');
    cy.get('#address-ui-widgets-enterAddressStateOrRegion').type('New State');
    cy.get('#address-ui-widgets-enterAddressPostalCode').type('12345');
    cy.get('#address-ui-widgets-enterAddressPhoneNumber').type('your phone number');
    cy.get('#address-ui-widgets-enterAddressFullName').type('New Name');
    cy.get('#a-autoid-0').click();
    cy.get('.a-box-inner.a-alert-container').should('contain', 'Address saved');
  }


  it('Should Signup to Amazon', retryOptions, () => {
    signUp();
  });

  it('Should Login to Amazon', retryOptions, () => {
    login();
  });

  it('Should Search an Item', retryOptions, () => {
    searchItem();
  });

  it('Should Search an Item and add it to the cart', retryOptions, () => {
    searchAndAddToCart();
  });

  it('Should Go To Cart', retryOptions, () => {
    goToCart();
  });

  it('Should Increase Product Quantity', retryOptions, () => {
    login();
    searchAndAddToCart();
    goToCart();
    increaseQuantity();
  });

  it('Should Delete Product', retryOptions, () => {
    login();
    searchAndAddToCart();
    goToCart();
    deleteItem();
  });

  it('Should Add an Address', retryOptions, () => {
    login();
    openAdressBook();
    addAddress();
  });

  it('Should Delete an Address', retryOptions, () => {
    login();
    openAdressBook();
    deleteAddress();
  });

  it('Should Edit an Address', retryOptions, () => {
    login();
    openAdressBook();
    editAddress();
  });

});