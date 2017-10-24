var express = require('express');
var router = express.Router();
var config = require('../config.json');
var request = require('request');
const queryString = require('query-string');

var auth_url = 'https://' + config.username + ':' +  config.password + config.END_POINT;

router.get('/page/:page', function(req, res, next) {
    var page = Number(req.params.page) < 1 ? 1 : Number(req.params.page);

    request({url: auth_url+'tickets.json?per_page=10&page='+req.params.page}, function (error, response, body) {
        if(undefined == JSON.parse( body ).tickets)
        {
            res.render('no-ticket',  {message:'Sorry! No tickets found'} );
        }
        else
        {
            console.log(Math.ceil(Number(JSON.parse( body ).count)/10));
            res.render('all-tickets',
                { tickets : JSON.parse( body ).tickets,
                    next_page: page+1,
                    previous_page : page - 1,
                    total_page : Math.ceil(Number(JSON.parse( body ).count)/10)  });
        }

    });
});


router.get('/id/:id', function(req, res, next) {

    request({url: auth_url+'tickets/'+req.params.id+'.json'}, function (errors, response, body) {
        console.log(response.statusCode ) ;
        if( response.statusCode != 200)
        {
            res.render('error',{message:"Error",error: { status:response.statusCode}});
        }
        if(undefined == JSON.parse( body ).ticket)
        {

            res.render('no-ticket',  {message:'Sorry! Ticket not found'} );
        }
        else
        {
            res.render('ticket',  JSON.parse( body ).ticket );
        }

    });
});



module.exports = router;
