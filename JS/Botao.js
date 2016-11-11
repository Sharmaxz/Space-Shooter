function Botao(arquivo, tam_x, tam_y, x, y)
{
	this.button = new MySprite(arquivo, 0, 0, tam_x, tam_y, x, y, tam_x/2, tam_y/2, 2, 0);

    
    this.Draw=function()
    {   
        this.button.Draw();
    };
    
    this.Clicked = function(mouse)
    {
        this.test = new MySprite("", 0, 0, 1, 1, mouse.x - canvas.offsetLeft, mouse.y - canvas.offsetTop, 1, 1, 1, 1);

        //console.log("mouse X " + this.test.x);

        //console.log("mouse Y " + this.test.y);

        //console.log("button X " + this.button.x);

        //console.log("button Y " + this.button.y);

        if(this.button.Collided(this.test))
        {
            return true;
			//this.sx = sw;
        }
		else 
		{
			return false;
			//this.sx = 0;
		}
    };
        this.Sobre = function(mouse)
    {
        this.test = new MySprite("", 0, 0, 1, 1, mouse.x - canvas.offsetLeft, mouse.y - canvas.offsetTop, 1, 1, 1, 1);

        //console.log("mouse X " + this.test.x);

        //console.log("mouse Y " + this.test.y);

        //console.log("button X " + this.button.x);

        //console.log("button Y " + this.button.y);

        if(this.button.Collided(this.test))
        {
            this.button.sy = tam_y;
        }
        else 
        {
             this.button.sy = 0;
        }
    };
}