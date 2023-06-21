///<reference types="Cypress"/>
describe('testing Automation test store', () => {
    it('testing1', () => {
        cy.visit("https://automationteststore.com/")
        cy.get("a[href='https://automationteststore.com/index.php?rt=content/contact']").click()
       cy.get('#ContactUsFrm_first_name').type("AsmaNassar")
       cy.get("input[id='ContactUsFrm_email']").type("asmaanassar89@gmail.com")
       cy.get("textarea[name='enquiry']").type("this is a test")
       cy.get("button[title='Submit']").click()
    });


    it.only('test2', () => {
        cy.visit("https://automationteststore.com/")
        cy.get("a[href='https://automationteststore.com/index.php?rt=content/contact']").click()
       cy.get('#ContactUsFrm_first_name').type("AsmaNassar")
       cy.get("input[id='ContactUsFrm_email']").type("asmaanassar89@gmail.com")
       cy.get("textarea[name='enquiry']").type("this is a test")
       cy.get("button[title='Submit']").click()
       /*this is assertion number 1*/
       cy.get('.mb40 > :nth-child(3)').should("have.text","Your enquiry has been successfully sent to the store owner!")
       /*the folowing code can't work*/
      
     //cy.get('.mb40 > .btn').should("have.property","title")

     /*this is the correct code foe assertion on title bu title of page of html*/
     /*this is assertion number 2"*/
     /*انواع مختلفة للتاكيد من عنوان الصفحة*/
       cy.document().should("have.property","title").and("eq","Contact Us")
       cy.title().should("include","Us")
       cy.title().should("eq","Contact Us")

    
       /*in below example the assertion faild becoase the document not always correct just when i need to assertion on the title so the code can't find the attribute 
       
       link*/
       //cy.document().should("have.property","link")
    /*First type:use location as link to assert if the link for page passed*/
       cy.location("href").should("include","contact")

       /*Second type:use location with its to assertion if the url for page is correct or not*/
       cy.location().its("href").should("include","contact")

       /*thierd types:use url*/
       cy.url().should("include","contact")












    });
});