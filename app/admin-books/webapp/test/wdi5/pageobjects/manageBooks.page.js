module.exports = {

  iClickOnCreateNewBook: async () => {
    await browser.asControl({
      selector: {
        id: "preview::BooksListTarget--fe::table::Books::LineItem::StandardAction::Create",
        interaction: {
          idSuffix: "BDI-content"
        }
      }
    }).press();
  },

  theBookListContains: async () => {
    const visible = await browser.asControl({
    	selector: {
            controlType: "sap.m.Link",
            viewName: "sap.fe.templates.ListReport.ListReport",
            viewId: "preview::BooksListTarget",
            properties: {
                    text: "How to Cook Pancakes"
            }
    }}).getVisible();
    expect(visible).toBeTruthy();
}
  
}