var mlb = require('mlb-scores');

mlb.getGameUrl('giants', new Date(2015,6, 11), function(err, url){
  if (!err){
    mlb.getGameInfo(url, function(err, data){
      console.log(JSON.stringify(data, null, 4));
    });
  }
})
