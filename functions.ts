export const onOpen = () => {
  const menu = SpreadsheetApp.getUi()
    .createMenu('Test menu')
    .addItem('Test Item', 'openDialog');

  menu.addToUi();
};

export const openDialog = () => {
  const html = HtmlService.createHtmlOutputFromFile('dialog-demo')
    .setWidth(600)
    .setHeight(600);
  SpreadsheetApp.getUi().showModalDialog(html, 'Test dialog');
};
