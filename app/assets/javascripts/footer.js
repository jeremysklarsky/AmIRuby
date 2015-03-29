$(function(){
  creditsListener();
})

function creditsListener(){
  $('a#credits').on("click", showCredits)
}

// .slideToggle is fine for now
// TODO: make creditString slide left -> right.
function showCredits(){
  var creditString = '<a href="https://github.com/SophieDeBenedetto">Sophie DeBenedetto</a>,&nbsp';
      creditString += '<a href="https://github.com/jeremysklarsky">Jeremy Sklarsky</a>,&nbsp';
      creditString += '<a href="https://github.com/rnackman">Rachel Nackman</a>,&nbsp';
      creditString += '<a href="https://github.com/ktravers">Kate Travers</a>';
  $('footer ul li:first-child').hide().html(creditString).slideToggle();
}