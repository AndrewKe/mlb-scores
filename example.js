mlb = require('./mlb-scores.js');

mlb.getGameUrl('giants', new Date(2015,6, 11), function(err, url){
  if (!err){
    mlb.getGameInfo(url, function(err, data){
      console.log(JSON.stringify(data, null, 4));
    });
  }
})
