```javascript
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    
    // Replace with your Google Sheet ID
    const SHEET_ID = 'YOUR_SHEET_ID_HERE';
    const sheet = SpreadsheetApp.openById(SHEET_ID).getActiveSheet();
    
    // Add headers if first row
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Timestamp', 'Winner', 'Loser']);
    }
    
    // Add the data as a new row
    sheet.appendRow([
      data.timestamp,
      data.winner,
      data.loser
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({success: true}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService.createTextOutput('Modality Ranker API is running')
    .setMimeType(ContentService.MimeType.TEXT);
}
```
