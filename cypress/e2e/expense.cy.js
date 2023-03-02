describe('expense', () => {
    it('user can add an expense', () => {

        cy.visit('http://localhost:3000/expense-tracker');

        let oldBalance;
        cy.get('[data-test=user-balance]').then($balance => oldBalance = $balance.text());
        // Press the add button to check for validation
        cy.findByRole('button', {name: /הוסף עסקה/i}).click();
        cy.findByText(/\*שם עסקה הוא שדה חובה/i).should('be.visible');
        cy.findByText(/\*סכום הוא שדה חובה/i).should('be.visible');
        const validationText = 'buy milk'
        cy.findByPlaceholderText(/שם עסקה\.\.\./i).click().wait(500).type(validationText,{force:true})
        cy.wait(500).findByRole('button', {name: /הוסף עסקה/i}).click();
        cy.findByText(/\*שם עסקה, הטקסט חייב להיות בשפה העברית/i).should('be.visible');
        cy.findByPlaceholderText(/שם עסקה\.\.\./i).clear().wait(500);
        // Add transacation 
        const transactionText= 'הצגה'
        const transactionAmount = 5;    
       
        cy.findByPlaceholderText(/שם עסקה\.\.\./i).should('be.enabled').click().type('{selectall}{backspace}').type(transactionText, { delay: 100 })
        cy.findByPlaceholderText(/הכנס סכום עסקה.../).click().type(transactionAmount, { delay: 100 })
        cy.wait(500).findByRole('button', {name: /הוסף עסקה/i}).click();
        // get the select element and the options
        cy.get('#currency-list').select('₪').should('have.value', '₪');
        cy.get('#currency-list').select('¥').should('have.value', '¥');
        cy.get('#currency-list').select('£').should('have.value', '£');
        cy.get('#currency-list').select('€').should('have.value', '€');
        cy.get('#currency-list').select('R$').should('have.value', 'R$');
        cy.get('#currency-list').select('$').should('have.value', '$');
        // check the user balance
        cy.get('[data-test=user-balance]').then($balance => {
          const convertedOldBalance = parseFloat(oldBalance.replace(/\$|,/g, ""));
          const convertednewBalance = parseFloat($balance.text().replace(/\$|,/g, ""));
          expect(convertednewBalance-convertedOldBalance).to.equal(parseFloat(transactionAmount))
        });
        cy.log(cy.findAllByRole('button', {name: /X/i}))
        
         // find the delete button element by its class name
         cy.get('li').should('have.length', 4); 

         cy.get('.delete-btn').first().click();

         // assert that the transaction has been deleted
         cy.get('li').should('have.length', 3); 

      })
    })        



