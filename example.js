gdx = require('./gdx.js');

gdx.getGameUrl('giants', new Date(2015,6, 11), function(err, url){
  if (!err){
    gdx.getGameInfo(url, function(err, data){
      console.log(data);
    });
  }
})
