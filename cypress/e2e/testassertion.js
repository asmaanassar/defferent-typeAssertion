describe('aoutomation test store', () => {
    it('promiss', () => {
        cy.visit("https://automationteststore.com/")
        cy.get(".prdocutname").contains("Benefit Bella Bamba").click().then(function (element) {

            console.log(element.text() + "the item  has been added")
            cy.log(element.text() + "the item  has been added")
        })
        cy.get("section[class='breadcrumbs'] li:nth-child(1) a:nth-child(1)").click()

        cy.get("a[href='https://automationteststore.com/index.php?rt=content/content&content_id=4']").click().then(function (element2) {

            console.log(element2.text() + "the shipping item  has been clicked")
            cy.log(element2.text() + "the shipping item  has been clicked")
        })

        cy.get("a[href$='contact']").click().then(function (element2) {

            console.log(element2.text() + "the contact us item  has been clicked")
            cy.log(element2.text() + "the contact us item  has been clicked")
        })

        cy.get("section[class='breadcrumbs'] li:nth-child(1) a:nth-child(1)").click()

        cy.get("a[href='https://automationteststore.com/index.php?rt=content/sitemap']").click().then(function (element2) {

            console.log(element2.text() + "the Sitmap item  has been clicked")
            cy.log(element2.text() + "the sitmap item  has been clicked")
        })

    });
});