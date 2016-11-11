	function Ganhou()
	{
		//essa parte é lida quando se cria o objeto dessa classe
	
		this.background = new  Image();//imagem bg menu
		this.background.src = "Imagem/IntroducaoBG.jpg";
		this.backgroundPosX= 0;
		
		this.background2= new  Image();//imagem bg menu 2
		this.background2.src = "Imagem/IntroducaoBG.jpg";
		this.background2PosX= 1600;
		
		this.Nuvens = new 	Image();//imagem nuvens menu
		this.Nuvens.src = "Imagem/nuvens.png";
		this.NuvensPosX= 0;
		
		this.Nuvens2 = new 	Image();//imagem nuvens menu 2
		this.Nuvens2.src = "Imagem/nuvens.png";
		this.Nuvens2PosX= 1600;

		this.Barco = new 	Image();//imagem barco menu
		this.Barco.src = "Imagem/barco.png";
		this.BarcoPosX= 0;

		this.Barco1 = new 	Image();//imagem barco menu 2
		this.Barco1.src = "Imagem/barco.png";
		this.Barco1PosX= 1600;
		
		this.Music = new Audio();//Musica vitoria
		this.Music.src ="Sons/ganhou.mp3"; 

		this.Update = function()
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
		
		};
		
		this.Draw = function()
		{
			screen.drawImage(this.background, this.backgroundPosX, 0);
			screen.drawImage(this.background2, this.background2PosX, 0);
			screen.drawImage(this.Nuvens, this.NuvensPosX, 0);
			screen.drawImage(this.Nuvens2, this.Nuvens2PosX, 0);
			screen.drawImage(this.Barco, this.BarcoPosX, 0);
			screen.drawImage(this.Barco1, this.Barco1PosX, 0);
			
			//desenhando vitoria
			screen.font = "70px Comic Sans MS";
			screen.fillStyle = "red";
			screen.textAlign = "center";
			screen.fillText("YOU WIN",canvas.width/2, canvas.height/2);
			
		};
		
		this.mouse_down = function(mouse)
		{};
		
		this.mouse_up = function(mouse)
		{};
	
		this.mouse_move = function(mouse)
		{};
		
		this.key_down = function(key)
		{
			if(key.keyCode == 13)
			{
				cenaAtual = cena.MENU;
				this.Music.pause();
			}
		};
			
		this.key_up = function(key)
		{};
		
	}		