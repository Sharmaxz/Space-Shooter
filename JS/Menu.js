	function Menu()
	{
		//essa parte é lida quando se cria o objeto dessa classe
	
		this.background = new  Image();//imagem bg menu
		this.background.src = "Imagem/IntroducaoBG.jpg";
		this.backgroundPosX= 0;
		
		this.background2= new  Image();//imagem bg menu 2
		this.background2.src = "Imagem/IntroducaoBG.jpg";
		this.background2PosX= 1600;
		
		this.Nuvens = new 	Image();//imagem nuvens menu
		this.Nuvens.src = "Imagem/nuvens2.png";
		this.NuvensPosX= 0;
		
		this.Nuvens2 = new 	Image();//imagem nuvens menu 2
		this.Nuvens2.src = "Imagem/nuvens2.png";
		this.Nuvens2PosX= 1600;

		this.Music = new Audio(); //Musica do menu
		this.Music.src ="Sons/Mega Man 10 - Boss - Sega Genesis Remix.mp3"; 
		
		this.Titulo = new MySprite("Imagem/Titulo.png", 0, 0, 385, 80, 50, 50, 385, 80, 4, 10); //Fazer a animação do titulo
		this.startB = new Botao("Imagem/startB.png", 300, 50, 50, 200);
		this.creditosB = new Botao("Imagem/creditosB.png",300,50,50,250);
		this.InstrucoesB = new Botao("imagem/InstrucoesB.png", 300,50,50,300);
		
		//this.counterToIntro = 0 //Temporizador voltado a voltar(lol) a introdução
		
		
		this.Update = function() //funcao atualizar
		{
			
			this.Music.play();
		
			this.backgroundPosX -=0.5;
			if(this.backgroundPosX <= -1600)
			this.backgroundPosX += 3200;
			
			this.background2PosX -=0.5;
			if(this.background2PosX <= -1600)
			this.background2PosX += 3200;
			
			this.NuvensPosX -=2;
			if(this.NuvensPosX <= -1600)
			this.NuvensPosX += 3200;

			this.Nuvens2PosX -=2;
			if(this.Nuvens2PosX <= -1600)
			this.Nuvens2PosX += 3200;

			this.BarcoPosX -=1.2;
			if(this.BarcoPosX <= -1600)
			this.BarcoPosX += 3200;
			
			this.Barco1PosX -=1.2;
			if(this.Barco1PosX <= -1600)
			this.Barco1PosX += 3200;
		
			/*this.counterToIntro += 1   //Temporizador voltado a voltar(lol) a introdução
			if(this.counterToIntro == 2000)
			{
				cenaAtual = cena.INTRODUCAO; 
				this.counterToIntro = 0

			]*/
		};
		
		this.Draw = function() //funcao desenhar
		{
		
			screen.drawImage(this.background, this.backgroundPosX, 0);
			screen.drawImage(this.background2, this.background2PosX, 0);
			/*screen.drawImage(this.Nuvens, this.NuvensPosX, 0);
			screen.drawImage(this.Nuvens2, this.Nuvens2PosX, 0);
			screen.drawImage(this.Barco, this.BarcoPosX, 0);
			screen.drawImage(this.Barco1, this.Barco1PosX, 0);*/
			this.Titulo.Draw();
			this.startB.Draw();
			this.creditosB.Draw();
			this.InstrucoesB.Draw();
		};
		
		this.mouse_down = function(mouse)
		{
			if(this.startB.Clicked(mouse))
			{
				cenaAtual = cena.LEVEL01;
				this.Music.pause();
				this.startB.button.sy = 50;
			}
			
			if(this.creditosB.Clicked(mouse))
			{
				 cenaAtual = cena.CREDITOS;
				 this.creditosB.button.sy = 50;
			}	 
			
			if(this.InstrucoesB.Clicked(mouse))
			{
				cenaAtual = cena.INSTRUCOES;
				this.InstrucoesB.button.sy = 50;
			} 
			
		};
		
		this.mouse_up = function(mouse)
		{};
	
		this.mouse_move = function(mouse)
		{
			this.startB.Sobre(mouse);
			this.creditosB.Sobre(mouse);
			this.InstrucoesB.Sobre(mouse);
		};
		
		this.key_down = function(key)
		{};
			
		this.key_up = function(key)
		{};
		
		
	}		