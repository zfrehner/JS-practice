

//zach frehner
//4/12/2020




for ( var i = 1; i <= 100; i++ )
{
    if ( i%3 === 0 && i%5 === 0 )
    {
        document.write("Hee Haw!");
    }
    else if ( i%3 === 0 )
    {
        document.write("Hee!");
    }
    else if ( i%5 === 0 )
    {
        document.write("Haw!");
    }
    else
    {
        document.write(i);
    }
    document.write('<br>');
}