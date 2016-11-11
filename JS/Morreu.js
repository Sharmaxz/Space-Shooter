	function Morreu()
	{
		//essa parte é lida quando se cria o objeto dessa classe
	
		this.background = new  Image();//imagem bg morreo
		this.background.src = "Imagem/morreo1.jpg";
		this.backgroundPosX= 0;
		
		this.Music = new Audio(); //Musica de morte
		this.Music.src ="Sons/morreo.mp3"; 
		
		this.morreu = new MySprite("Imagem/morreoT.jpg", 0, 0, 800, 600, 0, 0, 800, 600, 2, 2);

		this.Update = function()
		{
			this.Music.play();
			
		};
		
		this.Draw = function()
		{
			//screen.drawImage(this.background, this.backgroundPosX, 0);
			this.morreu.Draw();
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
				
			}
		};
			
		this.key_up = function(key)
		{};
		
	}		