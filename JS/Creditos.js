	function Creditos()
	{
		//essa parte é lida quando se cria o objeto dessa classe
		this.background = new  Image();//imagem bg menu
		this.background.src = "Imagem/IntroducaoBG.jpg";
		this.backgroundPosX= 0;
		
		this.background2= new  Image();//imagem bg menu 2
		this.background2.src = "Imagem/IntroducaoBG.jpg";
		this.background2PosX= 1600;
		
		this.cloud = new 	Image();//imagem nuvens menu
		this.cloud.src = "Imagem/nuvens.png";
		this.cloudPosX= 0;
		
		this.cloud2 = new 	Image();//imagem nuvens menu 2
		this.cloud2.src = "Imagem/nuvens.png";
		this.cloud2PosX= 1600;

		this.Barco = new 	Image();//imagem barco menu
		this.Barco.src = "Imagem/barco.png";
		this.BarcoPosX= 0;

		this.Barco1 = new 	Image();//imagem barco menu 2
		this.Barco1.src = "Imagem/barco.png";
		this.Barco1PosX= 1600;

		this.Creditos = new Image();
		this.Creditos.src = "Imagem/Creditos.png";
		
		this.TituloC = new MySprite("Imagem/creditosT.png", 0, 0, 597, 80, 0, 0, 597, 80, 4, 10); //Fazer a animação do titulo
		this.backB = new Botao("Imagem/Back1.png",70,70,2,560);

		this.Update = function()
		{
			
		
			this.backgroundPosX -=0.5;
			if(this.backgroundPosX <= -1600)
			this.backgroundPosX += 3200;
			
			this.background2PosX -=0.5;
			if(this.background2PosX <= -1600)
			this.background2PosX += 3200;
			
			this.cloudPosX -=2;
			if(this.cloudPosX <= -1600)
			this.cloudPosX += 3200;

			this.cloud2PosX -=2;
			if(this.cloud2PosX <= -1600)
			this.cloud2PosX += 3200;

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
			screen.drawImage(this.cloud, this.cloudPosX, 0);
			screen.drawImage(this.cloud2, this.cloud2PosX, 0);
			screen.drawImage(this.Barco, this.BarcoPosX, 0);
			screen.drawImage(this.Barco1, this.Barco1PosX, 0);
			this.TituloC.Draw();
			this.backB.Draw();
			screen.drawImage(this.Creditos,0,0);
			
		};
		
		this.mouse_down = function(mouse)
		{
			if(this.backB.Clicked(mouse))
			{
				cenaAtual = cena.MENU;
				this.backB.button.sy = 70;
			}
		};
		
		this.mouse_up = function(mouse)
		{};
	
		this.mouse_move = function(mouse)
		{
			this.backB.Sobre(mouse);
		};
		
		this.key_down = function(key)
		{};
			
		this.key_up = function(key)
		{};
		
	}		