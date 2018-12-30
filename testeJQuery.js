$(function()
{

	var acao = $('.acao');

	$('.ex1').click(function()
	{
		$(this).css("background", "white");

		acao.text("Ação: Clique");
	}).dblclick(function()
	{
		$(this).css("background", "lightblue");
		acao.text("Ação: Dois Cliques");
	});


	$('.ex2').hover(function()
	{
		$(this).css("background", "white");

		acao.text("Ação: Passou mouse");
	}).mouseleave(function()
	{
		$(this).css("background", "lightblue");
		acao.text("Tirou mouse");
	});

	$('.acao').hover(function() 
	{
		$(this).text("Ação: ");
	});







});