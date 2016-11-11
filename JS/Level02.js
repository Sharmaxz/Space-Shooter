	function Level02()
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

		this.nave = new MySprite("Imagem/nave.png", 0, 0, 81, 35, 40, 400, 81, 35, 2, 3); 
		this.navePosX = 40
		this.navePosY = 400
		this.nave.vel_X = 5;
		this.nave.vel_Y = 5;
		this.nave.hp = 100;
		this.nave.left = false;
		this.nave.right = false;
		this.nave.up = false;
		this.nave.down = false;
		this.Pontos = 30;
		this.PontosB = 0;
		
		
		
		this.ListaB = new Array();
		
		this.Music = new Audio();//Musica lvl1 e 2
		this.Music.src ="Sons/lvl1.mp3"; 
		
		this.Music2 = new Audio();//Musica boss
		this.Music2.src ="Sons/boss.mp3"; 
		
		
		this.ListaTiros = new Array();
		this.ListaDeInimigos = new Array();
		
		this.contador = 0;
		
		this.delay = 15;
		this.delay2 = 70;
	

		this.Update = function()
		{
			
			this.Music.play();
			
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

			
			
			
			if (this.nave.x < 0) //limite nave canvas
			{
				this.nave.x = 0
			};
			
			if (this.nave.x > 760) //limite nave canvas
			{
				this.nave.x = 760
			};
			
			
			if (this.nave.y < 0) // limite nave canvas
			{
				this.nave.y = 0
			};
			
			if (this.nave.y > 550) //limite nave canvas
			{
				this.nave.y = 550
			}; 
				
			
			if(this.nave.right) //vel nave para mover
			{
				this.nave.x += this.nave.vel_X
			};
				
			if(this.nave.left) //vel nave 
			{
				this.nave.x -= this.nave.vel_X
			};
			
			if(this.nave.up) // vel nave
			{
				this.nave.y -= this.nave.vel_Y
			};
			
			if(this.nave.down) //vel m=nave
			{
				this.nave.y += this.nave.vel_Y
			}
			
			
			//tiros da nave
			for(var i = 0; i < this.ListaTiros.length; i++) 
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
			}
			
			
		
			//movimento inimigo
			for(var i =0; i <this.ListaDeInimigos.length; i++)
			{
				if(this.ListaDeInimigos[i]!= null)
				{
					this.ListaDeInimigos[i].Update();
				}
			}
			
			//movimento boss
			for(var i =0; i <this.ListaB.length; i++)
			{
				if(this.ListaB[i]!= null)
				{
					this.ListaB[i].Update();
				}
			}
			
			//spawn inimigos
			if(this.delay2 <= 0)
			{
		
				this.enemy = new MySprite("Imagem/teste2.png",0,0,121,122,800,Math.random()*500,121,122,2,10);
				this.enemy.vel_x = -(Math.random()*5) - 1;
				this.ListaDeInimigos.push(this.enemy);
				this.delay2 = 70;
			
			}
			
			if(this.Pontos < 100) //eu mudei o valor- Shad
			{
				this.Boss = new MySprite("Imagem/boss1.png",0,0,235,221,this.BossPosX,this.BossPosY,this.BossPosW,this.BossPosH,2,10);
				this.BossPosX = 560
				this.BossPosY = 150
				this.BossPosW = 235
				this.BossPosH = 221
				this.ListaB.push(this.Boss);
				this.Music.pause();
				this.Music2.play();

				//if(this.BossPosX >
				
				/*if(this.BossPosY + this.BossPosH > this.BossPosY + this.BossPosH)
				{
					this.navePosY += this.nave.vel_Y -3.5
				}*/
				
				/*if(this.BossPosY == 560)
					this.BossPoX ==  */
				
				
			}
			
		
			
			//if(this.Boss
			
			if(this.PontosB == 100)
			{
				cenaAtual = cena.GANHOU;
				this.Music.pause();
			}
			
			if(this.Pontos == 30)
			{
				cenaAtual = cena.LEVEL02;
				this.Music.pause();
			}
			
			//colisao tiro e inimigo sumiu \o/
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
			
			for(var i = 0; i <this.ListaTiros.length; i++)
			{		
				for (var j = 0; j <this.ListaB.length; j++)
				{
					if(this.ListaB[j] != null && this.ListaTiros[i] != null)
					{
						if(this.ListaTiros[i].Collided(this.ListaB[j]))
						{
							this.ListaTiros.splice(i,1);
							this.ListaB.splice(j,100);
							this.PontosB +=1
						
						}			
					}		 
				}		
			}
			
			
			
			//colisao inimigo nave morreo ;-;
			for(var i = 0; i <this.ListaDeInimigos.length; i++)
			{
				if(this.ListaDeInimigos[i].Collided(this.nave))
				{ 
					cenaAtual = cena.MORREU;
					this.Music.pause();
					
						//this.backgroundPosX=0;
				}
			}
			
	
			
			
			this.delay --;
			this.delay2 --;
		};
		
		this.Draw = function()
		{
			
			screen.drawImage(this.background, this.backgroundPosX, 0);
			//screen.drawImage(this.backgroundT, this.backgroundTPosX, 0);
			screen.drawImage(this.background2, this.background2PosX, 0);
			screen.drawImage(this.cloud, this.cloudPosX, 0);
			screen.drawImage(this.cloud2, this.cloud2PosX, 0);
			this.nave.Draw();
			
			for(var i = 0; i <this.ListaTiros.length; i++) //estrutura de repeticao (for) tiro
			{
				if(this.ListaTiros != null)
				this.ListaTiros[i].Draw();
			}
			
			for(var i = 0; i <this.ListaDeInimigos.length; i++)
			{
				if(this.ListaDeInimigos[i] != null)
				{
					this.ListaDeInimigos[i].Draw();
				}
			}	
			
			for(var i = 0; i <this.ListaB.length; i++)
			{
				if(this.ListaB[i] != null)
				{
					this.ListaB[i].Draw();
				}
			}
			
			
			
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
				this.tiro =  new MySprite("Imagem/tiro.png", 0,0,19,9, this.nave.x + 70,this.nave.y+ 18,19,9,3,4);
				this.tiro.vel_x = 10;
				this.ListaTiros.push(this.tiro);
				this.delay = 15;
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
			};};
		
	}		