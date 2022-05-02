namespace SMOS.Model;

public class Design
{
    public Design(string filename, string artist,string name)
    {
        Filename = filename;
        Artist = artist;
        Name = name;
    }

    public string Filename { get; }
    public string Artist { get; }
    public string Name { get; }
}