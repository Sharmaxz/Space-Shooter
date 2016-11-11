	function Introducao()
	{
		//essa parte é lida quando se cria o objeto dessa classe
	
		this.background = new  Image();
		this.background.src = "Imagem/IntroducaoBG.jpg";
		this.backgroundPosX= 0;
		
		this.background2 = new  Image();
		this.background2.src = "Imagem/IntroducaoBG.jpg";
		this.background2PosX= 1600;
		
		this.background3 = new Image();
		this.background3.src = "Imagem/IntroducaoNight1.jpg";
		this.background3PosX= 0;
		
		this.background4 = new Image();
		this.background4.src = "Imagem/IntroducaoNight2.jpg";
		this.background4PosX= 0;
		
		this.background5 = new Image();
		this.background5.src = "Imagem/IntroducaoNight3.jpg";
		this.background5PosX= 0;
		
		this.background6 = new Image();
		this.background6.src = "Imagem/IntroducaoNight4.jpg";
		this.background6PosX= 0;
		
		this.background7 = new Image();
		this.background7.src = "Imagem/IntroducaoNight5.jpg";
		this.background7PosX= 0;
		this.background7PosY= 0;
		
		this.background8 = new Image();
		this.background8.src = "Imagem/IntroducaoNight6.jpg";
		this.background8PosX= 0;
		this.background8PosY= 0;
		
		this.cloud = new 	Image();
		this.cloud.src = "Imagem/nuvens2.png";
		this.cloudPosX= 0;
		
		this.cloud2 = new 	Image();
		this.cloud2.src = "Imagem/nuvens2.png";
		this.cloud2PosX= 1600;
		
		this.cloud3 = new 	Image();
		this.cloud3.src = "Imagem/nuvens3.png";
		this.cloud3PosX= 0;
		
		this.cloud4 = new 	Image();
		this.cloud4.src = "Imagem/nuvens4.png";
		this.cloud4PosX= 0;
		
		this.cloud5 = new 	Image();
		this.cloud5.src = "Imagem/nuvens5.png";
		this.cloud5PosX= 0;
		
		this.cloud6 = new 	Image();
		this.cloud6.src = "Imagem/nuvens6.png";
		this.cloud6PosX= 0;
		
		this.cloud7 = new 	Image();
		this.cloud7.src = "Imagem/nuvens7.png";
		this.cloud7PosX= 0;

		this.barco = new 	Image();
		this.barco.src = "Imagem/barcoComFogo.png";
		this.barcoPosX= 0;
		
		this.barco2 = new 	Image();
		this.barco2.src = "Imagem/barcoComFogo2.png";
		this.barco2PosX= 0;


		
		this.logo = new MySprite("Imagem/Logos.png", 0, 0, 580, 600, 100, 10, 580, 600, 11, 30); //Não estou usano isso por enquanto a logo
		
		this.counterToMenu = 0
		this.counterToBackground = 0
		this.counterToBoat = 0
		this.counterToStar = 0
		this.counterToBack = 0
		
		this.music= new Audio();
		this.music.src = ""
		
		
		
		this.Update = function()
		{
		
		

			
			this.backgroundPosX -=1;
			if(this.backgroundPosX <= -1600)
			this.backgroundPosX += 3200;
			
			this.background2PosX -=1;
			if(this.background2PosX <= -1600)
			this.background2PosX += 3200;
			
			this.background3PosX -=1;
			if(this.background3PosX <= -1600)
			this.background3PosX += 3200;
			
			this.background4PosX -=1;
			if(this.background4PosX <= -1600)
			this.background4PosX += 3200;
			
			this.background5PosX -=1;
			if(this.background5PosX <= -1600)
			this.background5PosX += 3200;
			
			this.background6PosX -=1;
			if(this.background6PosX <= -1600)
			this.background6PosX += 3200;
			
			this.background7PosX -=1;
			if(this.background7PosX <= -1600)
			this.background7PosX += 3200;
			
			this.background8PosX -=1;
			if(this.background8PosX <= -1600)
			this.background8PosX += 3200;
			
			if(this.background7PosX == -720)
				this.background7PosY = -4
				
			if(this.background7PosX == -721)
				this.background7PosY = 0
				
			if(this.background8PosX == -720)
				this.background8PosY = -4
				
			if(this.background8PosX == -721)
				this.background8PosY = 0
				
			
			this.cloudPosX -=1.8;
			if(this.cloudPosX <= -1600)
			this.cloudPosX += 3200;

			this.cloud2PosX -=1.8;
			if(this.cloud2PosX <= -1600)
			this.cloud2PosX += 3200;
			
			this.cloud3PosX -=1.8;
			if(this.cloud2PosX <= -1600)
			this.cloud3PosX += 3200;
			
			this.cloud4PosX -=1.8;
			if(this.cloud4PosX <= -1600)
			this.cloud4PosX += 3200;
			
			this.cloud5PosX -=1.8;
			if(this.cloud5PosX <= -1600)
			this.cloud5PosX += 3200;
			
			this.cloud6PosX -=1.8;
			if(this.cloud6PosX <= -1600)
			this.cloud6PosX += 3200;
			
			this.cloud7PosX -=1.8;
			if(this.cloud7PosX <= -1600)
			this.cloud7PosX += 3200;

			this.barcoPosX -=1.2;
			if(this.barcoPosX <= -1600)
			this.barcoPosX += 3200;
			
			this.barco2PosX -=1.2;
			if(this.barco2PosX <= -1600)
			this.barco2PosX += 3200;
			

			if (this.logo.current_frame == 10) //Ele é retardado e começa a contar do 0 '-'
				this.logo.setFPS(0);

			else if (this.counter > 30) //Espera o current_frame ser maior que 30, para fazer com que a imagem comece aparecer
				this.logo.setFPS(1);

			this.counter++;//Não estou usano isso por enquanto


			this.counterToBackground +=1
			
			this.counterToBoat += 1
			if(this.counterToBoat == 15)
				this.counterToBoat = 0
				
			
			if(this.counterToBackground >= 300)
			{
					this.counterToStar += 1
					
					if(this.counterToStar == 25)
						this.counterToStar = 0
			}
				
			this.counterToMenu += 1
			if(this.counterToMenu == 750)
			{
				this.counterToBack += 1
				cenaAtual = cena.MENU; 
				//Preciso fazer uma animação aqui
			
			}
			
			/*if(this.counterToBack == 1) //Temporizador voltado a voltar(lol) a introdução
			{
				this.backgroundPosX = 0;
				this.background2PosX = 0;
				this.background3PosX = 0; 
				this.background4PosX = 0; 
				this.background5PosX = 0; 
				this.background6PosX = 0; 
				this.background7PosX = 0;
				this.cloudPosX = 0;
				this.cloud2PosX = 1600;
				this.cloud3PosX = 0;
				this.cloud4PosX = 0;
				this.cloud5PosX = 0;
				this.cloud6PosX = 0;
				this.cloud7PosX = 0;
				this.barcoPosX = 0;
				this.barco2PosX = 0;
				this.counterToBackground = 0
				this.counterToStar = 0
				this.counterToBoat = 0
				this.counterToMenu = 0
				
			}*/
			
		};	
		
		
		this.Draw = function()
		{
			screen.drawImage(this.background, this.backgroundPosX, 0);
			screen.drawImage(this.background2, this.background2PosX, 0);
			screen.drawImage(this.cloud, this.cloudPosX, 0);
			
			
			if(this.counterToBackground >= 100)//O que faz com que o jogo fique a noite
			{
				screen.drawImage(this.background3, this.background3PosX, 0);
				screen.drawImage(this.cloud3, this.cloud3PosX, 0);
			}	
			
			if(this.counterToBackground >= 150)
			{
				screen.drawImage(this.background4, this.background4PosX, 0);
				screen.drawImage(this.cloud4, this.cloud4PosX, 0);
			}
			
			if(this.counterToBackground >= 200)
			{
				screen.drawImage(this.background5, this.background5PosX, 0); 
				screen.drawImage(this.cloud5, this.cloud5PosX, 0);
			}
			
			if(this.counterToBackground >= 250)
			{
				screen.drawImage(this.background6, this.background6PosX, 0); 
				screen.drawImage(this.cloud6, this.cloud6PosX, 0);
				
			}
			
			if(this.counterToBackground >= 300)
			{
				screen.drawImage(this.background7, this.background7PosX, this.background7PosY); 
				screen.drawImage(this.cloud7, this.cloud7PosX, 0);
			}	
			
			
			
			if(this.counterToBoat == 10 || 
				this.counterToBoat == 11 || 
				this.counterToBoat == 12 || 
				this.counterToBoat == 13 || 
				this.counterToBoat == 14 || 
				this.counterToBoat == 15)
					screen.drawImage(this.barco2, this.barco2PosX, 0);
					
					
					screen.drawImage(this.barco, this.barcoPosX, 0);//Não está conectado a esse if de cima
					
			
			if(this.counterToStar == 10 || 
				this.counterToStar == 11 || 
				this.counterToStar == 12 || 
				this.counterToStar == 13 || 
				this.counterToStar == 14 || 
				this.counterToStar == 15 || 
				this.counterToStar == 16 || 
				this.counterToStar == 17 || 
				this.counterToStar == 18 || 
				this.counterToStar == 19 || 
				this.counterToStar == 20) 
			{
				screen.drawImage(this.background8, this.background8PosX, this.background8PosY); 
				screen.drawImage(this.cloud7, this.cloud7PosX, 0);
				screen.drawImage(this.barco, this.barcoPosX, 0);
				
				if(this.counterToBoat == 10 || 
					this.counterToBoat == 11 || 
					this.counterToBoat == 12 || 
					this.counterToBoat == 13 || 
					this.counterToBoat == 14 || 
					this.counterToBoat == 15)
					
					screen.drawImage(this.barco2, this.barco2PosX, 0);
			}
					
				//O movimento do fogo no barco
			
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
				this.music.pause();
				this.counterToBack += 1
			}
		};
		
		this.key_up = function(key) 
		{};	

	};	