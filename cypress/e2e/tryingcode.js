describe("inspect items and understands chain commands", () => {
    it.only("test by using text ", () => {
      cy.visit("https://www.automationteststore.com");
  
      cy.get(".prdocutname").contains("Skinsheen Bronzer Stick").click().then(function(element){
          console.log(element.text()+" has been clicked ")
      });
      console.log("saksdakldjalkdjlaksdjklasd")
    });
  
    it.skip("test by using index ", () => {
      cy.visit("https://www.automationteststore.com");
  
      cy.get(".fixed_wrapper").find(".prdocutname").eq(1).click();
    });
    it.skip("test", () => {
      cy.visit("https://www.automationteststore.com");
  
      let c = cy.get(".fixed_wrapper").find(".prdocutname");
    });
  });