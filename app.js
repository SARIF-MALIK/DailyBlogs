//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
var _ = require('lodash');

const homeStartingContent = "Daily journaling is the act of thinking about your life and writing it down each day. No more, no less. It’s surprisingly simple & profoundly powerful. Let's Write Together";
const aboutContent = "My Name is SARIF MALIK. I'm a CSE undergrad at MAIT. I'm a Curious Developer learning Web & working on Coding Skills.";
const contactContent1 = "Toll-Free : 1-877-930-7483";
const contactContent2 = "P.O. Box 43083 Cascade Burnaby, BC V5G 4S2 Canada";

const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

// Initial Journals on Home

var posts = [{title : "Day 1", content : "OHHHH!!!! I forgot to tell you my name in this flow. My name is PRATHAMA.I dnt knw from where to start my journey but one thing I knw for sure is that APNA TOH BAD LUCK HI KHARAB HAI. This is the first time I am going to pen some lines regarding myself.Wish me on 9th July,1985. I managed to take a place on this multifaceted planet called EARTH. Primarily I wish to talk about my LIFELINE. My lifeline is my DAD. A person who is not only my lifeline but also my MAHASTRONG support system, friend, philosopher and guide. When I was sailing through the tycoons and tough phases of my life, there is one single person who used to say 'DNT WORRY SHONA MAIN HOON NA'. When my self-confidence lost the battle of called LIFE, then he was only one who constantly boosted me up and said never stop. Just go forward. If my lifeline is my dad that does not mean my MOM is lagging behind. She always used to say that many obstacles will come but you just carry on with your effort. Nuggets of bad luck hammered my expectations. I fell down, lost hope and broke into tears but started walking again. I am not a lucky person. Rather destiny always walked in the opposite direction of my luck. But I am grateful to GOD that He has given me the BEST PARENTS IN THIS WORLD. I can never express my love by saying because I prefer action than words. My dad is like banyan tree shade who has rendered me shelter and protection in scorching heat of sun. My mom is like SUNSHINE OF WINTER. Our opinions rarely match with each other, we have our part of fights but still I cannot carry on the mast of my life perfectly without sharing my thoughts with her. I always wore a perfect innocent smile complementing with puppy, liquid eyes in this situation."},
{title : "Day 2", content : "Now ladies and gentlemen kindly fasten your seatbelts and hold your breath. We will fly through the daily interesting(?) journey of my daily routine. I am going to share with you people about the SEEN JOURNEY WITH UNSEEN EYES. LIFE IS BREWING UP. HAVE A HOT SIP.Today I boarded the bus and luckily got a window seat. Damn why luckily?? Whts so lucky abt getting window seat?? Well my jaw gets flexed automatically when I get a window seat. And finish my silent prayers. Next wht?? Ear plugs in, volume up and ignore the world. Believe me its a divine feeling. While travelling my favourite job is to see the scenic beauty and romance the window. Next I will walk through the lanes of Park Circus. While moving my heels I observe many things.At first comes a muddy tea stall. A smokey effect just fades away the vision. While a group of people are in a rush to reach the school, college and office, on the other hand some people are complementing with them and just cannot make out how to kill their time. They say they do not have any work and leisure away the time. But I can see their favourite timepass is to gossip with the sip of hot tea. A sip of hot steaming tea in muddy cups just perfectly stir with the political discussion. On the other hand some pacify their hunger by giving a chance to their tongue to have a delicious taste of omelette and bread butter. Some others thrive on the cup shaped kachoris and lentil dal."}];


app.get('/', function(req, res){
  res.render("home", {homeContent: homeStartingContent, newPosts: posts});
});
app.get('/about', function(req, res){
  res.render("about", {about: aboutContent});
});
app.get('/contact', function(req, res){
  res.render("contact", {contactPhone: contactContent1, contactAdd: contactContent2});
});
app.get('/compose', function(req, res){
  res.render("compose");
})

app.post('/compose', function(req, res){
  const post = {
    title: req.body.postTitle,
    content: req.body.postBody
  };
  posts.push(post);
  res.redirect("/");
})

app.get('/posts/:postName', function(req, res){

  const reqTitle = _.lowerCase(req.params.postName);
  posts.forEach(function(post){
    const storedTitle = _.lowerCase(post.title);
    if(storedTitle === reqTitle){
      res.render("post", {title: post.title, content: post.content});
    }
  });
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
