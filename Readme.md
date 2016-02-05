#mlb-scores

Download MLB Scores easily

## Usage
```javascript
gdx = require('gdx');

gdx.getGameUrl('giants', function(err, url){
  if (!err){
    gdx.getGameInfo(url, function(err, data){
      console.log(data);
    });
  }
})
```
