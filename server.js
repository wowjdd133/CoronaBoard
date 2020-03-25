const express = require('express');
const app = express();
const PORT = 5000;
const axios = require('axios');
const cheerio = require('cheerio');
const log = console.log;

app.get('/coronaWorld', (req,res) => {
  console.log('world start');
  const getHTML = async () => {
    try {
      return await axios.get("https://www.worldometers.info/coronavirus/");
    } catch (err) {
      console.error(err);
    }
  }

  getHTML()
    .then(html => {
      let confirmList = {};
      const $ = cheerio.load(html.data);

      $('div.content-inner').find('div#maincounter-wrap').find('div.maincounter-number').each(function(i, elem) {
        if(i == 0){
          confirmList.cases = $(this).find('span').text().trim();
        }
        else if(i == 1){
          confirmList.deaths = $(this).find('span').text();
        }
        else if(i == 2){
          confirmList.recovered = $(this).find('span').text();
        }
      })

      confirmList.date = $('div[style="font-size:13px; color:#999; text-align:center"]').text();

      console.log('world done');
      res.json(confirmList);
    })
})

app.get('/coronaKorea',(req, res) => {
  console.log('korea start');
  const getHTML = async () => {
    try{
      return await axios.get('http://ncov.mohw.go.kr/index.jsp');
    } catch(err) {
      console.error(err);
    }
  }

  getHTML()
    .then(html => {
      let confirmList = {};
      const $ = cheerio.load(html.data);

      $('div.liveNum').children('ul').children('li').each(function(i, elem) {
        if(i == 0){
          confirmList.cases = $(this).children('span.num').text().replace('(누적)', "");
        } else if(i == 1){
          confirmList.recovered = $(this).children('span.num').text();
        } else if(i == 3){
          confirmList.deaths = $(this).children('span.num').text();
        }
        // console.log($(this).children('span.num').text());
      })

      confirmList.date = $('span.livedate').first().text();
      // console.log($('div .liveNum').length);
      // console.log($('ul .liveNum').find('li').find('span').text());
      console.log('korea done');
      res.json(confirmList);
    })
})

app.get('/coronaKoreaCheck', (res,req) => {
  const getHTML = async () => {
    try{
      return await axios.get('http://ncov.mohw.go.kr/index.jsp');
    } catch(err) {
      console.error(err);
    }
  }

  getHTML()
    .then(html => {
      let confirmList = {};
      const $ = cheerio.load(html.data);

      $('span.num_rnum').each(function(i,elem) {
        console.log($(this).text())
      })
    })
})

app.listen(PORT, ()=> {
  console.log(`server running on PORT ${PORT}`);
})