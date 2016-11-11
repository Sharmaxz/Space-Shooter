	function Level01()
	{
		//essa parte é lida quando se cria o objeto dessa classe
		this.background = new  Image();//imagem bg menu
		this.background.src = "Imagem/IntroducaoNight6.jpg";
		this.backgroundPosX= 0;
		
		this.backgroundT = new  Image();//imagem bg menu
		this.backgroundT.src = "Imagem/IntroducaoT.jpg";
		this.backgroundTPosX= 0;
		
		this.background2= new  Image();//imagem bg menu 2
		this.background2.src = "Imagem/IntroducaoNight6.jpg";
		this.background2PosX= 1600;
		
		this.cloud = new 	Image();//imagem nuvens menu
		this.cloud.src = "Imagem/nuvens7.png";
		this.cloudPosX= 0;
		
		this.cloud2 = new 	Image();//imagem nuvens menu 2
		this.cloud2.src = "Imagem/nuvens7.png";
		this.cloud2PosX= 1600;
		
		this.nave = new MySprite("Imagem/nave.png", 0, 0, 81, 35, 40, 400, 81, 35, 2, 3); //nave
		this.nave.velX = 5;
		this.nave.velY = 5;
		this.nave.left = false;
		this.nave.right = false;
		this.nave.up = false;
		this.nave.down = false;
		this.Pontos = 0;
		
		this.ListaB = new Array();
		
		this.Music = new Audio();//Musica 
		this.Music.src ="Sons/lvl1.mp3"; 
		
		
		this.ListaTiros = new Array();
		this.ListaDeInimigos = new Array();
	
		//Delay do Tiro, porém não está funcionando
		this.delay = 15; 
		this.delay2 = 70;
		

		this.Update = function()
		{
			this.Music.play();
			
			this.backgroundPosX -=0.5;
			if(this.backgroundPosX <= -1600)
			this.backgroundPosX += 3200;
			
			this.backgroundTPosX -=0.5;
			if(this.backgroundTPosX <= -1600)
			this.backgroundTPosX += 3200;
			
			
			this.background2PosX -=0.5;
			if(this.background2PosX <= -1600)
			this.background2PosX += 3200;
			
			this.cloudPosX -=1.2;
			if(this.cloudPosX <= -1600)
			this.cloudPosX += 3200;

			this.cloud2PosX -=1.2;
			if(this.cloud2PosX <= -1600)
			this.cloud2PosX += 3200;
			
			if (this.nave.x < 0)
			{
				this.nave.x = 0
			};
			
			if (this.nave.x > 780)
			{
				this.nave.x = 780
			};
			
			
			if (this.nave.y < 0)
			{
				this.nave.y = 0
			};
			
			if (this.nave.y > 570)
			{
				this.nave.y = 570
			}; 
				
			
			if(this.nave.right)
			{
				this.nave.x += this.nave.velX
			};
				
			if(this.nave.left)
			{
				this.nave.x -= this.nave.velX
			};
			
			if(this.nave.up)
			{
				this.nave.y -= this.nave.velY
			};
			
			if(this.nave.down)
			{
				this.nave.y += this.nave.velY
			};
		
			for(var i = 0; i < this.ListaTiros.length; i++) //tiro da nave
			{
				if(this.ListaTiros[i] != null)
				{
					this.ListaTiros[i].Update();
					
					//limite do tiro
					if(this.ListaTiros[i].x > 800)
					{
						this.ListaTiros.splice(i,1);
					}
				}
			};
			
			for(var i =0; i < this.ListaDeInimigos.length; i++)
			{
				if(this.ListaDeInimigos[i] != null)
				{
					this.ListaDeInimigos[i].Update();
					
				}	
			}
			
			this.delay --;
			this.delay2 --;
			
			
			if(this.delay2 <= 0)
			{
				//this.random = Math.random();

				
				//if(this.random)
				this.enemy = new MySprite("Imagem/EnemyT.png",0,0,80,77,800,Math.random()*500,80,77,2,10);
			
				this.enemy.vel_x = -(Math.random()*5) - 1;
				this.ListaDeInimigos.push(this.enemy);
				this.delay2 = 70;
			}
			
			if(this.Pontos == 30)
			{
				cenaAtual = cena.LEVEL02;
				this.Music.pause();
			}
			
			//colisao tiro e inimigo morre
			for(var i = 0; i <this.ListaTiros.length; i++)
			{		
				for (var j = 0; j <this.ListaDeInimigos.length; j++)
				{
					if(this.ListaDeInimigos[j] != null && this.ListaTiros[i] != null)
					{
						if(this.ListaTiros[i].Collided(this.ListaDeInimigos[j]))
						{
							this.ListaTiros.splice(i,1);
							this.ListaDeInimigos.splice(j,1);
							this.Pontos +=1;
						}			
					}		 
				}		
			}
			
			
			
			//colisao inimigo, onde o jogador perde
			for(var i = 0; i <this.ListaDeInimigos.length; i++)
			{
				if(this.ListaDeInimigos[i].Collided(this.nave))
				{ 
					cenaAtual = cena.MORREU;
					this.Music.pause();
					
						this.backgroundPosX=0;
				}
			}
			
				

		};
		

		
		this.Draw = function()
		{
			//Desenhar
			screen.drawImage(this.background, this.backgroundPosX, 0);
			//screen.drawImage(this.backgroundT, this.backgroundTPosX, 0);
			screen.drawImage(this.background2, this.background2PosX, 0);
			screen.drawImage(this.cloud, this.cloudPosX, 0);
			screen.drawImage(this.cloud2, this.cloud2PosX, 0);
			this.nave.Draw();
			
			//Lista do Tiro
			for(var i = 0; i <this.ListaTiros.length; i++) //estrutura de repeticao (for) tiro
			{
				if(this.ListaTiros != null)
				this.ListaTiros[i].Draw();
			}
			
			//Lista de Inimigos
			for(var i = 0; i <this.ListaDeInimigos.length; i++)
			{
				if(this.ListaDeInimigos[i] != null)
				{
					this.ListaDeInimigos[i].Draw();
				}
			}	
			
			
				//Pontuação
				screen.font = "15px Comic Sans MS";
				screen.fillStyle = "black";
				screen.textAlign = "center";
				screen.fillText("Pontos: "+this.Pontos,80,30);
		};
		
	
		this.mouse_down = function(mouse)
		{};
		
		this.mouse_up = function(mouse)
		{};
	
		this.mouse_move = function(mouse)
		{};
		
		this.key_down = function(key)
		{
			if(key.keyCode == 37)
			{
				this.nave.left = true;				
			};
			
			if(key.keyCode == 39)
			{
				this.nave.right = true;				
			};
			
			if(key.keyCode == 38)
			{
				this.nave.up = true;				
			};
			
			if(key.keyCode == 40)
			{
				this.nave.down = true;				
			};
			
			if(key.keyCode == 32)
			{
				this.tiro = new MySprite("Imagem/tiro.png", 0,0,19,9, this.nave.x + 70,this.nave.y+ 18,19,9,3,4); //tiros
				this.tiro.vel_x = 10;
				this.ListaTiros.push(this.tiro);
				//this.nave.button.sy = 110;
			}
		};
			
		this.key_up = function(key)
		{
			if(key.keyCode == 37)
			{
				this.nave.left = false;				
			};
			
			if(key.keyCode == 39)
			{
				this.nave.right = false;				
			};
			
			if(key.keyCode == 38)
			{
				this.nave.up = false;				
			};
			
			if(key.keyCode == 40)
			{
				this.nave.down = false;				
			};
		};
		
	}		