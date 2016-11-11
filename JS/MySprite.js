function MySprite(file, sx, sy, sw, sh, x, y, w, h, frames, fps)//posicao inicial do sprite x, posicao inicial do sprite em y, tamanho_w, tamanho_h, posicao_x, posicao_y)
{//abre 

		//console.log("hellomySprite");
        this.img = new Image(); //cria a imagem
        this.img.src = file; //carrega o nome do arquivo "nome.ext" vindo por parâmetro

        this.tag = "";//tag para cada objeto

        this.visible = true; //so sera desenhado se essa variavel for verdadeira
		
        this.x = x;	//posicao no eixo x
        this.y = y;	// posicao no eixo y

        this.last_x;//ultima posicao
        this.last_y;

        this.vel_x = 0;	//velocidade para o eixo x
        this.vel_y = 0; // velocidade para o eixo y
        
        this.scale_x = 1; //escala no eixo x
        this.scale_y = 1; // escala no eixo y

        this.scale = 1; // escala em x e y, mantendo a proporcao
        
        this.sw = sw; // largura do frame do sprite sheet
        this.sh = sh; // altura do frame do sprite sheet
        
        this.w = w; //largura que desenhara na tela
        this.h = h; // altura que desenhara na tela
        
        this.sx = 0; // posicao inicial do quadro no sprite sheet, em x
        this.sy = 0; // em y

        this.hp = 100;//hp
		
		this.countTiroI = 0;
		
		this.hit = false;
		
		this.move = false;
        
        this.current_frame = 0; // quadro inicial, comeca de 0
        
        this.frames = frames; // quantidade de quadros da animacao
        
        this.fps = fps; // velocidade da animacao em fps

        this.time_per_frame = 1000/this.fps;

        this.setFPS = function(newFPS)
        {//abre setFPS
        
                this.fps = newFPS;
                this.time_per_frame = 5100/this.fps;
                
        }//fecha setFPS
        
        this.delta_time = 0; // variaveis para setar a mudanca de quadros de acordo como tempo
        
        this.acumulated_delta_time = 0
        
        this.last_draw_time = 0;
        
        this.Update = function()
        {//abre update
				this.x += this.vel_x;
				this.y += this.vel_y;
        }//fecha update
        
        this.Draw = function()//funcao desenhar (draw)
        {//abre draw
                
                if(this.visible) //so dezenha se .visible for true
                screen.drawImage(this.img,						//outro metodo do drawImage com outros parametros, onde ele escolhe que parte da figura total ele vai desenhar
                                 this.sw*this.current_frame,
                                 this.sy,
                                 this.sw,
                                 this.sh,
                                 this.x,
                                 this.y,
                                 this.w*this.scale_x*this.scale,
                                 this.h*this.scale_y*this.scale);
                                        
                this.delta_time = Date.now() - this.last_draw_time;
                
                if(this.acumulated_delta_time > this.time_per_frame) //funcao para mudar de quadro de acordo com o tempo
                {//abre if
                        
                        this.acumulated_delta_time = 0;
                        this.current_frame++;
                        if(this.current_frame >= this.frames)
                        {//abre if
                        
                                this.current_frame = 0;
                                
                        }//fecha if
                        
                }//fecha if
                else
                {//abre else
                
                        this.acumulated_delta_time += this.delta_time;
                        
                }//fecha if
                
                this.last_draw_time = Date.now();
                
        }//fecha draw
        this.Collided = function(other) // colisao do mySprite com qualquer outro objeto
        {
            if
                (
                    this.x + this.w*this.scale_x*this.scale < other.x //obj1 à esquerda do obj2

                    ||

                    this.x > other.x + other.w*other.scale_x*other.scale //obj1 à direita do obj2

                    ||

                    this.y + this.h*this.scale_y*this.scale < other.y //obj1 acima do obj2

                    ||

                    this.y > other.y + other.h*other.scale_x*other.scale //obj1 abaixo do obj2
                )
            {
                return false;
            }
            else
            {
                return true;
            }
        }//fecha collided       
        
}//fecha 